'use strict';
const modal=document.querySelector('#detail-dialog');
modal.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const items=[...modal.querySelectorAll('button:not([disabled]),a[href],select,input,textarea,[tabindex="0"]')].filter(el=>el.getClientRects().length);const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
