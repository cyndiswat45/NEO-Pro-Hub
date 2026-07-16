document.addEventListener('DOMContentLoaded',()=>{
 const s=document.getElementById('search');
 if(!s)return;
 s.addEventListener('input',()=>{
  const q=s.value.toLowerCase();
  document.querySelectorAll('.card').forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none';
  });
 });
});
