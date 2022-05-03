import React from 'react';
import { FaUsers, FaGifts } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';

export default function Achievements() {
    return (
        <div className='achievements'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 space-x-0 md:space-x-32'>
                    <div className='flex items-center space-x-3'>
                        <FaUsers className='w-14 h-14 text-gray-900' />
                        <div>
                            <p className='text-xl text-robin-100 font-bold'>
                                1 triệu +
                            </p>
                            <p className='text-lg text-gray-700 mt-1'>
                                Lượt tham quan mỗi năm
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <BiLike className='w-14 h-14 text-gray-900' />
                        <div>
                            <p className='text-xl text-robin-100 font-bold'>
                                100%
                            </p>
                            <p className='text-lg text-gray-700 mt-1'>
                                Khách hàng hài lòng
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <FaGifts className='w-14 h-14 text-gray-900' />
                        <div>
                            <p className='text-xl text-robin-100 font-bold'>
                                Giá tốt
                            </p>
                            <p className='text-lg text-gray-700 mt-1'>
                                Bảo vệ về giá
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <HiOutlineSupport className='w-14 h-14 text-gray-900' />
                        <div>
                            <p className='text-xl text-robin-100 font-bold'>
                                24/7
                            </p>
                            <p className='text-lg text-gray-700 mt-1'>
                                Đội ngũ hỗ trợ tận tình
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
