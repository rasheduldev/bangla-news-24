import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}
export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSections:IOtherSection[] = sections.slice(1)
  // console.log(otherSections)
  return (
    <div>
      
      <div className="grid grid-cols-3 gap-5 mt-5 ">
        {/* news section */}
        <div className=" col-span-2 ">
              <MainNews mainNews={mainNews}></MainNews>
              <div className="grid gap-5 mt-5">
                {
                  otherSections.map(os=> <div
                  className=" pb-1"
                  key={os.curationId}>
                    <h1 className="font-bold border-red-700 border-b-2">{os.title}</h1>
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {
                        os.articles.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                      }
                    </div>
                  </div> )
                }
              </div>
        </div>
        {/* most read section */}
        <div className=" col-span-1 ">
         <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
