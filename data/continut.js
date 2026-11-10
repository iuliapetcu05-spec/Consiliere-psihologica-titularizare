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
