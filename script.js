

const SUPABASE_URL = "https://kmikbflcshgyfueevzkf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-XnjQfKEjS_feiIOYzr3Qg_56Dfca50;

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
const profiles=[
 {name:"Laura",age:24,zone:"Zaragoza centro",img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80"},
 {name:"Sofía",age:28,zone:"Delicias",img:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80"},
 {name:"Valentina",age:32,zone:"Actur",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80"},
 {name:"Ángela",age:26,zone:"Centro",img:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80"},
 {name:"Mireya",age:29,zone:"Movera",img:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=700&q=80"}
];
document.getElementById("perfiles").innerHTML=profiles.map(p=>`
<article class="card"><img src="${p.img}" alt="Foto de perfil de ${p.name}"><div class="info">
<span class="available">● Disponible</span><h3>${p.name}</h3><div>♥ ${p.age} años</div><div>⌖ ${p.zone}</div>
<button onclick="alert('Perfil de ${p.name}')">Ver perfil</button></div></article>`).join("");
