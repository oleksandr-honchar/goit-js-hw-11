import{a as f,S as m,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="50800814-f0ce8c424259a5db94c3e389b";async function y(s){return(await f.get(p,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery");let l;function h(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><br> ${t}</p>
          <p><b>Views</b><br> ${i}</p>
          <p><b>Comments</b><br> ${u}</p>
          <p><b>Downloads</b><br> ${d}</p>
        </div>
      </li>`).join("");c.innerHTML=r,l?l.refresh():l=new m(".gallery a")}function b(){c.innerHTML=""}function L(){document.body.classList.add("loading")}function v(){document.body.classList.remove("loading")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}b(),L();try{const o=await y(r);if(!o.hits.length){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch(o){n.error({title:"Error",message:o.message,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
