import React from 'react';

const Profile = ({ params }) => {
    const username = params.username.replace(/%20/g, ' ');

    return (
        <>
            {/* banner */}
            <div className='text-white cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-[350]' src="/banner-tarsh.png" alt="" />

                {/* profile picture */}
                <div className='absolute -bottom-14 left-1/2 transform -translate-x-1/2 border-white border-2 rounded-lg overflow-hidden'>
                    <img className="rounded" width={100} height={100} src="/me.jpg" alt="" />
                </div>
            </div>

            {/* info div */}
            <div className="info flex justify-center items-center my-20 flex-col text-white gap-1">
                    <h1 className="text-white text-2xl font-bold">{username}</h1>
                    <div className='text-slate-300'>Fullstack Web Developer</div>
                    <div className='text-slate-300'>
                        Creating beautiful websites
                    </div>
                </div>
        </>
    );
};

export default Profile;
