"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_user, paymentform) => {
    await connectDB()
    console.log('Connected to DB');
    
    // Fetch the SECRET of the user who wants to receive the payment
    let user = await User.findOne({ username: to_user })
    if (!user) {
        throw new Error(`User ${to_user} not found`);
    }
    console.log('User found:', user);

    const secret = user.razorpaysecret

    // Create a new instance of Razorpay
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    // Create a new order
    let options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
        receipt: `receipt#${Date.now()}`, // Make receipt unique
        notes: {
            key1: "value3",
            key2: "value2"
        }
    }

    let x = await instance.orders.create(options)
    console.log('Order created:', x);

    // Create a payment object which shows a pending payment
    let payment = await Payment.create({ oid: x.id, amount: amount, to_user: to_user, name: paymentform.name, message: paymentform.message })
    console.log('Payment saved to DB:', payment);

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    console.log('Connected to DB for fetching user');
    
    let u = await User.findOne({ username: username })
    if (u) {
        let user = u.toObject({ flattenObjectIds: true })
        console.log('User fetched:', user);
        return user
    }
    console.log('User not found');
    return null
}

export const fetchpayments = async (username) => {
    await connectDB()
    console.log('Connected to DB for fetching payments');
    
    // Find all payments sorted by decreasing order of amounts and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    console.log('Payments fetched:', p);
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    console.log('Connected to DB for updating profile');

    // Assuming data is an object, no need to use Object.fromEntries
    let ndata = { ...data };

    // If username is being updated, check if username is available
    if (ndata.username !== oldusername) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "User already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // return { success: true }
        // Now update all the usernames in the Payment table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    } else {
        await User.updateOne({ email: ndata.email }, ndata)
        // return { success: true }
    }
}
