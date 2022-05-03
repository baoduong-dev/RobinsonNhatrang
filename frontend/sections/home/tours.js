import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Tours() {
    return (
        <div className='mt-20 py-20 bg-blue-50'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center'>
                    <div className='flex flex-col space-y-6'>
                        <h2 className='text-2xl font-bold text-zinc-900 uppercase'>
                            Tour nổi bật nhất
                        </h2>
                        <p className='text-gray-600 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div>
                            <a href="tel:0938511948" className='btn bg-robin-100 text-white font-medium hover:bg-blue-500 hover:text-white inline-block'>
                                Gọi ngay
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <a href='#'>
                            <div className='tour-item w-full h-96 rounded-xl shadow-xl relative overflow-hidden'>
                                <img src='/images/tour-1.jpg' alt='tour-1' className='w-full h-full object-cover object-center' />
                                <div className='absolute bottom-0 left-0 w-full p-4'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-white text-xl font-bold'>
                                            Tour 3 đảo Robinson - Hòn Tằm - Làng Chài
                                        </h3>
                                        <div className='flex space-x-2 text-yellow-400 mt-4'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href='#'>
                            <div className='tour-item w-full h-96 rounded-xl shadow-xl relative overflow-hidden'>
                                <img src='/images/tour-2.jpg' alt='tour-2' className='w-full h-full object-cover object-center' />
                                <div className='absolute bottom-0 left-0 w-full p-4'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-white text-xl font-bold'>
                                            Tour 3 đảo Robinson - Hòn Tằm - Làng Chài
                                        </h3>
                                        <div className='flex space-x-2 text-yellow-400 mt-4'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
