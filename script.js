const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuButton.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const photos=[...document.querySelectorAll('.photo')];const box=document.querySelector('.lightbox');const boxImg=box.querySelector('img');const caption=box.querySelector('figcaption');let current=0;
function showPhoto(index){current=(index+photos.length)%photos.length;const item=photos[current];boxImg.src=item.dataset.full;boxImg.alt=item.querySelector('img').alt;caption.textContent=item.dataset.caption||'';box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closePhoto(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow='';}
photos.forEach((photo,i)=>photo.addEventListener('click',()=>showPhoto(i)));
box.querySelector('.lightbox-close').addEventListener('click',closePhoto);
box.querySelector('.lightbox-prev').addEventListener('click',()=>showPhoto(current-1));
box.querySelector('.lightbox-next').addEventListener('click',()=>showPhoto(current+1));
box.addEventListener('click',e=>{if(e.target===box)closePhoto();});
document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')showPhoto(current-1);if(e.key==='ArrowRight')showPhoto(current+1);});
