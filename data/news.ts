export interface News {

    id:number;

    title:string;

    slug:string;

    date:string;

    category:string;

    cover:string;

    excerpt:string;

    content:string[];

}

export const news:News[]=[

{

id:1,

title:"Продление контракта",

slug:"contract",

date:"2 августа 2026",

category:"Клуб",

cover:"/news/news1.jpg",

excerpt:"Полузащитник остается в составе команды.",

content:[

"Футбольный клуб «Разрыватели» сообщает о продлении контракта с полузащитником команды.",

"Игрок продолжит защищать цвета клуба в новом сезоне.",

"Желаем новых побед!"

]

},

{

id:2,

title:"Предсезонная подготовка",

slug:"training",

date:"1 августа 2026",

category:"Команда",

cover:"/news/news2.jpg",

excerpt:"Команда продолжает подготовку к сезону.",

content:[

"Футболисты продолжают ежедневные тренировки.",

"Главная задача — подойти к старту чемпионата в оптимальной форме."

]

},

{

id:3,

title:"Матч против соперника",

slug:"match-preview",

date:"31 июля 2026",

category:"Матчи",

cover:"/news/news3.jpg",

excerpt:"Представляем анонс ближайшей встречи.",

content:[

"3 августа команда проведет очередной матч.",

"Начало встречи в 13:00."

]

}

];