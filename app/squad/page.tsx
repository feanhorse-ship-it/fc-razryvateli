import { players } from "@/data/players";
import PlayerCard from "@/components/PlayerCard";

export default function Squad(){

const goalkeepers=players.filter(p=>p.position==="Вратарь");

const defenders=players.filter(p=>p.position==="Защитник");

const midfielders=players.filter(p=>p.position==="Полузащитник");

const forwards=players.filter(p=>p.position==="Нападающий");

return(

<div className="container py-32 space-y-20">

<h1 className="text-6xl font-black">

Команда

</h1>

<Group title="Вратари" players={goalkeepers}/>

<Group title="Защитники" players={defenders}/>

<Group title="Полузащитники" players={midfielders}/>

<Group title="Нападающие" players={forwards}/>

</div>

);

}

function Group({title,players}:any){

return(

<section>

<h2 className="text-4xl font-bold mb-8">

{title}

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{players.map((player:any)=>(

<PlayerCard

key={player.id}

player={player}

/>

))}

</div>

</section>

);

}