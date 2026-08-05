import { players } from "@/data/players";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Player({

params,

}:{

params:Promise<{slug:string}>

}){

const {slug}=await params;

const player=players.find(p=>p.slug===slug);

if(!player) return notFound();

return(

<section className="container py-32">

<div className="grid lg:grid-cols-2 gap-20">

<Image

src={player.photo}

alt={player.name}

width={700}

height={900}

className="rounded-3xl"

/>

<div>

<h1 className="text-6xl font-black">

{player.name}

</h1>

<p className="text-blue-400 text-3xl mt-5">

#{player.number}

</p>

<div className="mt-12 space-y-4 text-xl">

<p>Позиция: {player.position}</p>

<p>Возраст: {player.age}</p>

<p>Рост: {player.height} см</p>

<p>Вес: {player.weight} кг</p>

</div>

<p className="mt-10 text-xl leading-9">

{player.description}

</p>

</div>

</div>

</section>

);

}