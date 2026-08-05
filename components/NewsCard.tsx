import Link from "next/link";
import Image from "next/image";

import { News } from "@/data/news";

export default function NewsCard({item}:{item:News}){

return(

<Link href={`/news/${item.slug}`}>

<article className="rounded-3xl overflow-hidden bg-[#0C2855] hover:scale-[1.02] duration-300">

<Image

src={item.cover}

alt={item.title}

width={700}

height={450}

className="w-full h-64 object-cover"

/>

<div className="p-6">

<span className="text-blue-400 text-sm">

{item.category}

</span>

<h2 className="text-2xl font-bold mt-2">

{item.title}

</h2>

<p className="mt-3 text-slate-300">

{item.excerpt}

</p>

<p className="mt-5 text-sm text-slate-500">

{item.date}

</p>

</div>

</article>

</Link>

);

}