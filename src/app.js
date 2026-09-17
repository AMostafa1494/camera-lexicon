/* ---------- i18n ---------- */
const I18N={
en:{nav_lib:'Library',nav_build:'Prompt builder',nav_kadr:'Framing rules',pill:'Free reference for AI filmmakers',
 h1:'Camera language <em>prompts</em> for AI filmmakers.',
 lead:'A visual companion for every camera decision: shot sizes, angles, movements, lenses, camera bodies and composition. Compare how each choice changes a scene, then copy a clean prompt you can adapt in Kling, Seedance, Veo, Higgsfield and similar tools.',
 cta1:'Browse the library',cta2:'Build a custom prompt',
 note:'Every card keeps the camera instruction separate from the scene, so the prompt stays reusable when you swap the first frame.',
 mf_lbl:'Master first frame',powered:'Powered by',mark_sub:'Egyptian for frame',play_h:'Where to put things in the frame',play_p:'Drag the person. Drag the horizon to tilt the camera. The panel tells you when the frame works. Then read the rules below, one photo each.',play_hint:'Drag the person · drag the horizon to tilt',play_grid:'Grid',g_thirds:'Rule of thirds',g_golden:'Golden ratio',g_spiral:'Golden spiral',g_triangle:'Golden triangle',g_center:'Centre',g_none:'Off',b_spin:'Rotate ↻',b_flip:'Flip look ⇄',b_snap:'Snap to power point',b_rand:'Scramble',rules_p:'None of these is a law. They are habits that make a frame feel right. Learn them, then break them on purpose.',mf_h:'Every preview starts from this one frame.',mf_p:'One photoreal still, one subject, one location. Each card below is the same man and the same plaza re-rendered through that card\'s camera choice, so the only thing that changes is the camera.',
 lib_lbl:'The library',lib_h:'Find the camera choice that fits your shot.',lib_p:'Search by name, film, director or feeling, or filter by category. Open a card for the full breakdown, the film reference and the AI generation notes.',
 st_stills:'STILLS',st_cats:'CATEGORIES',st_prompt:'PROMPT EACH',search:'Search: dolly, Kubrick, anamorphic, tension…',favs:'Favourites',all:'All',
 copy:'Copy prompt',details:'Details',still:'Still prompt',still_lbl:'Prompt used to create this still',still_copy:'Copy still prompt',copied:'Prompt copied',what:'What it is',when:'When to use it',prompt:'Prompt',notes:'AI generation notes',film:'Reference film',watch:'Watch the scene',fav_add:'☆ Add to favourites',fav_on:'★ In favourites',pending:'STILL PENDING',
 b_lbl:'Prompt builder',b_h:'Build a camera prompt from your own first frame',b_p:'Add your starting image, pick the camera choices and add only the missing scene details. The output keeps the camera instruction, the image context and the action separated.',
 b_drop_b:'Add your first frame',b_drop_s:'Drop an image here or click to choose one. Use the same image as the starting frame in your video tool.',b_drop_note:'The image never leaves your browser. It is shown here so you can write the context while looking at it.',
 b_move:'Movement',b_size:'Shot size',b_angle:'Angle',b_lens:'Lens',b_format:'Camera / format',b_frame:'Composition',none:'None',
 b_ctx:'First-frame context',b_ctx_ph:'Describe what is in the starting image: who, where, light, time of day.',b_subject:'Subject',b_subject_ph:'a man in a camel coat',b_location:'Location',b_location_ph:'a limestone plaza with a reflecting pool',b_action:'Scene action',b_action_ph:'walks slowly toward the entrance',b_mood:'Mood or style',b_mood_ph:'quiet, golden hour, cinematic',
 b_out:'Generated prompt',b_copy:'Copy generated prompt',b_reset:'Reset',
 foot:'Film references are named and described for study; the "Watch the scene" button opens a YouTube search. Prompts are written for text-to-video and work as image-to-video by removing the scene description. Preview stills are AI-generated from one master frame and are not frames from the films.'},
ar:{nav_lib:'المكتبة',nav_build:'مبني البرومبت',nav_kadr:'قواعد الكادر',pill:'مرجع مجاني لصنّاع أفلام الـ AI',
 h1:'برومبتات <em>لغة الكاميرا</em> لصنّاع أفلام الـ AI.',
 lead:'رفيق بصري لكل قرار كاميرا: أحجام اللقطات، الزوايا، الحركات، العدسات، الكاميرات والتكوين. قارن إزاي كل اختيار بيغير المشهد، وبعدين انسخ برومبت نظيف تعدله في Kling وSeedance وVeo وHiggsfield وغيرهم.',
 cta1:'تصفح المكتبة',cta2:'ابني برومبت خاص',
 note:'كل كارت بيفصل تعليمات الكاميرا عن وصف المشهد، فالبرومبت بيفضل قابل لإعادة الاستخدام لما تغير الفريم الأول.',
 mf_lbl:'فريم الماستر',powered:'Powered by',mark_sub:'كادر: يعني الإطار بالمصري',play_h:'تحط الحاجات فين جوه الكادر',play_p:'اسحب الشخص. اسحب الأفق عشان تميل الكاميرا. اللوحة على اليمين بتقول لك إمتى الكادر بيشتغل. وبعدين اقرا القواعد تحت، كل قاعدة بصورة.',play_hint:'اسحب الشخص · اسحب الأفق عشان تميل',play_grid:'الشبكة',g_thirds:'قاعدة الأثلاث',g_golden:'النسبة الذهبية',g_spiral:'الحلزون الذهبي',g_triangle:'المثلث الذهبي',g_center:'المنتصف',g_none:'إطفاء',b_spin:'لفّ ↻',b_flip:'اعكس النظرة ⇄',b_snap:'ثبّت على نقطة القوة',b_rand:'بعثر',rules_p:'ولا واحدة من دول قانون. دي عادات بتخلي الكادر يحس إنه صح. اتعلمها، وبعدين اكسرها عن قصد.',mf_h:'كل المعاينات بتبدأ من الفريم ده.',mf_p:'صورة واحدة واقعية، شخص واحد، مكان واحد. كل كارت تحت هو نفس الراجل ونفس الساحة متصورين باختيار الكاميرا بتاع الكارت، فالحاجة الوحيدة اللي بتتغير هي الكاميرا.',
 lib_lbl:'المكتبة',lib_h:'لاقي اختيار الكاميرا اللي يناسب لقطتك.',lib_p:'ابحث بالاسم أو الفيلم أو المخرج أو الإحساس، أو فلتر بالقسم. افتح أي كارت للشرح الكامل ومثال الفيلم وملاحظات التوليد.',
 st_stills:'صورة',st_cats:'أقسام',st_prompt:'برومبت لكل كارت',search:'ابحث: dolly، كوبريك، أنامورفيك، توتر…',favs:'المفضلة',all:'الكل',
 copy:'انسخ البرومبت',details:'التفاصيل',still:'برومبت الصورة',still_lbl:'البرومبت اللي اتعملت بيه الصورة دي',still_copy:'انسخ برومبت الصورة',copied:'اتنسخ',what:'إيه هي',when:'إمتى تستخدمها',prompt:'البرومبت',notes:'ملاحظات التوليد بالـ AI',film:'الفيلم المرجعي',watch:'شوف المشهد',fav_add:'☆ ضيف للمفضلة',fav_on:'★ في المفضلة',pending:'الصورة قيد التوليد',
 b_lbl:'مبني البرومبت',b_h:'ابني برومبت كاميرا من الفريم الأول بتاعك',b_p:'حط صورة البداية، اختار قرارات الكاميرا، وضيف بس تفاصيل المشهد الناقصة. الناتج بيفصل تعليمات الكاميرا عن سياق الصورة عن الحركة.',
 b_drop_b:'ضيف الفريم الأول',b_drop_s:'اسحب صورة هنا أو اضغط لاختيارها. استخدم نفس الصورة كفريم بداية في أداة الفيديو.',b_drop_note:'الصورة مش بتخرج من المتصفح. بتتعرض هنا بس عشان تكتب السياق وإنت شايفها.',
 b_move:'الحركة',b_size:'حجم اللقطة',b_angle:'الزاوية',b_lens:'العدسة',b_format:'الكاميرا / الفورمات',b_frame:'التكوين',none:'لا شيء',
 b_ctx:'سياق الفريم الأول',b_ctx_ph:'اوصف اللي في صورة البداية: مين، فين، الإضاءة، وقت اليوم (بالإنجليزي).',b_subject:'الموضوع',b_subject_ph:'a man in a camel coat',b_location:'المكان',b_location_ph:'a limestone plaza with a reflecting pool',b_action:'الحركة في المشهد',b_action_ph:'walks slowly toward the entrance',b_mood:'المزاج أو الستايل',b_mood_ph:'quiet, golden hour, cinematic',
 b_out:'البرومبت الناتج',b_copy:'انسخ البرومبت الناتج',b_reset:'تصفير',
 foot:'الأفلام المرجعية مذكورة بالاسم والوصف للدراسة، وزرار "شوف المشهد" بيفتح بحث يوتيوب. البرومبتات مكتوبة بصيغة text-to-video وبتشتغل image-to-video بحذف وصف المشهد. صور المعاينة متولدة بالـ AI من فريم ماستر واحد ومش لقطات من الأفلام.'}
};
const CATN={en:{size:'Shot size',angle:'Angle',move:'Movement',lens:'Lens',format:'Camera & format',frame:'Composition'},
 ar:{size:'أحجام اللقطات',angle:'زوايا الكاميرا',move:'حركات الكاميرا',lens:'العدسات',format:'الكاميرات والفورمات',frame:'التكوين'}};
const CATD={en:{size:'How much of the subject fills the frame. Size sets the psychological distance between viewer and subject.',angle:'Where the camera looks from. Angle distributes power: who dominates and who is weak.',move:'How the camera travels through time. The most important section for video generation: movement is what separates an AI clip from a film.',lens:'Focal length and aperture change perspective and depth of field more than anything else.',format:'The actual camera and stock: ARRI, RED, IMAX, 35 and 16mm film, VHS, phone. Each has a "look" you can ask for.',frame:'How elements are arranged inside the frame. Not a move or a lens, but what makes a shot feel intended.'}};
const CATSN={size:'S',angle:'A',move:'M',lens:'L',format:'F',frame:'C'};
CATS.forEach(c=>{CATD.ar=CATD.ar||{};CATD.ar[c.id]=c.d});

/* ---------- state ---------- */
const $=s=>document.querySelector(s);
let L='en',filter='all',q='',favOnly=false,favs=new Set();
try{favs=new Set(JSON.parse(localStorage.getItem('cl2-favs')||'[]'))}catch(e){}
try{L=localStorage.getItem('cl2-lang')||'en'}catch(e){}
const t=k=>(I18N[L][k]??I18N.en[k]??k);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const toast=m=>{const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),1400)};
const copy=s=>navigator.clipboard.writeText(s).then(()=>toast(t('copied'))).catch(()=>{const ta=document.createElement('textarea');ta.value=s;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast(t('copied'))});
const SCENE='{scene}';
const promptOf=d=>P[d.id].replace('{S}',SCENE);
const showPrompt=d=>esc(promptOf(d)).replace(SCENE,'<mark>'+SCENE+'</mark>');
const num=d=>{const list=D.filter(x=>x.cat===d.cat);return CATSN[d.cat]+String(list.indexOf(d)+1).padStart(2,'0')};
const img=d=>`img/${d.id}.jpg`;
const FIT=new Set(['iphone','cctv']);
const fitc=d=>FIT.has(d.id)?' fit':'';
const title=d=>L==='ar'?d.ar:d.en;
const oneOf=d=>L==='ar'?d.one:EN[d.id].one;

/* ---------- motion overlays for movement cards (SVG, animated) ---------- */
const A='#e0b66f';
const arrow=(x1,y1,x2,y2,dur=3)=>`<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="${A}"/></marker></defs><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${A}" stroke-width="2.5" marker-end="url(#ah)" stroke-linecap="round"><animate attributeName="opacity" values="0;1;1;0" dur="${dur}s" repeatCount="indefinite"/></line>`;
const box=(x,y,w,h,vals,dur=4)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${A}" stroke-width="2" rx="2">${vals}</rect>`;
const anim=(n,v,dur=4)=>`<animate attributeName="${n}" values="${v}" dur="${dur}s" repeatCount="indefinite"/>`;
const tagS=(x,y,t)=>`<rect x="${x-t.length*3.1-6}" y="${y-8}" width="${t.length*6.2+12}" height="16" fill="rgba(0,0,0,.6)" rx="2"/><text x="${x}" y="${y+3.5}" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="${A}">${t}</text>`;
const OVL={
 static:()=>box(40,22,240,136,''),
 pan:()=>arrow(70,90,250,90),
 tilt:()=>arrow(160,150,160,30),
 pushin:()=>box(20,11,280,158,anim('x','20;70;20')+anim('y','11;39;11')+anim('width','280;180;280')+anim('height','158;101;158')),
 pullout:()=>box(70,39,180,101,anim('x','70;20;70')+anim('y','39;11;39')+anim('width','180;280;180')+anim('height','101;158;101')),
 truck:()=>arrow(240,150,80,150)+`<line x1="40" y1="160" x2="280" y2="160" stroke="${A}" stroke-dasharray="4 4" opacity=".6"/>`,
 crane:()=>`<path d="M160 150 Q150 60 60 30" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#ah)"/>`+arrow(60,30,55,28,0.01).replace('<line','<line opacity="0"'),
 hand:()=>`<g>${box(40,22,240,136,'')}<animateTransform attributeName="transform" type="translate" values="0 0;3 -2;-2 3;2 2;-3 -1;1 -3;0 0" dur=".9s" repeatCount="indefinite"/></g>`,
 steadi:()=>`<path d="M40 150 C100 100 200 140 280 60" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" values="0;-44" dur="2s" repeatCount="indefinite"/></path>`,
 zoom:()=>box(20,11,280,158,anim('x','20;90;20')+anim('y','11;50;11')+anim('width','280;140;280')+anim('height','158;79;158'))+`<text x="24" y="172" font-family="JetBrains Mono,monospace" font-size="9" fill="${A}">LENS ONLY</text>`,
 dollyzoom:()=>box(110,50,100,80,'')+box(20,11,280,158,anim('x','20;60;20')+anim('y','11;34;11')+anim('width','280;200;280')+anim('height','158;112;158')),
 arc:()=>`<ellipse cx="160" cy="120" rx="120" ry="40" fill="none" stroke="${A}" stroke-width="2" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" values="0;-44" dur="2s" repeatCount="indefinite"/></ellipse>`,
 whip:()=>`<line x1="40" y1="90" x2="280" y2="90" stroke="${A}" stroke-width="4" stroke-linecap="round" marker-end="url(#ah)"><animate attributeName="x2" values="40;280;280;40" keyTimes="0;.15;.7;1" dur="2.4s" repeatCount="indefinite"/></line>`+arrow(0,0,0,0,0.01).replace('<line','<line opacity="0"'),
 aerial:()=>`<path d="M40 40 L200 120" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#ah)"><animate attributeName="stroke-dashoffset" values="0;-44" dur="2s" repeatCount="indefinite"/></path>`+arrow(0,0,0,0,0.01).replace('<line','<line opacity="0"'),
 rack:()=>`<circle cx="90" cy="110" r="26" fill="none" stroke="${A}" stroke-width="2">${anim('opacity','1;1;.2;.2;1',4)}</circle><circle cx="220" cy="80" r="26" fill="none" stroke="${A}" stroke-width="2">${anim('opacity','.2;.2;1;1;.2',4)}</circle>`,
 oner:()=>`<path d="M30 150 L110 150 L110 70 L210 70 L210 130 L290 130" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" values="0;-44" dur="2s" repeatCount="indefinite"/></path>`,
 follow:()=>`<path d="M160 165 L160 60" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#ah)"><animate attributeName="stroke-dashoffset" values="0;-44" dur="2s" repeatCount="indefinite"/></path>`+arrow(0,0,0,0,0.01).replace('<line','<line opacity="0"'),
 snorri:()=>`<g>${box(40,22,240,136,'')}<animateTransform attributeName="transform" type="rotate" values="-6 160 90;6 160 90;-6 160 90" dur="1.4s" repeatCount="indefinite"/></g><rect x="120" y="45" width="80" height="110" fill="none" stroke="${A}" stroke-width="2"/>`,
 roll:()=>`<g>${box(40,22,240,136,'')}<animateTransform attributeName="transform" type="rotate" values="0 160 90;180 160 90;180 160 90;360 160 90" keyTimes="0;.45;.55;1" dur="6s" repeatCount="indefinite"/></g>`,
 crash:()=>box(20,11,280,158,anim('x','20;20;120;120;20','2.4')+anim('y','11;11;67;67;11','2.4')+anim('width','280;280;80;80;280','2.4')+anim('height','158;158;45;45;158','2.4')),
 slowmo:()=>`<text x="24" y="168" font-family="JetBrains Mono,monospace" font-size="10" fill="${A}" letter-spacing="2">120 FPS</text><rect x="24" y="150" width="60" height="3" fill="${A}"><animate attributeName="width" values="0;60" dur="4s" repeatCount="indefinite"/></rect>`,
 timelapse:()=>`<circle cx="0" cy="0" r="6" fill="${A}"><animateMotion dur="5s" repeatCount="indefinite" path="M30 120 Q160 -20 290 120"/></circle>`,
 /* composition guides (Kadr) */
 thirds:()=>`<g stroke="${A}" stroke-width="1.2" opacity=".85"><line x1="106.7" y1="0" x2="106.7" y2="180"/><line x1="213.3" y1="0" x2="213.3" y2="180"/><line x1="0" y1="60" x2="320" y2="60"/><line x1="0" y1="120" x2="320" y2="120"/></g><circle cx="213.3" cy="60" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 gratio:()=>`<g stroke="${A}" stroke-width="1.2" opacity=".85"><line x1="122" y1="0" x2="122" y2="180"/><line x1="198" y1="0" x2="198" y2="180"/><line x1="0" y1="69" x2="320" y2="69"/><line x1="0" y1="111" x2="320" y2="111"/></g><circle cx="198" cy="69" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 gspiral:()=>`<path transform="translate(0 180) scale(1 -1)" d="M0 180 A180 180 0 0 1 180 0 A111 111 0 0 1 291 111 A69 69 0 0 1 222 180 A42 42 0 0 1 180 138 A26 26 0 0 1 206 112 A16 16 0 0 1 222 128 A10 10 0 0 1 212 138" fill="none" stroke="${A}" stroke-width="1.6" opacity=".9"/><circle cx="216" cy="52" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 gtriangle:()=>`<g stroke="${A}" stroke-width="1.4" opacity=".9"><line x1="320" y1="0" x2="0" y2="180"/><line x1="0" y1="0" x2="76.9" y2="136.7" stroke-dasharray="5 4"/><line x1="320" y1="180" x2="243.1" y2="43.3" stroke-dasharray="5 4"/></g><circle cx="243" cy="43" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 symmetry:()=>`<g stroke="${A}" stroke-width="1.2" opacity=".85"><line x1="160" y1="0" x2="160" y2="180"/><line x1="0" y1="90" x2="320" y2="90"/></g>`,
 horizon:()=>`<line x1="0" y1="15" x2="320" y2="15" stroke="${A}" stroke-width="2" stroke-dasharray="7 5"/>${tagS(160,30,'horizon on the top third')}`,
 leadroom:()=>`<line x1="109" y1="38" x2="300" y2="38" stroke="#f3eadb" stroke-width="2" stroke-dasharray="7 5" opacity=".9"/><path d="M304 38 L296 33 L296 43 z" fill="#f3eadb"/>${tagS(205,54,'room in front of the look')}`,
 headroom:()=>`<line x1="96" y1="8" x2="224" y2="8" stroke="${A}" stroke-width="2" stroke-dasharray="7 5"/>${tagS(160,22,'small gap above the hair')}`,
 lines:()=>`<g stroke="${A}" stroke-width="1.4" stroke-dasharray="6 5" opacity=".9"><line x1="6" y1="176" x2="160" y2="90"/><line x1="314" y1="176" x2="160" y2="90"/><line x1="38" y1="9" x2="160" y2="90"/><line x1="256" y1="40" x2="160" y2="90"/></g><circle cx="160" cy="90" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 negative:()=>`<circle cx="290" cy="150" r="12" fill="none" stroke="${A}" stroke-width="2.5"/>`,
 fwf:()=>`<path d="M122 162 L122 50 A38 38 0 0 1 198 50 L198 162" fill="none" stroke="${A}" stroke-width="1.8" stroke-dasharray="6 5"/>`,
 layers:()=>`${tagS(64,155,'1 · foreground')}${tagS(246,90,'2 · subject')}${tagS(144,50,'3 · background')}`,
};
const overlay=d=>{const f=OVL[d.id];if(!f)return '';const inner=f();const needsDefs=inner.includes('url(#ah)')&&!inner.includes('<defs>');return `<svg class="ov" viewBox="0 0 320 180" preserveAspectRatio="none">${needsDefs?`<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="${A}"/></marker></defs>`:''}${inner}</svg>`};

/* ---------- static text ---------- */
function applyLang(){
 document.body.dir=L==='ar'?'rtl':'ltr';document.documentElement.lang=L;
 document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=t(e.dataset.i));
 document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
 $('#h1').innerHTML=t('h1');
 $('#lang-en').classList.toggle('on',L==='en');$('#lang-ar').classList.toggle('on',L==='ar');
 renderChips();render();renderBuilder();
 const s1=$('#st1');if(s1)s1.textContent=D.length;
 if(window.kadrLang)window.kadrLang(L);
}
$('#lang-en').onclick=()=>{L='en';try{localStorage.setItem('cl2-lang',L)}catch(e){};applyLang()};
$('#lang-ar').onclick=()=>{L='ar';try{localStorage.setItem('cl2-lang',L)}catch(e){};applyLang()};

/* ---------- chips ---------- */
function scrollToLibrary(){const bar=$('.bar'),m=$('#main');if(!m)return;const y=m.getBoundingClientRect().top+window.scrollY-(bar?bar.offsetHeight:0)-6;window.scrollTo({top:Math.max(0,y),behavior:'smooth'});}
function renderChips(){
 const c=$('#chips');
 c.innerHTML=`<button class="chip ${filter==='all'?'on':''}" data-f="all">${t('all')} <b>${D.length}</b></button>`+CATS.map(k=>`<button class="chip ${filter===k.id?'on':''}" data-f="${k.id}">${CATN[L][k.id]} <b>${D.filter(d=>d.cat===k.id).length}</b></button>`).join('');
 c.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{filter=b.dataset.f;renderChips();render();scrollToLibrary()});
}

/* ---------- cards ---------- */
function matches(d){
 if(favOnly&&!favs.has(d.id))return false;
 if(filter!=='all'&&d.cat!==filter)return false;
 if(!q)return true;
 const e=EN[d.id];
 const hay=[d.ar,d.en,d.one,d.desc,e.one,e.desc,d.film.t,d.film.dir,d.film.dp,...(d.when||[]),...(e.when||[])].join(' ').toLowerCase();
 return hay.includes(q);
}
function card(d){
 return `<article class="card ${favs.has(d.id)?'faved':''}" data-id="${d.id}">
  <div class="media${fitc(d)}"><img src="${img(d)}" alt="${esc(d.en)}" loading="lazy" onerror="this.src='img/master.jpg';this.nextElementSibling&&this.nextElementSibling.classList.contains('pend')||this.insertAdjacentHTML('afterend','<div class=pend>${t('pending')}</div>')">${overlay(d)}</div>
  <div class="body">
   <div class="meta"><span>${num(d)}</span><span class="cat">${CATN[L][d.cat]}</span></div>
   <h4 class="ttl"><span>${esc(title(d))}</span><button class="star" data-fav="${d.id}" aria-label="favourite">★</button></h4>
   <p class="sub">${esc(oneOf(d))}</p>
   <div class="prompt">${showPrompt(d)}</div>
   <div class="acts"><button class="btn sm primary" data-copy="${d.id}">${t('copy')}</button><button class="btn sm" data-still="${d.id}">${t('still')}</button><button class="btn sm" data-open="${d.id}">${t('details')}</button></div>
  </div></article>`;
}
function render(){
 const m=$('#main');let html='',n=0;
 const kp0=$('#kadr-play');if(kp0){document.body.appendChild(kp0);kp0.hidden=true;}
 CATS.forEach(k=>{
  const items=D.filter(d=>d.cat===k.id&&matches(d));if(!items.length)return;n+=items.length;
  const emb=k.id==='frame'?`<div class="play-wrap play-slot"></div><p class="rules-p">${t('rules_p')}</p>`:'';
  html+=`<section class="cat" id="cat-${k.id}"><div class="cat-h"><h3>${CATN[L][k.id]}</h3><p>${CATD[L][k.id]}</p></div>${emb}<div class="grid">${items.map(card).join('')}</div></section>`;
 });
 m.innerHTML=n?html:`<div class="empty">${L==='ar'?'مفيش نتائج.':'No results.'}</div>`;
 const slot=m.querySelector('.play-slot'),kp=$('#kadr-play');if(kp){if(slot){slot.appendChild(kp);kp.hidden=false;}else{document.body.appendChild(kp);kp.hidden=true;}}
 m.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>copy(promptOf(D.find(d=>d.id===b.dataset.copy))));
 m.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>open(b.dataset.open));
 m.querySelectorAll('[data-still]').forEach(b=>b.onclick=()=>copy(STILL[b.dataset.still]||''));
 m.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>toggleFav(b.dataset.fav));
 m.querySelectorAll('.card .media').forEach(el=>el.onclick=()=>open(el.parentElement.dataset.id));
}
function toggleFav(id){favs.has(id)?favs.delete(id):favs.add(id);try{localStorage.setItem('cl2-favs',JSON.stringify([...favs]))}catch(e){};render();const fb=$('#fv');if(fb&&fb.dataset.id===id)fb.textContent=favs.has(id)?t('fav_on'):t('fav_add')}

/* ---------- drawer ---------- */
function open(id){
 const d=D.find(x=>x.id===id);if(!d)return;const e=EN[d.id];
 const ar=L==='ar';
 const desc=ar?d.desc:e.desc,when=ar?d.when:e.when,tips=ar?d.tips:e.tips,scene=ar?d.film.scene:e.scene;
 const yt='https://www.youtube.com/results?search_query='+encodeURIComponent(d.film.q);
 $('#drin').innerHTML=`
  <div class="top"><div><span class="lbl">${num(d)} · ${CATN[L][d.cat]}</span><h3>${esc(title(d))}</h3><span class="sub2">${esc(ar?d.en:d.ar)}</span></div><button class="x" id="xbtn" aria-label="close">×</button></div>
  <div class="media${fitc(d)}"><img src="${img(d)}" alt="" onerror="this.src='img/master.jpg'">${overlay(d)}</div>
  <div class="blk"><span class="lbl">${t('what')}</span><p>${esc(desc)}</p></div>
  <div class="blk"><span class="lbl">${t('when')}</span><ul>${when.map(w=>`<li>${esc(w)}</li>`).join('')}</ul></div>
  <div class="blk"><span class="lbl">${t('prompt')}</span><div class="prompt">${showPrompt(d)}</div>
   <div class="row" style="margin-top:10px"><button class="btn sm primary" id="cp">${t('copy')}</button><button class="btn sm" id="fv" data-id="${d.id}">${favs.has(d.id)?t('fav_on'):t('fav_add')}</button></div></div>
  <div class="blk"><span class="lbl">${t('still_lbl')}</span><div class="prompt">${esc(STILL[d.id]||'')}</div><div class="row" style="margin-top:10px"><button class="btn sm" id="cps">${t('still_copy')}</button></div></div>
  <div class="blk"><span class="lbl">${t('notes')}</span><div class="tip"><ul>${tips.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>
  <div class="blk"><span class="lbl">${t('film')}</span><div class="film"><div><div class="t">${esc(d.film.t)} <span>(${d.film.y})</span></div><div class="meta">Dir. ${esc(d.film.dir)} · DP ${esc(d.film.dp)}</div></div><a class="btn sm" href="${yt}" target="_blank" rel="noopener">${t('watch')} ▶</a><div class="sc">${esc(scene)}</div></div></div>`;
 $('#xbtn').onclick=close;$('#cp').onclick=()=>copy(promptOf(d));$('#cps').onclick=()=>copy(STILL[d.id]||'');$('#fv').onclick=()=>toggleFav(d.id);
 $('#dr').classList.add('open');$('#ov').hidden=false;$('#dr').scrollTop=0;
}
function close(){$('#dr').classList.remove('open');$('#ov').hidden=true}
$('#ov').onclick=close;document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
$('#q').oninput=e=>{q=e.target.value.trim().toLowerCase();render()};
$('#favtog').onclick=()=>{favOnly=!favOnly;$('#favtog').classList.toggle('on',favOnly);render();scrollToLibrary()};

/* ---------- builder ---------- */
const BF={};
function renderBuilder(){
 CATS.forEach(k=>{const s=$('#b_'+k.id);const cur=s.value;s.innerHTML=`<option value="">${t('none')}</option>`+D.filter(d=>d.cat===k.id).map(d=>`<option value="${d.id}">${num(d)} ${esc(title(d))}</option>`).join('');s.value=cur;s.onchange=buildOut});
 if(!$('#b_move').value&&!renderBuilder.seeded){renderBuilder.seeded=true;$('#b_move').value='pushin';$('#b_size').value='ws';$('#b_frame').value='golden'}
 ['b_ctx','b_subject','b_location','b_action','b_mood'].forEach(id=>$('#'+id).oninput=buildOut);
 buildOut();
}
const strip=(id)=>{ // camera instruction without the {S} clause
 let p=P[id];
 p=p.replace(/ (of|toward|from|around|on|over|into|circling|following) \{S\}/,'').replace(/\{S\}, /,'').replace(/\{S\} /,'').replace('{S}','');
 return p.replace(/^\s*,\s*/,'').trim();
};
function buildText(){
 const v=id=>$('#'+id).value.trim();
 const sel=c=>$('#b_'+c).value;
 const scene=[v('b_subject')||'',v('b_location')?'in '+v('b_location'):'',v('b_action')||''].filter(Boolean).join(', ');
 const ctx=v('b_ctx');
 const parts=[];
 if(sel('move'))parts.push('CAMERA: '+strip(sel('move')));
 const fr=['size','angle'].map(sel).filter(Boolean).map(strip);
 if(fr.length)parts.push('FRAMING: '+fr.join(' '));
 const lk=['lens','format','frame'].map(sel).filter(Boolean).map(strip);
 if(lk.length)parts.push('LOOK: '+lk.join(' '));
 if(ctx)parts.push('FIRST FRAME: '+ctx);
 if(scene)parts.push('SCENE: '+scene);
 if(v('b_mood'))parts.push('MOOD: '+v('b_mood'));
 return parts.join('\n');
}
function buildOut(){$('#bout').textContent=buildText()||'…'}
$('#bcopy').onclick=()=>copy(buildText());
$('#breset').onclick=()=>{CATS.forEach(k=>$('#b_'+k.id).value='');['b_ctx','b_subject','b_location','b_action','b_mood'].forEach(id=>$('#'+id).value='');$('#drop').classList.remove('has');const im=$('#drop img');if(im)im.remove();buildOut()};
$('#file').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const d=$('#drop');d.classList.add('has');let im=d.querySelector('img');if(!im){im=document.createElement('img');d.appendChild(im)}im.src=r.result};r.readAsDataURL(f)};
const dz=$('#drop');dz.ondragover=e=>{e.preventDefault()};dz.ondrop=e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f){$('#file').files=e.dataTransfer.files;$('#file').onchange({target:{files:[f]}})}};

applyLang();
