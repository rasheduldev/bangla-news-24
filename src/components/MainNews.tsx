import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string
    imageAlt: string

}
const MainNews = ({ mainNews }:{mainNews:News[]}) => {
  const [ firstNews, ...othersNews ] = mainNews;
  // const otherNews = mainNews.slice(1)
  // console.log(otherNews)
  return (
    <div className="flex gap-3">
      <Link href={`/news/${firstNews.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image width={600} height={600} src={firstNews.imageUrl} alt={firstNews.imageAlt} />
        </figure>
        <div className="card-body">
        <p className="text-red-500 font-bold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      </Link>
      <div className="grid gap-4">
      {
          othersNews.slice(0,4).map(other=> <div key={other.id} className="card
          bg-base-100 border border-gray-300 p-5">
            <p className="text-red-500 font-bold">{firstNews.category}</p>
            <div>{other.title}</div>
            </div>
             )
            }
            </div>
    </div>
  );
};

export default MainNews;
