import { news } from "@/data/news";

import Image from "next/image";

import { notFound } from "next/navigation";

export default async function Article({

params,

}:{

params:Promise<{slug:string}>

}){

const {slug}=await params;

const article=news.find(n=>n.slug===slug);

if(!article) return notFound();

return(

<section className="container py-32 max-w-5xl">

<p className="text-blue-400">

{article.category}

</p>

<h1 className="text-6xl font-black mt-4">

{article.title}

</h1>

<p className="text-slate-400 mt-4">

{article.date}

</p>

<Image

src={article.cover}

alt={article.title}

width={1200}

height={700}

className="rounded-3xl mt-10"

/>

<div className="mt-12 space-y-8 text-xl leading-9">

{article.content.map((text,index)=>(

<p key={index}>

{text}

</p>

))}

</div>

</section>

);

}