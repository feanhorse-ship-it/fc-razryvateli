export interface Player{

id:number;

name:string;

slug:string;

number:number;

position:"Вратарь"|"Защитник"|"Полузащитник"|"Нападающий";

age:number;

height:number;

weight:number;

captain:boolean;

photo:string;

description:string;

}

export const players:Player[]=[

{

id:1,

name:"Илья Лопатин",

slug:"ilya-lopatin",

number:13,

position:"Вратарь",

age:16,

height:187,

weight:70,

captain:true,

photo:"/players/player1.png",

description:"Основной вратарь клуба."

},

{

id:2,

name:"Ростислав Порошин",

slug:"rostic-poroshin",

number:37,

position:"Защитник",

age:16,

height:184,

weight:80,

captain:false,

photo:"/players/player2.png",

description:"Центральный защитник команды. Также является запасным вратарём."

},

{

id:3,

name:"Артём Третьяков",

slug:"tema-tretyakov",

number:21,

position:"Полузащитник",

age:15,

height:185,

weight:73,

photo:"/players/player3.png",

captain:false,

description:"Левый полузащитник."

},

{

id:4,

name:"Даниил Яворский",

slug:"daniil-yavorskiy",

number:12,

position:"Полузащитник",

age:16,

height:176,

weight:60,

captain:false,

photo:"/players/player4.png",

description:"Правый полузащитник."

},

{

id:5,

name:"Иван Кутленков",

slug:"vanya-kutlenkov",

number:1,

position:"Защитник",

age:15,

height:180,

weight:68,

captain:false,

photo:"/players/player4.png",

description:"Центральный защитник."

},

{

id:6,

name:"Всеволод Сергеев",

slug:"seva-serg",

number:47,

position:"Защитник",

age:15,

height:185,

weight:110,

captain:false,

photo:"/players/player4.png",

description:"Центральный защитник."

},

{

id:7,

name:"Александр Еловего",

slug:"alexandr-elovego",

number:92,

position:"Защитник",

age:16,

height:175,

weight:60,

captain:false,

photo:"/players/player4.png",

description:"Правый защитник."

},

{

id:8,

name:"Платон Цветков",

slug:"barbos",

number:7,

position:"Нападающий",

age:16,

height:180,

weight:68,

captain:false,

photo:"/players/player4.png",

description:"Центральный форвард. Кличка - Барбос."

},


];





