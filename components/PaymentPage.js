"use client";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { fetchpayments, initiate } from '@/actions/useractions';
// import { useSession } from 'next-auth/react';
import { fetchuser } from '@/actions/useractions';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    // const formattedUsername = username.replace(/%20/g, ' ');
    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    // const { data: session } = useSession();
    const searchParams = useSearchParams()
    const router = useRouter();

    // to get the data
    useEffect(() => {
        getData()
    }, [])

    // if successful payment
    useEffect(() => {
        // if (searchParams.get("paymentdone")==true && session){
        if (searchParams.get("paymentdone") === "true") {
            toast.success('Payment has been made!')
        }
        router.push(`/${username}`)
    }, [])

    // handle the change in form
    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform)
    }

    // fetching the data
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments);
    }

    // payment
    const pay = async (amount) => {
        // get the orderId
        // console.log(username)
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            // "key": process.env.NEXT_PUBLIC_KEY_ID,
            "key": currentUser.razorpayid,
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "SahYog", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }



    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



            {/* main ui */}
            <div className='relative w-full bg-red-50'>
                <img className='object-cover w-full h-[40vh]' src={currentUser.cover} alt="" />
                <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border-2 rounded-lg overflow-hidden'>
                    <img className="rounded" width={150} height={150} src={currentUser.profile} alt="" />
                </div>
            </div>


            <div className="info flex justify-center items-center my-24 flex-col text-white gap-1">
                {/* <h1 className="text-white text-2xl font-bold">{formattedUsername}</h1> */}
                {/* <h1 className="text-white text-2xl font-bold">Hi, Im {currentUser.name}</h1> */}
                <h1 className="text-white text-2xl font-bold">Hi, I&apos;m {currentUser.name}</h1>
                
                {/* <div className='text-slate-300'>Lets help {currentUser.usernam}s works</div> */}
                <div className='text-slate-300'>
                    {payments.length} Payment(s) received || ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>

                <div className="payments flex justify-center gap-3 w-[80%] mt-10">
                    <div className="max-w-sm w-1/2 m-3 p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800">
                        <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Supporters</h2>
                        <ul className="overflow-hidden">
                            {payments.length == 0 && <li className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 whitespace-normal break-words">No Payments Yet!</li>}
                            {payments.map((p, i) => {
                                return (
                                    // <li key={i} className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 whitespace-normal break-words">{p.name} donated <span className='font-bold'>₹{p.amount}</span> and said "{p.message}"</li>
                                    <li key={i} className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 whitespace-normal break-words">{p.name} donated <span className='font-bold'>₹{p.amount}</span> and said &quot;{p.message}&quot;</li>
                                )
                            })}

                            {/* <li className="mb-2 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400 whitespace-normal break-words">Shubham donated <span className='font-bold'>₹400</span> and said I support you bro. Lots of ❤️</li> */}

                        </ul>
                    </div>

                    <div className="max-w-sm w-1/2 md:w-1/2 m-3 p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800">
                        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">Contribute</h1>
                        <form className="flex flex-col mb-3">

                            <input onChange={handleChange} value={paymentform.name} type="text" name="name" placeholder="Enter Name" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
                            <input onChange={handleChange} value={paymentform.message} type="text" name="message" placeholder="Enter Message" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
                            <input onChange={handleChange} value={paymentform.amount} type="text" name="amount" placeholder="Enter Amount" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />

                            <button
                                onClick={() => pay(Number.parseInt(paymentform.amount))}
                                type="button"
                                className="px-4 py-2 border-gray-300 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-md disabled:from-red-700 disabled:to-red-600"
                                disabled={!(paymentform.name?.length >= 3 && paymentform.message?.length >= 5 && paymentform.amount != null && paymentform.amount > 0)}
                            >
                                Pay Here
                            </button>
                        </form>

                        <p className="mb-3 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">Or choose one from here</p>
                        <div className="flex flex-col justify-center gap-2">
                            <button type="button" className="text-white bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => pay(100)}>₹100</button>
                            <button type="button" className="text-white bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => pay(200)}>₹200</button>
                            <button type="button" className="text-white bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => pay(500)}>₹500</button>
                        </div>
                    </div>
                </div>
            </div>
            <button id="rzp-button1">Pay Now</button>
        </>
    );
};

export default PaymentPage;
