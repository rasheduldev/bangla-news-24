import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headlines {
    id:string 
    title:string
}
const Marquee = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines:Headlines[] = data.data
    return (
        <div className="bg-red-700 text-white">
            <div className="flex max-w-7xl mx-auto" >
            <h2 className="font-bold bg-red-800 py-1 px-5">সর্বশেষ</h2>
            <MarqueeText className="py-1" direction="right" duration={10}>
            {
                headlines.map(headline=><Link href={`/news/${headline.id}`} key={headline.id}>
                    <span>{headline.title}</span>
                    <span className="mx-5">•</span>
                                        </Link>
                )
            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;