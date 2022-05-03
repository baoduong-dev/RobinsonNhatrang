import React from 'react';

export default function Content() {
  return (
    <div className='mt-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-zinc-900 pt-4 text-center relative before:content-[""] before:absolute before:h-0.5 before:w-24 before:top-0 before:left-1/2 before:bg-robin-100 before:-translate-x-2/4'>
          Vài nét về Robinson Nha Trang
        </h2>
        <div className='mt-10'>
          <div className='flex space-x-10 items-center'>
            <div className='flex-1'>
              <h3 className='text-2xl font-bold text-zinc-900'>
                Heading 01 - H3
              </h3>
              <p className='text-base text-gray-700 mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='flex-1'>
              <img src='/images/content-01.jpg' alt='content-01' className='w-full h-350px object-cover object-center rounded-2xl' />
            </div>
          </div>

          <div className='flex flex-row-reverse space-x-10 space-x-reverse items-center mt-8'>
            <div className='flex-1'>
              <h3 className='text-2xl font-bold text-zinc-900'>
                Heading 02 - H3
              </h3>
              <p className='text-base text-gray-700 mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='flex-1'>
              <img src='/images/content-02.jpg' alt='content-01' className='w-full h-350px object-cover object-center rounded-2xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
