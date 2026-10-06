import NewsCard from '@/components/NewsCard';
import { notFound } from 'next/navigation';
import React from 'react';

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}
const CategoryNewsPage = async({params}:{params:{categoryId:string}}) => {
    const {categoryId} =await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    
    const categoryNews:News[] = data.data
    if(!categoryNews){
        notFound()
    }
    return (
        <div className=''>
            <h2 className='font-bold text-2xl text-red-700 border-b-2 border-red-800 mb-5'>{data.title}</h2>
            
            <div className='grid grid-cols-3 gap-3'>
                {
                    categoryNews.map(news=> <NewsCard news={news} key={news.id}></NewsCard> )
                }
            </div>
        </div>
    );
};

export default CategoryNewsPage;