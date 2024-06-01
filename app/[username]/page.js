import PaymentPage from '@/components/PaymentPage';
import React from 'react';
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb';
import User from '@/models/User';

const Profile = async ({ params }) => {
    // if the username is not present in the db, then show a 404 page
    const checkUser = async () => {
        await connectDB()
        let u = await User.findOne({ username: params.username })
        if (!u) {
            return notFound()
        }
    }
    await checkUser()

    return (
        <>
            <PaymentPage username={params.username} />
        </>
    );
};

export default Profile;
