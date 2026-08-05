export default function SquadPreview() {

return(

<section className="py-20">

<div className="container">

<h2 className="section-title">
Состав
</h2>

<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

{["Вратарь","Защитник","Полузащитник","Нападающий","Капитан"].map((player)=>(

<div
key={player}
className="card p-8 text-center"
>

<div className="text-6xl mb-5">
⚽
</div>

<h3 className="font-bold">
{player}
</h3>

<p className="text-slate-400 mt-2">
ФК Разрыватели
</p>

</div>

))}

</div>

</div>

</section>

);

}