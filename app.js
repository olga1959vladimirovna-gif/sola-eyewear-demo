'use strict';
document.documentElement.classList.add('js');
const models = {
  "daily": {
    "key": "daily",
    "family": "daily",
    "name": "Daily",
    "shape": "Прямоугольная",
    "color": "Тёмный эспрессо",
    "swatch": "#3d261c",
    "tag": "Чёткий силуэт",
    "image": "daily.webp",
    "copy": "Собранный силуэт с широкими дужками. Для образов, в которых хочется чётких линий."
  },
  "daily-noir": {
    "key": "daily-noir",
    "family": "daily",
    "name": "Daily Noir",
    "shape": "Прямоугольная",
    "color": "Глянцевый чёрный",
    "swatch": "#202222",
    "tag": "Глубокий чёрный",
    "image": "daily-noir.webp",
    "copy": "Чёткая прямоугольная форма в глянцевом чёрном оттенке. Сдержанный акцент для повседневного гардероба."
  },
  "daily-sand": {
    "key": "daily-sand",
    "family": "daily",
    "name": "Daily Sand",
    "shape": "Прямоугольная",
    "color": "Прозрачный шампань",
    "swatch": "#c5ac83",
    "tag": "Светлый акцент",
    "image": "daily-sand.webp",
    "copy": "Прямоугольный силуэт в полупрозрачном оттенке шампань. Более лёгкое визуальное настроение знакомой формы."
  },
  "weekend": {
    "key": "weekend",
    "family": "weekend",
    "name": "Weekend",
    "shape": "Округлая",
    "color": "Прозрачный мёд",
    "swatch": "#c78d3c",
    "tag": "Мягкие линии",
    "image": "weekend.webp",
    "copy": "Мягкие линии и полупрозрачный медовый оттенок. Для расслабленного настроения и повседневных сочетаний."
  },
  "weekend-smoke": {
    "key": "weekend-smoke",
    "family": "weekend",
    "name": "Weekend Smoke",
    "shape": "Округлая",
    "color": "Дымчатый серый",
    "swatch": "#7a8183",
    "tag": "Спокойный оттенок",
    "image": "weekend-smoke.webp",
    "copy": "Округлая оправа в дымчато-сером оттенке. Мягкий силуэт и прохладная нейтральная палитра."
  },
  "weekend-rose": {
    "key": "weekend-rose",
    "family": "weekend",
    "name": "Weekend Rose",
    "shape": "Округлая",
    "color": "Прозрачный розовый",
    "swatch": "#c79899",
    "tag": "Нежный цвет",
    "image": "weekend-rose.webp",
    "copy": "Мягкая округлая форма с полупрозрачным розовым оттенком. Деликатная цветовая деталь в привычном образе."
  },
  "muse": {
    "key": "muse",
    "family": "muse",
    "name": "Muse",
    "shape": "Кошачий глаз",
    "color": "Прозрачная олива",
    "swatch": "#697345",
    "tag": "Выразительный акцент",
    "image": "muse.webp",
    "copy": "Приподнятые уголки и оливковый оттенок. Выразительная деталь, которая меняет настроение всего образа."
  },
  "muse-wine": {
    "key": "muse-wine",
    "family": "muse",
    "name": "Muse Wine",
    "shape": "Кошачий глаз",
    "color": "Глубокий бордо",
    "swatch": "#682b3a",
    "tag": "Насыщенный цвет",
    "image": "muse-wine.webp",
    "copy": "Силуэт «кошачий глаз» в глубоком бордовом оттенке. Заметный цвет и выразительная линия оправы."
  },
  "muse-crystal": {
    "key": "muse-crystal",
    "family": "muse",
    "name": "Muse Crystal",
    "shape": "Кошачий глаз",
    "color": "Прозрачный кристалл",
    "swatch": "#c8d9df",
    "tag": "Прозрачная оправа",
    "image": "muse-crystal.webp",
    "copy": "Прозрачная оправа с приподнятыми уголками. Внимание к форме без насыщенного цвета."
  }
};
const dialog=document.querySelector('#detail-dialog');
const content=document.querySelector('#dialog-content');
let opener=null;
let currentModel='daily';
let dialogModel=null;
const articles={
 shape:{title:'Как найти свою форму',body:'<p>Необязательно начинать с таблицы типов лица. В первую очередь попробуйте понять, какой характер оправы вам нравится: собранный, мягкий или выразительный.</p><h3>Сравните несколько силуэтов</h3><p>Прямоугольная оправа добавляет чёткие линии. Округлая воспринимается мягче. Приподнятые уголки «кошачьего глаза» создают заметный акцент. Это описание визуального впечатления, а не универсальные правила.</p><h3>Посмотрите на привычный гардероб</h3><p>Представьте очки с вещами, которые носите чаще всего. Нейтральная тёмная оправа и полупрозрачный цвет могут создавать разное настроение даже при похожей форме.</p><h3>Не забудьте о посадке</h3><p>Сравните размеры с удобной парой очков, которая у вас уже есть. Фотография и виртуальный образ не заменяют примерку.</p>'},
 care:{title:'Чтобы любимая пара оставалась любимой',body:'<p>Руководствуйтесь инструкцией производителя именно вашей модели: материалы и покрытия могут требовать разного ухода.</p><h3>Храните в футляре</h3><p>Выбирайте футляр подходящего размера. Не кладите очки линзами вниз и не оставляйте их под тяжёлыми предметами.</p><h3>Очищайте бережно</h3><p>Используйте чистую салфетку для оптики и средство, подходящее для покрытия линз. Не протирайте линзы краем одежды: пыль и грубая ткань могут повредить поверхность.</p><h3>Берегите от перегрева</h3><p>Не оставляйте очки в нагретом автомобиле. Следуйте указаниям производителя по хранению и очистке.</p>'},
 size:{title:'Как читать размеры на дужке',body:'<p>На внутренней стороне дужки часто встречается маркировка вроде <strong>52 □ 18 - 145</strong>. Это пример, а не параметры моделей SOLA.</p><ul><li><strong>52</strong> - ширина одной линзы в миллиметрах.</li><li><strong>18</strong> - ширина мостика.</li><li><strong>145</strong> - длина дужки.</li></ul><p>Запишите маркировку удобной пары и сравните её с карточкой выбранного товара. Общая ширина оправы и особенности конструкции тоже влияют на посадку.</p><p>Если размер не указан, уточните его у продавца. Не определяйте размер по изображению на экране.</p>'},
 purchase:{title:'Покупка на Wildberries',body:'<p>Сейчас вы смотрите демонстрацию дизайна. Бренд SOLA и модели вымышлены, изображения созданы ИИ. Оплатить заказ или оставить заявку здесь нельзя.</p><h3>Как будет работать готовый сайт</h3><p>У каждой реальной модели появится кнопка перехода на её карточку в Wildberries. Там покупатель увидит цену, характеристики, наличие, доставку и условия возврата.</p><p>Для запуска нужны фотографии, каталог и ссылки на товары от владельца бренда.</p>'}
};
function openDialog(html,trigger){opener=trigger;content.innerHTML=html;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;dialog.querySelector('.dialog-close').focus({preventScroll:true});}
function articleMarkup(key){const a=articles[key];return `<div class="dialog-body"><p class="overline">SOLA / ${key==='purchase'?'О демо':'Журнал'}</p><h2 id="dialog-title">${a.title}</h2>${a.body}${key==='purchase'&&dialogModel?'<button class="text-button dialog-back" data-back-model>Вернуться к модели</button>':''}</div>`;}
function showModel(key,trigger){const m=models[key];dialogModel=key;openDialog(`<div class="dialog-model"><div class="dialog-model-image"><img src="assets/${m.image}" alt="${m.shape} оправа ${m.name}" width="900" height="500"></div><div class="dialog-body"><p class="overline">Демонстрационная модель</p><h2 id="dialog-title">${m.name}</h2><p>${m.copy}</p><dl><div><dt>Форма</dt><dd>${m.shape}</dd></div><div><dt>Оттенок концепта</dt><dd>${m.color}</dd></div><div><dt>Размеры и цена</dt><dd>Пока не указаны</dd></div></dl><p class="dialog-note">Изображение создано ИИ. Реальные материалы, свойства линз и параметры предоставит бренд.</p><button class="button" data-purchase>Как купить на Wildberries <span aria-hidden="true">↗</span></button></div></div>`,trigger);}
document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>showModel(b.dataset.model,b)));
document.querySelectorAll('[data-article]').forEach(b=>b.addEventListener('click',()=>{dialogModel=null;openDialog(articleMarkup(b.dataset.article),b);}));
content.addEventListener('click',e=>{if(e.target.closest('[data-purchase]')){content.innerHTML=articleMarkup('purchase');dialog.scrollTop=0;dialog.querySelector('.dialog-close').focus({preventScroll:true});}else if(e.target.closest('[data-back-model]'))showModel(dialogModel,opener);});
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(opener?.isConnected)opener.focus({preventScroll:true});});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.filter;let count=0;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('[data-product]').forEach(card=>{card.hidden=key!=='all'&&card.dataset.product!==key;if(!card.hidden){count++;card.classList.remove('just-shown');void card.offsetWidth;card.classList.add('just-shown');}});document.querySelector('#filter-status').textContent=key==='all'?'Показаны все 9 вариантов':`Показано вариантов: ${count}`;}));
document.querySelector('#shape-select').addEventListener('change',e=>{currentModel=e.target.value;const m=models[currentModel];const img=document.querySelector('#compare-image');img.src='assets/'+m.image;img.alt=`${m.shape} оправа ${m.name}`;img.classList.remove('image-switch');void img.offsetWidth;img.classList.add('image-switch');document.querySelector('.compare-word').textContent=m.name.split(' ')[0].toLowerCase();document.querySelector('#compare-name').textContent=m.name;document.querySelector('#compare-copy').textContent=m.copy;document.querySelector('#compare-details').innerHTML=`Рассмотреть ${m.name} <span aria-hidden="true">↗</span>`;});
document.querySelector('#compare-details').addEventListener('click',e=>showModel(currentModel,e.currentTarget));
