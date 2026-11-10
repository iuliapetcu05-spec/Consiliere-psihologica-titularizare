/* Generat automat de tools/build.py – editează fișierele din content/ */

/* ---- content/00-init.js ---- */
// Structuri de date. Fiecare fișier din content/ adaugă în aceste liste.
window.CAPITOLE = []; window.CARDURI = []; window.GRILE = []; window.AF = []; window.SUBIECTE = [];
window.OFICIALE = [];

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

/* ---- content/capitole/s02.js ---- */
/* CAPITOLUL II (Specialitate) – Conduita psihosocială */
CAPITOLE.push({id:'s02', parte:'Tematica de specialitate', nr:'II', emoji:'🪞', scurt:'Conduita psihosocială',
titlu:'Conduita psihosocială',
sectiuni:[
{titlu:'1. Cunoașterea de sine și imaginea de sine', puncte:[
 'Cunoașterea de sine: proces cognitiv, afectiv și motivațional, influențat de mediu; nu se încheie niciodată (evenimentele noi scot la iveală dimensiuni noi).',
 '**Imaginea de sine** = totalitatea percepțiilor despre propriile abilități, atitudini, comportamente; răspunde la „cine sunt eu” și „ce pot face”. Nu reflectă întotdeauna realitatea (adolescenta atractivă care se vede urâtă).',
 'O imagine de sine negativă → gânduri, emoții și comportamente negative.',
 '**Eul real** cuprinde: Eul fizic (imaginea corporală), Eul cognitiv (cum procesăm informațiile despre noi – atribuiri interne/externe, memoria autobiografică), Eul emoțional (intim, privat), Eul social („vitrina” – tip „cactus”, tip „mimoză”), Eul spiritual (valori).',
 'Discrepanță mare între Eul emoțional și cel social = maturizare scăzută.',
 '**Eul viitor (posibil)**: aspirații realizabile → Eul dorit (încredere, bucurie) și Eul temut (anxietate, furie). Rol motivațional.',
 '**Eul ideal**: ce ne-am dori să fim, dar știm că nu avem resurse – adesea o himeră. Blocarea în decalajul Eu real – Eu ideal → nemulțumire, frustrare, depresie (frecvent la adolescenți: vor să fie ca vedetele).'],
 retine:'Eul viitor = realizabil, mobilizează. Eul ideal = himeră. Învață-i pe adolescenți diferența (A. Băban).'},
{titlu:'1. Percepția socială a imaginii de sine', puncte:[
 'Percepția socială = ce gândesc ceilalți despre noi (cum arătăm, cum ne purtăm, cine suntem).',
 'Sensuri: caracterul socio-cultural al tuturor percepțiilor; perceperea socialului; perceperea celuilalt (trăiri, intenții, atitudini); percepția grupului.',
 'Persoanele sunt percepute ca centre de acțiune și generatoare de atitudini; prima impresie e vagă, globală (simpatie/antipatie).',
 'A-l percepe pe celălalt = a-l clasifica în categorii culturale + a-i conștientiza statutul și rolul.',
 'Erori: **proiecția** directă sau prin contrast (generosul îi vede pe toți generoși, egoistul pe toți egoiști).']},
{titlu:'1. Stima de sine', puncte:[
 '**Stima de sine** = dimensiunea **evaluativă și afectivă** a imaginii de sine – cât de „buni” ne considerăm față de propriile așteptări sau față de alții.',
 'A. Băban: relație cauzală între stima de sine a elevilor și **acceptarea necondiționată** din partea adultului; eșecul de a separa comportamentul de persoană → imagine de sine negativă.',
 'Elevii cu stimă de sine pozitivă: își asumă responsabilități, sunt independenți, mândri de realizări, încearcă sarcini noi, își exprimă emoțiile, oferă ajutor.',
 'Stimă de sine scăzută: nemulțumiți de ei, evită sarcinile noi, se simt neiubiți, îi blamează pe alții, sunt influențabili, prea „cuminți” sau rebeli.',
 'Experiențe care o scad: critica frecventă, țipatul, ignorarea, ridiculizarea, cerința de a fi „perfect”.',
 'Riscuri: depresie, anxietate, agresivitate, eșec și abandon școlar, consum de substanțe, relații de risc, tulburări alimentare, suicid.',
 'Ce scade stima de sine (reacții ale adulților): negarea emoției, a spune ce „trebuie” să simtă, comparația, ridiculizarea, amenințarea.',
 'Ce o dezvoltă: acceptarea emoțiilor negative, așteptări rezonabile pentru vârstă, planificare, laudă pentru efort (feedback cu aspecte pozitive + de îmbunătățit), oferirea de opțiuni, recompense pentru scopuri realiste.']},
{titlu:'2. Metode de autocunoaștere și intercunoaștere', puncte:[
 'Autocunoaștere: **autocaracterizarea** (cu sprijinul consilierului: teste, portofolii) și **autoevaluarea** (după criterii și bareme).',
 'Elemente interne ale imaginii de sine: observarea propriilor gânduri/emoții, feedback-ul altora, analiza traseului de viață, interese, aspirații, valori.',
 '**Analiza SWOT** personală: Strengths (puncte tari – și lucruri mărunte, „nu fumez”), Weaknesses (2–3, concrete, remediabile), Opportunities (sprijin: frate, prieteni), Threats (amenințări reale sau imaginare). Variantă: 4 colegi fac SWOT pentru al cincilea.',
 '**Fereastra Johari** (intercunoaștere): I. deschisă (știu eu, știu alții); II. oarbă (știu alții, nu eu – se reduce prin feedback); III. ascunsă (știu eu, nu dezvălui – se reduce prin autodezvăluire); IV. necunoscută/blocată.',
 'Stiluri: I – nici feedback, nici dezvăluire (distant); II – primește feedback, nu se dezvăluie; III – se dezvăluie, nu acceptă feedback; IV – deschis la ambele = bun comunicator.',
 'Autodezvăluirea: mai ales în diade/grup restrâns (profesorul să nu ceară dezvăluiri în grup mare), în relații pozitive, după ce relația s-a maturizat.']},
{titlu:'2. Competența emoțională', puncte:[
 '**Competența emoțională** = a recunoaște și interpreta emoțiile proprii și ale altora + a gestiona situațiile cu încărcătură emoțională (la adulți: inteligență emoțională).',
 '**I. Trăirea și exprimarea emoțiilor:** conștientizarea emoțiilor proprii (baza tuturor celorlalte abilități), exprimarea adecvată (reguli de exprimare culturale), **empatia** („în pielea altuia”; legată de atașament).',
 '**II. Înțelegerea și recunoașterea emoțiilor:** indici nonverbali (bucurie, furie, teamă, surprindere, dezgust – expresii faciale), denumirea emoțiilor (vocabular emoțional), înțelegerea cauzelor și consecințelor.',
 '**III. Reglarea emoțională:** monitorizarea, evaluarea și modificarea reacțiilor emoționale; strategii – căutarea adultului, distragerea atenției, reinterpretarea pozitivă; autodialog („Stop! Respir adânc de trei ori…”).',
 'La 5–6 ani copiii înțeleg legătura gânduri–emoții; agresivitatea e mai frecventă la 3–4 ani decât la 5–6 ani.',
 'Temperamentul influențează reglarea; reactivitatea prea mare → crize de furie, prea mică → risc depresiv; adultul poate compensa prin învățare.',
 'Activități: „Harta emoțiilor” (poveste + identificarea emoțiilor personajelor), „Bruno și Bruni” (păpuși, reacții adecvate vs inadecvate, joc de rol).']},
{titlu:'3. Relațiile interpersonale', puncte:[
 'Relații interpersonale = legături psihice reciproce, conștiente și **directe** (față în față) între persoane; satisfac nevoi de comunicare, cunoaștere, ajutor.',
 'Prima impresie contează: informațiile ulterioare contrare tind să fie ignorate.',
 'Grupuri: **de apartenență** (identitate socială), **de referință** (model, din care am vrea să facem parte), de vârstă, de presiune.',
 'Tipuri de relații: de **intercunoaștere**, de **intercomunicare**, **afectiv-simpatetice** (simpatie/antipatie), de **cooperare**, de **competiție**, de **conflict**, de **acomodare**, de **asimilare**, de **stratificare** (ierarhie), de **alienare** (ruptură).']},
{titlu:'4. Comportamente prosociale', puncte:[
 '**Comportament prosocial** = intenționat, în afara obligațiilor profesionale, fără așteptarea recompenselor, orientat spre ajutorarea altora și promovarea valorilor sociale. Forme: altruism, generozitate, sacrificiu, apostolat.',
 'NU sunt prosociale: medicul care își face meseria, serviciile plătite, binele făcut din ordin.',
 'Se învață social: direct (întăriri) și indirect (prin modele – observarea consecințelor).',
 'Factori: psihosociali (norme, valori), psihoindividuali (extroverții ajută mai ușor), conjuncturali (prezența mulțimii scade implicarea – **difuziunea responsabilității**; vremea frumoasă ajută).',
 'Norme sociale: a **responsabilității sociale**, a **reciprocității**, a **echității** schimburilor.',
 'Teoria acțiunii sociale: decizia de a ajuta implică evaluarea costuri–beneficii (satisfacții morale, stimă).',
 'Întrajutorarea = acordarea mutuală de servicii; filantropia – fundament afectiv (iubirea de semeni).']},
{titlu:'4. Comportamente antisociale', puncte:[
 'Atât pro-, cât și antisocialele se **învață**, în funcție de consecințe: recompensa (întărirea pozitivă) crește probabilitatea repetării, sancțiunea o scade.',
 'Exemple: **insulta** (atac la demnitate), **calomnia** (afirmație neadevărată, care ar expune persoana disprețului), **agresivitatea**.',
 'Agresivitatea naturală (la amenințări reale) e adaptativă; Erich Fromm – forme antisociale: sadismul, cruzimea, supunerea oarbă, lăcomia, **narcisismul** (inclusiv de grup).',
 'Delincvența: explicată prin particularități individuale sau prin societate (privarea relativă în mediul urban); tinerii 15–21 de ani sunt mai expuși.']},
{titlu:'5. Atitudinile sociale', puncte:[
 '**G. Allport:** atitudinea = „stare mentală și neuropsihologică de pregătire a răspunsului, organizată prin experiență, care exercită o influență directivă sau dinamică asupra răspunsului”.',
 'Atitudinile sociale = orientări selective față de un obiect social, care determină un model de comportament.',
 'Pot fi individuale sau sociale (împărtășite de grup).',
 'Caracteristici: rezistență la schimbare, dispoziție latentă, generalitate, mobilizează energie, sunt supuse controlului social, au tonalitate (+/–), sunt contextuale.',
 'Surse ale formării: **învățarea socială, compararea socială, factorii genetici**.',
 'Componente: cognitivă, afectivă, comportamentală.']}
]});

CARDURI.push(
 {c:'s02', q:'Ce este imaginea de sine?', a:'Totalitatea percepțiilor despre propriile abilități, atitudini și comportamente – răspunsul la „cine sunt eu” și „ce pot face eu”.', term:'Imaginea de sine', short:'percepțiile despre propriile abilități, atitudini, comportamente'},
 {c:'s02', q:'Ce este stima de sine?', a:'Dimensiunea **evaluativă și afectivă** a imaginii de sine: cât de valoroși ne considerăm față de propriile așteptări sau față de alții.', term:'Stima de sine', short:'dimensiunea evaluativă și afectivă a imaginii de sine'},
 {c:'s02', q:'Diferența dintre Eul viitor și Eul ideal', a:'- **Eul viitor (posibil):** realizabil, ne mobilizează resursele (Eu dorit / Eu temut)\n- **Eul ideal:** ce ne-am dori să fim, dar știm că nu putem – o himeră; blocajul în el aduce frustrare', term:'Eul ideal', short:'ce ne-am dori să fim, dar e de neatins (himeră)'},
 {c:'s02', q:'Componentele Eului real', a:'- Eul fizic (imagine corporală)\n- Eul cognitiv\n- Eul emoțional (intim)\n- Eul social („vitrina”)\n- Eul spiritual (valori)'},
 {c:'s02', q:'Cele 4 zone ale ferestrei Johari', a:'- I. Deschisă – știu eu, știu alții\n- II. Oarbă – știu alții, nu știu eu\n- III. Ascunsă – știu eu, nu dezvălui\n- IV. Necunoscută – nu știe nimeni', term:'Fereastra Johari', short:'model al intercunoașterii: zonă deschisă, oarbă, ascunsă, necunoscută'},
 {c:'s02', q:'Cum se micșorează zona „oarbă” și cea „ascunsă” din fereastra Johari?', a:'- Zona oarbă – prin **feedback** de la ceilalți\n- Zona ascunsă – prin **autodezvăluire**'},
 {c:'s02', q:'Ce înseamnă SWOT în autocunoaștere?', a:'- **S**trengths – puncte tari\n- **W**eaknesses – puncte slabe (2–3, concrete)\n- **O**pportunities – oportunități\n- **T**hreats – amenințări', term:'Analiza SWOT', short:'puncte tari, slabe, oportunități, amenințări'},
 {c:'s02', q:'Cele trei categorii ale competenței emoționale', a:'- Trăirea și exprimarea emoțiilor (conștientizare, exprimare adecvată, empatie)\n- Înțelegerea și recunoașterea emoțiilor (indici nonverbali, denumire, cauze/consecințe)\n- Reglarea emoțională', term:'Competența emoțională', short:'a recunoaște, interpreta și gestiona emoțiile proprii și ale altora'},
 {c:'s02', q:'Ce este empatia?', a:'Capacitatea de a trăi o emoție „ca și cum ai fi în pielea altuia” și de a fi alături de el. Reacția de anxietate puternică la emoția celuilalt nu mai e empatie, ci disconfort propriu.', term:'Empatia', short:'a înțelege emoția altuia „ca și cum ai fi în pielea lui”'},
 {c:'s02', q:'Ce este reglarea emoțională?', a:'Monitorizarea, evaluarea și modificarea reacțiilor emoționale în vederea unor comportamente dezirabile social. Strategii: căutarea adultului, distragerea atenției, reinterpretarea pozitivă, autodialogul.', term:'Reglarea emoțională', short:'monitorizarea și modificarea reacțiilor emoționale'},
 {c:'s02', q:'Ce reacții ale adulților scad stima de sine a copilului?', a:'- negarea emoției („nu te doare”)\n- a-i spune ce trebuie să simtă\n- comparația cu alții\n- ridiculizarea, sarcasmul\n- amenințările și pedepsele'},
 {c:'s02', q:'Tipuri de relații interpersonale', a:'Intercunoaștere, intercomunicare, afectiv-simpatetice, cooperare, competiție, conflict, acomodare, asimilare, stratificare, alienare.'},
 {c:'s02', q:'Grup de apartenență vs grup de referință', a:'- **Apartenență:** grupul din care faci efectiv parte\n- **Referință:** grupul din care ai vrea să faci parte – îți servește drept model', term:'Grupul de referință', short:'grupul din care ai vrea să faci parte, folosit ca model'},
 {c:'s02', q:'Ce este comportamentul prosocial?', a:'Comportament **intenționat**, liber ales, în afara obligațiilor profesionale și fără așteptarea recompenselor, orientat spre ajutorarea altora. Forme: altruism, generozitate, sacrificiu, apostolat.', term:'Comportamentul prosocial', short:'ajutor intenționat, dezinteresat, în afara obligațiilor'},
 {c:'s02', q:'Normele sociale care susțin comportamentul prosocial', a:'- Norma responsabilității sociale\n- Norma reciprocității\n- Norma echității schimburilor sociale'},
 {c:'s02', q:'Definiția atitudinii (Allport)', a:'„Stare mentală și neuropsihologică de pregătire a răspunsului, organizată prin experiență, care exercită o influență directivă sau dinamică asupra răspunsului față de obiectele și situațiile la care se raportează.”', term:'Atitudinea (Allport)', short:'stare de pregătire a răspunsului, organizată prin experiență'},
 {c:'s02', q:'Surse ale formării atitudinilor', a:'- Învățarea socială\n- Compararea socială\n- Factorii genetici'},
 {c:'s02', q:'Ce forme de agresivitate antisocială descrie Erich Fromm?', a:'Sadismul, cruzimea, supunerea oarbă, lăcomia, narcisismul (inclusiv narcisismul de grup).'}
);

GRILE.push(
 {c:'s02', q:'Stima de sine reprezintă:', o:['Dimensiunea evaluativă și afectivă a imaginii de sine','Percepția celorlalți despre noi','Eul ideal','Imaginea corporală'], r:0},
 {c:'s02', q:'În fereastra Johari, zona „oarbă” conține informații:', o:['Pe care le știu eu și alții','Pe care le știu alții, dar nu eu','Pe care le știu doar eu','Pe care nu le știe nimeni'], r:1, e:'Se reduce prin feedback.'},
 {c:'s02', q:'Persoana deschisă atât la autodezvăluire, cât și la feedback are stilul (Johari):', o:['I','II','III','IV'], r:3, e:'Stilul IV – bun comunicator.'},
 {c:'s02', q:'Care NU este un comportament prosocial?', o:['Un trecător ajută un accidentat','Un elev își ajută colegul fără să i se ceară','Un medic își tratează pacienții la spital','Un voluntar donează timp'], r:2, e:'Obligațiile profesionale nu intră în categoria prosocialului.'},
 {c:'s02', q:'Eul care cuprinde aspirațiile realizabile și ne mobilizează resursele este:', o:['Eul ideal','Eul viitor (posibil)','Eul social','Eul fizic'], r:1},
 {c:'s02', q:'A. Băban leagă formarea stimei de sine de:', o:['Notele mari','Acceptarea necondiționată din partea adultului','Competiția dintre elevi','Pedeapsa corectă'], r:1},
 {c:'s02', q:'Prezența unei mulțimi la o situație de urgență, de regulă:', o:['Crește șansa de ajutor','Scade implicarea (difuziunea responsabilității)','Nu influențează','Crește agresivitatea'], r:1},
 {c:'s02', q:'Componenta fără de care nu sunt posibile celelalte abilități emoționale este:', o:['Empatia','Conștientizarea propriilor emoții','Denumirea emoțiilor','Reglarea'], r:1},
 {c:'s02', q:'Relațiile de „asimilare” presupun:', o:['Ierarhizarea partenerilor','Fuziune, transfer reciproc de gusturi și opinii','Rivalitate','Ruperea relației'], r:1},
 {c:'s02', q:'Calomnia este un exemplu de comportament:', o:['Prosocial','Antisocial','Altruist','De acomodare'], r:1},
 {c:'s02', q:'Care NU este o sursă a formării atitudinilor (manual)?', o:['Învățarea socială','Compararea socială','Factorii genetici','Notarea școlară'], r:3}
);

AF.push(
 {c:'s02', s:'Imaginea de sine reflectă întotdeauna realitatea.', v:false},
 {c:'s02', s:'Eul ideal poate fi o himeră: când ne apropiem de el, ne dorim altceva.', v:true},
 {c:'s02', s:'Profesorul ar trebui să ceară elevilor autodezvăluiri personale în grup mare.', v:false, e:'Autodezvăluirile apar mai ales în diade/grup restrâns.'},
 {c:'s02', s:'Zona ascunsă din fereastra Johari se micșorează prin autodezvăluire.', v:true},
 {c:'s02', s:'În analiza SWOT, punctele slabe trebuie formulate general („nu sunt inteligent”).', v:false, e:'Concret și remediabil: „am rezultate slabe la biologie”.'},
 {c:'s02', s:'Agresivitatea ca formă de exprimare e mai frecventă la 3–4 ani decât la 5–6 ani.', v:true},
 {c:'s02', s:'Comportamentele antisociale sunt înnăscute.', v:false, e:'Atât pro-, cât și antisocialele se dobândesc prin învățare.'},
 {c:'s02', s:'Lauda pentru efort și oferirea de opțiuni ajută stima de sine a elevilor.', v:true},
 {c:'s02', s:'Atitudinile au o mare rezistență la schimbare.', v:true},
 {c:'s02', s:'Relațiile mediate prin e-mail sau telefon sunt relații interpersonale în sens strict.', v:false, e:'Relațiile interpersonale sunt directe, față în față.'}
);

/* ---- content/capitole/s03.js ---- */
/* CAPITOLUL III (Specialitate) – Conceptul de consiliere și abilitățile consilierului */
CAPITOLE.push({id:'s03', parte:'Tematica de specialitate', nr:'III', emoji:'🤝', scurt:'Consilierea și consilierul',
titlu:'Conceptul de consiliere și abilitățile consilierului',
sectiuni:[
{titlu:'1. Abordări psihodinamice', puncte:[
 'Origine: psihanaliza freudiană; accent pe procesele intrapsihice, motive inconștiente.',
 'Instanțe: **Id** (Sinele – pulsiuni, plăcere), **Ego** (Eul – conștient, mediază), **Superego** (Supraeul – valori morale).',
 'Mecanisme de apărare: reprimarea, raționalizarea, refuzul (negarea).',
 'Conflictele vin din trecut (copilărie); două momente-cheie: **catharsisul** (descărcarea emoțională prin retrăire) și **insightul** (iluminarea bruscă asupra cauzelor ascunse).',
 'Recomandată în anxietate, fobii, isterie.',
 'Post-freudieni: **A. Adler** (depășirea sentimentului de inferioritate; cauzele în viitor, nu în trecut), **C. Jung** (și experiența comunității – inconștientul colectiv), K. Horney, H. Sullivan.',
 'Tehnici: asocierea liberă, analiza viselor (conținutul latent), analiza acțiunilor (lapsusuri), interpretarea, prelucrarea materialului.']},
{titlu:'1. Abordări comportamentale', puncte:[
 'Bazate pe behaviorism; consilierea = proces de **învățare**; schimbarea comportamentului schimbă atitudinile și sentimentele.',
 'Tehnici (I. Holdevici): **stingerea** comportamentelor nedorite (eliminarea întăririlor); **tehnica implozivă** (confruntare imaginară cu situația anxiogenă) și **expunerea** (confruntare reală); **desensibilizarea sistematică** (Wolpe – relaxare, ierarhia situațiilor anxiogene, expunere gradată – pentru fobii); **tehnica aversivă**; **modelarea** (imitarea unor modele – timizi, deficiență mintală); **antrenamentul asertiv**.',
 '**Consilierea rațional-emotivă (A. Ellis)**: activ-directivă, de scurtă durată (5–15 ședințe); modelul **A-B-C** (A – eveniment, B – ce gândește persoana despre el, C – emoții și comportamente); combaterea convingerilor iraționale; acceptarea propriei imperfecțiuni.',
 '**Consilierea cognitiv-comportamentală**: anxietatea vine din gânduri negative automate și reguli disfuncționale; evaluare inițială (interviu, automonitorizare, chestionare, observare); tehnici – raționalizarea, distragerea, informarea, programarea activităților, verificarea veridicității gândurilor automate.',
 '**Reality Therapy (W. Glasser)**: comportament responsabil + nevoia de identitate; cei 3 R – **Right, Realitate, Responsabilitate**; focus pe comportamentul prezent, fără scuze, fără pedeapsă, planificarea unui comportament responsabil.']},
{titlu:'1. Abordări umaniste / experiențiale', puncte:[
 '**Existențialistă** (Sartre, Marcel, Kierkegaard; Rollo May): nu există boală psihică, ci impasuri existențiale; scopuri – conștientizare, autenticitate, acceptare de sine, rezolvarea crizei existențiale.',
 '**Non-directivă / centrată pe persoană (C. Rogers)**: non-directivismul = abținerea de la judecăți evaluative; scop – acceptarea de sine; autonomie, accent pe emoții și pe prezent, relația ca experiență evolutivă.',
 'Condițiile Rogers: două persoane în contact, **înțelegere empatică**, **considerație pozitivă necondiționată**, congruență.',
 'Etape: exprimarea sentimentelor negative → primele sentimente pozitive → cunoașterea de sine. Tehnici: reflectarea (repetiția-ecou, amplificarea), reformularea, tehnici de deschidere.',
 '**Gestaltistă**: autenticitate, responsabilitate, „aici și acum”; scop – extinderea conștientizării. Tehnici: conștientizare corporală (respirație, tensiune), **scaunul gol**, „rămâi în starea respectivă”, punerea în scenă, exagerarea, „zidul”, „cubul”, fantezia ghidată, metapozițiile.']},
{titlu:'2. Consiliere psihologică, psihopedagogică, a carierei', puncte:[
 '**Consilierea psihologică**: fenomene psihologice (anxietate, fobii, obsesii, tentative de suicid); persoane normale cu dificultăți existențiale; realizată de psihologi; implică și inconștientul (transfer); a apărut înaintea celei educaționale.',
 '**Consilierea psihopedagogică (educațională)**: obiective psihologice ȘI pedagogice; model psihoeducațional; proces de orientare și învățare pentru elevi, studenți, adulți și partenerii lor (părinți, profesori); „problema psihopedagogică” – neclaritate (cognitiv), tensiune (afectiv), indecizie (volitiv) → blocaj.',
 '**Consilierea carierei**: alegerea și realizarea traseului optim de carieră; în SUA, din anii ’70, „profesiunea” e înlocuită cu „cariera”.',
 '**D. Super**: cariera = succesiune de profesiuni, ocupații, poziții de-a lungul vieții active; rolul **conceptului de sine** în alegerea vocației.',
 'Stadiile vieții (Super/Bühler): **creștere** (până la 14 ani), **explorare** (până la 25), **menținere/stabilizare** (25–60), **declin** (după 65).']},
{titlu:'3. Caracteristicile consilierii', puncte:[
 'Integrează perspectiva umanistă (Rogers): problemele = nevoi de autocunoaștere, întărire a Eului, dezvoltare, adaptare – nu tulburare/deficiență.',
 'Succesul depinde de implicarea activă a **ambelor părți** (alianță autentică).',
 '**Trei caracteristici:** (a) se adresează persoanelor **normale**; (b) folosește un **model educațional și al dezvoltării**, nu clinic-curativ; (c) **prevenția** – identificarea situațiilor și grupurilor de risc înainte de criză.']},
{titlu:'3. Atitudinile consilierului', puncte:[
 'A. Băban: relație bazată pe responsabilitate, confidențialitate, încredere, respect. Două asumpții: „Toate persoanele sunt speciale și valoroase pentru că sunt unice”; „Fiecare persoană este responsabilă pentru propriile decizii”.',
 '**Acceptarea necondiționată**: recunoașterea demnității și valorii elevului fără a critica, judeca sau condiționa aprecierea. NU înseamnă aprobare, neutralitate, simpatie sau toleranță declarativă.',
 'Obstacole: lipsa informațiilor despre elev, problemele emoționale ale profesorului, proiectarea propriilor valori, prejudecăți, confuzia acceptare–aprobare/simpatie, pierderea respectului, identificarea elevului cu propriul copil.',
 'Non-acceptarea (de evitat): a da sfaturi, a evalua/învinovăți, a interpreta, a eticheta, a fi directiv, a lăuda excesiv, a moraliza, întrebarea „De ce?”, a consola general („Totul va fi bine”), a amenința, a evita, a condiționa.',
 '**Empatia**: a înțelege cum gândește și simte altul – ≠ identificare, ≠ milă/compasiune, ≠ simpatie.',
 '**Congruența**: concordanța dintre comportament și convingeri/emoții – autenticitate.',
 '**Colaborarea**: parteneriat, nu „expert–novice”; consilierul = catalizator, facilitator.',
 '**Gândirea pozitivă**, **responsabilitatea** pentru dezvoltarea personală permanentă, **respectul**.']},
{titlu:'3. Abilitățile consilierului', puncte:[
 '**Ascultarea activă** – abilitatea de bază: nonverbal adecvat, contact vizual fără a fixa, verificarea înțelegerii („Ceea ce vrei să-mi spui este…”), „hmm, da, înțeleg”, ascultare nonevaluativă, atenție la nonverbal. De evitat: ascultarea superficială, întreruperea, pregătirea următoarei întrebări.',
 '**Observarea**: comportament verbal + nonverbal; discrepanța dintre ele e informativă; fără etichetări și interpretări.',
 '**Adresarea întrebărilor** (metodă invazivă): închise (DA/NU – doar pentru clarificări), „De ce?” (de evitat – provoacă vină și defensivă), ipotetice („Dacă…”), deschise (cele mai utile).',
 '**Feedback-ul**: pozitiv, constructiv, specific, descriptiv (nu „bun/rău”), pe comportamente modificabile, imediat, la comportament, nu la persoană.',
 '**Furnizarea de informații**: limbaj comun cu elevul, alternative, învățarea căutării critice, fără a critica lacunele.',
 '**Parafrazarea**: reformularea esențialului („Cu alte cuvinte…”), fără a adăuga informații proprii.',
 '**Sumarizarea**: recapitularea organizată a celor mai importante aspecte; pentru încheiere sau deschiderea unei noi etape.',
 '**Reflectarea**: exprimarea înțelegerii conținutului ȘI a emoției; scop principal – validarea trăirilor.']},
{titlu:'4. Obiectivele consilierii', puncte:[
 'Scop: **funcționarea psihosocială optimă** a persoanei/grupului.',
 'Obiective: **promovarea sănătății și a stării de bine**; **dezvoltarea personală** (cunoaștere de sine, decizie, relaționare, controlul stresului, învățare eficientă, creativitate, opțiuni vocaționale realiste); **prevenția** (dispoziție negativă, neîncredere, comportamente de risc, conflicte, dificultăți de învățare, crize).',
 'După gradul de generalitate: generale, medii, particular-operaționale.',
 'Operaționale: cognitive (după Bloom: conștientizare, conceptualizare, înțelegere, analiză, sinteză, evaluare a propriei situații), afective (trăire echilibrată, autenticitate, „aici și acum”, deconflictualizare), psihomotorii (independență, spontaneitate, eficiență), volitiv-caracteriale (responsabilitate, decizie, încredere, automotivare).']},
{titlu:'5. Strategii și metode de consiliere', puncte:[
 'Strategia = combinarea și organizarea cronologică a metodelor și mijloacelor pentru atingerea obiectivelor.',
 'Patru categorii (A. Băban): identificarea atitudinilor/sentimentelor negative (clarificarea și reflectarea sentimentelor, cercurile concentrice, confruntarea cu imaginea de sine, inversarea rolurilor); schimbarea lor (combaterea distorsiunilor: suprageneralizarea, personalizarea, „trebuie”-urile, saltul la concluzii); identificarea comportamentelor negative (vizualizarea rolului, inventarul unei zile); schimbarea lor (contracte comportamentale, întăriri, modelare indirectă, automonitorizare, antrenament asertiv).',
 'Metode (A. Băban): **activități ludice de relaxare** (jocuri de „încălzire”: Picasso, Bomboane, Oglinda, Cutremurul, Zodiile…), **fișe de lucru și scale de autoevaluare**, **vizionarea de filme** și dezbaterea lor (filmul e mijloc, nu scop), **teste și imagini**, **colaje și postere**.',
 'Funcțiile jocului în consiliere: atmosferă relaxată, dezinhibarea introverților, facilitarea relațiilor, exprimarea indirectă a dificultăților, rezolvarea de probleme.']},
{titlu:'6. Locul consilierii în sistemul de învățământ', puncte:[
 'Rol: prevenirea dificultăților personale, școlare, sociale; facilitarea tranzițiilor (între cicluri, școală–viață adultă).',
 'Indicatori ai nevoii: eșec, abandon, delincvență, tulburări emoționale → consilierea introdusă la primar, gimnaziu, liceu.',
 'Răspunde nevoilor: cunoaștere și respect de sine, relaționare, învățare eficientă, decizie, rezistența la presiunea grupului, stil de viață sănătos, controlul stresului, orientare.',
 'Consilierea poate fi: serviciu (individual/grup), educație (dirigenția), curriculară (opțional), extracurriculară, în activitatea didactică.',
 'Trei aspecte: orientare profesională și vocațională; menținerea elevilor în sistem (motivație, stimă de sine); orientare pentru accesul în învățământul superior.']}
]});

CARDURI.push(
 {c:'s03', q:'Cele trei instanțe ale personalității la Freud', a:'- **Id** (Sinele) – pulsiuni, principiul plăcerii\n- **Ego** (Eul) – conștient, mediază\n- **Superego** (Supraeul) – valori morale', term:'Superego', short:'instanța valorilor morale (Freud)'},
 {c:'s03', q:'Catharsis vs insight', a:'- **Catharsis:** descărcare emoțională prin retrăirea experiențelor trecute\n- **Insight:** iluminarea bruscă, descoperirea intuitivă a cauzelor ascunse', term:'Insightul', short:'iluminare bruscă asupra cauzelor ascunse'},
 {c:'s03', q:'Ce susținea A. Adler?', a:'Conflictul principal al omului = depășirea **sentimentului de inferioritate**; cauzele comportamentelor se caută în viitor (scopuri), nu în trecut.'},
 {c:'s03', q:'Etapele desensibilizării sistematice', a:'- Învățarea relaxării\n- Stabilirea ierarhiei situațiilor anxiogene\n- Expunerea gradată (imaginară) în stare de relaxare\nEficientă în fobii și anxietate.', term:'Desensibilizarea sistematică', short:'relaxare + expunere gradată la ierarhia anxiogenă'},
 {c:'s03', q:'Tehnica implozivă vs expunerea', a:'- **Implozivă:** confruntare **imaginară** cu situația anxiogenă\n- **Expunere:** confruntare **reală**\nAmbele: stingerea comportamentelor nedorite.'},
 {c:'s03', q:'Modelul A-B-C (Ellis)', a:'- **A** – evenimentul activator\n- **B** – convingerile (ce gândește persoana despre eveniment)\n- **C** – consecințele emoționale și comportamentale\nNu A, ci B produce C.', term:'Modelul ABC', short:'eveniment – convingeri – consecințe (Ellis)'},
 {c:'s03', q:'Cei 3 R din Reality Therapy (Glasser)', a:'- Right (corectitudinea)\n- Realitatea\n- Responsabilitatea', term:'Reality Therapy', short:'Glasser: comportament responsabil, cei 3 R'},
 {c:'s03', q:'Condițiile Rogers pentru succesul consilierii', a:'- două persoane în contact\n- înțelegerea empatică\n- considerație pozitivă necondiționată\n- congruența consilierului', term:'Abordarea non-directivă', short:'Rogers: centrată pe persoană, fără judecăți evaluative'},
 {c:'s03', q:'Ce este „tehnica scaunului gol”?', a:'Tehnică gestaltistă: dialog imaginar cu o persoană semnificativă (sau cu o parte a sinelui) așezată pe un scaun gol, pentru conflicte nerezolvate.', term:'Scaunul gol', short:'tehnică gestaltistă de dialog imaginar'},
 {c:'s03', q:'Stadiile vieții (D. Super)', a:'- Creștere (până la 14 ani)\n- Explorare (până la 25)\n- Menținere (25–60)\n- Declin (după 65)'},
 {c:'s03', q:'Cele trei caracteristici ale consilierii psihopedagogice', a:'- Se adresează persoanelor normale\n- Model educațional și al dezvoltării (nu clinic)\n- Prevenția'},
 {c:'s03', q:'Ce NU este acceptarea necondiționată?', a:'Nu este: aprobare, neutralitate/indiferență, simpatie, toleranță doar declarativă.', term:'Acceptarea necondiționată', short:'recunoașterea valorii elevului fără a judeca sau condiționa'},
 {c:'s03', q:'Empatia vs simpatia', a:'- **Empatia:** înțelegi cum gândește și simte celălalt, „ești alături”\n- **Simpatia:** implicare emoțională, îți place persoana, tinzi s-o favorizezi'},
 {c:'s03', q:'Ce este congruența?', a:'Concordanța dintre comportamentul consilierului și convingerile, emoțiile, valorile lui – **autenticitatea**.', term:'Congruența', short:'autenticitate: acord între ce simți, crezi și exprimi'},
 {c:'s03', q:'De ce se evită întrebarea „De ce?” în consiliere?', a:'Provoacă sentimentul de vină și defensivă; în loc: „Poți să-mi descrii ce s-a întâmplat?”'},
 {c:'s03', q:'Parafrazare vs reflectare vs sumarizare', a:'- **Parafrazarea:** reformularea esențialului conținutului\n- **Reflectarea:** exprimarea înțelegerii conținutului ȘI a emoției (validare)\n- **Sumarizarea:** recapitularea organizată a principalelor aspecte', term:'Sumarizarea', short:'recapitularea organizată a principalelor idei'},
 {c:'s03', q:'Caracteristicile unui feedback eficient', a:'- pozitiv, constructiv\n- specific, concret\n- descriptiv, nu evaluativ\n- pe comportamente modificabile\n- imediat\n- la comportament, nu la persoană'},
 {c:'s03', q:'Obiectivele procesului de consiliere', a:'- Promovarea sănătății și stării de bine\n- Dezvoltarea personală\n- Prevenția'},
 {c:'s03', q:'Metode de consiliere (A. Băban)', a:'- Activități ludice de relaxare\n- Fișe de lucru și scale de autoevaluare\n- Vizionarea de filme\n- Teste și imagini\n- Colaje și postere'},
 {c:'s03', q:'Cele 4 categorii de strategii în consiliere (Băban)', a:'- Identificarea atitudinilor/sentimentelor negative\n- Schimbarea atitudinilor/sentimentelor negative\n- Identificarea comportamentelor negative\n- Schimbarea comportamentelor negative'}
);

GRILE.push(
 {c:'s03', q:'Fondatorul consilierii rațional-emotive este:', o:['C. Rogers','A. Ellis','W. Glasser','A. Adler'], r:1},
 {c:'s03', q:'Reality Therapy a fost inițiată de:', o:['W. Glasser','A. Beck','R. May','F. Perls'], r:0},
 {c:'s03', q:'Desensibilizarea sistematică este indicată mai ales pentru:', o:['Dificultăți de învățare','Fobii și anxietate','ADHD','Orientarea carierei'], r:1},
 {c:'s03', q:'„Scaunul gol” aparține abordării:', o:['Psihanalitice','Gestaltiste','Comportamentale','Rațional-emotive'], r:1},
 {c:'s03', q:'Non-directivismul la Rogers înseamnă:', o:['Absența oricărei judecăți','Abținerea de la judecăți evaluative','Lipsa structurii','Consilierul decide pentru client'], r:1},
 {c:'s03', q:'Care este abilitatea DE BAZĂ în consiliere?', o:['Furnizarea de informații','Ascultarea activă','Sumarizarea','Interogarea'], r:1},
 {c:'s03', q:'Care tip de întrebare e recomandat cel mai mult în consiliere?', o:['Închisă','„De ce?”','Deschisă','Retorică'], r:2},
 {c:'s03', q:'Stadiul de explorare (Super) durează până la aproximativ:', o:['14 ani','25 de ani','40 de ani','60 de ani'], r:1},
 {c:'s03', q:'Care NU este un obiectiv al consilierii?', o:['Prevenția','Dezvoltarea personală','Stabilirea diagnosticului psihiatric','Starea de bine'], r:2},
 {c:'s03', q:'Expresia „Totul va fi bine…” este un exemplu de:', o:['Reflectare','Non-acceptare (consolare generală)','Parafrazare','Feedback specific'], r:1},
 {c:'s03', q:'Acordul dintre ce simte, crede și exprimă consilierul se numește:', o:['Empatie','Congruență','Simpatie','Toleranță'], r:1},
 {c:'s03', q:'Consilierea rațional-emotivă durează, de regulă:', o:['1–2 ședințe','5–15 ședințe','Ani de zile','O singură ședință'], r:1}
);

AF.push(
 {c:'s03', s:'Acceptarea necondiționată înseamnă să aprobi orice comportament al elevului.', v:false},
 {c:'s03', s:'Empatia înseamnă să te identifici cu celălalt și să-i preiei modul de gândire.', v:false, e:'Empatia = a-l înțelege, nu a te identifica.'},
 {c:'s03', s:'Consilierea psihologică a apărut înaintea celei educaționale.', v:true},
 {c:'s03', s:'Pentru Adler, cauzele comportamentelor se caută în viitor, nu în trecut.', v:true},
 {c:'s03', s:'Feedback-ul eficient folosește cuvintele „bun” și „rău”.', v:false, e:'Trebuie să fie descriptiv, nu evaluativ.'},
 {c:'s03', s:'Parafrazarea adaugă informații proprii consilierului pentru a clarifica mesajul.', v:false},
 {c:'s03', s:'Consilierea psihopedagogică folosește un model clinic-curativ.', v:false, e:'Model educațional și al dezvoltării.'},
 {c:'s03', s:'Întrebările închise sunt utile pentru clarificarea unor informații.', v:true},
 {c:'s03', s:'Dezvăluirea informațiilor din consiliere se face doar cu acordul explicit al elevului.', v:true},
 {c:'s03', s:'În Reality Therapy, motivele inconștiente scuză comportamentul clientului.', v:false}
);

/* ---- content/capitole/s04.js ---- */
/* CAPITOLUL IV (Specialitate) – Aspecte deontologice și etice ale consilierii psihopedagogice */
CAPITOLE.push({id:'s04', parte:'Tematica de specialitate', nr:'IV', emoji:'⚖️', scurt:'Deontologie și etică',
titlu:'Aspecte deontologice și etice ale consilierii psihopedagogice',
sectiuni:[
{titlu:'Rețeaua: CJRAE, CJAP, cabinete', puncte:[
 '**CJRAE/CMBRAE** (Centrul Județean / al Municipiului București de Resurse și Asistență Educațională) – unități conexe ale învățământului preuniversitar, cu personalitate juridică, subordonate ministerului (OM 5555/2011); coordonează și **CJAP/CMBAP** (asistență psihopedagogică).',
 '**Cabinetul școlar** de asistență psihopedagogică: în unități cu cel puțin **800 de elevi** (sau 400 de preșcolari).',
 '**Cabinetul interșcolar**: pentru cel puțin două unități care împreună au efectivul cerut.',
 'Activități: cunoaștere și consiliere individuală/colectivă, îndrumarea părinților și profesorilor, colaborare cu comunitatea, orientarea școlară și profesională, consilierea elevilor cu manifestări deviante.',
 'Consilierul lucrează în cabinet, în cabinetul de orientare sau în clasă, conform standardului ocupațional (ANC); sarcina primară – **prevenirea tulburărilor emoționale și comportamentale** (A. Băban).',
 'Raportare anuală: minimum **90 de ședințe de consiliere individuală** și **40 de sesiuni de consiliere de grup** (elevi, părinți, profesori).']},
{titlu:'1. Atribuții și responsabilități', puncte:[
 'Etica profesională: abordarea clientului fără condiționări, ajutor competent, respectarea deciziilor clientului, **confidențialitate**, lucrul doar în aria de competență, apelul la colegi pentru cazuri dificile, a nu impune propriile valori, perfecționare continuă, prestigiu profesional, gândire pozitivă (I. Al. Dumitru).',
 'Trei direcții de acțiune (Muro și Kottman): **consilierea propriu-zisă** (individuală și de grup), **consultanța** (profesori, părinți, manageri), **coordonarea serviciilor educaționale**.',
 'La primar și gimnaziu: consiliere pe curriculum, dezvoltare personală (inclusiv carieră), cazuri speciale, coordonarea serviciilor.']},
{titlu:'2. Formarea continuă și evaluarea', puncte:[
 'Formare universitară: psihologie, psihopedagogie, sociologie, asistență socială, științele educației; master/studii aprofundate.',
 'Competențe de bază: consiliere școlară și profesională, evaluare psihologică, cunoașterea personalității, teorii și tehnici, cercetare, abordări interculturale, management.',
 'Formarea continuă: stagii acreditate, ateliere, seminarii, conferințe, mobilități; rezultatele autoevaluării și evaluărilor externe ghidează formarea.',
 'Denumirea din Statutul personalului didactic: **profesor psihopedagog**.',
 'Dacă un caz depășește competența → trimiterea la alt specialist.',
 '**Supervizare/consultanță**: nivel I – supervizare didactică (modele, feedback pe înregistrări); nivel II – supervizare care încurajează autonomia (cazuri atipice); nivel III – **consultanță** între colegi experimentați.',
 'Evaluarea: autoevaluare, interevaluare (colegi), expert, coordonatori; beneficiarii pot da sugestii.',
 'Indicatori **cantitativi** („Cât de mult? Cât de des?” – nr. de beneficiari, activități, persoane testate) și **calitativi** („Cât de util? Cât de bun?” – satisfacția clienților, impactul, eficiența socială).']},
{titlu:'3. Aspecte deontologice', puncte:[
 'Patru aspecte principale: **consimțământul clientului**, **confidențialitatea**, **aria de competență**, **conflictul de interese**.',
 '**Consimțământul informat**: clientul e informat despre obiective, desfășurare, proceduri, rezultate scontate.',
 '**Confidențialitatea** – cea mai importantă problemă etică. Niveluri (Blocher): (1) date generale – folosite profesional, cu protecția identității în cercetare; (2) informații speciale – pot fi împărtășite altor specialiști, cu informarea clientului; (3) informații strict personale – nu se divulgă niciodată, **excepție: pericol iminent pentru viața și securitatea clientului**.',
 'Grijă sporită la minori (mai ales cu părinți divorțați).',
 '**Aria de competență**: lucrează doar unde s-a format; un „tratament” greșit face mai mult rău decât lipsa ajutorului; **malpraxisul** e pedepsit de lege.',
 '**Conflictul de interese**: nu consiliază rude, prieteni, angajați/angajatori; nu se lasă influențat de cei care plătesc/recomandă clientul.']},
{titlu:'4. Principii de etică', puncte:[
 'Concepții morale-cadru (Al. I. Dumitru): **teismul** (voința divină), **raționalismul etic**, **imperativul moral** (Kant – binele/adevărul aplicate universal), **utilitarismul moral** (fericirea și bunăstarea oamenilor), **egoismul etic** (aplicabil clientului, NU consilierului – acesta trebuie să fie altruist), **intuiționismul moral** (compasiune), **justiția socială** (egalitate de șanse, fără discriminare).',
 'Valori: respectul față de viața umană, adevăr, libertate, autonomie, angajamente, viața privată; grija față de cei vulnerabili.',
 '**Rezolvarea unei dileme morale – 5 pași:** (1) recapitularea concepțiilor și principiilor etice generale; (2) lista principiilor specifice relevante; (3) adunarea informațiilor despre situație; (4) lista opțiunilor majore; (5) raportarea opțiunilor la concepții, principii și standarde profesionale.']}
]});

CARDURI.push(
 {c:'s04', q:'De la câți elevi se înființează un cabinet școlar de asistență psihopedagogică?', a:'Minimum **800 de elevi** (sau 400 de preșcolari). Sub acest număr – cabinet **interșcolar**.'},
 {c:'s04', q:'Ce raportează anual un profesor consilier (minim)?', a:'- 90 de ședințe de consiliere individuală\n- 40 de sesiuni de consiliere de grup'},
 {c:'s04', q:'Cele trei direcții de acțiune ale consilierului (Muro și Kottman)', a:'- Consilierea propriu-zisă (individuală și de grup)\n- Consultanța (profesori, părinți, manageri)\n- Coordonarea serviciilor educaționale'},
 {c:'s04', q:'Cele 4 aspecte deontologice principale', a:'- Consimțământul clientului\n- Confidențialitatea\n- Aria de competență\n- Conflictul de interese'},
 {c:'s04', q:'Nivelurile confidențialității (Blocher)', a:'- **I:** date generale – uz profesional, identitatea protejată\n- **II:** informații speciale – pot fi împărtășite altor specialiști, cu informarea clientului\n- **III:** informații strict personale – nu se divulgă, **excepție: pericol iminent pentru viața clientului**', term:'Confidențialitatea', short:'cea mai importantă problemă etică; excepție – pericol iminent'},
 {c:'s04', q:'Când poate fi încălcată confidențialitatea informațiilor strict personale?', a:'Doar când există un **pericol iminent pentru viața și securitatea clientului**.'},
 {c:'s04', q:'Ce face consilierul când un caz îi depășește competența?', a:'Îl trimite la un alt specialist cu pregătire corespunzătoare și îi comunică acest lucru clientului.'},
 {c:'s04', q:'Ce înseamnă conflictul de interese în consiliere?', a:'Situația în care interesele consilierului interferează cu ale clientului – de aceea nu consiliază rude, prieteni, persoane în relație angajator–angajat și nu se lasă influențat de cei care plătesc.', term:'Conflictul de interese', short:'interesele consilierului interferează cu binele clientului'},
 {c:'s04', q:'Nivelurile supervizării/consultanței', a:'- Nivel I – supervizare didactică (modele, feedback)\n- Nivel II – supervizare care încurajează autonomia\n- Nivel III – consultanță între colegi'},
 {c:'s04', q:'Indicatori cantitativi vs calitativi în evaluarea consilierului', a:'- **Cantitativi:** „Cât de mult? Cât de des?” (nr. beneficiari, activități)\n- **Calitativi:** „Cât de util? Cât de bun?” (satisfacția, impactul)'},
 {c:'s04', q:'Cei 5 pași ai rezolvării unei dileme morale', a:'- Recapitularea concepțiilor etice generale\n- Lista principiilor specifice relevante\n- Adunarea informațiilor despre situație\n- Lista opțiunilor majore\n- Raportarea opțiunilor la principii și standarde'},
 {c:'s04', q:'Utilitarismul moral vs egoismul etic în consiliere', a:'- **Utilitarism:** moral e ce aduce fericire și bunăstare\n- **Egoism etic:** se aplică clientului (să-și satisfacă nevoile), NU consilierului, care trebuie să fie altruist'},
 {c:'s04', q:'Ce este malpraxisul?', a:'Practica profesională greșită; consilierul poate fi pedepsit de lege dacă i se dovedește vinovăția.', term:'Malpraxisul', short:'practică profesională greșită, pedepsită de lege'}
);

GRILE.push(
 {c:'s04', q:'Cea mai importantă problemă de etică profesională a consilierului este:', o:['Conflictul de interese','Confidențialitatea','Formarea continuă','Evaluarea'], r:1},
 {c:'s04', q:'Informațiile strict personale pot fi divulgate doar:', o:['La cererea dirigintelui','La cererea părinților','În caz de pericol iminent pentru viața clientului','În rapoartele anuale'], r:2},
 {c:'s04', q:'Un cabinet școlar se înființează în unități cu cel puțin:', o:['300 de elevi','500 de elevi','800 de elevi','1000 de elevi'], r:2},
 {c:'s04', q:'Concepția etică aplicabilă clientului, dar NU consilierului:', o:['Utilitarismul','Egoismul etic','Imperativul moral','Justiția socială'], r:1},
 {c:'s04', q:'Imperativul moral își are originea în opera lui:', o:['Kant','Bentham','Rogers','Freud'], r:0},
 {c:'s04', q:'Relația de nivel III între consilieri este una de:', o:['Supervizare didactică','Consultanță între colegi','Evaluare ierarhică','Control'], r:1},
 {c:'s04', q:'„Satisfacția clienților” este un indicator:', o:['Cantitativ','Calitativ','Financiar','Statistic'], r:1},
 {c:'s04', q:'Consilierul poate consilia, în mod corect etic:', o:['Propriul copil','Un prieten apropiat','Un elev al școlii fără relații personale','Angajatorul său'], r:2}
);

AF.push(
 {c:'s04', s:'Clienții pot fi incluși în programe de consiliere fără consimțământul lor, dacă e spre binele lor.', v:false},
 {c:'s04', s:'Un tratament aplicat neprofesionist poate face mai mult rău decât lipsa ajutorului.', v:true},
 {c:'s04', s:'CJRAE sunt unități conexe ale învățământului preuniversitar.', v:true},
 {c:'s04', s:'Consilierul își poate impune propriile valori clientului, dacă sunt corecte.', v:false},
 {c:'s04', s:'Denumirea consilierului școlar în Statutul personalului didactic este „profesor psihopedagog”.', v:true},
 {c:'s04', s:'Supervizarea de nivel I se face pe baza autocaracterizărilor verbale ale celui supervizat.', v:false, e:'Se face pe observare directă, înregistrări, modele.'}
);

/* ---- content/capitole/s05.js ---- */
/* CAPITOLUL V (Specialitate) – Metode și tehnici de învățare eficientă */
CAPITOLE.push({id:'s05', parte:'Tematica de specialitate', nr:'V', emoji:'📖', scurt:'Învățarea eficientă',
titlu:'Metode și tehnici de învățare eficientă. Învățarea și cerințele vieții sociale',
sectiuni:[
{titlu:'1. Eficacitatea instruirii și randamentul învățării', puncte:[
 '**Eficacitatea instruirii** = depășirea de către TOȚI elevii a nivelului minimal acceptabil de performanță, proporțional cu posibilitățile individuale, în confort psihic și cu economie de efort și timp. Instruirea ineficace = reușita doar a unei părți a clasei.',
 'Soluția: **individualizarea, diferențierea și motivarea** învățării.',
 'Genofond (rezervorul genetic al speciei) vs genotip (calitățile ereditare individuale) – elevii au aceleași capacități, dar le folosesc diferit.',
 '**Randamentul învățării** = raportul dintre rezultatul didactic ideal (proiectat în documentele școlare) și rezultatul obținut.']},
{titlu:'1. Motivele învățării', puncte:[
 '**Cognitive** – curiozitatea, impulsul de a cunoaște; impulsul cognitiv poate deveni cel mai puternic motiv școlar.',
 '**De afiliere** – apartenența la grup, prieteni.',
 '**De aprobare socială** – recompense, respect, aprecierea celorlalți.',
 '**De putere/influență** – recunoaștere, control.',
 '**De afirmare a Eului și autorealizare** – succes, evitarea eșecului.',
 'Perspective: structurală (cognitiv + afectiv + volitiv împreună) și relațional-dinamică (neconcordanța nevoi interne – solicitări externe → **disonanță cognitivă**, motiv al învățării).',
 'Motivație **extrinsecă** (recompense, cerințe externe) vs **intrinsecă** (activitatea e interesantă în sine).',
 'T. Amabile: factori extrinseci **sinergetici** (se combină bine cu motivația intrinsecă) și **nonsinergetici** (persoana se simte constrânsă).']},
{titlu:'1. Stilurile de învățare', puncte:[
 '**Stilul de învățare** = modalitatea preferată de a recepta, asimila, procesa, stoca și reactualiza informațiile (I. Al. Dumitru).',
 'Determinat de: preferința senzorială (**vizual, auditiv, tactil-kinestezic**) + preferința emisferică (**stângă, dreaptă, integrate**) → 9 stiluri.',
 'Se identifică prin autoobservare, reflecție, chestionare/inventare.',
 'Consilierea urmărește identificarea și valorificarea stilului personal (self-management al învățării).']},
{titlu:'1. Inteligențele multiple (H. Gardner)', puncte:[
 '„Toți suntem inteligenți, dar în moduri diferite.”',
 '**Vizual-spațială** – învață prin imagini, scheme, culori, hărți.',
 '**Verbal-lingvistică** – citit, scris, povești; cea mai solicitată în școală.',
 '**Logico-matematică** – raționamente, numere, tipare (IQ).',
 '**Muzical-ritmică** – ritmuri, versificarea conținutului.',
 '**Corporal-kinestezică** – mișcare, manipulare de obiecte, jocuri.',
 '**Interpersonală** – relaționare, cooperare, dezbatere.',
 '**Intrapersonală** – reflecție, studiu individual, autocunoaștere (uneori lent, temeinic).',
 '**Naturalistă** – clasificarea plantelor, animalelor.',
 '**Existențială** – întrebările fundamentale ale existenței.']},
{titlu:'2. Insuccesul școlar: forme', puncte:[
 'Definiție: rămânerea în urmă sau neîndeplinirea cerințelor obligatorii – efect al discrepanței dintre exigențe, posibilități și rezultate.',
 'Indicatori: abandon precoce, decalaj potențial–rezultate, părăsirea școlii fără calificare, neatingerea obiectivelor, eșec la examene, inadaptare.',
 '**Eșec de tip cognitiv**: nerealizarea obiectivelor pedagogice (corigențe, repetenție) – din întârzieri intelectuale sau neajunsuri motivaționale, volitive, operaționale (aspirații scăzute, lipsa deprinderilor de muncă, gândire abstractă insuficientă).',
 '**Eșec de tip necognitiv**: inadaptarea la exigențele vieții școlare → abandon, „strada”; cauze afective sau psihonervoase (hiperexcitabilitate, autism, impulsivitate).',
 'Grade: **rămânerea în urmă** (latent, temporar – intervenție ușoară) → **insucces particular** (la unele discipline) → **insucces generalizat** (corigențe repetate, repetenție – intervenție foarte dificilă).',
 'Insuccesul = **dublă inadaptare**: a copilului la școală și a școlii la copil.']},
{titlu:'2. Cauze și factori perturbatori', puncte:[
 'Cauze **obiective**: organizarea școlară, programe încărcate, orar greșit, lipsa de tact a profesorului, erori de evaluare; familia (condiții precare, indiferență, conflicte).',
 'Cauze **subiective**: sănătatea, oboseala, deficiențe intelectuale, afective, tulburări de comportament.',
 'Factori: **biologici** (sănătate, analizatori), **psihologici** (procese, atenție, limbaj, personalitate), **pedagogici** (stilul profesorului, metode, climat), **socioculturali** (familie, prieteni), **de presiune și stres** (fizici, fiziologici, psihosociali).',
 'Cauzele devin efecte și invers; viziune ecologică, pedagogia diversității.']},
{titlu:'2. Strategii de prevenire și intervenție', puncte:[
 'Organizare științifică: repartizarea corectă pe clase, manuale, orar judicios, climat stimulativ, diferențiere.',
 '**D. Sălăvăstru** – strategii: colaborarea școală–familie și comunitate; creșterea rolului **învățământului preșcolar** (peste 50% din diferențele de randament provin de la debutul școlarității); descongestionarea conținuturilor, abordări interdisciplinare; pregătirea psihopedagogică a profesorilor; tratarea diferențiată și individualizată (grupe de nivel, sarcini cu șanse de succes); **evaluarea centrată pe progres**, nu pe ierarhii; ameliorarea practicilor (fără etichete, amenințări, limbaj vulgar); orientarea școlară și profesională.',
 'Expectanțele scăzute ale profesorilor/părinților → subsolicitare, sentiment de inferioritate; cele exagerate → suprasolicitare, oboseală cronică (efect Pygmalion).']},
{titlu:'3. Planificarea studiului și condițiile învățării', puncte:[
 '„Ceea ce contează nu este ce învățăm, ci **cum** învățăm.” Învățarea școlară are aspect informativ și formativ.',
 'Planificarea: după stilul și ritmul propriu; regim de viață (ore fixe; după prânz – cel mai puțin indicat), pauze scurte.',
 'Organizarea materialului: outline/cuprins, scheme (cauză-efect, parte-întreg, cronologic), reprezentări grafice, sumarizare.',
 '**Condiții interne**: percepția (~90% din informații pe cale vizuală), reprezentările, **memoria** (condiții: scopul memorării, înțelegerea, repetarea eșalonată, cunoașterea rezultatelor), gândirea, imaginația, **atenția** (concentrare maximă 15–20 min), factori biologici (somn, bioritm) și psihici (inteligență, aptitudini).',
 '**Condiții externe**: statusul și pregătirea profesorului, organizarea activității, factori socio-organizaționali, spațiul, materialele.']},
{titlu:'3. Strategii și tehnici mnezice', puncte:[
 '**Luarea de notițe**: stocare externă, triplă codare (verbală, vizuală, kinestezică), structurare; revizuirea în 24 de ore.',
 '**Sublinierea**: citești tot paragraful înainte, nu subliniezi prea mult, semne diferite consecvente (cercuri pentru concepte, linie pentru definiții).',
 '**Monitorizarea comprehensiunii**: formularea de întrebări (titluri → întrebări), clarificarea, sumarizarea, predicția; **predarea reciprocă** în grup.',
 '**Gândirea critică**: a obține, interpreta, evalua activ informația; mediul favorabil – diversitate de idei, implicare activă, siguranță, încredere, timp.',
 '**Managementul timpului**: momentele de eficiență maximă (de obicei 8–12 și 16–18), începi cu ce e mai ușor, fără „maratoane”, loc fără distractori, a spune „nu” tentațiilor.',
 '**Evitarea procrastinării**: planuri de studiu cu obiective specifice, măsurabile, realiste, termene.']},
{titlu:'3. Strategii de învățare, metaînvățarea, activizarea', puncte:[
 'Strategiile de învățare = ansambluri de metode, procedee, tehnici: de informare și documentare; de învățare efectivă (individuală, în grup); de valorificare (examene, portofoliu, recenzie, lucrare științifică).',
 'Alegerea strategiei depinde de: scop, natura materialului, modul de abordare, cunoștințele și **metacognițiile** celui care învață.',
 '**Metaînvățarea** = a ști cum să înveți; diferența dintre oameni stă mai ales în metacogniții.',
 '**Activizarea** (M. Bocoș): implicarea întregului potențial al elevului (cognitiv, psihomotor, afectiv-volitiv). Cerințe: pregătirea psihologică (motivație, **sensibilizare**, climat de încredere), organizarea rațională, reducerea „zgomotelor” din comunicare, **repertorii congruente** (limbaj comun), metode activizante (problematizare, descoperire, studiu de caz, joc de rol, simulare).']},
{titlu:'4. Învățarea de-a lungul întregii vieți', puncte:[
 'Totalitatea activităților de învățare de-a lungul vieții pentru dezvoltare personală, civică, socială, ocupațională; **principiu de bază** al învățământului contemporan.',
 'Dimensiuni: **orizontală** (lifewide learning – în toate aspectele vieții), **verticală** (lifelong learning – toată viața), **transversală** (learning for life – competențe-cheie).',
 'Integrează educația formală, nonformală și informală.',
 '**Memorandumul privind învățarea permanentă** (UE) – 6 mesaje-cheie: noi deprinderi de bază pentru toți; investiții în resursele umane; inovație în predare și învățare; valorificarea învățării (inclusiv nonformale/informale); regândirea orientării și consilierii; învățarea mai aproape de domiciliu.']},
{titlu:'5. Autoînvățarea, autoeducația, învățarea independentă', puncte:[
 '**Autoînvățarea**: capacitatea de a îndeplini sarcini autonom, dar după obiective și îndrumări stabilite de educator (S. Cristea).',
 '**Autoinstruirea**: autoperfecționarea acțiunilor de autoînvățare, în afara dispozitivelor formale, fără agent educativ.',
 '**Autoinformarea** – dimensiunea cantitativă (volum de informații); **autoformarea** – transformarea calitativă a personalității.',
 '**Autoeducația**: transformarea obiectului educației în subiect, a educatului în educator; capacități – autoevaluare, autoînvățare, autoinformare, autoinstruire, autoformare, autoproiectare.',
 '**Învățarea independentă**: elevul își gestionează obiectivele, metodele, monitorizarea, evaluarea; profesorul devine mediator/consilier al cunoașterii (M. Ionescu). Învățare automotivată, autoorganizată, autodirijată, autoevaluată (I. Neacșu).',
 '**Autonomia educativă**: fixarea propriilor scopuri, priorități, metode, planificare, control; corelate – libertatea de alegere, responsabilitatea, gândirea critică, metacogniția, creativitatea.']}
]});

CARDURI.push(
 {c:'s05', q:'Ce este eficacitatea instruirii?', a:'Depășirea de către TOȚI elevii a nivelului minimal acceptabil de performanță, proporțional cu posibilitățile lor, în confort psihic și cu economie de efort și timp.', term:'Eficacitatea instruirii', short:'toți elevii depășesc pragul minimal, după posibilități'},
 {c:'s05', q:'Ce este randamentul învățării?', a:'Raportul dintre rezultatul didactic ideal (proiectat în documentele școlare) și rezultatul efectiv obținut.', term:'Randamentul învățării', short:'raportul rezultat obținut / rezultat proiectat'},
 {c:'s05', q:'Categorii de motive ale învățării', a:'- Cognitive\n- De afiliere\n- De aprobare socială\n- De putere/influență\n- De afirmare a Eului și autorealizare'},
 {c:'s05', q:'Factori extrinseci sinergetici vs nonsinergetici (Amabile)', a:'- **Sinergetici:** lucrează împreună cu motivația intrinsecă, cresc eficiența\n- **Nonsinergetici:** persoana se simte constrânsă'},
 {c:'s05', q:'Ce este stilul de învățare?', a:'Modalitatea preferată de a recepta, asimila, procesa, stoca și reactualiza informații; depinde de preferința senzorială (vizual/auditiv/kinestezic) și de emisfera dominantă.', term:'Stilul de învățare', short:'modul preferat de a recepta și procesa informația'},
 {c:'s05', q:'Inteligențele multiple (Gardner)', a:'Vizual-spațială, verbal-lingvistică, logico-matematică, muzicală, corporal-kinestezică, interpersonală, intrapersonală, naturalistă, existențială.', term:'Inteligențele multiple', short:'teoria lui H. Gardner: toți suntem inteligenți diferit'},
 {c:'s05', q:'Care inteligență este cea mai solicitată de școala actuală?', a:'Inteligența **verbal-lingvistică** (și logico-matematică).'},
 {c:'s05', q:'Eșec școlar cognitiv vs necognitiv', a:'- **Cognitiv:** nerealizarea obiectivelor pedagogice (corigențe, repetenție)\n- **Necognitiv:** inadaptarea la exigențele vieții școlare (abandon)'},
 {c:'s05', q:'Gradele insuccesului școlar', a:'- Rămânerea în urmă (latent, temporar)\n- Insucces particular (la unele discipline)\n- Insucces generalizat (corigențe repetate, repetenție)'},
 {c:'s05', q:'De ce e insuccesul o „dublă inadaptare”?', a:'Pentru că este inadaptarea copilului la școală ȘI a școlii la particularitățile copilului – deci intervenția vizează ambele părți.'},
 {c:'s05', q:'Strategii de prevenire a insuccesului (D. Sălăvăstru)', a:'- Colaborare școală–familie–comunitate\n- Rolul învățământului preșcolar\n- Descongestionarea conținuturilor, interdisciplinaritate\n- Pregătire psihopedagogică a profesorilor\n- Tratare diferențiată\n- Evaluare centrată pe progres\n- Ameliorarea practicilor din clasă\n- Orientare școlară și profesională'},
 {c:'s05', q:'Condițiile unei memorări eficiente', a:'- cunoașterea scopului memorării\n- înțelegerea\n- repetarea perseverentă (eșalonată pentru materiale mari)\n- cunoașterea rezultatelor și autoreglarea'},
 {c:'s05', q:'Cât timp poate menține un elev atenția concentrată?', a:'Aproximativ **15–20 de minute** – de aceea sunt necesare sarcini variate la lecțiile grele.'},
 {c:'s05', q:'Funcțiile luării de notițe', a:'- stocare externă a informației\n- triplă codare (verbală, vizuală, kinestezică) → retenție mai bună\n- structurarea materialului în timpul predării'},
 {c:'s05', q:'Ce este metaînvățarea?', a:'Dobândirea cunoștințelor procedurale și a abilităților de a învăța eficient în orice situație – „a ști cum să înveți”; diferența dintre oameni stă în metacogniții.', term:'Metaînvățarea', short:'a ști cum să înveți (metacogniție)'},
 {c:'s05', q:'Cele trei dimensiuni ale învățării permanente', a:'- Orizontală – lifewide learning\n- Verticală – lifelong learning\n- Transversală – learning for life', term:'Învățarea permanentă', short:'învățare pe tot parcursul și în toate aspectele vieții'},
 {c:'s05', q:'Cele 6 mesaje-cheie ale Memorandumului privind învățarea permanentă', a:'- Noi deprinderi de bază pentru toți\n- Investiții mai mari în resursele umane\n- Inovație în predare și învățare\n- Valorificarea învățării\n- Regândirea orientării și consilierii\n- Învățarea mai aproape de domiciliu'},
 {c:'s05', q:'Autoinformare vs autoformare', a:'- **Autoinformarea:** dimensiunea cantitativă – acumularea de informații\n- **Autoformarea:** transformarea calitativă a personalității'},
 {c:'s05', q:'Ce este autoeducația?', a:'Transformarea obiectului educației în subiect, a educatului în propriul educator; proces de durată (autoevaluare → autoînvățare → autoinformare → autoinstruire → autoformare → autoproiectare).', term:'Autoeducația', short:'educatul devine propriul educator'},
 {c:'s05', q:'Cerințele activizării elevilor (M. Bocoș)', a:'- pregătirea psihologică (motivație, sensibilizare, climat)\n- organizarea rațională a învățării\n- reducerea perturbațiilor din comunicare\n- repertorii congruente (limbaj comun)\n- metode activizante'}
);

GRILE.push(
 {c:'s05', q:'Teoria inteligențelor multiple aparține lui:', o:['Piaget','H. Gardner','D. Goleman','R. Gagné'], r:1},
 {c:'s05', q:'Inteligența care favorizează reflecția și studiul individual este:', o:['Interpersonală','Intrapersonală','Kinestezică','Naturalistă'], r:1},
 {c:'s05', q:'Eșecul școlar de tip necognitiv se referă la:', o:['Nerealizarea obiectivelor','Inadaptarea la exigențele vieții școlare','Notele mici la matematică','Lipsa inteligenței'], r:1},
 {c:'s05', q:'Ce formă de insucces este cea mai ușor de remediat?', o:['Rămânerea în urmă la învățătură','Insuccesul generalizat','Repetenția','Abandonul'], r:0},
 {c:'s05', q:'Evaluarea, pentru a preveni insuccesul, trebuie centrată pe:', o:['Ierarhii','Progresul elevului','Comparații cu colegii','Media clasei'], r:1},
 {c:'s05', q:'Pe ce cale primim aproximativ 90% din informații?', o:['Auditivă','Vizuală','Tactilă','Kinestezică'], r:1},
 {c:'s05', q:'„Lifewide learning” se referă la dimensiunea:', o:['Verticală','Orizontală','Transversală','Formală'], r:1},
 {c:'s05', q:'Disonanța cognitivă poate deveni:', o:['Un obstacol definitiv','Un motiv al învățării','Un stil de învățare','O formă de eșec'], r:1},
 {c:'s05', q:'Peste 50% din diferențele de randament școlar își au originea, după Sălăvăstru, în:', o:['Liceu','Debutul școlarității','Facultate','Gimnaziu'], r:1},
 {c:'s05', q:'Ce NU este o strategie mnezică?', o:['Luarea de notițe','Sublinierea','Monitorizarea comprehensiunii','Învățarea doar înainte de test'], r:3},
 {c:'s05', q:'Repertoriile congruente înseamnă:', o:['Același manual','Un limbaj și un sistem de concepte comun profesor–elev','Aceeași notă','Același orar'], r:1},
 {c:'s05', q:'Autoînvățarea, după S. Cristea, se face:', o:['Fără niciun obiectiv','După obiective și îndrumări stabilite de educator','Doar în familie','Doar la universitate'], r:1}
);

AF.push(
 {c:'s05', s:'Motivația intrinsecă și cea extrinsecă sunt ireconciliabile.', v:false},
 {c:'s05', s:'Intervalul imediat după masa de prânz e cel mai indicat pentru studiu.', v:false},
 {c:'s05', s:'Expectanțele scăzute ale profesorilor pot fixa la elev sentimentul ineficienței personale.', v:true},
 {c:'s05', s:'Notițele se revizuiesc ideal în aproximativ o zi de la luarea lor.', v:true},
 {c:'s05', s:'La subliniere, e bine să subliniezi aproape tot textul.', v:false},
 {c:'s05', s:'Educația permanentă integrează educația formală, nonformală și informală.', v:true},
 {c:'s05', s:'În insuccesul școlar, cauzele pot deveni efecte și efectele cauze.', v:true},
 {c:'s05', s:'Sesiunile de studiu „maraton” sunt recomandate.', v:false},
 {c:'s05', s:'Autoformarea se referă doar la acumularea cantitativă de informații.', v:false, e:'Aceea e autoinformarea; autoformarea e transformare calitativă.'},
 {c:'s05', s:'Inteligența naturalistă presupune ușurința de a clasifica plante și animale.', v:true}
);

/* ---- content/capitole/s06.js ---- */
/* CAPITOLUL VI (Specialitate) – Managementul comunicării */
CAPITOLE.push({id:'s06', parte:'Tematica de specialitate', nr:'VI', emoji:'💬', scurt:'Managementul comunicării',
titlu:'Managementul comunicării',
sectiuni:[
{titlu:'1. Componentele comunicării', puncte:[
 'Comunicarea = transfer de informație de la un emițător la un receptor, cu schimbarea rolurilor (I.O. Pânișoară).',
 '**Emițătorul**: are informația mai bine structurată, o stare de spirit (motivație), un scop explicit și unul implicit. Profesorul modern e și receptor, pentru a fi un emițător mai bun.',
 '**Receptorul**: îi e adresat mesajul sau îl primește întâmplător, conștient sau subliminal. Mucchielli: în comunicare contează mai ales **cui** te adresezi – comunicarea bună e centrată pe receptor. Tipuri de ascultare: pentru informații, pentru divertisment, empatică etc.',
 '**Mesajul**: informații obiective + judecăți de valoare + trăiri personale.',
 '**Canalul**: calea de difuzare; principalul spațiu al factorilor perturbatori; rețeaua de comunicare.',
 '**Contextul**: fizic (aranjarea mobilierului) și psihopedagogic (proximitate, similaritate, apartenența la grup).',
 '**Feedback-ul** (Gamble): toate mesajele verbale și nonverbale transmise, conștient sau nu, ca răspuns la comunicarea altuia.',
 'Feedback **evaluativ**: pozitiv (menține direcția), negativ (corectiv), **formativ** (negativ amânat până când activitatea poate fi reluată – perceput ca sprijin).',
 'Feedback **nonevaluativ**: de sondare, de înțelegere, suportiv, „mesajul-eu”.']},
{titlu:'1. Niveluri și tipuri de comunicare', puncte:[
 'Esențiale: relația, schimbul de semnificații, modificarea comportamentului. Conținut: informațional, afectiv-emoțional, motivațional, volitiv; informații cognitive, indiceale, conative.',
 '**Niveluri**: intrapersonală (cu sine), **interpersonală** (față în față – cea mai importantă și frecventă), de grup, de masă (fără feedback eficient), publică/mediatică (rădăcini în retorica antică).',
 'După cod: verbală (orală/scrisă), paraverbală, nonverbală.',
 'După natura informației: **digitală** (conținutul) și **analogică** (relația – gesturi, înfățișare).',
 'După canal: directă și mediată; după statut: **verticală** (ierarhică) și **orizontală**; după feedback: unidirecțională (lateralizată) și bi/multidirecțională.',
 'După obiective: incidentală, consumatorie, instrumentală; după cultură: intra- și interculturală.']},
{titlu:'1. Barierele comunicării', puncte:[
 'Factori: efecte de statut, probleme semantice (jargon), distorsiuni perceptive, diferențe culturale, alegerea greșită a canalului sau momentului, canale prea lungi, factori fizici (zgomot, lumină, temperatură).',
 'Bariere: fizice, semantice, interne (implicare, diferențe de percepție, lipsa de interes, emoțiile puternice), **blocajul psihic** (întreruperea fluxului ideatic din suprasolicitare sau șoc), **tracul**.',
 '**A. Băban** – bariere: tendința de a judeca/aproba/dezaproba, etichetarea, oferirea de soluții, ordinele, amenințările, moralizarea („ar trebui”), devierea subiectului, impunerea argumentelor logice (ignoră sentimentele).']},
{titlu:'2. Comunicarea asertivă', puncte:[
 '**Lazarus** – persoana matură (asertivă): își exprimă deschis dorințele; poate spune **NU**; vorbește deschis despre sentimente pozitive și negative; inițiază, întreține și încheie o discuție.',
 '**Pasiv**: își neagă drepturile, nu-și exprimă sentimentele, se lasă influențat, vinovăție, anxietate; voce încetă, contact vizual minim, umeri aplecați („Dacă zici tu…”).',
 '**Agresiv**: încalcă drepturile altora, jignește, ton ridicat, superioritate, critică distructivă, întrerupe; privire fixă, gesturi amenințătoare („Toți sunteți niște proști!”). Și ironia, sarcasmul sunt agresive.',
 '**Asertiv**: respectă drepturile proprii ȘI ale altora, își exprimă deschis nevoile și sentimentele, ascultă, face compromisuri, critică constructiv; contact vizual, voce calmă și sigură („Eu cred că…”, „Aș dori…”).',
 '**Asertivitatea** = exprimarea propriilor idei și sentimente și apărarea drepturilor, fără a le încălca pe ale celorlalți; se poate învăța.',
 '**Drepturile asertive**: de a-ți stabili prioritățile, de a avea opinii proprii, de a nu te justifica, de a spune NU / NU ȘTIU / NU ÎNȚELEG, de a cere ajutor, de a greși, de a te răzgândi, de a fi imperfect, de a-ți alege prietenii.',
 'Deprinderi: afirmații la persoana I, fără minimalizare, fără cuvinte-parazit, feedback concret, limbaj neutru, confruntarea imediată a situațiilor neplăcute, concordanță verbal–nonverbal.']},
{titlu:'2. Managementul conflictelor', puncte:[
 'Conflictul – parte naturală, inevitabilă a vieții școlare. **Deutsch**: conflictul = stare de incompatibilitate comportamentală; conflictul de interese – acțiunile unuia blochează scopurile altuia.',
 'Conflictele negate, suprimate sau evitate devin **distructive**; gestionate constructiv cresc angajamentul, motivația, abilitățile de rezolvare a problemelor.',
 'Surse: nevoi fundamentale, valori diferite, percepții diferite, resurse limitate, interese diferite, nevoi psihologice.',
 'Principii (A. Băban): relație pozitivă pe durata conflictului (ascultare activă, întrebări deschise); diferențierea evenimente–comportament–interpretare; **focus pe problemă, nu pe persoană** („A apărut o problemă”, nu „Tu ai creat…”); comunicare directă, fără învinovățire; identificarea barierelor; deprinderi de rezolvare de probleme.',
 'Strategii: coerciție/manipulare, ofertă–răspuns, argumentare; inhibare, ignorare, **arbitraj**, **mediere** (Higgins și Priest).',
 '**5 pași**: (1) pregătirea contextului; (2) strângerea informațiilor (interese, nevoi); (3) **acceptarea conflictului** (percepție comună a problemei); (4) generarea de soluții (brainstorming); (5) **negocierea**.',
 '**Medierea de către egali (peer mediation)**: elevi mediatori instruiți; pentru bullying, bârfe, invidie. Johnson și Johnson – 4 pași: încetarea ostilităților; angajarea în negociere cu bună-credință; sprijin în negociere; monitorizarea respectării acordului. Dacă eșuează – mediază profesorul; apoi profesorul **arbitrează**.',
 'Efecte pozitive: motivație pentru schimbare, coeziune, creativitate, cunoaștere de sine. Efecte negative (conflict reprimat): scăderea implicării și încrederii, coaliții, dileme morale.',
 'Stiluri: **câștig–pierdere** (competiție, un singur post), **pierdere–pierdere** (nimeni nu primește jucăria; compromisul), **câștig–câștig** (soluția satisface ambele părți – cea dezirabilă).']},
{titlu:'3. Rolul comunicării în consiliere', puncte:[
 'Consilierea = relație, comunicare, conversație, sfătuire, intervenție.',
 'Relația anulează izolarea consiliatului – primul pas spre anularea izolării în viața reală.',
 'Comunicarea reală e **biunivocă**: de la consiliat spre consilier – problemele; de la consilier spre consiliat – orientările.',
 'Distorsiuni: codurile, mesajul, structura psihologică a partenerilor; consiliatul vine cu așteptări (**feed-forward**).',
 'Comunicarea = întâlnirea **repertoriilor** consiliatului și consilierului (scheme cognitive, afective, volitive, valori, atitudini); feedback-ul corectează distorsiunile.']}
]});

CARDURI.push(
 {c:'s06', q:'Componentele procesului de comunicare', a:'Emițător, receptor, mesaj, canal, cod, context, feedback.'},
 {c:'s06', q:'Ce este feedback-ul formativ?', a:'Un tip de feedback negativ **amânat** până când activitatea poate fi reluată, ca să fie perceput ca sprijin, nu ca o critică.', term:'Feedback-ul formativ', short:'feedback negativ amânat până la reluarea activității'},
 {c:'s06', q:'Tipuri de feedback nonevaluativ', a:'- de sondare\n- de înțelegere\n- suportiv\n- „mesajul-eu”'},
 {c:'s06', q:'Nivelurile comunicării', a:'- Intrapersonală\n- Interpersonală (cea mai importantă)\n- De grup\n- De masă\n- Publică / mediatică'},
 {c:'s06', q:'Comunicare digitală vs analogică', a:'- **Digitală:** se referă la conținutul comunicării\n- **Analogică:** se referă la relația dintre parteneri (gesturi, înfățișare)'},
 {c:'s06', q:'Barierele comunicării după A. Băban', a:'- a judeca, eticheta\n- a oferi soluții\n- a da ordine\n- a amenința\n- a moraliza\n- a devia subiectul\n- a impune argumente logice'},
 {c:'s06', q:'Ce este blocajul psihic?', a:'Întreruperea fluxului ideatic, cauzată de suprasolicitare sau șoc – mecanism de apărare care duce la ignorare, refuz, abandon.', term:'Blocajul psihic', short:'întreruperea fluxului ideatic din suprasolicitare sau șoc'},
 {c:'s06', q:'Cele 4 deprinderi ale persoanei asertive (Lazarus)', a:'- își exprimă deschis dorințele și nevoile\n- poate spune NU\n- vorbește deschis despre sentimente pozitive și negative\n- inițiază, întreține și încheie o discuție'},
 {c:'s06', q:'Ce este asertivitatea?', a:'Exprimarea propriilor idei, sentimente și drepturi fără a le încălca pe ale celorlalți. Se poate învăța.', term:'Asertivitatea', short:'îți exprimi ideile și drepturile fără a le încălca pe ale altora'},
 {c:'s06', q:'Pasiv – agresiv – asertiv: exemple de replici', a:'- **Pasiv:** „Dacă zici tu…”, „Îmi cer scuze că v-am răpit timpul”\n- **Agresiv:** „Toți sunteți niște proști!”\n- **Asertiv:** „Eu cred că…”, „Aș dori să…”'},
 {c:'s06', q:'Câteva drepturi asertive', a:'- să spui NU / NU ȘTIU / NU ÎNȚELEG\n- să greșești\n- să te răzgândești\n- să nu te justifici\n- să ai opinii proprii\n- să ceri ajutor\n- să fii imperfect'},
 {c:'s06', q:'Cum definește Deutsch conflictul?', a:'O stare de incompatibilitate comportamentală; conflictul de interese apare când acțiunile unei persoane blochează scopurile alteia.'},
 {c:'s06', q:'Surse ale conflictului', a:'Nevoi fundamentale, valori diferite, percepții diferite, resurse limitate, interese diferite, nevoi psihologice.'},
 {c:'s06', q:'Cei 5 pași ai rezolvării conflictului', a:'- Pregătirea contextului\n- Strângerea informațiilor\n- Acceptarea conflictului (percepție comună)\n- Generarea de soluții\n- Negocierea'},
 {c:'s06', q:'Pașii medierii (Johnson și Johnson)', a:'- Încetarea ostilităților\n- Angajarea în negociere cu bună-credință\n- Sprijin pentru o negociere reușită\n- Monitorizarea respectării acordului', term:'Medierea între egali', short:'elevi instruiți mediază conflictele colegilor'},
 {c:'s06', q:'Stilurile de abordare a conflictelor', a:'- Câștig–pierdere\n- Pierdere–pierdere (compromis)\n- Câștig–câștig (dezirabil)'},
 {c:'s06', q:'Ce înseamnă „feed-forward” în consiliere?', a:'Așteptările cu care consiliatul inițiază comunicarea, în funcție de structura lui psihologică.'}
);

GRILE.push(
 {c:'s06', q:'Cea mai importantă și mai frecventă formă de comunicare este:', o:['Intrapersonală','Interpersonală','De masă','Publică'], r:1},
 {c:'s06', q:'Comunicarea de masă se caracterizează prin:', o:['Feedback imediat','Lipsa unui feedback eficient','Relație față în față','Dialog'], r:1},
 {c:'s06', q:'„Dacă zici tu…” este o replică specifică stilului:', o:['Agresiv','Pasiv','Asertiv','Manipulativ'], r:1},
 {c:'s06', q:'Care NU este o barieră în comunicare după A. Băban?', o:['Moralizarea','Oferirea de soluții','Ascultarea activă','Amenințarea'], r:2},
 {c:'s06', q:'Pasul în care părțile ajung la o percepție comună a problemei:', o:['Pregătirea contextului','Acceptarea conflictului','Negocierea','Generarea de soluții'], r:1},
 {c:'s06', q:'Dacă medierea între elevi eșuează, primul pas recomandat este:', o:['Sancționarea','Profesorul preia rolul de mediator','Chemarea poliției','Ignorarea conflictului'], r:1},
 {c:'s06', q:'Doi candidați pentru un singur post reprezintă o situație tipică de:', o:['Câștig–câștig','Câștig–pierdere','Pierdere–pierdere','Compromis'], r:1},
 {c:'s06', q:'Feedback-ul care menține comunicarea în direcția actuală este:', o:['Evaluativ pozitiv','Evaluativ negativ','Formativ','De sondare'], r:0},
 {c:'s06', q:'Comunicarea verticală are loc între:', o:['Colegi','Profesor și elev','Prieteni','Frați'], r:1},
 {c:'s06', q:'Principiul „focus pe problemă, nu pe persoană” înseamnă formularea:', o:['„Tu ai creat o problemă”','„A apărut o problemă”','„Ești vinovat”','„Mereu faci așa”'], r:1}
);

AF.push(
 {c:'s06', s:'Ironia și sarcasmul sunt forme de comportament agresiv.', v:true},
 {c:'s06', s:'Asertivitatea este o trăsătură înnăscută, imposibil de învățat.', v:false},
 {c:'s06', s:'Conflictele negate sau suprimate tind să devină distructive.', v:true},
 {c:'s06', s:'Compromisul este o formă a metodei „pierdere–pierdere”.', v:true},
 {c:'s06', s:'Comunicarea bună este centrată în special pe emițător.', v:false, e:'Pe receptor (Mucchielli).'},
 {c:'s06', s:'Canalul este principalul spațiu pentru factorii perturbatori.', v:true},
 {c:'s06', s:'Persoana asertivă respectă atât drepturile sale, cât și pe ale celorlalți.', v:true},
 {c:'s06', s:'Conflictul este întotdeauna negativ în școală.', v:false, e:'Gestionat constructiv crește motivația și coeziunea.'}
);

/* ---- content/capitole/s07.js ---- */
/* CAPITOLUL VII (Specialitate) – Managementul comportamentelor și situațiilor de risc */
CAPITOLE.push({id:'s07', parte:'Tematica de specialitate', nr:'VII', emoji:'🚨', scurt:'Comportamente și situații de risc',
titlu:'Managementul comportamentelor și situațiilor de risc',
sectiuni:[
{titlu:'Consilierea ca relație, conversație, sfătuire, intervenție', puncte:[
 'Conversația e eficientă dacă: receptivitatea partenerilor, intenționalitatea consiliatului (eficiența scade dacă e constrâns), evitarea tendințelor de fațadă, atitudine stimulativă, empatie, ascultare activă.',
 'Forme de conversație: structurată, semistructurată, liberă – cea liberă e cea mai adecvată, dar cea mai dificilă.',
 'Sfătuirea: sfatul **directiv** – pentru probleme concrete, imediate și persoane mai puțin voluntare; sfatul **non-directiv, sugerat** – pentru probleme generale și persoane cu voință puternică.',
 'Consilierea ca intervenție: activismul partenerilor, **emoția corectoare**, modificări adaptativ-progresive.']},
{titlu:'1. Eșecul școlar, absenteismul, abandonul', puncte:[
 '**S. Cristea**: eșecul școlar = imposibilitatea momentană a elevului de a realiza obiectivele pedagogice.',
 'Taxonomii: după extindere (general, parțial, la început/pe parcursul ciclului); după cauză (aptitudinal-intelectual, atitudinal – afectiv-motivațional, didactic).',
 'Patru forme de manifestare: **rezultate academice scăzute**, **absențe/chiul**, **repetenția**, **abandonul** (părăsirea școlii înainte de finalizare – mai frecvent la copiii săraci și din minorități, din cauza așteptărilor scăzute, sprijinului insuficient, programei neadaptate).',
 '**Modelul socioecologic** – trei componente: mediul familial, caracteristicile elevului, mediul școlar.',
 'Familia: implicare, program clar, statut socioeconomic, așteptări; **capitalul social** poate compensa sărăcia; stilul parental orientat spre autonomie și motivație intrinsecă favorizează succesul, cel dictatorial (control excesiv, recompense externe) – eșecul.',
 'Elevul: **autoeficacitatea**, autodisciplina (prezice rezultatele mai bine decât IQ-ul), motivația intrinsecă.',
 'Școala: mediu organizat, sigur, participare la stabilirea regulilor; **bullyingul** – anxietate, depresie, ideație suicidară, eșec.',
 'Strategii de consiliere: **identificarea timpurie** a elevilor la risc (absențe, note, comportamente), perspectiva ecologică (familie, școală, comunitate), **grupuri psihoeducaționale** (abilități de studiu, obiective), **tutorat** (beneficii cognitive și afective pentru ambele părți), **implicarea familiei**.']},
{titlu:'1. Conflictul', puncte:[
 'Tipuri: **cognitiv** (între două concepte/reguli incompatibile), **intercultural**, **perceptiv** (indici contradictorii), **psihic/intrapsihic** (datorie vs dorință; crizele de dezvoltare), **social** (interese, putere, scopuri).',
 'Factori care exacerbează: implicarea altor persoane, lipsa abilităților, exagerarea problemei, desconsiderarea celuilalt, dezinteresul pentru relație.',
 'Factori care diminuează: imparțialitatea, evitarea etichetelor, focus pe problemă, dorința de a păstra relația, negocierea intereselor.',
 'Conflictele interpersonale se rezolvă după cele **intrapersonale** (autocunoaștere, stimă de sine).',
 'Tehnici: mentale (cadru nou, empatie, dialog interior pozitiv, sincronizare), senzoriale (ascultare, privire, voce), de mișcare (ținută, distanță).',
 '**Negocierea**: distributivă („sumă zero” – ce câștigă unul pierde celălalt) vs integrativă („sumă nonzero” – cooperare). **Medierea**: un terț neutru conduce părțile spre soluție.']},
{titlu:'1. Abuzul', puncte:[
 'Abuz = comportament agresiv asupra unei persoane aflate în poziție inferioară, cu consecințe fizice/emoționale.',
 '**Legea 272/2004**: orice acțiune voluntară a unei persoane aflate în relație de răspundere, încredere sau autoritate față de copil, prin care îi este periclitată viața, dezvoltarea, integritatea, sănătatea.',
 'Forme: **fizic** (lovire, ardere, orice pedeapsă corporală), **emoțional** (abuz verbal, standarde nerealiste, amenințări, terorizare), **sexual**, **neglijarea** (nevoi fizice/emoționale neîndeplinite, nesupraveghere).',
 'Consecințe: imagine de sine scăzută (copilul crede că a meritat), probleme emoționale și de relaționare (unii devin abuzatori), simptome somatice, performanțe școlare scăzute.',
 'Prevenție: cunoașterea **drepturilor copilului**; poliție, medici, asistență socială (oricine, chiar copilul, poate sesiza).',
 'Prevenirea abuzului emoțional (A. Băban): ascultare activă, copilul văzut ca valoros, sprijin în asumarea deciziilor, fără etichete și critici la persoană, dezvoltarea stimei de sine, gestionarea stresului.']},
{titlu:'1. Violența și agresivitatea în școală', puncte:[
 '**OMS**: violența = folosirea intenționată a forței sau puterii (reale sau ca amenințare) care poate provoca vătămare, moarte, traumă, dezvoltare deficitară, deprivare.',
 'Agresivitatea: fizică, verbală, socială (excludere, bârfă).',
 'Tipologie (plan, deschidere, implicare): activă fizică directă (lovirea), activă fizică indirectă (lovirea unui substitut), activă verbală directă (injuria), activă verbală indirectă (calomnia), pasivă fizică directă (împiedicarea), pasivă fizică indirectă (refuzul sarcinii), pasivă verbală directă (refuzul de a vorbi), pasivă verbală indirectă (negativismul).',
 'Factori de risc: impulsivitate, performanțe slabe, implicare timpurie în comportamente problematice, disciplină parentală dură/inconsecventă, deprivare, prieteni deviante, dezorganizare școlară (moral scăzut, pedepse frecvente).',
 'Factori protectivi: autoeficacitate, inteligență, părinți interesați, modele prosociale, recunoaștere și laudă, implicare în viața școlii.',
 'Programe: **PATHS** (strategii de gândire alternativă), **TSPS** (rezolvarea problemelor – frustrare și furie), **Second Step** (empatie, controlul impulsurilor, gestionarea furiei), **Coping Power Program** (din Anger Coping Program; componentă pentru copii și pentru părinți).']},
{titlu:'1. Bullying și cyberbullying', puncte:[
 '„Salvați Copiii”: 7 din 10 copii au fost martori la bullying în școală.',
 'Bullying: comportament care rănește intenționat, **repetat**, cu **dezechilibru de putere**; termen introdus în anii ’70 de **Dan Olweus** (Norvegia). **Mobbing** = agresiunea unui grup.',
 'Forme: fizic, verbal, etichetare, porecle, zvonuri, excludere, amenințări, șantaj, ascunderea lucrurilor. Motivație: putere și control; modele greșite; agresorii pot fi foști agresați.',
 'Roluri: victimă, agresor, martori/spectatori – toți sunt afectați.',
 'Mituri care sabotează intervenția: „clădește caractere”, „e un ritual de maturizare”, „dispare dacă îl ignori”, „victimele trebuie să se apere singure”, „lovește-l înapoi”, „la noi nu există”.',
 'Intervenție: terapie cognitiv-comportamentală; consiliere **remedială** (victime și agresori), **preventivă** (conștientizare), **pentru dezvoltare** (la nivel de clasă/școală).',
 '**Cyberbullying** (termen Bill Belsey, 2005): deliberat, repetat, ținta se simte amenințată, prin tehnologie; anonimatul accentuează neajutorarea.',
 'Forme: **flaming** (insulte în public online), **harassment** (hărțuire), **denigrarea**, **masquerading** (impersonare), **outing and trickery** (dezvăluirea secretelor), **excluderea**, **cyberthreats**. Cazul extrem: „cyberbullicide”.',
 'Semnale: scăderea bruscă a stimei de sine, mult timp online, depresie, refuzul școlii. Măsuri: protejarea parolelor, a nu răspunde, blocare, salvarea dovezilor, raportare, monitorizare fără a încălca intimitatea.']},
{titlu:'1. Adicția de substanțe', puncte:[
 'Dependența = dorință puternică, compulsivă de a consuma, dificultatea de a controla consumul; **fizică** (evitarea sevrajului) și **psihică** (craving, căutarea senzațiilor plăcute).',
 'Patru direcții de intervenție ale consilierului: identificarea semnelor; intervenția individualizată; sprijinirea familiei; rol de **liant** între elev, familie, școală și specialiști.',
 'Semne: miros, stare alterată, dezinteres, pupile modificate, somnolență, schimbarea prietenilor.',
 'Tipuri de consum: **experimental** (curiozitate), **ocazional**, **abuziv (de risc)**, **dependent**.',
 'Nevoia din spatele consumului: la primar/gimnaziu – experimentarea; la liceu – afirmarea personală.',
 '**Prochaska și DiClemente – stadiile schimbării**: precontemplare, contemplare, pregătire/decizie, acțiune, menținere (min. 6 luni), terminare; recăderile sunt frecvente.',
 '**Interviul motivațional**: empatie și ascultare reflexivă, evidențierea discrepanței dintre consum și obiective, evitarea confruntării, creșterea autoeficacității; 3 faze – rezolvarea ambivalenței, consolidarea angajamentului, monitorizarea și abordarea recăderilor.',
 'Situații de risc: stări emoționale negative, conflicte interpersonale, presiunea socială (chiar și emoțiile pozitive intense).',
 'Structuri: Centrele de Prevenire, Evaluare și Consiliere Antidrog; ONG-uri (ALIAT, UNICEF, ARAS). Exagerările și catastrofizarea cresc atractivitatea drogurilor.']},
{titlu:'1. Dependența de internet', puncte:[
 'Pierderea compulsivă a controlului impulsurilor legate de internet (jocuri, rețele, navigare); cel mai apropiat de jocurile de noroc; adolescenții sunt cei mai vulnerabili.',
 'Tipuri: dependența de sex virtual, de **relații virtuale** (rețele sociale – cea mai severă), compulsii online (jocuri de noroc, cumpărături, licitații), **supraîncărcarea informațională**, dependența de calculator (jocuri offline).',
 '**Neuroplasticitatea** – crescută în adolescență; „use it or lose it” – conexiunile folosite repetat se întăresc.',
 'Semne: confort mai mare cu prietenii online, euforie online, simptome de sevraj (neliniște, iritabilitate), pierderea controlului timpului, neglijarea intereselor și sarcinilor.',
 'Prevenție: tratarea problemelor de fond (depresie, stres), coping, rețea de sprijin reală, evidența timpului, obiective clare pentru utilizare, activități alternative. Prima clinică pentru dependenți de internet în Europa: Amsterdam, 2007.']},
{titlu:'2. Managementul stresului', puncte:[
 '**Anxietatea** = „teamă fără obiect”; **angoasa** = fața somatică a aceleiași stări.',
 '**Stresul** = reacție complexă, nespecifică a organismului la stimuli percepuți ca dificili, cărora persoana crede că nu le poate face față. Rezultă din: **factori stresori** + **resursele persoanei** + **reacțiile la stres**.',
 'Stresori: boala, abuzul, problemele financiare, familiale, cu prietenii, școlare, dezastre, accidente, nemulțumirea de sine.',
 'Factori protectori: stimă de sine realistă, optimism, autoeficacitate, internalism.',
 'Reacții: fiziologice, cognitive, emoționale, comportamentale.',
 '**Eustresul** (stres pozitiv, tonifiant) vs **distresul** (negativ). „Viața fără stres înseamnă moarte.”',
 'Managementul stresului (A. Băban): identificarea surselor, anticiparea perioadelor de stres, strategii de adaptare, exprimarea emoțiilor, evitarea autoblamării, reevaluarea pozitivă; asertivitatea, a spune NU, rezolvarea conflictelor, relaxare; suport social; stil de viață sănătos; stimă de sine.',
 '**Coping** (Lazarus) = mecanisme de prevenție și adaptare la stres; M. Miclea – **comportamental**, **cognitiv** (reevaluarea), **neurobiologic** (relaxare, antrenament autogen, biofeedback).',
 '**Reziliența** = abilitatea de a reveni la nivelul funcțional anterior (sau superior) după un stres major.']},
{titlu:'3. Stilul de viață sănătos', puncte:[
 'Stilul de viață = totalitatea deciziilor și acțiunilor voluntare care afectează sănătatea; rol-cheie – credința în autoeficacitate și modelele.',
 'Comportamente sănătoase (Sarafino): 7–9 ore de somn, micul dejun regulat, fără gustări între mese, greutate normală, fără fumat (activ și pasiv), alcool doar ocazional, exerciții regulate.',
 'Peste 25% din bolile cardiovasculare ar putea fi evitate prin renunțarea la fumat.',
 'Comportamentele de sănătate sunt determinate de factori diferiți, diferă de la o persoană la alta și se schimbă în timp.',
 '**Prevenția**: **primară** (reducerea riscului de îmbolnăvire – educație pentru sănătate), **secundară** (reducerea factorilor de risc deja existenți), **terțiară** (creșterea calității vieții bolnavilor – voluntariat).',
 '**Health Belief Model**: comportamentul depinde de percepția amenințării (valori, vulnerabilitate, consecințe) și de raportul costuri–beneficii.']}
]});

CARDURI.push(
 {c:'s07', q:'Cele 4 forme de manifestare ale eșecului școlar', a:'- Rezultate academice scăzute\n- Absențe/chiul\n- Repetenția\n- Abandonul școlar'},
 {c:'s07', q:'Componentele modelului socioecologic al succesului/eșecului', a:'- Mediul familial\n- Caracteristicile elevului\n- Mediul școlar'},
 {c:'s07', q:'Ce prezice mai bine rezultatele la teste: IQ-ul sau autodisciplina?', a:'**Autodisciplina** (conform cercetării citate).'},
 {c:'s07', q:'Strategii de consiliere împotriva eșecului școlar', a:'- Identificarea timpurie a elevilor la risc\n- Perspectiva ecologică\n- Grupuri psihoeducaționale\n- Tutorat\n- Implicarea familiei'},
 {c:'s07', q:'Negociere distributivă vs integrativă', a:'- **Distributivă:** „sumă zero” – ce câștigă unul pierde celălalt\n- **Integrativă:** „sumă nonzero” – cooperare, soluție mai bună pentru ambii'},
 {c:'s07', q:'Formele abuzului asupra copilului', a:'- Fizic\n- Emoțional\n- Sexual\n- Neglijarea'},
 {c:'s07', q:'Ce lege definește abuzul asupra copilului?', a:'**Legea 272/2004** privind protecția și promovarea drepturilor copilului.'},
 {c:'s07', q:'Definiția violenței (OMS)', a:'Folosirea intenționată a forței fizice sau a puterii, reale sau ca amenințare, care poate provoca vătămare, moarte, traumă psihologică, dezvoltare deficitară sau deprivare.'},
 {c:'s07', q:'Exemple: agresiune activă verbală indirectă vs pasivă verbală indirectă', a:'- Activă verbală indirectă: **calomnia**\n- Pasivă verbală indirectă: **negativismul**'},
 {c:'s07', q:'Programe de reducere a agresivității', a:'- PATHS\n- TSPS (rezolvarea problemelor)\n- Second Step\n- Coping Power Program'},
 {c:'s07', q:'Cele trei criterii ale bullyingului', a:'- Intenția de a răni\n- Repetiția\n- Dezechilibrul de putere', term:'Bullyingul', short:'agresiune intenționată, repetată, cu dezechilibru de putere'},
 {c:'s07', q:'Cine a introdus termenul „bullying”?', a:'**Dan Olweus**, Universitatea din Bergen (Norvegia), în anii ’70.'},
 {c:'s07', q:'Bullying vs mobbing', a:'- **Bullying:** agresor individual\n- **Mobbing:** un grup declanșează comportamentul agresiv', term:'Mobbingul', short:'agresiune exercitată de un grup'},
 {c:'s07', q:'Formele cyberbullyingului', a:'Flaming, harassment (hărțuire), denigrare, masquerading (impersonare), outing and trickery, excludere/ostracizare, cyberthreats (amenințări).'},
 {c:'s07', q:'Ce este „flaming”?', a:'Schimb de insulte între utilizatori, de regulă într-un context public online (forum).', term:'Flaming', short:'schimb de insulte în spațiul public online'},
 {c:'s07', q:'Tipuri de consum de substanțe', a:'- Experimental\n- Ocazional\n- Abuziv (de risc)\n- Dependent'},
 {c:'s07', q:'Stadiile schimbării (Prochaska și DiClemente)', a:'- Precontemplare\n- Contemplare\n- Pregătire/decizie\n- Acțiune\n- Menținere (min. 6 luni)\n- Terminare', term:'Modelul transteoretic', short:'Prochaska & DiClemente: stadiile schimbării'},
 {c:'s07', q:'Principiile interviului motivațional', a:'- Empatie și ascultare reflexivă\n- Evidențierea discrepanței consum–obiective\n- Evitarea argumentării și confruntării\n- Creșterea autoeficacității', term:'Interviul motivațional', short:'crește motivația pentru schimbare, fără confruntare'},
 {c:'s07', q:'Dependența fizică vs psihică', a:'- **Fizică:** consumul pentru a evita sevrajul\n- **Psihică:** nevoia de a retrăi senzațiile plăcute, craving'},
 {c:'s07', q:'Eustres vs distres', a:'- **Eustres:** stres pozitiv, tonifiant (și evenimentele fericite)\n- **Distres:** stres negativ, trăit ca disconfort, anxietate', term:'Eustresul', short:'stresul pozitiv, tonifiant'},
 {c:'s07', q:'Tipurile de coping (M. Miclea)', a:'- Comportamental\n- Cognitiv\n- Neurobiologic', term:'Copingul', short:'mecanisme de prevenție și adaptare la stres'},
 {c:'s07', q:'Ce este reziliența?', a:'Abilitatea de a-ți redobândi nivelul funcțional anterior (sau unul superior) după o experiență de stres major.', term:'Reziliența', short:'revenirea la funcționare după un stres major'},
 {c:'s07', q:'Prevenția primară, secundară, terțiară', a:'- **Primară:** reducerea riscului de îmbolnăvire\n- **Secundară:** reducerea factorilor de risc existenți\n- **Terțiară:** creșterea calității vieții bolnavilor'},
 {c:'s07', q:'Componentele Health Belief Model', a:'- Percepția amenințării bolii (valori, vulnerabilitate, consecințe)\n- Evaluarea costurilor și beneficiilor comportamentului'}
);

GRILE.push(
 {c:'s07', q:'Termenul „bullying” a fost introdus de:', o:['Bill Belsey','Dan Olweus','Prochaska','A. Ellis'], r:1},
 {c:'s07', q:'Termenul „cyberbullying” a fost folosit prima dată de:', o:['Dan Olweus','Bill Belsey','Rigby','Lazarus'], r:1},
 {c:'s07', q:'Stadiul în care aspectele negative ale adicției sunt ignorate:', o:['Contemplare','Precontemplare','Acțiune','Menținere'], r:1},
 {c:'s07', q:'Calomnia este o agresiune:', o:['Activă fizică directă','Activă verbală indirectă','Pasivă verbală directă','Pasivă fizică indirectă'], r:1},
 {c:'s07', q:'Prevenția terțiară vizează:', o:['Evitarea îmbolnăvirii','Reducerea factorilor de risc','Creșterea calității vieții bolnavilor','Educația pentru sănătate'], r:2},
 {c:'s07', q:'Impersonarea altei persoane online se numește:', o:['Flaming','Masquerading','Outing','Harassment'], r:1},
 {c:'s07', q:'Elevul care chiulește special ca să fumeze se află în consumul:', o:['Experimental','Ocazional','Abuziv (de risc)','Dependent'], r:2},
 {c:'s07', q:'Mecanismele de coping au fost descrise inițial de:', o:['Lazarus','Freud','Rogers','Piaget'], r:0},
 {c:'s07', q:'Ce NU este un mit despre bullying?', o:['„Clădește caractere”','„Dispare dacă îl ignori”','„Implică un dezechilibru de putere”','„Victima trebuie să se apere singură”'], r:2},
 {c:'s07', q:'Câte ore de somn recomandă lista Sarafino?', o:['5–6','7–9','10–12','Oricâte'], r:1},
 {c:'s07', q:'Tipul de dependență de internet considerat cel mai sever:', o:['De calculator offline','De relații virtuale (rețele sociale)','Supraîncărcarea informațională','Cumpărăturile online'], r:1},
 {c:'s07', q:'Agresivitatea unui grup asupra unei persoane:', o:['Bullying individual','Mobbing','Flaming','Coping'], r:1}
);

AF.push(
 {c:'s07', s:'Abandonul școlar e mai frecvent la elevii din comunități sărace și din minorități.', v:true},
 {c:'s07', s:'Stilul parental dictatorial favorizează succesul școlar.', v:false},
 {c:'s07', s:'În programele de tutorat, beneficiază atât elevii ajutați, cât și tutorii.', v:true},
 {c:'s07', s:'Copilul nu poate sesiza singur autoritățile în caz de abuz.', v:false, e:'Oricine, chiar copilul, poate sesiza.'},
 {c:'s07', s:'Emoțiile pozitive intense pot fi și ele factori de risc pentru consum.', v:true},
 {c:'s07', s:'Catastrofizarea în prevenția consumului de droguri le scade atractivitatea.', v:false, e:'Riscă să le crească atractivitatea.'},
 {c:'s07', s:'Evenimentele fericite pot genera stres (eustres).', v:true},
 {c:'s07', s:'Interviul motivațional folosește confruntarea directă și argumentarea insistentă.', v:false},
 {c:'s07', s:'Anonimatul face ca neajutorarea victimei să fie mai accentuată în cyberbullying.', v:true},
 {c:'s07', s:'Conflictele interpersonale se rezolvă mai ușor după soluționarea celor intrapersonale.', v:true}
);

/* ---- content/capitole/s08.js ---- */
/* CAPITOLUL VIII (Specialitate) – Managementul clasei de elevi */
CAPITOLE.push({id:'s08', parte:'Tematica de specialitate', nr:'VIII', emoji:'🏫', scurt:'Managementul clasei, CES',
titlu:'Managementul clasei de elevi. Incluziunea (CES, TSA, ADHD, TSI)',
sectiuni:[
{titlu:'1. Managementul clasei – delimitări', puncte:[
 '**Managementul educațional** = la nivelul întregului sistem/instituții; **managementul clasei** = coordonarea resurselor umane, instrucționale și materiale din clasă pentru eficiența actului didactic (componentă a celui educațional).',
 'R. Iucu: domeniu care studiază dimensiunile clasei – **ergonomică, psihologică, psihosocială, normativă, relațională, operațională, creativă (inovatoare)** – pentru intervenții prin „microdecizii educaționale”.',
 '**Ergonomică**: mobilier (simplitate, funcționalitate, modularitate), vizibilitate, pavoazare.',
 '**Psihologică**: capacitatea de muncă – nominală, funcțională, disponibilă, auxiliară; capacitatea de învățare.',
 '**Socială**: clasa ca grup – mărime (ideal 20–22), interacțiune, scopuri, structură, coeziune, **sintalitate** (personalitatea grupului), lideri formali și informali.',
 '**Normativă**: norme **explicite** (prescrise) și **implicite** (create de viața grupului); cultura implicită **proșcoală** vs **antișcoală**.',
 '**Inovatoare**: schimbarea, învingerea rezistenței la schimbare.']},
{titlu:'2. Prevenirea și rezolvarea situațiilor critice', puncte:[
 'Reguli comunicate clar la începutul anului: puține, simple, pe comportamente specifice, discutate, cu consecințe și recompense precizate; o parte stabilite împreună cu elevii.',
 'Organizarea clasei; cunoașterea elevilor (respect prin atenție).',
 '**Metode active**: 80% dintre problemele de disciplină se datorează metodelor ineficiente; ordinea se menține prin implicarea elevilor.',
 'Rezolvarea imediată: comunicare asertivă („Mi-ar plăcea să…”), **controlul proximității**, controlul vocii și vizual.',
 '**Modificarea comportamentală**: modelul A-B-C (**antecedente – comportament – consecințe**); monitorizarea (zi, moment, comportament, consecințe); analiza funcțională (formă, frecvență, durată, intensitate, latență).',
 '**Întăririle** (cresc frecvența): obiectuale, simbolice, activități, sociale, puncte; aplicate imediat, cu motivul precizat, consecvent; programe pe bază de rată (fixă/variabilă) sau de intervale.',
 '**Pedepsele** (scad frecvența): imediate, calme, în particular, precedate de avertisment, pe comportament nu pe persoană; **fără pedepse corporale**.',
 '**Modelarea**, **contractul comportamental** (profesor–părinte–consilier–elev: comportamentul dorit, cel nedorit, consecințele), **prompterul**, **ghidajul** (fizic, verbal, prin întrebări).']},
{titlu:'3. Integrare, incluziune, CES', puncte:[
 '**Integrarea** (anii ’70–’90): reacție la segregare – includerea copiilor cu dizabilități/CES în școlile de masă; integrarea e precedată de **adaptare**.',
 'U. Șchiopu (citată de A. Gherguț): integrarea = cuprinderea unui element într-un întreg, cu care interacționează.',
 '**Incluziunea** (din anii ’90; UNESCO „Educație pentru toți”, 1990): școala se transformă ca să răspundă diversității tuturor copiilor (dizabilități, dificultăți de învățare, medii defavorizate, instituționalizați).',
 'Incluziunea înseamnă: valorizarea egală a tuturor; creșterea participării; eliminarea barierelor pentru toți; diferențele ca **resursă**; dreptul la educație în propria localitate; parteneriat cu familia și comunitatea.',
 '**CES** = spectru larg de dificultăți (de la deficiențe profunde la tulburări de învățare), accent pe dimensiunea psihopedagogică a nevoilor (E. Bonchiș); îl plasează pe copil într-o stare de dificultate și îi pot induce sentiment de inferioritate (A. Gherguț).',
 'Termeni înrudiți: nevoi speciale/excepționale, nevoi sociale, persoană în dificultate.']},
{titlu:'3. Elevii cu TSA (tulburări din spectrul autist)', puncte:[
 'Dificultăți: interacțiunea socială, comunicarea, comportamentul stereotip; reglare emoțională, particularități ale gândirii.',
 'Dificultăți școlare: schimbări imprevizibile de orar, nevoia de timp suplimentar și la tranziții, experiențe senzoriale intense (clasa zgomotoasă).',
 'Forme de școlarizare: clasă obișnuită (cu/fără însoțitor), grupuri mici, clase speciale integrate, școală specială, acasă, centre rezidențiale.',
 'Beneficii ale integrării cu elevi tipici: ameliorarea interacțiunii sociale, generalizarea comportamentelor sociale. Riscuri: victimizare, excludere, anxietate, depresie.',
 'Comorbidități: **ADHD** (30–50%), tulburări anxioase (11–84%), depresie (10–53%, atipică – afect plat, iritabilitate; mai ales în Asperger).',
 'Rolul consilierului/profesorului: **construirea relației** (recompensarea comportamentelor adecvate, activități agreate); **adaptarea mediului** (tranziție prin joc); managementul comportamentelor înaintea procesului cognitiv; **explicarea clară a regulilor** (deficit de teoria minții – pictograme, orar vizual); **zona de confort**; **pauze** anticipate (≠ time-out); prevenirea bullyingului; abordarea refuzului școlar; colaborarea cu echipa multidisciplinară.']},
{titlu:'3. Elevii cu ADHD', puncte:[
 'ADHD = tulburare de **neurodezvoltare**: deficit de atenție, dezorganizare și/sau hiperactivitate-impulsivitate; 5–7% dintre copii; băieții – mai des hiperactivi-impulsivi, fetele – mai des neatente.',
 'Tratament optim: medicație + ajustări educaționale + intervenții psihosociale consecvente acasă și la școală.',
 '**Ajustări educaționale** (aceleași standarde, circumstanțe preferențiale): ale **prezentării**, ale **răspunsului** (examen oral, timp suplimentar), de **orar**, ale **spațiului**.',
 'Strategii: instrucțiuni directe, scurte, reformulate de elev; **meditații de la colegi** (același gen, rezultate mai bune); sarcinile grele **dimineața**; noutate și stimulare variată; structură, rutină, reguli afișate; automonitorizare; ritm propriu; alegerea sarcinilor; **pauze de mișcare**; responsabilități (videoproiector, tabla); așezare lângă profesor, departe de ferestre.',
 'Intervenții comportamentale: **pe antecedente** (prevenție prin mediu) și **pe consecințe**: **programe cu jetoane** (token economy), suspendarea întăririlor, **contractul comportamental**, extinderea programului acasă, **rapoarte zilnice** școală–familie.',
 '**Analiza funcțională**: ce câștig îi aduce comportamentul (atenția profesorului/colegilor, evitarea sarcinii) → oferă același câștig pentru comportamente adecvate (atenție când lucrează, ignorare când se abate).',
 'Jetoane: sub 9 ani – tangibile (abțibilduri); mai mari – puncte pe card; standarde inițial ușor de atins; schimbarea în privilegii zilnic; rărirea treptată. **Costul răspunsului** = retragerea de puncte (cu grijă, într-o atmosferă caldă).',
 'Intervenții multimodale: **Challenging Horizons Program (CHP)** – after-school sau mentorat; dezvoltă abilități academice, interpersonale, sportive, mentorat + întâlniri lunare cu părinții.']},
{titlu:'3. Tulburările specifice de învățare (TSI)', puncte:[
 'Criterii: dificultăți persistente (citire, scriere, calcul) cel puțin 6 luni, performanțe neașteptat de scăzute, debut în anii școlari, nu se explică prin alte cauze.',
 'Terminologie: „tulburare de învățare” (DSM-4), „tulburare specifică de învățare” (DSM-5), „tulburare specifică de dezvoltare a abilităților școlare” (ICD-10). Primare vs secundare (cu o cauză evidentă).',
 '**Dislexia**: dificultăți de recunoaștere a cuvintelor, decodare deficitară; problema-cheie – corespondența **fonem–grafem**.',
 '**Disgrafia**: afectarea calității scrisului (litere, gramatică, punctuație, organizare), fără deficit neurologic sau intelectual.',
 '**Discalculia**: deficit specific al abilităților aritmetice.',
 'Intervenții în dislexie: reeducare logopedică (în România cea mai frecventă); **terapia Meixner** (asociația triplă: vorbire–cuvânt scris–cuvânt citit); antrenarea atenției vizuale; procesare auditivă temporală (Tallal, FastForWord); stimulare emisferică; PASS Remedial Program; intervenții fonologice și metafonologice; metoda Tomatis, semiofonia (lexifon); repetarea cuvintelor; strategii de comprehensiune.',
 'Disgrafie: grafoterapie (motorie), intervenție logopedică; cele mai eficiente – autoreglarea și monitorizarea erorilor, scrisul în colaborare, scopuri concrete.',
 'Discalculie: intervenție individualizată – abilități numerice de bază, reprezentări numeric-spațiale, raționament aritmetic.']}
]});

CARDURI.push(
 {c:'s08', q:'Dimensiunile managementului clasei (R. Iucu)', a:'Ergonomică, psihologică, psihosocială, normativă, relațională, operațională, creativă/inovatoare.'},
 {c:'s08', q:'Ce este sintalitatea?', a:'„Personalitatea” grupului – trăsăturile care caracterizează clasa ca întreg.', term:'Sintalitatea', short:'personalitatea unui grup'},
 {c:'s08', q:'Norme explicite vs implicite în clasă', a:'- **Explicite:** prescrise, cunoscute, clar exprimate\n- **Implicite:** create de viața în comun a grupului'},
 {c:'s08', q:'Ce procent din problemele de disciplină se datorează metodelor ineficiente?', a:'Aproximativ **80%**. Ordinea se menține prin implicarea activă a elevilor.'},
 {c:'s08', q:'Cele trei componente ale unui comportament (modificare comportamentală)', a:'- Antecedentele\n- Comportamentul propriu-zis\n- Consecințele'},
 {c:'s08', q:'Reguli de aplicare a pedepselor', a:'- imediat\n- calm, în particular\n- precedată de avertisment\n- criticat comportamentul, nu persoana\n- fără pedepse corporale'},
 {c:'s08', q:'Ce este contractul comportamental?', a:'Înțelegere scrisă între profesor, părinte, consilier și elev care precizează comportamentul dorit, comportamentele nedorite și consecințele (întăriri și sancțiuni).', term:'Contractul comportamental', short:'înțelegere scrisă despre comportamente și consecințe'},
 {c:'s08', q:'Integrare vs incluziune', a:'- **Integrarea:** copilul cu CES e adus în școala de masă și trebuie să se adapteze\n- **Incluziunea:** școala se transformă ca să răspundă diversității tuturor copiilor', term:'Incluziunea', short:'școala se adaptează diversității tuturor elevilor'},
 {c:'s08', q:'Ce sunt CES?', a:'Cerințe educaționale speciale – un spectru larg de dificultăți (de la deficiențe profunde la tulburări de învățare) care cer școlarizare adaptată.', term:'CES', short:'cerințe educaționale speciale'},
 {c:'s08', q:'Sfaturi pentru lucrul cu un elev cu TSA', a:'- construirea relației\n- adaptarea mediului (tranziție prin joc)\n- managementul comportamentelor\n- reguli explicite, pictograme\n- zona de confort\n- pauze anticipate\n- prevenirea bullyingului\n- abordarea refuzului școlar'},
 {c:'s08', q:'De ce trebuie explicate explicit regulile unui elev cu TSA?', a:'Din cauza deficitelor de **teoria minții** – nu ne putem baza că „ar trebui să știe”.'},
 {c:'s08', q:'Prevalența ADHD și diferențele de gen', a:'5–7% dintre copii; băieții mai des hiperactivi-impulsivi, fetele mai des neatente.'},
 {c:'s08', q:'Cele 4 categorii de ajustări educaționale (ADHD)', a:'- ale prezentării\n- ale răspunsului\n- de orar\n- ale spațiului'},
 {c:'s08', q:'Când se programează sarcinile solicitante pentru elevii cu ADHD?', a:'În **prima parte a zilei** – concentrarea scade pe parcursul zilei școlare.'},
 {c:'s08', q:'Ce este analiza funcțională a comportamentului?', a:'Identificarea beneficiului pe care i-l aduce comportamentul (atenție, evitarea sarcinii) și oferirea aceluiași beneficiu pentru comportamente adecvate.', term:'Analiza funcțională', short:'ce „câștigă” elevul prin comportamentul problematic'},
 {c:'s08', q:'Ce este „costul răspunsului”?', a:'Retragerea unor puncte/privilegii pentru comportamente nedorite – complementar programului cu jetoane; se aplică consecvent și cu empatie.', term:'Costul răspunsului', short:'retragerea de puncte pentru comportamente nedorite'},
 {c:'s08', q:'Dislexie, disgrafie, discalculie', a:'- **Dislexia:** citire – recunoașterea cuvintelor, corespondența fonem–grafem\n- **Disgrafia:** calitatea scrisului\n- **Discalculia:** abilitățile aritmetice'},
 {c:'s08', q:'Ce este terapia Meixner?', a:'Metodă fonetico-analitico-sintetico-logopedică pentru dislexie, bazată pe **asociația triplă**: vorbire – cuvânt scris – cuvânt citit (auditiv, vizual, tactil).'}
);

GRILE.push(
 {c:'s08', q:'Componenta managementului clasei care se ocupă de mobilier și vizibilitate:', o:['Normativă','Ergonomică','Psihologică','Inovatoare'], r:1},
 {c:'s08', q:'Paradigma „Educație pentru toți” a fost lansată de UNESCO în:', o:['1970','1990','2000','2010'], r:1},
 {c:'s08', q:'Ce procent dintre copiii cu TSA îndeplinesc și criteriile ADHD?', o:['5%','10%','30–50%','90%'], r:2},
 {c:'s08', q:'Pentru copiii sub 9 ani, într-un program cu jetoane sunt preferate:', o:['Puncte pe card','Recompense tangibile (abțibilduri)','Note','Bani'], r:1},
 {c:'s08', q:'Colegul care oferă meditații unui elev cu ADHD ar trebui să fie:', o:['De gen opus','De același gen, cu rezultate mai bune','Mai mic','Oricine'], r:1},
 {c:'s08', q:'Problema-cheie în dislexie este corespondența:', o:['Cifră–cantitate','Fonem–grafem','Cuvânt–imagine','Literă–culoare'], r:1},
 {c:'s08', q:'„Zona de confort” pentru elevul cu TSA este:', o:['O formă de pedeapsă (time-out)','Un spațiu de retragere când stimulii devin prea intenși','O recompensă','Banca din spate'], r:1},
 {c:'s08', q:'Pedeapsa trebuie să vizeze:', o:['Persoana','Comportamentul','Familia','Clasa'], r:1},
 {c:'s08', q:'Cultura implicită „antișcoală” presupune:', o:['Valori conforme școlii','Valori nonconformiste, deviante','Note mari','Implicare'], r:1},
 {c:'s08', q:'Challenging Horizons Program se adresează elevilor cu:', o:['TSA','ADHD','Dislexie','Deficiență de auz'], r:1}
);

AF.push(
 {c:'s08', s:'Managementul clasei este o componentă a managementului educațional.', v:true},
 {c:'s08', s:'Pedepsele corporale sunt acceptate dacă sunt aplicate imediat.', v:false},
 {c:'s08', s:'Integrarea este precedată de adaptare.', v:true},
 {c:'s08', s:'Incluziunea vizează doar copiii cu dizabilități.', v:false, e:'Vizează toți copiii, inclusiv din medii defavorizate.'},
 {c:'s08', s:'Pauzele pentru elevul cu TSA trebuie acordate după apariția crizei.', v:false, e:'Înainte de apariția comportamentelor indezirabile.'},
 {c:'s08', s:'Ajustările educaționale pentru ADHD scad standardele de performanță.', v:false, e:'Mențin aceleași standarde, dar creează circumstanțe preferențiale.'},
 {c:'s08', s:'Simpla monitorizare a unui comportament poate duce uneori la ameliorarea lui.', v:true},
 {c:'s08', s:'Fetele cu ADHD manifestă mai frecvent simptome de neatenție.', v:true},
 {c:'s08', s:'Disgrafia se datorează unui deficit intelectual.', v:false}
);

/* ---- content/capitole/s09.js ---- */
/* CAPITOLUL IX (Specialitate) – Consilierea carierei */
CAPITOLE.push({id:'s09', parte:'Tematica de specialitate', nr:'IX', emoji:'🧭', scurt:'Consilierea carierei',
titlu:'Consilierea carierei',
sectiuni:[
{titlu:'1. Identitate vocațională, carieră, profesie, ocupație', puncte:[
 '**Identitatea** = conștiința clară a individualității, din integrarea percepției de sine cu percepția așteptărilor celorlalți; după Erikson include caracteristici, talente, identificări, roluri. Se cristalizează mai ales în adolescență (decizii despre cursuri, facultate, relații etc.).',
 '**Identitatea vocațională** = cunoașterea propriilor interese, valori, abilități + preferința pentru anumite activități și medii de muncă; etalonul maturizării adolescentului.',
 '**Dezvoltarea carierei** = creștere cantitativă și calitativă a experienței; cuprinde autocunoașterea, formarea, rolurile, planificarea evenimentelor vieții.',
 'Plan de carieră: Care sunt obiectivele mele? Ce pași? Cine mă poate sprijini? Ce rol are fiecare? Pași practici: explorarea oportunităților (anunțuri, târguri, candidatură spontană), lista firmelor, alegerea abordării (personal, telefonic, e-mail), perseverența, urmărirea rezultatelor.',
 '**Cariera** = traseul parcurs în exercitarea unor activități care cer pregătire, concretizate în competențe atestate; succesiune de roluri, ocupații, funcții.',
 'Belkin (via Al. I. Dumitru): **slujba** – muncă pentru bani, la cererea altuia; **cariera** – succesiune ordonată de slujbe, ca rezultat al performanțelor; **munca/vocația** – ce facem din plăcere, „chemare”.',
 '**Profesia** = activitate specializată, cu pregătire generală și specializată, certificată (calificarea).',
 '**Ocupația** = desfășurarea concretă a unei munci asociate unei profesii, la un loc de muncă, pentru venit (pregătire, unelte, operații, program, salarizare, norme).']},
{titlu:'2. Factori în alegerea carierei', puncte:[
 'Principalii factori: **familia, școala, grupul de prieteni**.',
 'Tipuri de alegeri vocaționale (M. Jigău): orientate social (prestigiu), altruiste, egoiste/autonome (confort, câștig), reactive/frustrante (opuse dorinței celor cu care e în conflict), conformiste, hedonice/narcisiste.',
 '**Familia**: influență adesea decisivă; părinții își supraapreciază copiii și le impun trasee nepotrivite → decizie dificilă, adeziune redusă. Criteriile părinților: siguranța profesiei, durata studiilor, avantajele materiale, poziția socială, riscurile, tradiția familiei, supraprotecția.',
 'Ce trebuie să facă părinții: să cunoască temerile copilului, să sugereze fără a impune, să respecte aspirațiile, să se informeze, să evite stereotipurile, să ofere suport afectiv, să-l îndrume spre un consilier.',
 '**Școala** – trei niveluri: organizarea sistemului, conținutul învățământului, acțiunile specifice de orientare. Serviciile oferite în școală au adresabilitate și exactitate mai mari.',
 'Aspirațiile profesionale = sinteza interiorizării valorilor, conduitelor dezirabile și a nevoii de succes – obiectiv pe termen lung.',
 '**Grupul de prieteni**: suport emoțional, socializare; dezaprobarea agresivă a părinților crește adeziunea la grup.']},
{titlu:'3. Cariera din perspectiva psihologiei pozitive', puncte:[
 '**M. Seligman** – trei arii: emoții pozitive, trăsături pozitive, instituții pozitive.',
 '**Broaden-and-Build** (Fredrickson): emoțiile pozitive lărgesc registrul de reacții și construiesc resurse pe termen lung.',
 '**Flow-ul** (Csikszentmihalyi): absorbirea totală într-o activitate interesantă care valorifică abilitățile; condiții – fără focalizare pe sine, sentimentul controlului, motivație intrinsecă.',
 '**Hardiness** (Kobasa): robustețe psihologică – atitudini și strategii care transformă stresul în oportunitate.',
 'Inventarul **VIA** (Values in Action) – 24 de puncte forte de caracter (curaj, perseverență, iertare, înțelepciune…).',
 'Modele de organizare a muncii: **caracteristicile muncii** (varietate, semnificația sarcinii, autonomie, feedback) și **cerințe–control**.',
 'Leadership pozitiv/transformațional: motivație inspirațională, stimulare intelectuală, considerație individuală.',
 'Seligman – trei căi spre fericire: **viața plăcută** (emoții pozitive), **viața angajată**, **viața cu sens** → împreună: viața deplină.']},
{titlu:'4. TIC în consilierea carierei', puncte:[
 'Denumiri: e-counseling, consiliere online, cybercounseling.',
 'Avantaje: autonomia clientului, stocarea și regăsirea datelor, învățare prin accesare repetată, flexibilitate.',
 'Dezavantaje: pasivitatea receptării, **depersonalizarea comunicării**, perisabilitatea informațiilor, sensibilitate redusă la diferențele individuale.',
 'Resurse TIC (clasificare europeană): **autoapreciere**, **conștientizarea oportunităților** (baze de date), **învățarea luării deciziilor** (potrivirea profilului cu oportunitățile), **învățarea tranziției** (CV, plan de acțiune, interviu).',
 'Două utilizări: TIC ca mediu de interacțiune consilier–client (e-mail, chat, videoconferință) și ca resursă în procesul decizional.']},
{titlu:'5. Metode și tehnici ale consilierii carierei', puncte:[
 'Consilierea începe cu stabilirea obiectivelor (unde se va ajunge) și a căilor (ce trebuie făcut).',
 'Metode: **observația** (un singur subiect în focar, criterii, situații reale, repetare, corelare cu alte date), **autobiografia**, **chestionarul** (de interese, valori), **interviul** structurat, **tehnicile sociometrice**, probele practice.',
 '**Metoda „umbrei”**: elevul însoțește o zi (8 ore) un profesionist la locul de muncă, apoi relatează colegilor.',
 '**Sortarea cardurilor**: cartoane cu profesii în categorii „Nu le-aș alege / Le-aș alege / Indiferente”, apoi după criterii proprii.',
 '**Fișa psihopedagogică**: aspecte fizice și de sănătate, integrare școlară și socială, caracteristici psihologice, recomandări, caracterizare generală.',
 'Testele – doar când e nevoie: decalaj aspirații–resurse, indecizie, profesii cu aptitudini speciale.',
 '**Kuder** (Preference Record): persoanele cu aceeași profesie au interese asemănătoare.',
 '**Holland – RIASEC**: Realist, Investigativ, Artistic, Social, Întreprinzător, Convențional; cod personal de 3 litere. SDS (Self-Directed Search).',
 '**GATB**: baterie pentru 9 factori aptitudinali (G, V, N, S, P, Q, K, F, M). **DAT**: 8 subteste. **BBT** (Achtnich – testul fotografiilor profesiilor, inspirat de Szondi; 8 nevoi de bază). **Strong** Vocational Interest Blank. **NEO-PI** (Costa și McCrae). **Inventarul canadian de interese ocupaționale** (5 factori bipolari).',
 'Criterii de alegere a testelor: **validitate** (măsoară ce susține), **fidelitate** (stabilitate în timp), cost, timp, scorare, etaloane, formarea necesară, utilitate.']},
{titlu:'6. Marketing personal', puncte:[
 'Marketingul personal = pregătirea pentru contactul cu angajatorii și dezvoltarea abilităților de prezentare.',
 '**Scrisoarea de intenție**: „carte de vizită”, citită înaintea CV-ului; ~1 pagină A4, fără greșeli, atitudine pozitivă; interesul pentru post/firmă, punctele forte, ce poate aduce candidatul, disponibilitatea pentru interviu.',
 '**CV**: cronologic (invers cronologic, accent pe experiență), funcțional (abilități și realizări), biografic; Europass. Reguli: 1–2 pagini, fără greșeli, fapte relevante, fără date fictive, cel mai înalt nivel de studii primul.',
 '**Portofoliul**: colecție de produse ale elevului; evaluare longitudinală, cu informații despre progres.',
 '**Interviul de angajare**: formal (structurat, comisie) sau informal; etape – întrebări de contact, de prezentare, de detaliu, întrebările candidatului, încheiere. ~60% din întrebări privesc studiile, abilitățile, experiența. Pregătire: dosar, gândire pozitivă, ținută, **limbaj nonverbal**.']},
{titlu:'6. Decizia de carieră', puncte:[
 'Decizia de carieră = selectarea unei alternative din mai multe; dificultăți – presiunea timpului, discrepanța cerințe–abilități, prea multe/puține alternative, informații insuficiente, presiuni sociale.',
 '**Stiluri decizionale (A. Băban)**: **planificat** (rațional), **agonizant** („Nu mă pot decide”), **impulsiv** („Decid acum, mă gândesc mai târziu”), **intuitiv** („Simt că așa e”), **delăsător** (amânare), **fatalist** („Ce va fi, va fi”), **compliant** („Dacă crezi că e bine…”), **paralizat** („Știu că trebuie, dar nu pot”).',
 'Autocunoaștere: interese, valori, personalitate, aptitudini (Fleishman).',
 'Etapele deciziei: identificarea deciziei și a alternativelor; obținerea informațiilor; evaluarea alternativelor (consecințe, costuri–beneficii pentru sine și pentru alții); planul de implementare.',
 'Indecizia: **de dezvoltare** (normală, cu comportament explorator) vs **indecisivitate** (anxietate, dependență de alții, amânare, lipsă de încredere).',
 'Tehnici: informații multiple și verificate, alternative clare, timp suficient, acceptarea riscului, „nu există alternativă ideală”, recompensează-te pentru deciziile bune.']},
{titlu:'7. Educația permanentă', puncte:[
 'Învățarea pe tot parcursul vieții presupune independența în gestionarea resurselor; la vârsta adultă – autoinstruire și autoeducație.',
 'Vezi și capitolul V (dimensiuni, Memorandumul UE).']}
]});

CARDURI.push(
 {c:'s09', q:'Ce este identitatea vocațională?', a:'Combinația dintre cunoașterea propriilor interese, valori, abilități și preferința pentru anumite activități, stiluri de interacțiune și medii de muncă.', term:'Identitatea vocațională', short:'interese, valori, abilități + preferințe de muncă'},
 {c:'s09', q:'Slujbă vs carieră vs muncă/vocație (Belkin)', a:'- **Slujba:** activitate pentru bani, la cererea altuia\n- **Cariera:** succesiune ordonată de slujbe, ca urmare a performanței\n- **Munca/vocația:** ce faci din plăcere, „chemare”'},
 {c:'s09', q:'Tipuri de alegeri vocaționale (Jigău)', a:'Orientate social, altruiste, egoiste/autonome, reactive/frustrante, conformiste, hedonice/narcisiste.'},
 {c:'s09', q:'Cum ar trebui să-și sprijine părinții copilul în alegerea carierei?', a:'- să-i cunoască temerile și succesele\n- să sugereze, nu să impună\n- să-i respecte aspirațiile\n- să fie informați\n- să evite stereotipurile\n- să ofere suport afectiv\n- să-l îndrume spre un consilier'},
 {c:'s09', q:'Cele trei arii ale psihologiei pozitive (Seligman)', a:'- Emoții pozitive\n- Trăsături pozitive\n- Instituții pozitive'},
 {c:'s09', q:'Ce este starea de flux (flow)?', a:'Absorbirea totală într-o activitate interesantă care valorifică și dezvoltă abilitățile (Csikszentmihalyi).', term:'Flow-ul', short:'absorbire totală într-o activitate (Csikszentmihalyi)'},
 {c:'s09', q:'Teoria Broaden-and-Build', a:'Emoțiile pozitive lărgesc registrul de reacții cognitive și comportamentale și construiesc resurse personale pe termen lung.'},
 {c:'s09', q:'Ce este „hardiness”?', a:'Robustețea/rezistența psihologică (Kobasa) – atitudini și strategii care transformă stresul în oportunitate de creștere.', term:'Hardiness', short:'robustețe psihologică (Kobasa)'},
 {c:'s09', q:'Cele trei căi spre fericire (Seligman)', a:'- Viața plăcută\n- Viața angajată\n- Viața cu sens\n→ Viața deplină'},
 {c:'s09', q:'Resurse TIC pentru orientare (clasificarea europeană)', a:'- Autoapreciere\n- Conștientizarea oportunităților\n- Învățarea luării deciziilor\n- Învățarea tranziției'},
 {c:'s09', q:'Ce este metoda „umbrei”?', a:'Elevul însoțește o zi întreagă (8 ore) o persoană dintr-o profesie, o observă la locul de muncă și apoi povestește colegilor.', term:'Metoda „umbrei”', short:'o zi alături de un profesionist la locul de muncă'},
 {c:'s09', q:'Tipurile Holland (RIASEC)', a:'- **R**ealist\n- **I**nvestigativ\n- **A**rtistic\n- **S**ocial\n- **E** – Întreprinzător\n- **C**onvențional', term:'Modelul Holland', short:'RIASEC – tipuri de personalitate vocațională'},
 {c:'s09', q:'Tipul Holland care preferă să ajute și să învețe oamenii', a:'Tipul **Social (S)**.'},
 {c:'s09', q:'Ce este BBT?', a:'Testul fotografiilor profesiilor (Berufsbilder Test) al lui M. Achtnich, inspirat de Szondi; identifică nevoi de bază prin fotografii cu persoane la muncă.'},
 {c:'s09', q:'Validitate vs fidelitate', a:'- **Validitatea:** testul măsoară ce susține că măsoară\n- **Fidelitatea:** stabilitatea în timp a rezultatelor'},
 {c:'s09', q:'Tipuri de CV', a:'- Cronologic (invers cronologic, experiență)\n- Funcțional (abilități, realizări)\n- Biografic\n- Europass'},
 {c:'s09', q:'Ce trebuie să conțină o scrisoare de intenție?', a:'Interesul pentru post și firmă, punctele forte, cum poate contribui candidatul, disponibilitatea pentru interviu; ~1 pagină, fără greșeli, ton pozitiv.'},
 {c:'s09', q:'Stilurile decizionale (A. Băban)', a:'Planificat, agonizant, impulsiv, intuitiv, delăsător, fatalist, compliant, paralizat.'},
 {c:'s09', q:'Ce exprimă stilul „compliant”?', a:'Acceptarea deciziei altuia în locul propriei decizii: „Dacă crezi că e bine…”', term:'Stilul compliant', short:'„Dacă crezi că e bine…” – decide altul'},
 {c:'s09', q:'Indecizie de dezvoltare vs indecisivitate', a:'- **De dezvoltare:** etapă normală, comportament explorator\n- **Indecisivitate:** anxietate, dependență de alții, amânare, lipsă de încredere'}
);

GRILE.push(
 {c:'s09', q:'Codul personal Holland are:', o:['2 litere','3 litere','5 litere','6 litere'], r:1},
 {c:'s09', q:'Tipul Holland atras de activități nestructurate, creative:', o:['Realist','Convențional','Artistic','Întreprinzător'], r:2},
 {c:'s09', q:'Conceptul de „flow” aparține lui:', o:['Seligman','Csikszentmihalyi','Kobasa','Holland'], r:1},
 {c:'s09', q:'„Ce va fi, va fi” – stilul decizional:', o:['Intuitiv','Fatalist','Agonizant','Impulsiv'], r:1},
 {c:'s09', q:'„Nu mă pot decide” – stilul decizional:', o:['Agonizant','Planificat','Delăsător','Compliant'], r:0},
 {c:'s09', q:'Un dezavantaj al TIC în consiliere este:', o:['Autonomia clientului','Depersonalizarea comunicării','Stocarea datelor','Flexibilitatea'], r:1},
 {c:'s09', q:'Testele psihologice în consilierea carierei se folosesc:', o:['Mereu, la toți elevii','Doar când e nevoie (decalaj, indecizie, aptitudini speciale)','Niciodată','Doar la gimnaziu'], r:1},
 {c:'s09', q:'CV-ul cronologic începe cu:', o:['Prima activitate din viață','Activitățile cele mai recente','Hobby-urile','Fotografia'], r:1},
 {c:'s09', q:'Robustețea psihologică (hardiness) a fost introdusă de:', o:['Kobasa','Seligman','Super','Kuder'], r:0},
 {c:'s09', q:'Principalii factori în decizia vocațională sunt:', o:['Familia, școala, prietenii','Doar notele','Doar salariul','Doar testele'], r:0}
);

AF.push(
 {c:'s09', s:'Scrisoarea de intenție este citită de angajator după CV.', v:false, e:'E citită înaintea CV-ului.'},
 {c:'s09', s:'Dezaprobarea agresivă a grupului de prieteni de către părinți crește adeziunea copilului la grup.', v:true},
 {c:'s09', s:'Serviciile de orientare din școală au o rată de exactitate mai mare decât cele din afara școlii.', v:true},
 {c:'s09', s:'Viața plăcută singură garantează fericirea de lungă durată.', v:false},
 {c:'s09', s:'Fidelitatea unui test se referă la stabilitatea în timp a rezultatelor.', v:true},
 {c:'s09', s:'Indecizia de dezvoltare este o etapă normală a procesului decizional.', v:true},
 {c:'s09', s:'În CV e acceptabil să adaugi date fictive, dacă sunt convingătoare.', v:false},
 {c:'s09', s:'Există întotdeauna o alternativă ideală în deciziile de carieră.', v:false}
);

/* ---- content/capitole/s10.js ---- */
/* CAPITOLUL X (Specialitate) – Consilierea familiei */
CAPITOLE.push({id:'s10', parte:'Tematica de specialitate', nr:'X', emoji:'🏡', scurt:'Consilierea familiei',
titlu:'Consilierea familiei',
sectiuni:[
{titlu:'1. Tipuri de familii', puncte:[
 '**Familia nucleu (nucleară)** = doi adulți de sex opus, într-o relație aprobată de societate, cu copiii proprii sau adoptați. Poate fi: **de orientare** (familia în care te naști, statut de fiu/fiică) sau **de procreare** (familia pe care o creezi prin căsătorie, statut de soț/părinte).',
 '**Familia extinsă (consangvină)** = două sau mai multe familii nucleare unite prin legătura părinte–copil (frați, bunici, unchi, mătuși, veri).',
 '**Familia mixtă (compusă)** = căsătoria dintre doi părinți (singuri sau divorțați), cu copii proprii sau comuni. Poate fi: **simplă compusă** (unul aduce copii dintr-o căsătorie anterioară), **dublu compusă** (amândoi aduc copii), **cuplu compus complex** (copii aduși + copii comuni).',
 'Riscuri în familia compusă: intoleranță între frații vitregi și cei naturali, relație tensionată cu părintele vitreg; copilul „își împarte” afectiv părintele, renunță la visul reunirii părinților și poate deveni ostil sau poate sabota noul mariaj.',
 '**Familia monoparentală** = structură asimetrică, un părinte + copil/copii (deces, divorț, abandon, adopție de către o singură persoană, naștere în afara căsătoriei). Cele mai multe provin din familii nucleare dezorganizate.',
 '**Coabitarea consensuală** = cuplu fără căsătorie. **Familia poligamă** = două sau mai multe familii unite prin legături maritale (în unele societăți).',
 'Rolurile: mama începe educația (căldura afectivă, deprinderile), tatăl preia mai mult pe măsură ce copilul crește. **Bunicii** ajută când rămân colaboratori ai părinților; în exces de zel le știrbesc autoritatea.',
 'De ce contează pentru consilier: fiecare structură familială creează un **climat educativ** specific; cunoașterea tipului de familie ajută intervenția.'
], retine:'Nucleară (de orientare / de procreare), extinsă, mixtă (simplă, dublu compusă, complexă), monoparentală, coabitare consensuală.'},
{titlu:'2. Stiluri parentale (D. Baumrind)', puncte:[
 '**Stilul de parenting** = pattern general de creștere a copilului, definit prin combinația de **căldură** și **control**. În practică nu există stiluri pure, ci stiluri **predominante**. Depind de personalitatea părintelui, modelul educativ, cultură, tradiții, condiții sociale, structura familiei, profesie.',
 '**Căldura** (acceptare, receptivitate) = centrare pe copil, suport afectiv, încurajare, atenție la nevoile lui. **Controlul** (exigență) = comportamentele de disciplină impuse copilului.',
 '**Exigent (autoritativ)** = căldură ↑ + control ↑. Standarde înalte, explicate; control ferm într-o relație caldă. Copiii au stimă de sine ridicată, curiozitate, sunt prietenoși, populari, cooperanți și se descurcă bine la școală. Este stilul cu cele mai bune rezultate.',
 '**Autoritar** = control ↑ + căldură ↓. Reguli multe și stricte, amenințări, pedepse, frică. Copiii au competențe și responsabilitate moderate, sunt lipsiți de spontaneitate. Hiperprotecția transmite neîncredere: copiii ajung timizi și inhibați sau, invers, rebeli.',
 '**Permisiv (indulgent)** = căldură ↑ + control ↓. Puține reguli, inconsecvență, cedare la insistențe. Copiii sunt bine dispuși și vitali, dar au încredere scăzută în sine, sunt iresponsabili social, impulsivi, imaturi, dependenți și nu perseverează.',
 '**Neimplicat (neglijent)** = căldură ↓ + control ↓. Detașare emoțională, părintele e centrat pe sine. Rezultă atașament insecurizant, competență socială slabă și risc de consum de droguri, delincvență, probleme de sănătate psihică.',
 'Stilul exigent sprijină: **acceptarea de sine**, acceptarea celorlalți (toleranță, empatie), **autodisciplina** (autonomie, rezistență la presiunea grupului), **sentimentul de competență și control personal**, scopurile în viață, dezvoltarea personală.',
 'Etichetele puse copilului sunt „pietre legate de picioarele unui copil care trebuie să înoate”. Pedeapsa trebuie precedată de avertisment, fără sarcasm și fără ton ridicat.'
], retine:'Căldură × control: exigent (↑↑), autoritar (control↑), permisiv (căldură↑), neimplicat (↓↓).'},
{titlu:'3. Practici parentale pozitive', puncte:[
 'Fundamente teoretice: **teoria behavioristă** (Skinner: comportamentele întărite cresc ca frecvență, cele pedepsite sau ignorate scad), **teoria atașamentului** (Bowlby: atașamentul primar se formează între 0 și 3 ani; modelele interne de lucru prezic relațiile apropiate) și **teoria stilurilor parentale** (Baumrind).',
 '**Parentingul pozitiv** pune accent pe ce **pot face** părinții, nu pe ce nu trebuie să facă: întărește stima de sine, starea de bine și sentimentul de apartenență.',
 'Pe vârste: la preșcolar, îngrijire și răspuns la nevoile de bază; la școlar, monitorizare, așteptări comunicate clar, socializare proactivă (cresc autoreglarea); la adolescent (Steinberg): **acceptare și implicare, control comportamental, susținerea autonomiei psihologice**.',
 'Puncte forte ale caracterului legate de parentingul pozitiv: **urmărirea scopurilor** (eudaimonice = sens, autorealizare; hedonice = plăcere), **speranța**, **optimismul**, **autoeficacitatea** (Bandura: încrederea că poți realiza comportamentele necesare scopului; crește când primești sarcini realizabile, duse la capăt singur), **empatia, compasiunea și judecata morală**.',
 '**Model bidirecțional**: părintele modelează copilul, dar și copilul (de exemplu prin temperament dificil) modelează părintele. **Moderatori/mediatori**: optimismul, autocontrolul și empatia copilului.',
 'Concluzie: un stil **blând, dar ferm** și emoțiile pozitive exprimate în familie se asociază cu sănătatea mintală și adaptarea copiilor.'
], retine:'Parenting pozitiv = căldură + structură + autonomie; teorii: behavioristă, atașament, stiluri parentale.'},
{titlu:'4. Familia în criză', puncte:[
 '**Intervenția în criză** vizează rezolvarea problemelor interne și urgente care depășesc capacitatea de adaptare (deces, divorț, abandon, boală gravă) și alinarea suferinței. Seamănă cu consilierea, dar e mai profund legată de context.',
 '**Divorțul**, recomandări pentru părinți: divorțul nu se ține secret; vestea se dă **împreună**; copilul e asigurat că e iubit **întotdeauna**; nu se discută cu copilul greșelile celuilalt părinte. Semne de stres: la copiii mici, agresivitate sau retragere; la cei mai mari, scădere școlară și tulburări de comportament; mai târziu, probleme de relație și stimă de sine.',
 '**Decesul / doliul**: întâi negare și protest, apoi disperare (sensul vieții se clatină), apoi ieșirea din doliu în timp, cu sprijin. Copiii mici văd moartea ca temporară și reversibilă; între 5 și 9 ani o înțeleg, dar cred că nu li se va întâmpla lor.',
 'Semne de doliu complicat la copil: depresie prelungită, insomnie, lipsa poftei de mâncare, teama de a rămâne singur, comportament infantil prelungit, imitarea excesivă a celui decedat, dorința de a i se alătura, scăderea bruscă la școală sau refuzul școlii.',
 '**Abandonul**, cauze: dificultăți financiare, părinte singur, depresie postnatală, lipsa educației sexuale și a planificării familiale, dizabilitatea copilului, sarcină în urma violului, servicii de sprijin precare. **Prevenire**: centre de zi, planificare familială, consiliere pentru mamă/familie, asistenți sociali în maternități, personal instruit.',
 '**Abuzul de substanțe**: implicare comună (părinți, școală, elevi, autorități, comunitate), cu mesaj consistent. Dependența poate fi **psihologică** (nu poți funcționa fără substanță) sau **fizică** (corpul are nevoie de ea; lipsa duce la sevraj).',
 '**Bolile cronice**: program de management și consiliere (definirea bolii, echipa, întrebări-cheie, evaluarea dovezilor, beneficii/costuri, ghiduri clinice, sistem de măsurare).',
 '**Părinți plecați în străinătate**: sentiment de abandon, anxietate de separare, tulburări afective, compensare prin bani și cheltuieli, probleme școlare, introversie, abandon școlar. Se recomandă să nu plece ambii părinți și să existe **contact permanent**.'
], retine:'Divorț: vestea dată împreună, copilul iubit mereu, fără reproșuri despre celălalt. Doliu: negare → disperare → ieșire.'},
{titlu:'5. Strategii de consiliere în criză', puncte:[
 '**Deces în familia unui elev**: dirigintele sau consilierul anunță clasa cu sensibilitate. Urmează un cerc de discuție, cu participare liberă și întrebări pe bilețel: „Cum te-ai simțit când ai aflat?”, „Ai mai trăit așa ceva?”, „Cum ne comportăm acum ca și colegi?”, „Cum îl putem ajuta acum și când se întoarce?”.',
 'Reacțiile tinerilor la deces sunt diferite, chiar contradictorii: veselie exagerată, hiperactivitate, furie, apatie, dorința de a deveni una cu persoana decedată, idealizarea amintirii, negarea, regresii, pierderea trăită ca eliberare. Comportamentul poate fi **mascat**.',
 '**Copiii cu părinți divorțați**: se adaptează mai bine cei cu suport material, puține schimbări de mediu, imagine de sine pozitivă și părinți cu abilități de comunicare bune.',
 'Între 6 și 8 ani: tristețe, sentiment de abandon, anxietate, coșmaruri, conflict de loialitate, vinovăție, fantezii de reunire. Între 8 și 12 ani: predomină **furia**, care e îndreptată spre un părinte; apar simptome somatice și conflicte cu colegii. Adolescenții pot recurge la alcool sau droguri.',
 '**Obiectivele consilierului** cu acești elevi: **acceptarea** faptului că divorțul s-a întâmplat; ieșirea din conflictul părinților și **reîntoarcerea la propriile preocupări**; rezolvarea **furiei și a vinovăției**; acceptarea că divorțul e **permanent**. Consilierul lucrează și cu părinții, și cu profesorii.'
], retine:'Copii cu părinți divorțați: acceptare, ieșire din conflictul părinților, rezolvarea furiei și vinovăției, acceptarea permanenței.'},
{titlu:'6. Parteneriatul școală–familie', puncte:[
 '**Bariere în comunicarea profesor–părinți** (și corecturi): probleme de **ascultare** (profesorul vrea doar să informeze), **lipsa feedback-ului**, **feedback fals** (tăcerea părea acord), **rezistența la critică**, **percepția selectivă și subiectivitatea**, obținerea informației prin manipulare discretă, **ascultarea afectivă**, alegerea momentului și locului, **inadvertențele de limbaj** (jargon; soluția e un limbaj simplu, adaptat), **barierele culturale**.',
 'În discuția cu părintele: tact, atitudine de prieten, nu de șef. Se încep cu **aspectele pozitive**, apoi dificultățile și cauzele lor, apoi posibilitățile de dezvoltare și măsurile comune.',
 'De ce colaborează școala cu familia (raport CE): părinții sunt **juridic responsabili** de educație; școala e doar o parte a educației; atitudinea părinților influențează rezultatele și motivația; părinții și profesorii au dreptul să influențeze gestiunea școlară.',
 'Reproșuri aduse părinților: apatie, timiditate, ingerințe, preocupare excesivă pentru note, contacte limitate, conservatorism. Reproșuri aduse profesorilor: îi tratează pe părinți ca pe copii, decid autoritar, nu au pregătire pentru relația cu familia.',
 '**Asociațiile de părinți** pot funcționa ca grup de susținere, grup de cooperare (parteneri) sau grup de apărare a intereselor. Obiective: sensibilizarea părinților, informarea lor, formarea lor, reprezentarea lor.',
 'Teorii: a **profesionalismului** (serviciul făcut altora, competență, etică) și a **schimbului** (câștigul personal; profesorul câștigă statut și eficacitate).',
 '**Trei etape** ale relației școală–familie: **școala autosuficientă** (închisă, contacte rare și formale) → **incertitudinea profesională** (se recunoaște influența familiei, dar familia e acuzată) → **dezvoltarea încrederii mutuale** (părinții în consilii, cu rol decizional, iar cazurile dificile sunt tratate de specialiști). Tendința europeană: **contractul școală–familie**.',
 'Soluția ideală: **toți** profesorii au relații obișnuite cu familiile, iar consilierii și psihologii se ocupă de cazurile dificile și de vizitele în familie.'
], retine:'Etape: școala autosuficientă → incertitudine profesională → încredere mutuală (→ contract școală–familie).'},
{titlu:'7. Educația parentală', puncte:[
 '**Educația parentală**: în sens larg, programe, servicii și resurse pentru părinți și îngrijitori; în sens restrâns, programe care dezvoltă **abilitățile parentale**, înțelegerea dezvoltării copilului, reducerea stresului și modalități alternative de rezolvare a situațiilor dificile.',
 '**Beneficii**: părinții cunosc mai bine dezvoltarea și nevoile copilului, cunosc drepturile copilului, comunică mai bine și își ajustează așteptările, au atitudini responsive și suportive și folosesc **disciplinarea pozitivă**.',
 'Activitățile parentale au trei dimensiuni: **îngrijire, control, dezvoltare**. Părinții au nevoie de resurse: cunoștințe, timp, motivație.',
 'În România: Fundația Copiii Noștri (după un model olandez, NIZW, împreună cu MEC); Holt („Cum să devenim părinți mai buni”, 0–3 ani, 2000); „Educația viitorilor părinți” (2004, opțional pentru clasele IX–XII); **Salvați Copiii – Triple P** (2010); **Strategia Națională Integrată pentru Formarea și Dezvoltarea Competențelor Parentale**.',
 'Probleme ale programelor: conținuturi foarte diverse (e nevoie de un nucleu comun de competențe) și orientare predominantă spre **mame**, cu participare slabă a **taților**.'
], retine:'Educația parentală: îngrijire, control, dezvoltare. Exemplu de program: Triple P (Salvați Copiii).'}
]});

CARDURI.push(
 {c:'s10', q:'Familia nucleară de orientare vs de procreare', a:'- **De orientare:** familia în care te naști (statut de fiu/fiică)\n- **De procreare:** familia pe care o creezi prin căsătorie (statut de soț/părinte)'},
 {c:'s10', q:'Cele trei forme ale familiei mixte (compuse)', a:'- **Simplă compusă:** unul dintre parteneri aduce copii\n- **Dublu compusă:** amândoi aduc copii\n- **Cuplu compus complex:** copii aduși + copii comuni'},
 {c:'s10', q:'Familia monoparentală', a:'Structură asimetrică: un părinte + copil/copii (deces, divorț, abandon, adopție de către o singură persoană, naștere în afara căsătoriei).', term:'Familia monoparentală', short:'un părinte + copii, structură asimetrică'},
 {c:'s10', q:'Cele 2 dimensiuni ale stilurilor parentale (Baumrind)', a:'**Căldura** (acceptare, receptivitate, suport afectiv) și **controlul** (exigență, disciplină).'},
 {c:'s10', q:'Stilul exigent (autoritativ)', a:'Căldură ridicată + control ridicat. Standarde înalte, explicate, într-o relație caldă. Copiii au stimă de sine, sunt cooperanți și au rezultate bune.', term:'Stil exigent (autoritativ)', short:'căldură ↑ + control ↑'},
 {c:'s10', q:'Stilul autoritar', a:'Control ridicat + căldură scăzută: reguli stricte, amenințări, pedepse, frică. Copiii sunt lipsiți de spontaneitate, timizi sau rebeli.', term:'Stil autoritar', short:'control ↑, căldură ↓'},
 {c:'s10', q:'Stilul permisiv', a:'Căldură ridicată + control scăzut: puține reguli, cedare la insistențe. Copiii sunt impulsivi, imaturi, dependenți și nu perseverează.', term:'Stil permisiv', short:'căldură ↑, control ↓'},
 {c:'s10', q:'Stilul neimplicat (neglijent)', a:'Căldură și control scăzute: detașare emoțională, părinte centrat pe sine. Rezultă atașament insecurizant și risc de delincvență și consum de droguri.', term:'Stil neimplicat', short:'căldură ↓, control ↓'},
 {c:'s10', q:'Cele 3 teorii care fundamentează parentingul pozitiv', a:'- **Behavioristă** (Skinner: întărire / pedeapsă)\n- **Atașamentului** (Bowlby: 0–3 ani, modele interne de lucru)\n- **Stilurilor parentale** (Baumrind)'},
 {c:'s10', q:'Parentingul pozitiv la adolescență (Steinberg)', a:'Acceptare și implicare + control comportamental + susținerea autonomiei psihologice.'},
 {c:'s10', q:'Autoeficacitatea (Bandura)', a:'Încrederea persoanei că poate realiza comportamentele necesare atingerii scopurilor. Părinții o cresc prin sarcini realizabile, lăsate duse la capăt de copil.', term:'Autoeficacitatea', short:'încrederea că poți realiza ce îți propui'},
 {c:'s10', q:'4 reguli pentru părinți la divorț', a:'- Divorțul nu se ține secret\n- Vestea se dă **împreună**\n- Copilul e asigurat că e iubit întotdeauna\n- Nu se discută cu copilul greșelile celuilalt părinte'},
 {c:'s10', q:'Etapele doliului', a:'Negare și protest → disperare (sensul vieții se clatină) → ieșirea din doliu în timp, cu sprijin.'},
 {c:'s10', q:'Semne de doliu complicat la copil', a:'Depresie prelungită, insomnie, lipsa poftei de mâncare, teama de a rămâne singur, comportament infantil, imitarea excesivă a decedatului, dorința de a i se alătura, scădere școlară sau refuzul școlii.'},
 {c:'s10', q:'Obiectivele consilierului cu elevii cu părinți divorțați', a:'- Acceptarea că divorțul s-a întâmplat\n- Ieșirea din conflictul părinților, revenirea la propriile preocupări\n- Rezolvarea furiei și a vinovăției\n- Acceptarea că divorțul e permanent'},
 {c:'s10', q:'Dependența psihologică vs fizică', a:'- **Psihologică:** simți că nu poți gândi sau funcționa fără substanță\n- **Fizică:** organele au nevoie de substanță; lipsa ei duce la **sevraj**'},
 {c:'s10', q:'Efecte ale plecării părinților în străinătate', a:'Sentiment de abandon, anxietate de separare, tulburări afective, compensare prin bani, probleme școlare, introversie, abandon școlar. Se recomandă contact permanent și să nu plece ambii părinți.'},
 {c:'s10', q:'5 bariere în comunicarea profesor–părinți', a:'Probleme de ascultare, lipsa feedback-ului, feedback fals, rezistența la critică, percepția selectivă, ascultarea afectivă, inadvertențele de limbaj, barierele culturale (oricare 5).'},
 {c:'s10', q:'Cele 3 etape ale relației școală–familie', a:'1. Școala **autosuficientă**\n2. **Incertitudinea** profesională\n3. Dezvoltarea **încrederii mutuale** (→ contractul școală–familie)'},
 {c:'s10', q:'Tipuri de asociații de părinți (după scop)', a:'Grup de **susținere** a școlii, grup de **cooperare** (parteneri), grup de **apărare** a intereselor părinților.'},
 {c:'s10', q:'Educația parentală (sens restrâns)', a:'Programe care ajută părinții să-și dezvolte abilitățile parentale, să înțeleagă dezvoltarea copilului, să reducă stresul și să găsească modalități alternative pentru situațiile dificile.', term:'Educația parentală', short:'programe pentru abilitățile părinților'},
 {c:'s10', q:'Cele 3 dimensiuni ale activităților parentale', a:'Îngrijire, control, dezvoltare.'}
);

GRILE.push(
 {c:'s10', q:'Familia în care ambii parteneri aduc copii din căsătorii anterioare este:', o:['simplă compusă','dublu compusă','extinsă','monoparentală'], r:1},
 {c:'s10', q:'Stilul parental cu control ridicat și căldură scăzută este:', o:['exigent','permisiv','autoritar','neimplicat'], r:2},
 {c:'s10', q:'Stilul asociat cu cele mai bune rezultate ale copilului (Baumrind):', o:['autoritar','exigent (autoritativ)','permisiv','neimplicat'], r:1},
 {c:'s10', q:'Teoria atașamentului îi aparține lui:', o:['Skinner','Bandura','Bowlby','Baumrind'], r:2},
 {c:'s10', q:'Copiii cu părinți permisivi tind să fie:', o:['inhibați și timizi','impulsivi, imaturi, dependenți','foarte responsabili social','fără vitalitate'], r:1},
 {c:'s10', q:'Între 8 și 12 ani, reacția predominantă la divorțul părinților este:', o:['negarea','furia','euforia','indiferența'], r:1, e:'La 6–8 ani predomină tristețea; la 8–12 ani, furia.'},
 {c:'s10', q:'Programul Triple P a fost implementat în România de:', o:['Holt','Salvați Copiii','UNICEF','Fundația Copiii Noștri'], r:1},
 {c:'s10', q:'Prima etapă a relației școală–familie:', o:['încrederea mutuală','incertitudinea profesională','școala autosuficientă','contractul școală–familie'], r:2},
 {c:'s10', q:'Parentingul pozitiv la adolescență NU include:', o:['acceptare și implicare','control comportamental','susținerea autonomiei psihologice','pedeapsa fizică consecventă'], r:3},
 {c:'s10', q:'Bariera în care tăcerea părintelui pare acord, dar ascunde neînțelegere:', o:['rezistența la critică','feedback-ul fals','percepția selectivă','bariera culturală'], r:1}
);

AF.push(
 {c:'s10', s:'În practică, stilurile parentale apar de obicei în formă pură.', v:false, e:'Nu există stiluri pure, ci stiluri predominante.'},
 {c:'s10', s:'Vestea divorțului trebuie dată copilului de ambii părinți, împreună.', v:true},
 {c:'s10', s:'Copiii mici văd adesea moartea ca fiind temporară și reversibilă.', v:true},
 {c:'s10', s:'Parentingul neimplicat se asociază cu atașament securizant.', v:false, e:'Se asociază cu atașament insecurizant.'},
 {c:'s10', s:'Parentingul este un proces bidirecțional: și copilul îl modelează pe părinte.', v:true},
 {c:'s10', s:'În discuția cu părintele, profesorul începe cu dificultățile elevului.', v:false, e:'Se începe cu aspectele pozitive.'},
 {c:'s10', s:'Programele de educație parentală se adresează în mod egal mamelor și taților.', v:false, e:'Sunt orientate predominant spre mame; tații participă puțin.'},
 {c:'s10', s:'Dependența fizică presupune apariția sevrajului la lipsa substanței.', v:true}
);

/* ---- content/capitole/s11.js ---- */
/* CAPITOLUL XI (Specialitate) – Consilierea cadrelor didactice */
CAPITOLE.push({id:'s11', parte:'Tematica de specialitate', nr:'XI', emoji:'👩‍🏫', scurt:'Consilierea cadrelor didactice',
titlu:'Consilierea cadrelor didactice',
sectiuni:[
{titlu:'1. Educația adulților și formarea continuă', puncte:[
 '**Educația permanentă** cuprinde educația adulților și acoperă dezvoltarea umană de la copilărie la bătrânețe. Caracteristici: e **continuă**, e **integrantă** (se sprijină și pe resursele familiei, comunității, societății), are **caracter universal**, permite **forme alternative și complementare** și urmărește creșterea **calității vieții** (Golu F.).',
 'Adulții nu învață mai greu decât tinerii, dar mulți subestimează propriile resurse de învățare și se blochează în stereotipuri legate de vârstă (de teama eșecului).',
 '**Particularitățile învățării la adulți**: e **motivată intrinsec** (nevoia de a ști); se bazează pe **responsabilitatea** pentru propriile decizii; **valorifică experiențele anterioare**; e **centrată pe viață**, pe aplicarea imediată.',
 '**Formarea continuă** răspunde nevoilor personale și profesionale și dă coerență sistemului educațional (redefinirea scopurilor, conținuturi reorganizate, forme noi de instruire).'
], retine:'Învățarea la adulți: motivată intrinsec, responsabilă, bazată pe experiență, centrată pe aplicare.'},
{titlu:'2. Principiile lucrului cu adulții', puncte:[
 '**1. Experiența participanților** e importantă și e inclusă în instruire.',
 '**2. Activitățile sunt centrate pe dezvoltarea abilităților**: prezentările formatorului ocupă doar **10–15%** din timp, restul înseamnă exerciții practice și aplicații.',
 '**3. Implicarea activă**: participanții compară experiențele anterioare cu cele noi și au control asupra procesului.',
 '**4. Strategiile și tehnicile sunt semnificative pentru adulți**: valorifică experiența, încurajează schimbul de idei și vizează aplicarea în practică.',
 '**5. Adaptarea la stilurile de învățare** diferite.',
 '**6. Materiale vizuale**: implicarea mai multor canale de percepție crește asimilarea.',
 '**7. Consolidarea prin exersare** în activități practice (altfel informația nu e folosită ulterior).',
 '**8. Învățarea reciprocă**: participanții învață unii de la alții, uneori mai mult decât de la formator.',
 'Rolul formatorului este să **faciliteze** învățarea, **nu s-o impună**. Consilierul care lucrează cu adulții: folosește empatia și introspecția, reflectează asupra propriei experiențe, colaborează cu colegii, îi tratează pe cursanți ca personalități distincte, încurajează studiul individual după curs.',
 'Motivele dominante ale învățării la adulți: dobândirea de abilități și competențe, autorealizarea, progresul în carieră, recunoașterea socială.'
], retine:'Principii: experiență, abilități (formatorul vorbește 10–15% din timp), implicare activă, relevanță, stiluri de învățare, vizual, exersare, învățare reciprocă.'},
{titlu:'3. Educația pozitivă în școală', puncte:[
 '**Educația pozitivă** îmbină dezvoltarea cognitivă cu optimizarea **stării de bine**, a fericirii și a trăsăturilor pozitive de caracter. Psihologia pozitivă pornește de la ideea că **toți copiii au puncte forte** care pot fi mobilizate pentru schimbare.',
 'Intervențiile pe puncte forte îi ajută pe copii să-și identifice resursele, să schimbe cognițiile disfuncționale (lipsa de speranță, evaluarea globală negativă) și uneori rezolvă comportamente problematice.',
 '**Fericirea** are trei componente: **viața plăcută** (rezultatul a ceea ce faci), **viața angajată** (exprimarea punctelor forte), **viața cu sens** (punctele forte puse în slujba unor valori asumate).',
 '**Evaluarea fericirii**: Scala fețelor (7 fețe, de la „cel mai nefericit” la „cel mai fericit”), Scala fericirii subiective (4 itemi, Likert), Scala Piers-Harris a conceptului de sine (60 de itemi da/nu, 7–18 ani, 6 dimensiuni), eșantionarea experiențelor (copiii sunt cei mai fericiți cu prietenii, cei mai puțin fericiți singuri sau la activitățile școlare).',
 '**Empatia** = abilitatea de a înțelege și de a împărtăși emoțiile celorlalți. Are o componentă **afectivă** (simți ce simte celălalt) și una **cognitivă** (înțelegi emoțiile celuilalt). Stadii: plânsul reactiv al nou-născutului, distresul empatic egocentric, apoi, din al doilea an, empatia orientată spre ceilalți.',
 'Empatia se leagă de succesul școlar, comportamentul prosocial, limbaj și cooperare. Se dezvoltă prin imitarea modelelor și învățare socială. Programe: The Empathy Training Program, Incredible Years Dinosaur, Talking-Feeling-Doing Game.',
 '**Optimismul** = tendința de a aștepta rezultate pozitive și de a persevera, sau un stil de atribuire pozitiv. E **factor de protecție** împotriva anxietății, depresiei și consumului de substanțe. Are o parte ereditară (25–36%), dar **poate fi învățat** prin modelare și întăriri. Programe: Penn Prevention/Resiliency, Aussie Optimism, Friends, Resourceful Adolescent.',
 'Programele de **învățare socio-emoțională** sunt de lungă durată, integrate în curriculum, atente la emoții și la generalizarea învățării, cu evaluare multiplă. Intervențiile pozitive vizează recunoștința, speranța, reziliența, punctele forte, optimismul și empatia.'
], retine:'Fericirea: viața plăcută, angajată, cu sens. Empatia: afectivă + cognitivă. Optimismul se poate învăța.'},
{titlu:'4. Relația școală–elevi–părinți', puncte:[
 '**Școala și familia** sunt cei doi piloni ai educației. Lipsa colaborării duce la abandon și insucces școlar, violență, indisciplină, delincvență.',
 '**Consilierea părinților** = intervenție socio-educațională pentru găsirea unor noi căi de comunicare și colaborare între părinți și educatori.',
 'Nevoi psihosociale ale copilului de care ține cont educația: **identitate, apartenență, acceptare și apreciere, statut, participare**.',
 'Forme de comunicare cadru didactic–familie: activități de informare și consiliere a părinților, vizite la domiciliu, ședințe lunare, activități comune părinți–elevi, comitetul de părinți, scrisori, e-mail, telefon.',
 '**Semne că relația funcționează**: elevii vin cu drag la profesor, nu contestă calificativele, se comportă civilizat și în libertate, au rezultate bune, își apără profesorul, păstrează legătura în vacanțe, iar părinții vin la ședințe și apreciază activitatea.'
], retine:'Școala + familia = piloni ai educației; colaborarea previne abandonul, violența, delincvența.'},
{titlu:'5. Optimizarea climatului școlar', puncte:[
 'Pentru ca o clasă să devină **grup**, profesorul creează ocazii de cunoaștere reciprocă, favorizează comunicarea, folosește lucrul în grupuri mici și ajutorul între colegi.',
 'Clasa e o **microsocietate** cu **reguli clare**: reguli școlare (ținută, teme, prezență) și reguli de **civilitate** (limbaj, adresare, respect, toleranță, solidaritate). Respectarea regulilor e condiție a **socializării**.',
 '**Intervenția primară** se adresează **tuturor** elevilor, înainte să apară problema (de exemplu, abilități de comunicare părinți–copii dezvoltate dinainte). **Intervenția secundară** vizează **grupurile de risc** (de exemplu, copiii din medii defavorizate, cu risc de tulburări de citire sau scriere).',
 'Pentru orice intervenție: **analiza nevoilor**. Indici **cantitativi** (număr de elevi, abandon, delincvență, resurse, personal), indici **calitativi** (ambianță, relații, comunicare), analiza comunității, contextul politic, economic, social și tehnologic.',
 '**Analiza SWOT**: puncte **tari** (S) și **slabe** (W), care sunt **interne**; **oportunități** (O) și **amenințări** (T), care sunt **externe**.',
 'Metode pentru analiza nevoilor: discuții individuale cu persoane-cheie, chestionare, analiza documentelor școlii, discuții cu experți, întâlniri comunitare.'
], retine:'Intervenție primară (toți elevii) vs secundară (grupuri de risc); SWOT: S,W interne / O,T externe.'}
]});

CARDURI.push(
 {c:'s11', q:'Caracteristicile educației permanente', a:'Continuă, integrantă, universală, permite forme alternative/complementare, urmărește calitatea vieții.'},
 {c:'s11', q:'4 particularități ale învățării la adulți', a:'- Motivată intrinsec\n- Bazată pe responsabilitatea pentru propriile decizii\n- Valorifică experiența anterioară\n- Centrată pe viață, pe aplicare imediată'},
 {c:'s11', q:'Principiile lucrului cu adulții (oricare 4)', a:'Experiența participanților contează; centrare pe abilități (formatorul vorbește 10–15% din timp); implicare activă; strategii semnificative; adaptare la stilurile de învățare; materiale vizuale; consolidare prin exersare; învățare reciprocă.'},
 {c:'s11', q:'Cât din timpul unei instruiri pentru adulți ar trebui să fie prezentare a formatorului?', a:'**10–15%**. Restul timpului e pentru exerciții practice și aplicații.'},
 {c:'s11', q:'Rolul formatorului în lucrul cu adulții', a:'Să **faciliteze** învățarea, nu s-o impună.'},
 {c:'s11', q:'Educația pozitivă', a:'Îmbină dezvoltarea cognitivă cu optimizarea stării de bine, a fericirii și a trăsăturilor pozitive de caracter; pornește de la punctele forte ale fiecărui copil.', term:'Educația pozitivă', short:'cognitiv + stare de bine + puncte forte'},
 {c:'s11', q:'Cele 3 componente ale fericirii', a:'- **Viața plăcută** (ce faci)\n- **Viața angajată** (îți exprimi punctele forte)\n- **Viața cu sens** (punctele forte puse în slujba unor valori)'},
 {c:'s11', q:'Componentele empatiei', a:'- **Afectivă:** simți ce simte persoana în distres\n- **Cognitivă:** înțelegi emoțiile celuilalt (depinde de dezvoltarea gândirii)'},
 {c:'s11', q:'Optimismul', a:'Tendința generală de a aștepta rezultate pozitive și de a persevera până la atingerea scopului (sau un stil de atribuire pozitiv). E factor de protecție și **se poate învăța**.', term:'Optimismul', short:'aștepți rezultate pozitive și perseverezi'},
 {c:'s11', q:'Nevoile psihosociale ale copilului', a:'Identitate, apartenență la grup, acceptare și apreciere, statut, participare.'},
 {c:'s11', q:'Intervenția primară vs secundară', a:'- **Primară:** toată populația școlară, înainte să apară problema\n- **Secundară:** grupurile cu predispoziție (de risc)'},
 {c:'s11', q:'Analiza SWOT a școlii', a:'**S**trengths, **W**eaknesses = interne (resurse, motivație, expertiză)\n**O**pportunities, **T**hreats = externe (administrație, comunitate, economie)'},
 {c:'s11', q:'Metode pentru analiza nevoilor școlii', a:'Discuții individuale cu persoane-cheie, chestionare, analiza documentelor, discuții cu experți, întâlniri comunitare.'},
 {c:'s11', q:'5 responsabilități ale consilierului pentru un climat suportiv', a:'Exemple: facilitează cunoașterea reciprocă și coeziunea clasei; sprijină stabilirea unor reguli clare și a civilității; consiliază părinții și profesorii; derulează programe de prevenție (primară/secundară); face analiza nevoilor; promovează educația pozitivă (empatie, optimism).'}
);

GRILE.push(
 {c:'s11', q:'Prezentările formatorului ar trebui să ocupe din timpul instruirii adulților:', o:['50%','30–40%','10–15%','sub 5%'], r:2},
 {c:'s11', q:'Învățarea la adulți este în principal:', o:['motivată extrinsec','motivată intrinsec','centrată pe teorie','independentă de experiență'], r:1},
 {c:'s11', q:'Componenta fericirii care rezultă din exprimarea punctelor forte personale:', o:['viața plăcută','viața angajată','viața cu sens','viața hedonică'], r:1},
 {c:'s11', q:'Intervenția care se adresează întregii populații școlare este:', o:['primară','secundară','terțiară','individuală'], r:0},
 {c:'s11', q:'În analiza SWOT, oportunitățile și amenințările sunt:', o:['interne','externe','doar financiare','doar umane'], r:1},
 {c:'s11', q:'Scala Piers-Harris evaluează:', o:['inteligența','conceptul de sine','stilul de învățare','anxietatea de examen'], r:1},
 {c:'s11', q:'Optimismul:', o:['este exclusiv ereditar','poate fi învățat','crește riscul de depresie','nu influențează reușita școlară'], r:1}
);

AF.push(
 {c:'s11', s:'Adulții au o capacitate de învățare inferioară tinerilor.', v:false, e:'Nu sunt inferiori; mulți își subestimează resursele.'},
 {c:'s11', s:'Rolul formatorului de adulți este să faciliteze învățarea, nu să o impună.', v:true},
 {c:'s11', s:'Copiii sunt cei mai fericiți atunci când sunt singuri.', v:false, e:'Sunt cei mai fericiți cu prietenii.'},
 {c:'s11', s:'Empatia are atât o componentă afectivă, cât și una cognitivă.', v:true},
 {c:'s11', s:'Intervenția secundară vizează grupurile cu risc crescut.', v:true},
 {c:'s11', s:'Punctele tari și slabe din analiza SWOT țin de mediul extern al școlii.', v:false, e:'Sunt interne; O și T sunt externe.'}
);

/* ---- content/capitole/s12.js ---- */
/* CAPITOLUL XII (Specialitate) – Consilierea asistată de calculator */
CAPITOLE.push({id:'s12', parte:'Tematica de specialitate', nr:'XII', emoji:'💻', scurt:'Consiliere asistată de calculator',
titlu:'Consilierea asistată de calculator',
sectiuni:[
{titlu:'1. Internetul în consiliere', puncte:[
 '**Internetul** = rețea mondială de calculatoare legate printr-un **protocol comun de comunicație** (de exemplu http, ftp, IMAP, POP, SMTP). Coordonarea generală se face prin Internet Society.',
 'Servicii folosite: **WWW**, **e-mail**, **IRC/chat**, **ftp**. Chatul e comunicare **sincronă**, în timp real; e-mailul e **asincron** (cu o latență de la minute la ore).',
 'Prin internet, consilierul și clientul se pot documenta „la zi”, pot explora o lume reală și una **virtuală** (simulare), își pot îmbogăți vocabularul de specialitate, își pot exersa abilitățile de comunicare și își pot dezvolta strategii de procesare a informației.',
 '**Motoarele de căutare** găsesc resurse după cuvinte-cheie. Există **indexuri** de căutare (baze de date cu conținut catalogat) și **directoare** de căutare (structură ierarhică de categorii).',
 '**E-mailul**: adresa are forma utilizator@domeniu; mesajul are **antet** (destinatar, autor, subiect), **corp** (cu atașamente) și **semnătură**; cutiile poștale sunt Inbox, Outbox, Sent, Deleted, Spam.',
 '**Forumurile de discuții** sunt fie liste de difuzare, fie grupuri de discuții structurate pe fire (threaded). Pot deveni **grupuri de sprijin virtuale**; cele moderate au experți care elimină comentariile nepotrivite.',
 '**Rețelele sociale** (Web 2.0) leagă informal persoane cu scopuri comune (de exemplu Facebook, LinkedIn, Instagram).'
], retine:'Chat = sincron; e-mail = asincron. Forumurile pot deveni grupuri de sprijin virtuale.'},
{titlu:'2. Avantaje și dezavantaje', puncte:[
 '**Avantaje** (Jigău): un raport mai bun între **numărul de clienți și consilier**; **costuri sociale** mai mici; stocarea, regăsirea și combinarea rapidă a datelor; **autonomie** mai mare a beneficiarilor; **personalizarea timpului** de acces la informații; **experiență repetabilă** (facilitează reținerea); **realism** sporit prin simulare; informare extinsă; prezentare flexibilă, cu selecție după mai multe criterii.',
 '**Dezavantaje**: **perisabilitatea** informațiilor (trebuie actualizate de consilieri și informaticieni); programele nu răspund mereu cererilor reale; **flexibilitate redusă** la nevoile clienților; programele nu pot învăța, nu se pot adapta și **nu au empatie**; **receptare pasivă** a informației; **sensibilitate redusă la diferențele individuale**.',
 'Concluzie: tehnologiile sunt instrumente **suplimentare, complementare** consilierii față în față, **nu o înlocuiesc**. Oferă interviuri față în față prin videoconferință, interviuri mijlocite (telefon, online), muncă în echipă (e-mail, forum), acces la informații (biblioteci virtuale, baze de date).',
 'Argumente pentru programele informatice în consilierea carierei: puțini specialiști față de cerere; teorii consistente; nevoia de acces pentru tot mai mulți oameni; **imparțialitate, precizie, stabilitate, operativitate, neutralitate** a răspunsurilor.'
], retine:'Avantaj-cheie: mai mulți clienți per consilier, costuri mai mici. Dezavantaj-cheie: fără empatie, informații perisabile.'},
{titlu:'3. Tipuri de programe informatice', puncte:[
 'Criterii de clasificare: scopul, structura și conținutul informației, procedura (**autonomă sau asistată** de consilier), modelul teoretic, suportul tehnic, populația-țintă.',
 'Tipuri (Jigău): **jocuri și simulări**; programe de **„punere în corespondență”** (potrivesc ocupația cu caracteristicile persoanei); **profile personale** prin autoevaluare; programe de **căutare și furnizare** a informațiilor; programe de **sprijin în luarea deciziilor**; programe de sprijin pentru **CV, scrisori, formulare**; programe pentru **aptitudinile de căutare a unui loc de muncă**; aplicații cross-curriculare; **teste** informatizate; sisteme **multimedia**.',
 'Pe domenii: consiliere **personală** (droguri, valori, stres, timp, decizie, comunicare), consilierea **carierei**, **îndrumare academică**, **testare/evaluare**, gestiunea documentelor, **formarea consilierilor** (interviuri clinice, jocuri de rol).',
 'După scop (Watts): **cunoașterea de sine** (profile de autoevaluare, teste), **cunoașterea oportunităților** (baze de date despre studii și locuri de muncă, jocuri și simulări), **învățarea luării deciziilor**, **pregătirea pentru tranziție** (interviu, CV, scrisoare de intenție). Sistemele de „punere în corespondență” combină primele două scopuri.',
 'Câștigul pentru consilier: face mai puține sarcini repetitive și se concentrează pe aspectele **specific umane** ale consilierii.'
], retine:'Scopuri (Watts): cunoașterea de sine, cunoașterea oportunităților, luarea deciziilor, pregătirea pentru tranziție.'},
{titlu:'4. Consilierea prin telefon și online', puncte:[
 '**Consilierea prin telefon**: avantaje – eficiență, promptitudine, disponibilitate permanentă, contact cu beneficiari îndepărtați, **identitate ascunsă** (depășirea inhibițiilor, ajută persoanele emotive). Dezavantaje – fără contact direct, impersonală, **confidențialitate** vulnerabilă, posibilități reduse de feedback (Lemeni, Miclea).',
 '**Consilierea online** = consiliere în timp real, prin internet. Se adresează elevilor cu confuzii, incertitudini, ambivalențe, îngrijorări, frică, furie, dar și celor care vor doar să se dezvolte și să fie mai optimiști.',
 'Avantaje ale consilierii online: **program flexibil**, **mediu confortabil** (fără deplasare), **mai puțină teamă** (întâlnirea pare mai puțin formală), **confidențialitate** cu aceleași standarde de calitate ca în consilierea clasică.'
], retine:'Telefon: anonimat, promptitudine / impersonal, feedback redus. Online: flexibil, confortabil, mai puțin intimidant.'}
]});

CARDURI.push(
 {c:'s12', q:'Comunicare sincronă vs asincronă online', a:'- **Sincronă:** chat/IRC, în timp real\n- **Asincronă:** e-mail, forum (cu întârziere)'},
 {c:'s12', q:'Structura unui e-mail', a:'**Antet** (destinatar, autor, subiect), **corp** (mesajul + atașamente), **semnătură**.'},
 {c:'s12', q:'Index de căutare vs director de căutare', a:'- **Index:** catalog al conținutului, într-o bază de date\n- **Director:** structură ierarhică de categorii, cu înregistrări de la utilizatori'},
 {c:'s12', q:'4 avantaje ale tehnologiilor informatice în consiliere', a:'Mai mulți clienți per consilier; costuri sociale mai mici; autonomie mai mare a beneficiarilor; personalizarea timpului de acces; experiență repetabilă; realism prin simulare; prezentare flexibilă a datelor.'},
 {c:'s12', q:'4 dezavantaje ale programelor informatice în consiliere', a:'Perisabilitatea informațiilor; flexibilitate redusă; nu au empatie și nu se adaptează; receptare pasivă; sensibilitate redusă la diferențele individuale.'},
 {c:'s12', q:'Tehnologia înlocuiește consilierea față în față?', a:'Nu. E un instrument **suplimentar, complementar** consilierii directe.'},
 {c:'s12', q:'Programele de „punere în corespondență”', a:'Corelează profilul individului cu ocupațiile sau locurile de muncă existente și oferă o listă de posibilități potrivite.', term:'Punere în corespondență', short:'profilul persoanei ↔ ocupații potrivite'},
 {c:'s12', q:'Clasificarea după scop (Watts)', a:'1. Cunoașterea de sine\n2. Cunoașterea oportunităților\n3. Învățarea luării deciziilor\n4. Pregătirea pentru tranziție'},
 {c:'s12', q:'Consilierea prin telefon: 2 avantaje + 2 dezavantaje', a:'**+** promptitudine și disponibilitate permanentă; anonimatul reduce inhibițiile\n**−** fără contact direct, impersonală; confidențialitate vulnerabilă, feedback redus'},
 {c:'s12', q:'Avantajele consilierii online', a:'Program flexibil, mediu confortabil, mai puțină teamă (mai puțin formal), confidențialitate cu aceleași standarde.'}
);

GRILE.push(
 {c:'s12', q:'Comunicarea prin e-mail este:', o:['sincronă','asincronă','exclusiv vocală','în timp real garantat'], r:1},
 {c:'s12', q:'Un dezavantaj al programelor informatice de consiliere:', o:['costuri sociale reduse','perisabilitatea informațiilor','autonomia beneficiarului','experiența repetabilă'], r:1},
 {c:'s12', q:'Programele care corelează profilul persoanei cu ocupațiile sunt de tip:', o:['simulare','punere în corespondență','editare text','forum'], r:1},
 {c:'s12', q:'Un avantaj specific consilierii prin telefon:', o:['contactul vizual','identitatea poate rămâne ascunsă','feedback-ul nonverbal complet','confidențialitate absolută garantată'], r:1},
 {c:'s12', q:'Clasificarea Watts NU include scopul:', o:['cunoașterea de sine','cunoașterea oportunităților','pregătirea pentru tranziție','diagnosticul medical'], r:3}
);

AF.push(
 {c:'s12', s:'Tehnologiile informatice pot înlocui complet consilierea față în față.', v:false, e:'Sunt complementare, nu o înlocuiesc.'},
 {c:'s12', s:'Chatul (IRC) permite comunicare sincronă, în timp real.', v:true},
 {c:'s12', s:'Forumurile de discuții pot deveni grupuri de sprijin virtuale.', v:true},
 {c:'s12', s:'Programele informatice au o sensibilitate ridicată la diferențele individuale.', v:false, e:'Sensibilitatea lor e relativ redusă.'},
 {c:'s12', s:'Folosirea tehnologiei îl eliberează pe consilier de sarcini repetitive.', v:true}
);

/* ---- content/capitole/m01.js ---- */
/* METODICĂ I – Procesul educațional: abordare sistemică */
CAPITOLE.push({id:'m01', parte:'Metodica disciplinei', nr:'M1', emoji:'🔄', scurt:'Predare–învățare–evaluare',
titlu:'Procesul educațional – abordare sistemică',
sectiuni:[
{titlu:'1. Predarea', puncte:[
 'Procesul de învățământ = alternanța **predare – învățare – evaluare**, componente aflate în **interacțiune organică, dialectică**.',
 '**Predarea** nu înseamnă doar transmitere de cunoștințe, ci **organizarea și conducerea experiențelor de învățare** ale elevilor. Declanșează, stimulează și orientează învățarea.',
 'A preda înseamnă: a **proiecta** schimbările dorite, a le preciza natura (prin **obiective**), a stabili **conținutul**, a **organiza, conduce și monitoriza** schimbările, a **evalua** nivelul atins.',
 'Demersurile profesorului: prezintă material concret și verbal; organizează activități care îl valorifică; îi sprijină pe elevi să observe, să analizeze, să compare, să aplice și să sintetizeze; extrage esențialul și îl fixează în noțiuni; **operaționalizează** cunoștințele prin exerciții și aplicații.'
], retine:'Predarea = organizarea și conducerea experiențelor de învățare, nu simpla transmitere.'},
{titlu:'2. Învățarea', puncte:[
 '**Învățarea școlară** = activitate intelectuală și fizică desfășurată sistematic, pentru dobândirea de informații și formarea de abilități. Are un **aspect informativ** (reținerea informației) și un **aspect formativ** (dezvoltarea sistemului operațional).',
 'Din perspectivă psihologică are un **moment procesual** și un **moment motivațional**, care formează o unitate.',
 '**Etapele învățării**: **perceperea / receptarea** materialului (pe fondul atenției) → **înțelegerea** (prin analiză, sinteză, generalizare) → **fixarea în memorie** (stocarea) → **actualizarea** (reproducere, operare, transfer) → **aplicarea** în practică.',
 '**Motivația învățării** = ansamblul mobilurilor care declanșează, susțin energetic și direcționează învățarea (autorealizare, note bune, frica de pedeapsă, curiozitate, interese).',
 '**Optimul motivațional** = o zonă de activare **medie**, diferită de la o persoană la alta (în funcție de dificultatea sarcinii, aptitudini, temperament). **Legea optimului motivațional**: sub pragul minim, învățarea nu se produce; peste un prag critic, **supramotivarea** scade performanța (apare o reacție de alarmă).'
], retine:'Etapele învățării: receptare → înțelegere → fixare → actualizare → aplicare. Supramotivarea scade performanța.'},
{titlu:'3. Evaluarea', puncte:[
 '**Evaluarea** = proces de stabilire a relevanței și valorii predării și învățării, a performanțelor și comportamentelor elevilor, prin raportare la **criterii și standarde** prestabilite, pentru a lua **decizii de îmbunătățire**.',
 'Presupune: **colectarea** unor informații pertinente, valide și fiabile, **compararea** lor cu criterii stabilite după obiective și **luarea deciziilor**.',
 'Didactica actuală: evaluarea nu mai e „sancțiune” la final, ci e **integrată** în procesul de învățământ, are **efecte (auto)reglatorii** asupra conținuturilor și strategiilor, **susține învățarea** și progresul, e un **parteneriat** evaluat–evaluator.',
 'Se promovează **evaluarea formativă**: elevul se autoanalizează și își reglează învățarea, iar profesorul își adaptează predarea. Finalitate majoră: **autoevaluarea**.'
], retine:'Evaluarea = informații → raportare la criterii → decizii de îmbunătățire; azi e formativă și integrată.'},
{titlu:'4. Variabilele procesului de învățământ', puncte:[
 'Taxonomia lui **A. Chircev** (după M. Ionescu), cu trei categorii de variabile: **(a) generalizări** de diferite niveluri (date, idei, informații, cunoștințe); **(b) instrumente mintale de lucru** (abilități, capacități, **competențe**, aptitudini, gândire productivă, imaginație creatoare); **(c) atitudini cognitiv-evaluative** față de primele două (atitudini epistemice, trebuințe cognitive, aspirații, sentimentul de competență).',
 '**Cunoștințele** devin ale elevului doar după ce trec prin **prelucrarea gândirii lui**; se așază pe fondul celor anterioare. Raționamente posibile: **inductive** (de la fapte la generalizări), **deductive** (de la generalizări la fapte noi), **transductive** (între adevăruri de același grad de generalitate), **analogice** (prin comparație cu ceva cunoscut).',
 'Forme de aplicare a cunoștințelor: rezolvarea de exerciții și probleme (intelectual); aplicare practică propriu-zisă (motrică, de laborator); **lucrări de creație**; **transpunerea în conduită** a convingerilor morale.',
 '**Abilitatea** = capacitatea de a efectua cu ușurință, precizie, finețe și eficient operații intelectuale sau practice. În formarea ei apar **transferul** (influență **pozitivă** a achizițiilor vechi asupra celor noi; poate fi specific sau nespecific) și **interferența** (influență reciprocă **negativă**).',
 '**Deprinderile** = componente **automatizate** ale activității, elaborate întâi conștient, care apoi funcționează automat, sub controlul conștiinței. Tipuri: **senzorio-motorii**, **intelectuale**, **de comportament** (civilizat, de salut).',
 'Etapele formării deprinderilor: **(a) familiarizarea** cu acțiunea → **(b) organizarea și sistematizarea** (momentul rațional) → **(c) automatizarea** → **(d) consolidarea și perfecționarea** prin aplicare în contexte variate.',
 '**Exercițiile**, după etapă: **introductive** (a), **de bază** (b, c), **paralele** (d). După natura sarcinii: **reproductive** (gândire convergentă), **creative** (gândire divergentă).',
 'Relația cunoștințe–priceperi–deprinderi e de **reciprocitate**; cunoștințele sunt scopul cunoașterii și condiția formării celorlalte.',
 '**Aptitudinea** = sistem de componente senzorio-motorii, cognitive, afectiv-motivaționale și volitive care asigură succesul într-o activitate; e un produs al dezvoltării individuale. Poate fi **generală** (un spectru larg de activități) sau **specială** (de exemplu muzicală, pedagogică).'
], retine:'Chircev: generalizări, instrumente mintale, atitudini. Transfer (+) vs interferență (−). Deprinderi: familiarizare → organizare → automatizare → consolidare.'}
]});

CARDURI.push(
 {c:'m01', q:'Ce înseamnă „a preda” (acțiunile profesorului)?', a:'A proiecta schimbările, a le preciza prin obiective, a stabili conținutul, a organiza, conduce și monitoriza schimbările, a evalua nivelul atins.'},
 {c:'m01', q:'Etapele învățării școlare', a:'Perceperea/receptarea → înțelegerea → fixarea în memorie → actualizarea (reproducere, operare, transfer) → aplicarea.'},
 {c:'m01', q:'Legea optimului motivațional', a:'Performanța crește odată cu activarea până la un prag critic; dincolo de el, **supramotivarea** scade randamentul. Sub pragul minim, învățarea nu se produce.', term:'Optimul motivațional', short:'activare medie; supramotivarea scade performanța'},
 {c:'m01', q:'Definiția evaluării (pe pași)', a:'Colectarea de informații pertinente, valide, fiabile → raportarea la criterii și standarde (după obiective) → luarea unor decizii de îmbunătățire.'},
 {c:'m01', q:'Noua accepțiune a evaluării', a:'Integrată în proces, cu efecte (auto)reglatorii, susține învățarea, e un parteneriat evaluat–evaluator, promovează evaluarea formativă și autoevaluarea.'},
 {c:'m01', q:'Variabilele procesului de învățământ (Chircev)', a:'1. **Generalizări** (date, idei, cunoștințe)\n2. **Instrumente mintale** (abilități, competențe, aptitudini)\n3. **Atitudini cognitiv-evaluative** (trebuințe cognitive, aspirații)'},
 {c:'m01', q:'Transfer vs interferență', a:'- **Transfer:** achizițiile vechi le influențează **pozitiv** pe cele noi (specific/nespecific)\n- **Interferență:** influență reciprocă **negativă**'},
 {c:'m01', q:'Deprinderea', a:'Componentă automatizată a activității, elaborată inițial conștient, care funcționează apoi automat, sub controlul conștiinței.', term:'Deprinderea', short:'componentă automatizată, controlată conștient'},
 {c:'m01', q:'Etapele formării deprinderilor', a:'Familiarizare → organizare și sistematizare (momentul rațional) → automatizare → consolidare și perfecționare.'},
 {c:'m01', q:'Tipuri de exerciții', a:'**După etapă:** introductive, de bază, paralele\n**După sarcină:** reproductive (gândire convergentă), creative (gândire divergentă)'},
 {c:'m01', q:'Tipuri de raționamente în predare', a:'Inductive (fapte → generalizare), deductive (generalizare → fapte), transductive (între adevăruri de același nivel), analogice (prin comparație).'},
 {c:'m01', q:'Aptitudinea generală vs specială', a:'- **Generală:** abordarea cu succes a unei game largi de activități\n- **Specială:** performanțe ridicate într-un domeniu (de exemplu muzicală, pedagogică)'}
);

GRILE.push(
 {c:'m01', q:'Etapa învățării în care se desprind relații și esențe prin analiză și sinteză:', o:['receptarea','înțelegerea','fixarea','aplicarea'], r:1},
 {c:'m01', q:'Influența negativă a achizițiilor vechi asupra celor noi se numește:', o:['transfer','interferență','generalizare','consolidare'], r:1},
 {c:'m01', q:'Exercițiile corespunzătoare etapei de consolidare a deprinderilor sunt:', o:['introductive','de bază','paralele','reproductive'], r:2},
 {c:'m01', q:'Exercițiile creative solicită:', o:['gândirea convergentă','gândirea divergentă','doar memoria','doar atenția'], r:1},
 {c:'m01', q:'Competențele fac parte, în taxonomia Chircev, din categoria:', o:['generalizărilor','instrumentelor mintale de lucru','atitudinilor cognitiv-evaluative','conținuturilor'], r:1},
 {c:'m01', q:'Raționamentul care obține cunoștințe noi prin comparație cu un obiect bine cunoscut:', o:['inductiv','deductiv','transductiv','analogic'], r:3}
);

AF.push(
 {c:'m01', s:'Predarea se reduce la transmiterea de informații.', v:false, e:'Predarea înseamnă organizarea și conducerea experiențelor de învățare.'},
 {c:'m01', s:'Supramotivarea poate scădea performanța în învățare.', v:true},
 {c:'m01', s:'În didactica actuală, evaluarea are în primul rând rol de sancțiune.', v:false, e:'Are rol formativ, de susținere a învățării.'},
 {c:'m01', s:'Deprinderile funcționează automat, dar sub controlul conștiinței.', v:true},
 {c:'m01', s:'Transferul este o influență pozitivă a achizițiilor anterioare asupra celor noi.', v:true}
);

/* ---- content/capitole/m02.js ---- */
/* METODICĂ II – Curriculum, competențe, proiectare */
CAPITOLE.push({id:'m02', parte:'Metodica disciplinei', nr:'M2', emoji:'🗂️', scurt:'Curriculum și proiectare',
titlu:'Curriculum, competențe și proiectarea activității',
sectiuni:[
{titlu:'1. Conceptul de curriculum', puncte:[
 '**Curriculum** (lat. „alergare, drum”) = ansamblul coerent de **conținuturi, metode de învățare și metode de evaluare**, organizat pentru atingerea unor obiective; întreaga **experiență de învățare** propusă de școală.',
 '**Sens larg**: toată experiența de învățare din contexte formale, nonformale și informale. **Sens restrâns (tradițional)**: conținuturile din planuri, programe și manuale.',
 'Accepțiunea modernă: **sistemul de experiențe de învățare**, directe și indirecte, cu accent pe **articularea componentelor**: obiective – conținuturi – metode – evaluare.'
], retine:'Curriculum = conținuturi + metode de învățare + metode de evaluare → experiența de învățare.'},
{titlu:'2. Tipuri de curriculum', puncte:[
 '**Din perspectiva cercetării fundamentale**: **general** (trunchiul comun, cultura generală, aproximativ 70–80% din discipline), **specializat** (pe domenii sau profiluri), **subliminal / ascuns** (valori și conduite transmise implicit: ritualuri, reguli, climat), **informal** (ONG-uri, mass-media, muzee, familie).',
 '**Din perspectiva cercetării aplicative**: **formal / oficial**, **recomandat**, **scris**, **exclus**, **predat**, **suport** (culegeri, ghiduri), **învățat / realizat** (achizițiile reale ale elevilor), **testat**, **local / zonal**.',
 '**Curriculum nucleu = trunchiul comun**: numărul **minim** de ore la fiecare disciplină obligatorie. E unicul sistem de referință pentru **evaluările și examenele naționale** și pentru standardele de performanță.',
 '**Curriculum diferențiat**: selectarea conținuturilor, metodelor, standardelor și mediului de învățare după aptitudinile, interesele, ritmul și **stilul de învățare** al elevului (poate merge până la curriculum individualizat).',
 '**Curriculum la decizia școlii (CDS)**: oferta proprie a școlii. Variante: **nucleu aprofundat** (aprofundează cele 70% obligatorii, fără segmentul de 30%), **extins** (parcurge și segmentul de până la 30%, cu elementele marcate cu asterisc), **elaborat în școală** (discipline sau teme noi, adesea interdisciplinare).',
 'La liceu, opționalele pot fi: **de aprofundare**, **de extindere**, **preluat din trunchiul comun al altor specializări**, **disciplină nouă**, **integrat** (în jurul uneia sau mai multor arii curriculare).',
 'Prin CDS se urmărește: posibilitatea de opțiune a elevilor, corelarea resurselor școlii cu cerințele elevilor, flexibilitate, adaptare socială și **identitatea fiecărei școli**.'
], retine:'Trunchi comun = curriculum nucleu (minimul de ore, referință pentru examene). CDS: aprofundat, extins, elaborat în școală.'},
{titlu:'3. Documentele curriculare', puncte:[
 '**Planul-cadru (planul de învățământ)** = document **oficial, reglator**, care stabilește disciplinele și numărul de ore pe niveluri și profiluri; reflectă politica educațională. Se elaborează în trei etape de expertiză: **științifică, practică, decizională**. Ținte: **descongestionarea și flexibilizarea** programului.',
 '**Programa școlară** = configurează **conținutul** la o disciplină și e punctul de pornire al proiectării didactice. Cuprinde: **nota de prezentare**, competențe generale și specifice, activități de învățare, conținuturi, sugestii metodologice (de predare și evaluare), uneori standarde și bibliografie. Pentru noile programe se folosește și termenul de „curriculum scris / oficial”.',
 '**Nota de prezentare** = partea introductivă a programei: arată **statutul și locul disciplinei** în planul-cadru, numărul de ore, **finalitățile și concepția** disciplinei (de ce o predăm și cum e construită). Orientează profesorul în interpretarea și aplicarea programei.',
 '**Manualul** are funcții de **informare, formare, antrenare** a capacităților și de **autoinstruire**. În România se folosesc **manuale alternative**, aprobate oficial, ca expresie a pluralismului pedagogic. Linii de diferențiere (Cucoș): pentru elev sau pentru profesor, metoda pedagogică implicată, închis sau deschis spre alte surse, de autor, culegere de texte, documente reale, de completat.',
 '**Auxiliarele didactice**: ghiduri metodologice, culegeri, caiete, soft educațional, materiale multimedia.',
 '**Aria curriculară** = un grupaj de discipline cu obiective și metodologii comune. În România sunt **7 arii**: Limbă și comunicare, Matematică și științe ale naturii, Om și societate, Arte, Educație fizică și sport, Tehnologii, **Consiliere și orientare**. Ponderea lor variază pe cicluri.',
 '**Modulul** = set coerent și independent de competențe, parcurs separat de restul sistemului. Structura: **sistem de intrare** (evaluare inițială), **corpul modulului**, **sistem de ieșire** (probă terminală, recuperare). Avantaje: învățare independentă, actualizare ușoară, individualizare, interdisciplinaritate.',
 '**Standardele curriculare de performanță** = sistem de referință comun pentru sfârșitul unei trepte, formulat în cunoștințe, competențe și atitudini, pe niveluri minimal, mediu și maximal.'
], retine:'Programa: nota de prezentare + competențe generale/specifice + activități de învățare + conținuturi + sugestii metodologice. 7 arii curriculare.'},
{titlu:'4. Competențe generale și specifice', puncte:[
 '**Competența** = ansamblu integrat de cunoștințe, abilități și atitudini care permite rezolvarea eficientă a unor sarcini în contexte variate („a ști să faci”). Se dezvoltă **progresiv și cumulativ**.',
 'Tipuri: **disciplinare**, **interdisciplinare**, **transversale / transferabile** (metodologice, de redactare, de relaționare, de lucru în grup).',
 '**Competențele generale** se definesc pe disciplină, pentru un **ciclu de învățământ**: au grad ridicat de generalitate și orientează demersul spre achizițiile finale.',
 '**Competențele specifice** se definesc pe disciplină, pentru **un an de studiu**: sunt **derivate din cele generale** și reprezintă **etape** în atingerea lor. Li se asociază, prin programă, **unități de conținut** și **activități de învățare**.',
 '**Relația CG–CS** (ce se cere la examen): CS **derivă** din CG și le **operaționalizează** pe an de studiu. Fiecare CS se notează cu numărul CG din care provine (de exemplu CS **2.2** derivă din **CG 2**). Atingerea CS duce, treptat, la formarea CG.',
 'Operații mentale pe care se construiesc competențele: **receptare** → **prelucrare primară** → **algoritmizare** → **exprimare** → **prelucrare secundară** → **transfer**.',
 'Trei ipostaze ale competenței: **instrument** al performanței, **obiectiv** al programelor de formare, **rezultat** al învățării.',
 'Exemple de direcții ale programei de Consiliere și orientare: conștiința de sine și atitudinile pozitive, relaționarea pozitivă, managementul învățării, al timpului și al stresului, planificarea carierei.'
], retine:'CG = pe ciclu, generale. CS = pe an, derivate din CG (2.2 ← CG 2), cu conținuturi asociate.'},
{titlu:'5. Proiectarea activității didactice', puncte:[
 '**Planificarea calendaristică** = document administrativ care asociază elementele programei (competențe, conținuturi) cu **alocarea de timp** pe un an sau semestru. Pași: identifici competențele sau obiectivele, analizezi conținutul și delimitezi **unitățile de învățare**, eșalonezi în timp (număr de ore, săptămâni), distribui timpul pe predare, fixare și evaluare. Trebuie să acopere integral programa și numărul de ore din planul-cadru.',
 '**Proiectarea unității de învățare / a lecției** răspunde la **4 întrebări** (Vlăsceanu): **Ce voi face?** (obiective) – **Cu ce voi face?** (resurse) – **Cum voi face?** (strategii) – **Cum voi ști dacă am realizat?** (evaluare).',
 'Reguli pentru **obiectivele operaționale**: descriu schimbarea la elev, nu activitatea profesorului; folosesc **verbe de acțiune** observabile; vizează **o singură operație**; sunt formulate concis; derivă logic unele din altele. Pași: performanța, condițiile, nivelul (criteriul) de reușită.',
 '**Resursele**: materiale (manuale, mijloace, spațiu), umane (elevii, motivația, experiența), procedurale (forme de organizare, metode), de timp.',
 '**Strategia didactică** = combinația optimă dintre **Metode, Materiale, Mijloace** („cei trei M”), concretizată în **scenariul didactic**, cu loc lăsat și pentru spontaneitate.',
 '**Evaluarea** pornește de la obiectivele operaționale. Eficiența unei lecții = raportul dintre rezultatele obținute și resursele consumate. Scopul evaluării e să perfecționeze procesul, nu să eticheteze elevii.'
], retine:'4 întrebări: Ce? (obiective) · Cu ce? (resurse) · Cum? (strategii) · Cum știu? (evaluare).'},
{titlu:'6. Proiectarea activității de consiliere', puncte:[
 'Proiectarea pornește de la o **problemă a clasei**, identificată împreună cu elevii, pentru care există motivație de schimbare (de exemplu un modul de comunicare și rezolvare de conflicte).',
 '**Etapele proiectării lecției de Consiliere și orientare**: **1. definirea problemei** → **2. descrierea problemei** (comportamentală, cognitivă, emoțională) → **3. identificarea factorilor de formare** (identificați de grup, nu impuși din afară) → **4. identificarea factorilor de menținere și activare** → **5. planul de intervenție** (etapa cea mai importantă: obiectiv de lungă durată, obiective specifice, strategii de intervenție, activități specifice) → **6. evaluarea intervenției** (chestionare, autoevaluare comportamentală).',
 '**Planificarea consilierului**: anuală (priorități, calendar, cine face și când) și săptămânală, mai flexibilă (activități colective, de grup, individuale, consultări, situații de criză). Urmează **implementarea**, apoi **evaluarea** programului.',
 'Datele pentru evaluarea unui program: **de proces** („Ce ai făcut și pentru cine?”), **de percepție** („Ce cred elevii și părinții că știu, cred, pot?”), **de rezultat** (note, frecvență, comportament: trimiteri la cabinet, absențe). Evaluarea e **ciclică** (autoanaliză, analiza programelor, evaluarea de către superior, revizuirea obiectivelor).',
 '**Programe pentru performanța academică**: abilități specifice disciplinelor sau abilități cognitive și metacognitive (planificare, automonitorizare); indirect, prin încredere, reziliență, motivație. **Educația socio-emoțională** eficientă e **secvențială, activă, focalizată, explicită** (exemplu: programul **RULER**: cuvântul pentru o emoție → desen → legătură cu materiile → discuție în familie → discuție în clasă → eseu). **Student Success Skills**: abilități cognitive și metacognitive, sociale, de autoreglare; 8 ședințe de 45 de minute + 4 sesiuni lunare de întărire.'
], retine:'Lecția de consiliere: definirea → descrierea → factori de formare → factori de menținere → plan de intervenție → evaluare.'},
{titlu:'7. Intra-, inter-, transdisciplinaritate', puncte:[
 '**Intradisciplinaritate**: organizarea conținuturilor în interiorul unei singure discipline. Avantaj: progresie sigură. Risc (D’Hainaut): „paradoxul **specialismului**”, care izolează de realitate.',
 '**Interdisciplinaritatea**: intersecția a două sau mai multe discipline (perspectivă **epistemologică**: intersecție teoretico-metodologică; perspectivă **pragmatică**: aplicarea soluțiilor din mai multe științe). Forme: domenii învecinate, **probleme** comune, **transfer de metode**. Se poate face prin **corelații** minimale sau **sistematic**, prin echipe de profesori.',
 '**Activitatea de învățare interdisciplinară** = activitate în care elevul folosește concepte, metode și instrumente din **mai multe discipline** pentru a rezolva o temă sau o problemă comună (de exemplu un proiect despre stres care folosește biologie, psihologie și limba română).',
 '**Transdisciplinaritatea**: „**dincolo**” de discipline; pornește de la teme reale și de la demersurile elevului (a comunica, a decide, a crea). Disciplinele devin **furnizori de situații** de învățare. Avantaj: viziune globală, transfer. Risc, dacă e folosită excesiv: lacune și rigoare scăzută.'
], retine:'Intra (într-o disciplină) → inter (intersecție) → trans (dincolo de discipline, pe teme reale).'},
{titlu:'8. Etapele procesului de consiliere (I. Al. Dumitru)', puncte:[
 '**a)** Stabilirea unei legături specifice cu clientul și cu **lumea** lui (gândești problemele **împreună cu** el, nu în locul lui).',
 '**b)** Invitația de a vorbi, de a-și „**spune povestea**”.',
 '**c)** **Ascultarea activă** și observarea manifestărilor (limbaj corporal atent, contact vizual, atenție la vocea și gesturile clientului).',
 '**d)** **Clarificarea** problemelor, prin reformulare: **reformularea-reflectare** (ecou, rezumat), **inversarea raportului figură–fond** (altă perspectivă), **reformularea-clarificare** (esența mesajului). Plus **parafrazarea**, **sumarizarea**, **resemnificarea** (alt cadru conceptual sau emoțional), **interpretarea**.',
 '**e)** **Conștientizarea** problemelor și a soluțiilor, într-un mediu securizant.',
 '**f)** **Confruntarea** cu propriile credințe, care sunt surse de **rezistență** (respecți ritmul clientului, fără să-l forțezi).',
 '**g)** Analiza **alternativelor** și luarea **deciziei** (raport beneficiu–cost).',
 '**h)** **Facilitarea activă a schimbării** (încurajare, sprijin, orientare).',
 '**i)** **Experimentarea și exersarea** noilor comportamente.',
 '**j)** **Funcționarea adaptativă optimă**.'
], retine:'Legătură → povestea → ascultare → clarificare → conștientizare → confruntare → decizie → facilitare → exersare → funcționare optimă.'}
]});

CARDURI.push(
 {c:'m02', q:'Definiția curriculumului', a:'Ansamblul coerent de conținuturi, metode de învățare și metode de evaluare, organizat pentru atingerea unor obiective; întreaga experiență de învățare propusă de școală.'},
 {c:'m02', q:'Trunchiul comun (curriculum nucleu)', a:'Numărul **minim** de ore la fiecare disciplină obligatorie din planul-cadru; unicul sistem de referință pentru evaluările și examenele naționale și pentru standardele de performanță.', term:'Trunchi comun', short:'minimul obligatoriu de ore; referință pentru examene'},
 {c:'m02', q:'Variantele CDS', a:'- **Nucleu aprofundat:** aprofundează partea obligatorie\n- **Extins:** parcurge și elementele marcate cu asterisc / extinde competențele\n- **Elaborat în școală:** discipline sau teme noi (adesea interdisciplinare)'},
 {c:'m02', q:'Curriculum ascuns (subliminal)', a:'Valorile, regulile și conduitele transmise implicit de școală (ritualuri, climat), fără să fie formulate explicit.', term:'Curriculum ascuns', short:'valori transmise implicit, prin climat și ritualuri'},
 {c:'m02', q:'Curriculum învățat (realizat)', a:'Achizițiile reale, interiorizate de elevi; rezultatul tuturor tipurilor de curriculum, vizibil în rezultatele evaluării.'},
 {c:'m02', q:'Nota de prezentare a programei – de ce e necesară?', a:'Arată statutul și locul disciplinei în planul-cadru, numărul de ore, finalitățile și concepția disciplinei; orientează profesorul în interpretarea și aplicarea programei (de ce predăm disciplina și cum e gândită).'},
 {c:'m02', q:'Structura programei școlare', a:'Nota de prezentare, competențe generale, competențe specifice + activități de învățare, conținuturi, sugestii metodologice (predare, evaluare); uneori standarde și bibliografie.'},
 {c:'m02', q:'Funcțiile manualului', a:'Informare, formare, antrenare a capacităților, autoinstruire.'},
 {c:'m02', q:'Cele 7 arii curriculare', a:'Limbă și comunicare; Matematică și științe; Om și societate; Arte; Educație fizică și sport; Tehnologii; **Consiliere și orientare**.'},
 {c:'m02', q:'Competențe generale vs specifice', a:'- **CG:** pe disciplină, pentru un **ciclu**, grad ridicat de generalitate\n- **CS:** pe disciplină, pentru **un an**, derivate din CG, cu unități de conținut asociate'},
 {c:'m02', q:'Relația dintre CG și CS (formulare de examen)', a:'CS **derivă** din CG și le **operaționalizează** pe un an de studiu; sunt **etape** în formarea CG. Numerotarea arată legătura (CS 2.2 ← CG 2).'},
 {c:'m02', q:'Pașii planificării calendaristice', a:'1. Identifici competențele\n2. Analizezi conținutul, delimitezi unitățile de învățare\n3. Eșalonezi în timp\n4. Distribui timpul pe predare, fixare, evaluare'},
 {c:'m02', q:'Cele 4 întrebări ale proiectării didactice', a:'Ce voi face? (obiective) · Cu ce voi face? (resurse) · Cum voi face? (strategii) · Cum voi ști dacă am realizat? (evaluare)'},
 {c:'m02', q:'Reguli de formulare a obiectivelor operaționale', a:'Descriu schimbarea la elev; verbe de acțiune observabile; o singură operație; formulare concisă; derivate logic. Pași: performanța, condițiile, criteriul de reușită.'},
 {c:'m02', q:'Etapele proiectării lecției de Consiliere și orientare', a:'1. Definirea problemei\n2. Descrierea (comportamentală, cognitivă, emoțională)\n3. Factorii de formare\n4. Factorii de menținere și activare\n5. **Planul de intervenție** (cea mai importantă etapă)\n6. Evaluarea'},
 {c:'m02', q:'Tipuri de date în evaluarea unui program de consiliere', a:'**De proces** (ce ai făcut, pentru cine), **de percepție** (ce cred că știu sau pot), **de rezultat** (note, frecvență, comportament).'},
 {c:'m02', q:'Educația socio-emoțională eficientă are 4 trăsături', a:'Secvențială, activă, focalizată, explicită.'},
 {c:'m02', q:'Activitatea de învățare interdisciplinară', a:'Activitate în care elevul folosește concepte, metode și instrumente din mai multe discipline pentru a rezolva o temă sau o problemă comună.', term:'Activitate interdisciplinară', short:'mai multe discipline pe o temă comună'},
 {c:'m02', q:'Intra- vs inter- vs transdisciplinaritate', a:'- **Intra:** în interiorul unei discipline\n- **Inter:** intersecția mai multor discipline (probleme, metode)\n- **Trans:** „dincolo” de discipline, pe teme reale; disciplinele furnizează situații de învățare'},
 {c:'m02', q:'Etapele procesului de consiliere (I. Al. Dumitru)', a:'Legătura → „povestea” → ascultarea activă → clarificarea → conștientizarea → confruntarea cu credințele → decizia → facilitarea schimbării → exersarea → funcționarea adaptativă optimă.'},
 {c:'m02', q:'Cele 3 procedee de reformulare (Mucchielli)', a:'- **Reformularea-reflectare** (ecou, rezumat)\n- **Inversarea raportului figură–fond** (altă perspectivă)\n- **Reformularea-clarificare** (esența mesajului)'},
 {c:'m02', q:'Parafrazare vs sumarizare', a:'- **Parafrazare:** reformulezi spusele clientului în cuvinte proprii, echivalente\n- **Sumarizare:** sinteză concisă a unui conținut vast'}
);

GRILE.push(
 {c:'m02', q:'Curriculum nucleu corespunde:', o:['CDS','trunchiului comun','curriculumului extins','curriculumului ascuns'], r:1},
 {c:'m02', q:'Varianta de CDS care parcurge și elementele marcate cu asterisc:', o:['nucleu aprofundat','extins','elaborat în școală','opționalul integrat'], r:1},
 {c:'m02', q:'Competențele specifice se definesc pentru:', o:['un ciclu de învățământ','un an de studiu','o lecție','întreaga școlaritate'], r:1},
 {c:'m02', q:'Partea programei care prezintă statutul și concepția disciplinei:', o:['sugestiile metodologice','nota de prezentare','conținuturile','standardele'], r:1},
 {c:'m02', q:'Întrebarea „Cu ce voi face?” vizează:', o:['obiectivele','resursele','strategiile','evaluarea'], r:1},
 {c:'m02', q:'Etapa considerată cea mai importantă în proiectarea lecției de consiliere:', o:['definirea problemei','descrierea problemei','planul de intervenție','evaluarea'], r:2},
 {c:'m02', q:'Curriculumul transmis implicit, prin climat și ritualuri, este:', o:['formal','ascuns','recomandat','testat'], r:1},
 {c:'m02', q:'Câte arii curriculare are Curriculumul Național din România?', o:['5','6','7','9'], r:2},
 {c:'m02', q:'Abordarea care pornește de la teme reale, „dincolo” de discipline:', o:['intradisciplinară','pluridisciplinară','interdisciplinară','transdisciplinară'], r:3},
 {c:'m02', q:'Procedeul de reformulare prin care clientul e provocat să vadă lucrurile din altă perspectivă:', o:['reflectarea-ecou','inversarea raportului figură–fond','sumarizarea','parafrazarea'], r:1}
);

AF.push(
 {c:'m02', s:'Competențele specifice derivă din competențele generale.', v:true},
 {c:'m02', s:'Un obiectiv operațional descrie activitatea profesorului.', v:false, e:'Descrie schimbarea așteptată la elev.'},
 {c:'m02', s:'Consiliere și orientare este una dintre ariile curriculare.', v:true},
 {c:'m02', s:'Trunchiul comun este referința pentru evaluările și examenele naționale.', v:true},
 {c:'m02', s:'Factorii de formare a problemei sunt stabiliți de profesor și impuși grupului.', v:false, e:'Sunt identificați de grupul care se confruntă cu problema.'},
 {c:'m02', s:'Planificarea săptămânală a consilierului este mai flexibilă decât cea anuală.', v:true},
 {c:'m02', s:'Transdisciplinaritatea folosită excesiv poate duce la lacune și rigoare scăzută.', v:true}
);

/* ---- content/capitole/m03.js ---- */
/* METODICĂ III – Desfășurarea activității: metode, demersuri, forme de organizare, mijloace */
CAPITOLE.push({id:'m03', parte:'Metodica disciplinei', nr:'M3', emoji:'🎭', scurt:'Metode și mijloace',
titlu:'Desfășurarea activității: metode, forme de organizare, mijloace',
sectiuni:[
{titlu:'1. Metodele de învățământ: relevanță și funcții', puncte:[
 'Nicio metodă nu e bună sau rea **în sine**: eficiența depinde de **modul concret de valorificare** și de integrarea în strategie (Ionescu). Metodele sunt **potențial** utile.',
 'Metoda e **elementul de legătură** între componentele procesului la nivel micro (obiective, conținuturi, resurse, relații). Însoțește acțiunea educativă, dar nu se confundă cu ea.',
 '**Funcțiile metodelor** (caracter **polifuncțional**): **formativă** (exersează procesele psihice, modelează atitudini), **cognitivă** (cale de a afla, de a descoperi), **motivațională** (stârnesc interesul, curiozitatea), **de impulsionare a dezvoltării**, **operațională / instrumentală** (tehnică de execuție), **normativă** (arată cum să procedezi), plus **funcția de evaluare**.',
 '**Complementaritatea**: metodele tradiționale și cele moderne se combină. Metodele tradiționale (expunerea, conversația, demonstrația) s-au modernizat prin elemente noi (dialog, mijloace moderne).'
], retine:'Funcții: formativă, cognitivă, motivațională, de impulsionare, instrumentală, normativă, de evaluare.'},
{titlu:'2. Taxonomia metodelor (M. Ionescu)', puncte:[
 '**A. Metode de transmitere și însușire a cunoștințelor**: **A.1. comunicare orală**: **expozitive** (expunerea, povestirea, descrierea, **explicația**, prelegerea, conferința-dezbatere), **conversative** (conversația, discuția, **dezbaterea**, asaltul de idei), **problematizarea**; **A.2. comunicare scrisă** (lectura, munca cu manualul, referatul); **A.3. comunicare cu limbajul interior** (reflecția personală); **A.4. comunicare interpersonală** (învățarea prin cooperare).',
 '**B. Metode de explorare a realității**: **directă** (observația sistematică și independentă, experimentul, cercetarea) și **indirectă** (**demonstrația**, modelarea, abordarea euristică, descoperirea).',
 '**C. Metode bazate pe acțiune practică**: **reală** (**exercițiul**, rezolvarea de probleme, lucrările experimentale, **studiul de caz**, **proiectul**) și **simulată** (**jocul de rol**, jocurile didactice, simulatoarele).',
 '**Demonstrația** (metodă tradițională, de explorare indirectă) = prezentarea unui obiect, fenomen sau comportament **real sau substitut** (model, imagine, film), pentru a forma reprezentări corecte sau pentru a-l învăța pe elev să execute o acțiune. Forme: demonstrația cu **obiecte**, cu **acțiuni / comportamente** (modelare), cu **substitute** (modele, desene, imagini), **audiovizuală**. Cerințe: elevii să perceapă clar; demonstrația să fie însoțită de **explicație**; elevii să fie **activi** (să observe dirijat, apoi să exerseze); materialul să fie potrivit vârstei și scopului.'
], retine:'A. transmitere (orală, scrisă, interioară, interpersonală) · B. explorare (directă / indirectă) · C. acțiune (reală / simulată).'},
{titlu:'3. Metode folosite în consiliere (1)', puncte:[
 '**Observația**: comportament **nonverbal** (privire, mimică, postură), **paraverbal** (voce, pauze, tremur) și **verbal**. Cerințe: stabilești ce observi, faci multe observații, le notezi, le faci în condiții variate, sistematic. Instrumente: fișa de observație, fișa psihopedagogică, caietul dirigintelui.',
 '**Conversația**: sinceritate, climat de încredere și empatie, notarea răspunsurilor după ședință. Tipuri de întrebări: **închise** (da/nu, utile doar pentru date esențiale), **deschise** (cele mai eficiente; „Poți să-mi descrii…?”), **„de ce?”** (riscante: culpabilizează, trimit în trecut, generează defensivă), **ipotetice** (orientează spre viitor: „Cum ai vrea să fii peste 4 ani?”). Conversația e **euristică** atunci când soluția e găsită împreună și trăită personal de elev.',
 '**Problematizarea**: îl pune pe elev într-o stare **conflictuală intelectuală**, pozitivă. În consiliere problema **nu e creată de consilier**, ci **aparține clientului**; conflictul are și dimensiune afectivă, atitudinală și volitivă și e văzut ca **benefic**. Poate dura 10–12 ședințe.',
 '**Brainstormingul** (Alex **Osborn**, „asalt de idei”): un grup de **3–12** persoane; principiul **amânării evaluării** ideilor; climat permisiv; scopul e **cantitativ** (cât mai multe idei); în consiliere aduce și **catharsis**.',
 '**Cooperarea**: etape: stabilirea temei și a obiectivelor → împărțirea sarcinilor pe echipe → discutarea rezultatelor în echipe → discutarea rezultatelor între echipe → verificarea concluziilor.',
 '**Psihodrama** (J. L. **Moreno**, „explorarea adevărului prin metodele dramei”): analiza și reînvățarea rolurilor rigidizate; principiile ei sunt interacțiunea activă, explorarea dramaturgică, **catharsisul**, rolurile mobile. **Tehnica scaunului gol**: elevul îi vorbește părintelui imaginat pe scaun, apoi schimbă locul și vorbește „ca și cum” ar fi el (antrenează empatia).',
 '**Dezbaterea**: anunțarea temei → organizarea grupurilor sau perechilor → schimbul de păreri → concluziile. Condiții: păreri argumentate, ascultare, concluzii clare.'
], retine:'Întrebări: deschise (cele mai bune), închise (doar date), „de ce?” (riscante), ipotetice (orientate spre viitor).'},
{titlu:'4. Metode folosite în consiliere (2)', puncte:[
 '**Studiul de caz** = confruntarea directă cu o **situație reală, autentică**, tipică pentru o categorie de situații problematice (cazul e particular, dar **reprezentativ**). Etape: **identificarea (modelarea, simularea) cazului** → **studiul analitic** (cauze, relații) → **reorganizarea informației / obținerea de informații noi** → **variantele de rezolvare și soluția optimă** → **verificarea** soluției înainte de aplicarea generalizată. Exemplu: întârzierea sistematică la ore, cu cauze posibile la elev, în familie sau în anturaj.',
 'Variantă a studiului de caz la clasă: alegerea cazului (real, dar fără detalii sensibile, sau imaginar) → prezentarea → gruparea elevilor → analiza (problema, cauze, efecte, soluții) → prezentarea rezultatelor → alegerea celor mai bune soluții. Tipuri de cazuri: **descriptiv**, **evolutiv**, **interactiv**. Rolul consilierului: precizează obiectivele, dă roluri, favorizează exprimarea liberă, amintește regulile, sumarizează.',
 '**Cerințe pentru studiul de caz**: să existe o **situație** de analizat; cazul să fie **adecvat scopului** didactic; să fie **tipic, reprezentativ**; să conțină informații suficiente; să fie potrivit vârstei; să nu permită identificarea unor persoane reale.',
 '**Proiectul**: definirea proiectului (tip, durată, obiective) → resursele → realizarea (începere, desfășurare, finalizare, dificultăți) → **evaluarea** (cine? auto- și heteroevaluare; când? pe parcurs și la final; cum? prin rezultate și prin depășirea eșecurilor).',
 '**Portofoliul** în consiliere nu evaluează personalitatea, ci orientează spre **autocunoaștere**, adaptare și integrare: teste, chestionare, fișe de autocunoaștere, interese, aspirații, informații despre meserii.',
 '**Jocul de rol**: descrierea situației și schița scenariului → distribuirea rolurilor (actori, spectatori, **observatori**; rolurile se dau „în secret”) → decorul → jocul → analiza (de către actori, observatori și clasă) → dezbaterea finală → concluziile. Timp orientativ: 5–10 minute pregătire, 10–15 minute joc, 25–35 minute analiză. Dezvoltă controlul reacțiilor și **empatia**.',
 '**Panelul**: un sfert din clasă dezbate tema în semicerc, iar ceilalți ascultă și trimit întrebări pe bilețele.',
 'Alte metode: **posterul / colajul**, **metafora**, **fotografiile**, **analiza cauză–efect** (consecințe imediate și îndepărtate, asupra sa și asupra altora), **argumentarea** (pro și contra, cu deplasarea elevilor în sală), **fabula / povestirea** (identificarea cu personajele), **procesul** (cu judecător, avocați, jurați).'
], retine:'Studiul de caz: identificare → analiză → informații noi → variante și soluția optimă → verificare.'},
{titlu:'5. Demersuri creative', puncte:[
 '**Abordarea euristică** = principiu director al metodologiei: elevii **descoperă adevărul** refăcând drumul elaborării cunoștințelor prin activitate proprie (Bocoș).',
 '**Învățarea prin descoperire**: investigații proprii, independente. Tipuri de descoperiri: **inductive** (de la particular la general), **deductive** (de la general la particular), **transductive** (de la particular la particular, specifice gândirii artistice), **analogice**.',
 '**Învățarea prin problematizare** = căutarea independentă a soluției la o **problemă tensională, contradictorie**. Etape: **I. sesizarea** și formularea problemei, cu dorința de a o rezolva → **II. analiza** problemei → **III. căutarea independentă a soluțiilor** (ipoteze, testare) → **IV. obținerea rezultatului** și evaluarea lui → **V. personalizarea** și integrarea achizițiilor noi.',
 'Problematizarea e **activă** pentru că: creează **motivație intrinsecă**, reactualizează achizițiile anterioare, cere efort intelectual (dezvoltă creativitatea și gândirea critică), dezvoltă reflecția metacognitivă, implică toată personalitatea (intelectual, afectiv, volitiv). **Avantaje**: învățare temeinică, transfer, autonomie. **Limite**: consumă mult timp, nu se potrivește oricărui conținut, cere elevi pregătiți.',
 '**Învățarea prin cercetare**: elevul are rol de **cercetător**, cu dirijare minimă; își stabilește singur strategia, ipotezele și verificarea.',
 '**Învățarea prin cooperare**: organizarea muncii în grup după obiective clare, cu **interdependență pozitivă**. Structuri de scop: **cooperativă** (reușesc doar împreună), **competitivă** (interdependență negativă), **individualistă**. Etape: **destructurarea cognitivă** (confruntarea ideilor) → **tatonarea și reflecția colectivă** → **interacțiunea și confruntarea** ideilor → **construcția colectivă** a cunoașterii (bilanț). Elevii învață **unii de la alții** (peer learning).'
], retine:'Problematizarea: sesizare → analiză → căutarea soluției → rezultat → personalizare.'},
{titlu:'6. Forme de organizare a consilierii', puncte:[
 'Forme: consiliere **individuală**, **de grup**, a **cuplului / familiei**, a unei **organizații**, a elevilor cu **CES**.',
 '**Ce au comun** consilierea individuală și cea de grup (responsabilitățile consilierului): clarificarea sentimentelor, reflecția asupra lor, reformularea, **acceptarea necondiționată**, restructurarea atitudinală.',
 '**Diferențe**: în grup accentul trece pe **dinamica relațiilor interpersonale**; apar alte valori și stiluri de viață ca **alternative neimpuse**; consiliatul poate **oferi ajutor**, nu doar primi (act terapeutic în sine).',
 '**Consilierea individuală**: definirea problemei (prezență activă, ascultare activă) → formularea obiectivelor → planificarea acțiunii. Regula celor **trei „i”**: a **întrerupe** comportamentele neproductive, a **interveni**, a **influența**. **Avantaje**: profunzime, soluții personalizate, confidențialitate. **Limite**: consumă mult timp, ajunge la puțini elevi, fără sprijinul grupului.',
 '**Consilierea de grup**: grupuri de **4–6 până la 10–14** persoane; stagiu de minimum **30 de ore**; grupul trebuie să fie **coeziv**. **Avantaje**: atenuează competiția, oferă interacțiuni bogate și intercunoaștere, permite exersarea comportamentelor sociale, ajunge la mai mulți elevi. **Limite**: confidențialitate mai greu de asigurat, mai puțină atenție individuală, riscul presiunii grupului.',
 '**Consilierea familială**: 30–60 de minute, maximum 2–3 familii cu probleme similare; nu trebuie să creeze tensiune; atitudine caldă, neautoritară, confidențială.',
 '**Elevii cu CES**: se lucrează împreună cu medicul, psihologul, asistentul social și familia; obiective: cunoașterea particularităților, informarea despre oferte de recuperare și profesionalizare, evaluarea resurselor.'
], retine:'Individual: profunzime / puțini elevi. Grup (4–14 persoane, coeziv): interacțiune, exersare / confidențialitate mai greu de asigurat.'},
{titlu:'7. Mijloacele de învățământ', puncte:[
 '**Mijloacele de învățământ** = instrumente care facilitează transmiterea cunoștințelor, formarea deprinderilor, evaluarea și aplicațiile (Cucoș). Cerghit: un ansamblu de instrumente, materiale, produse adaptate pentru instruire. Se integrează prin raportarea permanentă la **obiective, conținuturi și metode**.',
 '**Funcțiile mijloacelor** (Ionescu): **stimulativă** (motivație), **formativă** (operațiile gândirii), **informativă**, **ilustrativ-demonstrativă**, **de investigare experimentală**, **ergonomică** (economisește efort), **substitutivă** (învățământ la distanță), **de evaluare**, **estetică**, **de orientare a intereselor** (profesiuni).',
 '**Tipuri**: mijloace care **conțin mesajul** didactic (obiecte naturale, machete, planșe, scheme, suporturi audio-video) și mijloace care **facilitează transmiterea** mesajului (aparate, calculatoare, jocuri didactice, simulatoare). Altă clasificare: hardware **fără** software propriu (tipărituri, modele) și hardware **cu** software propriu (vizuale, auditive, audiovizuale, dialog elev–mașină).',
 'Caracteristici: **flexibilitate**, **generalitate**, **paralelism** (folosire simultană), **accesibilitate**, **siguranță în funcționare**.',
 '**Mijloacele tehnice de instruire** fac parte din sfera mai largă a mijloacelor de învățământ. Se clasifică după analizatorul implicat (**vizuale, auditive, audiovizuale**) și după imagine: **statice** („de meditație”) sau **dinamice** („de fascinație”: film, TV, calculator). Calitatea lor depinde de factori **pedagogici, tehnici, economici, ergonomici**.',
 'Mijloace și tehnici specifice orelor de consiliere: **bulgărele de zăpadă**, **ciorchinele**, studiul de caz, **jocul didactic** (cel mai folosit), **„Apa curgătoare”** (un pod din cuvinte spre meseria dorită), **„Floarea ofilită”** și **„Hârtia mototolită”** (cuvintele nepotrivite rănesc).',
 '**Mediul relațional și comunicațional**: consilierul trebuie să fie **comunicativ** (disponibil pentru interacțiune, sociabil) și să aibă competențe comunicative ridicate. Reușita consilierii depinde de stilul de comunicare.'
], retine:'Funcțiile mijloacelor: stimulativă, formativă, informativă, ilustrativă, experimentală, ergonomică, substitutivă, de evaluare, estetică, de orientare.'}
]});

CARDURI.push(
 {c:'m03', q:'Funcțiile metodelor de învățământ', a:'Formativă, cognitivă, motivațională, de impulsionare a dezvoltării, operațională/instrumentală, normativă (+ de evaluare).'},
 {c:'m03', q:'Taxonomia metodelor (Ionescu) – cele 3 mari grupe', a:'A. De transmitere și însușire a cunoștințelor (comunicare orală, scrisă, interioară, interpersonală)\nB. De explorare a realității (directă / indirectă)\nC. Bazate pe acțiune practică (reală / simulată)'},
 {c:'m03', q:'Demonstrația – definiție', a:'Metodă tradițională de explorare indirectă: prezentarea unui obiect, fenomen sau comportament real ori substitut, pentru a forma reprezentări corecte sau pentru a învăța executarea unei acțiuni.', term:'Demonstrația', short:'prezentarea unui model real sau substitut'},
 {c:'m03', q:'Forme ale demonstrației', a:'Cu obiecte naturale; cu acțiuni / comportamente (modelare); cu substitute (modele, desene, imagini); audiovizuală.'},
 {c:'m03', q:'Cerințe în utilizarea demonstrației', a:'Toți elevii percep clar; demonstrația e însoțită de explicație; elevii observă dirijat și apoi exersează; materialul e potrivit vârstei și scopului.'},
 {c:'m03', q:'Tipuri de întrebări în conversația de consiliere', a:'- **Deschise:** cele mai eficiente\n- **Închise:** da/nu, doar pentru date\n- **„De ce?”:** riscante (culpabilizează, trimit în trecut)\n- **Ipotetice:** orientează spre viitor'},
 {c:'m03', q:'Problematizarea în consiliere vs în didactică', a:'În didactică, profesorul creează situația-problemă. În consiliere, problema **aparține clientului**; consilierul o formulează împreună cu el, iar conflictul e văzut ca benefic (are și dimensiune afectivă și volitivă).'},
 {c:'m03', q:'Brainstormingul', a:'Metodă de stimulare a creativității de grup (Osborn): 3–12 persoane, **amânarea evaluării**, climat permisiv, cât mai multe idei. În consiliere aduce și catharsis.', term:'Brainstorming', short:'asalt de idei, evaluarea e amânată'},
 {c:'m03', q:'Tehnica scaunului gol', a:'Elevul îi vorbește persoanei cu care e în conflict, imaginată pe un scaun gol, apoi schimbă locul și vorbește ca ea. Exteriorizează și clarifică conflictul, antrenează empatia (psihodramă, Moreno).'},
 {c:'m03', q:'Studiul de caz – definiție', a:'Metodă de confruntare directă cu o situație reală, autentică, tipică și reprezentativă pentru o categorie de situații problematice, analizată pentru a lua o decizie optimă.', term:'Studiul de caz', short:'situație reală, tipică, analizată pentru o decizie'},
 {c:'m03', q:'Etapele studiului de caz', a:'1. Identificarea / prezentarea cazului\n2. Studiul analitic (cauze, relații)\n3. Reorganizarea informației / informații noi\n4. Variantele de rezolvare și soluția optimă\n5. Verificarea soluției'},
 {c:'m03', q:'Cerințe didactice în studiul de caz', a:'Să existe o situație de analizat; cazul să fie adecvat scopului; să fie tipic, reprezentativ; să conțină informații suficiente; să fie potrivit vârstei; fără elemente de identificare a unor persoane reale.'},
 {c:'m03', q:'De ce studiul de caz e o metodă activă?', a:'Elevii analizează, caută cauze, compară soluții și iau decizii; învață prin efort propriu, colaborare și argumentare; se confruntă cu situații reale și își transferă cunoștințele.'},
 {c:'m03', q:'Etapele jocului de rol', a:'Descrierea situației → distribuirea rolurilor (actori, spectatori, observatori) → decorul → jocul → analiza (actori, observatori, clasă) → dezbaterea finală → concluzii.'},
 {c:'m03', q:'Etapele învățării prin problematizare', a:'I. Sesizarea și formularea problemei\nII. Analiza problemei\nIII. Căutarea independentă a soluțiilor (ipoteze)\nIV. Obținerea și evaluarea rezultatului\nV. Personalizarea achizițiilor'},
 {c:'m03', q:'2 avantaje ale problematizării', a:'Motivație intrinsecă; învățare temeinică și transfer; dezvoltă gândirea critică și creativitatea; autonomie; reflecție metacognitivă (oricare 2).'},
 {c:'m03', q:'Tipuri de descoperiri didactice', a:'Inductive, deductive, transductive, analogice.'},
 {c:'m03', q:'Structurile de scop (învățarea prin cooperare)', a:'- **Cooperativă:** interdependență pozitivă\n- **Competitivă:** interdependență negativă\n- **Individualistă:** reușita unuia nu îi afectează pe ceilalți'},
 {c:'m03', q:'Regula celor 3 „i” în consilierea individuală', a:'A **întrerupe** (comportamentele neproductive), a **interveni** (sprijin, analiză), a **influența** (spre o imagine de sine și un comportament mai bune).'},
 {c:'m03', q:'Consilierea individuală vs de grup – diferențe', a:'În grup: accent pe dinamica relațiilor interpersonale; alte valori apar ca alternative neimpuse; consiliatul poate și oferi ajutor.'},
 {c:'m03', q:'Parametrii consilierii de grup', a:'Grupuri de 4–6 până la 10–14 persoane; stagiu de minimum 30 de ore; grup coeziv.'},
 {c:'m03', q:'Funcțiile mijloacelor de învățământ (oricare 5)', a:'Stimulativă, formativă, informativă, ilustrativ-demonstrativă, de investigare experimentală, ergonomică, substitutivă, de evaluare, estetică, de orientare a intereselor.'},
 {c:'m03', q:'Mijloace tehnice statice vs dinamice', a:'- **Statice** („de meditație”): proiecție fixă\n- **Dinamice** („de fascinație”): film, TV, calculator'}
);

GRILE.push(
 {c:'m03', q:'Demonstrația face parte din metodele de:', o:['comunicare orală expozitivă','explorare indirectă a realității','acțiune simulată','comunicare scrisă'], r:1},
 {c:'m03', q:'Jocul de rol este o metodă bazată pe acțiune:', o:['reală','simulată','expozitivă','de comunicare scrisă'], r:1},
 {c:'m03', q:'Întrebările considerate riscante în consiliere:', o:['deschise','ipotetice','„de ce?”','de clarificare'], r:2},
 {c:'m03', q:'Principiul de bază al brainstormingului:', o:['critica imediată','amânarea evaluării','votul majorității','lucrul individual'], r:1},
 {c:'m03', q:'Psihodrama a fost fundamentată de:', o:['Osborn','Moreno','Rogers','Bruner'], r:1},
 {c:'m03', q:'Prima etapă a studiului de caz:', o:['alegerea soluției','identificarea / prezentarea cazului','verificarea','studiul analitic'], r:1},
 {c:'m03', q:'În învățarea prin cooperare, structura cu interdependență pozitivă este:', o:['competitivă','individualistă','cooperativă','frontală'], r:2},
 {c:'m03', q:'Mărimea recomandată a grupului de consiliere:', o:['2–3','4–6 până la 10–14','20–25','întreaga școală'], r:1},
 {c:'m03', q:'Funcția mijloacelor care permite învățământul la distanță:', o:['estetică','substitutivă','ergonomică','stimulativă'], r:1},
 {c:'m03', q:'Descoperirea în care gândirea merge de la particular la general este:', o:['deductivă','inductivă','transductivă','analogică'], r:1}
);

AF.push(
 {c:'m03', s:'O metodă de învățământ este eficientă sau ineficientă în sine.', v:false, e:'Eficiența depinde de modul concret de valorificare.'},
 {c:'m03', s:'În consiliere, problema la care se lucrează prin problematizare aparține clientului.', v:true},
 {c:'m03', s:'Brainstormingul urmărește în primul rând calitatea, nu cantitatea ideilor.', v:false, e:'Scopul este cantitativ: cât mai multe idei.'},
 {c:'m03', s:'În consilierea de grup, consiliatul poate și oferi ajutor, nu doar primi.', v:true},
 {c:'m03', s:'Cazul ales pentru un studiu de caz trebuie să fie tipic, reprezentativ.', v:true},
 {c:'m03', s:'Mijloacele tehnice de instruire au o sferă mai largă decât mijloacele de învățământ.', v:false, e:'Sunt subordonate mijloacelor de învățământ.'},
 {c:'m03', s:'Portofoliul în consiliere are ca scop principal notarea personalității elevului.', v:false, e:'Orientează spre autocunoaștere și integrare.'}
);

/* ---- content/capitole/m04.js ---- */
/* METODICĂ IV – Evaluarea educațională */
CAPITOLE.push({id:'m04', parte:'Metodica disciplinei', nr:'M4', emoji:'📏', scurt:'Evaluarea',
titlu:'Elemente de evaluare educațională',
sectiuni:[
{titlu:'1. Curriculum și evaluare; scopul evaluării', puncte:[
 'Predarea, învățarea și evaluarea se abordează **unitar**: schimbarea uneia le influențează pe celelalte („reacție în lanț”). **Eficiența curriculumului** se vede prin evaluare.',
 '**Scopul evaluării** (Cucoș): nu e să eticheteze și să ierarhizeze elevii, ci să **perfecționeze continuu** procesul, prin identificarea punctelor slabe și **autoreglare**. Pe scurt: **orientarea** activităților viitoare, **reglarea** predării și învățării, **certificarea** nivelului atins, **perfecționarea** procesului.',
 'Principiul de bază: **evaluarea reflectă predarea**, iar predarea răspunde la feedback-ul evaluării. Totuși, metodele de evaluare nu sunt simple copii ale celor de predare.'
], retine:'Scopurile evaluării: orientare, reglare, certificare, perfecționare.'},
{titlu:'2. Evaluarea procesului de consiliere', puncte:[
 'Se folosesc instrumente **predominant calitative**, cu elemente cantitative. **Calitative**: satisfacția beneficiarilor, sentimentul de utilitate, încrederea, flexibilitatea, comunicarea ameliorată. **Cantitative**: numărul de beneficiari, rata de continuare a studiilor sau de angajare.',
 'Instrumente: chestionare, grile de evaluare, interviuri, opinii ale experților externi, **studiul de caz**, inter-evaluarea cabinetelor, compararea cu un grup fără acel serviciu.',
 'Perspective de evaluare a eficacității: **individul** (beneficii pentru carieră), **școala**, **angajatorul**, **societatea**.',
 '**Indicatori** de eficiență (pot fi notați pe o scală **Likert** cu 5 trepte): motivație, efort și perseverență crescute, comportamente planificate, plăcerea lucrului individual și în grup, mai multe întrebări puse, **încredere în sine**, toleranță, **autoevaluare mai exactă**, mai puține apeluri la ajutor extern, opinii personale argumentate, stil propriu de învățare.'
], retine:'În consiliere: evaluare predominant calitativă (satisfacție, încredere, comunicare) + date cantitative.'},
{titlu:'3. Etapele și funcțiile evaluării', puncte:[
 '**Etapele** demersului evaluativ: **măsurarea** (colectarea obiectivă de date, cu instrumente) → **aprecierea** (judecata de valoare: notă, calificativ, raportare la criterii) → **decizia** (măsuri: promovare, orientare, ameliorare, diferențiere). Evaluare = **măsurare + apreciere + decizie**.',
 'Deciziile pot fi de două tipuri: de **recunoaștere** a rezultatelor (promovat / respins, orientare) sau de **perfecționare** a instruirii (diferențiere, recuperare, schimbarea strategiei).',
 '**Funcții generale**: **constatativă** („ce este și cum este?”), **diagnostică** („de ce este așa?”), **predictivă / de prognoză** („cum poate fi ameliorat, ce va fi?”). Alte funcții: de **orientare**, educativ-stimulativă și **motivațională**, de **clasificare / selecție**, de **feedback** (reglare), **social-economică**.',
 '**Funcții specifice** (Cucoș): **motivațională**, **decizională** (plasarea elevului în ierarhie), **informațională** (pentru elevi, părinți, societate).',
 'Pentru **profesor**: informații despre atingerea obiectivelor, cauzele dificultăților, perfecționarea stilului didactic. Pentru **elev**: orientează învățarea, arată ce și cum trebuie învățat, formează **autoevaluarea**, crește motivația, întărește legătura cu familia.'
], retine:'Măsurare → apreciere → decizie. Funcții: constatativă, diagnostică, predictivă.'},
{titlu:'4. Strategii și tipuri de evaluare', puncte:[
 '**Criterială** (prin obiective): raportare la **standarde și la performanța minimă acceptată**; câștigă teren (programele conțin competențe unitare pentru toți elevii). **Normativă** (comparativă): elevii sunt comparați și ierarhizați; e tradițională și tot mai criticată.',
 '**Evaluarea inițială**: la **începutul** unui program; e **diagnostică și predictivă**, nu de control; arată nivelul de pornire și orientează planul de lucru („o punte între o stare precedentă și una viitoare”). Se face oral, dar mai ales prin probe scrise.',
 '**Evaluarea formativă (continuă)**: pe **tot parcursul**, frecventă, **criterială**; e centrată pe **proces**, urmărește remedierea lacunelor; greșelile sunt momente ale învățării; elevul **nu e judecat** prin note. Varianta ei desăvârșită e **evaluarea formatoare**: elevul își interiorizează criteriile și își **autoreglează** învățarea.',
 '**Evaluarea sumativă (finală, cumulativă)**: de **bilanț**, la **sfârșitul** unei unități sau perioade; centrată pe **rezultat**, nu pe cum s-a ajuns la el; se finalizează cu notă, calificativ sau diplomă; servește **certificării**, ierarhizării și deciziilor (promovare). Transparența criteriilor îi reduce efectele negative.',
 '**Comparație inițială vs finală** (subiect de examen): **momentul** (început / sfârșit); **scopul** (diagnostic și predictiv / bilanț și certificare); **referința** (punctul de plecare / obiectivele atinse); **efectul** (planificarea demersului / decizii de promovare, ierarhizare și ameliorare a programului). La Consiliere și orientare, evaluarea inițială arată nevoile clasei (de exemplu un chestionar de interese), iar cea finală arată progresul (de exemplu reluarea chestionarului sau portofoliul final). Nu se exclud, ci se **completează**.',
 'Formele sunt **complementare**: o evaluare eficace e **continuă și completă**, prin îmbinarea lor.'
], retine:'Inițială (diagnostic, predictiv) · formativă (proces, remediere) · sumativă (bilanț, certificare).'},
{titlu:'5. Metode de evaluare', puncte:[
 '**Tradiționale**: **orală** (cea mai subiectivă; afectată de efectele halo, contrast, Pygmalion; esențială la limbi și comunicare), **scrisă** (control curent de 15–20 de minute, examinări scurte de 5 minute, lucrări de sfârșit de capitol, teze), **probe practice** (evaluează și procesul, nu doar produsul), **testul**.',
 '**Complementare (alternative)**: **observarea sistematică** a comportamentului, **portofoliul**, **proiectul**, **investigația**, **autoevaluarea**.',
 '**Observarea sistematică** = consemnarea metodică, fidelă și intenționată a comportamentelor, în fluxul lor natural. Tipuri: spontană / sistematică; directă / indirectă; integrală / selectivă; colectivă / individuală. **Instrumente** ale observării sistematice: **fișa de evaluare (calitativă)**, **scala de clasificare** (enunțuri apreciate pe o scară, de exemplu Likert) și **lista de control / verificare** (enunțuri sau comportamente bifate doar ca **prezent / absent**, **da / nu**).',
 '**Lista de control / verificare** (exemplu de subiect): enunțuri despre comportamentul observat, la care profesorul bifează **Da / Nu**. De exemplu la Consiliere: „Își exprimă opinia în grup”, „Ascultă colegii fără să-i întrerupă”, „Folosește mesaje la persoana I”, „Respectă regulile stabilite”, „Cere ajutor când are nevoie”. Avantaj: rapidă și simplă. Limită: nu arată **gradul** de manifestare.',
 '**Portofoliul** = „**cartea de vizită**” a elevului: o selecție de lucrări care arată **progresul**; are funcție formativă și informativă. Structura o stabilește profesorul, dar elevul are libertatea să-și aleagă materialele. Evaluează capacități de observare, investigare, sinteză, organizare, folosire a bibliografiei.',
 '**Proiectul**: activitate amplă, formativă și sumativă; se evaluează și **procesul**, și **produsul**. Etape: alegerea temei → planificare → cercetare → realizarea materialelor → prezentare. Structură: pagină de titlu, cuprins, introducere, dezvoltare, concluzii, bibliografie, anexe.',
 '**Investigația**: sarcină precisă, rezolvată creativ, de regulă într-o oră; are un pronunțat caracter formativ și integrator; e evaluată **holistic**.',
 '**Autoevaluarea**: elevul își apreciază performanțele în raport cu obiectivele; dezvoltă autocunoașterea și **motivația intrinsecă**; se poate face prin chestionare și scări. Calitatea evaluării făcute de profesor influențează direct capacitatea de autoevaluare a elevului.',
 '**Metoda vs instrumentul**: **metoda** acoperă tot demersul (obiective → instrument → administrare → scoruri → interpretare); **instrumentul** e partea operațională, subordonată metodei (de exemplu metoda e observarea, instrumentul e lista de control).'
], retine:'Instrumentele observării: fișa de evaluare, scala de clasificare, lista de control (da/nu).'},
{titlu:'6. Testul docimologic și itemii', puncte:[
 '**Docimologia** = știința care studiază examenele, notarea și comportamentul examinatorilor și al examinaților. **Testul docimologic** e un test pedagogic care merge până la acordarea notei și la ierarhizare; are conținut și condiții **constante** (identitatea condițiilor de aplicare și a criteriilor de apreciere).',
 'Tipuri de teste: standardizate / elaborate de profesor; orale / scrise / practice; inițiale / de progres / finale; normative / criteriale; individuale / colaborative.',
 '**Proiectarea testului**: precizarea obiectivelor (în concordanță cu conținutul) → documentarea → selecția problemelor și a tipurilor de itemi (recomandat: unul sau două tipuri) → **experimentarea** → analiza statistică și ameliorarea.',
 '**Itemul** = elementul component al testului: **sarcina + formatul + răspunsul așteptat** (Stoica). Clasificare după obiectivitatea corectării:',
 '**Itemi obiectivi**: **alegere duală** (A/F; acoperă mult, dar se pot ghici în 50% din cazuri și nu evaluează creativitatea), **alegere multiplă** (obiectivitate și fidelitate mari, ghicire redusă), **de asociere / pereche** (numărul răspunsurilor să fie mai mare decât al premiselor; nu evaluează niveluri superioare).',
 '**Itemi semiobiectivi**: **cu răspuns scurt**, **de completare**, **întrebări structurate** (mai multe sarcini pe același material-suport; fac trecerea spre itemii subiectivi).',
 '**Itemi subiectivi (cu răspuns deschis)**: **eseu structurat**, **eseu liber**, **rezolvare de probleme**. Evaluează niveluri superioare (analiză, sinteză, evaluare, creativitate), dar au **obiectivitate și fidelitate scăzute**, schema de notare e greu de construit, iar corectarea durează.',
 '**Reguli de construire a itemilor**: formulezi întâi obiectivul; formulare clară, fără ambiguități; fără indicii pentru răspuns; opțiuni plauzibile și paralele; un singur răspuns corect; lungimea opțiunilor să nu fie un indiciu; **fără formulări negative**; evită „toți”, „orice”.'
], retine:'Itemi obiectivi (duală, multiplă, asociere) · semiobiectivi (scurt, completare, structurate) · subiectivi (eseu, probleme).'},
{titlu:'7. Notarea; calitățile instrumentelor; matricea de specificații', puncte:[
 'Feluri de apreciere: **verbală**, **numerică** (în România pe o scară de la 1 la 10; o scală restrânsă e mai fidelă, dar discriminează mai puțin), **literală** (A–F), prin **culori**, prin **calificative** (în învățământul primar; nu se pot aduna sau media).',
 '**Notarea după barem** (standardizează criteriile; punctaj fix pe secvențe; folosită la examene) vs **notarea analitică**. Modele: raportare la **grup**, la **standarde unice**, **individualizată** (raportare la propriile rezultate anterioare).',
 '**Calitățile instrumentului de evaluare**: **validitatea** (măsoară ce își propune: de conținut, de construct, concurentă, predictivă, de fațadă), **fidelitatea** (rezultate constante la aplicări repetate; crește cu lungimea testului, cu itemii obiectivi, cu un barem clar), **obiectivitatea** (acordul dintre evaluatori independenți), **aplicabilitatea** (ușor de administrat și interpretat). Fidelitatea e **necesară, dar nu suficientă** pentru validitate: un test poate fi fidel fără să fie valid.',
 '**Matricea de specificații** = tabel cu **două intrări**: pe linii **conținuturile**, pe coloane **nivelurile cognitive** (Bloom revizuit: a-și aminti, a înțelege, a aplica, a analiza, a evalua, a crea); în celule, **procentele** de itemi. Numărul de itemi dintr-o celulă = procentul × numărul total de itemi. Poate fi **generală** (pentru teste sumative) sau **detaliată** (pentru unități restrânse sau teste formative).',
 'Etapele elaborării unei probe: stabilirea scopului (diagnostic / prognostic) → precizarea competențelor de evaluat → matricea de specificații → elaborarea itemilor → baremul → revizuirea după pilotare.'
], retine:'Calități: validitate, fidelitate, obiectivitate, aplicabilitate. Matricea: conținuturi × niveluri cognitive.'},
{titlu:'8. Deontologie și erori în evaluare', puncte:[
 'Valori deontologice: importante pentru **conținut**, pentru **cel evaluat** (recunoașterea efortului), pentru **procesul** evaluării (obiectivitate, acuratețe), pentru **societate**. Principii: evaluatori autorizați și credibili, norme explicite, protejarea informațiilor individuale.',
 '**Obiectivitatea** = aprecierea nu e distorsionată de evaluator și se schimbă doar dacă se schimbă obiectul evaluat. Subiectivismul nu dispare complet, dar trebuie controlat.',
 'Evaluări defectuoase: **notarea strategică** (ca să ții clasa sub control), **notarea-sancțiune** (pentru atitudini, nu pentru performanță), **notarea-etichetă**.',
 '**Efectul halo**: generalizezi o impresie inițială (de exemplu de la o disciplină la toate); variante: eroarea de generozitate, blândețea cu cei cunoscuți. Se corectează prin anonimatul lucrărilor și prin corectori din alte școli.',
 '**Efectul Pygmalion**: așteptările profesorului se adeveresc, pentru că influențează comportamentul elevului.',
 '**Ecuația personală** a examinatorului: fiecare profesor are propria grilă (generos sau exigent, evaluează cantitatea sau originalitatea).',
 '**Calitățile evaluatorului**: două dimensiuni, **pregătirea profesională** (specialitate, designul evaluării, capacitate de discriminare, colectarea corectă a informațiilor) și **atitudinea** în evaluare (etică, echidistanță, asumarea standardelor și a consecințelor, reacție promptă la erori). Simpla conștientizare a erorilor le reduce efectele.',
 '**Tendința centrală**: evitarea notelor extreme (frecventă la începători). **Similaritatea**: profesorul se ia pe sine drept reper. **Contrastul**: comparația cu lucrarea anterioară. **Ordinea**: inerția în notare (din oboseală). **Ancorarea**: supraevaluarea elementelor neașteptate. **Eroarea logică**: înlocuirea criteriilor reale cu altele secundare (efortul, forma).'
], retine:'Erori: halo, Pygmalion, ecuația personală, tendința centrală, similaritate, contrast, ordine, ancorare, eroarea logică.'}
]});

CARDURI.push(
 {c:'m04', q:'Scopurile evaluării educaționale', a:'Orientarea activităților viitoare, reglarea predării și învățării, certificarea nivelului, perfecționarea procesului.'},
 {c:'m04', q:'Etapele evaluării', a:'**Măsurare** (date) → **apreciere** (judecată de valoare) → **decizie** (măsuri).'},
 {c:'m04', q:'Funcțiile generale ale evaluării', a:'Constatativă (ce și cum este?), diagnostică (de ce?), predictivă / de prognoză (cum poate fi ameliorat, ce va fi?).'},
 {c:'m04', q:'Funcțiile specifice ale evaluării (Cucoș)', a:'Motivațională, decizională, informațională.'},
 {c:'m04', q:'Evaluarea criterială vs normativă', a:'- **Criterială:** raportare la obiective sau standarde (performanța minimă acceptată)\n- **Normativă:** comparare și ierarhizare între elevi'},
 {c:'m04', q:'Evaluarea inițială', a:'La începutul unui program; diagnostică și predictivă, nu de control; arată nivelul de pornire și orientează planificarea.', term:'Evaluarea inițială', short:'diagnostic la început, orientează planul'},
 {c:'m04', q:'Evaluarea formativă', a:'Pe tot parcursul, frecventă, criterială, centrată pe proces; remediază lacunele; greșelile sunt momente ale învățării; fără judecăți prin note.', term:'Evaluarea formativă', short:'continuă, pe proces, pentru remediere'},
 {c:'m04', q:'Evaluarea sumativă', a:'De bilanț, la final; centrată pe rezultat; se încheie cu notă, calificativ sau diplomă; servește certificării și deciziilor.', term:'Evaluarea sumativă', short:'bilanț final, certificare'},
 {c:'m04', q:'Evaluarea formatoare', a:'Forma desăvârșită a evaluării formative: elevul își interiorizează criteriile de realizare și de reușită și își autoreglează învățarea.'},
 {c:'m04', q:'Inițială vs finală – comparație', a:'**Moment:** început / sfârșit\n**Scop:** diagnostic și predictiv / bilanț și certificare\n**Referință:** punctul de plecare / obiectivele atinse\n**Efect:** planificare / decizii, ierarhizare, ameliorarea programului\nSunt complementare.'},
 {c:'m04', q:'Metode tradiționale vs complementare de evaluare', a:'**Tradiționale:** orală, scrisă, probe practice, test\n**Complementare:** observarea sistematică, portofoliul, proiectul, investigația, autoevaluarea'},
 {c:'m04', q:'Instrumentele observării sistematice', a:'Fișa de evaluare (calitativă), scala de clasificare (scară de apreciere), lista de control / verificare (prezent / absent).'},
 {c:'m04', q:'Lista de control / verificare', a:'Instrument al observării sistematice: enunțuri sau comportamente bifate **Da / Nu** (prezent / absent). Rapidă, dar nu arată gradul de manifestare.', term:'Lista de control', short:'comportamente bifate da / nu'},
 {c:'m04', q:'Portofoliul', a:'„Cartea de vizită” a elevului: selecție de lucrări care arată progresul; funcție formativă și informativă; structura o dă profesorul, conținutul îl alege și elevul.'},
 {c:'m04', q:'Metoda vs instrumentul de evaluare', a:'Metoda acoperă tot demersul (obiective → instrument → administrare → interpretare); instrumentul e partea operațională, subordonată metodei.'},
 {c:'m04', q:'Itemii obiectivi', a:'Alegere duală (A/F), alegere multiplă, asociere / pereche. Sunt obiectivi și rapizi, dar evaluează niveluri cognitive inferioare.'},
 {c:'m04', q:'Itemii semiobiectivi', a:'Răspuns scurt, completare, întrebări structurate.'},
 {c:'m04', q:'Itemii subiectivi', a:'Eseu structurat, eseu liber, rezolvare de probleme. Evaluează niveluri superioare, dar au fidelitate scăzută și corectarea e grea.'},
 {c:'m04', q:'Calitățile unui instrument de evaluare', a:'Validitate, fidelitate, obiectivitate, aplicabilitate.'},
 {c:'m04', q:'Validitate vs fidelitate', a:'- **Validitate:** măsoară ce își propune\n- **Fidelitate:** rezultate constante la aplicări repetate\nFidelitatea e necesară, dar nu suficientă pentru validitate.'},
 {c:'m04', q:'Matricea de specificații', a:'Tabel cu două intrări: conținuturi (pe linii) × niveluri cognitive (pe coloane, după Bloom); în celule, procentul de itemi. Numărul de itemi = procent × totalul itemilor.'},
 {c:'m04', q:'Efectul halo', a:'Generalizarea unei impresii inițiale asupra tuturor rezultatelor elevului. Se corectează prin anonimatul lucrărilor și prin corectori din alte școli.', term:'Efectul halo', short:'o impresie inițială colorează toate notele'},
 {c:'m04', q:'Efectul Pygmalion', a:'Așteptările profesorului se adeveresc, pentru că influențează comportamentul elevului.', term:'Efectul Pygmalion', short:'așteptările profesorului se împlinesc'},
 {c:'m04', q:'Tendința centrală', a:'Evitarea notelor extreme; notele se adună în jurul mediei (frecventă la profesorii începători).'},
 {c:'m04', q:'Eroarea logică în notare', a:'Înlocuirea criteriilor reale de performanță cu elemente secundare (efortul depus, forma).'}
);

GRILE.push(
 {c:'m04', q:'Ordinea corectă a etapelor evaluării:', o:['apreciere – măsurare – decizie','măsurare – apreciere – decizie','decizie – măsurare – apreciere','măsurare – decizie – apreciere'], r:1},
 {c:'m04', q:'Funcția care răspunde la întrebarea „de ce este așa?”:', o:['constatativă','diagnostică','predictivă','social-economică'], r:1},
 {c:'m04', q:'Evaluarea centrată pe proces, pentru remedierea lacunelor:', o:['inițială','formativă','sumativă','normativă'], r:1},
 {c:'m04', q:'Instrumentul observării sistematice cu răspunsuri de tip prezent / absent:', o:['scala de clasificare','lista de control','fișa de evaluare','eseul structurat'], r:1},
 {c:'m04', q:'Itemii de completare sunt:', o:['obiectivi','semiobiectivi','subiectivi','de tip eseu'], r:1},
 {c:'m04', q:'Calitatea unui test de a produce rezultate constante la aplicări repetate:', o:['validitatea','fidelitatea','aplicabilitatea','obiectivitatea'], r:1},
 {c:'m04', q:'Pe coloanele matricei de specificații se trec:', o:['elevii','nivelurile cognitive','notele','datele testării'], r:1},
 {c:'m04', q:'Evitarea notelor extreme se numește:', o:['efect halo','tendința centrală','efect de contrast','efect Pygmalion'], r:1},
 {c:'m04', q:'Cea mai subiectivă formă de evaluare tradițională:', o:['scrisă','orală','practică','testul standardizat'], r:1},
 {c:'m04', q:'„Cartea de vizită” a elevului este:', o:['testul','portofoliul','referatul','lista de control'], r:1}
);

AF.push(
 {c:'m04', s:'Evaluarea inițială are în principal rol de control și sancțiune.', v:false, e:'Este diagnostică și predictivă.'},
 {c:'m04', s:'Un test poate fi fidel fără să fie valid.', v:true},
 {c:'m04', s:'Calificativele se pot aduna și media aritmetic.', v:false, e:'Nu se pot suma sau media.'},
 {c:'m04', s:'Itemii obiectivi evaluează bine creativitatea și sinteza.', v:false, e:'Evaluează mai ales niveluri cognitive inferioare.'},
 {c:'m04', s:'Lista de control nu indică gradul în care se manifestă un comportament.', v:true},
 {c:'m04', s:'Enunțurile itemilor trebuie formulate preferabil la negativ.', v:false, e:'Se evită formulările negative.'},
 {c:'m04', s:'Evaluarea inițială, formativă și sumativă sunt complementare.', v:true},
 {c:'m04', s:'Efectul halo se poate reduce prin anonimatul lucrărilor.', v:true}
);

/* ---- content/capitole/m05.js ---- */
/* METODICĂ V – Instruirea asistată de calculator și învățarea multimedia */
CAPITOLE.push({id:'m05', parte:'Metodica disciplinei', nr:'M5', emoji:'🖥️', scurt:'IAC și multimedia',
titlu:'Instruirea asistată de calculator și învățarea multimedia',
sectiuni:[
{titlu:'1. Instruirea asistată de calculator (IAC)', puncte:[
 'Calculatorul, multimedia și **NTIC** (Noile Tehnologii de Informare și Comunicare) au potențial pedagogic, dar **nu cresc automat calitatea** instruirii: contează **integrarea** lor într-o strategie bine gândită.',
 'Originea IAC: **instruirea programată**, **liniară** (Skinner) și **ramificată** (Crowder, mai flexibilă).',
 'Efecte formative ale învățării informaticii: disciplina gândirii și precizia exprimării, raționamente ipotetico-deductive, procedee euristice (simplificarea problemelor, analiza mijloace–scop), depanarea erorilor prin abordare constructivă, capacitate de sistematizare.',
 'Componente: **software** (programul pedagogic + produsul informatic), **hardware** (echipamentul) și **courseware** (elaborarea lecțiilor asistate de calculator).',
 'Stadiile IAC: implementarea informaticii → programarea pedagogică a conținutului pe pași → elaborarea programului-computer → componenta hardware adaptată învățământului.',
 'Niveluri ale abilității de programare: **1.** simpla folosire a comenzilor (programul e o „cutie neagră”) → **2.** stăpânirea unui cod → **3.** stăpânirea programului în ansamblu → **4.** creatorul de software. Exemplu de limbaj pentru copii: **LOGO** (Papert).',
 '**Sistemele-expert** de instruire se adaptează ritmului, erorilor și vitezei elevului. Au **patru module**: de **interfață**, **expert**, **profilul elevului**, **pedagogic**.'
], retine:'IAC vine din instruirea programată (Skinner – liniară, Crowder – ramificată). Software + hardware + courseware.'},
{titlu:'2. Învățarea multimedia', puncte:[
 '**Multimedia** = un ansamblu hardware și software care folosește simultan imagini, sunete, animații și filme. Oferă confruntări cognitive, instruire activă și interactivă și autonomie cognitivă.',
 '**Învățarea multimedia** (Ionescu) = formă **interactivă și cvasiautonomă** de acces la cunoaștere, fără mediere obligatorie a profesorului, bazată pe informare, observare, experimentare și descoperire. Permite o educație **multimodală**, adaptată profilurilor psihologice diferite, cu **feedback prompt**.',
 '**Riscuri**: tehnica folosită de dragul tehnicii; mijloace complicate acolo unde ar merge unele simple. **Profesorul nu e înlocuit**: computerul preia momente de muncă independentă, de exersare și de diferențiere.',
 '**E-learning** = acces interactiv și cvasiautonom la cunoaștere, în ritm propriu, prin calculatorul conectat la internet (individual sau colaborativ). **M-learning** = învățare oriunde și oricând, pe dispozitive mobile („oricine, oricând, oriunde, orice”).',
 'Profesorul are mai multe ipostaze în folosirea NTIC: formator, tehnician, **consilier**, manager.'
], retine:'Multimedia: interactiv, cvasiautonom, multimodal, cu feedback prompt; profesorul nu e înlocuit.'},
{titlu:'3. TIC și medii active de învățare', puncte:[
 '**TIC** = set de instrumente și resurse digitale pentru comunicare, creare, transmitere, stocare și gestionare a informației. În educație servesc **predării-învățării** și **consilierii psihopedagogice**.',
 'Rolul informaticii în școală nu e doar accesul la informație (mai multă informație nu înseamnă mai multe cunoștințe), ci formarea unor **noi instrumente de învățare**.',
 '**Mediul virtual de învățare (VLE)**: software pentru structurarea cursului și urmărirea progresului, comunicare electronică (e-mail, forum, chat, bloguri), hardware (servere, rețea). Roluri: **profesor / consilier**, **elev**, **administrator**. Se apropie tot mai mult de **LMS** (Learning Management System).',
 '**Instruirea la distanță**: resurse multimedia (text, grafică, sunet, animație 2D/3D, video), studiu în ritm propriu.',
 '**Mediul centrat pe elev** vine din **constructivism**: elevul își construiește cunoștințele pe baza celor anterioare (ipoteze, decizii, modele mentale proprii). **Constructivismul social**: învățarea e activă, contextuală și socială, eficientă în grup, sub ghidarea unui tutore (profesor, consilier).'
], retine:'VLE / LMS; constructivism: elevul își construiește cunoașterea; în varianta socială, în grup, cu tutore.'}
]});

CARDURI.push(
 {c:'m05', q:'Instruirea programată liniară vs ramificată', a:'- **Liniară:** Skinner, pași mici, întărire imediată\n- **Ramificată:** Crowder, mai flexibilă, trasee diferite după răspuns'},
 {c:'m05', q:'Software, hardware, courseware', a:'- **Hardware:** echipamentul\n- **Software:** programele (pedagogic + informatic)\n- **Courseware:** elaborarea lecțiilor asistate de calculator'},
 {c:'m05', q:'Modulele unui sistem-expert de instruire', a:'Interfață, expert, profilul elevului, pedagogic.'},
 {c:'m05', q:'Învățarea multimedia (Ionescu)', a:'Formă interactivă și cvasiautonomă de acces la cunoaștere, fără mediere obligatorie a profesorului, bazată pe informare, observare, experimentare, descoperire; multimodală, cu feedback prompt.', term:'Învățarea multimedia', short:'interactivă, cvasiautonomă, multimodală'},
 {c:'m05', q:'E-learning vs m-learning', a:'- **E-learning:** învățare interactivă, în ritm propriu, prin calculatorul conectat la internet\n- **M-learning:** oriunde și oricând, pe dispozitive mobile'},
 {c:'m05', q:'VLE (mediul virtual de învățare)', a:'Set de instrumente TIC care extinde experiența de învățare: structurarea cursului, urmărirea progresului, comunicare (forum, chat), resurse externe. Roluri: profesor, elev, administrator.'},
 {c:'m05', q:'Constructivismul social în învățare', a:'Elevul își construiește cunoștințele pe baza celor anterioare; învățarea e activă, contextuală și socială, eficientă în grup, sub ghidarea unui tutore.'},
 {c:'m05', q:'Riscuri ale folosirii NTIC la clasă', a:'Tehnica de dragul tehnicii; mijloace complicate în locul celor simple; uitarea faptului că valoarea vine din integrarea în strategie, nu din mesajul audiovizual în sine.'}
);

GRILE.push(
 {c:'m05', q:'Instruirea programată ramificată este asociată cu:', o:['Skinner','Crowder','Papert','Piaget'], r:1},
 {c:'m05', q:'Componenta destinată elaborării lecțiilor asistate de calculator:', o:['hardware','software','courseware','firmware'], r:2},
 {c:'m05', q:'Limbajul LOGO a fost creat de:', o:['Papert','Skinner','Bruner','Crowder'], r:0},
 {c:'m05', q:'Învățarea oriunde și oricând, pe dispozitive mobile:', o:['e-learning','m-learning','blended learning','instruire programată'], r:1}
);

AF.push(
 {c:'m05', s:'Integrarea calculatorului crește automat calitatea instruirii.', v:false, e:'Contează integrarea lui într-o strategie bine gândită.'},
 {c:'m05', s:'Calculatorul nu înlocuiește profesorul, ci preia părți ale activității de instruire.', v:true},
 {c:'m05', s:'În constructivism, cunoștințele sunt recepționate pasiv de elev.', v:false, e:'Sunt construite activ de elev.'}
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

/* ---- content/oficiale/o2021v2.js ---- */
OFICIALE.push({
  id: 'tit2021v2', an: 2021, tip: 'Titularizare', varianta: 'Varianta 2', data: '21 iulie 2021', barem: false,
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 30,
      text: 'A. Se dă următorul enunț: „Personalizarea comunicării face ca același cadru instituțional, același conținut formal și aceeași clasă de elevi să fie explorate și valorificate diferit de către profesori și de către consilierii școlari în cadrul unităților de învățământ.”\nB. „Procesul complex al comunicării presupune, printre altele, abilitatea de a gestiona și soluționa conflictele.”',
      items: [
        { id: 'A', cer: 'A. Pornind de la enunț, demonstrați, în trei pagini, rolul comunicării în procesul de consiliere, pe baza structurii:\n- semnificația conceptelor de consiliere psihologică și de comunicare;\n- două componente fundamentale ale procesului de comunicare și două niveluri ale comunicării;\n- două criterii de clasificare a comunicării;\n- explicarea conceptului de asertivitate;\n- particularitățile definitorii ale comportamentului asertiv, care determină comunicarea asertivă;\n- particularitățile comunicării în activitatea de consiliere;\n- două condiții care favorizează conversația, ca metodă de cunoaștere a personalității;\n- specificitatea limbajului utilizat în comunicare, în procesul de consiliere.\nNotă: valorificarea enunțului – 1p; respectarea numărului de pagini – 1p.', p: 18 },
        { id: 'Ba', cer: 'B. a) Enumerați două efecte pozitive și două efecte negative ale conflictelor.', p: 4 },
        { id: 'Bb', cer: 'B. b) Enunțați două prejudecăți/stereotipuri/convingeri eronate despre conflicte, existente în mentalul colectiv, care pot scădea eficiența managementului conflictelor.', p: 2 },
        { id: 'Bc', cer: 'B. c) Prezentați succint două metode/strategii utilizate în soluționarea situațiilor conflictuale.', p: 4 },
        { id: 'Bd', cer: 'B. d) Precizați două principii ale managementului conflictelor.', p: 2 }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: '„Consilierea psihopedagogică este o relație de asistență și suport dintre consilier și consiliat, derulată în scopul orientării școlare și profesionale a elevilor, asistenței psihopedagogice a elevilor, consilierii părinților și consultanței oferite cadrelor didactice.”',
      items: [
        { id: 'A', cer: 'Evidențiați necesitatea construirii, de către profesorul consilier școlar, a climatului educativ stimulativ în activitatea pe care o desfășoară în unitățile de învățământ.', p: 4 },
        { id: 'B', cer: 'Specificați două caracteristici ale activității de consiliere a carierei.', p: 4 },
        { id: 'C', cer: 'Exemplificați modalitatea prin care profesorul consilier realizează distincția dintre carieră, profesie și ocupație, în cadrul consilierii carierei.', p: 4 },
        { id: 'D', cer: 'Detaliați două metode de consiliere psihopedagogică.', p: 4 },
        { id: 'E', cer: 'Exemplificați o strategie de intervenție specifică în cazul elevilor cu părinți divorțați.', p: 4 },
        { id: 'F', cer: 'Enunțați două principii ale lucrului cu adulții (consilierea cadrelor didactice) și două principii de etică pe care le respectă consilierul școlar în cabinetul de asistență psihopedagogică.', p: 8 },
        { id: 'G', cer: 'Prezentați rolul activității de consiliere în sistemul de învățământ din România.', p: 2 }
      ]
    },
    {
      titlu: 'Subiectul al III-lea', puncte: 30,
      text: 'Secvență din programa de Consiliere și orientare, clasa a XI-a:\nCompetență specifică 4.2. Evaluarea opțiunilor personale privind dezvoltarea personală și profesională.\nConținuturi: Planificarea carierei – opțiuni și resurse de realizare a planului de carieră de scurtă și lungă durată.\n\nRealizați un demers didactic pentru dezvoltarea competenței 4.2. prin ÎNVĂȚAREA PRIN PROBLEMATIZARE, ca metodă didactică modernă.',
      items: [
        { id: 'demers', cer: 'Demers didactic, cu:\n- explicarea metodei didactice;\n- enumerarea a trei acțiuni/etape ale metodei, menționând două avantaje ale utilizării acesteia;\n- prezentarea, în aproximativ o pagină, a conținutului științific care vizează dezvoltarea competenței;\n- menționarea unei activități de învățare adecvate, precizând resursele (timp, loc, material didactic, forme de organizare);\n- exemplificarea modului de dezvoltare a competenței, utilizând metoda, prin activitatea de învățare menționată.', p: 30 }
      ]
    }
  ]
});

/* ---- content/oficiale/o2022v3.js ---- */
OFICIALE.push({
  id: 'tit2022v3', an: 2022, tip: 'Titularizare', varianta: 'Varianta 3', data: '13 iulie 2022', barem: false,
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 30,
      text: 'Se dă următorul enunț: „Paradigma managerială aplicată analizei clasei de elevi abordează statutul și rolul cadrului didactic, în spiritul valorilor activismului, dinamismului, participării, cooperării și angajării întrucât interacțiunile sociale condiționează dezvoltarea intelectuală a elevului, atitudinile sale cu privire la obiectivele educative ale școlii, dar și rezultatele elevului la învățătură.”\nPornind de la acest enunț, argumentați, în patru pagini, necesitatea demonstrării, de către profesorul consilier școlar, a capacității de a construi un climat educativ din punct de vedere socio-afectiv, stimulativ și eficient.',
      items: [
        { id: 'eseu', cer: 'Eseu de 4 pagini, pe baza structurii:\n- precizarea semnificației conceptului de management al clasei de elevi;\n- detalierea dimensiunii psihologice (a doua dominantă structurală a managementului clasei), numind totodată alte două dimensiuni care susțin activitatea educațională;\n- prezentarea a trei strategii (modalități) de prevenire/rezolvare a situațiilor critice în clasa de elevi, exemplificând modul de acțiune al profesorului consilier pentru fiecare;\n- justificarea importanței competenței profesorului consilier de asigurare a climatului educativ adecvat în unitatea de învățământ.\nNotă: valorificarea adecvată a enunțului – 1p; respectarea numărului de pagini – 1p.', p: 30 }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: '„Conduita psihosocială este un capitol științific distinct în pregătirea concursului pentru ocuparea postului de profesor consilier școlar. Acest capitol vizează: utilizarea conceptelor specifice psihologiei pentru cunoașterea și explicarea unor fapte/procese din viața socială, aplicarea cunoștințelor specifice sociologiei și psihologiei în rezolvarea unor situații/probleme, recunoașterea unor tipuri de relații, a unor comportamente și atitudini sociale în situații date.”',
      items: [
        { id: 'A', cer: 'Definiți cunoașterea de sine și stima de sine.', p: 6 },
        { id: 'B', cer: 'Realizați delimitarea conceptuală imagine de sine – formarea imaginii de sine, detaliind totodată în ce constă percepția socială a imaginii de sine.', p: 8 },
        { id: 'C', cer: 'Precizați rolul relațiilor interpersonale în formarea și dezvoltarea personalității.', p: 2 },
        { id: 'D', cer: 'Enumerați cinci tipuri de relații interpersonale.', p: 5 },
        { id: 'E', cer: 'Explicați distincția între comportamentele sociale și atitudinile sociale.', p: 5 },
        { id: 'F', cer: 'Dați câte un exemplu de comportament prosocial, respectiv antisocial, care se pot manifesta de către elevi într-o unitate de învățământ preuniversitar.', p: 4 }
      ]
    },
    {
      titlu: 'Subiectul al III-lea', puncte: 30,
      text: 'Secvență din programa de Consiliere și orientare, clasa a IX-a:\nCompetență specifică 1.2. Examinarea caracteristicilor specifice adolescenței.\nConținuturi: Autocunoaștere și dezvoltare personală. Autocunoaștere: încredere în sine; factori care influențează încrederea în sine.\n\nRealizați un demers didactic pentru formarea competenței 1.2. prin intermediul STUDIULUI DE CAZ, ca metodă didactică modernă.',
      items: [
        { id: 'demers', cer: 'Demers didactic, cu:\n- explicarea metodei didactice;\n- enumerarea a patru etape ale învățării bazate pe studiu de caz;\n- justificarea faptului că învățarea bazată pe studiu de caz este o metodă didactică activă;\n- prezentarea, în aproximativ o pagină, a conținutului științific care vizează formarea competenței specifice;\n- menționarea unei activități de învățare adecvate, precizând resursele (timp, loc, material didactic, forme de organizare a clasei);\n- exemplificarea modului de formare a competenței specifice, utilizând metoda, prin activitatea de învățare menționată.', p: 30 }
      ]
    }
  ]
});

/* ---- content/oficiale/o2023v3.js ---- */
OFICIALE.push({
  id: 'tit2023v3', an: 2023, tip: 'Titularizare', varianta: 'Varianta 3', data: '12 iulie 2023', barem: false,
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 30,
      text: 'Se dă următorul enunț: „Calitatea educației se referă la identificarea, de către profesorul consilier școlar, a acelor dimensiuni ale procesului didactic care să sprijine învățarea tuturor categoriilor de elevi, să asigure succesul, să facă sistemul deschis, flexibil și eficient.”\nPornind de la acest enunț, argumentați în patru pagini necesitatea demonstrării de către profesorul consilier școlar a capacității de adaptare continuă a procesului de consiliere la specificul elevilor/grupelor de elevi, prin realizarea acelor schimbări necesare, evolutive în funcție de contextul nevoilor de formare și integrare socio-profesională a elevului.',
      items: [
        { id: 'eseu', cer: 'Eseu de 4 pagini, pe baza structurii:\n- precizarea semnificației conceptului de consiliere psihopedagogică;\n- prezentarea a trei caracteristici ale consilierii psihopedagogice;\n- detalierea a trei factori perturbatori ai procesului instructiv-educativ, numind totodată două strategii de intervenție pentru prevenirea insuccesului școlar;\n- menționarea a două modalități de evaluare a progreselor realizate de elevi, ca urmare a activității de consiliere;\n- argumentarea afirmației potrivit căreia consilierul școlar trebuie să demonstreze capacitatea de adaptare a activităților de consiliere la particularitățile de vârstă ale colectivului/grupei de elevi.\nNotă: valorificarea adecvată a enunțului – 2p; respectarea numărului de pagini – 1p.', p: 30 }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: '„Conduita psihosocială este un capitol științific de care profesorul consilier școlar trebuie să țină seama în pregătirea sa, întrucât vizează capacitatea de a construi un climat educativ suportiv din punct de vedere socio-afectiv, stimulativ și eficient la nivelul instituției de învățământ.”',
      items: [
        { id: 'A', cer: 'Definiți noțiunile: consiliere a cadrelor didactice și învățare eficientă.', p: 6 },
        { id: 'B', cer: 'Formulați două principii ale consilierii cadrelor didactice din perspectiva lucrului cu adulții.', p: 2 },
        { id: 'C', cer: 'Enumerați cinci responsabilități ale profesorului consilier școlar în asigurarea unui climat educativ suportiv socio-afectiv, stimulativ și eficient la nivelul instituției.', p: 5 },
        { id: 'D', cer: 'Explicați distincția dintre abuzul de putere și bullying.', p: 5 },
        { id: 'E', cer: 'Construiți două exemple distincte de modalități de prevenire, respectiv două modalități de rezolvare a situațiilor critice în clasa de elevi.', p: 8 },
        { id: 'F', cer: 'Justificați importanța formării continue a profesorului consilier școlar în scopul asigurării unui climat educativ suportiv la nivelul unității de învățământ.', p: 4 }
      ]
    },
    {
      titlu: 'Subiectul al III-lea', puncte: 30,
      text: 'Răspundeți la cerințele care vizează metodica disciplinei. Secvența pentru itemul 5 (Consiliere și orientare, clasa a IX-a):\nCompetențe generale: 1. Explorarea resurselor personale care influențează planificarea carierei; 2. Integrarea abilităților de interrelaționare, în vederea dezvoltării personale și profesionale.\nCompetențe specifice: 1.2. Examinarea caracteristicilor specifice adolescenței (Creștere și schimbare: adolescența – caracteristicile dezvoltării fizice, cognitive, emoționale); 2.2. Aplicarea tehnicilor de autocontrol emoțional (Comunicare: forme de comunicare eficientă; Autocontrol emoțional: tehnici de autocontrol emoțional).',
      items: [
        { id: '1', cer: 'Precizați conținutul noțiunilor: activitate de învățare interdisciplinară și trunchi comun.', p: 6 },
        { id: '2', cer: 'Explicați necesitatea Notei de prezentare, ca parte a structurii programei școlare pentru Consiliere și orientare.', p: 3 },
        { id: '3', cer: 'Prezentați comparativ evaluarea inițială și evaluarea finală la Consiliere și orientare.', p: 3 },
        { id: '4', cer: 'Proiectați o listă de control/verificare, ca instrument al observării sistematice a activității și comportamentului elevilor, formulând cinci enunțuri/caracteristici/comportamente ale elevului, în vederea evaluării la Consiliere și orientare.', p: 10 },
        { id: '5a', cer: '5. a) Precizați relația dintre competențele generale și competențele specifice din secvența dată.', p: 3 },
        { id: '5b', cer: '5. b) Construiți o activitate didactică prin care să formați/dezvoltați competența specifică 2.2.', p: 5 }
      ]
    }
  ]
});

/* ---- content/oficiale/o2025v3.js ---- */
OFICIALE.push({
  id: 'tit2025v3', an: 2025, tip: 'Titularizare', varianta: 'Varianta 3', data: '15 iulie 2025', barem: false,
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 30,
      text: 'Realizați o prezentare, de trei pagini, prin care să justificați necesitatea consilierii psihopedagogice în scopul dezvoltării armonioase a personalității elevilor prin activități de autocunoaștere, intercunoaștere, comunicare și relaționare optimă cu ceilalți, formarea și dezvoltarea unor tehnici de învățare eficientă și creativă, de luare de decizii și rezolvare de probleme, de a rezista presiunilor negative ale grupului, de control al stresului, de dobândire de repere în orientarea școlară și profesională.\nPunctajul se acordă pentru respectarea următoarelor repere:',
      items: [
        { id: 'a', cer: 'Precizarea particularităților a trei obiective ale procesului de consiliere psihopedagogică desfășurat de profesorul consilier școlar.', p: 3 },
        { id: 'b', cer: 'Menționarea celor șase componente fundamentale ale procesului de consiliere psihopedagogică.', p: 6 },
        { id: 'c', cer: 'Numirea a trei caracteristici specifice atitudinii consilierului școlar de acceptare non-critică a beneficiarilor.', p: 3 },
        { id: 'd', cer: 'Definirea noțiunii stimă de sine prin relaționare cu imaginea de sine.', p: 2 },
        { id: 'e', cer: 'Evidențierea specificului a trei acțiuni prin care un profesor contribuie la dezvoltarea stimei de sine a elevilor.', p: 3 },
        { id: 'f', cer: 'Prezentarea etapelor modificării comportamentelor inadecvate, ca parte a managementului clasei.', p: 4 },
        { id: 'g', cer: 'Construirea a două exemple în care sunt ilustrate metode utilizate de profesorul consilier pentru a reduce frecvența comportamentelor inadecvate la elevi.', p: 2 },
        { id: 'h', cer: 'Prezentarea modului în care profesorul consilier contribuie la stabilirea unei relații funcționale școală–familie și influența acesteia asupra creării și menținerii stării de bine a elevilor.', p: 3 },
        { id: 'i', cer: 'Justificarea opiniei lui Ion Al. Dumitru: „Succesul consilierii psihopedagogice este dat de implicarea conștientă, activă și responsabilă a persoanei în autodezvoltarea propriei personalități, considerate elemente de bază ale schimbării evolutiv-adaptative a persoanei. Conștientizarea de către fiecare persoană a propriilor capacități și disponibilități și cultivarea dorinței și voinței acesteia de a se manifesta liber, autonom sunt condiții esențiale ale trăirii unei vieți pline de sens, însoțită de sentimentul autoîmplinirii.”', p: 3 },
        { id: 'j', cer: 'Respectarea numărului de pagini precizat (trei pagini).', p: 1 }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: '„Pe măsura înaintării în școală, elevii trebuie să proceseze o cantitate tot mai mare de informație și să opereze cu informația la un nivel tot mai abstract. Aceasta necesită utilizarea unor strategii de studiu din ce în ce mai sofisticate, dezvoltarea competenței de a învăța să înveți. Activitățile de consiliere psihopedagogică pot oferi cadrul de desfășurare a unor programe de dezvoltare a unor strategii eficiente de învățare, prin care se poate valorifica și îmbogăți experiența de învățare a elevilor, se pot forma deprinderi relevante pentru dezvoltarea strategiilor de învățare care pot fi transferate în orice domeniu.”',
      items: [
        { id: 'A', cer: 'Definiți conceptul de strategie de învățare în relație cu eficiența învățării.', p: 2 },
        { id: 'B', cer: 'Precizați semnificația noțiunilor stil de învățare și metaînvățare, ca elemente esențiale în realizarea unei învățări eficiente și durabile.', p: 4 },
        { id: 'C', cer: 'Menționați două modalități de identificare a stilurilor de învățare.', p: 2 },
        { id: 'D', cer: 'Explicați în ce constă eficacitatea instruirii, indicând o modalitate prin care aceasta poate fi atinsă.', p: 4 },
        { id: 'E', cer: 'Scrieți câte un exemplu concret de intervenție specializată a profesorului consilier școlar în raport cu trei factori perturbatori ai procesului instructiv-educativ identificați.', p: 6 },
        { id: 'F', cer: 'Descrieți trei tipuri de resurse psihologice ale persoanei implicate în realizarea învățării și specificați modul în care profesorul consilier contribuie la facilitarea procesului de identificare și valorificare a acestora.', p: 8 },
        { id: 'G', cer: 'Redactați un text coerent de 10 rânduri, cu caracter științific, în care să relevați rolul consilierii psihopedagogice în dezvoltarea gândirii critice la elevi.', p: 4 }
      ]
    },
    {
      titlu: 'Subiectul al III-lea', puncte: 30,
      text: 'Secvență din programa de Consiliere și orientare, clasa a IX-a:\nCompetență specifică 2.2. Aplicarea tehnicilor de autocontrol emoțional.\nConținuturi: Comunicare și abilități sociale. Comunicare: forme de comunicare eficientă. Autocontrol emoțional: tehnici de autocontrol emoțional.\n\nRealizați un demers didactic pentru dezvoltarea competenței 2.2. prin intermediul DEMONSTRAȚIEI, ca metodă didactică tradițională, prin:',
      items: [
        { id: 'a', cer: 'Explicarea metodei didactice (demonstrația).', p: 5 },
        { id: 'b', cer: 'Precizarea a două forme didactice ale metodei.', p: 6 },
        { id: 'c', cer: 'Specificarea a două cerințe didactice în utilizarea metodei demonstrației.', p: 6 },
        { id: 'd', cer: 'Menționarea unei activități de învățare adecvate pentru dezvoltarea competenței specifice date.', p: 3 },
        { id: 'e', cer: 'Precizarea resurselor (de timp, de loc, material didactic, forme de organizare a clasei) utilizate în activitatea de la d.', p: 4 },
        { id: 'f', cer: 'Exemplificarea modului de dezvoltare a competenței specifice, utilizând metoda demonstrației, prin activitatea de învățare de la d.', p: 6 }
      ]
    }
  ]
});

/* ---- content/oficiale/o2026def.js ---- */
OFICIALE.push({
  id: 'def2026v2', an: 2026, tip: 'Definitivat', varianta: 'Varianta 2', data: '14 iulie 2026', barem: true,
  nota: 'Am primit doar BAREMUL acestei variante, nu și subiectul. Cerințele de mai jos sunt reconstruite din barem, deci formularea exactă din subiect poate fi alta. Punctajele sunt cele oficiale.',
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 60,
      text: 'Partea A – comunicarea în consiliere. Partea B – dependența de internet la elevi. (Text reconstruit din barem.)',
      items: [
        { id: 'Aa', cer: 'A. a) Precizați rolul comunicării în exprimarea emoțiilor.', p: 2, barem: '2p. Ex.: rol în gestionarea energiei trăirilor emoționale în direcția dezvoltării persoanei; rol în controlul comportamentului verbalo-motoriu, premisă a mecanismelor de apărare ale Eului.' },
        { id: 'Ab', cer: 'A. b) Enumerați trei bariere ale comunicării în activitatea consilierului școlar.', p: 3, barem: '3×1p. Ex.: tendința de a judeca; oferirea de soluții; evitarea abordării unor probleme importante.' },
        { id: 'Ac', cer: 'A. c) Descrieți modalitățile de gestionare a două dintre barierele de la b., în consilierea beneficiarilor aflați în situații conflictuale.', p: 4, barem: '2×2p.' },
        { id: 'Ad', cer: 'A. d) Redactați un text (în limita de spațiu precizată) care să evidențieze diferența dintre comunicarea pasivă și comunicarea agresivă.', p: 5, barem: 'Redactare care evidențiază diferența – 4p (NOTĂ: dacă doar precizează caracteristicile fiecărui tip, fără diferență – câte 1p; pasivă = evitarea confruntărilor, conflictelor; agresivă = critică, drepturi proprii mai importante decât ale altora, ostilitate, furie). Încadrarea în spațiu – 1p.' },
        { id: 'Ae', cer: 'A. e) Prezentați specificul a trei tipuri de comunicare utilizate în consilierea școlară, altele decât cele de la d.', p: 6, barem: '3×2p. Ex.: evaluativă – cel mai frecvent mod de a provoca reacția defensivă; descriptivă – cea mai eficientă prevenire a reacțiilor defensive și a blocării comunicării; empatică – previne reacțiile negative despre sine și ceilalți. NOTĂ: doar numite – câte 1p.' },
        { id: 'Ba', cer: 'B. a) Precizați conținutul conceptului de dependență de internet.', p: 2, barem: '2p. Ex.: pierderea controlului asupra impulsurilor și utilizarea compulsivă a mediului online.' },
        { id: 'Bb', cer: 'B. b) Explicați diferența dintre utilizarea funcțională și utilizarea problematică a internetului.', p: 4, barem: '4p. Ex.: diferența ține de autoreglare – în utilizarea funcțională autocontrolul e subordonat Eului; în cea problematică apar dificultăți de autoreglare a impulsurilor.' },
        { id: 'Bc', cer: 'B. c) Menționați trei aspecte caracteristice comportamentelor de risc asociate utilizării excesive a internetului.', p: 3, barem: '3×1p. Ex.: iritabilitate; anxietate; neglijarea realității.' },
        { id: 'Bd', cer: 'B. d) Prezentați trei modalități de prevenire a dependenței de internet în mediul școlar.', p: 9, barem: '3×3p. Ex.: monitorizarea timpului online (program orar, evidență, alarme); consolidarea relațiilor sociale (interacțiuni față în față, sport, activități educaționale); dezvoltarea abilităților de coping. NOTĂ: doar precizate – câte 1p.' },
        { id: 'Be', cer: 'B. e) Descrieți trei strategii de intervenție utilizate în consilierea elevilor cu risc de dependență de internet.', p: 9, barem: '3×3p. Ex.: stabilirea scopurilor programului de utilizare a internetului (grafic tematic și orar, acces minimal); monitorizarea interacțiunilor față în față (grafic de activități educative, culturale, voluntariat); activități-suport ale specialiștilor (consiliere individuală, de grup, terapie). NOTĂ: doar precizate – câte 1p.' },
        { id: 'Bf', cer: 'B. f) Numiți două modalități de intervenție ale profesorului consilier școlar.', p: 4, barem: '2×2p. Ex.: consiliere individuală; elaborarea de programe de intervenție.' },
        { id: 'Bg', cer: 'B. g) Ilustrați prin două exemple importanța măsurilor de sprijin pentru promovarea comportamentelor sănătoase, în scopul combaterii dependenței de internet.', p: 4, barem: '2×2p.' },
        { id: 'Bh', cer: 'B. h) Detaliați rolul profesorului consilier școlar în consilierea părinților elevilor aflați în situații de risc privind utilizarea internetului.', p: 3, barem: '3p. Ex.: prevenție prin informarea și sensibilizarea părinților privind semnalele dependenței; contact permanent cu părinții elevilor în risc.' },
        { id: 'Bi', cer: 'B. i) Utilizarea adecvată a limbajului de specialitate (se evaluează pe tot Subiectul I).', p: 1, barem: '1p.' },
        { id: 'Bj', cer: 'B. j) Încadrarea în limita de spațiu precizată.', p: 1, barem: '1p.' }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: 'Metodica consilierii și dezvoltării personale. (Text reconstruit din barem; din exemplele baremului reiese că competența specifică dată vizează identificarea și exprimarea emoțiilor.)',
      items: [
        { id: '1', cer: '1. Formulați trei exemple de activități de învățare specifice consilierii și dezvoltării personale, care să vizeze competența specifică dată (identificarea/exprimarea emoțiilor).', p: 9, barem: '3×3p. Ex.: exerciții de identificare a emoțiilor pe suporturi diverse (imagini, povești, secvențe de film); auto-reflecție prin propoziții lacunare „Eu simt … atunci când …”; asocierea unei activități preferate (lectură, dans, șah) cu emoția trăită, cu suporturi vizuale.' },
        { id: '2a', cer: '2. a) Precizați semnificația conceptului de evaluare formativă.', p: 5, barem: '5p. Ex.: tip de evaluare care vizează ameliorarea instruirii sau a materialului didactic.' },
        { id: '2b', cer: '2. b) Menționați două instrumente de evaluare alternative utilizate în consilierea școlară.', p: 6, barem: '2×3p. Ex.: portofoliul de dezvoltare personală/vocațională; jurnalul reflexiv.' },
        { id: '3', cer: '3. Prezentați necesitatea utilizării, în consilierea psihopedagogică, a metodelor: învățarea prin cooperare, problematizarea, proiectul (în limita de spațiu precizată).', p: 10, barem: '3×3p pentru necesitatea fiecărei metode (NOTĂ: doar înțelesul metodei, fără necesitate – câte 1p; cooperare = activitate în grup organizată după obiective, corectare reciprocă; problematizare = căutarea independentă a soluțiilor; proiect = pune în evidență capacități și cunoștințe superioare). Încadrarea în spațiu – 1p.' }
      ]
    }
  ]
});

/* ---- content/oficiale/o2026v1.js ---- */
OFICIALE.push({
  id: 'tit2026v1', an: 2026, tip: 'Titularizare', varianta: 'Varianta 1', data: '21 iulie 2026', barem: true,
  subiecte: [
    {
      titlu: 'Subiectul I', puncte: 30,
      text: 'Se dă următorul text:\n„Profesorul cu vocație știe că a fi preocupat de conștientizarea, supravegherea și îmbogățirea conduitei sale comunicative este o cerință elementară, mai ales pentru că nu tot ce intenționăm reușim să spunem, nu tot ce spunem se aude, nu tot ce se aude se și înțelege, se înțelege și ce nu spunem, iar ceea ce se înțelege nu depinde numai de noi ce devine. În acest context, funcția deținută de profesorul consilier – care își păstrează în esență rolul de resursă la întrebările elevilor în legătură cu lumea – este benefic să se exercite într-un proces didactic de tip eveniment, la care să participe toți elevii, să ajute la formarea deprinderilor individuale și simțului responsabilității, să le permită elevilor dezvoltarea capacității de a anticipa schimbările din jur și de a se adapta la ele.”\n\nRealizați, în aproximativ patru pagini, o prezentare a rolului profesorului consilier școlar în dezvoltarea abilităților de comunicare la elevi. Punctajul se acordă pentru respectarea următoarelor repere:',
      items: [
        { id: 'a', cer: 'Formularea ideii principale a textului dat.', p: 1, barem: '1p. Ex.: profesorul consilier își păstrează rolul de resursă pentru întrebările elevilor despre lume, rol benefic într-un demers didactic de tip eveniment, la care participă toți elevii, contribuind la formarea deprinderilor individuale și a simțului responsabilității.' },
        { id: 'b', cer: 'Precizarea a două abilități ale profesorului consilier școlar.', p: 2, barem: '2×1p. Oricare două abilități. Ex.: ascultarea activă; adresarea întrebărilor.' },
        { id: 'c', cer: 'Evidențierea modului în care abilitățile de la b. facilitează comunicarea eficientă cu beneficiarii în consilierea psihopedagogică.', p: 2, barem: '2×1p. Ex.: ascultarea activă – facilitează înțelegerea mesajului și manifestarea interesului față de gândurile și sentimentele interlocutorului; adresarea întrebărilor – facilitează clarificarea informațiilor și explorarea alternativelor.' },
        { id: 'd', cer: 'Exemplificarea a patru situații care se constituie în bariere ale comunicării eficiente.', p: 8, barem: '4×2p. Ex.: critica și judecarea – evaluare negativă, a fi sau nu de acord cu părerile interlocutorului; etichetarea – stereotipuri pentru a caracteriza o persoană; abaterea și evitarea – schimbarea cursului discuției de la preocupările interlocutorului; lipsa contactului vizual. NOTĂ: dacă doar enumeră, fără exemplificare, câte 1p.' },
        { id: 'e', cer: 'Descrierea a două modalități de optimizare a comunicării.', p: 4, barem: '2×2p. Ex.: comunicarea evaluativă – cel mai frecvent mod de a provoca o reacție defensivă; comunicarea descriptivă – cea mai eficientă modalitate de prevenire a reacțiilor defensive și a blocării comunicării. NOTĂ: dacă doar enumeră, câte 1p.' },
        { id: 'f', cer: 'Menționarea a două efecte pozitive și a două efecte negative ale conflictelor în mediul școlar.', p: 4, barem: '(2×1p)+(2×1p). Ex. pozitive: creșterea coeziunii grupului; dezvoltarea abilităților de adaptare. Negative: diminuarea stimei de sine; scăderea implicării în activitate.' },
        { id: 'g', cer: 'Explicarea conceptului de comunicare asertivă.', p: 2, barem: '2p. Ex.: comunicare directă, deschisă și onestă, care favorizează încrederea în noi și câștigarea respectului celorlalți, cu exprimarea emoțiilor și gândurilor astfel încât ne satisfacem nevoile fără a le deranja pe ale interlocutorului.' },
        { id: 'h', cer: 'Precizarea rolului comportamentului colaborativ în prevenirea conflictelor.', p: 1, barem: '1p. Ex.: creșterea coeziunii grupului poate conduce la diminuarea conflictelor.' },
        { id: 'i', cer: 'Formularea a două principii ale managementului conflictelor.', p: 2, barem: '2×1p. Ex.: focalizarea pe problemă; utilizarea comunicării asertive pe perioada conflictului.' },
        { id: 'j', cer: 'Argumentarea importanței cunoașterii și aplicării de către profesorul consilier a principiilor managementului conflictelor în realizarea și menținerea unui climat școlar pozitiv.', p: 3, barem: '3p. Ex.: focalizarea pe problemă – descrierea situației evitând generalizarea pripită și etichetarea; comunicarea asertivă – adaptare eficientă la situația conflictuală, transmiterea emoțiilor și convingerilor fără a critica opiniile celorlalți.' },
        { id: 'k', cer: 'Respectarea numărului de pagini precizat (aprox. 4 pagini).', p: 1, barem: '1p, cu toleranță de ± o jumătate de pagină. (În aplicație: o pagină de examen ≈ 250–300 de cuvinte scrise de mână.)' }
      ]
    },
    {
      titlu: 'Subiectul al II-lea', puncte: 30,
      text: '„Modalitatea cea mai puțin costisitoare și cea mai umană de a proteja și de a spori sănătatea fizică și psihică a oamenilor este prevenirea apariției unor disfuncționalități, tulburări sau boli. Consilierea psihopedagogică are un rol proactiv, încercând să pregătească copiii și tinerii să știe cum să procedeze în diverse situații de viață, previzibile sau nu, și cum să-și gestioneze adecvat emoțiile pentru a face față cu succes unor solicitări variate.”',
      items: [
        { id: 'A', cer: 'Menționați două obiective ale procesului de consiliere psihopedagogică.', p: 2, barem: '2×1p. Ex.: promovarea sănătății și a stării de bine; dezvoltarea personală.' },
        { id: 'B', cer: 'Enumerați trei factori de protecție, respectiv trei factori de risc care influențează dezvoltarea personalității copiilor și a adolescenților.', p: 6, barem: '3×1p protecție (ex.: stimă de sine ridicată; sprijinul familiei; capacitate ridicată de rezolvare a problemelor) + 3×1p risc (ex.: stimă de sine scăzută; neglijare din partea familiei; catastrofizare).' },
        { id: 'C', cer: 'Argumentați necesitatea cunoașterii factorilor de risc de la B. de către profesorul consilier în elaborarea unui program de consiliere care vizează managementul comportamentelor și situațiilor de risc.', p: 3, barem: 'Argumentare adecvată – 3p; argumentare superficială – 1p.' },
        { id: 'D', cer: 'Exemplificați trei mecanisme de autocontrol individual al emoțiilor.', p: 6, barem: '3×1p mențiune + 3×1p exemplificare. Ex.: dezvoltarea inteligenței emoționale – recunoașterea propriilor emoții; coping adaptativ – umorul în reevaluarea situației; raționalizarea – justificări pentru protejarea imaginii de sine.' },
        { id: 'E', cer: 'Descrieți două modalități de desfășurare a activităților cu elevii în scopul unui management eficient al stresului.', p: 4, barem: '2×2p. Ex.: stabilirea priorităților – reevaluarea activităților zilnice, identificarea celor prioritare și încadrarea lor în timp; evitarea procrastinării – planificarea activităților prioritare în perioadele de maximă eficiență.' },
        { id: 'F', cer: 'Redactați un text coerent, semnificativ științific, de 10 rânduri, în care să prezentați relația dintre reziliență și managementul stresului.', p: 4, barem: 'Prezentarea relației – 3p (NOTĂ: dacă doar explică termenii – câte 1p; reziliența = capacitatea de adaptare, de a funcționa optim în condiții de suprasolicitare; managementul stresului = strategii cognitive, emoționale și comportamentale pentru reducerea/stăpânirea/tolerarea tensiunilor). Respectarea a 10 rânduri – 1p.' },
        { id: 'Ga', cer: 'G. a) Precizați semnificația termenului alexitimie.', p: 2, barem: '2p. Ex.: capacitatea scăzută sau incapacitatea unor persoane de a-și exprima verbal emoțiile.' },
        { id: 'Gb', cer: 'G. b) Descrieți succint trei etape ale unui plan de intervenție specific consilierii individuale, elaborat pentru un elev alexitimic.', p: 3, barem: '3×1p. Ex.: definirea problemei – stabilirea clară a dificultăților elevului; descrierea problemei – analiza funcțională cognitivă, emoțională și comportamentală; formularea planului de intervenție – obiective pe termen lung, obiective specifice, strategii, activități.' }
      ]
    },
    {
      titlu: 'Subiectul al III-lea', puncte: 30,
      text: 'Secvență din programa de Consiliere și dezvoltare personală, clasa a VIII-a:\nCompetență specifică 2.2. Negocierea conflictelor prin diferite tehnici de comunicare.\nConținuturi: Conflictele: caracteristici, surse, modalități de prevenire. Stilurile de negociere a conflictelor sau de abordare constructivă prin aplicarea tehnicilor simple de comunicare.\n\nRealizați un demers didactic pentru dezvoltarea competenței specifice 2.2. utilizând STUDIUL DE CAZ, ca metodă didactică interactivă, prin:',
      items: [
        { id: 'a', cer: 'Explicarea metodei didactice (studiul de caz).', p: 5, barem: '5p. NOTĂ: dacă doar precizează semnificația (metodă de confruntare directă cu o situație reală, autentică, tipică pentru un set de situații problematice), fără explicare – 2p.' },
        { id: 'b', cer: 'Prezentarea a trei etape ale aplicării metodei studiului de caz.', p: 6, barem: '3×2p. Ex.: prezentarea cadrului general și a cazului (clar, precis, complet); sesizarea nuanțelor cazului și a necesității rezolvării lui (se cer informații suplimentare, surse); dezbaterea în grup a modurilor de soluționare (grupuri mici de 5–6, apoi în plen).' },
        { id: 'c', cer: 'Specificarea a două cerințe didactice în utilizarea studiului de caz.', p: 6, barem: '2×3p. Ex.: să existe o situație care va fi analizată; situația aleasă să fie adecvată scopului didactic urmărit.' },
        { id: 'd', cer: 'Menționarea unei activități de învățare adecvate pentru dezvoltarea competenței specifice date.', p: 3, barem: '3p pentru orice activitate de învățare adecvată CS 2.2 (negocierea conflictelor).' },
        { id: 'e', cer: 'Precizarea resurselor (de timp, de loc, material didactic, forme de organizare a clasei) pentru activitatea de la d.', p: 4, barem: '4×1p – câte 1p pentru fiecare: timp, loc, material didactic, formă de organizare.' },
        { id: 'f', cer: 'Exemplificarea modului de dezvoltare a competenței specifice, utilizând studiul de caz, prin activitatea de învățare de la d.', p: 6, barem: 'Exemplificare adecvată (dezvoltă CS 2.2 + folosește studiul de caz + prin activitatea de la d.) – 6p; demers care nu respectă una dintre aceste condiții – 2p.' }
      ]
    }
  ]
});
