import React from 'react';
import Link from 'next/link';

const HomeSection: React.FC = () => {
  return (
    <section className="bg-gray-50 p-8 px-10 min-h-screen">
      <div className="max-w-7xl mx-auto text-center pt-32">
        <h1 className="text-6xl font-bold text-gray-800">
          Access Course <span className='text-primary-green'> Materials</span> <br /> Anytime, Anywhere
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Your one-stop portal for course materials, videos, and more.
        </p>
        <div className="mt-8">
          <Link href="/courses" className="bg-primary-green text-white px-6 py-3 rounded-md">
            Explore Courses
          </Link>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        <div className="bg-primary-green bg-opacity-10 border border-primary-green shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Simple Access</h2>
          <p className="mt-4 text-gray-600">
            Students can easily browse and download course materials.
          </p>
        </div>
        <div className="bg-primary-green bg-opacity-10 border border-primary-green shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Secure Uploads</h2>
          <p className="mt-4 text-gray-600">
            Lecturers can securely upload and manage course content.
          </p>
        </div>
        <div className="bg-primary-green bg-opacity-10 border border-primary-green shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Collaborative Learning</h2>
          <p className="mt-4 text-gray-600">
            Comment on materials and engage in discussions.
          </p>
        </div>
      </div>

      <div className="text-center mt-14">
        <p className="text-lg text-gray-600 mb-6">
          <strong>Lecturers:</strong> Sign up/sign in here to edit and upload materials using your staff ID.
        </p>
        <Link href="/login" className="bg-primary-green text-white px-6 py-3 rounded-md">
          Sign In
        </Link>
        <span className="mx-4 text-gray-600">or</span>
        <Link href="/signup" className="bg-primary-green text-white px-6 py-3 rounded-md">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
