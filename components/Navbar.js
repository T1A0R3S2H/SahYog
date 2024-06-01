// navbar.js
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ currentRoute }) => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white flex flex-col md:flex-row md:justify-between px-4 h-auto md:h-16 items-center py-2 md:py-0">
      <div className="logo font-bold text-lg hidden md:block">
        <Link href="/">
          <img src="/main-logo.png" alt="Logo" width={75} height={75} style={{ cursor: 'pointer' }} />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2 w-full md:w-auto md:ml-auto md:flex md:items-center md:justify-end">
        {session ? (
          <>
            <div className="hidden md:block">
              Signed in as {session.user.email} <br />
            </div>

            <Link href={`/${session.user.name}`}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Profile
              </button>
            </Link>

            {currentRoute !== "dashboard" && (
              <Link href={`/${session.user.name}/dashboard`}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Dashboard
                </button>
              </Link>
            )}

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
