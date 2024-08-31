'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const SignUpPage: React.FC = () => {
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<string | null>(''); 
  const [currentStep, setCurrentStep] = useState(0);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(1);
    setStatus('Searching database for lecturer details...');

    // Simulate searching the database
    setTimeout(() => {
      setCurrentStep(2);
      setStatus('Lecturer details found. Sending email for account activation...');

      // Simulate sending an email
      setTimeout(() => {
        setCurrentStep(3);
        setStatus('Email has been sent. Please check your inbox for activation instructions.');
        setCurrentStep(4);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="min-h-screen justify-center bg-gray-100 grid grid-cols-[35%_65%]">
      <form onSubmit={handleSignUp} className="bg-white p-12 rounded shadow-md">
        <Image src="/abu-logo.png" alt="abu-logo" width={70} height={70}></Image>
        <h1 className="text-3xl font-bold mt-6">Welcome to <span className='text-primary-green'>EduShare</span></h1>
        <p className="mt-2 text-sm opacity-60">Your gateway to all course materials, resources, and study guides, making learning accessible anytime, anywhere.</p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Lecturer Sign-Up</h2>
        <label className="block my-4">
          <span className="text-gray-700">Staff ID</span>
          <input
            type="text"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="mt-2 block w-full border border-primary-green p-2 rounded-md"
            placeholder='Enter your staff id'
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
        <button
          type="submit"
          className="bg-primary-green text-white px-4 py-2 rounded w-full mt-5"
          disabled={currentStep !== 0}
        >
          Sign Up
        </button>
        {status && (
          <p className="mt-4 text-sm text-center text-primary-green">
            {status}
          </p>
        )}
        <p className="mt-4 text-sm text-center">
          Already signed up?{' '}
          <Link href="/login" className="text-primary-green underline">
            Login here
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

export default SignUpPage;
