import { news } from "@/data/news";
import NewsCard from "./NewsCard";

export default function NewsSection(){

return(

<section className="container py-20">

<div className="flex justify-between items-center mb-10">

<h2 className="text-5xl font-black">

Последние новости

</h2>

</div>

<div className="grid lg:grid-cols-3 gap-8">

{news.slice(0,3).map(item=>(

<NewsCard

key={item.id}

item={item}

/>

))}

</div>

</section>

);

}
