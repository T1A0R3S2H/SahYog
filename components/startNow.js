// components/StartNowButton.js
"use client";

import React from 'react';
import { signIn } from 'next-auth/react';

const StartNowButton = () => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      Start Now
    </button>
  );
}

export default StartNowButton;
