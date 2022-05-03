import React from 'react';
import Image from 'next/image'
import { FaSwimmingPool, FaUmbrellaBeach } from 'react-icons/fa';
import { RiSailboatFill } from 'react-icons/ri';
import { MdSpa } from 'react-icons/md';

export default function Resort() {
    return (
        <div className='mt-20'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center'>
                    <div>
                        <div className='w-full h-420px md:h-600px shadow-2xl rounded-3xl relative overflow-hidden'>
                            <Image src='/images/resort-1.jpg' alt='resort-1' layout='fill' className='w-full h-full object-cover object-center' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold text-zinc-900 uppercase'>
                            Tiện nghi resort Robinson
                        </h2>
                        <p className='text-gray-600 text-base font-normal mt-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='flex flex-col space-y-4 mt-10'>
                            <div className='flex space-x-4 items-center'>
                                <div className='w-16 h-16 flex items-center justify-center bg-blue-50 text-robin-100 rounded-full'>
                                    <FaSwimmingPool className='w-8 h-8' />
                                </div>
                                <p className='text-xl text-gray-700'>
                                    Hồ bơi vô cực
                                </p>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <div className='w-16 h-16 flex items-center justify-center bg-blue-50 text-robin-100 rounded-full'>
                                    <RiSailboatFill className='w-8 h-8' />
                                </div>
                                <p className='text-xl text-gray-700'>
                                    Khám phá đảo với thuyền
                                </p>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <div className='w-16 h-16 flex items-center justify-center bg-blue-50 text-robin-100 rounded-full'>
                                    <MdSpa className='w-8 h-8' />
                                </div>
                                <p className='text-xl text-gray-700'>
                                    Spa
                                </p>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <div className='w-16 h-16 flex items-center justify-center bg-blue-50 text-robin-100 rounded-full'>
                                    <FaUmbrellaBeach className='w-8 h-8' />
                                </div>
                                <p className='text-xl text-gray-700'>
                                    Hoạt động vui chơi trên biển
                                </p>
                            </div>

                        </div>
                        <div className='mt-10'>
                            <a href='#' className='btn px-8 py-3 bg-robin-100 text-white font-medium hover:bg-blue-500 hover:text-white inline-block'>
                                Xem thêm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
