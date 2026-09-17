/* Kadr framing playground: ported from the original Kadr page, restyled with the lexicon tokens, bilingual. */
(function(){
const $=s=>document.querySelector(s);
const cv=$('#cvComp'); if(!cv) return;
const P={amber:'#e0b66f',cyan:'#7fb4c9',ink:'#f3eadb'};
const PHI=(1+Math.sqrt(5))/2;
function ell(ctx,x,y,rx,ry){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();}
function load(src){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src;});}
const KT={
 en:{thirds:{name:'Rule of thirds',en:'3 × 3',desc:'Split the frame into nine equal boxes. Put what matters on a line or on one of the four crossings, not dead centre. The default grid in every camera, and right most of the time.'},
  golden:{name:'Golden ratio',en:'phi grid · 1 : 1.618',desc:'Same idea as thirds, but the lines sit closer to the middle (38% and 62%). Calmer and more natural, because it is a proportion found in shells, plants and old buildings.'},
  spiral:{name:'Golden spiral',en:'Fibonacci',desc:'The eye follows the curve and settles in its eye. Put the most important thing there and let the rest of the scene sweep around it. Rotate it to fit your scene.'},
  triangle:{name:'Golden triangle',en:'diagonal + perpendiculars',desc:'One corner-to-corner diagonal, plus a line from each other corner meeting it at 90°. The two crossings are power points. Best for scenes with strong diagonals: stairs, roads, an arm.'},
  center:{name:'Centre and symmetry',en:'on purpose',desc:'Breaking the rule deliberately: subject dead centre, left and right mirrored. Stable, formal, a little eerie. Works when the place itself is symmetrical: a corridor, a doorway.'},
  none:{name:'No grid',en:'trust your eye',desc:'Lines off. If the frame feels balanced, it is. Grids are a way of thinking, not a law.'},
  fb:{gridoff:'Grid off. Does the frame feel balanced?',centre:'Dead centre, deliberate ✓',power:'On a power point ✓',close:'Close. Nudge a little more.',middle:'In the middle. That usually kills the frame. Move them to one side.',far:'Far from any power point.',hzUp:'On the upper third: the ground is the story ✓',hzLow:'On the lower third: the sky is the story ✓',hzMid:'In the middle. It cuts the picture in two equal halves and goes flat.',hzOk:'Horizon is fine.',leadBad:'Staring at the frame edge. No room in front of the look.',leadOk:'Space in front of the look ✓',leadWarn:'More space behind than in front. Flip the look, or move them.',headBad:'Head touching the top. Lower them.',headWarn:'A lot of empty space above the head.',SUBJECT:'SUBJECT',HORIZON:'HORIZON',LEAD:'LEAD ROOM',HEAD:'HEADROOM'}},
 ar:{thirds:{name:'قاعدة الأثلاث',en:'3 × 3',desc:'قسّم الكادر تسع مربعات متساوية. حط اللي يهمك على خط أو على واحد من التقاطعات الأربعة، مش في النص بالظبط. الشبكة الافتراضية في كل كاميرا، وصح في أغلب الأحوال.'},
  golden:{name:'النسبة الذهبية',en:'phi grid · 1 : 1.618',desc:'نفس فكرة الأثلاث، لكن الخطوط أقرب للنص (38% و62%). أهدى وأطبع، لأنها نسبة موجودة في الأصداف والنباتات والمباني القديمة.'},
  spiral:{name:'الحلزون الذهبي',en:'Fibonacci',desc:'العين بتتبع المنحنى وتهدى في عينه. حط أهم حاجة هناك وخلي باقي المشهد يلف حواليها. لفّه عشان يناسب مشهدك.'},
  triangle:{name:'المثلث الذهبي',en:'قطر + عمودين',desc:'قطر من ركن لركن، وخط من كل ركن تاني بيقابله بزاوية 90. التقاطعان هما نقاط القوة. الأفضل للمشاهد اللي فيها قطريات قوية: سلالم، طرق، ذراع.'},
  center:{name:'المنتصف والتماثل',en:'عن قصد',desc:'كسر القاعدة عمداً: الموضوع في النص بالظبط، واليمين والشمال متعاكسين. ثابت ورسمي ومقلق شوية. بيشتغل لما المكان نفسه متماثل: ممر، باب.'},
  none:{name:'من غير شبكة',en:'ثق في عينك',desc:'الخطوط مطفية. لو الكادر حاسس إنه متوازن، يبقى متوازن. الشبكات طريقة تفكير مش قانون.'},
  fb:{gridoff:'الشبكة مطفية. الكادر حاسس إنه متوازن؟',centre:'في النص بالظبط، عن قصد ✓',power:'على نقطة قوة ✓',close:'قريب. زقّه شوية كمان.',middle:'في النص. ده غالباً بيقتل الكادر. حركه لجنب.',far:'بعيد عن أي نقطة قوة.',hzUp:'على الثلث العلوي: الأرض هي الحكاية ✓',hzLow:'على الثلث السفلي: السما هي الحكاية ✓',hzMid:'في النص. بيقطع الصورة نصين متساويين وبتبقى مسطحة.',hzOk:'الأفق تمام.',leadBad:'بيبص في حرف الكادر. مفيش مساحة قدام النظرة.',leadOk:'فيه مساحة قدام النظرة ✓',leadWarn:'المساحة ورا أكتر من قدام. اعكس النظرة أو حركه.',headBad:'الراس لازقة في الحرف العلوي. نزّله.',headWarn:'فراغ كتير فوق الراس.',SUBJECT:'الموضوع',HORIZON:'الأفق',LEAD:'مساحة النظرة',HEAD:'فوق الراس'}}};
let L='en'; const T=()=>KT[L]||KT.en;
function spiralPath(c){let x=0,y=0,w=PHI,h=1;c.beginPath();for(let i=0;i<10;i++){const m=i%4;if(m===0){c.moveTo(x,y+h);c.arc(x+h,y+h,h,Math.PI,1.5*Math.PI);c.moveTo(x+h,y);c.lineTo(x+h,y+h);x+=h;w-=h;}else if(m===1){c.moveTo(x,y);c.arc(x,y+w,w,1.5*Math.PI,2*Math.PI);c.moveTo(x,y+w);c.lineTo(x+w,y+w);y+=w;h-=w;}else if(m===2){c.moveTo(x+w,y);c.arc(x+w-h,y,h,0,.5*Math.PI);c.moveTo(x+w-h,y);c.lineTo(x+w-h,y+h);w-=h;}else{c.moveTo(x+w,y+h);c.arc(x+w,y+h-w,w,.5*Math.PI,Math.PI);c.moveTo(x,y+h-w);c.lineTo(x+w,y+h-w);h-=w;}}return[x+w/2,y+h/2];}
function spiralTransform(c,W,H,spin){c.translate(W/2,H/2);c.scale(spin&1?-1:1,spin&2?-1:1);c.translate(-W/2,-H/2);c.scale(W/PHI,H);}
function eyeFor(W,H,spin){const c=document.createElement('canvas').getContext('2d');c.save();spiralTransform(c,W,H,spin);const e=spiralPath(c);const m=c.getTransform();c.restore();const p=m.transformPoint(new DOMPoint(e[0],e[1]));return[p.x,p.y];}
function drawGrid(c,W,H,g,spin){c.strokeStyle='rgba(127,180,201,.85)';c.lineWidth=Math.max(1.5,W/600);c.setLineDash([]);c.shadowColor='rgba(0,0,0,.6)';c.shadowBlur=3;const Ln=(x1,y1,x2,y2)=>{c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();};
 if(g==='thirds'){Ln(W/3,0,W/3,H);Ln(2*W/3,0,2*W/3,H);Ln(0,H/3,W,H/3);Ln(0,2*H/3,W,2*H/3);}
 if(g==='golden'){Ln(W*.382,0,W*.382,H);Ln(W*.618,0,W*.618,H);Ln(0,H*.382,W,H*.382);Ln(0,H*.618,W,H*.618);}
 if(g==='triangle'){const a=W*W/(W*W+H*H),b=H*H/(W*W+H*H);if(spin%2){Ln(W,0,0,H);c.setLineDash([8,8]);Ln(0,0,W-a*W,a*H);Ln(W,H,W-b*W,b*H);}else{Ln(0,0,W,H);c.setLineDash([8,8]);Ln(W,0,a*W,a*H);Ln(0,H,b*W,b*H);}c.setLineDash([]);}
 if(g==='center'){Ln(W/2,0,W/2,H);Ln(0,H/2,W,H/2);}
 if(g==='spiral'){c.save();spiralTransform(c,W,H,spin);spiralPath(c);c.restore();c.stroke();}
 c.shadowBlur=0;}
const ctx=cv.getContext('2d'),CW=cv.width,CH=cv.height;
const BG={w:1024,h:1024,hz:.565};const BGS=CW/BG.w,BGH=BG.h*BGS;const HZ_MAX=BG.hz*BGH,HZ_MIN=HZ_MAX-(BGH-CH);const PR=280/900;
const S={hz:2*CH/3,x:2*CW/3,feet:663,look:-1,grid:'thirds',spin:0};let bgImg=null,personImg=null;
function powerPoints(g){if(g==='thirds')return[[CW/3,CH/3],[2*CW/3,CH/3],[CW/3,2*CH/3],[2*CW/3,2*CH/3]];if(g==='golden')return[[CW*.382,CH*.382],[CW*.618,CH*.382],[CW*.382,CH*.618],[CW*.618,CH*.618]];if(g==='spiral')return[eyeFor(CW,CH,S.spin)];if(g==='triangle'){const a=CW*CW/(CW*CW+CH*CH),b=CH*CH/(CW*CW+CH*CH);return S.spin%2?[[CW-a*CW,a*CH],[CW-b*CW,b*CH]]:[[a*CW,a*CH],[b*CW,b*CH]];}if(g==='center')return[[CW/2,CH/2]];return[];}
function personK(feet){return 110+420*Math.max(0,(feet-S.hz))/(CH-S.hz);}
function headPt(){const k=personK(S.feet);return[S.x,S.feet-k*.93];}
let lastBd=1e9;
function draw(){ctx.setTransform(1,0,0,1,0,0);const oy=HZ_MAX-S.hz;if(bgImg)ctx.drawImage(bgImg,0,-oy,CW,BGH);else{ctx.fillStyle='#2A2620';ctx.fillRect(0,0,CW,CH);}
 const k=personK(S.feet),pw=k*PR;ctx.fillStyle='rgba(0,0,0,.35)';ctx.save();ctx.filter='blur(6px)';ell(ctx,S.x,S.feet-2,pw*.7,k*.025);ctx.restore();
 if(personImg){ctx.save();ctx.translate(S.x,S.feet-k);if(S.look>0)ctx.scale(-1,1);ctx.drawImage(personImg,-pw/2,0,pw,k);ctx.restore();}
 drawGrid(ctx,CW,CH,S.grid,S.spin);const pts=powerPoints(S.grid),hp=headPt();let best=null,bd=1e9;
 for(const p of pts){const d=Math.hypot(p[0]-hp[0],p[1]-hp[1]);if(d<bd){bd=d;best=p;}ctx.fillStyle='rgba(127,180,201,.95)';ell(ctx,p[0],p[1],5,5);}
 if(best){const on=bd<45;ctx.strokeStyle=on?P.amber:'rgba(224,182,111,.6)';ctx.lineWidth=on?3:1.5;ctx.beginPath();ctx.arc(best[0],best[1],on?22:16,0,Math.PI*2);ctx.stroke();if(!on){ctx.setLineDash([4,8]);ctx.beginPath();ctx.moveTo(hp[0],hp[1]);ctx.lineTo(best[0],best[1]);ctx.stroke();ctx.setLineDash([]);}}
 ctx.strokeStyle='rgba(224,182,111,.9)';ctx.lineWidth=2;ctx.setLineDash([12,10]);ctx.beginPath();ctx.moveTo(0,S.hz);ctx.lineTo(CW,S.hz);ctx.stroke();ctx.setLineDash([]);
 ctx.fillStyle=P.amber;for(const[x,d]of[[CW-6,-1],[6,1]]){ctx.beginPath();ctx.moveTo(x-d*20,S.hz-10);ctx.lineTo(x,S.hz);ctx.lineTo(x-d*20,S.hz+10);ctx.closePath();ctx.fill();}
 ctx.strokeStyle='rgba(243,234,219,.6)';ctx.lineWidth=2;ctx.setLineDash([3,6]);ctx.beginPath();ctx.moveTo(S.x+S.look*pw*.3,hp[1]);ctx.lineTo(S.look>0?CW-40:40,hp[1]);ctx.stroke();ctx.setLineDash([]);
 lastBd=bd;feedback(bd);}
function feedback(bd){const f=T().fb,hp=headPt(),k=personK(S.feet),m=[],g=S.grid;
 if(g==='none')m.push([f.SUBJECT,'none',f.gridoff]);else if(bd<45)m.push([f.SUBJECT,'ok',g==='center'?f.centre:f.power]);else if(bd<120)m.push([f.SUBJECT,'warn',f.close]);else{const cd=Math.hypot(hp[0]-CW/2,hp[1]-CH/2);m.push([f.SUBJECT,'bad',cd<60?f.middle:f.far]);}
 const hzT=Math.min(Math.abs(S.hz-CH/3),Math.abs(S.hz-2*CH/3));
 if(hzT<28)m.push([f.HORIZON,'ok',S.hz<CH/2?f.hzUp:f.hzLow]);else if(Math.abs(S.hz-CH/2)<40)m.push([f.HORIZON,'warn',f.hzMid]);else m.push([f.HORIZON,'none',f.hzOk]);
 const front=S.look>0?CW-S.x:S.x;if(front<k*.25)m.push([f.LEAD,'bad',f.leadBad]);else if(front>CW-front)m.push([f.LEAD,'ok',f.leadOk]);else m.push([f.LEAD,'warn',f.leadWarn]);
 const top=S.feet-k;if(top<6)m.push([f.HEAD,'bad',f.headBad]);else if(top>CH*.45&&k>220)m.push([f.HEAD,'warn',f.headWarn]);
 $('#fb').innerHTML=m.map(x=>`<div class="pill2 ${x[1]}"><span class="k">${x[0]}</span><span>${x[2]}</span></div>`).join('');}
function setGrid(g){S.grid=g;document.querySelectorAll('#gridChips .chip').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.g===g)));const gi=T()[g];$('#gridName').innerHTML=gi.name+' <small>'+gi.en+'</small>';$('#gridDesc').textContent=gi.desc;$('#roComp').textContent=KT.en[g].name.toUpperCase();$('#spinBtn').style.display=(g==='spiral'||g==='triangle')?'':'none';draw();}
$('#gridChips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b)setGrid(b.dataset.g);});
$('#spinBtn').onclick=()=>{S.spin=(S.spin+1)%4;draw();};
$('#flipBtn').onclick=()=>{S.look*=-1;draw();};
$('#snapBtn').onclick=()=>{const pts=powerPoints(S.grid);if(!pts.length)return;const hp=headPt();let best=pts[0],bd=1e9;for(const p of pts){const d=Math.hypot(p[0]-hp[0],p[1]-hp[1]);if(d<bd){bd=d;best=p;}}const a=420/(CH-S.hz),c=.93;let feet=(best[1]+c*(110-a*S.hz))/(1-c*a);if(!(feet>S.hz+14&&feet<CH*1.4))feet=Math.max(S.hz+14,Math.min(CH*1.2,best[1]+.93*personK(S.feet)));S.x=best[0];S.feet=feet;if(S.grid!=='center')S.look=S.x<CW/2?1:-1;draw();};
$('#randBtn').onclick=()=>{S.hz=HZ_MIN+Math.random()*(HZ_MAX-HZ_MIN);S.feet=S.hz+30+Math.random()*(CH-S.hz);S.x=CW*(.1+Math.random()*.8);S.look=Math.random()<.5?1:-1;draw();};
let drag=null;const pos=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)*CW/r.width,(e.clientY-r.top)*CH/r.height];};
cv.addEventListener('pointerdown',e=>{const[x,y]=pos(e),k=personK(S.feet);if(Math.abs(x-S.x)<k*.2&&y>S.feet-k-10&&y<S.feet+10)drag={t:'p',dx:x-S.x,dy:y-S.feet};else if(Math.abs(y-S.hz)<40)drag={t:'h',dy:y-S.hz};else{drag={t:'p',dx:0,dy:0};S.x=x;S.feet=Math.max(S.hz+14,y+personK(y)*.45);draw();}cv.setPointerCapture(e.pointerId);e.preventDefault();});
cv.addEventListener('pointermove',e=>{if(!drag)return;const[x,y]=pos(e);if(drag.t==='h'){S.hz=Math.max(HZ_MIN,Math.min(HZ_MAX,y-drag.dy));S.feet=Math.max(S.feet,S.hz+14);}else{S.x=Math.max(0,Math.min(CW,x-drag.dx));S.feet=Math.max(S.hz+14,Math.min(CH*1.3,y-drag.dy));}draw();});
const up=()=>{drag=null;};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
window.kadrLang=function(l){L=l==='ar'?'ar':'en';setGrid(S.grid);};
setGrid('thirds');
Promise.all([load('img/kadr/bg.jpg'),load('img/kadr/person.png')]).then(([b,p])=>{bgImg=b;personImg=p;draw();});
})();
