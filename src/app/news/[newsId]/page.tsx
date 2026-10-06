import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
// interface News {
//     id: string;
//     title: string;
//     description: string;
//     category: string;
//     imageUrl: string |null
//     imageAlt: string
// }

const NewsDetailsPage = async({params}:{params:{newsId:string}}) => {
    const {newsId} =await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data 
    if(!news){
        notFound()
    }
    return (
        <div>
           <h2 className='font-bold text-3xl my-2'>{news.title}</h2>
           {/* image */}
            <Image className='w-auto h-auto' src={news.imageUrl} alt={news.title} width={600} height={600}></Image>
            <p className='my-2 text-xl'>{news.text}</p>
        </div>

    );
};

export default NewsDetailsPage;