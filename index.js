import{a as d,S as u,i as o}from"./assets/vendor-C9vNCoLC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",m="50800814-f0ce8c424259a5db94c3e389b";async function y(r){return(await d.get(g,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
    display: block;
    margin: 0 auto;
  position: relative;
  width: 85px;
  height: 50px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0);
  background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
  animation: rikSpikeRoll 0.65s linear infinite alternate;
}
@keyframes rikSpikeRoll {
0% { background-size: 10px 3px;}
16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
}
`}],l=document.querySelector(".gallery");let s;function h(r){const n=r.map(({webformatURL:a,largeImageURL:p,tags:e,likes:t,views:i,comments:c,downloads:x})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${p}">
          <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${c}</p>
          <p><b>Downloads</b> ${x}</p>
        </div>
        </a>
      </li>`).join("");l.innerHTML=n,s?s.refresh():s=new u(".gallery a")}function b(){l.innerHTML=""}function k(){const r=document.querySelector(".loader-wrapper"),{html:n,css:a}=f[0];r.innerHTML=n;const p=document.createElement("style");p.id="loader-style",p.textContent=a,document.head.appendChild(p),r.style.display="block"}function L(){const r=document.querySelector(".loader-wrapper");r.innerHTML="",r.style.display="none"}const w=document.querySelector(".form");w.addEventListener("submit",async r=>{r.preventDefault();const n=r.target.elements["search-text"].value.trim();if(!n){o.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}b(),k();try{const a=await y(n);if(!a.hits.length){o.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a.hits)}catch(a){o.error({title:"Error",message:a.message,position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
