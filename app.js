/* Titularizare – Consiliere psihopedagogică
   Aplicație offline (PWA). Toate datele de progres stau local, pe dispozitiv. */
(function(){
'use strict';

const CAP = window.CAPITOLE || [];
const CARDS = window.CARDURI || [];
const GRILE = window.GRILE || [];
const AF = window.AF || [];
const TESTE = window.SUBIECTE || [];

const capById = Object.fromEntries(CAP.map(c => [c.id, c]));
// id-uri stabile pentru itemi
CARDS.forEach((c,i) => c.id = c.id || ('k' + i + '_' + hash(c.q)));
GRILE.forEach((g,i) => g.id = g.id || ('g' + i + '_' + hash(g.q)));
AF.forEach((a,i) => a.id = a.id || ('a' + i + '_' + hash(a.s)));

function hash(s){let h=0;for(let i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))|0}return (h>>>0).toString(36)}

/* ---------------- stocare ---------------- */
const KEY = 'titularizare-v1';
let S = load();
function load(){
  let d = null;
  try { d = JSON.parse(localStorage.getItem(KEY)); } catch(e){}
  return Object.assign({
    read:{},        // secțiuni citite  {capId:{idx:true}}
    box:{},         // carduri Leitner {cardId:{b:1..5,due:ts}}
    qstat:{},       // grile {id:{ok:n,ko:n,last:bool}}
    wrong:{},       // greșeli de recapitulat {id:true}
    answers:{},     // răspunsuri scrise {testNr-sub-item: text}
    checks:{},      // repere bifate
    days:{},        // activitate pe zile {YYYY-MM-DD: n}
    examDate:'', goal:30, best:{af:0}, ai:{}, gen:[], plan:{}
  }, d || {});
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }
function today(){ const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function tick(n=1){ const t=today(); S.days[t]=(S.days[t]||0)+n; save(); renderStreak(); }
function streak(){
  let n=0; const d=new Date();
  if(!S.days[today()]) d.setDate(d.getDate()-1);
  for(;;){ const k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    if(S.days[k]) { n++; d.setDate(d.getDate()-1);} else break; }
  return n;
}
function renderStreak(){ $('#streak').textContent = '🔥 ' + streak(); }

/* ---------------- utilitare ---------------- */
function $(s,el=document){return el.querySelector(s)}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(a,n){return shuffle(a).slice(0,n)}
function fmt(s){ // text cu liste: linii care încep cu "- " devin bullet
  const lines = String(s).split('\n'); let out='', inList=false;
  for(const l of lines){
    if(/^\s*[-•]\s+/.test(l)){ if(!inList){out+='<ul class="pts">';inList=true} out+='<li>'+inline(l.replace(/^\s*[-•]\s+/,''))+'</li>'; }
    else { if(inList){out+='</ul>';inList=false} if(l.trim()) out+='<p style="margin:6px 0">'+inline(l)+'</p>'; }
  }
  if(inList) out+='</ul>'; return out;
}
function inline(s){ return esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/_(.+?)_/g,'<i>$1</i>'); }
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>t.hidden=true,1800); }
const PRAISE = ['Bravo! 🎉','Exact! ✨','Corect, comisia aplaudă 👏','Ca la carte 📚','Perfect 💜','Da, da, da! 🙌'];
const COMFORT = ['Nu-i nimic, o pui la recapitulat 💪','Aproape. Data viitoare 😉','Ok, acum o știi sigur 🧠','Greșeala = învățare. Literalmente, e în programă 😄'];

/* ---------------- navigare ---------------- */
let stack = [];
let cleanup = null;
function go(fn, title, push=true){
  if(cleanup){ cleanup(); cleanup=null; }
  if(push) stack.push([fn,title]);
  $('#title').textContent = title;
  $('#backBtn').hidden = stack.length <= 1;
  const v = $('#view'); v.innerHTML=''; fn(v);
  window.scrollTo(0,0);
}
function back(){ if(stack.length>1){ stack.pop(); const [fn,t]=stack[stack.length-1]; go(fn,t,false);} }
function tab(name){
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  stack=[]; ({home:()=>go(Home,'Titularizare'), teorie:()=>go(Teorie,'Teorie'), carduri:()=>go(CarduriMenu,'Carduri'),
    grile:()=>go(GrileMenu,'Grile'), subiecte:()=>go(Subiecte,'Subiecte')})[name]();
}
$('#backBtn').onclick = back;
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>tab(b.dataset.tab));

/* ---------------- statistici ---------------- */
function capProgress(id){
  const c = capById[id]; if(!c) return 0;
  const n = c.sectiuni.length; const r = Object.keys(S.read[id]||{}).length;
  const cards = CARDS.filter(x=>x.c===id); const known = cards.filter(x=>(S.box[x.id]||{}).b>=3).length;
  const parts = [n? r/n : 0, cards.length? known/cards.length : 0];
  return Math.round(100 * parts.reduce((a,b)=>a+b,0)/parts.length);
}
function totalProgress(){ if(!CAP.length) return 0; return Math.round(CAP.reduce((a,c)=>a+capProgress(c.id),0)/CAP.length); }
function daysToExam(){ if(!S.examDate) return null; const d=(new Date(S.examDate+'T09:00') - new Date())/864e5; return Math.ceil(d); }

/* ================= ACASĂ ================= */
function Home(v){
  const dte = daysToExam(); const todayN = S.days[today()]||0; const goalPct=Math.min(100,Math.round(100*todayN/S.goal));
  const due = CARDS.filter(c=>{const b=S.box[c.id]; return !b || b.due<=Date.now();}).length;
  const wrongN = Object.keys(S.wrong).length;
  v.innerHTML = `
  <div class="card hero">
    <div class="muted small">${dte===null?'Setează data examenului mai jos':(dte>0?'Mai sunt':'Examenul')}</div>
    <div class="big">${dte===null?'🎯':(dte>0?dte+' zile':'e azi / a trecut 💜')}</div>
    <div class="muted small" style="margin-top:6px">Azi: ${todayN} / ${S.goal} răspunsuri · Progres total ${totalProgress()}%</div>
    <div class="bar" style="margin-top:8px;background:rgba(255,255,255,.3)"><i style="width:${goalPct}%;background:#fff"></i></div>
    <button class="btn white block" style="margin-top:14px" id="quick">⚡ Sesiune rapidă (10 întrebări amestecate)</button>
  </div>
  ${planHTML()}
  <div class="grid2">
    <div class="tile" id="tAF"><div class="ic">⏱️</div><b>Adevărat / Fals</b><small>60 de secunde, record ${S.best.af||0}</small></div>
    <div class="tile" id="tMatch"><div class="ic">🧩</div><b>Potrivește</b><small>concept ↔ definiție</small></div>
    <div class="tile" id="tDue"><div class="ic">🃏</div><b>Carduri de azi</b><small>${due} de repetat</small></div>
    <div class="tile" id="tWrong"><div class="ic">🔁</div><b>Greșelile mele</b><small>${wrongN} de reluat</small></div>
    <div class="tile" id="tRand"><div class="ic">✨</div><b>Surprinde-mă</b><small>o fișă la întâmplare</small></div>
    <div class="tile" id="tSim"><div class="ic">📝</div><b>Simulare examen</b><small>un test complet, cronometrat</small></div>
  </div>
  <div class="grid2"><div class="tile" id="tGen"><div class="ic">🎲</div><b>Subiect nou (AI)</b><small>variantă inedită</small></div>
    <div class="tile" id="tS3"><div class="ic">🎯</div><b>Antrenor S. III</b><small>metodica pe repede-înainte</small></div></div>
  <div class="card tap aihero" id="tOfi"><div class="row"><span style="font-size:28px">🤖</span><div class="grow"><b>Examen oficial + corectare AI</b>
    <div class="small muted">Subiecte reale 2021–2026, corectate după barem, item cu item</div><div class="small" style="margin-top:4px" data-ai-status>${aiStatusText()}</div></div><span style="font-size:20px">›</span></div></div>
  <h3>Unde ești pe capitole</h3>
  <div id="caps"></div>
  <div class="card">
    <b>Setări</b>
    <div class="row" style="margin-top:10px"><span class="grow">Data examenului</span><input type="date" id="exam" value="${S.examDate}"></div>
    <div class="row" style="margin-top:10px"><span class="grow">Țintă zilnică (răspunsuri)</span>
      <select id="goal">${[15,30,50,80,120].map(n=>`<option ${n==S.goal?'selected':''}>${n}</option>`).join('')}</select></div>
    <div style="margin-top:14px"><b class="small">🤖 AI</b> <span class="small" data-ai-status>${aiStatusText()}</span>
      <p class="small muted" style="margin:6px 0">Pe claude.ai merge singur. În aplicația instalată poți pune o cheie API Anthropic (console.anthropic.com); rămâne doar pe dispozitivul ăsta și nu intră în export.</p>
      <div class="row"><input type="password" id="akey" class="grow" placeholder="sk-ant-…" value="${esc(apiKey())}" autocomplete="off"><button class="btn ghost" id="akeyS">Salvează</button></div></div>
    <div class="btns" style="margin-top:14px"><button class="btn ghost" id="exp">Exportă progresul</button><button class="btn ghost" id="imp">Importă</button></div>
    <p class="small muted">Progresul se salvează doar pe dispozitivul ăsta. Cu export/import îl muți între iPhone și Mac.</p>
  </div>`;
  const caps = $('#caps',v);
  CAP.forEach(c=>{ const p=capProgress(c.id); const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span style="font-size:22px">${c.emoji||'📘'}</span><div class="grow"><b class="small">${esc(c.titlu)}</b><div class="bar" style="margin-top:6px"><i style="width:${p}%"></i></div></div><span class="small muted">${p}%</span></div>`;
    el.onclick=()=>go(x=>Capitol(x,c.id), c.scurt||c.titlu); caps.appendChild(el); });
  $('#quick',v).onclick=()=>go(x=>Mix(x),'Sesiune rapidă');
  $('#tAF',v).onclick=()=>go(x=>AFGame(x),'Adevărat / Fals');
  $('#tMatch',v).onclick=()=>go(x=>Match(x),'Potrivește');
  $('#tDue',v).onclick=()=>go(x=>Flash(x,null),'Carduri');
  $('#tWrong',v).onclick=()=>{ if(!wrongN) return toast('Nicio greșeală de reluat. Wow. 😎'); go(x=>Quiz(x,{wrong:true}),'Greșelile mele'); };
  $('#tRand',v).onclick=()=>{ const c=CAP[Math.floor(Math.random()*CAP.length)]; const i=Math.floor(Math.random()*c.sectiuni.length); go(x=>Capitol(x,c.id,i),c.scurt||c.titlu); };
  $('#tSim',v).onclick=()=>{ const t=TESTE[Math.floor(Math.random()*TESTE.length)]; go(x=>Test(x,t.nr,true),'Simulare – Testul '+t.nr); };
  $('#exam',v).onchange=e=>{S.examDate=e.target.value;save();go(Home,'Titularizare',false)};
  $('#goal',v).onchange=e=>{S.goal=+e.target.value;save();go(Home,'Titularizare',false)};
  v.querySelectorAll('#plan .plantask').forEach(el=>el.onclick=()=>runTask(planToday().tasks[+el.dataset.i]));
  $('#tGen',v).onclick=()=>go(x=>Generator(x),'Subiect nou');
  $('#tS3',v).onclick=()=>go(x=>AntrenorS3(x),'Antrenor Subiectul III');
  $('#tOfi',v).onclick=()=>go(x=>OficialeList(x),'Examene oficiale');
  $('#akeyS',v).onclick=()=>{ setApiKey($('#akey',v).value.trim()); toast(apiKey()?'Cheie salvată 🔑':'Cheie ștearsă'); document.querySelectorAll('[data-ai-status]').forEach(el=>el.textContent=aiStatusText()); };
  $('#exp',v).onclick=exportData; $('#imp',v).onclick=importData;
}
function exportData(){
  const txt = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  if(navigator.share){ navigator.share({title:'Progres titularizare',text:txt}).catch(()=>{}); }
  else if(navigator.clipboard){ navigator.clipboard.writeText(txt).then(()=>toast('Copiat în clipboard')); }
  else prompt('Copiază textul:',txt);
}
function importData(){
  const txt = prompt('Lipește aici textul exportat:'); if(!txt) return;
  try{ S = Object.assign(load(), JSON.parse(decodeURIComponent(escape(atob(txt.trim()))))); save(); toast('Importat ✔'); tab('home'); }
  catch(e){ toast('Textul nu pare valid'); }
}

/* ================= TEORIE ================= */
function Teorie(v){
  v.innerHTML = `<input class="search" type="search" placeholder="Caută în teorie (ex: Holland, empatie, TSA)…" id="q"><div id="res"></div>`;
  const res=$('#res',v);
  const list=()=>{ res.innerHTML=''; let part='';
    CAP.forEach(c=>{ if(c.parte!==part){part=c.parte; const h=document.createElement('h3'); h.textContent=part; res.appendChild(h);}
      const p=capProgress(c.id); const el=document.createElement('div'); el.className='card tap';
      el.innerHTML=`<div class="row"><span style="font-size:24px">${c.emoji||'📘'}</span><div class="grow"><div class="small muted">Capitolul ${c.nr}</div><b>${esc(c.titlu)}</b><div class="small muted">${c.sectiuni.length} fișe · ${CARDS.filter(x=>x.c===c.id).length} carduri · ${GRILE.filter(x=>x.c===c.id).length} grile</div></div><span class="pill ${p>=80?'ok':''}">${p}%</span></div>`;
      el.onclick=()=>go(x=>Capitol(x,c.id),c.scurt||c.titlu); res.appendChild(el); }); };
  list();
  $('#q',v).oninput=e=>{ const q=e.target.value.trim().toLowerCase(); if(q.length<2) return list();
    const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); const nq=norm(q);
    res.innerHTML=''; let n=0;
    CAP.forEach(c=>c.sectiuni.forEach((s,i)=>{ const blob=[s.titlu,...(s.puncte||[]),s.retine||''].join(' ');
      if(norm(blob).includes(nq)){ n++; const el=document.createElement('div'); el.className='card tap';
        const hit=[s.titlu,...(s.puncte||[])].find(p=>norm(p).includes(nq))||s.titlu;
        el.innerHTML=`<div class="small muted">${esc(c.scurt||c.titlu)}</div><b>${esc(s.titlu)}</b><div class="small">${esc(hit).slice(0,220)}</div>`;
        el.onclick=()=>go(x=>Capitol(x,c.id,i),c.scurt||c.titlu); res.appendChild(el);} }));
    CARDS.forEach(k=>{ if(norm(k.q+' '+k.a).includes(nq)){ n++; const el=document.createElement('div'); el.className='card';
      el.innerHTML=`<span class="pill">card</span> <b>${esc(k.q)}</b><div class="small" style="margin-top:6px">${fmt(k.a)}</div>`; res.appendChild(el);} });
    if(!n) res.innerHTML='<p class="muted center">Nimic găsit. Încearcă alt cuvânt.</p>'; };
}
function Capitol(v,id,focus){
  const c=capById[id]; S.read[id]=S.read[id]||{};
  v.innerHTML=`<div class="small muted">${esc(c.parte)} · Capitolul ${c.nr}</div><h2>${esc(c.titlu)}</h2>
   <div class="btns" style="margin-bottom:14px"><button class="btn ghost" id="fc">🃏 Carduri</button><button class="btn ghost" id="gr">✅ Grilă</button>${TTS.ok?'<button class="btn ghost" id="lsall">🎧 Ascultă tot</button>':''}</div><div id="secs"></div>`;
  cleanup=stopSpeak;
  if(TTS.ok) $('#lsall',v).onclick=e=>{ const b=e.currentTarget; if(b.dataset.on){ stopSpeak(); b.dataset.on=''; b.textContent='🎧 Ascultă tot'; return; }
    b.dataset.on='1'; b.textContent='⏹ Oprește'; speak([c.titlu].concat(...c.sectiuni.map(secParts)), ()=>{ b.dataset.on=''; b.textContent='🎧 Ascultă tot'; }); tick(); };
  $('#fc',v).onclick=()=>go(x=>Flash(x,id),'Carduri – '+(c.scurt||c.titlu));
  $('#gr',v).onclick=()=>go(x=>Quiz(x,{cap:id}),'Grilă – '+(c.scurt||c.titlu));
  const secs=$('#secs',v);
  c.sectiuni.forEach((s,i)=>{ const el=document.createElement('div'); el.className='card sec'; el.id='sec'+i;
    const done=!!S.read[id][i];
    el.innerHTML=`<div class="row" style="align-items:flex-start"><h3 style="margin-top:0" class="grow">${esc(s.titlu)}</h3>${TTS.ok?'<button class="btn ghost ls" style="padding:6px 10px" aria-label="Ascultă fișa">🔊</button>':''}</div>${(s.puncte||[]).length?'<ul class="pts">'+s.puncte.map(p=>'<li>'+fmtInline(p)+'</li>').join('')+'</ul>':''}
      ${s.retine?`<div class="key">💡 <b>De reținut:</b> ${inline(s.retine)}</div>`:''}
      <button class="rd btn ${done?'ok':'ghost'} block" style="margin-top:10px">${done?'✔ Citit':'Marchează ca citit'}</button>
      <details class="ask" style="margin-top:8px"><summary class="small" style="cursor:pointer;color:var(--accent);font-weight:600">🤖 Întreabă AI despre fișa asta</summary>
        <div class="chips" style="margin-top:8px"><button data-q="Explică-mi fișa asta mai simplu, ca unui prieten.">🧸 Explică simplu</button><button data-q="Dă-mi un exemplu concret din școală pentru ideile din fișă.">🏫 Exemplu din școală</button><button data-q="Cum ar putea apărea asta la subiectul de titularizare? Dă-mi o cerință posibilă și reperele de punctaj.">🎯 Cum pică la examen</button><button data-q="Dă-mi un truc de memorare (mnemonic) pentru fișa asta.">🧠 Truc de memorare</button></div>
        <div class="row"><input class="grow" placeholder="sau scrie întrebarea ta…"><button class="btn">Întreabă</button></div><div class="aiout" hidden></div></details>`;
    const lsb=el.querySelector('.ls'); if(lsb) lsb.onclick=()=>{ if(lsb.dataset.on){ stopSpeak(); lsb.dataset.on=''; lsb.textContent='🔊'; return; } document.querySelectorAll('.ls').forEach(x=>{x.dataset.on='';x.textContent='🔊';}); lsb.dataset.on='1'; lsb.textContent='⏹'; speak(secParts(s), ()=>{ lsb.dataset.on=''; lsb.textContent='🔊'; }); };
    const ask=el.querySelector('.ask'), aout=ask.querySelector('.aiout'), ain=ask.querySelector('input'); let actl=null;
    const doAsk=async q=>{ if(!q) return; if(!aiOn()) return toast('AI nu e activ încă – vezi Setări pe Acasă'); if(actl) actl.abort(); actl=new AbortController();
      aout.hidden=false; aout.innerHTML='<p class="muted small">🤔 …</p>';
      try{ const t=await aiAsk(askPrompt(c,s,q), t=>aout.innerHTML=fmt(t), actl.signal); aout.innerHTML=fmt(t); tick(); }catch(e){ if(e.name!=='AbortError') aout.innerHTML=`<p class="small" style="color:var(--bad)">⚠️ ${esc(e.message||e)}</p>`; } };
    ask.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>doAsk(b.dataset.q));
    ask.querySelector('.row .btn').onclick=()=>doAsk(ain.value.trim()); ain.onkeydown=e=>{ if(e.key==='Enter') doAsk(ain.value.trim()); };
    el.querySelector('.rd').onclick=e=>{ S.read[id][i]=!S.read[id][i]; if(!S.read[id][i]) delete S.read[id][i]; else tick(); save();
      e.target.className='rd btn '+(S.read[id][i]?'ok':'ghost')+' block'; e.target.textContent=S.read[id][i]?'✔ Citit':'Marchează ca citit'; };
    secs.appendChild(el); });
  if(focus!=null) setTimeout(()=>{ const t=$('#sec'+focus); if(t) t.scrollIntoView({behavior:'smooth',block:'start'}); },60);
}
function fmtInline(p){ // permite sub-liste cu "; " nu – doar bold/italic și sub-bullets cu \n-
  if(p.includes('\n')) return fmt(p); return inline(p);
}

/* ================= CARDURI (Leitner) ================= */
const BOX_DAYS=[0,0,1,3,7,16];
function CarduriMenu(v){
  const due=CARDS.filter(c=>{const b=S.box[c.id];return !b||b.due<=Date.now()});
  v.innerHTML=`<div class="card"><b>Cum merge</b><p class="small muted" style="margin:6px 0 0">Întoarce cardul, apoi spune-i sincer cât de bine l-ai știut. Cardurile știute revin peste 1, 3, 7, 16 zile; cele neștiute revin imediat. Fără efort inutil pe ce știi deja.</p></div>
   <button class="btn block" id="all" style="margin-bottom:14px">Repetă cardurile de azi (${due.length})</button>
   <h3>Pe capitole</h3><div id="l"></div>`;
  $('#all',v).onclick=()=>go(x=>Flash(x,null),'Carduri');
  const l=$('#l',v);
  CAP.forEach(c=>{ const cs=CARDS.filter(x=>x.c===c.id); if(!cs.length) return; const kn=cs.filter(x=>(S.box[x.id]||{}).b>=3).length;
    const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span>${c.emoji||'📘'}</span><div class="grow"><b class="small">${esc(c.titlu)}</b><div class="bar" style="margin-top:6px"><i style="width:${Math.round(100*kn/cs.length)}%"></i></div></div><span class="small muted">${kn}/${cs.length}</span></div>`;
    el.onclick=()=>go(x=>Flash(x,c.id,true),'Carduri – '+(c.scurt||c.titlu)); l.appendChild(el); });
}
function Flash(v,capId,all){
  let pool=CARDS.filter(c=>!capId||c.c===capId);
  if(!all) pool=pool.filter(c=>{const b=S.box[c.id];return !b||b.due<=Date.now()});
  // întâi cele noi / cutii mici, amestecate
  pool=shuffle(pool).sort((a,b)=>((S.box[a.id]||{}).b||0)-((S.box[b.id]||{}).b||0)).slice(0,25);
  if(!pool.length){ v.innerHTML='<div class="card center"><div class="big">🎉</div><p>Nimic de repetat acum. Ai terminat pe azi la carduri!</p><button class="btn ghost" id="b">Repetă oricum tot capitolul</button></div>';
    $('#b',v).onclick=()=>go(x=>Flash(x,capId,true),$('#title').textContent,false); return; }
  let i=0, ok=0;
  const show=()=>{
    if(i>=pool.length){ v.innerHTML=`<div class="card center"><div class="big">${ok}/${pool.length}</div><p>carduri știute din prima. ${ok/pool.length>.7?'Excelent! 🌟':'Le reîntâlnești curând, fără grabă. 💜'}</p><button class="btn block" id="again">Încă o rundă</button></div>`;
      $('#again',v).onclick=()=>go(x=>Flash(x,capId,all),$('#title').textContent,false); return; }
    const c=pool[i]; const cap=capById[c.c];
    v.innerHTML=`<div class="row small muted" style="margin-bottom:8px"><span class="grow">${esc(cap?cap.scurt||cap.titlu:'')}</span><span>${i+1}/${pool.length}</span></div>
     <div class="flash" id="f"><div class="inner"><div class="face"><div class="q">${esc(c.q)}</div><div class="hint">atinge ca să întorci</div></div>
     <div class="face verso"><div class="a">${fmt(c.a)}</div></div></div></div>
     <div class="btns" id="rate" style="visibility:hidden"><button class="btn bad" data-r="0">Nu știam</button><button class="btn warn" data-r="1">Pe jumătate</button><button class="btn ok" data-r="2">Știam</button></div>`;
    const f=$('#f',v); f.onclick=()=>{ f.classList.toggle('flip'); $('#rate',v).style.visibility='visible'; };
    v.querySelectorAll('#rate button').forEach(b=>b.onclick=()=>{ const r=+b.dataset.r; const cur=(S.box[c.id]||{b:1}).b;
      const nb = r===2? Math.min(5,cur+1) : r===1? Math.max(1,cur) : 1;
      S.box[c.id]={b:nb,due:Date.now()+BOX_DAYS[nb]*864e5 - (r===0?0:3600e3)}; if(r===2) ok++; tick(); save(); i++; show(); });
  };
  show();
}

/* ================= GRILE ================= */
function GrileMenu(v){
  v.innerHTML=`<button class="btn block" id="mix">🎯 10 grile amestecate</button>
   <div class="btns" style="margin:10px 0 14px"><button class="btn ghost" id="af">⏱️ A/F fulger</button><button class="btn ghost" id="m">🧩 Potrivește</button></div>
   <h3>Pe capitole</h3><div id="l"></div>`;
  $('#mix',v).onclick=()=>go(x=>Quiz(x,{}),'Grile');
  $('#af',v).onclick=()=>go(x=>AFGame(x),'Adevărat / Fals');
  $('#m',v).onclick=()=>go(x=>Match(x),'Potrivește');
  const l=$('#l',v);
  CAP.forEach(c=>{ const gs=GRILE.filter(x=>x.c===c.id); if(!gs.length) return; const ok=gs.filter(x=>(S.qstat[x.id]||{}).last).length;
    const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span>${c.emoji||'📘'}</span><div class="grow"><b class="small">${esc(c.titlu)}</b></div><span class="pill ${ok===gs.length?'ok':''}">${ok}/${gs.length}</span></div>`;
    el.onclick=()=>go(x=>Quiz(x,{cap:c.id}),'Grilă – '+(c.scurt||c.titlu)); l.appendChild(el); });
}
function Quiz(v,opt){
  let pool = GRILE.filter(g=>(!opt.cap||g.c===opt.cap)&&(!opt.wrong||S.wrong[g.id]));
  if(opt.wrong) pool = pool.concat(AF.filter(a=>S.wrong[a.id]).map(afAsQ));
  // prioritizează ce n-ai făcut sau ai greșit
  pool = shuffle(pool).sort((a,b)=>score(a)-score(b)).slice(0, opt.n||10);
  pool = shuffle(pool);
  if(!pool.length){ v.innerHTML='<p class="muted center">Nu sunt grile aici încă.</p>'; return; }
  let i=0, ok=0;
  const show=()=>{
    if(i>=pool.length) return end();
    const g=pool[i]; const order=shuffle(g.o.map((t,k)=>({t,k})));
    v.innerHTML=`<div class="row small muted"><span class="grow">${esc((capById[g.c]||{}).scurt||'')}</span><span>${i+1}/${pool.length}</span></div>
      <div class="bar" style="margin:8px 0 14px"><i style="width:${100*i/pool.length}%"></i></div>
      <div class="card"><b style="font-size:18px">${esc(g.q)}</b></div><div id="o"></div><div id="x"></div>`;
    const o=$('#o',v);
    order.forEach(({t,k})=>{ const b=document.createElement('button'); b.className='opt'; b.textContent=t; b.dataset.k=k;
      b.onclick=()=>{ if(o.dataset.done) return; o.dataset.done=1; const right=k===g.r;
        o.querySelectorAll('.opt').forEach(x=>{ if(+x.dataset.k===g.r) x.classList.add('right'); });
        if(!right) b.classList.add('wrong'); record(g.id,right); if(right) ok++;
        $('#x',v).innerHTML=`<div class="explain"><b>${right?pickOne(PRAISE):pickOne(COMFORT)}</b>${g.e?'<br>'+inline(g.e):''}</div>
          <button class="btn block" style="margin-top:14px" id="nx">${i+1<pool.length?'Următoarea →':'Vezi scorul'}</button>`;
        $('#nx',v).onclick=()=>{i++;show();}; };
      o.appendChild(b); });
  };
  const end=()=>{ const p=Math.round(100*ok/pool.length);
    v.innerHTML=`<div class="card center"><div class="big">${ok}/${pool.length}</div><p>${p>=90?'Nota 10, pe bune. 🏆':p>=70?'Foarte bine! Încă puțin și e perfect. 🌟':p>=50?'Ok, baza e acolo. Greșelile s-au dus la „Greșelile mele”. 💪':'Normal la început. Citește fișa capitolului și revino, o să vezi diferența. 💜'}</p>
     <button class="btn block" id="a">Încă o rundă</button>${opt.cap?'<button class="btn ghost block" style="margin-top:8px" id="t">Recitește teoria</button>':''}</div>`;
    $('#a',v).onclick=()=>go(x=>Quiz(x,opt),$('#title').textContent,false);
    if(opt.cap) $('#t',v).onclick=()=>go(x=>Capitol(x,opt.cap),'Teorie'); };
  show();
}
function afAsQ(a){ return {id:a.id,c:a.c,q:'Adevărat sau fals? '+a.s,o:['Adevărat','Fals'],r:a.v?0:1,e:a.e}; }
function score(g){ const s=S.qstat[g.id]; if(!s) return 0; return s.last? 2+s.ok : 1; }
function record(id,right){ const s=S.qstat[id]||{ok:0,ko:0}; right?s.ok++:s.ko++; s.last=right; S.qstat[id]=s;
  if(right) delete S.wrong[id]; else S.wrong[id]=true; tick(); save(); }
function pickOne(a){return a[Math.floor(Math.random()*a.length)]}

/* Sesiune rapidă: mix carduri ca grile + A/F + grile */
function Mix(v){ Quiz(v,{n:10}); }

/* ================= ADEVĂRAT / FALS FULGER ================= */
function AFGame(v){
  v.innerHTML=`<div class="card center"><div class="big">⏱️ 60s</div><p>Câte afirmații poți judeca corect într-un minut? Greșelile te costă 3 secunde.</p>
   <button class="btn block" id="go">Start</button></div>`;
  $('#go',v).onclick=()=>{
    let t=60, n=0, err=[]; const pool=shuffle(AF); let i=0;
    const iv=setInterval(()=>{ t--; const el=$('#tm',v); if(el) el.textContent=t+'s'; if(t<=0) finish(); },1000);
    cleanup=()=>clearInterval(iv);
    const show=()=>{ if(i>=pool.length) return finish(); const a=pool[i];
      v.innerHTML=`<div class="row"><span class="timer grow" id="tm">${t}s</span><span class="pill">${n} corecte</span></div>
       <div class="card" style="min-height:170px;display:flex;align-items:center;margin-top:12px"><b style="font-size:19px">${esc(a.s)}</b></div>
       <div class="tf"><button class="btn bad" id="f">Fals</button><button class="btn ok" id="d">Adevărat</button></div>`;
      const ans=val=>{ const right=val===a.v; record(a.id,right); if(right) n++; else { t=Math.max(0,t-3); err.push(a);} i++; show(); };
      $('#d',v).onclick=()=>ans(true); $('#f',v).onclick=()=>ans(false); };
    const finish=()=>{ clearInterval(iv); cleanup=null; const rec=n>(S.best.af||0); if(rec){S.best.af=n;save();}
      v.innerHTML=`<div class="card center"><div class="big">${n}</div><p>${rec?'Record nou! 🏆':'corecte'} </p><button class="btn block" id="r">Din nou</button></div>
       ${err.length?'<h3>Ce merită recitit</h3>'+err.map(a=>`<div class="card"><b>${esc(a.s)}</b><div class="small" style="margin-top:6px">${a.v?'✅ Adevărat':'❌ Fals'}${a.e?' – '+inline(a.e):''}</div></div>`).join(''):''}`;
      $('#r',v).onclick=()=>go(x=>AFGame(x),'Adevărat / Fals',false); };
    show();
  };
}

/* ================= POTRIVEȘTE ================= */
function Match(v){
  const src = CARDS.filter(c=>c.short); // carduri cu răspuns scurt
  const set = pick(src.length>=5?src:CARDS.map(c=>({...c,short:c.a.split('\n')[0].slice(0,90)})),5);
  const L=shuffle(set.map(c=>({id:c.id,t:c.term||c.q}))), R=shuffle(set.map(c=>({id:c.id,t:c.short})));
  let sel=null, done=0, mistakes=0;
  v.innerHTML=`<p class="small muted">Atinge un termen din stânga, apoi definiția lui din dreapta.</p><div class="match" id="m"></div>`;
  const m=$('#m',v);
  for(let k=0;k<5;k++){ [L[k],R[k]].forEach((it,side)=>{ const b=document.createElement('button'); b.textContent=it.t; b.dataset.id=it.id; b.dataset.side=side;
    b.onclick=()=>{ if(side===0){ m.querySelectorAll('[data-side="0"]').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); sel=b; return; }
      if(!sel) return toast('Alege întâi termenul din stânga');
      if(sel.dataset.id===b.dataset.id){ sel.classList.add('done'); b.classList.add('done'); sel.classList.remove('sel'); sel=null; done++; tick();
        if(done===5){ setTimeout(()=>{ v.innerHTML=`<div class="card center"><div class="big">🧩</div><p>Gata! ${mistakes?mistakes+' încercări greșite.':'Fără nicio greșeală! 🏆'}</p><button class="btn block" id="r">Încă un set</button></div>`; $('#r',v).onclick=()=>go(x=>Match(x),'Potrivește',false); },350);} }
      else { mistakes++; b.classList.add('err'); setTimeout(()=>b.classList.remove('err'),400); } };
    m.appendChild(b); }); }
}

/* ================= SUBIECTE ================= */
function Subiecte(v){
  v.innerHTML=`<div class="card tap aihero" id="ofi"><div class="row"><span style="font-size:28px">🏛️</span><div class="grow"><b>Examene oficiale (cu AI)</b><div class="small muted">${OFI.length} variante reale · corectare după barem</div></div><span style="font-size:20px">›</span></div></div><h3>Cele 20 de teste rezolvate</h3><div class="card"><b>Cum le folosești</b><p class="small muted" style="margin:6px 0 0">Citești cerința, îți scrii răspunsul (sau doar planul lui), apoi deschizi reperele din „Sugestii de rezolvare” și bifezi ce ai acoperit. Așa vezi exact ce ți-ar lipsi la examen. Ce scrii se salvează automat.</p></div><div id="l"></div>`;
  $('#ofi',v).onclick=()=>go(x=>OficialeList(x),'Examene oficiale');
  const l=$('#l',v);
  TESTE.forEach(t=>{ const tot=t.subiecte.reduce((a,s)=>a+s.items.reduce((b,it)=>b+(it.rep||[]).length,0),0);
    const chk=Object.keys(S.checks).filter(k=>k.startsWith(t.nr+'-')&&S.checks[k]).length;
    const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span style="font-size:22px">📝</span><div class="grow"><b>Testul nr. ${t.nr}</b><div class="small muted">${esc(t.tema||'')}</div><div class="bar" style="margin-top:6px"><i style="width:${tot?Math.round(100*chk/tot):0}%"></i></div></div></div>`;
    el.onclick=()=>go(x=>Test(x,t.nr),'Testul nr. '+t.nr); l.appendChild(el); });
}
function Test(v,nr,sim){
  const t=TESTE.find(x=>x.nr===nr); let cur=0;
  v.innerHTML=`${sim?`<div class="card row"><span class="grow">Simulare: 4 ore, ca la examen. Poți opri oricând.</span><span class="timer" id="tm">4:00:00</span></div>`:''}
    <div class="chips" id="ch">${t.subiecte.map((s,i)=>`<button data-i="${i}" class="${i?'':'on'}">${esc(s.titlu)}</button>`).join('')}</div><div id="sb"></div>`;
  if(sim){ const end=Date.now()+4*3600e3; const iv=setInterval(()=>{ const r=Math.max(0,end-Date.now()); const h=Math.floor(r/3600e3),m=Math.floor(r%3600e3/60e3),s=Math.floor(r%60e3/1e3);
    const el=$('#tm',v); if(el) el.textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; if(!r){clearInterval(iv);toast('Timpul a expirat! ⏰');} },1000); cleanup=()=>clearInterval(iv); }
  const render=()=>{ const s=t.subiecte[cur]; const sb=$('#sb',v);
    sb.innerHTML=`<div class="card"><div class="row"><b class="grow">${esc(s.titlu)}</b><span class="pill">${s.puncte||30} p</span></div>${s.text?`<div style="margin-top:8px">${fmt(s.text)}</div>`:''}</div><div id="its"></div>`;
    const its=$('#its',sb);
    s.items.forEach((it,j)=>{ const key=`${nr}-${cur}-${j}`; const el=document.createElement('div'); el.className='card';
      el.innerHTML=`<div>${fmt(it.cer)}</div>
        <details style="margin-top:10px"><summary class="small" style="cursor:pointer;color:var(--accent);font-weight:600">✍️ Scrie răspunsul</summary><textarea placeholder="Scrie aici, se salvează singur…">${esc(S.answers[key]||'')}</textarea></details>
        ${(it.rep||[]).length?`<details style="margin-top:8px"><summary class="small" style="cursor:pointer;color:var(--accent);font-weight:600">🔑 Repere din rezolvare (${it.rep.length})</summary>
          <div style="margin-top:8px">${it.rep.map((r,k)=>`<label class="check"><input type="checkbox" data-k="${key}-${k}" ${S.checks[key+'-'+k]?'checked':''}><span>${fmtInline(r)}</span></label>`).join('')}</div></details>`:''}`;
      const ta=el.querySelector('textarea'); let tmr; ta.oninput=()=>{clearTimeout(tmr);tmr=setTimeout(()=>{S.answers[key]=ta.value;save();},400)};
      el.querySelectorAll('input[type=checkbox]').forEach(cb=>cb.onchange=()=>{ S.checks[cb.dataset.k]=cb.checked; if(cb.checked) tick(); save(); });
      const pm=/(\d+)\s*(?:de\s*)?puncte?/i.exec(it.cer); const mx=pm?+pm[1]:(s.items.length===1?(s.puncte||30):10);
      aiPanel(el, ()=>{ S.answers[key]=ta.value; save(); return { examen:'concursul național de titularizare (test de antrenament din culegere)', text:s.text||'', cer:it.cer, max:mx,
        barem:(it.rep||[]).length?'Reperele din rezolvarea culegerii (nu barem oficial; folosește-le ca bază de corectare, punctajul e estimativ):\n- '+it.rep.join('\n- '):'', raspuns:ta.value, totalWords:words(ta.value) }; }, 't:'+key);
      its.appendChild(el); });
  };
  v.querySelectorAll('#ch button').forEach(b=>b.onclick=()=>{ v.querySelectorAll('#ch button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); cur=+b.dataset.i; render(); });
  render();
}

/* ================= AI (corectare și explicații în timp real) =================
   1) Pe claude.ai (Artifact): folosește Claude direct, fără cheie.
   2) Ca aplicație instalată: cu o cheie API Anthropic pusă în Setări (rămâne doar pe dispozitiv). */
const OFI = window.OFICIALE || [];
const AIKEY = 'titularizare-ai-key';
const AI = { sample:null, checked:false };
function apiKey(){ try { return localStorage.getItem(AIKEY)||''; } catch(e){ return ''; } }
function setApiKey(k){ try { k?localStorage.setItem(AIKEY,k):localStorage.removeItem(AIKEY); } catch(e){} }
function aiOn(){ return !!(AI.sample || apiKey()); }
function aiSource(){ return AI.sample ? 'Claude (prin claude.ai)' : (apiKey() ? 'cheia ta API' : ''); }
(async()=>{ try { if(window.claude && typeof window.claude.use==='function'){ AI.sample = await window.claude.use('sample'); } } catch(e){}
  AI.checked=true; document.querySelectorAll('[data-ai-status]').forEach(el=>el.textContent=aiStatusText()); })();
function aiStatusText(){ return aiOn() ? '🟢 AI activ – ' + aiSource() : (AI.checked||!window.claude ? '⚪ AI inactiv – adaugă o cheie API în Setări (Acasă)' : '⏳ verific dacă AI e disponibil…'); }

async function aiAsk(prompt, onText, signal, opt={}){
  if(AI.sample){
    try {
      const r = await AI.sample(prompt, { onText: ({text}) => onText && onText(text), signal, modelTier:opt.tier||'default', cache:false });
      return r.text;
    } catch(e){
      if(e && e.code==='not_granted'){ AI.sample=null; throw new Error('Nu ai permis accesul la Claude pentru pagina asta. Îl poți activa din meniul Permissions al paginii.'); }
      if(e && e.code==='rate_limited') throw new Error('Prea multe cereri într-un timp scurt. Mai încearcă peste un minut. ☕');
      throw new Error((e && e.message) || 'Eroare AI');
    }
  }
  const key = apiKey(); if(!key) throw new Error('AI nu e activ. Pune o cheie API în Setări (pe Acasă) sau deschide aplicația de pe claude.ai.');
  const res = await fetch('https://api.anthropic.com/v1/messages', { method:'POST', signal,
    headers:{ 'content-type':'application/json', 'x-api-key':key, 'anthropic-version':'2023-06-01', 'anthropic-dangerous-direct-browser-access':'true' },
    body: JSON.stringify({ model:'claude-sonnet-5-5', max_tokens:opt.maxTokens||2500, stream:true, messages:[{role:'user',content:prompt}] }) });
  if(!res.ok){ let m=''; try{ m=(await res.json()).error.message; }catch(e){}
    throw new Error(res.status===401?'Cheia API nu e validă.':(res.status===429?'Limită de cereri atinsă. Mai încearcă puțin mai târziu.':'Eroare API ('+res.status+') '+m)); }
  const rd = res.body.getReader(); const dec = new TextDecoder(); let buf='', text='';
  for(;;){ const {done,value} = await rd.read(); if(done) break; buf += dec.decode(value,{stream:true});
    let i; while((i=buf.indexOf('\n'))>=0){ const line=buf.slice(0,i).trim(); buf=buf.slice(i+1);
      if(!line.startsWith('data:')) continue; let ev; try{ ev=JSON.parse(line.slice(5)); }catch(e){ continue; }
      if(ev.type==='content_block_delta' && ev.delta && ev.delta.type==='text_delta'){ text+=ev.delta.text; onText && onText(text); }
      if(ev.type==='error') throw new Error(ev.error && ev.error.message || 'Eroare API'); } }
  return text;
}

const REGULI = `Reguli oficiale de evaluare (CNCE): se punctează orice modalitate de rezolvare corectă a cerințelor; nu se acordă punctaje intermediare, altele decât cele precizate explicit în barem; nu se acordă fracțiuni de punct (doar numere întregi).`;
function words(s){ return (String(s||'').trim().match(/\S+/g)||[]).length; }
function gradePrompt(ctx){
  return `Ești membru al comisiei de evaluare la ${ctx.examen}, proba scrisă CONSILIERE PSIHOPEDAGOGICĂ (România). Corectezi UN SINGUR item din lucrarea unei candidate.

${REGULI}
${ctx.barem ? (ctx.baremLabel||'BAREMUL OFICIAL pentru acest item:')+'\n' + ctx.barem : 'Pentru acest item NU avem baremul oficial. Aplică logica baremelor oficiale recente: punctajul se împarte egal pe elementele cerute (ex. „două abilități” pentru 2p = câte 1p); când cerința e de descriere/explicare/exemplificare/argumentare iar candidata doar enumeră, acordă punctaj parțial redus (de regulă câte 1p pe element); la eseuri structurate, distribuie punctajul rezonabil pe reperele din structură. Spune explicit că punctajul este ESTIMATIV, nu după barem oficial.'}

CONTEXTUL SUBIECTULUI:
${ctx.text||'(fără text suport)'}

CERINȚA (${ctx.max} puncte):
${ctx.cer}

RĂSPUNSUL CANDIDATEI (${words(ctx.raspuns)} cuvinte la acest item; ${ctx.totalWords} cuvinte în tot subiectul; o pagină de examen scrisă de mână ≈ 250–300 de cuvinte):
"""
${ctx.raspuns||'(gol)'}
"""

Instrucțiuni:
- Fii corect și realist, ca o comisie reală: nici generos, nici zgârcit. Nu inventa cerințe în plus. Nu inventa surse, autori sau citate.
- Dacă răspunsul e gol sau în afara subiectului, punctajul e 0.
- Scrie în limba română, pe ton cald și direct (te adresezi candidatei cu „tu”), concis.

Formatul răspunsului (respectă-l exact):
PUNCTAJ: <număr întreg>/${ctx.max}
**Ce ai luat:**
- …
**Ce lipsește / unde ai pierdut puncte:**
- …
**Ca să iei punctajul maxim:**
(2–6 rânduri concrete: ce ai adăuga sau reformula)`;
}
function modelPrompt(ctx){
  return `Ești profesor consilier școlar cu experiență în pregătirea candidaților pentru ${ctx.examen}, proba CONSILIERE PSIHOPEDAGOGICĂ (România).
Scrie un RĂSPUNS-MODEL de punctaj maxim pentru cerința de mai jos, așa cum l-ar scrie un candidat foarte bine pregătit, pe foaia de examen.

${REGULI}
${ctx.barem ? (ctx.baremLabel||'BAREMUL OFICIAL al itemului')+' (răspunsul trebuie să acopere tot ce se punctează aici):\n'+ctx.barem : 'Nu avem baremul oficial; acoperă explicit fiecare element cerut.'}

CONTEXTUL SUBIECTULUI:
${ctx.text||'(fără text suport)'}

CERINȚA (${ctx.max} puncte):
${ctx.cer}

Reguli de scriere:
- Lungimea să fie potrivită punctajului (un item de 1–2p: 1–3 rânduri; 4–8p: un paragraf sau o listă scurtă explicată; eseu: structurat pe repere, cu titluri scurte).
- Folosește terminologia de specialitate din literatura românească de consiliere școlară (programele de Consiliere și orientare/Consiliere și dezvoltare personală, ghidurile de consiliere), fără să inventezi citate, ani sau autori.
- Exemplele să nu conțină nume reale de persoane, școli sau localități.
- La final adaugă o linie: „💡 Truc de memorare:” cu o idee scurtă de a reține structura.
Scrie direct răspunsul, în română, fără introduceri.`;
}
function askPrompt(cap, sec, q){
  return `Ești un tutore cald și foarte clar care o ajută pe o profesoară consilier școlar să învețe pentru titularizare (proba Consiliere psihopedagogică, România).
Ea citește fișa de mai jos și are o întrebare. Răspunde în română, concis (max. ~200 de cuvinte), cu un exemplu concret din școală dacă ajută. Bazează-te pe fișă și pe cunoștințe standard de psihologie/consiliere școlară; dacă ceva nu e sigur, spune asta, nu inventa surse.

FIȘA – ${cap.titlu} / ${sec.titlu}:
${(sec.puncte||[]).map(p=>'- '+p).join('\n')}
${sec.retine?'De reținut: '+sec.retine:''}

ÎNTREBAREA EI: ${q}`;
}
function parseScore(t, max){ const m=/PUNCTAJ\s*:\s*(\d+)\s*\/\s*(\d+)/i.exec(t||''); if(!m) return null; return Math.max(0,Math.min(max,+m[1])); }
function aiHTML(t){ return fmt(String(t).replace(/^PUNCTAJ\s*:.*$/im,'').trim()); }

/* panou AI reutilizabil sub un item */
function aiPanel(host, getCtx, storeKey){
  const box=document.createElement('div');
  box.innerHTML=`<div class="btns" style="margin-top:10px"><button class="btn" data-a="grade">🤖 Corectează cu AI</button><button class="btn ghost" data-a="model">💡 Model de răspuns</button></div>
    <div class="aiout" hidden></div>`;
  host.appendChild(box);
  const out=box.querySelector('.aiout'); let ctrl=null;
  const prev = storeKey && S.ai && S.ai[storeKey];
  if(prev){ out.hidden=false; out.innerHTML = scoreBadge(prev.score, prev.max) + aiHTML(prev.text); }
  box.querySelectorAll('button[data-a]').forEach(b=>b.onclick=async()=>{
    if(!aiOn()){ toast('AI nu e activ încă – vezi Setări pe Acasă'); return; }
    const ctx=getCtx(); const mode=b.dataset.a;
    if(mode==='grade' && !String(ctx.raspuns||'').trim()){ toast('Scrie întâi un răspuns ✍️'); return; }
    if(ctrl) ctrl.abort(); ctrl=new AbortController();
    out.hidden=false; out.innerHTML='<p class="muted small">🤔 Claude citește…</p>';
    box.querySelectorAll('button').forEach(x=>x.disabled=true);
    try {
      const txt = await aiAsk(mode==='grade'?gradePrompt(ctx):modelPrompt(ctx), t=>{ out.innerHTML=(mode==='grade'?'':'<div class="pill" style="margin-bottom:6px">Model de răspuns</div>')+aiHTML(t); }, ctrl.signal);
      if(mode==='grade'){ const sc=parseScore(txt, ctx.max); out.innerHTML=scoreBadge(sc,ctx.max)+aiHTML(txt);
        if(storeKey){ S.ai=S.ai||{}; S.ai[storeKey]={score:sc,max:ctx.max,text:txt,at:Date.now()}; save(); } tick(); host.dispatchEvent(new CustomEvent('scored')); }
      else { out.innerHTML='<div class="pill" style="margin-bottom:6px">Model de răspuns</div>'+aiHTML(txt); }
    } catch(e){ if(e.name!=='AbortError') out.innerHTML=`<p class="small" style="color:var(--bad)">⚠️ ${esc(e.message||e)}</p>`; }
    box.querySelectorAll('button').forEach(x=>x.disabled=false);
  });
  return box;
}
function scoreBadge(sc,max){ if(sc==null) return ''; const p=sc/max; const cls=p>=.8?'ok':(p>=.5?'':'bad');
  return `<div class="score ${cls}">${sc}<small>/${max} p</small></div>`; }

/* ================= EXAMENE OFICIALE ================= */
function okey(id,si,itId){ return `o:${id}-${si}-${itId}`; }
function ofiScore(o){ let got=0, max=0, done=0, n=0;
  o.subiecte.forEach((s,si)=>s.items.forEach(it=>{ n++; max+=it.p; const r=(S.ai||{})[okey(o.id,si,it.id)]; if(r&&r.score!=null){ got+=r.score; done++; } }));
  return {got,max,done,n}; }
function OficialeList(v){
  v.innerHTML=`<div class="card"><b>Examene oficiale + corectare AI</b><p class="small muted" style="margin:6px 0 0">Subiectele reale de la titularizare/definitivat. Scrii răspunsul pe fiecare item, apoi AI-ul îl corectează după barem (unde avem baremul oficial) și îți spune exact ce lipsește.</p>
    <p class="small" style="margin:8px 0 0" data-ai-status>${aiStatusText()}</p></div>
    <div class="grid2"><div class="tile" id="tGen"><div class="ic">🎲</div><b>Subiect nou (AI)</b><small>variantă inedită, stil oficial</small></div>
    <div class="tile" id="tS3"><div class="ic">🎯</div><b>Antrenor Subiectul III</b><small>CS + metodă la întâmplare</small></div></div>
    <div id="g"></div><h3>Variante oficiale</h3><div id="l"></div>`;
  $('#tGen',v).onclick=()=>go(x=>Generator(x),'Subiect nou');
  $('#tS3',v).onclick=()=>go(x=>AntrenorS3(x),'Antrenor Subiectul III');
  const gl=$('#g',v); const gens=(S.gen||[]).slice().reverse();
  if(gens.length){ gl.innerHTML='<h3>Generate de tine</h3>'; gens.forEach(o=>{ const sc=ofiScore(o); const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span style="font-size:22px">${o.tip==='Antrenament'?'🎯':'🎲'}</span><div class="grow"><b>${esc(o.titlu||o.varianta)}</b><div class="small muted">${esc(o.data)} · ${sc.done}/${sc.n} itemi corectați</div></div>${sc.done?`<span class="pill">${sc.got}/${sc.max}</span>`:''}<button class="btn ghost" data-del style="padding:6px 10px">🗑</button></div>`;
    el.onclick=e=>{ if(e.target.closest('[data-del]')){ e.stopPropagation(); S.gen=S.gen.filter(x=>x.id!==o.id); save(); go(x=>OficialeList(x),'Examene oficiale',false); return; } go(x=>Oficial(x,o.id), o.titlu||'Subiect generat'); };
    gl.appendChild(el); }); }
  const l=$('#l',v);
  OFI.slice().sort((a,b)=>b.an-a.an||(a.tip>b.tip?-1:1)).forEach(o=>{ const sc=ofiScore(o); const el=document.createElement('div'); el.className='card tap';
    el.innerHTML=`<div class="row"><span style="font-size:22px">${o.tip==='Definitivat'?'🎓':'🏛️'}</span><div class="grow"><b>${o.tip} ${o.an} · ${esc(o.varianta)}</b>
      <div class="small muted">${o.barem?'✅ cu barem oficial':'barem estimat de AI'} · ${sc.done}/${sc.n} itemi corectați</div>
      <div class="bar" style="margin-top:6px"><i style="width:${Math.round(100*sc.done/sc.n)}%"></i></div></div>${sc.done?`<span class="pill">${sc.got}/${sc.max}</span>`:''}</div>`;
    el.onclick=()=>go(x=>Oficial(x,o.id),`${o.tip} ${o.an}`); l.appendChild(el); });
}
function findExam(id){ return OFI.find(x=>x.id===id) || (S.gen||[]).find(x=>x.id===id); }
function Oficial(v,id){
  const o=findExam(id); if(!o){ v.innerHTML='<div class="card">Subiectul nu mai există.</div>'; return; } let cur=0; let iv=null;
  v.innerHTML=`${o.nota?`<div class="card key">ℹ️ ${esc(o.nota)}</div>`:''}
    <div class="card row"><span class="grow small">${esc(o.data||'')} · 4 ore · 10p din oficiu</span><button class="btn ghost" id="simb">⏱️ Pornește 4h</button><span class="timer" id="tm" hidden></span></div>
    <div class="chips" id="ch">${o.subiecte.map((s,i)=>`<button data-i="${i}" class="${i?'':'on'}">${esc(s.titlu)}</button>`).join('')}<button data-i="r">📊 Rezultat</button></div><div id="sb"></div>`;
  $('#simb',v).onclick=()=>{ $('#simb',v).hidden=true; const tm=$('#tm',v); tm.hidden=false; const end=Date.now()+4*3600e3;
    iv=setInterval(()=>{ const r=Math.max(0,end-Date.now()); const h=Math.floor(r/3600e3),m=Math.floor(r%3600e3/60e3),s=Math.floor(r%60e3/1e3);
      tm.textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; if(!r){clearInterval(iv);toast('Timpul a expirat! ⏰');} },1000); };
  cleanup=()=>{ if(iv) clearInterval(iv); };
  const subWords=si=>o.subiecte[si].items.reduce((a,it)=>a+words(S.answers[okey(o.id,si,it.id)]),0);
  const render=()=>{ const sb=$('#sb',v);
    if(cur==='r'){ const sc=ofiScore(o); const full=sc.max===90; const nota=(sc.got+10)/10;
      sb.innerHTML=`<div class="card hero"><div class="muted small">${full?'Notă estimată':'Punctaj'} (din ${sc.done}/${sc.n} itemi corectați)</div><div class="big">${full?nota.toFixed(2):sc.got+' / '+sc.max}</div>
        <div class="small">${full?sc.got+' din '+sc.max+' puncte + 10 din oficiu':'puncte la acest subiect'}</div></div>
        ${o.subiecte.map((s,si)=>{ let g=0,m=0; const rows=s.items.map(it=>{ const r=(S.ai||{})[okey(o.id,si,it.id)]; m+=it.p; if(r&&r.score!=null) g+=r.score;
          return `<div class="row small" style="padding:4px 0;border-top:1px solid var(--line)"><span class="grow">${esc(it.id)}. ${esc(it.cer.split('\n')[0].slice(0,70))}…</span><b>${r&&r.score!=null?r.score:'–'}/${it.p}</b></div>`; }).join('');
          return `<div class="card"><div class="row"><b class="grow">${esc(s.titlu)}</b><span class="pill">${g}/${m}</span></div>${rows}</div>`; }).join('')}
        ${full?'<p class="small muted">Nota e calculată ca la examen: (total + 10) / 10. Itemii necorectați intră cu 0.</p>':''}`;
      return; }
    const s=o.subiecte[cur];
    sb.innerHTML=`<div class="card"><div class="row"><b class="grow">${esc(s.titlu)}</b><span class="pill">${s.puncte} p</span></div><div style="margin-top:8px">${fmt(s.text)}</div>
      <div class="btns" style="margin-top:10px"><button class="btn ghost" id="all">🤖 Corectează tot subiectul</button></div></div><div id="its"></div>`;
    const its=$('#its',sb);
    s.items.forEach(it=>{ const key=okey(o.id,cur,it.id); const el=document.createElement('div'); el.className='card';
      el.innerHTML=`<div class="row" style="align-items:flex-start"><div class="grow">${fmt((/^[A-Za-z0-9]+\./.test(it.cer)||it.id.length>2?'':'**'+it.id+'.** ')+it.cer)}</div><span class="pill">${it.p}p</span></div>
        <textarea style="min-height:${it.p<=3?90:(it.p<=8?150:260)}px" placeholder="Scrie răspunsul aici (se salvează singur)…">${esc(S.answers[key]||'')}</textarea>
        <div class="small muted wc"></div>
        ${it.barem?`<details style="margin-top:8px"><summary class="small" style="cursor:pointer;color:var(--accent);font-weight:600">🔑 Baremul oficial (uită-te după ce scrii 😉)</summary><div class="small" style="margin-top:6px">${inline(it.barem)}</div></details>`:''}`;
      const ta=el.querySelector('textarea'), wc=el.querySelector('.wc'); const upd=()=>{ const w=words(ta.value); wc.textContent=w?`${w} cuvinte ≈ ${(w/275).toFixed(1)} pagini`:''; }; upd();
      let tmr; ta.oninput=()=>{ upd(); clearTimeout(tmr); tmr=setTimeout(()=>{S.answers[key]=ta.value;save();},400); };
      const ctxFn=()=>{ S.answers[key]=ta.value; save(); return { baremLabel: o.genAI?'BAREM PROPUS (nu e oficial; folosește-l ca reper, aplicând regulile oficiale):':(o.tip==='Antrenament'?'BAREM (regulile din baremele oficiale recente pentru acest tip de item):':''), examen:o.genAI?'concursul național de titularizare (subiect de antrenament în stil oficial)':`${o.tip==='Definitivat'?'examenul național de definitivare':'concursul național de titularizare'} ${o.an}`, text:s.text, cer:it.cer, max:it.p, barem:it.barem||'', raspuns:ta.value, totalWords:subWords(cur) }; };
      el._panel=aiPanel(el, ctxFn, key); its.appendChild(el); });
    $('#all',sb).onclick=async()=>{ if(!aiOn()) return toast('AI nu e activ încă – vezi Setări pe Acasă');
      const cards=[...its.children].filter(c=>c.querySelector('textarea').value.trim()); if(!cards.length) return toast('Scrie întâi niște răspunsuri ✍️');
      $('#all',sb).disabled=true;
      for(const c of cards){ const b=c._panel.querySelector('button[data-a=grade]'); c.scrollIntoView({behavior:'smooth',block:'start'});
        await new Promise(res=>{ c.addEventListener('scored',res,{once:true}); b.click(); const chk=setInterval(()=>{ if(!b.disabled){ clearInterval(chk); res(); } },500); });
        if(c._panel.querySelector('.aiout').textContent.includes('⚠️')) break; }
      $('#all',sb).disabled=false; toast('Gata! Vezi 📊 Rezultat'); };
  };
  v.querySelectorAll('#ch button').forEach(b=>b.onclick=()=>{ v.querySelectorAll('#ch button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); cur=b.dataset.i==='r'?'r':+b.dataset.i; render(); });
  render();
}

/* ================= GENERATOR DE SUBIECTE (AI) ================= */
// Competențe specifice reale, preluate din subiectele oficiale primite (nu inventate)
const CS_REALE = [
  {cls:'a VIII-a', prog:'Consiliere și dezvoltare personală', cs:'2.2. Negocierea conflictelor prin diferite tehnici de comunicare', cont:'Conflictele: caracteristici, surse, modalități de prevenire. Stilurile de negociere a conflictelor sau de abordare constructivă prin aplicarea tehnicilor simple de comunicare'},
  {cls:'a IX-a', prog:'Consiliere și orientare', cs:'1.2. Examinarea caracteristicilor specifice adolescenței', cont:'Autocunoaștere și dezvoltare personală. Autocunoaștere: încredere în sine; factori care influențează încrederea în sine'},
  {cls:'a IX-a', prog:'Consiliere și orientare', cs:'1.2. Examinarea caracteristicilor specifice adolescenței', cont:'Creștere și schimbare: adolescența – caracteristicile dezvoltării fizice, cognitive, emoționale'},
  {cls:'a IX-a', prog:'Consiliere și orientare', cs:'2.2. Aplicarea tehnicilor de autocontrol emoțional', cont:'Comunicare și abilități sociale. Comunicare: forme de comunicare eficientă. Autocontrol emoțional: tehnici de autocontrol emoțional'},
  {cls:'a XI-a', prog:'Consiliere și orientare', cs:'4.2. Evaluarea opțiunilor personale privind dezvoltarea personală și profesională', cont:'Planificarea carierei – opțiuni și resurse de realizare a planului de carieră de scurtă și lungă durată'}
];
const METODE_S3 = [
  {m:'studiul de caz', tip:'metodă didactică interactivă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'problematizarea (învățarea prin problematizare)', tip:'metodă didactică modernă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'demonstrația', tip:'metodă didactică tradițională', b:'precizarea a două forme didactice ale metodei'},
  {m:'jocul de rol', tip:'metodă didactică interactivă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'brainstormingul', tip:'metodă didactică interactivă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'dezbaterea', tip:'metodă didactică interactivă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'învățarea prin cooperare', tip:'metodă didactică interactivă', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'conversația euristică', tip:'metodă didactică tradițională', b:'prezentarea a trei etape ale aplicării metodei'},
  {m:'explicația', tip:'metodă didactică tradițională', b:'precizarea a două forme ale metodei'},
  {m:'exercițiul', tip:'metodă didactică tradițională', b:'precizarea a două tipuri de exerciții'},
  {m:'proiectul', tip:'metodă didactică modernă', b:'prezentarea a trei etape ale realizării proiectului'},
  {m:'învățarea prin descoperire', tip:'metodă didactică modernă', b:'prezentarea a trei etape ale aplicării metodei'}
];
function s3Subiect(csx, mx){
  const metoda=mx.m.split(' (')[0];
  return { titlu:'Subiectul al III-lea', puncte:30,
    text:`Secvență din programa de ${csx.prog}, clasa ${csx.cls}:\nCompetență specifică ${csx.cs}.\nConținuturi: ${csx.cont}.\n\nRealizați un demers didactic pentru dezvoltarea competenței specifice ${csx.cs.split('.').slice(0,2).join('.')}. din secvența dată, utilizând ${metoda.toUpperCase()}, ca ${mx.tip}, prin:`,
    items:[
      {id:'a', cer:'Explicarea metodei didactice ('+metoda+').', p:5, barem:'5p. Notă (după baremele oficiale): dacă doar precizează semnificația metodei, fără explicare – 2p.'},
      {id:'b', cer:mx.b.charAt(0).toUpperCase()+mx.b.slice(1)+'.', p:6, barem:'2×3p sau 3×2p, după numărul de elemente cerute; câte puncte pentru fiecare element corect prezentat.'},
      {id:'c', cer:'Specificarea a două cerințe didactice în utilizarea metodei ('+metoda+').', p:6, barem:'2×3p – câte 3p pentru fiecare cerință didactică corectă.'},
      {id:'d', cer:'Menționarea unei activități de învățare adecvate pentru dezvoltarea competenței specifice date.', p:3, barem:'3p pentru orice activitate de învățare adecvată competenței specifice.'},
      {id:'e', cer:'Precizarea resurselor (de timp, de loc, material didactic, forme de organizare a clasei) utilizate în activitatea de învățare de la d.', p:4, barem:'4×1p – câte 1p pentru: timp, loc, material didactic, formă de organizare.'},
      {id:'f', cer:'Exemplificarea modului de dezvoltare a competenței specifice date, utilizând metoda ('+metoda+'), prin activitatea de învățare de la d.', p:6, barem:'Exemplificare adecvată (dezvoltă CS + folosește metoda + prin activitatea de la d.) – 6p; demers care nu respectă una dintre condiții – 2p.'}
    ]};
}
function stamp(){ const d=new Date(); return d.toLocaleDateString('ro-RO')+' '+d.toLocaleTimeString('ro-RO',{hour:'2-digit',minute:'2-digit'}); }
function addGen(o){ S.gen=(S.gen||[]); S.gen.push(o); if(S.gen.length>25) S.gen=S.gen.slice(-25); save(); }

function AntrenorS3(v){
  let csx=pickOne(CS_REALE), mx=pickOne(METODE_S3);
  const render=()=>{
    v.innerHTML=`<div class="card"><b>🎯 Antrenor pentru Subiectul al III-lea</b><p class="small muted" style="margin:6px 0 0">Structura e cea din baremele oficiale recente (a 5p · b 6p · c 6p · d 3p · e 4p · f 6p). Competențele specifice sunt doar cele reale, din subiectele oficiale primite; metoda se schimbă la fiecare tragere.</p></div>
      <div class="card"><div class="small muted">Clasa ${esc(csx.cls)} · ${esc(csx.prog)}</div><b>CS ${esc(csx.cs)}</b><div class="small" style="margin-top:6px">${esc(csx.cont)}</div>
      <div class="row" style="margin-top:12px"><span class="grow">Metoda: <b>${esc(mx.m)}</b></span></div>
      <div class="btns" style="margin-top:12px"><button class="btn ghost" id="rm">🔀 Altă metodă</button><button class="btn ghost" id="rc">🔀 Altă CS</button></div>
      <button class="btn block" style="margin-top:10px" id="ok">✍️ Începe subiectul</button></div>`;
    $('#rm',v).onclick=()=>{ mx=pickOne(METODE_S3.filter(x=>x!==mx)); render(); };
    $('#rc',v).onclick=()=>{ csx=pickOne(CS_REALE.filter(x=>x!==csx)); render(); };
    $('#ok',v).onclick=()=>{ const o={id:'s3-'+Date.now().toString(36), tip:'Antrenament', genAI:false, titlu:'S.III – '+mx.m.split(' (')[0]+' · cl. '+csx.cls, varianta:'Antrenament', data:stamp(),
        nota:'Subiect de antrenament construit de aplicație după structura oficială. Baremul de la fiecare item rezumă regulile din baremele oficiale recente.', subiecte:[s3Subiect(csx,mx)]};
      addGen(o); go(x=>Oficial(x,o.id), 'Antrenor S.III'); };
  };
  render();
}

function genPrompt(focus, avoid){
  const programa = CAP.map(c=>`- ${c.titlu}: ${c.sectiuni.map(s=>s.titlu.replace(/^\d+\.\s*/,'')).join('; ')}`).join('\n');
  const csList = CS_REALE.map((c,i)=>`${i+1}) clasa ${c.cls}, ${c.prog}: CS ${c.cs} | conținuturi: ${c.cont}`).join('\n');
  return `Ești autor de subiecte la Centrul Național de Curriculum și Evaluare (România), pentru proba scrisă CONSILIERE PSIHOPEDAGOGICĂ la concursul de titularizare. Creează O VARIANTĂ NOUĂ, INEDITĂ, de subiect, în stilul variantelor oficiale 2025–2026.

TEMATICA (alege doar de aici):
${programa}

FOCUS pentru această variantă (ca să fie diferită de altele): Subiectul I pe „${focus.s1}”, Subiectul al II-lea pe „${focus.s2}”, Subiectul al III-lea cu metoda „${focus.m}” și secvența de programă nr. ${focus.cs+1} din lista de mai jos.
${avoid.length?'EVITĂ temele acestor variante generate anterior: '+avoid.join(' | '):''}

SECVENȚE DE PROGRAMĂ REALE (pentru Subiectul al III-lea folosește EXACT una dintre ele, nu inventa competențe):
${csList}

STRUCTURA OBLIGATORIE (exact ca la examen, total 90p):
- Subiectul I (30p): un text-suport scurt, scris de tine (3–6 rânduri, fără citate atribuite unor autori reali), + cerința de a realiza o prezentare de 3 sau 4 pagini, punctată pe repere a, b, c… (8–11 repere). Ultimul reper: „respectarea numărului de pagini precizat” (1p). Suma = 30.
- Subiectul al II-lea (30p): un text-suport scurt + itemi A–G (G poate avea a) și b)). Include un item „Redactați un text coerent de 10 rânduri…” (4p: 3p conținut + 1p număr de rânduri). Suma = 30.
- Subiectul al III-lea (30p): secvența aleasă + „Realizați un demers didactic… utilizând [metoda], ca metodă didactică…, prin:” cu itemii a (5p, explicarea metodei), b (6p), c (6p, două cerințe didactice), d (3p, o activitate de învățare), e (4p, resurse timp/loc/material/forme de organizare), f (6p, exemplificare). Suma = 30.
- Punctajele sunt numere întregi. Verbele cerințelor ca la CNCE: precizați, menționați, enumerați, explicați, descrieți, exemplificați, argumentați, prezentați.
- Pentru FIECARE item scrie un „barem” scurt în stil CNCE: distribuția punctelor (ex. „2×2p”), un exemplu de răspuns corect („de exemplu: …”) și, unde e cazul, nota pentru enumerare fără explicare („câte 1p”). Fii corect științific, fără surse sau citate inventate.

Răspunde DOAR cu JSON valid, fără text în afara lui, în formatul:
{"titlu":"temă scurtă a variantei (max 6 cuvinte)","subiecte":[{"titlu":"Subiectul I","puncte":30,"text":"…","items":[{"id":"a","cer":"…","p":1,"barem":"…"}]},{"titlu":"Subiectul al II-lea","puncte":30,"text":"…","items":[…]},{"titlu":"Subiectul al III-lea","puncte":30,"text":"…","items":[…]}]}`;
}
function parseJSON(t){ const a=t.indexOf('{'), b=t.lastIndexOf('}'); if(a<0||b<a) throw new Error('Răspunsul AI nu conține un subiect complet. Mai încearcă o dată.'); return JSON.parse(t.slice(a,b+1)); }
function validGen(j){ if(!j||!Array.isArray(j.subiecte)||j.subiecte.length<3) throw new Error('Subiectul generat e incomplet. Mai încearcă o dată.');
  j.subiecte.forEach((s,i)=>{ if(!Array.isArray(s.items)||!s.items.length) throw new Error('Subiectul generat e incomplet. Mai încearcă o dată.');
    s.items.forEach((it,k)=>{ it.id=String(it.id||String.fromCharCode(97+k)); it.p=Math.max(1,Math.round(+it.p||1)); it.cer=String(it.cer||''); it.barem=String(it.barem||''); });
    s.puncte=s.items.reduce((a,it)=>a+it.p,0); s.text=String(s.text||''); s.titlu=String(s.titlu||['Subiectul I','Subiectul al II-lea','Subiectul al III-lea'][i]); });
  return j; }
function Generator(v){
  const spec=CAP.filter(c=>c.parte&&c.parte.startsWith('Tematica'));
  v.innerHTML=`<div class="card"><b>🎲 Subiect nou, în stil oficial</b><p class="small muted" style="margin:6px 0 0">AI-ul compune o variantă completă (I, II, III, 90p + 10 din oficiu), cu barem propus pe fiecare item, pe teme din programă. Tema principală e aleasă la întâmplare, ca să nu se repete. Durează aproximativ 1–2 minute.</p>
    <p class="small" style="margin:8px 0 0" data-ai-status>${aiStatusText()}</p></div>
    <div class="card"><div class="row"><span class="grow">Subiectul I despre</span><select id="s1"><option value="">🎲 la întâmplare</option>${spec.map(c=>`<option>${esc(c.scurt||c.titlu)}</option>`).join('')}</select></div>
    <div class="row" style="margin-top:8px"><span class="grow">Subiectul al II-lea despre</span><select id="s2"><option value="">🎲 la întâmplare</option>${spec.map(c=>`<option>${esc(c.scurt||c.titlu)}</option>`).join('')}</select></div>
    <button class="btn block" id="gen" style="margin-top:12px">✨ Generează varianta</button></div>
    <div class="aiout" id="out" hidden></div>
    <p class="small muted">Atenție: e un subiect de antrenament, nu unul oficial. Baremul e propus de AI după regulile oficiale; ia-l ca reper, nu ca adevăr absolut.</p>`;
  let ctrl=null;
  $('#gen',v).onclick=async()=>{
    if(!aiOn()) return toast('AI nu e activ încă – vezi Setări pe Acasă');
    const pickCap=sel=>{ const val=$(sel,v).value; return val || (pickOne(spec).scurt); };
    const s1=pickCap('#s1'); let s2=pickCap('#s2'); if(s2===s1 && !$('#s2',v).value) s2=pickOne(spec.filter(c=>(c.scurt)!==s1)).scurt;
    const focus={s1, s2, m:pickOne(METODE_S3).m, cs:Math.floor(Math.random()*CS_REALE.length)};
    const avoid=(S.gen||[]).filter(g=>g.genAI).slice(-6).map(g=>g.titlu);
    const out=$('#out',v), b=$('#gen',v); out.hidden=false; b.disabled=true;
    out.innerHTML='<p class="small">✍️ Claude scrie subiectul… <span id="pc">0</span> caractere</p>';
    if(ctrl) ctrl.abort(); ctrl=new AbortController();
    try{
      const txt=await aiAsk(genPrompt(focus,avoid), t=>{ const el=$('#pc',v); if(el) el.textContent=t.length; }, ctrl.signal, {maxTokens:9000, tier:'complex'});
      const j=validGen(parseJSON(txt));
      const o={id:'gen-'+Date.now().toString(36), tip:'Generat', genAI:true, titlu:'🎲 '+String(j.titlu||'Variantă nouă').slice(0,60), varianta:'Generat AI', data:stamp(),
        nota:'Subiect generat de AI pentru antrenament (nu e oficial). Baremul de la fiecare item e propus de AI după regulile CNCE.', subiecte:j.subiecte};
      addGen(o); tick(); go(x=>Oficial(x,o.id), 'Subiect nou');
    }catch(e){ if(e.name!=='AbortError') out.innerHTML=`<p class="small" style="color:var(--bad)">⚠️ ${esc(e.message||e)}</p>`; b.disabled=false; }
  };
}

/* ================= ASCULTĂ FIȘA (voce iPhone/Mac, offline) ================= */
const TTS = { ok: 'speechSynthesis' in window, voice:null };
function pickVoice(){ if(!TTS.ok) return null; const vs=speechSynthesis.getVoices(); return vs.find(v=>/^ro/i.test(v.lang)) || null; }
if(TTS.ok){ TTS.voice=pickVoice(); try{ speechSynthesis.onvoiceschanged=()=>{ TTS.voice=pickVoice(); }; }catch(e){} }
function plain(s){ return String(s).replace(/\*\*(.+?)\*\*/g,'$1').replace(/_(.+?)_/g,'$1').replace(/[→←↔]/g,', apoi ').replace(/[↑]/g,' ridicat').replace(/[↓]/g,' scăzut').replace(/[•\-–]\s/g,'').replace(/\s+/g,' ').trim(); }
function speak(parts, onEnd){
  if(!TTS.ok){ toast('Browserul nu are voce disponibilă'); return; }
  speechSynthesis.cancel(); let i=0;
  const next=()=>{ if(i>=parts.length){ onEnd&&onEnd(); return; } const u=new SpeechSynthesisUtterance(parts[i++]); u.lang='ro-RO'; if(TTS.voice) u.voice=TTS.voice; u.rate=1; u.onend=next; u.onerror=()=>{ onEnd&&onEnd(); }; speechSynthesis.speak(u); };
  next();
}
function stopSpeak(){ if(TTS.ok) speechSynthesis.cancel(); }
function secParts(s){ return [s.titlu.replace(/^\d+\.\s*/,'')].concat((s.puncte||[]).map(plain)).concat(s.retine?['De reținut: '+plain(s.retine)]:[]); }

/* ================= PLANUL ZILEI ================= */
function dayIndex(){ return Math.floor(new Date(today()+'T12:00')/864e5); }
function planToday(){
  const t=today(); S.plan=S.plan||{};
  if(S.plan[t] && S.plan[t].tasks) return S.plan[t];
  const di=dayIndex();
  // fișa zilei: capitolul cu cel mai mic progres, prima secțiune necitită (rotativ, ca să varieze)
  const caps=CAP.slice().sort((a,b)=>capProgress(a.id)-capProgress(b.id));
  const cand=caps.slice(0,4); const c=cand[di%cand.length];
  let si=c.sectiuni.findIndex((_,i)=>!(S.read[c.id]||{})[i]); if(si<0) si=di%c.sectiuni.length;
  const due=CARDS.filter(x=>{const b=S.box[x.id]; return !b || b.due<=Date.now();}).length;
  const kinds=['s3','oficial','af','match'];
  const extra=kinds[di%kinds.length];
  const tasks=[
    {k:'fisa', cap:c.id, sec:si, label:`📖 Fișa zilei: ${c.scurt||c.titlu} – ${c.sectiuni[si].titlu.replace(/^\d+\.\s*/,'')}`},
    {k:'carduri', label:`🃏 Carduri de repetat (${Math.min(due,20)||'câteva'})`},
    {k:'grila', label:'✅ 10 grile amestecate'},
    {k:extra, label:{s3:'🎯 Un Subiect III la antrenor', oficial:'🏛️ Un item dintr-un subiect oficial, cu corectare AI', af:'⏱️ Un minut de Adevărat/Fals', match:'🧩 O rundă de Potrivește'}[extra]}
  ];
  S.plan[t]={tasks, done:{}}; 
  const keys=Object.keys(S.plan).sort(); while(keys.length>14){ delete S.plan[keys.shift()]; }
  save(); return S.plan[t];
}
function runTask(tk){
  const pl=planToday(); pl.done[tk.k]=true; save();
  if(tk.k==='fisa'){ const c=capById[tk.cap]; go(x=>Capitol(x,tk.cap,tk.sec), c.scurt||c.titlu); }
  else if(tk.k==='carduri') go(x=>Flash(x,null),'Carduri');
  else if(tk.k==='grila') go(x=>Quiz(x,{n:10}),'Grile amestecate');
  else if(tk.k==='s3') go(x=>AntrenorS3(x),'Antrenor Subiectul III');
  else if(tk.k==='oficial') go(x=>OficialeList(x),'Examene oficiale');
  else if(tk.k==='af') go(x=>AFGame(x),'Adevărat / Fals');
  else if(tk.k==='match') go(x=>Match(x),'Potrivește');
}
function planHTML(){
  const pl=planToday(); const n=pl.tasks.filter(t=>pl.done[t.k]).length; const dte=daysToExam();
  let ritm='';
  if(dte && dte>0){ const left=CAP.reduce((a,c)=>a+c.sectiuni.length-Object.keys(S.read[c.id]||{}).length,0);
    ritm=left?`Mai ai ${left} fișe necitite → cam ${Math.max(1,Math.ceil(left/Math.max(1,dte-14)))}/zi, ca să-ți rămână ultimele 2 săptămâni pentru recapitulare și simulări.`:'Ai citit toate fișele 🎉 Acum: simulări și repetiție.'; }
  return `<div class="card" id="plan"><div class="row"><b class="grow">📅 Planul de azi</b><span class="pill ${n===pl.tasks.length?'ok':''}">${n}/${pl.tasks.length}</span></div>
    ${ritm?`<p class="small muted" style="margin:6px 0 4px">${ritm}</p>`:'<p class="small muted" style="margin:6px 0 4px">Setează data examenului (mai jos) și îți calculez ritmul.</p>'}
    ${pl.tasks.map((t,i)=>`<div class="plantask ${pl.done[t.k]?'done':''}" data-i="${i}"><span class="ck">${pl.done[t.k]?'✔':''}</span><span class="grow">${esc(t.label)}</span><span class="muted">›</span></div>`).join('')}</div>`;
}

/* ---------------- start ---------------- */
renderStreak();
tab('home');
if('serviceWorker' in navigator && location.protocol.startsWith('http')){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
})();
