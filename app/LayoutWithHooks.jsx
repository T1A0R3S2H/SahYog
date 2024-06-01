'use client';
import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LayoutWithHooks = ({ children }) => {
  const { data: session } = useSession();
  const [navbarHeight, setNavbarHeight] = useState(64);
  const [footerHeight, setFooterHeight] = useState(50);
  const navbarRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current && footerRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-10">
        <Navbar session={session} signOut={signOut} />
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_50%,#000_100%,transparent_100%)]" />
      <div
        className="absolute top-[navbarHeight] left-0 right-0 bottom-[footerHeight] overflow-y-auto pt-0 pb-4"
        style={{ top: `${navbarHeight}px`, bottom: `${footerHeight}px` }}
      >
        {children}
      </div>
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWithHooks;