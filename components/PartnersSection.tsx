export default function PartnersSection() {

    return (

<section className="py-20">

<div className="container">

<h2 className="section-title">
Партнеры клуба
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{["Rostic's","Партнер","Партнер","Партнер"].map((partner)=>(

<div
key={partner}
className="card flex items-center justify-center h-36 text-xl font-bold"
>

{partner}

</div>

))}

</div>

</div>

</section>

    );
