'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

const validCredentials = {
  staffId: '123456',
  password: 'password123'
};

const LoginPage: React.FC = () => {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    // Simulate login process
    setTimeout(() => {
      if (staffId === validCredentials.staffId && password === validCredentials.password) {
        // Set login status in local storage
        localStorage.setItem('loggedIn', 'true');
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen justify-center bg-gray-100 grid grid-cols-[35%_65%]">
      <form onSubmit={handleLogin} className="bg-white p-12 rounded shadow-md">
        <Image src="/abu-logo.png" alt="abu-logo" width={70} height={70} />
        <h1 className="text-3xl font-bold mt-6">Welcome to <span className='text-primary-green'>EduShare</span></h1>
        <p className="mt-2 text-sm opacity-60">Your gateway to all course materials, resources, and study guides, making learning accessible anytime, anywhere.</p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Lecturer Login</h2>
        <label className="block my-4">
          <span className="text-gray-700">Staff ID</span>
          <input
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            className="mt-2 block w-full border border-primary-green p-2 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 mt-4">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 block w-full border border-primary-green p-2 rounded-md"
          />
        </label>

        <p className="text-sm text-gray-500 mt-2 text-center">
          Please note: This login system is not connected to the school database. Use the following test credentials:
          <br />
          <strong>Staff ID: 123456</strong> and <strong>Password: password123</strong>
        </p>
        
        <button
          type="submit"
          className="bg-primary-green text-white px-4 py-2 rounded w-full mt-5"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Login'}
        </button>
        {error && (
          <p className="mt-4 text-red-500 text-center">
            {error}
          </p>
        )}
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary-green underline">
            Sign up here
          </Link>
        </p>
        <div className="mt-6 text-center">
          <Link href="/" className="text-primary-green underline">
            &larr; Back to Home
          </Link>
        </div>
      </form>
      <div className="relative bg-[url('/abu.jpeg')] h-full w-full bg-cover bg-center flex items-center justify-center">
        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      </div>
    </div>
  );
};

export default LoginPage;
