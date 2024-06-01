"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 12 and above
import React, { useState, useEffect } from 'react';
import { fetchuser, updateProfile } from '@/actions/useractions';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const { data: session, status, update } = useSession(); // Get the session and its status
  const router = useRouter();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (status === 'loading') {
      // If session status is still loading, set loading state to true
      setLoading(true);
    } else {
      // If session status has resolved, set loading state to false
      setLoading(false);
      // If there's no session, redirect to the login page
      if (!session) {
        router.push('/');
      } else {
        // Fetch user data only if session is available
        getData();
      }
    }
  }, [router, session, status]);


  // useEffect(() => {
  //   if (searchParams.get("paymentdone") === "true") {
  //     toast.success('Payment has been made!')
  //   }
  //   router.push(`/${username}`)
  // }, [])


  const getData = async () => {
    if (session && session.user && session.user.name) {
      let u = await fetchuser(session.user.name);
      setForm(u);
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handleSubmit function
  const handleSubmit = async (e) => {
    // e.preventDefault();
    update();
    let a = await updateProfile(form, session.user.name);
    console.log(a);
    toast.success('Form has been updated!');
  }

  if (loading) {
    // Render loading state while session status is still loading
    return <div>Loading...</div>;
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />

      <div className='text-white'>
        <h1 className='text-3xl font-bold text-center m-10'>Welcome to Dashboard</h1>

        <div className="details flex justify-center">
          <form className="flex flex-col mb-3 w-[40%]" action={handleSubmit}>
            <div className='w-full flex flex-col'>
              <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name="name" id="name" placeholder="Enter Name" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name="email" id="email" placeholder="Enter your email id" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name="username" id="username" placeholder="Enter your username" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              <input value={form.profile ? form.profile : ""} onChange={handleChange} type="text" name="profile" id="profile" placeholder="Enter the link of your Profile Picture " className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              <input value={form.cover ? form.cover : ""} onChange={handleChange} type="text" name="cover" id="cover" placeholder="Enter the link of your Cover Picture " className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              {/* input razorpay credentials */}
              <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" placeholder="Enter your Razorpay ID" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
              <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" placeholder="Enter your Razorpay SECRET" className="text-black px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2" />
            </div>
            <div>
              <button type="submit" className="text-center px-4 py-2 mt-2 border-gray-300 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
