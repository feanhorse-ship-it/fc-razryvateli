import Link from "next/link";
import Image from "next/image";

import { Player } from "@/data/players";

export default function PlayerCard({player}:{player:Player}){

return(

<Link href={`/squad/${player.slug}`}>

<div className="bg-[#0C2855] rounded-3xl overflow-hidden hover:scale-[1.03] transition">

<Image

src={player.photo}

alt={player.name}

width={600}

height={800}

className="h-[420px] w-full object-cover"

/>

<div className="p-6">

<div className="flex justify-between">

<h2 className="text-2xl font-bold">

{player.name}

</h2>

<span className="text-4xl text-blue-400 font-black">

#{player.number}

</span>

</div>

<p className="mt-4 text-slate-300">

{player.position}

</p>

{player.captain && (

<div className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded-full">

Капитан

</div>

)}

</div>

</div>

</Link>

);

}