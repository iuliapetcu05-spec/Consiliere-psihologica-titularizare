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
