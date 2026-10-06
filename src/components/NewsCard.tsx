import Image from 'next/image';
import React from 'react';
import { News } from './MainNews';
import Link from 'next/link';

const NewsCard = ({news}:{news:News}) => {
    // console.log(news)
    return (
            <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm">
                    <figure>
                      <Image width={600} height={600} src={news.imageUrl} alt={news.imageAlt || news.title} />
                    </figure>
                    <div className="card-body">
                    <p className="text-red-500 font-bold">{news.category}</p>
                      <h2 className="card-title">{news.title}</h2>
                      <p>{news.description}</p>
                    </div>
                  </div>
            </Link>

    );
};

export default NewsCard;