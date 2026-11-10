/* Generat automat de tools/build.py – editează fișierele din content/ */

/* ---- content/00-init.js ---- */
// Structuri de date. Fiecare fișier din content/ adaugă în aceste liste.
window.CAPITOLE = []; window.CARDURI = []; window.GRILE = []; window.AF = []; window.SUBIECTE = [];

/* ---- content/capitole/s01.js ---- */
/* CAPITOLUL I (Specialitate) – Elemente de psihologia dezvoltării / vârstelor */
CAPITOLE.push({id:'s01', parte:'Tematica de specialitate', nr:'I', emoji:'🌱', scurt:'Psihologia dezvoltării',
titlu:'Elemente de psihologia dezvoltării / vârstelor',
sectiuni:[
{titlu:'1. Conceptul de dezvoltare', puncte:[
 'Dezvoltarea = modificările secvențiale ale organismului de la concepție la moarte; procese programate biologic (ereditar) + procese datorate interacțiunii cu mediul.',
 '**Trei planuri:** dezvoltarea fizică (creștere, creier, schelet, motricitate), dezvoltarea cognitivă (percepție, învățare, memorie, limbaj), dezvoltarea psihosocială (personalitate, emoții, relații).',
 'Planurile se influențează: un copil cu deficit de auz are și întârziere de limbaj; anxietatea de separare apare doar când copilul își amintește trecutul și anticipează viitorul.',
 'Dezvoltarea psihică = proces dinamic de formare și reconstrucție continuă, prin învățare și interacțiune cu mediul, a structurilor cognitiv-operaționale, psihomotrice, afectiv-motivaționale, atitudinale.',
 'Perspectiva ontogenetică: de la simplu la complex, de la acțiune la gândire, de la prelogic la logic, de la empiric la științific.',
 'Întârzierile la apariția reperelor psihogenetice → indici de retard; întârzierile după o apariție normală → condiții defectuoase de educație și mediu.'],
 retine:'Fizic – cognitiv – psihosocial. Dezvoltarea = ereditate × mediu × educație, prin învățare.'},
{titlu:'2. Factorii dezvoltării: ereditatea', puncte:[
 '**Ereditatea** = însușirea materiei vii de a transmite de la o generație la alta, prin codul genetic, informații de specificitate (specie, grup, individ) – **premisa biologică/naturală** a dezvoltării.',
 'Moștenirea = complex de predispoziții și potențialități, NU transmitere liniară a trăsăturilor.',
 'Ereditar ≠ congenital (congenitalul include și influențe din perioada intrauterină).',
 'Ereditatea poate rămâne latentă toată viața în absența unui factor activator.',
 'Creează **perioade sensibile/critice** – momente optime de intervenție (ex. pentru limbaj).',
 'Amprentă ereditară puternică: temperament, aptitudini, emotivitate, patologie psihică; mai slabă: atitudini, voință, caracter.',
 'Ereditatea umană are importanță redusă în comportamentele instinctive (copiii crescuți de animale își pierd specificul uman).',
 'Ereditate normală = șansă (valorificată sau nu); ereditate tarată = neșansă (ameliorată/compensată prin intervenție).'],
 retine:'Ereditatea = „echipament primar”, premisă naturală – nu destin.'},
{titlu:'2. Factorii dezvoltării: mediul', puncte:[
 '**Mediul** = totalitatea elementelor și condițiilor de viață cu care individul interacționează direct sau indirect (bioclimatice, socio-economice, culturale; familie → comunitate → societate).',
 'Acțiune binară: realități fizice (persoane, obiecte) + ansamblul de relații și semnificații interiorizate.',
 'Contează nu prezența factorului, ci **măsura, maniera și rezonanța interacțiunii** (o melodie nu e factor de mediu pentru un copil fără auz).',
 '**Nișa de dezvoltare** (Super și Harkness): obiectele/locurile accesibile la o vârstă; răspunsurile celor din jur; cerințele adultului; activitățile impuse, propuse sau acceptate.',
 'Mediul poate fi frână: un mediu familial ostil, insecurizant → retard intelectual sau social la un copil cu potențial normal.']},
{titlu:'2. Factorii dezvoltării: educația', puncte:[
 '**Educația** = activitate specializată, specific umană, deliberată, care mijlocește raportul om–mediu; reduce imprevizibilul și crește controlul asupra dezvoltării.',
 'Perspective: educația ca proces (transformare pozitivă), ca acțiune de conducere, ca acțiune socială planificată, ca relație educator–educat, ca ansamblu de influențe.',
 'Are **rol conducător** (teoria triplei determinări), dar nu nelimitat: nu poate reechilibra o ereditate profund afectată și nici compensa total un mediu viciat.',
 'Trebuie menținut un optimum între ce poate individul și ce i se oferă (ofertă prea mare sau prea simplă perturbă dezvoltarea).',
 'Argumente pentru rolul conducător: își creează singură premisele (condiții interne favorabile), se ocupă de „cum să asimileze”, ameliorează condițiile de mediu.',
 'Școala nu formează doar specialiști, ci oameni.'],
 retine:'Ereditate = premisă, mediu = condiție, educație = factor conducător.'},
{titlu:'3. Stadii – dezvoltarea cognitivă (Piaget)', puncte:[
 '**Senzorio-motor (0–2 ani):** schema senzorio-motorie; achiziția principală – **permanența obiectului**; „conduita suportului”; spre 2 ani apar reprezentarea și inteligența simbolică.',
 '**Preoperatoriu (2–7/8 ani):** **funcția semiotică** (simbolică) – joc simbolic, desen, limbaj; gândire intuitivă, **egocentrism**; nu acceptă conservarea (kg de cuie vs kg de puf).',
 '**Operații concrete (7/8–11/12 ani):** **reversibilitate**, conservarea invarianților, gândire categorial-concretă, legată de material concret.',
 '**Operații formale (11/12–15/16 ani „sau niciodată”):** gândire ipotetico-deductivă, operații cu operații; posibilul devine supraordonat realului.',
 'Judecata morală (Piaget): întâi **heteronomă** (norme preluate, rigide, judecă fapta nu intenția), apoi **autonomă**.'],
 retine:'Senzorio-motor → preoperatoriu → concret → formal. Cuvinte-cheie: permanența obiectului, egocentrism, reversibilitate/conservare, ipotetico-deductiv.'},
{titlu:'3. Stadii – dezvoltarea morală (Kohlberg)', puncte:[
 'Studiu prin **dileme morale**; contează argumentația, nu răspunsul. 3 niveluri × 2 stadii = 6 stadii.',
 '**I. Preconvențional (4–10 ani):** St. 1 – moralitatea ascultării (pedeapsă/recompensă); St. 2 – hedonismul instrumental naiv (conformare pentru beneficii).',
 '**II. Convențional (10–13 ani):** St. 3 – moralitatea bunelor relații („băiat/fată bună”), apare judecata după intenție; St. 4 – legea și ordinea.',
 '**III. Postconvențional / autonomie morală (după 13 ani, tinerețe sau niciodată):** St. 5 – moralitatea contractuală, acceptarea democratică a legii; St. 6 – principiile individuale de conduită (justiție, egalitate, demnitate).',
 'Limite: vizează doar judecata morală (cognitivul), regăsit mai ales la băieți, dileme care simplifică, ignoră situaționalul.']},
{titlu:'3. Stadii – dezvoltarea afectivă', puncte:[
 'În preșcolaritate: trecerea de la emoții la **sentimente** (stabile, generalizate): rușine, mulțumire, prietenie.',
 '**„Sindromul bomboanei amare”** – trăire complexă la primirea unei recompense nemeritate; semn al atitudinii critice față de sine.',
 'Negativismul involuează; apare memoria afectivă; copilul învață să-și stăpânească reacțiile.',
 'Psihanaliza: stadiul **falic** (3–5/6 ani), complexul Oedip (băieți) / Electra (fete); declinul lor marchează intrarea în **latență**.',
 'Triunghiul copil–mamă–tată „plămădește matrițele afectivității pentru întreaga viață”.']},
{titlu:'3. Stadii – dezvoltarea psihosocială (Erikson)', puncte:[
 'Potențialul de dezvoltare se împlinește pe tot parcursul vieții; fiecare etapă = o **criză psihosocială** cu două variante polare. 8 stadii.',
 '1. **Încredere vs neîncredere** (0–1,5 ani) → speranța.',
 '2. **Autonomie vs rușine/îndoială** (1–3 ani) → voința.',
 '3. **Inițiativă vs vinovăție** (3–6 ani) → scopul.',
 '4. **Sârguință (hărnicie) vs inferioritate** (6–12 ani; școala) → competența.',
 '5. **Identitate vs confuzie de rol** (12–20 ani; modele și covârstnici) → fidelitatea.',
 '6. **Intimitate vs izolare** (20–40 ani) → iubirea.',
 '7. **Generativitate (creație) vs stagnare** (40–65 ani) → grija.',
 '8. **Integritate vs disperare** (peste 65 ani) → înțelepciunea.'],
 retine:'Pentru gimnaziu-liceu: stadiul 4 (sârguință vs inferioritate) și 5 (identitate vs confuzie de rol).'},
{titlu:'3. Ciclurile vieții', puncte:[
 '**Prenatal** (9 luni): perioada embrionară, fetală precoce, fetală tardivă – cel mai intens ritm de creștere.',
 '**Copilăria, pubertatea, adolescența (0–20/24 ani):** primul an; antepreșcolar (1–3); preșcolar (3–6); școlar mic (6–10/11); pubertate (10–14); adolescență (14–20); adolescență prelungită (20–24).',
 '**Vârstele adulte active (20–65 ani):** tinerețe, adult precoce, mijlociu, tardiv.',
 '**Involuția (65+):** perioada de trecere, prima, a doua bătrânețe, marea bătrânețe.',
 'Vârsta cronologică ≠ vârsta biologică ≠ vârsta psihică; stadiile genetice ale proceselor psihice pot fi decalate (ex. adolescentul matur cognitiv, dar imatur afectiv).']},
{titlu:'4. Dezvoltarea umană optimă', puncte:[
 'Nu există criterii unice; indicatori: funcționalitate cognitivă eficientă; dezvoltare armonioasă multidimensională (biologică, cognitivă, afectivă, comportamentală); valorificarea maximă a potențialului; un concept de Sine unitar și coerent; stil de viață sănătos și stare de bine.',
 '**Maslow** – trăsăturile persoanelor autorealizate: imagine de sine realistă, acceptare de sine și a altora, entuziasm, nevoia de experiențe variate, relații apropiate cu puțini oameni, toleranță, creativitate, experiențe „de vârf”, umor spontan.',
 'Sinele include: **conceptul de sine** (self-concept), **imaginea de sine** (self-image), **stima de sine** (self-esteem).']},
{titlu:'4. Rolul consilierii în dezvoltarea optimă', puncte:[
 'Consilierea de criză scoate clientul din criză; **consilierea pentru dezvoltare** sprijină dezvoltarea optimă a personalității – substanța consilierii psihopedagogice.',
 'Este un proces de **învățare** personalizat; are caracter sintetic-integrativ (îmbină consilierea remedială și preventivă); se adaptează particularităților de vârstă.',
 'Urmărește ca persoana: să se cunoască și să se accepte realist; să-și asume deciziile; să-și modifice comportamentele dezadaptative; să relaționeze și să coopereze; să atingă congruența gânduri–emoții–fapte și starea de bine.',
 'De ce câștigă teren: schimbări sociale (industrializare, globalizare), planificarea carierei, „omul potrivit la locul potrivit”, noi teorii (cognitivism, PNL, umanism).']}
]});

CARDURI.push(
 {c:'s01', q:'Care sunt cele trei planuri ale dezvoltării?', a:'- Fizică\n- Cognitivă\n- Psihosocială', term:'Planurile dezvoltării', short:'fizic, cognitiv, psihosocial'},
 {c:'s01', q:'Ce este ereditatea?', a:'Însușirea materiei vii de a transmite, prin codul genetic, informații de specificitate de la o generație la alta. Este **premisa naturală** a dezvoltării – un „echipament primar”.', term:'Ereditatea', short:'premisa naturală, transmisă prin codul genetic'},
 {c:'s01', q:'Ce înseamnă „nișa de dezvoltare” și cine a propus conceptul?', a:'Super și Harkness. Totalitatea elementelor cu care un copil intră în relație la o vârstă:\n- obiecte, locuri, fenomene accesibile\n- răspunsurile celor din jur\n- cerințele adultului\n- activitățile impuse, propuse sau acceptate', term:'Nișa de dezvoltare', short:'elementele cu care copilul intră în relație la o vârstă (Super & Harkness)'},
 {c:'s01', q:'De ce are educația rol conducător în dezvoltare?', a:'- e deliberată, organizată, cu scop\n- își creează singură premisele (condiții interne)\n- se ocupă de „cum să se asimileze”\n- ameliorează condițiile de mediu\nDar NU are puteri nelimitate.', term:'Educația', short:'factorul conducător, deliberat al dezvoltării'},
 {c:'s01', q:'Stadiile Piaget, în ordine, cu vârste', a:'- Senzorio-motor 0–2\n- Preoperatoriu 2–7/8\n- Operații concrete 7/8–11/12\n- Operații formale 11/12–15/16'},
 {c:'s01', q:'Achiziția principală a stadiului senzorio-motor', a:'**Permanența obiectului** (obiectul există și când nu mai e perceput).', term:'Permanența obiectului', short:'achiziția stadiului senzorio-motor'},
 {c:'s01', q:'Ce caracterizează stadiul preoperatoriu?', a:'Funcția semiotică (joc simbolic, desen, limbaj), gândire intuitivă, **egocentrism**, lipsa conservării.', term:'Egocentrismul', short:'copilul rămâne prizonierul propriului punct de vedere (preoperatoriu)'},
 {c:'s01', q:'Ce aduce stadiul operațiilor concrete?', a:'**Reversibilitatea** și **conservarea**; gândire logică, dar legată de material concret.', term:'Reversibilitatea', short:'fiecărei acțiuni îi corespunde o acțiune inversă (op. concrete)'},
 {c:'s01', q:'Ce aduce stadiul operațiilor formale?', a:'Gândire **ipotetico-deductivă**, abstractă, „operații cu operații”; posibilul devine mai important decât realul.', term:'Gândirea ipotetico-deductivă', short:'achiziția stadiului operațiilor formale'},
 {c:'s01', q:'Nivelurile și stadiile Kohlberg', a:'- **Preconvențional:** 1 ascultare/pedeapsă, 2 hedonism instrumental\n- **Convențional:** 3 bunele relații, 4 lege și ordine\n- **Postconvențional:** 5 contractul social, 6 principii individuale'},
 {c:'s01', q:'Cele 8 stadii Erikson', a:'- Încredere vs neîncredere\n- Autonomie vs rușine/îndoială\n- Inițiativă vs vinovăție\n- Sârguință vs inferioritate\n- Identitate vs confuzie de rol\n- Intimitate vs izolare\n- Generativitate vs stagnare\n- Integritate vs disperare'},
 {c:'s01', q:'Ce criză traversează elevul de gimnaziu (6–12 ani) după Erikson?', a:'**Sârguință (hărnicie) vs inferioritate** – factorii determinanți: școala și grupul de joacă.', term:'Sârguință vs inferioritate', short:'criza eriksoniană a școlarului (6–12 ani)'},
 {c:'s01', q:'Ce criză traversează adolescentul după Erikson?', a:'**Identitate vs confuzie de rol** (12–20 ani); factori: modelele și covârstnicii.', term:'Identitate vs confuzie de rol', short:'criza eriksoniană a adolescenței'},
 {c:'s01', q:'Ce este „sindromul bomboanei amare”?', a:'Trăirea complexă a preșcolarului la primirea unei recompense nemeritate – semn al atitudinii critice față de sine.', term:'Sindromul bomboanei amare', short:'disconfort la o recompensă nemeritată (preșcolar)'},
 {c:'s01', q:'Cele trei componente ale cunoașterii de sine', a:'- Conceptul de sine (self-concept)\n- Imaginea de sine (self-image)\n- Stima de sine (self-esteem)'},
 {c:'s01', q:'Ce urmărește consilierea pentru dezvoltare?', a:'- cunoaștere și acceptare de sine realistă\n- asumarea deciziilor\n- modificarea comportamentelor dezadaptative\n- relaționare și cooperare\n- congruență gânduri–emoții–fapte, stare de bine'},
 {c:'s01', q:'Ereditar vs congenital – care e diferența?', a:'Congenitalul (prezent la naștere) include și influențe dobândite în viața intrauterină; nu tot ce e congenital e ereditar.'}
);

GRILE.push(
 {c:'s01', q:'Achiziția principală a stadiului senzorio-motor (Piaget) este:', o:['Reversibilitatea','Permanența obiectului','Gândirea ipotetico-deductivă','Conservarea cantității'], r:1, e:'Permanența obiectului; reversibilitatea și conservarea țin de operațiile concrete.'},
 {c:'s01', q:'Egocentrismul gândirii este specific stadiului:', o:['Senzorio-motor','Preoperatoriu','Operațiilor concrete','Operațiilor formale'], r:1},
 {c:'s01', q:'Conceptul de „nișă de dezvoltare” aparține lui:', o:['Piaget','Erikson','Super și Harkness','Kohlberg'], r:2},
 {c:'s01', q:'Ce factor are rol CONDUCĂTOR în dezvoltarea psihică?', o:['Ereditatea','Mediul','Educația','Vârsta'], r:2, e:'Ereditatea = premisă, mediul = condiție, educația = factor conducător.'},
 {c:'s01', q:'Criza eriksoniană a adolescenței este:', o:['Inițiativă vs vinovăție','Identitate vs confuzie de rol','Intimitate vs izolare','Sârguință vs inferioritate'], r:1},
 {c:'s01', q:'Criza eriksoniană a școlarului (6–12 ani):', o:['Autonomie vs îndoială','Sârguință vs inferioritate','Generativitate vs stagnare','Încredere vs neîncredere'], r:1},
 {c:'s01', q:'Stadiul „legii și ordinii” la Kohlberg aparține nivelului:', o:['Preconvențional','Convențional','Postconvențional','Premoral'], r:1, e:'Nivelul convențional: stadiul 3 (bunele relații) și stadiul 4 (legea și ordinea).'},
 {c:'s01', q:'Cele mai puternic marcate de ereditate sunt:', o:['Atitudinile și caracterul','Voința','Temperamentul și aptitudinile','Valorile morale'], r:2},
 {c:'s01', q:'Gândirea ipotetico-deductivă apare în stadiul:', o:['Preoperatoriu','Operațiilor concrete','Operațiilor formale','Senzorio-motor'], r:2},
 {c:'s01', q:'Care NU este un plan al dezvoltării, conform manualului?', o:['Fizic','Cognitiv','Psihosocial','Economic'], r:3},
 {c:'s01', q:'Stadiul 1 Kohlberg are drept criteriu principal:', o:['Contractul social','Pedeapsa și recompensa','Imaginea de „băiat bun”','Principiile universale'], r:1},
 {c:'s01', q:'Stima de sine (self-esteem) se referă la:', o:['Ce cred alții despre mine','Evaluarea/aprecierea propriei valori','Imaginea corporală','Rolurile sociale'], r:1}
);

AF.push(
 {c:'s01', s:'Ereditatea se transmite liniar, ca o copie a trăsăturilor părinților.', v:false, e:'Se transmite un complex de predispoziții și potențialități.'},
 {c:'s01', s:'Tot ce este congenital este și ereditar.', v:false, e:'Congenitalul include și influențe intrauterine.'},
 {c:'s01', s:'Un factor de mediu prezent, dar neutru pentru copil, nu are relevanță pentru dezvoltare.', v:true},
 {c:'s01', s:'Educația poate compensa complet orice ereditate afectată.', v:false, e:'Educația nu are puteri nelimitate.'},
 {c:'s01', s:'Conservarea apare în stadiul operațiilor concrete.', v:true},
 {c:'s01', s:'După Piaget, judecata morală este întâi autonomă, apoi heteronomă.', v:false, e:'Invers: întâi heteronomă, apoi autonomă.'},
 {c:'s01', s:'Erikson descrie 8 stadii psihosociale, pe tot parcursul vieții.', v:true},
 {c:'s01', s:'La Kohlberg contează mai mult argumentația decât răspunsul la dilemă.', v:true},
 {c:'s01', s:'Vârsta cronologică coincide întotdeauna cu vârsta psihică.', v:false},
 {c:'s01', s:'Consilierea pentru dezvoltare constituie substanța consilierii psihopedagogice.', v:true},
 {c:'s01', s:'Stadiul operațiilor formale este atins de toți oamenii până la 16 ani.', v:false, e:'„…sau niciodată” – nu toți îl ating.'}
);

/* ---- content/teste/t01.js ---- */
SUBIECTE.push({nr:1, tema:'Comunicarea și feedback-ul · Consilierea · Brainstorming (carieră)', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Se dă enunțul: _Feedback-ul este o componentă deosebit de importantă a comunicării pe care profesorul consilier școlar îl dă elevului, și nu numai._\nArgumentați, în patru pagini, rolul comunicării în procesul de consiliere.\n(2 p pentru valorificarea enunțului, 1 p pentru respectarea numărului de pagini)',
 items:[
  {cer:'Precizarea conceptului de **comunicare** (componente, niveluri, tipuri, bariere).', rep:[
   'Etimologie: lat. _communis / communico_ – „a face ceva împreună, a pune în comun”.',
   'Comunicarea = proces de transmitere de idei, informații, reguli: o sursă (emițător) transmite un mesaj unui receptor, pe un canal, cu feedback.',
   'Ca tip de activitate, consilierea este: comunicare, relație și intervenție.',
   'Verbal / nonverbal / paraverbal: ritmul, tonul, fluența vorbirii (paralimbaj); verbalul e controlat, nonverbalul aproape incontrolabil.',
   'Contextul fizic (aranjarea mobilierului în cabinet) poate facilita sau poate deveni barieră; mediul cald, primitor aduce autenticitate și siguranță.',
   'Etica comunicării poate fi sursă de eficiență sau barieră.']},
  {cer:'Prezentați **trei elemente centrale în ascultarea eficientă**.', rep:[
   'Tipuri: ascultare activă (pentru informații), reflexivă, pentru divertisment – toate utile.',
   'Obiectivele ascultării: ascultăm ca să înțelegem, să reținem, să analizăm/evaluăm, să dezvoltăm empatia.',
   'Pentru a reține: repetare, parafrazare, vizualizare.',
   'Ascultarea empatică – 3 etape: clarificarea; repetarea ideii de bază cu propriile cuvinte; parafrazarea sentimentelor celuilalt.',
   'Dirijarea discuției prin întrebări – ex. metoda socratică.']},
  {cer:'Detaliați **tipurile de conflict** care pot apărea în clasă atunci când nu avem comunicare.', rep:[
   'Conflictul negat are efecte: scăderea încrederii în sine, dileme morale, scăderea implicării școlare, dificultăți de atenție și decizie.',
   'Consilierul menține o relație pozitivă în conflict prin: ascultare activă, întrebări deschise, focalizare pe problemă, nu pe persoană; fără învinovățire sau etichetare.',
   'Fiecare elev/adult trebuie să-și conștientizeze drepturile asertive.']},
  {cer:'Dați exemple de **modalități ineficiente de comunicare**.', rep:[
   'Critica, etichetarea, lauda evaluativă – generează frustrare, ignoră sentimentele și opiniile celuilalt.',
   'Non-acceptarea: a evita, a da sfaturi, a analiza, a eticheta, a amenința, a evalua, a fi directiv.',
   'Alternativă: limbajul responsabilității (mesaje la persoana I), comunicarea empatică, explorarea alternativelor (≠ a da sfaturi).']},
  {cer:'Prezentați **trei recomandări pentru oferirea de feedback** profesor–elev.', rep:[
   'Consilierul nu judecă elevul.',
   'Este specific și obiectiv.',
   'Se focalizează pe competențe, nu pe slăbiciuni.',
   'Evidențiază faptele, nu impresiile.',
   'Verifică modul în care a fost recepționat feedback-ul.',
   'Feedback-ul se bazează pe încredere, conține exemple și e oferit la timp.']},
  {cer:'Justificarea **importanței feedback-ului** în relația cu elevii, cadrele didactice și părinții.', rep:[
   'Obiectivul prioritar: reducerea decalajului dintre stadiul actual al elevului și nivelul la care trebuie să ajungă.',
   'Facilitează autoexaminarea → schimbarea comportamentului; folosit excesiv poate afecta imaginea de sine.',
   'Motivează, crește încrederea, permite fixarea de noi ținte (învățare continuă).',
   'Rolul feedback-ului: de a regla și de a conduce spre atingerea performanțelor.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30,
 text:'Disciplina Consiliere și orientare oferă cadrul formal în care profesorul activează nu doar dimensiunea rațional-intelectivă a elevului, ci și latura afectivă, atitudinală, motivațională și socială.',
 items:[
  {cer:'A. Precizați diferențele între **consilierea educațională** și **consilierea psihologică**.', rep:[
   'Consilierea educațională: elemente de consiliere suportivă, vocațională, de dezvoltare personală și informațională; profesorul consilier NU are ca obiectiv evaluarea psihologică (psihodiagnosticul); folosește scale, fișe, chestionare.',
   'Consilierea psihologică: perspectivă umanistă – problemele nu mai sunt văzute ca tulburare/deficiență, ci în termeni de autocunoaștere, adaptare și întărire a Eului.',
   'Accent comun: prevenție, dezvoltare personală, rezolvare de probleme; relație bazată pe încredere, confidențialitate, respect.']},
  {cer:'B. Enumerați **atitudinile consilierului**.', rep:['Empatia','Colaborarea','Acceptarea necondiționată','Gândirea pozitivă','Responsabilitatea','Congruența','Respectul']},
  {cer:'C. Dați patru exemple de **obstacole în dezvoltarea acceptării necondiționate**.', rep:[
   'Pierderea respectului față de elevi.',
   'Lipsa informațiilor despre personalitatea elevului.',
   'Confuzia dintre acceptare și aprobare sau simpatie.',
   'Prejudecăți sau informații greșite/incomplete.',
   'Atenție: acceptarea ≠ neutralitate/indiferență.']},
  {cer:'D. Enumerați **abilitățile de bază** ale profesorului consilier.', rep:['Ascultarea activă','Observarea','Adresarea întrebărilor','Reflectarea','Parafrazarea','Sumarizarea','Furnizarea de informații','Oferirea de feedback']},
  {cer:'E. Precizați **obiectivele procesului de consiliere**.', rep:[
   'Scop: funcționarea psihosocială optimă a elevului.',
   'Promovarea sănătății și a stării de bine (mental, somatic, emoțional, social).',
   'Dezvoltarea personală: cunoaștere de sine, imagine de sine, relaționare armonioasă, atitudini creative, tehnici de învățare eficiente.',
   'Prevenția: neîncrederii în sine, comportamentelor de risc, dificultăților de învățare, situațiilor de criză, disfuncțiilor psihosomatice.']},
  {cer:'F. Dați exemple de **metode și tehnici** în consilierea non-verbală.', rep:['Comentarea unor texte și imagini; studiul de caz','Fișe de lucru și scale de autoevaluare','Colaje, afișe, postere, desene','Elaborarea de proiecte']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30,
 text:'Programa Consiliere și orientare, clasa a IX-a. Competența specifică 4.1 „Analizarea conceptului de carieră și a factorilor care influențează alegerea carierei”; conținuturi: Planificarea carierei – cariera: definire; factori care influențează cariera.\nRealizați un demers didactic pentru formarea competenței 4.1 prin **brainstorming**.',
 items:[
  {cer:'Explicarea metodei didactice (brainstorming).', rep:[
   '„brain” = creier, „storming” = furtună → asalt de idei; dezvoltă creativitatea prin gândire divergentă.',
   'Principii: cantitatea generează calitatea; amânarea evaluării (fără critică în timpul generării).']},
  {cer:'Argumentarea faptului că brainstormingul este o metodă activă.', rep:[
   'Solicită participarea activă a tuturor elevilor; niciun răspuns nu e greșit.',
   'Dezvoltă comunicarea, gândirea critică, argumentarea, creativitatea, capacitatea reflexivă.']},
  {cer:'Conținutul științific (educația și cariera) + activitatea de învățare.', rep:[
   'Consilierea carierei = proces de îndrumare, sprijin și pregătire; 4 acțiuni: cunoașterea personalității elevilor; educarea pentru alegerea carierei; cunoașterea rețelei școlare și a profesiilor; consilierea elevilor.',
   'Educarea intereselor cognitive și profesionale, atitudini pozitive față de muncă, motivație superioară.',
   'Exemplu activitate: 3 grupe – (1) cuvinte-cheie pentru CARIERĂ, (2) definiții din DEX: meserie/ocupație/carieră, (3) asocieri carieră–meserii; bilețelele pe panou, justificarea alegerilor.',
   'Feedback: anunț de angajare (cofetar) – ce abilități/competențe se cer? Temă: eseu „Munca este hrana sufletelor nobile” (Socrate).']},
  {cer:'Etapele brainstormingului.', rep:[
   '1. Prezentarea problemei.',
   '2. Generarea liberă de idei, fără autocritică/critică.',
   '3. Etapa de amânare (incubație, ordonarea ideilor).',
   '4. Evaluarea critică și selecția soluțiilor.']}
 ]}
]});

/* ---- content/teste/t02.js ---- */
SUBIECTE.push({nr:2, tema:'Procesul educațional · Dezvoltarea (ereditate, mediu, educație) · Evaluare, motivație', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Elevii vin la școală cu un bagaj de informații care trebuie îmbogățit, dar și cu dorințe, emoții, atitudini, temeri, fiecare având un ritm propriu de învățare și adaptare…_\nArgumentați în patru pagini rolul procesului educațional ca abordare sistemică.',
 items:[
  {cer:'Semnificația **procesului educațional** în raport cu finalitățile educaționale.', rep:[
   'Procesul educațional: proiectarea curriculumului în raport cu finalitățile educației, prin metodologii de formare a personalității și conținuturi atractive.',
   'Funcții orientate spre zona profesională și moral-civică, piața muncii, transmiterea valorilor.',
   'Entitate dinamică și unitară, alcătuită din componente, produse și rezultate; interdependența predare–învățare–evaluare.']},
  {cer:'**Componentele fundamentale** ale procesului educațional.', rep:[
   'Aspectul structural: conținuturi, forme, resurse umane, timp și spațiu.',
   'Aspectul funcțional: obiectivele pedagogice.',
   'Aspectul operațional: predare – învățare – evaluare.',
   'Profesorul organizează, planifică, îndrumă, controlează; elevul e obiect, dar mai ales subiect al educației.',
   'Relația profesor–elev: cooperare, comunicare, stimulare; accent pe gândirea critică și creativă.']},
  {cer:'Importanța **competenței și personalității profesorului-consilier** în proiectarea strategiilor didactice.', rep:[
   'Trăsături: empatie, umanism, sociabilitate, temperament calm/răbdător, responsabilitate, optimism pedagogic, tact pedagogic, pregătire de specialitate.',
   'Capacități: de comunicare, gândire logică, atenție, memorie, spirit de observație, proiectare didactică, caracterizare psihopedagogică a elevilor, tratare diferențiată, oferirea unui model de comportament.',
   'Competențe: stabilirea priorităților de intervenție, folosirea corectă a instrumentelor, colaborare cu specialiști, interpretarea rezultatelor, redactarea rapoartelor, abordare preventivă, formare continuă, respectarea codului deontologic.',
   'Consilierul ca „artist care lucrează cu posibilitățile umane”.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30,
 text:'Dezvoltarea psihică: ereditatea aduce premise naturale, mediul oferă conținut personalității.',
 items:[
  {cer:'A. Definiți **educabilitatea** și **ereditatea** (premisă naturală a dezvoltării psihice).', rep:[
   'Educabilitatea = receptivitatea omului la influențele educative; capacitatea de a fi format prin educație, bazată pe interacțiunea ereditate–mediu.',
   'Ereditatea = transmiterea caracteristicilor speciei de la ascendenți la descendenți; oferă premisele anatomo-fiziologice (tip de sistem nervos, temperament, aptitudini).']},
  {cer:'B. Distincția dintre **influențele de mediu** și **diferențele individuale**.', rep:[
   'Mediul acționează direct și indirect; individul nu e pasiv, ci asimilează prin condițiile interne.',
   'Contează calitatea interacțiunii dintre factori și individ.',
   'Nișa de dezvoltare: locuri accesibile, reacțiile celor apropiați, competențe încurajate, activități solicitate.']},
  {cer:'C. Rolul **educației** în dezvoltarea psihică.', rep:[
   'Educația = factor determinant/conducător, liant între influențele mediului și premisele ereditare.',
   'Organizează influențele, valorifică potențialul ereditar, transmite cultura, pregătește integrarea socială.']},
  {cer:'D. Două **stadii** ale dezvoltării (ex. Piaget).', rep:[
   'Mecanisme Piaget: adaptare = asimilare + acomodare, echilibrare.',
   'Stadiul senzorio-motor (0–2 ani): inteligență în percepție și acțiune, permanența obiectului, apariția reprezentării și gândirii simbolice.',
   'Stadiul operațiilor concrete (7–11 ani): operații reversibile, conservare, legate de obiecte concrete.']},
  {cer:'E. Un **model de abordare a personalității**.', rep:['Ex. modelul biologic – accent pe experiența primilor ani de viață (alternativ: modelul trăsăturilor, umanist, psihodinamic).','Componente ale personalității: temperament, aptitudini, caracter.']},
  {cer:'F. Rolul consilierii în **dezvoltarea optimă a personalității**.', rep:[
   'Perspectiva umanistă: relație bazată pe respect, ascultare activă, încredere.',
   'Sprijină o imagine de sine corectă, autocunoașterea și integrarea socială; descoperă înclinațiile, sprijină orientarea vocațională.',
   'Calități ale consilierului: răbdare, calm, deschidere la schimbare, umor, onestitate, empatie.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. Funcțiile metodelor: **cognitivă, formativă, motivațională**.', rep:[
   'Cognitivă: metoda = cale de acces la informație, la cunoaștere.',
   'Formativă: exersează și dezvoltă procesele psihice (cognitive, afective, volitive) și formează deprinderi.',
   'Motivațională: stimulează atenția, interesul, curiozitatea pentru învățare (subordonată celei formative).']},
  {cer:'2. Necesitatea **explicației** ca metodă la Consiliere și orientare.', rep:['Formă a expunerii care clarifică, precizează, lămurește o informație prin argumentare, analogii, accent pe operațiile gândirii (adesea deductiv).','Ajută la înțelegerea noțiunilor și a relațiilor dintre ele.']},
  {cer:'3. **Evaluarea inițială** vs **evaluarea formativă**.', rep:[
   'Inițială: la începutul unui program; stabilește nivelul de pornire. Ausubel: „Ceea ce influențează cel mai mult învățarea sunt cunoștințele pe care elevul le posedă la plecare.”',
   'Formativă (continuă): pe tot parcursul instruirii; feedback constant, ameliorare continuă, prevenirea eșecului, caracter diagnostic.']},
  {cer:'4. Listă de control: **forme de organizare** după ponderea activității.', rep:['Frontale: lecții, dezbateri, excursii didactice, vizionări de filme.','Individuale: studiu individual, teme, proiecte, referate, portofolii.','Pe grupe: cercuri, concursuri, mese rotunde, vizite, reviste școlare.']},
  {cer:'5a. Relația competențe generale – competențe specifice (cl. a IX-a, CG „Utilizarea adecvată a informațiilor… pentru obținerea succesului”).', rep:['Competențele specifice derivă din cea generală, o operaționalizează pe un an de studiu și se formează prin conținuturile asociate.']},
  {cer:'5b. Activitate didactică pentru **CS 3.2** (resurse personale de învățare vs cerințe școlare).', rep:[
   'Motivația învățării; modelul ARCS (Keller): Atenție, Relevanță, Încredere (Confidence), Satisfacție.',
   'Strategii Viau pentru încredere/autoeficacitate: gândire pozitivă, fără autoculpabilizare, verbalizarea pașilor, obiective stabilite de elev.',
   'Obiective SMART; managementul timpului (orar, priorități, pauze, estimarea timpului); managementul mediului de învățare; monolog interior pozitiv.',
   'Exemplu: tema „Experiențe de învățare”, metode: conversația euristică, ciorchinele, jocul de rol, turul galeriei.']}
 ]}
]});

/* ---- content/teste/t03.js ---- */
SUBIECTE.push({nr:3, tema:'Educația permanentă · Cariera (carieră, profesie, ocupație) · Mijloace de învățământ', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Educația permanentă vizează deprinderea individului să se pregătească, să învețe și să-și valorifice pregătirea în fiecare etapă a vieții…_\nArgumentați în patru pagini rolul și importanța educației permanente.',
 items:[
  {cer:'Precizarea conceptului de **educație permanentă**.', rep:[
   'Educația se manifestă pe toată durata vieții („de la leagăn până la mormânt”).',
   'Citate: Seneca – și bătrânii trebuie să studieze; Comenius – pentru fiecare om viața sa e o școală; N. Iorga – „omul care se învață necontenit pe dânsul și învață necontenit pe alții”.',
   'Include educația formală, nonformală și informală.',
   'Argumente: nevoile individului (adaptare, afirmare, eliberare de stres, demnitate) + dezvoltarea societății (explozie informațională, schimbare rapidă).']},
  {cer:'**Obiectivele** educației permanente.', rep:[
   'Cultivarea atitudinilor pozitive; metode flexibile de integrare; adaptare profesională.',
   'Îmbogățirea sistematică a cunoștințelor; cultivarea relațiilor de prietenie și a solidarității.',
   'Atitudine deschisă; deprinderea de a învăța și reînvăța, singur sau în echipă.',
   'Cei 4 piloni (Raportul Delors – UNESCO): a învăța să știi (să cunoști), a învăța să faci, a învăța să conviețuiești cu ceilalți, a învăța să fii.']},
  {cer:'**Caracteristicile** educației permanente.', rep:[
   'Nu se limitează la educația adulților – cuprinde toate stadiile.',
   'Educația nu se termină odată cu școlarizarea – proces continuu.',
   'Familia are rolul cel mai important în inițierea ei.',
   'Include educația formală, nonformală și informală; comunitatea are rol important.',
   'Trei condiții preliminare: **motivație, oportunitate, educabilitate**.']},
  {cer:'Importanța educației permanente în **dezvoltarea învățământului**.', rep:[
   'Înlocuirea formelor rigide cu forme flexibile; integrarea școlii în comunitate.',
   'Accent pe munca independentă, autocontrol, autoreglaj, capacitatea de a învăța să înveți.',
   'Metode: adaptarea celor tradiționale la noul conținut + introducerea de metode atractive, moderne.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30,
 text:'Construirea carierei cu ajutorul consilierii contribuie la performanțe ridicate prin maximizarea potențialului individual.',
 items:[
  {cer:'A. Definiți: **carieră, profesie, ocupație**.', rep:[
   'Cariera: succesiunea de activități, ocupații, posturi, funcții îndeplinite de o persoană pe parcursul vieții – traseul profesional complet, nu un singur loc de muncă.',
   'Profesia: activitate specializată care cere o pregătire aparte, obținută de regulă instituționalizat (calificare).',
   'Ocupația: activitatea desfășurată efectiv de o persoană la un loc de muncă (unelte, durată, operații concrete, salarizare, norme).',
   'Legătură cu piramida lui Maslow: prin muncă omul își satisface trebuințe fundamentale și superioare.']},
  {cer:'B. Ce presupune **decizia de carieră**.', rep:['Selectarea unei opțiuni din mai multe variante; eficiența depinde de informațiile deținute în momentul deciziei.','Cu cât elevul are mai multe informații (despre sine și despre profesii), cu atât decizia e mai bună.']},
  {cer:'C. **Metode și tehnici** privind cariera.', rep:[
   'Exercițiul, observația, jocul de rol, conversația, studiul de caz, chestionarul, dezbaterea, interviul, brainstormingul, problematizarea.',
   'Autocunoaștere: autocaracterizarea, autobiografia, autoevaluarea.',
   'Informare: ziua porților deschise, vizite la firme/instituții, zilele carierei, târguri, documentare despre ocupații.']},
  {cer:'D. **Pregătirea elevilor** pentru alegerea carierei.', rep:['Cunoștințe, interese, abilități, atitudini pozitive față de muncă; educarea intereselor profesionale și cognitive; dirijarea aspirațiilor.']},
  {cer:'E. Influența **personalității consilierului** în alegerea carierei.', rep:['Consilierul = model de atitudini, motive, convingeri; atracția pentru un domeniu poate porni din respectul pentru dascăl.','Răbdarea, calmul, deschiderea, onestitatea, capacitatea de a asculta + bază teoretică solidă.']},
  {cer:'F. **Parteneriate** în consilierea și orientarea școlară și profesională.', rep:['CJRAE/CMBRAE, centre de orientare, Casa Corpului Didactic, ISJ, ONG-uri, familiile elevilor, agenți economici, comunitatea locală.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. Precizați: **expunerea cu oponent, prelegerea-dezbatere, conversația euristică**.', rep:[
   'Expunerea cu oponent: variantă dramatizată a expunerii; un „oponent” intervine polemic → conflict cognitiv, argumentare.',
   'Prelegerea-dezbatere: prima parte (20–30 min) expunere teoretică, a doua parte dezbatere; frecventă la liceu/universitate.',
   'Conversația euristică (socratică): elevul „descoperă” adevăruri prin întrebări bine gândite, pas cu pas; necesită un fond cognitiv anterior; instrumentul principal = întrebarea.']},
  {cer:'2. **Funcțiile mijloacelor de învățământ**.', rep:['Formativ-educativă (exersarea operațiilor intelectuale, atenția).','Informativ-demonstrativă.','De raționalizare a timpului.','De evaluare a rezultatelor (ex. testul-grilă).','(alte clasificări: stimulativă/motivațională, ergonomică, estetică)']},
  {cer:'3. **Competența psihopedagogică** vs **competența psihosocială**.', rep:[
   'Psihopedagogică: pregătește elevii pentru autoinstruire/autoeducare; cunoaște elevii și particularitățile de vârstă; proiectare (obiective, conținuturi, situații de învățare).',
   'Psihosocială (managerială): coordonează, orientează, motivează; organizează elevii pe sarcini/responsabilități; își asumă răspunderi; creează relații de cooperare și climat, rezolvă conflicte.']},
  {cer:'4. Listă: **dezavantajele calculatorului** ca mijloc de învățământ.', rep:['Captivarea elevului în universul tehnicii; limitarea afectivității.','Estomparea modelului educativ al profesorului.','O anumită artificialitate a imaginii despre realitate.','Afecțiuni ale coloanei și oculare.']},
  {cer:'5. Programa cl. a IX-a, CG „Explorarea resurselor personale care influențează planificarea carierei”; CS 1.1 – **încrederea în sine**.', rep:[
   'Relație: CS 1.1 operaționalizează competența generală pe conținutul „Autocunoaștere – încredere în sine”.',
   'Încrederea în sine = sentiment de siguranță interioară; a crede că poți face față provocărilor; persoanele încrezătoare își propun obiective realiste și au sentimentul controlului.',
   'Cauze ale neîncrederii: frica de necunoscut, critica, eșecuri anterioare, slaba pregătire, stresul, gestionarea defectuoasă a timpului.',
   'Exemplu activitate: benzi ilustrate (Pixton/Canva), monolog pozitiv pe echipe, fișa „Floarea soarelui” (situații în care mă simt încrezător).']}
 ]}
]});

/* ---- content/teste/t04.js ---- */
SUBIECTE.push({nr:4, tema:'Nevoia de consiliere educațională · ADHD · Curriculum, notare, Piaget vs Galperin', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Individul, indiferent de vârstă, are nevoie de prezența unei persoane care să-l îndrume sau de instituții care să-l susțină în rezolvarea situațiilor cu care se confruntă…_\nArgumentați în patru pagini importanța nevoii de consiliere educațională.',
 items:[
  {cer:'Rolul **consilierii educaționale** în procesul formativ.', rep:[
   'Consilierea = relație de sprijin între o persoană specializată și una care solicită un serviciu; are caracter liber și cooperant.',
   'Ajută persoana să-și folosească șansele pentru a face față problemelor; promovează capacitatea de autodirecționare.',
   'Obiectivul orelor nu e doar cunoașterea elevului de către profesor, ci facilitarea **autocunoașterii**.',
   'Accent pe prevenție, dezvoltare personală, rezolvarea situațiilor problematice.',
   'Consilierul nu formulează probleme și nu sugerează soluții – îl ajută pe elev să le găsească singur (ex. modelul de rezolvare de probleme Goldfried: identificarea situației, alternative, alegerea soluției, pașii, evaluarea).']},
  {cer:'**Nevoia** de consiliere educațională.', rep:[
   'Creșterea comportamentelor nesănătoase, a eșecurilor și tulburărilor emoționale la elevi.',
   'Răspunde nevoilor de: comunicare, respect de sine, cunoaștere de sine, echilibru, tehnici de învățare eficientă, rezolvare de probleme.',
   'Perspectiva umanistă (Carl Rogers).']},
  {cer:'**Caracteristicile** consilierii și **abilitățile** consilierului.', rep:[
   'Se adresează persoanelor normale, pentru stresul și sarcinile vieții cotidiene.',
   'Folosește un model educațional și de dezvoltare – învață individul să-și valorifice potențialul.',
   'Prevenția problemelor: identificarea situațiilor și grupurilor de risc.',
   'Abilități: observarea, ascultarea activă, furnizarea de informații, adresarea întrebărilor, feedback, parafrazarea, sumarizarea.']},
  {cer:'**Obiectivele și funcțiile** procesului de consiliere.', rep:[
   'Obiective: abilități sociale, armonizarea personalității, conștiința de sine, rezolvarea de probleme, autoacceptarea.',
   'Funcții: ameliorarea relațiilor elev–elev, elev–profesor, elev–familie, școală–familie; stima persoanelor consiliate; prevenirea conflictelor; orientarea școlară și profesională.',
   'Profesorul consilier NU face consiliere de criză sau psihoterapie (sunt ale psihologului).',
   'Planuri de diferențiere: unde (cabinet), cine (cadru abilitat), beneficiari, obiective, tematica.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'ADHD – incapacitatea de a sta liniștit, de a fi atent la lecții și la sarcini.',
 items:[
  {cer:'A. Definiți **educația specială**.', rep:['Sens restrâns: educația copiilor cu deficiențe/dizabilități.','Sens larg: educație adaptată persoanelor care nu reușesc să atingă anumite niveluri educative (CES).']},
  {cer:'B. Ce este **tulburarea de deficit de atenție/hiperactivitate**.', rep:[
   'Tulburare neurodezvoltativă frecventă la copii.',
   '**Neatenție:** pierde obiecte, uită, greu își menține atenția, greșeli din neglijență, pare să nu asculte.',
   '**Hiperactivitate–impulsivitate:** greu își așteaptă rândul, vorbește excesiv, se agită, se cațără, întrerupe/intervine în activitatea altora.']},
  {cer:'C. **Provocări școlare** pentru elevii cu ADHD.', rep:['Note mici, repetenție, risc crescut de abandon; acces redus la studii universitare.','Dificultăți în relațiile cu colegii și profesorii, risc de marginalizare, de delincvență și consum de substanțe.','Intervenția timpurie echilibrează șansele.']},
  {cer:'D. Patru **strategii** în mediul școlar.', rep:[
   'Adaptări (aceleași standarde, acces la curriculum).',
   'Evaluare orală în loc de scris / timp suplimentar.',
   'Programarea sarcinilor cerând atenție când concentrarea e maximă (scade pe parcursul zilei).',
   'Limitarea stimulilor externi: elevul așezat aproape de profesor, planul lecției la tablă, îndepărtarea distractorilor.']},
  {cer:'E. **Intervenții de gestionare a consecințelor**.', rep:['Programe de întărire cu **jetoane** (token economy), extinse și acasă.','Analiza funcțională a comportamentului înainte de intervenție.','Recompense frecvente, privilegii primite în aceeași zi, sarcini cu dificultate crescătoare, rapoarte simple școală–familie.']},
  {cer:'F. **Implicații** în plan personal, familial, social.', rep:['Personal: accidente, expunere la violență (agresor/victimă), eșec școlar și profesional, consum de substanțe.','Familial: tensiuni, frustrare, conflicte conjugale, divorțuri, costuri de tratament.','Social: izolare, etichetare „copil-problemă”.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. Precizați: **curriculum, arie curriculară, memorie**.', rep:[
   'Curriculum = ansamblul experiențelor de predare, învățare, evaluare oferite de școală pentru formarea unei personalități creative, integrate, autonome.',
   'Aria curriculară = grupare de discipline cu obiective comune, componentă a planului-cadru; 7 arii: Limbă și comunicare; Matematică și științe; Om și societate; Arte; Educație fizică și sport; Tehnologii; Consiliere și orientare.',
   'Memoria = proces psihic de întipărire, stocare și reactualizare a informației.']},
  {cer:'2. Necesitatea **notării**.', rep:['Notarea = acțiunea de apreciere a rezultatelor prin note/calificative, pe baza unei scări de notare; decizia vine după măsurare și apreciere.','Nota are valoare informativă, diagnostică, motivațională; trebuie distinse aptitudinile de alte calități care influențează performanța.']},
  {cer:'3. **Piaget** (psihogeneza cunoștințelor) vs **Galperin** (formarea în etape a acțiunilor mintale).', rep:[
   'Piaget: cunoașterea pornește din acțiune; învățarea = interiorizarea acțiunilor externe în structuri operaționale; depinde de stadiul de dezvoltare.',
   'Galperin: etapele formării acțiunii mintale – orientarea (cunoașterea scopului și modului acțiunii), acțiunea materială/materializată, acțiunea în planul limbajului extern (cu voce tare), limbajul extern „pentru sine”, limbajul intern (acțiune mintală).']},
  {cer:'4. Listă: **standarde și descriptori de performanță**.', rep:['Standardele de performanță = criterii de evaluare raportate la programă; arată nivelul de cunoștințe, capacități, atitudini atins.','Vizează: structurile cognitive, psihomotrice (deprinderi de muncă intelectuală), capacitatea de aplicare, trăsăturile de personalitate (motivație, voință, nivel de aspirație).']},
  {cer:'5. Cl. a IX-a – CS 2.1 **„Exersarea comunicării eficiente”**.', rep:[
   'Adolescența: criză de comunicare, nevoie de autonomie, idealuri, egocentrism, dezvoltarea gândirii abstracte, a voinței și a intereselor profesionale.',
   'Comunicarea eficientă cu adolescenții: ascultare activă, limbajul responsabilității (mesaje la persoana I), respectarea opiniilor diferite.',
   'Exemplu: metoda „6 de ce”, pantomimă pentru mesaje nonverbale, ghid pentru comunicarea asertivă; „Două monologuri nu fac un dialog.”']}
 ]}
]});

/* ---- content/teste/t05.js ---- */
SUBIECTE.push({nr:5, tema:'Învățarea eficientă și motivația · ADHD și CES · Brainstorming (autocontrol emoțional)', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Omul contemporan apelează la mecanisme din ce în ce mai complexe în procesarea informațiilor…_\nArgumentați în patru pagini necesitatea învățării eficiente în concordanță cu orientările contemporane.',
 items:[
  {cer:'Conceptul de **învățare**: forme, tipuri, niveluri.', rep:[
   'Învățarea = însușirea experienței sociale în scopul adaptării optime la mediu; implică întregul sistem psihic.',
   'Forme clasice: prin încercare și eroare (**Thorndike**), reflex-condiționată (**Pavlov**), prin intuiție/insight (**Köhler**).',
   '**Gagné – 8 tipuri (ierarhic):** de semnale; stimul–răspuns; înlănțuirea motorie; asociații verbale; prin discriminare; a noțiunilor; a regulilor; prin rezolvare de probleme.',
   'Taxonomie M. Zlate: învățare didactică, socială, din experiența proprie și a altora.']},
  {cer:'Două **domenii** ale învățării.', rep:['Cognitiv: înțelegere, aplicare, analiză, sinteză, evaluare.','Afectiv: a accepta, a arăta, a exprima → motivație, atitudini, preferințe, judecăți de valoare (teoria disonanței cognitive).']},
  {cer:'Procese **cognitive, afective, volitive** – condiții interne ale învățării.', rep:[
   'Senzațiile și percepțiile (material intuitiv, variat); reprezentările; gândirea (concret → abstract, particular → general); limbajul; memoria (fixare, păstrare, reactualizare); imaginația.',
   'Afectivitatea și voința susțin efortul și perseverența.']},
  {cer:'Rolul **motivației** în prevenirea insuccesului școlar.', rep:[
   'Motive școlare: satisfacția activității, dorința de a înțelege, interese, progres, aprecierea grupului, dorința de laudă, de colaborare.',
   'Întărirea (recompensa, lauda adaptată personalității) crește randamentul.',
   'Elevul are dreptul să greșească; obiectiv prioritar: prevenirea rămânerii în urmă și succesul fiecărui elev.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'ADHD – „tulburare hiperkinetică”.',
 items:[
  {cer:'A. Ce este **ADHD** și criteriile.', rep:['Diferență de funcționare a creierului; neatenție, hiperactivitate, impulsivitate; probleme de memorie de scurtă durată, de învățare și de comportament.','Diagnostic: diferențe semnificative față de copiii de aceeași vârstă, persistente, în mai multe contexte.','Suportul timpuriu reduce riscul tulburării opozițional-sfidătoare.']},
  {cer:'B. Trei **soluții pentru părinți/profesori**.', rep:['Rutina zilnică clară.','Managementul timpului și parteneriat școală–familie, întărirea comportamentelor pozitive acasă și la școală.','Verbalizarea importanței autocontrolului și autoorganizării.']},
  {cer:'C. **Implicații** personale, familiale, sociale.', rep:['Marginalizare, accidente, agresivitate în grup.','Tensiuni și conflicte familiale.','Rezultate slabe, fumat/alcool, abandon școlar, activități antisociale, depresie.']},
  {cer:'D. **Tulburarea de învățare**.', rep:['Incapacitate/deficiență cu dominantă psihoafectivă sau psihomotorie a comportamentului de învățare, la copii cu ritm lent, intelect liminar sau tulburări instrumentale cognitiv-perceptive.']},
  {cer:'E. **Categorii de deficiențe** la persoanele cu CES.', rep:['Fizice/neuromotorii','Mintale (ușoare, medii, severe, profunde)','Multiple','Senzoriale (de auz, de vedere)','Tulburări de limbaj','Tulburări afectiv-comportamentale','Tulburări de învățare','Alte categorii: autism, HIV/SIDA, copii instituționalizați etc.']},
  {cer:'F. **Rolul consilierului** în managementul comportamental (ADHD).', rep:['Calm, răbdare, acceptarea diferențelor.','Identificarea stărilor emoționale, strategii de reglare, legătura gânduri–comportament; evitarea pedepsei, accent pe comportamente noi, laude/recompense.','Metode: respirație și relaxare, jocuri, marionete, îmbunătățirea imaginii de sine, obiective pentru viitor.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Cl. a IX-a, CS 2.2 „Aplicarea tehnicilor de autocontrol emoțional” – demers didactic prin **brainstorming**.',
 items:[
  {cer:'Explicarea metodei și etapele de pregătire.', rep:['Metodă de rezolvare creativă a problemelor, exersează gândirea divergentă.','Etape: organizare/pregătire; stabilirea temei; faza de creativitate (generare); analiza listei de idei; evaluarea critică; soluția finală.']},
  {cer:'Activitate de învățare + resurse.', rep:['Tema „Călătorie în lumea emoțiilor”, 50 min, formare de priceperi și deprinderi; scop: reglarea emoțională și autocontrolul.','Resurse: povești terapeutice, „Emoții la borcan”, imagini cu emoții, flipchart; forme: frontal, individual, pe echipe.','Evaluare: observarea sistematică, aprecieri verbale; temă: poster „Emoțiile mele”.']},
  {cer:'Avantajele brainstormingului.', rep:['Argumentare, comunicare, reflecție, încredere în sine, participarea tuturor, climat pozitiv.']}
 ]}
]});

/* ---- content/teste/t06.js ---- */
SUBIECTE.push({nr:6, tema:'Managementul clasei și consilierea · Consilierea cadrelor didactice, educația pozitivă · Expunerea și discuția (CV)', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț despre managementul educațional ca știință pedagogică și relațiile de cooperare cu elevii și părinții.\nArgumentați în patru pagini necesitatea managementului clasei și rolul consilierii psihopedagogice.',
 items:[
  {cer:'Semnificația conceptului de **management al clasei de elevi**.', rep:['Organizarea, planificarea și evaluarea activităților educative din clasă; structura și obiectivele școlii derivă din idealul social.']},
  {cer:'Rolul consilierii și **principiile** fundamentale (socio-afectiv, stimulativ, eficient).', rep:[
   'Consilierea psihopedagogică = sprijin pentru elevi, profesori, părinți, autorități școlare; dezvoltare personală, educațională, socială, prevenirea crizelor.',
   'Principii: consilierea e **permisivă** (libertatea elevului de a avea opinii); **responsabilitate** pentru dezvoltarea elevului (respect, acceptare, toleranță); **consecvență** în reguli și principii, elevul ca individualitate unică.',
   'Procesul: interactiv, constructiv, dinamic; problemele transformate în scopuri specifice.',
   'Condiții pentru comunicare: reducerea anxietății, ascultare atentă, prioritizarea subiectelor, pauze; tehnici: timpul de răspuns, stimuli verbali minimali, repetarea, reflectarea, rezumarea/sumarizarea.']},
  {cer:'**Atribuțiile** consilierului în orientarea școlară și profesională.', rep:[
   'Roluri: mediator de conflicte, consultant educațional, profesor; activitate în cabinet coordonat de CJRAE (unitate conexă ISJ).',
   'Patru acțiuni: educarea pentru carieră, cunoașterea personalității elevului, cunoașterea rețelei școlare, îndrumarea efectivă.',
   'Triada familie–elev–școală.']},
  {cer:'Tipuri de relații/situații care **cauzează tensiuni** în clasă.', rep:['Stimulare inegală; cunoașterea empirică a elevilor; neatenția la cauzele comportamentelor; rutina/șablonul; evaluare subiectivă; reducerea metodelor activizante; neacceptarea opiniilor opuse; abuz de muncă frontală; comunicare slabă cu părinții; neimplicarea elevilor în managementul clasei.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Consilierea educațională sprijină elevii, profesorii, părinții și dezvoltarea clasei ca grup.',
 items:[
  {cer:'A. **Nevoia de consiliere școlară**.', rep:['Creșterea abandonului, eșecului, tulburărilor emoționale; disciplina Consiliere și orientare la primar, gimnaziu, liceu.','Ajută: autocunoaștere, respect de sine, relaționare, coeziune de grup (prevenirea violenței), decizii de carieră.']},
  {cer:'B. Trei **perspective** asupra valorilor și experiențelor de învățare.', rep:['Perspectiva de grup (relațiile cu colegii, acceptare reciprocă).','Perspectiva individuală (dificultățile de învățare, CES).','Perspectiva curriculară (adaptarea mijloacelor, flexibilizarea conținuturilor, educație incluzivă).']},
  {cer:'C. **Consilierea cadrelor didactice**.', rep:['Activități individuale/de grup de informare și orientare, la cerere (comisii metodice, consilii profesorale).','Variabile în lucrul cu adulții: atribuirea cauzală, sistemul de valori, **reactanța psihologică** (caracter voluntar), gradul de acceptare a soluțiilor.']},
  {cer:'D. **Responsabilitatea** comportamentelor și intervențiilor consilierului.', rep:['Relații de cooperare cu toți factorii; respect pentru personalitatea fiecărui elev; strategii adaptate; motivație intrinsecă.']},
  {cer:'E. De ce copiii cresc cel mai bine cu **educația pozitivă**.', rep:['Relație apropiată + responsabilizare; metodele tradiționale transformă părinții și copiii în adversari.','Disciplina = educație, nu pedeapsă; copilul își asumă greșeala și o repară; se caută cauza comportamentului.']},
  {cer:'F. **Tehnici** de educație pozitivă în școală.', rep:['Solicitarea/cererea în loc de ordin („Ai vrea să…”).','Evitarea întrebărilor retorice; reformularea pozitivă a mesajelor.','„Hai să rezolvăm împreună!”','Rutine, reguli și limite clare, laudă și încurajare, adaptare la temperament.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Cl. a XII-a, CS 4.2 „Exersarea abilităților de utilizare a documentelor de marketing personal” (CV, scrisoare de intenție, Europass) – demers prin **expunere și discuție**.',
 items:[
  {cer:'Explicarea metodelor și caracterul activ.', rep:['Expunerea: prezentare sistematică; cerințe – plan/schemă, voce caldă, ritm potrivit, materiale adecvate; activează gândirea prin clasificări, comparații.','Discuția: schimb organizat de idei pe o temă; tipuri: seminar, dialog, masa rotundă, discuția dirijată; dezvoltă exprimarea și caracterul participativ.']},
  {cer:'Activitate de învățare + conținut științific.', rep:['Tema „Marketing personal – întocmirea unui CV”, cabinet, 50 min.','Elementele CV-ului Europass, scrisoarea de intenție, interviul; exercițiu de autoprezentare („reclamă despre sine”).','Temă: CV în format european.']}
 ]}
]});

/* ---- content/teste/t07.js ---- */
SUBIECTE.push({nr:7, tema:'Comunicarea didactică, asertivitatea, discuția critică · Dezvoltarea personalității · Conversația (scrisoarea de intenție)', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Comunicarea este procesul esențial prin care fiecare individ devine ceea ce este și intră în relație cu alții…_\nArgumentați în patru pagini necesitatea comunicării didactice.',
 items:[
  {cer:'Explicarea **comunicării psihopedagogice** (didactice).', rep:[
   'Transmiterea mesajului educativ de la profesor la elev pentru a produce schimbări de comportament – baza predării–învățării–evaluării.',
   'Se comunică informații cognitive, indiceale și conative; canale = analizatorii.',
   'Funcții: formativă; de transmitere a mesajelor didactice; de transmitere a influențelor educaționale (coeziune); de rezolvare a conflictelor; de reglare și evaluare.',
   'Particularități: mesaj structurat pe obiective, combinare verbal–nonverbal–paraverbal, stil determinat de concepția didactică, reglare prin feedback/retroacțiuni.',
   'Tipuri: intrapersonală, interpersonală, de grup, publică, de masă; verbală, paraverbală (ritm, pauză, intonație), nonverbală (contactul vizual – cel mai puternic indiciu); metacomunicarea.']},
  {cer:'**Factorii și barierele** în optimizarea comunicării.', rep:['Comunicare descendentă, ascendentă, orizontală.','Bariere: prejudecăți, stereotipuri, lipsa feedback-ului, mesaje care contrazic valorile receptorului.','Feedback-ul (Mucchielli – semnele nonverbale de oboseală, neatenție); retroacțiunea anticipată.']},
  {cer:'Cinci caracteristici ale **persoanei asertive**.', rep:['Asertivitatea = exprimarea ideilor și opiniilor fără a încălca drepturile celorlalți.','Cooperează ușor; acceptă feedback-ul; își face cunoscute opiniile și sentimentele; e atentă la nevoile celorlalți; exprimă dezacordul argumentat și cu respect.']},
  {cer:'Șase **reguli ale discuției critice** (Eemeren și Grootendorst).', rep:[
   'Cine avansează un punct de vedere trebuie să-l apere, dacă i se cere.',
   'Atacul trebuie să vizeze punctul de vedere avansat de interlocutor.',
   'Nu prezinți o premisă ca acceptată dacă nu este.',
   'O opinie care nu a convins trebuie abandonată.',
   'Doar argumente valide, logice.',
   'Fără expresii neclare/ambigue.',
   'Conflictul de opinie stă la baza maieuticii socratice.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Psihologia dezvoltării – capitol distinct al concursului.',
 items:[
  {cer:'A. Noțiunea de **dezvoltare a personalității**.', rep:['Trecere de la inferior la superior, de la simplu la complex; caracter ascendent, în spirală; rezultat al contradicțiilor; ritm propriu fiecărui individ.']},
  {cer:'B. **Factorii ereditari** ca premise.', rep:['Particularitățile anatomo-fiziologice ale analizatorilor și ale sistemului nervos; predispoziții polivalente; maturizarea spontană după programul genetic.','Două planuri: trăsături generale ale speciei + particularități ereditare individuale.']},
  {cer:'C. **Educabilitatea manifestă vs latentă**.', rep:['Manifestă: ce arată individul într-o situație de examinare (examene de selecție) – poate fi limitativă.','Latentă: potențialul de învățare, adesea superior celui manifestat la școală.']},
  {cer:'D. Doi întemeietori ai pedagogiei cu concepție **ambientalistă**.', rep:['J.A. Comenius','J.H. Pestalozzi']},
  {cer:'E. Rolul educației (factori interni–externi).', rep:['Acțiune în acord cu idealul educațional; valorifică potențialul nativ; organizează metodologia, conținuturile, formele; personalitatea = interacțiunea ereditate–mediu–educație.']},
  {cer:'F. Eficiența consilierii în dezvoltarea optimă.', rep:['Prevenirea crizelor; principii: libertatea de opinie a elevului, acceptarea ca individualitate unică, respect.','Stone și Shertzer: prima ședință e foarte importantă, reduce anxietatea.','Model ierarhic al trăsăturilor (Allport); psihologia umanistă.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Cl. a XII-a, CS 4.2 (marketing personal) – demers prin **conversație**.',
 items:[
  {cer:'Explicarea conversației, etape și caracter activ.', rep:['Metodă prin întrebări-răspunsuri; valoare formativă (gândire, memorie, imaginație); cerințe: întrebări clare, variate, evitarea răspunsurilor monosilabice, stimularea creativității.','Forme: euristică, catehetică, de consolidare, de verificare.']},
  {cer:'Activitate de învățare.', rep:['Tema „Întocmirea unei scrisori de intenție”; grupe – scrisori pentru vânzător, translator, casier; liderul citește anunțul și scrisoarea; feedback cu sugestii.','Portofoliu cu scrisoarea pentru jobul dorit; data viitoare – simularea interviului.']}
 ]}
]});

/* ---- content/teste/t08.js ---- */
SUBIECTE.push({nr:8, tema:'Învățarea ca fundament al dezvoltării · Tehnologia digitală în consiliere, cyberbullying · Erori de evaluare', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'P. Popescu-Neveanu: _„Învățarea nu este o simplă beneficiară a condițiilor de dezvoltare, ci generează noi structuri și procese…”_\nArgumentați în patru pagini importanța psihică a învățării în adaptarea la cerințele școlare.',
 items:[
  {cer:'Conceptul de **învățare ca fundament al dezvoltării psihice**.', rep:['Dobândirea de informații și capacități pentru adaptarea la mediu; dimensiune informațională + operațională.','Tinca Crețu: învățarea școlară are conținut stabilit în raport cu dezvoltarea științei, cerințele sociale și posibilitățile elevului; unitatea predare–învățare; e guvernată de motivație, organizare, autocontrol, autoreglare.','Piaget: asimilarea depinde de stadiul cognitiv → restructurări mentale.']},
  {cer:'Aspecte **individuale și sociale** ale adaptării școlare.', rep:['Factori: familia, educația timpurie, factori individuali (inteligența, temperamentul, emoționalitatea).','Autoreglarea (emoțională și cognitivă) – premisă a adaptării; maturizarea cortexului prefrontal; stresul scade reglarea și randamentul.','Implicații: climatul familial să dezvolte competența emoțională; atenție la dificultățile de adaptare; educația parentală.']},
  {cer:'Contribuția teoriilor învățării la **instruirea eficientă**.', rep:[
   '**Thorndike** – învățarea prin încercare și eroare (succes); **legea efectului**: comportamentul urmat de efect plăcut tinde să se repete.',
   '**Skinner** – condiționarea operantă; întărirea; **instruirea programată** (ritm propriu) → precursor al instruirii asistate de calculator.',
   '**Bruner** – gândire logico-științifică vs narativă; învățarea prin descoperire; „orice se poate învăța la orice vârstă, într-o formă accesibilă”.',
   '**Piaget** – echilibrul asimilare–acomodare, jocul simbolic, stadiile, munca în echipă; „a opera înseamnă a raționa”.',
   '**Ausubel și Robinson** – modelul învățării școlare a noțiunilor; factori motivaționali.']},
  {cer:'Trei **criterii fundamentale** în învățarea noilor cunoștințe.', rep:['Învățarea prin descoperire.','Învățarea conștientă (opusă celei mecanice).','Învățarea prin receptare.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'K. Mannheim: „Problema generațiilor…” – schimbarea de paradigmă digitală în consiliere.',
 items:[
  {cer:'A. Importanța **tehnologiei digitale** în consilierea carierei.', rep:['Beneficii (Vuorinen, Kettunen, Sampson): acces crescut la evaluare, la informații, la sprijin colegial, la specialiști la distanță, costuri reduse.','Portofolii digitale, bloguri, rețele sociale, Europass cu certificare digitală, chatboți, sortarea automată a CV-urilor.']},
  {cer:'B. Arii de manifestare a **utilizării calculatorului** în educație.', rep:['Implicarea profesională','Resursele digitale','Predare și învățare','Evaluare','Abilitarea educabililor','Facilitarea competenței digitale a educabililor','(cadrul european DigCompEdu)']},
  {cer:'C. **Avantaje/dezavantaje** ale tehnologiei digitale în consiliere.', rep:['Avantaje: acces, rentabilitate, comunități incluzive, portofolii.','Dezavantaje: calitatea informațiilor, confidențialitatea și siguranța datelor, calitatea evaluării, costuri de actualizare, rezistența/anxietatea specialiștilor.']},
  {cer:'D. **Școala/consilierea online** – provocări, oportunități, priorități.', rep:['Pandemia: pierderi de învățare, risc de abandon, inechitate, anxietate și depresie la elevi.','Consilierii au folosit Zoom, WhatsApp, Messenger; nevoia de dotare și de formare digitală a profesorilor.']},
  {cer:'E. **Cyberbullying** – continuare a bullyingului online.', rep:['Specializare tehnică (falsificarea identității); anonimatul agresorului; lipsa feedback-ului direct, a regretului și empatiei; rolul martorilor; audiență potențial infinită; durată nedeterminată; greu de detectat.']},
  {cer:'F. Patru **tipuri de agresiune online**.', rep:['Împotriva școlii','Împotriva persoanelor vulnerabile','Împotriva grupurilor (ținte cunoscute)','Agresiune declanșată de impulsuri spontane']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Standarde curriculare de performanță, proiectare curriculară, sugestii metodologice**.', rep:['Standardele = criterii de evaluare a calității învățării, specificări de performanță (cunoștințe, capacități, comportamente).','Proiectarea curriculară: de la conținuturi fixe la demersuri didactice personalizate.','Sugestiile metodologice: orientări privind activitățile de învățare, materialele, strategiile de evaluare.']},
  {cer:'2. Necesitatea **evaluării didactice**.', rep:['Nivel micro: raportul performanțe realizate – anticipate; nivel macro: efectele activității instructiv-educative.','Informații despre prestația profesorului, a elevilor, despre program; fundamentează decizii.']},
  {cer:'3. **Verificarea vs măsurarea**.', rep:['Verificarea: colectarea informațiilor despre performanțe prin metode, tehnici, instrumente.','Măsurarea: aprecierea/raportarea performanțelor la indicatori și criterii – dimensiunea cantitativă a evaluării.']},
  {cer:'4. Listă: **surse de eroare** în evaluare.', rep:['Efectul de ordine','Efectul de contrast','Efectul Pygmalion (de anticipare)','Ecuația personală a examinatorului (exigență/indulgență)','Efectul halo (Thorndike)']},
  {cer:'5. Cl. a IX-a, CS 2.1 – comunicarea eficientă cu adolescenții.', rep:['Adolescentul vrea independență; părinții să recunoască și ei greșelile, să nu intre „cu bocancii” în viața lui, să-i cunoască prietenii.','Activitate: „Comunicarea eficientă – un pas spre reușită” – jocul „ghicește liderul”, exercițiul culorilor (blocaje), dialoguri asertive, slogan de echipă.']}
 ]}
]});

/* ---- content/teste/t09.js ---- */
SUBIECTE.push({nr:9, tema:'Învățarea și motivația · Competența și educația digitală, cyberbullying · Portofoliul, autoevaluarea, funcțiile notei', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _Învățarea, ca formă dominantă de activitate pe perioada școlarității, rămâne activitatea specifică de bază pentru orice vârstă…_\nArgumentați în patru pagini necesitatea învățării în actul educațional.',
 items:[
  {cer:'Conceptul de **învățare**, forme și condiții.', rep:[
   'A. Clausse: modificare de atitudine și comportament prin rezolvarea unei probleme; nu orice modificare de comportament e învățare.',
   'Învățarea școlară = sistematică, instituționalizată, organizată pe cicluri și profiluri; contează **cum** învățăm, nu doar ce.',
   'Clasificare: prin obișnuire, condiționare instrumentală, condiționare clasică, verbală, motorie, perceptivă.',
   'Gagné – 8 tipuri ierarhice (de semnale … rezolvare de probleme), fiecare cu condițiile prealabile.',
   'Ausubel: factorul principal = **structura cognitivă** (ce știe deja elevul); variabile intrapersonale și situaționale; climatul afectiv al clasei.']},
  {cer:'Două **modele asociaționiste** ale învățării.', rep:['**Condiționarea clasică** (Pavlov): asocierea unui stimul neutru cu un răspuns; Watson și Rayner – condiționarea reacțiilor emoționale (fobii, inclusiv fobia școlară).','**Condiționarea operantă/instrumentală** (Thorndike, Skinner): comportamentul e controlat de consecințe (recompensă/pedeapsă).']},
  {cer:'**Procesarea informației** și diferențele individuale.', rep:['Niveluri de analiză (Marr): computațional, algoritmic/reprezentațional, implementațional (neurobiologic) + nivelul cunoștințelor.','Niveluri de procesare: perceptiv (formă, culoare), fonologic, semantic.','Cunoștințe declarative vs procedurale; memoria influențată de emoții.']},
  {cer:'Importanța **motivației**.', rep:[
   'Motivația = „motorul personalității”; stare de necesitate care declanșează și susține acțiunea.',
   '**Optimum motivațional** – legea Yerkes-Dodson: prea puțină sau prea multă motivație scade performanța; depinde de dificultatea sarcinii.',
   'Motivație **intrinsecă** (curiozitate, plăcerea de a învăța) vs **extrinsecă** (note, recompense).',
   'Ausubel și Robinson – 3 componente ale motivației școlare: **impulsul cognitiv, trebuința afirmării eului, trebuința de afiliere**.',
   'Percepția valorii activității și a propriei competențe (autoeficacitate); profesorul să nu-i ignore pe elevii slabi.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Competența digitală – una dintre cele 8 competențe-cheie pentru învățarea pe tot parcursul vieții (Comisia Europeană).',
 items:[
  {cer:'A. Definiți **competența digitală**.', rep:['Utilizarea cu încredere și critică a TIC pentru muncă, comunicare, timp liber, rezolvare de probleme.','5 arii (DigComp): informare și alfabetizare digitală; comunicare și colaborare; crearea de conținut digital; siguranță; rezolvarea de probleme.']},
  {cer:'B. Importanța **educației digitale** în secolul XXI.', rep:['Elevii sunt expuși la conținut pornografic, agresiuni.','Teme: protejarea informațiilor, acces digital, comunicare, drepturi și responsabilități digitale, securitate, sănătate și bunăstare digitală.','Dimensiuni: atitudini și valori; cognitivă (gândire critică); participare activă etică.']},
  {cer:'C. Clasificarea **cyberbullyingului** după conținut – avantaje/dezavantaje.', rep:['Avantaje: identifică grupurile de risc, categorii clare, relevante pentru prevenție.','Dezavantaje: categoriile se demodează odată cu tehnologia, se suprapun, validitate limitată în identificarea motivelor.']},
  {cer:'D. **Norme de conviețuire** cibernetică.', rep:['Consultarea părinților','Acorduri și reguli de conduită','Cod de conduită','O persoană-cheie pentru securitate cibernetică','Măsuri proactive anti-hărțuire','Revizuirea procedurilor de utilizare a tehnologiei']},
  {cer:'E. Categorii de **riscuri online**.', rep:['De contact (persoane necunoscute)','De conținut (ilegal, violent, rasist, dezinformare)','De confidențialitate/viață privată','De exploatare comercială (jocuri de noroc, programe ilegale)']},
  {cer:'F. Trei exemple de **utilizare adecvată** a tehnologiei în școală.', rep:['Educarea elevilor să recunoască conținutul nepotrivit.','Folosirea dotărilor pentru sarcini academice și stare de bine.','Informarea despre furtul de identitate și hărțuire online + consecințe legale.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Validitatea predictivă, validitatea unui test, standardizarea**.', rep:['Validitatea = testul măsoară ce și-a propus să măsoare.','Validitatea predictivă = capacitatea de a prezice performanțe viitoare.','Standardizarea = uniformizarea condițiilor de aplicare, conținut, criterii, cotare – condiție a caracterului științific.']},
  {cer:'2. Necesitatea **portofoliului**.', rep:['Colecție semnificativă de produse ale elevului (lucrări, proiecte, fișe, postere, reflecții); implicarea activă a elevului în selecție.','Evaluare holistică sau analitică + evaluarea progresului; eficient cu scop clar, puține piese, reflecții personale.']},
  {cer:'3. **Evaluarea practică vs autoevaluarea**.', rep:['Practică: probe practice pentru priceperi și deprinderi, raportate la standarde de calitate.','Autoevaluarea: aprecierea critică a propriilor competențe; implică metacogniția; instrumente – fișe și chestionare de autoevaluare.']},
  {cer:'4. Listă: **funcțiile notei școlare** și interdependența lor.', rep:['De control (feedback)','De apreciere/constatare (diagnostică)','Socială (informarea familiei și comunității)','De reglare','Educativă (stimulativă)','Prognostică','De selecție']},
  {cer:'5. Cl. a IX-a, CS 2.1 – comunicarea eficientă.', rep:['Adolescența: criză de identitate, nevoie de autonomie, argou/jargon, risc de delincvență; relație de cooperare cu părintele.','„Nu judeca pe tânăr după mintea ta, ci pune-te în locul lui.”','Activitate: „pânza” din ghem de ață, stilurile de comunicare, asertivitate, tăcerea ca instrument.']}
 ]}
]});

/* ---- content/teste/t10.js ---- */
SUBIECTE.push({nr:10, tema:'Violența școlară și bandele · Profilul de învățare în era digitală, cooperarea online · Itemi, SINELG, cvintet', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: comportamentul disciplinat presupune valori (responsabilitate, perseverență, demnitate); la polul opus – conduite indisciplinate, agresivitate, abandon, absenteism.\nArgumentați în patru pagini comportamentele deviante ale elevilor (violență, indisciplină, delincvență, evaziune școlară, comportamente de risc).',
 items:[
  {cer:'**Cauzalitatea violenței fizice** în școală.', rep:[
   'Individuale: agresivitate, autocontrol redus, toleranță scăzută la frustrare, dificultăți de atenție, instabilitate psihomotorie, tulburări psihice.',
   'Familiale/sociale: familie dezorganizată, anturaj, mass-media, grupul de apartenență.',
   'Școlare: relaționare deficitară, evaluare, stil didactic autocrat, program/programă încărcate, prejudecăți.',
   'Direcții: elev–elev (jigniri, porecle, loviri, furt, vandalism), elev–profesor, profesor–elev (sarcasm, dominare).',
   'Intervenție: interviul investigativ și interviul bazat pe încredere; sancțiuni echitabile, cu conștientizarea greșelii.']},
  {cer:'**Sursele generatoare** ale violenței în școală.', rep:['Programă încărcată, orar stresant.','Experiență didactică redusă în gestionarea crizelor.','Deficiențe de relaționare în școală.','Prejudecăți etnice.','Evaluarea rezultatelor.','Stilul autocrat al unor profesori.']},
  {cer:'**Profilul psihologic** al unui posibil membru al unei „bande”.', rep:['Absenteism masiv, risc de abandon','Rezultate școlare slabe','Lipsa preocupărilor de timp liber','Asumarea simbolurilor și valorilor bandei','Familie dezorganizată','Domiciliu în zona bandei','Incidente frecvente cu poliția','(Forme de violență în bande – C. Neamțu, 2003)']},
  {cer:'Importanța **consilierii** elevilor violenți.', rep:['Echipă interdisciplinară: consilier, familie, poliție, elev.','Discuții cu familia, medierea conflictelor, consiliere de grup, voluntariat.','**Biblioterapia** (lectură/filme cu personaje cu care se identifică) → empatie și autocontrol; arta dramatică.','Etichetarea și amenințarea amplifică problema; activități nonformale/outdoor cu comunitatea.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Profilul de învățare – diferențele dintre învățarea cu tehnologie și cea tradițională.',
 items:[
  {cer:'A. Particularitățile **profilului de învățare în era digitală**.', rep:['Internetul – sursa principală; risc de învățare superficială.','Stil predominant kinestezic, învățare inductivă, autogestionarea învățării; elevul ca organizator de informații.','Prensky (2001) – „nativii digitali”: preferă imaginile, învățarea activă, grupurile sociale, recompensa imediată.']},
  {cer:'B. Comparație **profil clasic vs digital**.', rep:['Viteză sporită vs convențională','Sarcini multiple vs sarcină unică','Imagini vs text','Acces aleatoriu vs pas cu pas','Învățare socială vs individuală','Activă vs pasivă','Joacă vs muncă','Recompensă imediată vs răbdare','Tehnologia ca prieten vs dușman']},
  {cer:'C. **Activitatea prin cooperare** în mediul online.', rep:['Interdependență pozitivă + răspundere individuală; implicare activă; gândire critică, încredere, comunicare.']},
  {cer:'D. **Metode de învățare prin cooperare** adaptabile online.', rep:['Gândiți – Lucrați în perechi – Comunicați (Think-Pair-Share)','Mozaicul (grupurile interdependente)','Tehnica 6/3/5 (brainwriting)','Eșafodajul metacognitiv']},
  {cer:'E. Efectele **rețelelor sociale** în școală.', rep:['Implicarea comunității în proiecte','Tranziția între cicluri','Beneficii civice','Relații mai bune cu părinții','Diseminarea informațiilor','Promovarea imaginii școlii']},
  {cer:'F. Trei **tipuri de platforme** online.', rep:['De comunicare și colaborare (ex. Microsoft Teams)','LMS open source (ex. Moodle)','LMS moderne cu inteligență artificială (ex. Docebo)']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Item pedagogic, tehnici de evaluare, strategii de evaluare**.', rep:['Itemul = întrebare + formatul ei + răspunsul așteptat; element de bază al unui instrument de evaluare.','Tehnicile = modalitățile de declanșare a răspunsurilor la itemi.','Strategiile = maniera operațională de combinare a tipurilor, formelor, descriptorilor, notării.']},
  {cer:'2. Necesitatea **evaluării orale**.', rep:['Formă particulară a conversației; implică toată clasa; întrebări de bază + ajutătoare; cere tact pedagogic și climat de încredere; să nu se reducă la repovestire.']},
  {cer:'3. **SINELG vs cvintet**.', rep:['SINELG (Sistemul Interactiv de Notare pentru Eficientizarea Lecturii și Gândirii): semne pe marginea textului – ✓ știam, + nou, – contrazice, ? neclar; tabel cu 4 coloane.','Cvintetul: poezie de 5 versuri – 1 substantiv (titlu), 2 adjective, 3 verbe, o propoziție de 4 cuvinte (sentimente), 1 cuvânt-esență; sinteză creativă.']},
  {cer:'4. Listă: caracteristicile **itemilor semiobiectivi**.', rep:['Evaluează mai mult decât recunoașterea; răspuns limitat ca spațiu, formă, conținut; acoperă o arie largă de conținut; obiectivitate mai mică decât la itemii obiectivi.','Tipuri: itemi cu răspuns scurt, de completare, întrebări structurate.']},
  {cer:'5. Cl. a XI-a, CS 1.1 – aspirații și planificarea carierei.', rep:['Cariera: proces dinamic de poziții, interacțiune factori individuali–organizaționali, identitate ocupațională.','J. Holland: personalitatea – factor proeminent în alegerea carierei.','Pașii planificării individuale a carierei: autoevaluarea; luarea deciziilor și stabilirea scopurilor; explorarea oportunităților; planificarea; urmărirea realizării scopurilor.','Activitate: brainstorming, studiu de caz, dezbatere, arborele profesional al familiei.']}
 ]}
]});
