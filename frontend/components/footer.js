import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center'>
          <p className='flex-auto text-base md:text-lg text-gray-700'>
            <span className='font-semibold'>Robinson Nha Trang</span> © 2022. <span className='font-semibold'>All Rights Reserved</span>.
          </p>
          <div className='flex space-x-2 mt-4 md:mt-0'>
            <a href='https://www.facebook.com/robinson.nhatrang/' className='flex justify-center items-center w-10 h-10 text-robin-100 bg-blue-50 rounded-full'>
              <FaFacebookF />
            </a>
            <a href='https://www.facebook.com/robinson.nhatrang/' className='flex justify-center items-center w-10 h-10 text-robin-100 bg-blue-50 rounded-full'>
              <FaTwitter />
            </a>
            <a href='https://www.facebook.com/robinson.nhatrang/' className='flex justify-center items-center w-10 h-10 text-robin-100 bg-blue-50 rounded-full'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
