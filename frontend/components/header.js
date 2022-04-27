import React from 'react';
import { IoCall } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

export default function Header() {
    return (
        <header className='header'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href='/'>
                            <img src='/images/logo-robinson.png' alt='Robinson' />
                        </a>
                    </div>
                    <div className='justify-center items-center'>
                        <nav className='hidden md:flex'>
                            <div className='flex flex-row items-center'>
                                <div>
                                    <a className='py-2 px-4 text-lg font-normal text-robin-200 hover:text-robin-100'>Tour</a>
                                </div>
                                <div>
                                    <a className='py-2 px-4 text-lg font-normal text-robin-200 hover:text-robin-100'>Dịch vụ</a>
                                </div>
                                <div>
                                    <a className='py-2 px-4 text-lg font-normal text-robin-200 hover:text-robin-100'>Lưu trú</a>
                                </div>
                                <div>
                                    <a className='py-2 px-4 text-lg font-normal text-robin-200 hover:text-robin-100'>Nhà hàng</a>
                                </div>
                                <div>
                                    <a className='py-2 px-4 text-lg font-normal text-robin-200 hover:text-robin-100'>Liên hệ</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div>
                        <a href="tel:0938511948" className='btn border border-solid border-robin-100 bg-transparent text-robin-100 font-medium hover:bg-robin-100 hover:text-white hidden md:inline-flex'>
                            <span className='inline-flex shrink-0 self-center mr-2'>
                                <IoCall />
                            </span>
                            Gọi ngay
                        </a>
                        <button
                            className='btn border border-solid border-robin-100 bg-transparent text-robin-100 font-medium hover:bg-robin-100 hover:text-white inline-flex md:hidden'
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
