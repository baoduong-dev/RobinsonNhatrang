import React from 'react';

export default function GridBlogItem({ image }) {
    return (
        <div className='relative rounded-xl overflow-hidden bg-white shadow-xl'>
            <a href='#'>
                <img src={image} alt='blog-item-01' className='rounded-xl w-full h-300px object-cover object-center' />
            </a>
            <div className='px-6 py-8'>
                <div className='flex flex-col space-y-4'>
                    <div>
                        <a href='#' className='text-zinc-900'>
                            <h3 className='text-lg font-bold'>
                                Kinh nghiệm du lịch Nha Trang
                            </h3>
                        </a>
                    </div>
                    <p className='text-gray-600 text-base'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div>
                        <a href="#" className='btn bg-robin-100 text-white font-medium hover:bg-blue-500 hover:text-white inline-block'>
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
