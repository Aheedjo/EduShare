'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for login status when component mounts
    const loginStatus = localStorage.getItem('loggedIn');
    setLoggedIn(loginStatus === 'true');
  }, []);

  return (
    <header className="border-b-2 border-primary-green bg-white shadow-md p-4 px-10 flex justify-between items-center fixed top-0 left-0 w-full">
      <div className="flex items-center space-x-10">
        <Link className="text-2xl font-bold text-primary-green" href="/">
          <div className='flex items-center gap-4'>
            <Image src="/abu-logo.png" alt="abu-logo" width={50} height={50} />
            <p className='text-lg font-semibold text-gray-900 mt-1'>EduShare</p>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link className="text-gray-700 hover:text-primary-green" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-primary-green" href="/courses">
            Courses
          </Link>
          <Link className="text-gray-700 hover:text-primary-green" href="/our-team">
            Our team
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {loggedIn && (
          <Link href="/dashboard" className="bg-primary-green text-white px-6 py-3 rounded-md">
            Dashboard
          </Link>
        )}
        <input
          type="text"
          placeholder="Search courses"
          className="px-3 py-2 border rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
