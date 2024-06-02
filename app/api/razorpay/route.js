import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    try {
        await connectDB();

        let body = await req.formData();
        body = Object.fromEntries(body);

        console.log("Received body:", body);

        // Check if Razorpay order ID is present on the server
        let p = await Payment.findOne({ oid: body.razorpay_order_id });
        if (!p) {
            console.log("Order ID not found:", body.razorpay_order_id);
            return NextResponse.json({ success: false, message: "Order ID not found" });
        }

        // fetch the SECRET of the user who wants to receive the payment
        let user = await User.findOne({username: p.to_user})
        const secret = user.razorpaysecret

        // Verify the payment
        let xx = validatePaymentVerification(
            {
                "order_id": body.razorpay_order_id,
                "payment_id": body.razorpay_payment_id
            },
            body.razorpay_signature,
            secret
        );

        console.log("Payment verification result:", xx);

        if (xx) {
            // Update the payment status
            const updatedPayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { done: "true" },
                { new: true }
            );

            console.log("Updated payment:", updatedPayment);

            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
            );
        }

        if (!xx) {
            return NextResponse.json({ success: false, message: "Payment Verification Failed" });
        }
    } catch (error) {
        console.error("Error in payment processing:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" });
    }
};
