const hubSearch=[
 {title:'Ripcho Studio Dashboard',url:'customers/ripcho/',tags:'ripcho production workflows printing packages'},
 {title:'UG / CP Workflow',url:'customers/ripcho/ug-workflow.html',tags:'underclass ug cp tnj import retouch proof packing'},
 {title:'Retakes Workflow',url:'customers/ripcho/retakes.html',tags:'retake merge original job background swap'},
 {title:'Spring Portrait Workflow',url:'customers/ripcho/spring-portraits.html',tags:'spring portraits proof orders'},
 {title:'Sports / Memory Mate Workflow',url:'customers/ripcho/sports.html',tags:'sports mm memory mate team photos'},
 {title:'Composite Workflow',url:'customers/ripcho/composites.html',tags:'composite import mapping konica copies'},
 {title:'Products & Packages',url:'customers/ripcho/products-packages.html',tags:'package flyer value pack digital download service items'},
 {title:'Printing',url:'customers/ripcho/printing.html',tags:'noritsu konica dye sub labels stickers directories'},
 {title:'Forms & Downloads',url:'customers/ripcho/forms-downloads.html',tags:'progress sheets forms checklist flyer template'},
 {title:'Troubleshooting',url:'customers/ripcho/troubleshooting.html',tags:'duplicate record background tint queue bitmap error'},
 {title:'Training Center',url:'customers/ripcho/training.html',tags:'new employee onboarding training checklist terminology'}
];
document.addEventListener('DOMContentLoaded',()=>{
 const dialog=document.querySelector('.search-dialog'), input=document.querySelector('#global-search'), results=document.querySelector('#search-results');
 const open=()=>{dialog.hidden=false;setTimeout(()=>input.focus(),0)}; const close=()=>{dialog.hidden=true};
 document.querySelectorAll('[data-open-search]').forEach(el=>el.addEventListener('click',open)); document.querySelectorAll('[data-close-search]').forEach(el=>el.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();open()}if(e.key==='Escape')close()});
 if(input) input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();const hits=q?hubSearch.filter(x=>(x.title+' '+x.tags).toLowerCase().includes(q)):hubSearch.slice(0,5);results.innerHTML=hits.length?hits.map(x=>`<a class="search-result" href="${location.pathname.includes('/customers/ripcho/')?'../../':''}${x.url}"><strong>${x.title}</strong><span>${x.tags}</span></a>`).join(''):'<p>No matching documentation yet.</p>'});
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.top-nav');if(toggle)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
});
