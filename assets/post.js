(function(){
  document.querySelectorAll('figure img').forEach(function(im){
    im.addEventListener('click',function(){
      var o=document.createElement('div'); o.className='lb';
      var i=document.createElement('img'); i.src=im.src; i.alt=im.alt;
      o.appendChild(i);
      function close(){ o.remove(); document.removeEventListener('keydown',k); }
      function k(e){ if(e.key==='Escape') close(); }
      o.addEventListener('click',close);
      document.addEventListener('keydown',k);
      document.body.appendChild(o);
    });
  });
})();