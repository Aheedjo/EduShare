import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green bg-opacity-30 border-t-4 border-primary-green text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-gray-800 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-800 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-800 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
          <p className="mt-4 text-gray-800">123 School Lane, City, Country</p>
          <p className="mt-2 text-gray-800">Email: info@school.edu</p>
          <p className="mt-2 text-gray-800">Phone: +123 456 7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-gray-800 hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="text-gray-800 hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="text-gray-800 hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
