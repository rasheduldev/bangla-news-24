interface MostReadNews{
    id:string
    title:string
}
const MostRead = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news:MostReadNews[] = data.data
    console.log(news)
    return (
        <div className="card bg-base-100 p-2 border border-gray-300">
            <h2 className="font-bold text-red-700 mb-3">সর্বাধিক পঠিত</h2>

            <div className="grid gap-5">
                {
                    news.map((n,i)=> <div className="flex gap-2" key={n.id}>
                      <p className="font-semibold text-red-600">{i+1}</p> <h2>{n.title}</h2>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MostRead;