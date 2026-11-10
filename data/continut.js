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

/* ---- content/teste/t11.js ---- */
SUBIECTE.push({nr:11, tema:'Consilierea în situații de criză: divorț, abuz · Conduita psihosocială · Curriculum, aptitudinea didactică, Bloom', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: eficiența consilierii școlare a fost demonstrată în numeroase studii…\nArgumentați în patru pagini necesitatea principiilor de consiliere în situații de risc/criză.',
 items:[
  {cer:'**Eficiența consilierii școlare**.', rep:['Trei tipuri de evaluare: a personalului (supervizare), a programului comprehensiv de consiliere, a rezultatelor/impactului intervențiilor.','Elevii cu acces la consilieri: promovabilitate mai mare, mai puține probleme de comportament.','Domenii: carieră, educațional, socio-emoțional; competențe noncognitive: perseverență, motivație, creativitate, autocontrol, metacogniție, reziliență.']},
  {cer:'**Principiile consilierii în criză/risc**.', rep:[
   'Focalizarea pe rezolvarea problemelor (consilierul ca intermediar cu autoritățile).',
   'Crearea cadrului pentru restabilirea rețelei sociale (elevul acceptă ajutor).',
   'Focalizarea pe conceptul de sine (strategii pe măsura a ceea ce elevul crede că poate).',
   'Accent pe stima de sine, nu pe cauză și vinovăție; fiecare ședință se încheie cu o acțiune concretă.',
   'Comportamentul consilierului: evită acțiunile impulsive, deleagă autoritatea, își gestionează stresul, e calm, pregătit, informat, supervizat.']},
  {cer:'Consilierea elevilor cu **părinți divorțați**.', rep:['Școala = element de siguranță și stabilitate.','Copiii mici înțeleg greșit separarea; adolescenții trăiesc regret, conflicte de loialitate, depresie, anxietate; doliu, fantezii de reîntregire.','Programe pentru co-parenting pozitiv; grupuri – elevii văd că nu sunt singuri.','Tehnici: povești terapeutice (cei mici), scrisul terapeutic, scrisoarea către părinți.']},
  {cer:'Consilierea elevilor **după abuz** și programele de prevenire.', rep:['Sprijin, siguranță; validarea emoțiilor (frică, furie, vinovăție) pentru victimă și familie.','Prevenire: tipuri de atingeri, proprietatea asupra corpului, situații potențiale de abuz, secrete „bune/rele”.','Metode: filme, benzi desenate, teatru de păpuși; parteneriate cu DGASPC, poliție etc.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Conduita psihosocială.',
 items:[
  {cer:'A. **Stima de sine** și **cunoașterea de sine**.', rep:['Stima de sine = evaluarea propriei valori (autorespect, autoapreciere, autoacceptare); echilibru autocritică–autoapreciere.','Cunoașterea de sine = conștientizarea propriilor calități, limite, aptitudini → decizii (ex. alegerea facultății).']},
  {cer:'B. Rolul **relațiilor interpersonale** în dezvoltarea personalității.', rep:['Instituie norme, valori, stiluri de interacțiune, modele de comportament; nevoia de afiliere, intimitate; legătura cu fericirea.']},
  {cer:'C. **Imaginea de sine** și **percepția socială** a ei.', rep:['Percepția socială: procesul prin care ne formăm imaginea despre noi și despre alții.','W. James: sinele ca subiect (I) și ca obiect (Me).','Dimensiuni ale evoluției: concret–abstract, simplu–complex, sine public–privat, absolut–comparativ.']},
  {cer:'D. **Atitudini sociale vs comportamente sociale**.', rep:['Atitudinea = predispoziție de a gândi, simți, acționa favorabil/nefavorabil; 3 componente: **cognitivă, afectivă, comportamentală**; funcție anticipativă.','Comportamentul = activitate observabilă; atitudinea nu prezice întotdeauna comportamentul (specificitate, presiuni situaționale, accesibilitatea atitudinii).']},
  {cer:'E. Patru **tipuri de relații interpersonale**.', rep:['Părinți–copii','Iubire','Prietenie','Colegialitate (+ relații de comunicare, cognitive, afectiv-simpatetice, de influențare)']},
  {cer:'F. Exemplu de comportament **prosocial / antisocial**.', rep:['Prosocial: colegii îl vizitează pe un coleg accidentat și îl țin la curent cu materia.','Antisocial: insulta, calomnia.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Procesul de învățământ, conexiunea inversă, idealul educațional**.', rep:['Procesul de învățământ = subsistemul educațional bazat pe interdependența predare–învățare–evaluare.','Conexiunea inversă (feedback) = condiție a funcționării sistemului de instruire.','Idealul educațional = modelul de personalitate dezirabil într-o etapă istorică.']},
  {cer:'2. **Tipuri de curriculum** obligatoriu.', rep:['Curriculum de bază/nucleu (trunchiul comun) – obligatoriu pentru toți.','Curriculum la decizia școlii (CDȘ).','Formal, nonformal, informal.','Curriculumul național: planuri-cadru, programe școlare, manuale alternative, ghiduri, materiale-suport.']},
  {cer:'3. **Aptitudinea didactică vs aptitudinea psihopedagogică**.', rep:['Aptitudinea didactică: a coopera cu elevii, a proiecta, a selecta și organiza informația, a o transmite accesibil, a pune întrebări-problemă, a crea dialog.','Se sprijină pe: memorie, imaginație constructivă, inteligență, comunicare, gândire logică, spirit de observație, atenție, dicție.']},
  {cer:'4. Listă: **taxonomia Bloom** (domeniul cognitiv).', rep:['Cunoaștere – a defini, a identifica','Înțelegere – a explica, a clasifica','Aplicare – a utiliza, a aplica','Analiză – a compara, a deduce','Sinteză – a organiza, a restructura','Evaluare – a judeca, a decide']},
  {cer:'5. Cl. a XII-a, CS 1.1 – program de reușită personală și profesională.', rep:['G. Calò: „A orienta înseamnă a educa.”','Ginzberg: opțiunea profesională – proces de dezvoltare (peste 10 ani), compromis între capacități, valori, oportunități, în mare parte ireversibil.','Rolul familiei: elimină stereotipurile, sprijină alegerea liberă.','Activitate: studiul de caz „Matei” – dezvoltarea **autoeficacității** (Bandura).']}
 ]}
]});

/* ---- content/teste/t12.js ---- */
SUBIECTE.push({nr:12, tema:'Învățarea, deprinderile și motivația (Ausubel) · Consilierea și educația familiei · Didactica clasică vs modernă, stil de viață sănătos', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: _În adolescență, afirmarea puternică a eului este componenta dominantă a motivației școlare… impulsul cognitiv poate fi forma cea mai relevantă de motivare_.\nArgumentați în patru pagini necesitatea motivației învățării.',
 items:[
  {cer:'**Învățarea** în procesul instructiv-educativ.', rep:['Însușirea cunoștințelor și deprinderilor, cu schimbare în comportament.','Condiții: înțelegerea sensului (învățarea logică cere mai puține repetiții decât cea mecanică), legarea de cunoștințe anterioare, repetiții eșalonate, pauze de sedimentare, reproducerea activă.']},
  {cer:'Condiții psihologice ale **formării deprinderilor**.', rep:['Deprinderea = componentă automatizată a activității, formată prin exercițiu.','Faze: familiarizare (operații necoordonate) → organizare/sistematizare → automatizare (control kinestezic) → aplicare în activități complexe.','Exercițiul trebuie să aibă scop clar; analiza greșelilor; „curba exercițiului”; reînvățarea e mai dificilă.']},
  {cer:'Rolul **motivației** (Ausubel).', rep:[
   'Trei componente: **impulsul cognitiv** (nevoia de a cunoaște, de a rezolva probleme – motivație intrinsecă), **afirmarea eului** (statut, respect, teama de eșec), **trebuința de afiliere** (acceptarea părinților, apoi a covârstnicilor).',
   'În adolescență domină afirmarea eului; excesul poate duce la aspirații nerealiste, anxietate, eșec.',
   'Legea **Yerkes-Dodson** – optimum motivațional.',
   'Thorndike – legea secvenței temporale (recompensa/pedeapsa să fie apropiate de faptă); Claparède – interesul, baza pedagogiei raționale.']},
  {cer:'Importanța **învățării ca strategie motivațională**.', rep:['Strategia Ausubel: perspectivă realistă și creșterea motivației intrinseci.','Elevul are dreptul să greșească; succesul fiecărui elev; climat de optimism și încredere.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Consilierea familiei – educarea părinților, tipuri de familii, parteneriatul școală–familie.',
 items:[
  {cer:'A. **Familia** ca grup social și conceptele actuale.', rep:['Grup social cu determinări biologice și legături de atașament și sprijin.','Concepte: negocierea soluțiilor, armonia familială, responsabilizarea, eliminarea discriminărilor, parteneriatul și implicarea activă.']},
  {cer:'B. **Nevoile familiei** contemporane.', rep:['Informaționale, economice, culturale, de orientare socială, de sănătate.','Nevoi permanente, inițiale, ocazionale.']},
  {cer:'C. Rolul **consilierii și educației părinților**.', rep:['Un copil crește mai bine în familia lui, dacă aceasta e sprijinită; dezinstituționalizarea.','Consilierea familiei = acțiuni preventive și de sprijin; consilierea parentală vizează părinții.','Educația părinților – preventiv, unde nu sunt crize; consilierea – la cerere, pe probleme.']},
  {cer:'D. Trei elemente de bază în **sprijinirea familiei**.', rep:['Sprijin informațional','Sprijin emoțional','Sprijin instrumental']},
  {cer:'E. Ce urmărește **educația părinților**.', rep:['Activități educativ-formative: responsabilitate parentală, practici pozitive, rezolvarea conflictelor, comunicare, decizie, negociere.','Consiliere psihopedagogică: schimbarea atitudinilor, deprinderi parentale pentru situații-problemă (conflicte, adaptare școlară, CES).']},
  {cer:'F. Recomandări de **implicare a părinților**.', rep:['Activități și întâlniri cu părinții','Comunicare profesională, vizite la domiciliu','Seminare, conferințe pe interese speciale','Dezvoltarea deprinderilor parentale']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Predarea, stilul de învățare, curriculumul**.', rep:['Predarea: acțiuni sistematice de organizare și îndrumare a învățării (nu doar transmitere).','Stilul de învățare: factori cognitivi, fiziologici, afectivi – modul relativ stabil în care elevul percepe și răspunde la mediul de învățare.','Curriculumul: oferta educațională a școlii – experiențele de învățare directe și indirecte.']},
  {cer:'2. **Componentele procesului de învățământ**.', rep:['Agenții (profesor, elevi) – câmpul educațional','Finalitățile/obiectivele','Curriculumul și conținutul','Metodologia','Mijloacele de învățământ','Formele de organizare','Timpul','Conexiunea inversă (feedback)']},
  {cer:'3. **Didactica clasică vs modernă**.', rep:['Clasică: esența procesului de învățământ, principii, forme, metodologie.','Modernă: include tot + autoeducația, influențele nonformale, instrucția pentru toate vârstele.']},
  {cer:'4. Listă: **direcțiile didacticii moderne**.', rep:['Revizuirea curriculumului','Prospectiva','Intensificarea învățării prin experiențe de învățare','Noi strategii de instruire','Relații de respect și cooperare','Valorificarea dimensiunii formative','Feedback formativ și sumativ','Educația permanentă','Cercetarea științifică','Noile tehnologii (TIC)']},
  {cer:'5. Cl. a X-a, CS 5.1 – **stilul de viață de calitate**.', rep:['Somn, mișcare, alimentație, timp liber, relații, fără substanțe; pedagogia sănătății.','Trei etape ale motivației pentru stil de viață sănătos: orientare, formare, generalizare.','Activitate: brainstorming, studii de caz, „decalogul stilului de viață sănătos”, eseul de 5 minute.']}
 ]}
]});

/* ---- content/teste/t13.js ---- */
SUBIECTE.push({nr:13, tema:'Consilierul școlar, CJRAE/CJAP · Stima de sine și reușita · Programa de Consiliere și orientare', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: varietatea activităților consilierului amplifică complexitatea profesiei; implicarea lui are impact asupra rezultatelor elevilor și a abilităților emoționale și sociale.\nArgumentați în patru pagini necesitatea activității consilierilor școlari și a CJRAE/cabinetelor.',
 items:[
  {cer:'Semnificația **consilierii psihopedagogice**.', rep:[
   'Gh. Tomșa: consilierea școlară = „un proces intensiv de acordare a asistenței psihopedagogice elevilor și celorlalte persoane implicate în procesul educațional (părinți, profesori, autorități școlare)”.',
   'Relație de colaborare și suport elev–consilier pentru autocunoaștere, dezvoltare personală, stare de bine, prevenție.',
   'Caracteristici ale consilierii psihologice: cabinet, persoane normale cu dificultăți, specialiști (psihologie, pedagogie, asistență socială), fenomene psihologice (fobii, anxietate), număr limitat de ședințe.']},
  {cer:'Șase **roluri** ale consilierului școlar.', rep:['Pregătește și susține elevii pentru respectarea normelor','Mediază relațiile elevi–școală–autorități','Sprijină politicile școlare','Orientare și consiliere în carieră','Ghidare educațională','Orientarea carierei']},
  {cer:'Rolul și importanța **CJRAE/CJAP și a cabinetelor** (CJAP / CIAP).', rep:[
   'Trei tipuri de activități: asistență pedagogică și educațională; asistență psihologică pentru elevi, profesori, părinți; consiliere în carieră.',
   'Atribuții: sprijină formarea continuă a profesorilor; consiliază elevi, părinți, profesori; previn eșecul școlar; optimizează relațiile elev–profesor, școală–familie, școală–comunitate; examinează psihologic elevii.',
   'Consilierea individuală și de grup; colaborare cu profesorul itinerant/specialiști pentru ce depășește competența.']},
  {cer:'Caracteristici ale consilierii în **aria Consiliere și orientare**.', rep:['Se adresează elevilor, preventiv.','Realizată de consilier împreună cu dirigintele.','Informații despre sine, dezvoltare personală, acceptare de sine.','Suportivă: dezvoltare personală, carieră, stare de bine.']},
  {cer:'Relația **consiliere – psihoterapie – educație**.', rep:['Rogers: consilierea și psihoterapia – termeni aproape echivalenți; consilierea – probleme de realitate/cognitive, psihoterapia – afective, de profunzime.','Educația privește viitorul, consilierea – prezentul; educația – relație pedagogică, consilierea – relație de consiliere.','Consilierea are poziție **intermediară** între educație și psihoterapie.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Conduita psihosocială – climatul socio-afectiv favorabil.',
 items:[
  {cer:'A. Definiți: **învățare eficientă, consiliere vocațională, consiliere profesională**.', rep:['Învățarea eficientă: implicare conștientă, transfer al cunoștințelor și abilităților.','Consilierea vocațională: aspirații, înclinații, interese, pasiuni.','Consilierea profesională: alegerea optimă a profesiei, calificare, profesionalizare.']},
  {cer:'B. Relația **stimă de sine – reușită**.', rep:['„Cunoaște-te pe tine însuți” (Delphi, Socrate).','Succesele timpurii consolidează Eul și o imagine de sine pozitivă; eșecurile repetate stabilizează o stimă de sine negativă.','T. Constantin: două dimensiuni – valorizarea de sine și competența de sine.']},
  {cer:'C. Cinci **teorii ale stimei de sine**.', rep:['Teoria compensării','Teoria trebuințelor','Teoria comparării sociale (Festinger)','W. James: stima de sine = succese / pretenții','Teoria atașamentului']},
  {cer:'D. **Factorii** reușitei/eșecului școlar.', rep:['Încrederea în sine','Nivelul de aspirație','Extraversia și nevrozismul','(+ inteligența, motivația, familia, climatul școlar)']},
  {cer:'E. **Greșeli** care pot determina eșecul.', rep:['Erori de lapsus (memorie)','Erori de similitudine','Erori de „siguranță” (acționezi fără să gândești deși știi că nu știi)','Erori de percepție (dorința pusă înaintea realității)']},
  {cer:'F. Rolul **personalității și competențelor consilierului** pentru climat.', rep:['Răbdare, calm, deschidere, viziune pozitivă, umor, sinceritate, acceptare.','Niveluri de competență: culegerea datelor; consiliere educațională și OSP; consiliere psihologică individuală și de grup; consultant al profesorilor și conducerii; implicare în comunitate.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Direcțiile** ariei curriculare (nota de prezentare).', rep:['Facilitarea accesului la întreaga ofertă de educație și formare.','Sprijinirea inserției socio-profesionale.','Ameliorarea utilizării resurselor umane ale societății.']},
  {cer:'2. **Competențe-cheie europene** pentru aria Consiliere și orientare + structura programei de liceu.', rep:['Competențe digitale; interpersonale, interculturale, sociale și civice; a învăța să înveți; antreprenoriale.','Structura programei: competențe generale; valori și atitudini; competențe specifice și conținuturi; sugestii metodologice.']},
  {cer:'3. Necesitatea **valorilor și atitudinilor** în programă.', rep:['Unicitatea fiecăruia, respect și încredere în sine, valorizarea relațiilor, receptivitate la emoțiile altora, deschidere la noi tipuri de învățare, gândire critică, flexibilitate în traseul propriu, viață de calitate, învățare permanentă.']},
  {cer:'4. Listă: **metode recomandate** (centrarea pe persoană).', rep:['Dezbaterea','Brainstormingul','Exerciții metaforice','Tehnici de gândire','Tehnici de clarificare a valorilor','Demonstrația, observația','Studiul de caz, jocul de rol','Discuțiile de grup']},
  {cer:'5. Cl. a IX-a, CS 4.1 – pașii construirii carierei.', rep:['Găsirea traiectoriei; învățarea continuă; menținerea în evoluția carierei; plan de dezvoltare personală.','Planul de evoluție: obiective, punctele tari, oportunitățile.','Activitate: „Pașaport pentru carieră”, metoda World Café.']}
 ]}
]});

/* ---- content/teste/t14.js ---- */
SUBIECTE.push({nr:14, tema:'Principiile și ședința de consiliere · Fișa psihopedagogică, screening, modelul ABC · Mijloace, structura lecției', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: consilierea psihopedagogică în școală urmărește un sistem coerent de scopuri și comportament intenționat…\nArgumentați în patru pagini necesitatea consilierii psihopedagogice: principii, deschiderea/închiderea ședinței, răspunsul la conținuturile clientului, abilitățile de bază.',
 items:[
  {cer:'Semnificația **consilierii psihopedagogice**.', rep:['Relație de participare și colaborare; clientul își identifică emoțiile, gândurile, comportamentele, se simte plin de resurse; găsirea de alternative.']},
  {cer:'Trei **principii și scopuri** ale consilierii în școală.', rep:[
   '**Responsabilitatea** pentru dezvoltarea armonioasă a clientului (respect, unicitate; reușita depinde de implicarea lui).',
   '**Relația permisivă** (oricare parte o poate încheia; libertatea de convingeri).',
   'Consilierul **gândește CU clientul**, nu despre sau pentru el.',
   'Scopuri pe 4 niveluri: cu aplicabilitate generală (conștientizare, stare de bine, schimbarea comportamentelor negative), formulate de părinți, stabilite de consilier, ale elevului (apar pe parcurs).']},
  {cer:'Trei elemente-cheie la **deschiderea și închiderea** ședinței.', rep:['Deschidere: ascultă atent și construiește imaginea lumii clientului; nu vorbește prea mult; reduce anxietatea la un nivel care permite comunicarea.','Închidere: rezumarea făcută de client (feedback), sumarizarea consilierului, continuitate spre ședința următoare.']},
  {cer:'Două moduri de **a răspunde la conținuturile clientului**.', rep:['La conținuturile **cognitive** (oameni, evenimente, lucruri): stimuli verbali minimali, tăcerea, întrebările (evitarea răspunsurilor monosilabice), repetarea.','La conținuturile **afective**: identificarea emoțiilor din indicii verbale (intensitate – „foarte”) și nonverbale (ritm, intonație, voce); reflectarea sentimentelor.']},
  {cer:'**Deprinderile de ascultare/asistare** și **abilitățile** consilierului.', rep:['Asistare: contactul vizual, limbajul corporal atent, comportamentul verbal, stilul de vorbire; poziție relaxată, ton natural; diferențe culturale.','Calități: conștienți de propriile înclinații, sinceri, confidențiali, flexibili, nu trag concluzii din zvonuri, receptivi la critică, respectă autonomia, **empatizează, nu simpatizează**.','Abilități: ascultare, influențarea atitudinilor, comunicare eficientă, influențarea comportamentului.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Conduita psihosocială – climatul educativ-suport.',
 items:[
  {cer:'A. **Consiliere parentală** și **screening**.', rep:['Consilierea parentală: sesiuni individuale/de grup, informare, orientare; obiectiv – implicarea activă a părinților în viața emoțională, cognitivă, comportamentală a copilului.','Screeningul psihologic: identificarea timpurie și obiectivă a elevilor cu probleme emoționale și comportamentale; reduce severitatea și impactul pe termen lung.']},
  {cer:'B. Structura **fișei psihopedagogice**.', rep:['Date personale','Date medicale (antecedente, dezvoltare fizică)','Date școlare (parcurs, performanțe)','Integrare socială (familie, grupuri)','Profil psihologic (procese cognitive, stil de învățare, aptitudini, temperament, interese, aspirații)','Recomandări (puncte tari, intervenții, orientare)']},
  {cer:'C. Șapte **metode** pentru controlul emoțional, distres, stimă de sine, atașament.', rep:['Exprimarea emoțională','Managementul stresului (vizualizare, respirație, relaxare)','Îmbunătățirea relaționării (atașament)','Restructurarea cognitivă (păpuși, cutia cu nisip, marionete)','Modularea emoțiilor (expunere prin jocuri terapeutice)','Managementul comportamental (fără pedeapsă, comportamente noi)','Îmbunătățirea stimei de sine (colaje, desen, lectură)']},
  {cer:'D. **Sindromul Stockholm** vs **twice exceptional**.', rep:['Stockholm: victima ajunge să-și admire/apere agresorul; explicat prin disonanța cognitivă, dependență.','Twice exceptional (2e): elevi supradotați într-un domeniu ȘI cu o tulburare (dislexie, ADHD, TSA etc.) – ex. Edison, Churchill; au nevoie de curriculum adaptat.']},
  {cer:'E. Intervenții **cognitiv-comportamentale**: convingeri iraționale vs raționale.', rep:['Iraționale – depresie: „Nu pot fi bun la nimic niciodată”; anxietate: „Ar fi îngrozitor să pic examenul”, „E cumplit să faci greșeli”; furie: „Profesorii ar TREBUI să…”.','Raționale – „Îmi place să am succes, dar n-ar fi o tragedie dacă aș eșua”; „Perfecțiunea nu există”; „Nu sunt de acord cu ce ai făcut, dar rămâi o persoană valoroasă.”']},
  {cer:'F. Importanța **modelului ABC** (Ellis).', rep:['**A** = evenimentul activator, **B** = convingerile (beliefs) despre el, **C** = consecințele emoționale și comportamentale.','Nu evenimentul, ci interpretarea (B) produce emoția; tulburările vin din evaluări rigide, nerealiste → alternativa: gândirea rațională.','Situații problematice: de amenințare, de pierdere, stânjenitoare.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Învățarea școlară, feedback-ul, procedeul didactic**.', rep:['Învățarea școlară: rol informativ (stocarea conținutului) și formativ (dezvoltarea sistemului cognitiv-operațional).','Funcțiile feedback-ului: întărirea imediată a rezultatelor pozitive, diagnostic, identificarea și depășirea dificultăților.','Procedeul didactic = componentă/operație particulară a metodei; procedeele se pot transforma în metode și invers.']},
  {cer:'2. Necesitatea **mijloacelor de învățământ**.', rep:['Funcții: formativă, stimulativă, demonstrativă, de investigare, substitutivă, de evaluare, ergonomică, estetică, de orientare a intereselor.','Eficiența depinde de integrarea lor creativă, nu mecanică.']},
  {cer:'3. **Structura procesuală a lecției** (evenimentele instruirii).', rep:['Captarea atenției','Comunicarea obiectivelor','Prezentarea materialului','Dirijarea învățării','Obținerea performanței / generalizare','Fixarea și asigurarea retenției','Transferul (aplicarea)','Asigurarea feedback-ului / evaluarea']},
  {cer:'4. Schemă: **evaluarea la nivel micro**.', rep:['Esența: judecăți de valoare → decizii.','Rol: optimizare și reglare; feedback.','Finalitate formativă: autoevaluare, susținerea învățării.','Forme moderne: evaluarea formativă, autoevaluarea.','Etape: proiectare, realizare, evaluare, reglare.']},
  {cer:'5. Cl. a X-a, CS 5.1/5.2 – stilul de viață și oboseala la adolescenți.', rep:['Factori sociali nocivi: sărăcia, șomajul, discriminarea.','Oboseala cronică: scăderea capacității de efort, tulburări de memorie și atenție, randament scăzut, depresie, anxietate.']}
 ]}
]});

/* ---- content/teste/t15.js ---- */
SUBIECTE.push({nr:15, tema:'Orientarea școlară și profesională, decizia de carieră · Abuz, familia rezilientă · Formarea profesorilor, metode de cunoaștere', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Enunț: misiunea educației – ghidarea și consilierea elevilor pentru autorealizare prin profesie.\nArgumentați în patru pagini importanța consilierii și orientării școlare și profesionale.',
 items:[
  {cer:'Rolul și **beneficiile** consilierii și orientării.', rep:['Apărută la începutul sec. XX (piața muncii, noile tehnologii); elevul – coparticipant la propriul traseu.','Dezvoltarea carierei cuprinde: educația și formarea, autocunoașterea și relaționarea, planificarea evenimentelor vieții, asumarea de roluri.','Beneficii: scade absenteismul și abandonul, crește motivația, performanța, adaptarea, rezultatele la examene, integrarea socio-profesională.','Contribuie la: învățarea pe tot parcursul vieții, ocuparea deplină, incluziunea socială.']},
  {cer:'**Decizia de carieră** și etapele planificării.', rep:['Explorarea sinelui (personalitate, interese, abilități, valori)','Conștientizarea nevoii de decizie și motivarea','Explorarea generală a domeniilor ocupaționale','Explorarea detaliată a informațiilor specifice','Luarea deciziei','Angajamentul față de decizie (se pot relua etape)']},
  {cer:'**Obiectivele educației pentru carieră** și activități.', rep:['Motivația pentru formare; imagine de sine pozitivă și evaluare realistă; reprezentări despre lumea muncii; abilități de căutare a unui loc de muncă; abilități decizionale; managementul informației.','Activități: CV, scrisoare de intenție, simulare de interviu, vizite la firme, portofolii, bilanțul competențelor, parteneriate.','Popescu-Neveanu: interesul = orientare activă a personalității spre un domeniu.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Dezvoltarea individuală, competențele consilierului, abuzul, reziliența familiei.',
 items:[
  {cer:'A. **Experiența de viață** și **dezvoltarea individuală**.', rep:['Experiența de viață: stilul de viață, opțiunile ocupaționale, comportamentele învățate, motivația.','Dezvoltarea individuală: etapele parcurse de o persoană.']},
  {cer:'B./C. **Competențele** consilierului școlar.', rep:['Teoretice: teoriile consilierii, ale învățării, ale carierei, consilierea familiei, consilierea de grup.','Practice: consiliere individuală, de grup, educațională, a carierei; decizii etice; evaluarea programelor; consultarea părinților și profesorilor; trimiterea către alți specialiști; consiliere multiculturală; climat suportiv.']},
  {cer:'D. **Abuzul emoțional** și **abuzul verbal**.', rep:['Legea 272/2004: abuzul = orice acțiune voluntară a unei persoane aflate în relație de răspundere, încredere sau autoritate față de copil, care îi periclitează dezvoltarea, viața, integritatea, sănătatea.','Abuz emoțional: hărțuire, umilire, izolare; compromite atașamentul securizant.','Abuz verbal: cuvinte devastatoare – „dacă îi spui zilnic că e prost, va sfârși să se comporte așa”.']},
  {cer:'E. **Factori de risc** pentru violență asupra copilului.', rep:['Retard de dezvoltare','Condiții precare','Probleme de sănătate','Inadaptare școlară','Conflicte în familie','Divorțul părinților','Decesul celor apropiați']},
  {cer:'F. **Familia rezilientă**.', rep:['Capacitatea de a se implica, de a se redresa, de a depăși dificultățile; flexibilitate + stabilitate.','Procese-cheie (Walsh): sistemul de credințe (sens al adversității, optimism, transcendență), modele de organizare (flexibilitate, conexiune, resurse), comunicare (claritate, împărtășirea emoțiilor, rezolvarea colaborativă a problemelor).']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Competență profesională, reformă curriculară, management curricular**.', rep:['Competența profesională: capacități cognitive, afective, motivaționale, manageriale + trăsături de personalitate → atingerea obiectivelor de majoritatea elevilor.','Reforma curriculară: realizarea obiectivelor strategice, identitatea școlii, inovații curriculare.','Managementul curricular: centrat pe elev; resurse umane, materiale, formare.']},
  {cer:'2. **Metode de cunoaștere a elevilor** în orientarea carierei.', rep:['Observația, convorbirea, analiza produselor activității, analiza datelor biografice, autocaracterizarea, chestionarele de interese, testele (de aptitudini, personalitate, inteligență).']},
  {cer:'3. **Formarea inițială vs continuă**.', rep:['Inițială: construirea competențelor de bază pentru profesie.','Continuă: prelungirea celei inițiale, pe tot parcursul carierei (educație permanentă).']},
  {cer:'4. Ce rezolvă aria **Consiliere și orientare**.', rep:['Informarea despre oportunitățile de educație și formare','Dezvoltarea personală, managementul propriei vieți','Inserția socio-profesională','Accesul la întreaga ofertă educațională','Utilizarea resurselor umane']},
  {cer:'5. Cl. a XI-a, CS 3.2 – reușita și succesul școlar.', rep:['Progresul școlar = raportarea rezultatelor la performanțele anterioare; factori individuali, instituționali, de ambianță.','I. Neacșu – definiția învățării școlare.','Drumul de la motivația extrinsecă la cea intrinsecă.','Activitate: metodele „diamantul” și „explozia stelară”.']}
 ]}
]});

/* ---- content/teste/t16.js ---- */
SUBIECTE.push({nr:16, tema:'Consilierea centrată pe persoană (Rogers) · Factori ai reușitei, conflicte, bullying, parenting · Predare–învățare–evaluare', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Argumentați în patru pagini importanța consilierii și asistenței psihopedagogice în școală (tipuri de consiliere, priorități, atribuții, metode și tehnici, abordarea centrată pe persoană).',
 items:[
  {cer:'**Scopul și tipurile** de consiliere.', rep:['Scop: oferirea posibilității de a explora, descoperi, clarifica moduri de a trăi; starea de bine, promovarea sănătății, prevenția, dezvoltarea personală.','Tipuri: individuală, de grup, vocațională, a familiei, multiculturală, educațională.','„A învăța pentru a ști să faci”, nu doar pentru a ști.']},
  {cer:'**Prioritățile** asistenței psihopedagogice.', rep:['Adaptarea școlară și socială, relațiile cu familia/școala.','Sănătatea psihică și fizică.','Orientarea școlară și profesională.','Condiții psihologice pentru acțiunile formative; asistență pentru părinți și profesori.']},
  {cer:'**Atribuțiile** profesorului-consilier.', rep:['Identificarea nevoilor elevilor','Consiliere individuală și de grup','Culegerea datelor despre elevi, părinți, profesori','Cunoașterea oportunităților educaționale și profesionale','Recunoașterea propriilor limite','Comunicarea cu familia','Consultanță pentru conducerea școlii','Rol proactiv, preventiv']},
  {cer:'**Metode și tehnici**; abordarea **centrată pe persoană** (Rogers).', rep:[
   'Tehnici de stingere a comportamentelor nedorite: **expunerea** (in vivo, la stimulul fobic) și **tehnica implozivă** (imaginarea situației anxiogene până scade anxietatea).',
   'Rogers (1942): consilierea eficientă = relație structurată, dar permisivă; fiecare om are capacitatea de a se dezvolta și de a-și rezolva problemele; individul – „rezervor de posibilități”; accent pe „aici și acum”.',
   'Trăsături ale abordării nondirective: autonomie, accent pe proces și factori emoționali, pe prezent, relația de consiliere ca experiență de creștere.',
   'Tehnici: clarificarea sentimentelor (reflectarea), reformularea, acceptarea necondiționată, ascultarea.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Factori ai reușitei școlare, conflictele, bullyingul, parentingul, relația școală–familie.',
 items:[
  {cer:'A. **Factorii cognitivi** vs **noncognitivi** ai reușitei.', rep:['Cognitivi: inteligența generală și specifică, „inteligența școlară” (adaptarea la cerințele învățării), memorie, percepție, limbaj.','Noncognitivi: interese, emoții, atitudinea față de școală, motivația, relația cu profesorii, autoaprecierea.']},
  {cer:'B. Cauze ale **conflictelor** (exemple).', rep:['Lipsa abilităților de comunicare și relaționare','Stima de sine scăzută','Presiunea timpului, proiectarea ineficientă a activităților']},
  {cer:'C. **Strategii de rezolvare a conflictelor**.', rep:['Clarifică-ți emoțiile','Ascultă empatic (vezi conflictul din perspectiva celuilalt)','Rămâi flexibil și deschis','Identifică problema clar și concis','Observă diferența de poziție a celuilalt']},
  {cer:'D. **Bullying și cyberbullying**.', rep:['Bullying: comportament agresiv, intenționat, repetat, cu **dezechilibru de putere**; forme – verbal, fizic, zvonuri, excludere, amenințări.','Cyberbullying (Cyberbullying Research Center): deliberat, ținta se simte amenințată, repetitiv, prin tehnologie.','Efecte: stimă de sine scăzută, performanțe scăzute, depresie, anxietate.']},
  {cer:'E. **Parentingul** pe etape de vârstă.', rep:['Antepreșcolar: nevoi de bază, autonomie, atașament securizant.','Preșcolar: explorare, stimă de sine, standarde de comportament.','Școlar: încurajare, climat propice; pedeapsa învață doar frica și poate duce la agresivitate.','Adolescență: ascultare fără jigniri, umor, toleranță la frustrare, acceptare necondiționată, drepturi asertive.']},
  {cer:'F. Colaborarea **școală–familie** în situații de criză.', rep:['Comunicare periodică formală și informală, cunoaștere reciprocă, toleranță, atmosferă pozitivă.','Nu refuzați dialogul, fiți deschiși la părerile părinților, explicați deciziile, armonizați punctele de vedere, decideți după consultarea familiei.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Predare, învățare, evaluare**.', rep:['Predarea: a preciza, a proiecta, a organiza, a determina, a evalua; are sens doar dacă facilitează învățarea.','Învățarea: stiluri vizual, auditiv, kinestezic, tactil.','Evaluarea: verificare, măsurare, apreciere; cele trei procese sunt interdependente.']},
  {cer:'2. **Procesul de învățământ ca act de comunicare**.', rep:['Emițător (profesor), receptor (elev), mesaj codificat, repertoriu comun; limbaj accesibil elevului.','Mesaj semantic + ectosemantic (atitudini, gesturi, trăiri).']},
  {cer:'3. **Didactica clasică vs modernă**.', rep:['Clasică: cunoașterea = copiere a realității, prin percepții și asociații; accent informativ, cunoștințe gata elaborate.','Modernă: cunoștințele vin din acțiune; accent formativ, creativitate, îmbinarea teoriei cu practica.']},
  {cer:'4. **Repere metodologice** în organizarea lecției.', rep:['Îmbinarea influențelor formale, nonformale, informale','Cunoașterea profundă a elevilor','Metode activizante','Îmbinarea formelor de organizare','Esențializarea conținuturilor','Feedback continuu, evaluare formativă și formatoare']},
  {cer:'5. Cl. a IX-a, CS 1.2 – **încrederea în sine și relaționarea**.', rep:['Fiecare persoană e unică; nu ne comparăm; ne apreciem punctele forte; descoperim pasiunile; comunicarea eficientă; autocunoașterea ca reflecție.','Activitate: „Imaginea de sine și relaționarea armonioasă” – studiu de caz, dezbatere, PowerPoint, proverbe de comentat.']}
 ]}
]});

/* ---- content/teste/t17.js ---- */
SUBIECTE.push({nr:17, tema:'Istoria consilierii (Parsons, Williamson, Super), CJAP · Emoții, devianță, mecanisme de apărare, Johari · Metode de evaluare, forme de organizare', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Argumentați în patru pagini rolul consilierii școlare: apariție și evoluție, trăsături, rolul cabinetelor și centrelor, modalitățile de desfășurare, evoluția ariei Consiliere și orientare.',
 items:[
  {cer:'**Definiție și scop**.', rep:['Proces de acordare a asistenței psihopedagogice elevilor, părinților, profesorilor; relația familie–elev–școală.','Scop: clientul să devină capabil să se ajute singur, să se înțeleagă pe sine și realitatea; soluțiile le găsește el.']},
  {cer:'**Originile** consilierii.', rep:['SUA, începutul sec. XX – imigranți, tineri fără ocupație în New York.','**Frank Parsons** – „Choosing a Vocation” (1909): punctul de plecare al psihologiei/orientării profesionale.','**E.G. Williamson** (Universitatea Minnesota) – modelul **trăsătură–factor** (domina până după al Doilea Război Mondial).','**D. Super** (1953) – teoria dezvoltării aplicată alegerii profesionale.']},
  {cer:'Cinci **trăsături** ale consilierii școlare (P.M. Sanborn, 1974).', rep:['Proces de dezvoltare','Responsabilitatea consilierului de a optimiza modul în care școala se raportează la elevi ca indivizi','Rolul proactiv','Profesiunea – principalul mijloc de exprimare a consilierului','Variabilitatea profunzimii și intensității']},
  {cer:'**CJAP/cabinete** și atribuții.', rep:['Trei tipuri de activități: asistență pedagogică și educațională; asistență psihologică; consiliere în carieră.','Consilierul: absolvent de psihologie, științele educației, sociologie sau master în consiliere; normă de 18 ore, din care 4 ore la clasă.','Atribuții: examinare psihopedagogică, consilierea elevilor/părinților/profesorilor, sprijin pentru formarea continuă, materiale pentru dezvoltarea personalității și orientare.','Proiectul Leonardo da Vinci MEVOC – „Manualul calității în consilierea școlară și profesională” (2003–2006).']},
  {cer:'**Consilierea individuală vs de grup**.', rep:['Individuală: încredere reciprocă, libertate de exprimare fără judecată, confidențialitate.','De grup: elevi cu o problemă comună; scopuri măsurabile; dezvoltarea personalității, empatiei, imaginii de sine, a abilităților de rezolvare de probleme și decizie.']},
  {cer:'**Evoluția ariei** Consiliere și orientare.', rep:['OG 103/1998 – 1–2 ore de consiliere în normă, altele decât dirigenția.','2005–2006: introducerea disciplinei la toate nivelurile; formarea continuă a profesorilor în consiliere educațională.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Emoții, devianță, stima de sine, reușita, mecanisme de apărare, fereastra Johari.',
 items:[
  {cer:'A. **Emoția ca stare vs ca trăsătură**; **anxietatea**.', rep:['Stare: trăire subiectivă, de moment, generată de o situație.','Trăsătură: tendința generală de a reacționa emoțional într-un anumit fel.','Anxietatea: teamă/neliniște din anticiparea unor situații, cu manifestări fiziologice (transpirații, palpitații, respirație rapidă).']},
  {cer:'B. **Devianța comportamentală** și soluții educative.', rep:['Rezultat al inadaptării la sistemul de cerințe al comunității.','Cauze individuale (ereditare) și de mediu.','Soluții: pregătirea profesorilor, accesul la cabinete de consiliere, valorificarea elementelor pozitive din comportament.']},
  {cer:'C. Abordări ale **stimei de sine**.', rep:['Teoria trebuințelor','Teoria „sinelui în oglindă” (looking-glass self – Cooley)','Teoria atașamentului']},
  {cer:'D. **Succesul și reușita școlară**.', rep:['Randamentul școlar ≈ productivitate; reușita școlară – prima formă de recunoaștere socială.','Corelație între stima de sine și rezultatele școlare; reușita/eșecul apar din discrepanța aspirații–capacități.']},
  {cer:'E. **Mecanisme de apărare** (exemple).', rep:['Negarea: „Nu mă deranjează că am luat 3.”','Regresia: revenirea la comportamente dintr-o etapă anterioară (roade unghiile, suge degetul).','(alte: proiecția, raționalizarea, refularea, sublimarea, deplasarea)']},
  {cer:'F. **Fereastra Johari** la ora de consiliere.', rep:['4 zone: **deschisă** (știu eu și știu alții), **oarbă** (știu alții, nu știu eu), **ascunsă** (știu eu, nu dezvălui), **necunoscută**.','Autodezvăluirea și feedback-ul lărgesc zona deschisă.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Proiectarea pedagogică, sisteme metodologice, procedeul didactic**.', rep:['Proiectarea = ansamblul acțiunilor de anticipare a activității conform finalităților.','Sistemul metodologic = ansamblu coerent de metode și procedee care se potențează reciproc.','Procedeul = componentă/instrument al metodei.']},
  {cer:'2. **Avantaje și limite** ale metodelor de evaluare.', rep:['Tradiționale (orale, scrise, practice): fidelitate, validitate; limită – stres, timp limitat.','Complementare (portofoliu, proiect, investigație, observare, autoevaluare): încredere, creativitate, fără stres; limită – timp și resurse, evaluare holistică.']},
  {cer:'3. **Problematizarea vs învățarea prin descoperire**.', rep:['Problematizarea: crearea unei situații-problemă (contradicție între cunoștințe vechi și noi) care activează gândirea.','Descoperirea: elevul reconstituie adevărul prin investigație; pornește de la o problemă – cele două se intercondiționează.']},
  {cer:'4. Listă: **forme de organizare** a activității elevilor.', rep:['Frontală','Colectivă','Individuală','Pe grupe (omogene/eterogene)','În perechi (diadică)','Combinată']},
  {cer:'5. Cl. a XII-a, CS 1.1 – resursele personale.', rep:['Aptitudinile și talentul nu sunt suficiente: studiu, perseverență, răbdare.','D. Goleman – inteligența emoțională: autocunoașterea, gestionarea emoțiilor, motivația, empatia, abilitățile sociale.','Activitate: „Eu, cu bune și cu rele”.']}
 ]}
]});

/* ---- content/teste/t18.js ---- */
SUBIECTE.push({nr:18, tema:'Consilierea școlară: istorie, program, etică · Elevi talentați, consiliere centrată pe soluții, abandon · Stil de învățare, autoreglare emoțională', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Argumentați în patru pagini rolul consilierii școlare și de orientare: definire, perioade de dezvoltare, programul de consiliere, responsabilități etice.',
 items:[
  {cer:'Definiția și obiectivele **consilierii școlare și de orientare**.', rep:['Relație bazată pe empatie și încredere, care ajută persoana să-și înțeleagă trăirile și gândurile, să-și dezvolte strategii de rezolvare a problemelor și decizie.','Direcții: intervenție ameliorativă, în criză, de dezvoltare și formativă.','Gh. Tomșa (1999): în școală, consilierea – activitate personală intensă, axată pe descoperirea de sine.','Trei categorii de obiective: dezvoltare personală, promovarea sănătății, stare de bine.']},
  {cer:'**Șase perioade** în dezvoltarea consilierii (copiilor).', rep:['Conceptele de bază: Freud, M. Klein, A. Freud, Adler, Jung, Lowenfeld','Teorii ale dezvoltării copilului: Piaget, Maslow, Bowlby, Erikson, Kohlberg','Abordări umaniste: Perls, V. Axline, C. Rogers, V. Oaklander','Terapia comportamentală: B.F. Skinner','Terapia cognitiv-comportamentală: A. Ellis, A.T. Beck','Noi curente: ludoterapia limitată, terapia narativă']},
  {cer:'**Programul de consiliere școlară** – servicii.', rep:['Patru domenii: consultanță, consiliere, coordonare, evaluare.','Consilierea individuală (20 min – 1 h, scop remedial și de dezvoltare) și de grup (prevenție; adolescenții se deschid mai ușor între ei; economică).','Consultanța: consilierul ca facilitator, relație de egalitate cu profesorul.','Evaluarea: teste standardizate, inventare de interese, scale comportamentale, observația, interviuri.','Intervenții colaborative în clasă: ton calm, așteptări pozitive, rutine, limite ferme, feedback.']},
  {cer:'**Responsabilități etice**.', rep:['Confidențialitatea (divulgarea doar justificat); părinții minorilor informați despre intervenții.','Protejarea adolescenților de prejudicii; tehnici potrivite vârstei; respectarea demnității și autonomiei.','Practică doar în limitele competenței; trimitere către alți specialiști.','Evitarea **relațiilor duale/multiple** care pot exploata sau prejudicia clientul.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Elevi talentați, criza de identitate, consilierea centrată pe soluții, familia funcțională, adolescentul izolat/timid, abandonul școlar.',
 items:[
  {cer:'A. Consilierea **elevilor talentați** și **criza identitară**.', rep:['Elevii talentați au nevoi specifice, adesea neglijate → frustrări; profil cu puncte forte și vulnerabilități; colaborare cu familia, curriculum extins.','Criza identitară (Erikson): „Cine sunt eu?”, încheiată în jurul vârstei de 24 de ani; eșecul → confuzie de rol.']},
  {cer:'B. Principii ale **consilierii centrate pe soluții** în școli.', rep:['Interviul centrat pe soluții: accent pe elementele pozitive și resurse; elevul participă până la evaluare.','Implicarea părinților: atenția pe **excepții** (când problema nu apare).','Tratarea cu respect a dificultăților clientului.']},
  {cer:'C. **Familia funcțională**.', rep:['Istorie comună, legături emoționale; funcții: supraviețuire, educație, protecție, dezvoltare, apartenență, atașament.','Caracteristici: comunicare deschisă și frecventă, adaptabilitate, angajament.']},
  {cer:'D. Adolescentul **izolat** și adolescentul **timid**.', rep:['Izolat: încurajarea socializării, jocuri de rol, întărirea comportamentului prosocial.','Timid: centrare pe sine, convingerea că e mereu judecat; mutarea atenției de la stări interne la stimulii sociali, descoperirea dirijată, joc de rol, analiza critică a gândurilor.']},
  {cer:'E./F. Prevenirea **abandonului școlar**.', rep:['Dockery (2012): strategii de reformă la nivel de școală, sprijin la tranziția între cicluri, sisteme de monitorizare a factorilor de risc.','Promovarea abilităților sociale, intervenții la nivel de școală, așteptări înalte pentru toți, echipe multidisciplinare (asistenți sociali, psihologi, mediatori).']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Trunchi comun, curriculum nucleu, învățare eficientă**.', rep:['Trunchiul comun = curriculum nucleu: disciplinele și numărul minim de ore obligatorii.','Învățarea eficientă: orientată spre scop, integrarea noilor cunoștințe în cele existente.']},
  {cer:'2. **Predarea și stilul cognitiv/de învățare**.', rep:['Predarea modernă: organizarea și îndrumarea învățării, mediere, operaționalizare.','Stil cognitiv deschis vs închis; stilul de învățare = factori cognitivi, fiziologici, afectivi relativ stabili.']},
  {cer:'3. **Legi și reguli ale învățării**.', rep:['Legea transferului, a motivației, a repetiției, a conexiunii inverse (feedback).','Învățarea începe cu un scop, e influențată de afectivitate, de experiența anterioară, de personalitatea profesorului; participarea activă e mai eficientă decât pasivă; cunoașterea rezultatului susține succesul.']},
  {cer:'5. **Autoreglarea emoțională** (CS 2.2).', rep:['Abilitatea de a face față emoțiilor și de a ne comporta conform cerințelor; combinație temperament + comportament învățat.','Copilul învață autoreglarea fiind expus treptat situațiilor, cu suport (nu evitare); părinții modelează valorile (Th. Gordon).','Activitate: „Stresul înainte de examen – autoreglare și autocontrol”.']}
 ]}
]});

/* ---- content/teste/t19.js ---- */
SUBIECTE.push({nr:19, tema:'Educația, autocunoașterea, eșecul școlar, familia · Educația adulților, medierea, reglarea emoțională · Cunoașterea elevului', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Argumentați în patru pagini rolul educației în dezvoltarea personală și profesională, factorii reușitei/eșecului școlar și rolul familiei.',
 items:[
  {cer:'Rolul **educației** și **învățarea activă**.', rep:['Democrit: educația creează „a doua natură”; Kant: în educație stă marele secret al perfecționării naturii umane.','Educația progresivă (sf. sec. XIX; rădăcini la Locke și Rousseau) – învățarea din experiență.','Constructivismul: învățarea = construcție activă a cunoașterii.','Gândirea critică: reflecție, situații noi, colaborare, acceptarea diversității de idei.']},
  {cer:'**Autocunoașterea** și identitatea profesională.', rep:['P. Popescu-Neveanu – trei planuri ale conștiinței de sine: imaginea de sine fizică, psihică, socială.','Alegerea carierei → identitate profesională; motivații extrinseci (statut, securitate) vs intrinseci; o profesie nepotrivită deformează stima de sine.']},
  {cer:'**Eșecul școlar** – etape și factori.', rep:['Etapa premergătoare: primele scăderi ale prestației, nemulțumire, lipsa motivației.','Etapa a doua: lacune mari, evitarea efortului, aversiune față de școală, absențe nemotivate.','Etapa a treia: repetenția, cu efecte traumatizante.','Reușita = interacțiunea factorilor pedagogici, psihofiziologici, sociali; supraestimarea și subestimarea sunt ambele dăunătoare.']},
  {cer:'Rolul **familiei** și **școlii**.', rep:['Familia – prima școală; influențe directe și indirecte (modele, climat); M. Golu – pecetea familiei asupra profilului moral rămâne toată viața.','Legea educației: școala conlucrează cu familia, rolul conducător revenind școlii.','Metodele activ-participative transformă elevul din obiect în subiect al formării.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Educația adulților, comunicarea nonverbală, cauzele dificultăților de învățare, softuri educaționale, reglarea emoțională, medierea.',
 items:[
  {cer:'A. **Educația adulților** și **comunicarea nonverbală** cu clasa.', rep:['Educația adulților: prima școală – Grundtvig (Danemarca); 1925 – Organizația Mondială pentru Educația Adulților; calificare, inițiere, specializare, recalificare, perfecționare.','Nonverbal: expresia feței, gesturi, contact vizual, postură, aspect exterior; persuasiunea însoțește convingerea.']},
  {cer:'B. **Cauze psihologice** ale dificultăților școlare.', rep:['Probleme discrete de percepție','Nivel intelectual minimal-normal','Ușoară dezorientare spațio-temporală','Schemă corporală insuficient elaborată','Fobie școlară, timiditate excesivă, lexofobie, grafofobie','Complexe de inferioritate','Ritm de dezvoltare lent, inegal']},
  {cer:'C. **Tipuri de softuri educaționale**.', rep:['De prezentare interactivă a noilor cunoștințe','Demonstrative','De simulare (modele ale fenomenelor reale)','De testare a cunoștințelor','(+ de exersare, jocuri educaționale)']},
  {cer:'D. **Reglarea emoțională** și strategiile emoționale.', rep:['Procesul de inițiere, menținere și modulare a intensității și duratei emoțiilor, în scopul atingerii obiectivelor.','Controlul voluntar (effortful control) – inhibarea răspunsului dominant; control scăzut → anxietate, depresie.','Strategiile emoționale nu rezolvă problema, ci ameliorează trăirea.']},
  {cer:'E. **Medierea conflictelor**.', rep:['Intervenția unui terț neutru, care nu impune soluția; educație durabilă pentru rezolvarea autonomă a conflictelor.','Recomandată când: ostilitatea blochează colaborarea, părțile nu reușesc singure, vor să discute, e nevoie de decizie rapidă.','Profesorul evită confruntarea în fața clasei și amenințările; ascultă percepția elevului; reguli simple, consecințe logice, plan pentru urgențe.']},
  {cer:'F. Importanța **cunoașterii personalității elevului**.', rep:['Permite adaptarea metodelor, orientarea școlară potrivită, depistarea timpurie a elevilor dotați.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Cunoașterea elevului**, **elevul creativ**, **puterea exemplului**.', rep:['Școala = cadru de viață și muncă în care solicitările scot la iveală aptitudinile; elevul = rezultatul interacțiunii ereditate–mediu.','Elevul creativ: fiecare om are potențial creativ; educația protejează originalitatea prin metode variate.','Exemplul – unul dintre cele mai eficiente mijloace educative (direct, convingător).']},
  {cer:'2. Necesitatea **învățării prin cooperare**.', rep:['Fiecare membru își îmbunătățește performanța și învață să colaboreze; responsabilitate individuală, relaționare, ascultare, gândire critică.']},
  {cer:'3. **Copacul ideilor vs metoda R.A.I.**', rep:['Copacul ideilor: tehnică grafică de grup – cuvântul-cheie la bază, ideile ca ramuri.','R.A.I. (Răspunde – Aruncă – Interoghează): joc cu mingea pentru fixare și feedback; cine nu știe sau nu formulează corect iese din joc.']},
  {cer:'4. Listă: **metode de cunoaștere a elevului**.', rep:['Observația (spontană, sistematică)','Convorbirea','Testele (ex. proiectiv „Desenul familiei”)','Metoda aprecierii','Analiza rezultatelor și a produselor activității','Metoda biografică','Metodele sociometrice: testul sociometric, matricea sociometrică, sociograma']},
  {cer:'5. **Stilul de viață al adolescenților** și voluntariatul.', rep:['Adolescența – perioada formării atitudinilor; nevoia de afirmare poate degenera.','Voluntariatul – cale de autodescoperire și de promovare a valorilor.']}
 ]}
]});

/* ---- content/teste/t20.js ---- */
SUBIECTE.push({nr:20, tema:'Consilierea și educația familiei, situații de risc · Conflicte, CES, educație incluzivă · Metodică, creativitate, metode de învățare', subiecte:[
{titlu:'Subiectul I', puncte:30,
 text:'Argumentați în patru pagini importanța consilierii și educației familiei/părinților.',
 items:[
  {cer:'**Rolul familiei** în dezvoltare.', rep:['Educația – flux continuu de influențe; școala are nevoie de familie și comunitate.','Familia oferă: climat de siguranță afectivă, modele de comportament, mediul de dezvoltare intelectuală, motivațională, afectivă.','Cei **4 C** ai familiei: Compromis, Considerație, Cooperare, Comunicare.']},
  {cer:'**Consilierea familiei vs consilierea parentală**.', rep:['Consilierea familiei: acțiuni directe și preventive de sprijin pentru îngrijirea, creșterea, educarea copiilor.','Consilierea parentală: pentru actualii și viitorii părinți; punți între părinți și copii.','Activități formative; cunoștințe de psihologie, pedagogie, sociologie, psihopedagogie specială.']},
  {cer:'**Situații de risc** pentru dezvoltare.', rep:['Riscuri prestabilite (deficiențe senzoriale, mintale severe, neurologice).','Riscuri biologice (probleme la naștere care pot fi remediate).','Riscuri de mediu (mediu nesuportiv).','OCDE: copii fără familie potrivită, în mediu social nefavorabil.','Eșecul integrării în adolescență: alcoolism, delincvență, șomaj, sarcini timpurii.']},
  {cer:'**Programele de educație a părinților** – variabile și principii.', rep:['Variabile: experiența personală și a propriei familii, caracteristicile copiilor, motivația părinților, condițiile socio-economice, gestionarea stresului.','Tipuri de activități: în grupuri mici, personalizate, în grupuri mari (jocuri de rol, discuții); sporadice, de durată, periodice.','Principii: respectul individualității, recunoașterea propriilor limite, negocierea soluțiilor și respectarea deciziilor beneficiarului, servicii integrate; echipă pluridisciplinară.','Teme (Convenția ONU privind drepturile copilului): reducerea abuzului, sprijin pentru părinții copiilor cu CES, conflictul între generații, prevenirea devianței, participarea copiilor.']}
 ]},
{titlu:'Subiectul al II-lea', puncte:30, text:'Conflicte, comunicarea cu persoanele cu dizabilități, CES și educația incluzivă, negociere și compromis.',
 items:[
  {cer:'A. Stadiile conflictului: **disconfort, incident, neînțelegere**.', rep:['Disconfortul: senzația că ceva nu e în regulă – moment bun de prevenție.','Incidentul: un fapt simplu (o replică) care deranjează, dar se rezolvă repede prin comunicare.','Neînțelegerea: din comunicare defectuoasă; apar concluzii greșite, prejudecăți, agresivitate.','(urmează tensiunea și criza)']},
  {cer:'B. **Comunicarea** în contextul dizabilității.', rep:['Deficiența de auz: perturbă funcția receptivă și expresivă; cunoaștere lacunară, labiolectură.','Comunicarea prin simboluri/augmentativă (ex. sintetizatorul de voce) pentru persoanele nonverbale.']},
  {cer:'C. **CES** și principiile educației integrate.', rep:['CES = necesități educaționale ce cer școlarizare adaptată: tulburări de limbaj, dificultăți de învățare, deficiențe fizice/motorii, senzoriale, tulburări afectiv-comportamentale.','Principii: egalizarea șanselor; dreptatea socială; non-categorizarea; opțiuni și decizii reale; dezinstituționalizarea; normalizarea.']},
  {cer:'D. **Negocierea vs compromisul**.', rep:['Negocierea: părțile discută direct, fără terț, până la o soluție acceptată de ambele.','Compromisul: fiecare cedează parțial; risc de supraevaluare a poziției.','Etapele deciziei: definirea conflictului, cauzele, anticiparea efectelor, soluții.']},
  {cer:'E. Educarea **deprinderilor de comunicare interpersonală**.', rep:['Exprimarea sentimentelor neplăcute: privești persoana, postură relaxată, calm și fermitate, spui cum te simți, oferi o sugestie.','Solicitările pozitive: descrii clar ce dorești, contact vizual, ton ferm dar cald, spui cum te vei simți când se schimbă comportamentul.']},
  {cer:'F. **Asistența persoanelor cu CES** și școala incluzivă.', rep:['Depistare, prevenție, terapie, educare, diagnostic, orientare, monitorizare.','Dreptul la valorificarea maximă a capacităților; menținerea copilului în familie; principiul normalizării.']}
 ]},
{titlu:'Subiectul al III-lea', puncte:30, text:'Metodica disciplinei.',
 items:[
  {cer:'1. **Metodica, evaluarea cumulativă, interdisciplinaritatea**.', rep:['Metodica = didactica specială a unei discipline (St. Bârsănescu).','Evaluarea cumulativă (sumativă): de bilanț, la final, compară performanțele cu obiectivele.','Interdisciplinaritatea: cooperare între discipline → imagine unitară a realității.']},
  {cer:'2. **Învățarea creativă** – procedee.', rep:['Profunzime, fluiditate ideatică, originalitate, investigarea problemei, experiment mintal prin întrebări, transformarea problemelor.']},
  {cer:'3. **Metoda 6-3-5 vs brainstorming**.', rep:['6-3-5 (brainwriting): 6 elevi, câte 3 idei, în 5 minute, foaia circulă; avantaj – îi implică pe cei timizi.','Brainstorming: gândire divergentă, amânarea criticii; variante – cu schimbare de roluri, metoda Frisco.']},
  {cer:'4. Procedee de **eficientizare a învățării**.', rep:['Obiective clare, sistematizarea cunoștințelor, înțelegerea progresivă.','Metode de studiu individual: RICAR (Răsfoire, Întrebări, Citire activă, Amintire, Recapitulare); SQ3R.','Învățarea asistată de calculator; învățarea anticipativă.']},
  {cer:'5. CS 2.2 – **autocontrolul emoțional** la adolescenți.', rep:['Autocontrol: stăpânirea reacțiilor emoționale, voință, autodisciplină, perseverență; predictor al succesului.','Formarea răbdării, rezistența la tentații; mijloace: relaxare, gândire pozitivă, autosugestie, exerciții de respirație.','Activitate: „Să conștientizăm emoțiile noastre” – studii de caz, ciorchine, jurnalul emoțiilor.']}
 ]}
]});
