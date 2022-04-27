import React from 'react';

export default function Tours() {
    return (
        <div className='mt-20 py-20 bg-blue-50'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center'>
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

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
