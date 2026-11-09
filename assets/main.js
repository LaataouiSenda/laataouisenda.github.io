const $ = id => document.getElementById(id);
$("newsList").innerHTML = news.map(n=>`<li><time>${n[0]}</time><span>${n[1]}</span></li>`).join("");
$("focusList").innerHTML = focus.map(f=>`<div><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("");
$("projectList").innerHTML = projects.map(p=>`<div class="item">
  <h3>${p.featured?'<span class="star">*</span>':""}${p.link?`<a href="${p.link}">${p.title}</a>`:p.title}</h3><div class="meta">${p.meta}</div>
  <p>${p.text}</p><div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div></div>`).join("");
$("pathList").innerHTML = path.map(e=>`<div class="item"><h3>${e[0]}</h3><div class="meta">${e[1]}</div><p>${e[2]}</p></div>`).join("");
$("teachList").innerHTML = teaching.map(t=>`<div class="item"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join("");
$("postList").innerHTML = posts.length ? posts.map(p=>`<div class="item"><h3>${p.featured?'<span class="star">*</span>':""}<a href="${p.link}">${p.title}</a></h3><div class="meta">${p.date}</div><p>${p.summary}</p></div>`).join("") : '<p class="empty">First article coming soon.</p>';
$("yr").textContent = new Date().getFullYear();

const root = document.documentElement;
try{const s=localStorage.getItem("theme"); if(s) root.dataset.theme=s;}catch(e){}
$("theme").onclick = () => {
  const dark = root.dataset.theme ? root.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
};

/* Background: a slow drifting network of nodes (a nod to neural nets) */
(()=>{
  const c=$("bg"), x=c.getContext("2d"), still=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w,h,dpr,pts=[],col="122,79,199",raf;
  const rgb=()=>{const v=getComputedStyle(root).getPropertyValue("--accent").trim();
    const m=v.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i); if(m) col=[1,2,3].map(i=>parseInt(m[i],16)).join(",");};
  const size=()=>{dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;c.width=w*dpr;c.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.min(55,Math.round(w*h/30000));
    pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:1+Math.random()*1.4}));rgb();};
  const D=150;
  const draw=()=>{
    x.clearRect(0,0,w,h);
    for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<-10)p.x=w+10;if(p.x>w+10)p.x=-10;if(p.y<-10)p.y=h+10;if(p.y>h+10)p.y=-10;}
    for(let i=0;i<pts.length;i++){
      const a=pts[i];
      for(let j=i+1;j<pts.length;j++){const b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
        if(d<D){x.strokeStyle=`rgba(${col},${.16*(1-d/D)})`;x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}
      x.fillStyle=`rgba(${col},.4)`;x.beginPath();x.arc(a.x,a.y,a.r,0,6.283);x.fill();
    }
    if(!still) raf=requestAnimationFrame(draw);
  };
  size(); draw();
  addEventListener("resize",()=>{cancelAnimationFrame(raf);size();draw();});
  document.addEventListener("visibilitychange",()=>{cancelAnimationFrame(raf);if(!document.hidden&&!still)draw();});
  $("theme").addEventListener("click",()=>setTimeout(()=>{rgb();if(still)draw();},0));
})();

const links=[...document.querySelectorAll("#nav a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle("on",l.hash==="#"+e.target.id))}}),{rootMargin:"-30% 0px -60% 0px"});
document.querySelectorAll("section").forEach(s=>io.observe(s));
