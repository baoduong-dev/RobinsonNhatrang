import React from 'react';
import GridBlogItem from '../../components/gridBlogItem';

export default function Blogs() {
  return (
    <div className='mt-20 py-20 bg-blue-50'>
        <div className='container mx-auto px-4'>
            <p
                className='sub-title'
            >
                Bài viết
            </p>
            <h2
                className='title'
            >
                Bài viết mới nhất
            </h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-3 mt-10'>
                <div>
                    <GridBlogItem image="/images/blog-item-01.jpg" />
                </div>
                <div>
                    <GridBlogItem image="/images/blog-item-02.jpg" />
                </div>
                <div>
                    <GridBlogItem image="/images/blog-item-03.jpg" />
                </div>
            </div>
        </div>
    </div>
  );
}
