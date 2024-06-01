import Navbar from '@/components/Navbar'
import StartNowButton from '@/components/startNow'
import Image from 'next/image'
import React from 'react'
import ReadMoreButton from '@/components/readMore'

function page() {
  return (
    <>
      <div className="flex gap-5 justify-center text-white items-center align-center h-[44vh] flex-col">

        <div className="font-bold text-5xl mt-5 flex items-center">
          <Image
            src="/main-logo.png"
            alt="Logo"
            width={300}
            height={120}
          />
          {/* <span className="-ml-8">
            <img src="this.gif" alt="logo" style={{ width: 'auto', height: '100px' }} />
          </span> */}
        </div>

        <div className='flex flex-col justify-center items-center text-center gap-3'>
          <p>A support website for developers</p>
          <div className='flex justify-center items-center gap-9'>

            {/* <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start Now</button> */}
            <StartNowButton />

            {/* <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Read More</button> */}
            <ReadMoreButton />
          </div>
        </div>

      </div>

      {/*white line */}
      <div className="bg-white h-1 opacity-10">
      </div>

      {/* content after line */}
      <div className='text-white mt-5 font-bold justify-center items-center'>
        {/* <div className='text-3xl text-center m-5'><h1>Goal</h1></div> */}

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* card 1 */}
          <div className="max-w-sm m-3 p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <svg className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
              <path d="M19.7453 13C20.5362 11.8662 21 10.4872 21 9C21 5.13401 17.866 2 14 2C10.134 2 7 5.134 7 9C7 10.0736 7.24169 11.0907 7.67363 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.4375 11.6667L12.4375 6.33333M14 6.33333V5M14 13V11.6667M12.4375 9H15.5625M15.5625 9C16.0803 9 16.5 9.44772 16.5 10V10.6667C16.5 11.219 16.0803 11.6667 15.5625 11.6667H11.5M15.5625 9C16.0803 9 16.5 8.55228 16.5 8V7.33333C16.5 6.78105 16.0803 6.33333 15.5625 6.33333H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 14H5.39482C5.68897 14 5.97908 14.0663 6.24217 14.1936L8.28415 15.1816C8.54724 15.3089 8.83735 15.3751 9.1315 15.3751H10.1741C11.1825 15.3751 12 16.1662 12 17.142C12 17.1814 11.973 17.2161 11.9338 17.2269L9.39287 17.9295C8.93707 18.0555 8.449 18.0116 8.025 17.8064L5.84211 16.7503M12 16.5L16.5928 15.0889C17.407 14.8352 18.2871 15.136 18.7971 15.8423C19.1659 16.3529 19.0157 17.0842 18.4785 17.3942L10.9629 21.7305C10.4849 22.0063 9.92094 22.0736 9.39516 21.9176L3 20.0199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Contribute</h5>
            </a>
            <p className="mb-3 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">Your supporters are willing to give to help you continue your work</p>
          </div>

          {/* card 2 */}
          <div className="max-w-sm m-3 p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800">
            <svg className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
              <path d="M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Collaborate</h5>
            </a>
            <p className="mb-3 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">Your supporters are excited about the opportunity to work with you on projects</p>
          </div>
        </div>


        {/*white line */}
        {/* <div className="bg-white h-1 opacity-10 mt-5">
        </div> */}


        {/* <div className='text-3xl text-center m-5'><h1>Our Projects</h1></div> */}

      </div>




    </>
  )
}

export default page