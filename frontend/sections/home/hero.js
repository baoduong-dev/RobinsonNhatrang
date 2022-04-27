import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export default function Hero() {
    return (
        <div className='container mx-auto px-4'>
            <div className='home-hero'>
                <div>
                    <h1 className='text-5xl text-gray-900 font-bold leading-relaxed max-w-1090px z-20 relative'>
                        <span className='inline-block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent'>Ốc Đảo Robinson</span>
                        <span className='block'>Thiên Đường Bỏ Quên Hiếm Có</span>
                        Tại Nha Trang
                    </h1>
                    <div className='mt-16'>
                        <div className='flex items-center space-x-4 cursor-pointer'>
                            <BsFillPlayCircleFill className="text-robin-100 w-8 h-8" />
                            <p className='text-xl text-gray-900'>
                                Play Video
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-725px h-550px overflow-hidden absolute top-0 right-0 z-0'>
                    <img src='/images/hero-bg.jpg' className='w-full h-full object-cover object-center' alt='Robinson' />
                </div>
            </div>
        </div>
    );
}
