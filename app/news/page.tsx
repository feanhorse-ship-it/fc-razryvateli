import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";

export default function NewsPage(){

return(

<section className="container py-32">

<h1 className="text-6xl font-black mb-12">

Новости клуба

</h1>

<div className="grid lg:grid-cols-3 gap-8">

{news.map(item=>(

<NewsCard

key={item.id}

item={item}

/>

))}

</div>

</section>

);

}