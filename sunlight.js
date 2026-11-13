'use strict';
const sunFrame=document.querySelector('.hero-photo-frame');
const sunButton=document.querySelector('.sun-toggle');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let sunEnabled=!motionPreference.matches;
function syncSunlight(){const enabled=sunEnabled&&!motionPreference.matches;sunFrame.dataset.shimmer=enabled?'on':'off';sunButton.setAttribute('aria-pressed',String(enabled));sunButton.disabled=motionPreference.matches;sunButton.textContent=motionPreference.matches?'Анимация отключена':enabled?'Блики: включены':'Блики: выключены';}
sunButton.addEventListener('click',()=>{sunEnabled=!sunEnabled;syncSunlight();});
motionPreference.addEventListener('change',syncSunlight);
const sunObserver=new IntersectionObserver(entries=>{sunFrame.dataset.visible=String(entries[0].isIntersecting&&!document.hidden);});sunObserver.observe(sunFrame);
document.addEventListener('visibilitychange',()=>{sunFrame.dataset.visible=String(!document.hidden&&sunFrame.getBoundingClientRect().bottom>0&&sunFrame.getBoundingClientRect().top<innerHeight);});
syncSunlight();
