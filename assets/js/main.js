(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var st=0,ap=1;function grp(id,fn){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});fn(+b.dataset.v);});});}
function r(x,s){return Math.round(x/s)*s;}
function bt(){var g=+$('bt-g').value,k=g*(ap?1:.75),rice=r(k*90,25),meat=r(k*(st===2?110:150),25),yog=r(k*(st===0?45:30),10),oni=Math.max(1,Math.round(k*.5)),ghee=r(k*12,5),pots=Math.ceil(rice/2000);$('bt-gv').textContent=g;$('bt-r').textContent=(rice>=1000?(rice/1000).toFixed(2).replace(/0$/,'')+' kg':rice+' g');
 var it=[['Basmati rice',rice>=1000?(rice/1000).toFixed(2).replace(/0$/,'')+' kg':rice+' g','wash and soak 30 min'],[st===2?'Mixed vegetables &amp; paneer':(st===0?'Meat, marinated raw':'Meat, cooked in gravy'),meat>=1000?(meat/1000).toFixed(2).replace(/0$/,'')+' kg':meat+' g',st===2?'cut in even pieces':'bone-in for flavour'],['Yogurt',yog+' g','whisked smooth'],['Onions to fry',oni+(oni>1?' large':' large')+' onions','sliced thin, fried golden'],['Ghee',ghee+' g','for layering and finishing'],['Parboil rice to',st===0?'70%':'75%',st===0?'firm centre, it finishes with raw meat':'a touch softer for cooked gravy']];
 $('bt-l').innerHTML=it.map(function(x){return '<li><b>'+x[1]+'</b>'+x[0]+'<br><span>'+x[2]+'</span></li>';}).join('');
 var dum=st===0?(g>12?'45 to 55 minutes':'35 to 45 minutes'):(g>12?'25 to 30 minutes':'20 to 25 minutes');$('bt-n').innerHTML='Keep on dum for about <b>'+dum+'</b> on very low heat over a tawa. '+(pots>1?'This is a big batch: cook it in '+pots+' pots so the steam reaches every layer.':'One wide, heavy pot is perfect.');
 var L=st===2?[['#9BC36B',3,'vegetables'],['#F1E2C6',1,'yogurt'],['#FBF3E4',4,'rice'],['#C07A2C',1,'onions'],['#F6C85F',1.5,'saffron rice']]:[['#8B3A2A',3,st===0?'raw meat':'meat gravy'],['#FBF3E4',4,'rice'],['#C07A2C',1,'onions &amp; mint'],['#F6C85F',1.5,'saffron rice']];
 $('bt-ly').innerHTML=L.map(function(l){return '<i style="--c:'+l[0]+';--f:'+l[1]+'" data-l="'+l[2].replace('&amp;','&')+'"></i>';}).join('');}
if($('bt-g')){$('bt-g').addEventListener('input',bt);grp('bt-s',function(v){st=v;bt();});grp('bt-a',function(v){ap=v;bt();});bt();}
var SP=[["cardamom", "Green cardamom", "#7BA34A", 6, "pods"], ["clove", "Cloves", "#5A2E1E", 6, ""], ["cinnamon", "Cinnamon stick", "#A0522D", 1, "inch"], ["bayleaf", "Bay leaves", "#8A9A4B", 2, ""], ["shahjeera", "Caraway (shahi jeera)", "#3B2A1A", 1, "tsp"], ["pepper", "Black peppercorns", "#2B2B2B", 8, ""], ["mace", "Mace (javitri)", "#D9822B", 1, "blade"], ["star", "Star anise", "#6B3A24", 1, ""]],LV=['gentle','balanced','bold'];
function sp(){var R=+$('sp-r').value/500,w=+$('sp-w').value,f=+$('sp-f').value;$('sp-rv').textContent=(R*500>=1000?(R*500/1000)+' kg':R*500+' g');$('sp-wv').textContent=LV[w];$('sp-fv').textContent=LV[f];
 var warm={clove:1,pepper:1,cinnamon:1,bayleaf:1,star:1},fr={cardamom:1,mace:1,shahjeera:1},out=[];SP.forEach(function(s){var m=warm[s[0]]?[0.6,1,1.5][w]:fr[s[0]]?[0.6,1,1.5][f]:1;var q=s[3]*R*m;q=s[4]==='tsp'||s[4]==='inch'?Math.max(0.5,Math.round(q*2)/2):Math.max(1,Math.round(q));out.push([s,q]);});
 $('sp-l').innerHTML=out.map(function(o,i){var u=o[0][4];return '<li style="animation-delay:'+i*.04+'s"><i style="background:'+o[0][2]+'"></i>'+o[0][1]+'<b>'+o[1]+(u?' '+u+(o[1]>1&&u!=='tsp'&&u.slice(-1)!=='s'?'s':''):'')+'</b></li>';}).join('');
 var p=$('sp-plate'),h='',n=0;out.forEach(function(o,k){var c=Math.min(14,Math.ceil(o[1]*(o[0][4]==='tsp'?6:o[0][4]==='inch'?2:1)));for(var j=0;j<c;j++){var a=(k*45+j*(360/Math.max(c,1))/8+j*13)*Math.PI/180,rr=12+((j*37+k*11)%26);var sz=o[0][0]==='bayleaf'?22:o[0][0]==='cinnamon'?20:o[0][0]==='star'?18:o[0][0]==='cardamom'?12:o[0][0]==='mace'?14:o[0][0]==='shahjeera'?5:7;
  var x=50+rr*Math.cos(a+k),y=50+rr*Math.sin(a+k);h+='<i style="left:calc('+x+'% - '+sz/2+'px);top:calc('+y+'% - '+sz/2+'px);width:'+sz+'px;height:'+(o[0][0]==='bayleaf'||o[0][0]==='cinnamon'?sz/2.4:o[0][0]==='cardamom'?sz*1.5:sz)+'px;background:'+o[0][2]+';border-radius:'+(o[0][0]==='cinnamon'?'4px':o[0][0]==='bayleaf'?'50% 0':'50%')+';transform:rotate('+(j*47)+'deg)"></i>';n++;}});p.innerHTML=h;
 $('sp-n').textContent='Add half the spices to the rice water and scatter the rest between the layers. '+(f===2?'For extra fragrance, sprinkle a few drops of kewra or rose water over the top layer before sealing.':f===0?'Keep kewra and rose water out for a cleaner, earthier biryani.':'A few drops of kewra water on top is optional.');}
if($('sp-r')){['sp-r','sp-w','sp-f'].forEach(function(i){$(i).addEventListener('input',sp);});sp();}
})();
