import React from 'react';
import { IoDiamond } from 'react-icons/io5';
import { FaUserFriends, FaChild } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Ticket() {
    return (
        <div className='mt-20 md:-mt-48'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div className='relative hidden md:block'>
                        <img src='/images/person-ticket.png' alt='person-ticket' className='z-10 relative h-520px w-auto -right-32' />
                        <div className='absolute left-0 bottom-0 w-530px h-470px bg-blue-100 rounded-xl'></div>
                    </div>
                    <div>
                        <div className='flex space-x-4 items-center'>
                            <div className='w-70px h-70px flex items-center justify-center text-white bg-robin-100 rounded-md border-4 border-white shadow-xl'>
                                <IoDiamond className='h-10 w-10' />
                            </div>
                            <h2 className='font-bold text-2xl md:text-4xl text-zinc-900'>
                                Vé lên đảo Robinson
                            </h2>

                        </div>
                        <p className='mt-6 text-gray-600 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 w-full'>
                            <div className='flex-auto flex space-x-4'>
                                <div className='w-70px h-70px bg-blue-50 rounded-lg text-robin-100 flex items-center justify-center'>
                                    <FaUserFriends className='h-8 w-8' />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-lg text-gray-800'>
                                        Vé người lớn
                                    </p>
                                    <p className='text-2xl font-bold text-robin-100'>
                                        100.000đ
                                        <span className='text-sm font-normal text-gray-600 ml-2'>
                                            / vé
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className='flex-auto flex space-x-4'>
                                <div className='w-70px h-70px bg-blue-50 rounded-lg text-robin-100 flex items-center justify-center'>
                                    <FaChild className='h-8 w-8' />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-lg text-gray-800'>
                                        Vé người lớn
                                    </p>
                                    <p className='text-2xl font-bold text-robin-100'>
                                        50.000đ
                                        <span className='text-sm font-normal text-gray-600 ml-2'>
                                            / vé
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 mt-6 bg-blue-50 text-lg flex space-x-2 md:items-center'>
                            <AiOutlineInfoCircle className='text-robin-100 w-8 md:w-5 h-8 md:h-5' />
                            <p className='text-gray-700'>
                                <span className='text-robin-100'>
                                    Đã bao gồm:
                                </span>
                                {' '}
                                Vé lên đảo, đua thuyền Kajax, Ghế bãi biển, Tắm nước ngọt
                            </p>
                        </div>
                        <div className='mt-6'>
                            <a href="tel:0938511948" className='btn py-3 px-5 bg-robin-100 text-white font-medium hover:bg-blue-500 hover:text-white inline-block uppercase'>
                                Gọi ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
