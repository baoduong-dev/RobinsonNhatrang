import React from 'react';
import { FaTree, FaBuilding } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import { ImTicket } from 'react-icons/im';

export default function Services() {
  return (
    <div className='home-service'>
      <div className='container mx-auto px-4'>
        <p className='sub-title'>
          Dịch vụ
        </p>
        <h2 className='title'>
          Dịch vụ của chúng tôi
        </h2>
        <p className='text-gray-700 text-lg mt-5 max-w-4xl text-center mx-auto'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className='relative mt-20'>
          <div className='relative md:absolute md:top-20 md:left-2/4'>
            <div className='relative'>
              <div className='md:absolute md:top-0 md:left-0 w-full md:w-370px h-300px md:h-420px shadow-2xl md:origin-bottom md:-rotate-12 z-10 '>
                <img src='/images/service-bg-01.jpg' alt='service-bg-01' className='w-full h-full object-cover object-center' />
              </div>
              <div className='absolute top-20 left-40 w-370px h-420px shadow-2xl origin-bottom rotate-12 z-0 hidden md:block'>
                <img src='/images/service-bg-02.jpg' alt='service-bg-01' className='w-full h-full object-cover object-center' />
              </div>
            </div>
          </div>
          <div className='md:w-350px flex flex-col space-y-4 justify-center items-center my-10 md:my-0'>
            <div className='w-90px h-90px rounded-lg bg-robin-100 text-white flex items-center justify-center'>
              <FaTree className='w-11 h-14' />
            </div>
            <h3
              className='text-2xl md:text-3xl font-bold text-gray-900'
            >
              Tour
            </h3>
            <p
              className='text-gray-600 text-lg text-center'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className='relative mb-10 md:top-10 md:left-40 md:w-350px flex flex-col space-y-4 justify-center items-center'>
            <div className='w-90px h-90px rounded-lg bg-robin-100 text-white flex items-center justify-center'>
              <FaBuilding className='w-11 h-14' />
            </div>
            <h3
              className='text-2xl md:text-3xl font-bold text-gray-900'
            >
              Lưu trú
            </h3>
            <p
              className='text-gray-600 text-lg text-center'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className='relative mb-10 md:-top-10 md:left-32rem md:w-350px flex flex-col space-y-4 justify-center items-center'>
            <div className='w-90px h-90px rounded-lg bg-robin-100 text-white flex items-center justify-center'>
              <MdRestaurant className='w-11 h-14' />
            </div>
            <h3
              className='text-2xl md:text-3xl font-bold text-gray-900'
            >
              Nhà hàng
            </h3>
            <p
              className='text-gray-600 text-lg text-center'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className='relative mb-10 md:bottom-72 md:left-3/4 md:w-350px flex flex-col space-y-4 justify-center items-center'>
            <div className='w-90px h-90px rounded-lg bg-robin-100 text-white flex items-center justify-center'>
              <ImTicket className='w-11 h-14' />
            </div>
            <h3
              className='text-2xl md:text-3xl font-bold text-gray-900'
            >
              Vé tham quan
            </h3>
            <p
              className='text-gray-600 text-lg text-center'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
