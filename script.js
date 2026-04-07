const bannedWords = [
    "niga", "nigga", "niggers", "\ua4e0\ua4f2\ua4d6\ua4d6\ua4f0\ua4e3\ua4e2", "tayo ay nasa fine dining", "bugoy na koykoy", "denise julia",
    "red note", "rednote", "kendrick lamar", "drake", "katseye", "san chai", "lakers",
    "san cai", "barbie hsu", "meteor garden", "pagsusulit", "diagnostic test", "mini test", "ly/",
    "forms.gle", "craigslist", "gpt", "gizmoapp", "gizmo app", "Mahjong Wins", "Berikut",
    "Battleground Royale", "Leprechaun Riches", "IDETOTO", "ChoiW", "\u2022\u2022\u2022\u2022\u2022", "\u2060\u2579\u2060\u25bd\u2060\u2579", "pentobarbitol",
    "nembutal", "whats@pp", "oxydrhere", "rcacye", "malayaako.ph.com", "malayaako.ph", "crystal meth",
    "cocaine", "fentanyl", "ketamine", "aiteacher", "aiteacher.com", "apateu", "FOLLOW M3",
    "Unichain", "zerion", "Schiller", "Criminal Law Division", "The Danger of Nuclear War Is Real", "language learning model", "scribd",
    "the tesla cybertruck is an all electric", "text-based AI", "gawk 3000", "gawk 2000", "gawk gawk", "wesley guo", "Sheila guo",
    "\uc6a9", "\uc18c", "\u4e2a", "chloe san", "bini Sheena", "bini Mikha", "bini Stacey",
    "bini Gwen", "bini Aiah", "bini Jhoanna", "bini colet", "bini maloi", "\u4eba", "\u6587",
    "\u53c8", "Miles Guo", "\u53ea", "angelica poquiz", "Joriel yulo", "angelica yulo", "jual",
    "cyt0", "Guo Wengu", "sabrina carpenter", "F\u00df", "hontivirus", "b r a i n l", "brainlest",
    "skibid", "biden or trump", "trump or biden", "Kin Ming Je", "washington farm", "guo farm", "Gu Wengui",
    "chinita", "new china federation", "xi farm", "Guo Wengui", "Kwok scam", "Wengui Guo", "WenguiGuo",
    "vipvip", "VIPVIP", "Call girls", "*Call", "\u260f", "!girls", "#girls",
    "@Girls", "call girl", "brain les", "need anser", "need answer", "report nonsens", "kimia farma",
    "menggugurkan", "OBAT PENDORONG", "OBAT PENGGUGUR", "obat tidur", "obat bius", "apotik", "jual obat",
    "obat aboris", "a pex", "-full-", "-vs-", "...customer...", ".^{}cf", ".^{}ga",
    ".^{}gq", ".^{}tk", ".cf", ".de", ".eu/", ".ga", ".gq",
    ".icu", ".jpg", ".ncwit.", ".okdrs.", ".online", ".png", ".reddit.",
    ".richlandsource.", ".tk", "''''", "''''c \"\"\"\"\"", "''''customer \"\"\"\"\"", "\"democracy\"", "(\u2565\ufe4f\u2565)",
    "(\u25cd\u2022\u1d17\u2022\u25cd)", "(shut", "(yeah)", "[tex]^{}[/tex]", "[tex]^{}[/tex] in a file", "[tex]basesfiles.^{}", "[tex]bit.^{}ly",
    "[tex]cutlnk.^{}", "[tex]cutt.^{}ly", "[tex]tnylnk.^{}", "@", "@gmail", "@ss", "@yahoo",
    "****", "*customer*care* number*", "/files/", "/Julia-Sweety-02-21", "\\.(\\[tex\\].*\\[\\/tex\\])*c(\\[tex\\].*\\[\\/tex\\])*f", "\\.(\\[tex\\].*\\[\\/tex\\])*g(\\[tex\\].*\\[\\/tex\\])*a", "\\.(\\[tex\\].*\\[\\/tex\\])*g(\\[tex\\].*\\[\\/tex\\])*q",
    "\\.(\\[tex\\].*\\[\\/tex\\])*l(\\[tex\\].*\\[\\/tex\\])*y", "\\.(\\[tex\\].*\\[\\/tex\\])*m(\\[tex\\].*\\[\\/tex\\])*l", "\\.(\\[tex\\].*\\[\\/tex\\])*t(\\[tex\\].*\\[\\/tex\\])*k", "\\.jpg", "\\^{}", "==D", "=9813205349hot",
    "\u030d|\u030e|\u0304|\u0305|\u033f|\u0311|\u0306|\u0310|\u0352|\u0357|\u0351|\u0307|\u0308|\u030a|\u0342|\u0343|\u0344|\u034a|\u034b|\u034c|\u0303|\u0302|\u030c|\u0350|\u0300|\u0301|\u030b|\u030f|\u0312|\u0313|\u0314|\u033d|\u0309|\u0363|\u0364|\u0365|\u0366|\u0367|\u0368|\u0369|\u036a|\u036b|\u036c|\u036d|\u036e|\u036f|\u033e|\u035b|\u0346|\u031a|\u0315|\u031b|\u0340|\u0341|\u0358|\u0321|\u0322|\u0327|\u0328|\u0334|\u0335|\u0336|\u034f|\u035c|\u035d|\u035e|\u035f|\u0360|\u0362|\u0338|\u0337|\u0361|\u0489|\u0316|\u0317|\u0318|\u0319|\u031c|\u031d|\u031e|\u031f|\u0320|\u0324|\u0325|\u0326|\u0329|\u032a|\u032b|\u032c|\u032d|\u032e|\u032f|\u0330|\u0331|\u0332|\u0333|\u0339|\u033a|\u033b|\u033c|\u0345|\u0347|\u0348|\u0349|\u034d|\u034e|\u0353|\u0354|\u0355|\u0356|\u0359|\u035a|\u0323", "\u030d|\u030e|\u0304|\u0305|\u033f|\u0311|\u0306|\u0310|\u0352|\u0357|\u0351|\u0307|\u0308|\u030a|\u0342|\u0343|\u0344|\u034a|\u034b|\u034c|\u0303|\u0302|\u030c|\u0350|\u0300|\u0301|\u030b|\u030f|\u0312|\u0313|\u0314|\u033d|\u0309|\u0363|\u0364|\u0365|\u0366|\u0367|\u0368|\u0369|\u036a|\u036b|\u036c|\u036d|\u036e|\u036f|\u033e|\u035b|\u0346|\u031a|\u0315|\u031b|\u0340|\u0341|\u0358|\u0321|\u0322|\u0327|\u0328|\u0334|\u0335|\u0336|\u034f|\u035c|\u035d|\u035e|\u035f|\u0360|\u0362|\u0338|\u0337|\u0361|\u0489|\u0316|\u0317|\u0318|\u0319|\u031c|\u031d|\u031e|\u031f|\u0320|\u0324|\u0325|\u0326|\u0329|\u032a|\u032b|\u032c|\u032d|\u032e|\u032f|\u0330|\u0331|\u0332|\u0333|\u0339|\u033a|\u033b|\u033c|\u0345|\u0347|\u0348|\u0349|\u034d|\u034e|\u0353|\u0354|\u0355|\u0356|\u0359|\u035a|\u0323|\u0e4e|\u0e49", "\u2580\u2588\u2584", "\u2591\u2591\u2591", "\u263a", "\u2741\u25d5 \u203f \u25d5\u2741", "\u2764",
    "\u2764\u200b", "$:\u20acX", "$hit", "0rgy", "\u2460|\u2461|\u2462|\u2463|\u2464|\u2465|\u2466|\u2467|\u2468|\u2469|\u246a|\u246b|\u246c|\u246d|\u246e|\u246f|\u2470|\u2471|\u2472|\u2473|\u2474|\u2475|\u2476|\u2477|\u2478|\u2479|\u247a|\u247b|\u247c|\u247d|\u247e|\u247f|\u2480|\u2481|\u2482|\u2483|\u2484|\u2485|\u2486|\u2487|\u2488|\u2489|\u248a|\u248b|\u248c|\u248d|\u248e|\u248f|\u2490|\u2491|\u2492|\u2493|\u2494|\u2495|\u2496|\u2497|\u2498|\u2499|\u249a|\u249b|\u249c|\u249d|\u249e|\u249f|\u24a0|\u24a1|\u24a2|\u24a3|\u24a4|\u24a5|\u24a6|\u24a7|\u24a8|\u24a9|\u24aa|\u24ab|\u24ac|\u24ad|\u24ae|\u24af|\u24b0|\u24b1|\u24b2|\u24b3|\u24b4|\u24b5|\u24b6|\u24b7|\u24b8|\u24b9|\u24ba|\u24bb|\u24bc|\u24bd|\u24be|\u24bf|\u24c0|\u24c1|\u24c2|\u24c3|\u24c4|\u24c5|\u24c6|\u24c7|\u24c8|\u24c9|\u24ca|\u24cb|\u24cc|\u24cd|\u24ce|\u24cf|\u24d0|\u24d1|\u24d2|\u24d3|\u24d4|\u24d5|\u24d6|\u24d7|\u24d8|\u24d9|\u24da|\u24db|\u24dc|\u24dd|\u24de|\u24df", "1gger", "2f3T96",
    "2X07dra", "319777586", "3a8Nt8n", "3gVQKw3", "3J8AD", "3tZxaCQ", "4 sex",
    "405665716", "4Rq[tex]^{}[/tex]tIvk", "4ss", "707091118", "860801713", "A > S > S", "a p e x",
    "a queer", "a s s", "a tard", "a-s-s", "a..ss", "a.s.s", "a.ss",
    "a**", "a**hole", "a*s", "a//ss", "a/s/s", "a/ss", "a$$",
    "a55", "abofimov1986", "actin'", "add me on snap", "af", "afro", "ahrefs",
    "airhead", "algebra\\.com", "alphabetize\\.org", "An y g ir", "An y g irl", "anal", "\u1d43\u207f\u1d48",
    "\uff41\uff4e\uff44", "anime rp", "Annnyy", "answer is in a file", "Answer is in a photo", "answer:bit.", "Answer:heyExplanation:",
    "Answer:hiExplanation:", "Any girl", "any girls wanna", "Anyone here is on?", "Anyone need a friend", "Anyone need a friend or someone to talk to", "Anyone need a friend or someone to talk to?",
    "anyone wanna rp", "anyone wanna talk", "anyone want to be friends", "anyone want to be my", "anyone want to be my friend", "ap3x", "archiveofourown.org",
    "are u a boy", "are u a girl", "are you a boy", "are you a girl", "are you a simp", "aroused", "arse",
    "aryasamaj\\.com", "as.f", "as.s", "asdfghjkl", "asf", "ass", "\u00e5\u0161\u0161",
    "asshole", "asss", "assss", "axxhole", "ayy", "azz", "\u1d00ss",
    "b i t c h", "B R A I N LY. T O D A Y", "b-i-t-c-h", "b-ored", "b!tch", "b.i.t.c.h", "b.o.o.b.s",
    "b.obs", "b**ch", "b\\!tch", "b\\.i\\.t\\.c\\.h", "b\\.tch", "b\\*tch", "b00bies",
    "b00ty", "b1tch", "ba!be", "babes", "\u1d47\u1d43\u1d48", "bad bvtch", "badoo",
    "bahan chod", "bahanchod", "bahen chod", "bahenchod", "basesfile.com", "bastard", "batshit",
    "bbc\\.co\\.uk", "bdsm", "\u1d47\u1d49", "beat his meat", "beat meat", "beat my meat", "belowtnylnk.ml",
    "Best SEO Solutions", "beyotch", "bhen ki chut", "bhenchod", "bhosdi", "bhosdi ke", "bhosdike",
    "bhusadi ke", "bi tch", "bi-tch", "bi.t.ch", "bi.tch", "biach", "biatch",
    "bich", "bichth", "bick", "bicth", "bihh", "biitch", "bimbo",
    "biotch", "bish", "bit ch", "bit-ch", "bit.[tex]^{}[/tex]ly", "bit.[tex]^{}[/tex]ly/3a8Nt8n", "bit.[tex]^{}[/tex]ly/3gVQKw3",
    "bit.[tex]^{}[/tex]ly/3tZxaCQ", "bit.ch", "bit.do", "bit.ly", "bit[tex]^{}[/tex].ly", "bit\\.\\[tex\\]\\^\\{\\}\\[\\/tex\\]ly", "bitc*",
    "Bitch", "bitch", "b\u00edtch", "bl.ink", "black lives don't matter", "blogspot", "blogspot\\.com",
    "blow job", "blowjob", "BlTCH", "blyat", "bo*red\u200b", "bog off", "bollocks",
    "bonehead", "boner", "boob", "b\u00f6\u00f6b", "boobies", "\u1d47\u1d52\u1d52\u1d47\u02e2", "booty",
    "boutta", "boyfriend", "Brainly mods", "\u1d47\u02b3\u1d43\u2071\u207f\u02e1\u02b8.\u1d57\u1d52\u1d48\u1d43\u02b8", "\uff42\uff52\uff41\uff49\uff4e\uff4c\uff59.\uff54\uff4f\uff44\uff41\uff59", "BRAINLY.TODAY", "brainly.today",
    "\u1d47\u02b3\u1d43\u2071\u207f\u02e1\u02b8\u1d9c\u1d52\u1d50", "brainlygirls", "britishopen", "bruh", "bsdk", "btch", "bts stan",
    "buddypress.org", "bugger", "bullsh*t", "bullshit", "\u1d47\u1d58\u02b3\u207f\u02b8", "\u1d47\u1d58\u02e2\u1d57\u02b8", "busty",
    "but hole", "butthole", "butthurt", "buttsex", "buyessays\\.us", "bxtches", "b\u0435low!xtiny.cf",
    "\u0299\u026a\u1d1b\u1d04\u029c", "\u0299\u0280\u1d00\u026a\u0274\u029f\u028f.\u1d1b\u1d0f\u1d05\u1d00\u028f", "c u n t", "c.k.", "c\\.u\\.n\\.t", "c\\.unt", "c\\*\\*\\*",
    "c\\*\\*t", "c\\*unt", "c0ck", "caffeine.tv", "caffeine.tv/", "can i get ur #", "can i get your #",
    "can i give u my #", "can i give you my #", "can u give me ur #", "can u give me your #", "can u share ur #", "can u share your #", "can you give me ur #",
    "can you give me your #", "can you share ur #", "can you share your #", "cash app", "cashapp", "cha.t", "chacha\\.com",
    "chatt - sex.online", "chatt-sex.online", "cheeg", "chegg", "\u1d9c\u02b0\u2071\u1d9c\u1d4f\u02e2", "chod", "chodna",
    "chodu", "chttttt", "chut", "chutad", "chutiya", "chutiye", "clickandlearn\\.cc",
    "clit", "cock", "cocks", "come have f u n", "course hero", "coursehero", "cr\\!p",
    "cra.p", "crap", "crip", "cu m", "cu.nt", "cuhh", "cum",
    "cummies", "cumming", "cunt", "Cunt", "customer /care/ number/", "customer care number", "cuteladies.xyz",
    "cutlnk", "cutlnk.ml", "cutt. ly", "cutt\u2024ly", "cutt[tex]^{}[/tex]", "cutt[tex]^{}[/tex].ly", "cuum",
    "cvnt", "\u1d04\uff4f\u1d0d\u1d07\uff12\u1d0d\u1d07", "d e e z n u t s", "d i c k", "d!ck", "d*ck", "d/ick",
    "d\\*\\*\\*", "dadyy", "Dailyknots", "damn", "danis", "danis1704", "deadass",
    "deez", "deez nuts", "deez nutz", "deeznuts", "deeznutz", "delaware\\.gov", "delta math",
    "denis1704", "desmos.com", "dezz nuts", "di-ck", "di.ck", "di/ck", "di\\/ck",
    "dic/k", "dicc", "\u1d48\u2071\u1d9c\u1d4f", "dick", "d\u00ee\u00e7k", "dick head", "dickhead",
    "dicks", "dictionary\\.reference\\.com", "dik", "dikk", "dildo", "dipsh**", "dipshit",
    "dirrrtttyyy", "discord.gg", "\u1d30\u1d52", "\uff44\uff4f", "do a rp", "docs.google", "docs.google.com",
    "does anyone want to talk", "dogmovie.net", "\u1d30\u1d52\u207f\u1d57", "dope", "douche", "down to zoom", "down[tex]^{}[/tex]load",
    "drink bleach", "drink some bleach", "drunk", "DTF", "dumass", "dumb", "dumb4zz",
    "dumbass", "dushbag", "dyke", "easybib\\.com", "echo2155", "Edgenuity", "Edmentum",
    "edmentum", "edublogs\\.org", "en\\.wikipedia\\.org", "europa2433", "E\u2063xplanation i\u2063s i\u2063n a f\u2063ile", "Explanation is[tex]^{}[/tex]", "Explanation is[tex]^{}[/tex] in a file",
    "extremetech\\.com", "f a g g e t", "f a g g o t", "f off", "F R E E P O I N T S", "f that", "f u c",
    "f u c k", "f you", "f-u-k", "f-uck", "f,ck", "f..uck", "f.u.c.k",
    "f.uck", "f\u2019ag", "f\u2019uck", "f(uck) sh!*t f.*ck", "f*", "f**", "f***",
    "f**k", "f*ck", "f*k", "f/uck", "f\\-u\\-c\\-k", "f\\-uck", "f\\.u\\.c\\.k",
    "f\\.uck", "f\\*\\*\\*\\*\\*\\*", "f\\*\\*\\*\\*\\*g", "f\\*\\*\\*ing", "f\\*\\*k", "f\\#\\#k", "f\\=\\=k",
    "f#ck", "f$ck", "facebook", "fack", "Fag", "fag", "fagget",
    "faggt", "fat ass", "fatass", "faygit", "fboy", "fck", "fcuk",
    "female dog", "fgirl", "FGxVc", "file host", "file hosting", "file hosting service. link", "filebit",
    "filetnylnk.ml", "fil\u0435xtiny", "\u1da0\u2071\u207f\u1d48", "finger her", "finger me", "finger you", "finish the lyric",
    "finish the song", "finna", "fk", "fkn", "flirt", "flvs", "fml",
    "foch", "fock", "\u1da0\u1d52\u02e1\u02e1\u1d52\u02b7", "follow me on insta", "follow my insta", "\uff46\uff4f\uff52", "\u1da0\u1d52\u02b3",
    "for Interested girls", "fortnite", "francevs", "\u1da0\u02b3\u1d49\u1d49", "FREE POINTS", "freemathhelp\\.com", "fricken",
    "friend zone", "friggin", "fu-ck", "fu!c!ke!d", "fu!ck!ed", "fu..ck", "fu.ck.ing",
    "fu.cked", "fu.cking", "fu*ck", "fu*cking", "fu*k", "Fu*k", "Fu*k me",
    "fu/ck", "fu\\.ck", "fu\\*\\*", "fu\\#ck", "fuc", "fuc k", "fuc*",
    "fuc/k", "fuc\\.k", "fucc", "fucing", "Fuck", "fuck", "f\u00fack",
    "f\u00fbck", "f\u00fb\u00e7k", "f\u00fcck", "fucKed", "fucker", "f\u00fb\u00e7k\u00e8r", "f\u016b\u010d\u0137\u011b\u0159",
    "fucking", "f\u016bcking", "fuk", "fukboi", "fukk", "funckin", "fuq",
    "fuqq", "fur.ly", "furry rp", "fuuck", "fuvk", "fuxk", "fvch",
    "fvck", "fxck", "fxx", "f\u0438ck", "\u0192uck", "\u0192u\u00e7k", "g ir l",
    "g00gle", "gaand", "gamertag", "gand ki maar", "gand mari", "gandgi", "gandoo",
    "gandu", "gangi", "gangi ka kaam", "Gauthmath", "gayyyy", "g\u00ed4l", "GIMKIT",
    "gimkit.com", "\u1d4d\u2071\u02b3\u02e1", "g\u00edrl", "girl sex", "girlfriend", "girlllllll", "girls sex",
    "girls.online", "give me head", "glock", "gmail", "gmeet", "\uff47\uff4f", "goo.gl",
    "google hangout", "google meet", "google.com", "got a zoom", "greatlovespells", "grey-cuplive", "GTH",
    "guidelines\"", "gyat", "gyatt", "h orny", "h.e.l.l.", "h.o.e", "h\\@andj0b",
    "h\\@andjob", "h0e", "h0rney", "h0rny", "h0t girls", "hacked", "handj0b",
    "haramkhor", "have s e x", "have zoom", "he..lla", "healthyheart\\.nhs\\.uk", "help er qna .com", "helperqna",
    "henquismarim1980", "henta1", "hentai", "her snatch", "her vagina", "\u02b0\u1d49\u02b3\u1d49", "\uff48\uff45\uff52\uff45",
    "Here's li[tex]^{}[/tex]nk", "here's link", "H\u2063ere's li\u2063nk t\u2063o th\u2063e answ\u2063er:", "Here's link[tex]^{}[/tex]", "here's my email", "here's my number", "herebit.",
    "herecutt.ly", "heretnylnk.ml", "Her\u0435's link t\u043e th\u0435 \u0430nswer", "Hey Anyone wann.a be friends", "Hey Friend", "Heyy guys", "hiii",
    "Hinge", "his dick", "ho", "ho\\*", "hoe", "hoee", "hoes",
    "homie", "homophobes", "homophobic", "HOMOPHOBIC", "hooker", "horny", "hot girls only",
    "http://zzz.totmania.net", "https://consumer.klickly", "https://consumer.klickly.com", "https://linktr.ee/", "https://linktr.ee/-", "https://linktr.ee/-danis1704", "https://linktr.ee/-denis1704",
    "https://linktr.ee/julia.karandina", "https://t.ly/FGxVc", "https://t.ly/MhKKA", "https://telegra.ph", "https://telegra.ph/", "https://telegra.ph/Julia-Sweety-02-21", "https://www.greatlovespells.co.uk",
    "https://yadi.sk/", "hunterxhunter", "hyperurl.co", "\u1d35", "i am bored", "I can only upload it to a file hosting service", "I can only upload[tex]^{}[/tex] it to a file",
    "I c\u043euldn't \u0430tt\u0430\u0441h it h\u0435r\u0435, but I upl\u043e\u0430d\u0435d it t\u043e \u0430 fil\u0435 h\u043esting.", "I do not know the answer to this question", "I don't know bro", "i hate u", "I uploaded it to a file hosting", "I uploaded the answer to", "I u\u2063\u2063ploaded t\u2063\u2063he a\u2063\u2063nswer t\u2063\u2063o a f\u2063\u2063ile h\u2063\u2063osting.",
    "I upload\u0435d the answ\u0435r t\u043e a fil\u0435 hosting.", "I u\u0440l\u043e\u0430d\u0435d th\u0435 \u0430nsw\u0435r t\u043e \u0430 fil\u0435 h\u043esting", "i,m", "i'm bored", "i'm gay", "i'm not a simp", "idfc",
    "idiot", "idk", "IDK", "\u1d35\u1da0", "ig @", "igger", "\u1d35\u1d50",
    "im bo.red", "im bored", "im gay", "im not a simp", "\u2071\u207f", "in a filebit", "in zoom",
    "inanphuquy", "Inst'agram", "insta", "insta @", "Instagram", "instagram", "instagram @",
    "i\u2063s [tex]^{}[/tex]in the fil[tex]^{}[/tex]e below", "is.gd", "\uff49\uff54", "\u2071\u1d57\u02e2", "j oin f as t\u200b", "j\\.erk", "j0in",
    "jackass", "Jaiminy`creation myshopify customer care number,9832336299\u00ae\u00ae\u00ae#", "jaiminy`creation myshopify customer care number,9832336299\u00ae\u00ae\u00ae#\u200b`", "jerk", "jhatu", "jizz", "jo in",
    "join for talk\u200b", "join my zoom", "join to zoom", "join zoom", "juicy", "Julia-Sweety-", "julia.karandina",
    "jungle bunny", "junglebunny", "junkie.....me", "just text me", "just want to text", "k y s", "kahoot",
    "kaminay", "kansas-vs-michigan", "karens", "Kartvally", "keyonn", "keyonnn", "kick your ass",
    "kill illegal", "kill myself", "kill ni", "kill yourself", "klickly", "klickly.com", "kms",
    "\uff4b\uff4e\uff4f\uff57", "kunt", "kutiya", "kutti", "kys", "l ike sx", "laand",
    "lauda", "lemme", "li[tex]^{}[/tex]nk", "Li[tex]^{}[/tex]nk below!", "lick my", "lick you", "like s ex",
    "\u02e1\u2071\u207f\u1d4f", "Link Below! bit.[tex]^{}[/tex]ly/", "linkcutter.ga", "linux\\.about\\.com", "lionsvs", "live-", "Live\u00ae",
    "Live2018", "livegfootball", "liveifootball", "liveonhd", "livetowatch", "lm ao", "lmao",
    "lmaoo", "lmaooo", "lmfao", "load the answer", "loda", "lode", "look!",
    "lookin'", "looking for friends", "looking for some friends", "lordsandladies\\.org", "love u", "luv", "ly/3g",
    "ly/3gVQKw3", "m\\.theartstory\\.org", "maadarchod", "machi", "madarchod", "madharchod", "make a zoom",
    "MAST!URB!ATE", "masterbate", "MASTERBATE", "MASTERBATION", "masturbate", "\u1d50\u1d43\u02e2\u1d57\u1d58\u02b3\u1d47\u1d43\u1d57\u1d49", "Mast\u00fbrbate",
    "Mast\u00fbrbat\u00e9", "masturbating", "masturbation", "math papa", "math way", "mathsisfun\\.com", "mathway",
    "mathway\\.com", "mazda-ottawa", "mdaf", "\u24dc\u24d4", "\u1d50\u1d49", "me!?!", "Mee.tin.g I.D",
    "meet code", "meet.google", "meet.google.com", "meetgooglecom", "meetgooglecom/", "meeting id", "meetpof",
    "merde", "MhKKA", "midget", "milf", "milkio", "minecraft", "minger",
    "mintaka\\.sdsu\\.edu", "mmmmm", "Mojofox", "molest", "mothafucka", "motherflutter", "motherfuc",
    "motherfuck", "\u1d50\u1d52\u1d58\u1d57\u02b0", "Mozpassport.com", "msg", "msngr", "mtf", "\u1d50\u02b8",
    "my balls", "my cok", "my dick", "my dong", "my ig", "my insta is", "my nuts",
    "MY \u0274\u1d1c\u1d05\u1d07 \u1d18\u029c\u1d0f\u1d1b\u1d0f\ua731 \u1d00\u0274\u1d05 \u1d20\u026a\u1d05\ua731 \u029c\u1d07\u0280\u1d07 \u1d04\u1d0f\u1d18\u028f \u1d1b\u029c\u1d00\u1d1b \u029f\u026a\u0274\u1d0b \u1d00\u0274\u1d05 \u1d0f\u1d18\u1d07\u0274 \u026a\u0274 \u1d00 \u0274\u1d07\u1d21 \u1d1b\u1d00\u0299 : \u1d56\u02b3\u1d49\u1d57\u1d57\u02b8\u1d4d\u2071\u02b3\u02e1\u02e2.\u02b7\u1d49\u1d47\u02e2\u2071\u1d57\u1d49", "my penis", "my puss", "my snap", "my user is", "my username danis1704_danis1704", "my username is",
    "my username julia_sweety", "my username_ danis1704", "my vagina", "my zoom", "my zo\u00f2m", "myshopify", "n i g g",
    "N I G G E R", "n-i-g-g-e-r", "n!99", "n!gg", "n!gg3r", "n.gga", "n.ggas",
    "n\\!gg", "n\\!gger", "n\\.igg", "n199", "n1gg", "na.ked", "nagger",
    "naked", "\u24dd\u24d0\u24da\u24d4\u24d3", "\u207f\u1d43\u1d4f\u1d49\u1d48", "naked photos", "name this song", "nationalgeographic\\.com", "naughtyboy",
    "naukar ki chut", "negger", "ngga", "nggaz", "ni-gga", "ni99", "nibba",
    "nicca", "nig", "nig ga", "Nigg", "nigg", "nigg3r", "NIGGA",
    "\u0144igg\u00e5", "niggas", "nigger", "niggur", "niqa", "niqq", "niqqa",
    "nitrotype.com", "NlGGA", "nlgger", "nu!de", "NUD!E", "nude", "nuds",
    "nutsack", "\u0274\u026a\u0262\u0262\u1d07\u0280", "obb-ovjk-adtjoin", "Odysseyware", "omfg", "\u1d52\u207f", "on snap",
    "on zoom", "\u1d52\u207f\u02e1\u2071\u207f\u1d49", "onlinestatbook\\.com", "\u1d52\u207f\u02e1\u02b8", "only girls zoom", "open a zoom", "opengameart",
    "opengameart.org", "p-u-s-s-y", "p.adlet", "p***", "p****", "p*ssy", "p*ssy now",
    "p/ussy", "p\\.u\\.s\\.s\\.y", "p\\.ussy", "P0rn", "p0rn", "pa.dlet", "pad.let",
    "pad/let", "padle.t", "padlet", "Padlet", "padlet.com", "paedo", "pain in the ass",
    "panties", "panty", "parse.ly", "partners.biz", "paypal", "pbs\\.org", "pedo",
    "pedophile", "peen", "peepee", "peeranswer", "pen1s", "penes", "penis",
    "penpals\\.web\\.unc\\.edu", "perver", "peynicumrei1985", "photo math", "photomath", "Photos of me getting fu!c!ke!d in the toilet at school watch here for free - : \u209a\u1d63\u2091\u209c\u209cyg\u1d62\u1d63\u2097\u209b.w\u2091b\u209b\u1d62\u209c\u2091", "piece of shit",
    "piss", "piss off", "Pls dont report", "plz", "plz join", "Po!rn", "po!rn",
    "pofsex", "pofsex.com", "poo", "porn", "possy", "prettygirls website", "prettygirls,website",
    "\u209a\u1d63\u2091\u209c\u209cyg\u1d62\u1d63\u2097\u209b.w\u2091b\u209b\u1d62\u209c\u2091", "prettygirls.website", "prick", "privovediz1985", "pu**y", "pu/ssy", "pu\\.ssy",
    "pu$", "pu$y", "pu55y", "puke", "pull-out", "pullman\\.co\\.uk", "\u1d3e\u1d58\u207f\u2071\u02e2\u02b0",
    "pus/sy", "pus\\.sy", "pusi", "Puss", "puss", "puss.y", "puss/y",
    "pussi", "pussy", "pusy", "puta", "putain", "puthy", "pwussy",
    "\u1d18\u1d1css\u028f", "\u24e0|\u24e1|\u24e2|\u24e3|\u24e4|\u24e5|\u24e6|\u24e7|\u24e8|\u24e9|\u24ea|\u24eb|\u24ec|\u24ed|\u24ee|\u24ef|\u24f0|\u24f1|\u24f2|\u24f3|\u24f4|\u24f5|\u24f6|\u24f7|\u24f8|\u24f9|\u24fa|\u24fb|\u24fc|\u24fd|\u24fe|\u24ff|\u32b2|\u32b3|\u32b4|\u32b5|\u32b6|\u32b7|\u32b8|\u32b9|\u32ba|\u32bb|\u32bc|\u32bd|\u32be|\u32bf|\u33e0|\u33e1|\u33e2|\u33e3|\u33e4|\u33e5|\u33e6|\u33e7|\u33e8|\u33e9|\u33ea|\u33eb|\u33ec|\u33ed|\u33ee|\u33ef|\u33f0|\u33f1|\u33f2|\u33f3|\u33f4|\u33f5|\u33f6|\u33f7|\u33f8|\u33f9|\u33fa|\u3358|\u3359|\u335a|\u335b|\u335c|\u335d|\u335e|\u335f|\u3360|\u3361|\u3362|\u3363|\u3364|\u3365|\u3366|\u3367|\u3368|\u3369|\u336a|\u336b|\u336c|\u336d|\u336e|\u336f|\u3370|\uff10|\uff11|\uff12|\uff13|\uff14|\uff15|\uff16|\uff17|\uff18|\uff19|\uff21|\uff22|\uff23|\uff24|\uff25|\uff26|\uff27|\uff28|\uff29|\uff2a|\uff2b|\uff2c|\uff2d|\uff2e|\uff2f|\uff30|\uff31|\uff32|\uff33|\uff34", "qiita", "quizizz", "quizlet", "quizlet.com", "r e t a r d",
    "r u a boy", "r u a girl", "r you a boy", "r you a girl", "Ra.te me", "Ra.te me ig bc im bo.red", "randi",
    "randi ka bacha", "rape", "rapist", "rate me", "rate me 1", "readwritethink\\.org", "real\\-world\\-physics\\-problems\\.com",
    "\u02b3\u1d49\u1d43\u02e1\u02e1\u02b8", "rebrandly", "reddit.", "redpill", "retard", "R\u00e8tard", "rhythm-india\\.com",
    "rizz", "rizzler", "roblox", "ROBLOX", "robux", "rp with me", "s e x",
    "s ex and", "s-tupid", "s.hit", "s*x", "s/hit", "s\\.hit", "s3x",
    "sand nigger", "sandnigger", "schmuck", "screw u", "screw up", "screw you", "scum",
    "se x y g i r l s", "\u24e2\u24d4\u24d4", "\u02e2\u1d49\u1d49", "seggs", "seks!-!ch!at", "semrush", "send nudes",
    "senpai", "sex", "s\u00ebx cha.t", "sex with me", "sex-partners", "sex-partners.biz", "sex-today.fun",
    "sex.online", "sexdates.fun", "sexnow", "sexx-partners.biz", "sexx-today.fun", "sexxx-partners.biz", "sexxx-today.fun",
    "sexy", "\u02e2\u1d49\u02e3\u02b8\u1d56\u02b0\u1d52\u1d57\u1d52\u02e2", "sexyphotos.online", "sh it", "sh-it", "sh!*t", "sh!t",
    "sh.i.t", "sh.it", "sh**", "sh/it", "sh\\*t", "sh\\/it", "shawty",
    "shi.t", "shi/t", "shii", "Shit", "shit", "shiz", "shlt",
    "shmuck", "shoot illegal", "shortlnk.gq", "shortlnk.ml", "shorturl", "shorturl.at", "shorty",
    "sht", "shut up", "shyt", "\u02e2\u2071\u1d57\u1d49", "skank", "skibidi", "skibidi toilet",
    "skype", "sl ut", "sl-ut", "slag", "slut", "smart-arse", "smart\\-ass",
    "smartass", "smash or pass", "smd", "smexy", "snap @", "snap me", "Snapch'at",
    "snapchat", "sniply", "snipurl", "s\u0274\u026a\u1d1b\u1d04\u029c", "someb!ody", "son of a bitch", "\u02e2\u1d52\u02b3\u02b3\u02b8",
    "soundcloud", "\u02e2\u1d56\u1d43\u1d9c\u1d49", "sparknotes\\.com", "spic", "squirter", "squirting", "sslut",
    "start a zoom", "stfu", "sthu", "stripper", "stu*pid", "stupid", "su.pr",
    "suar", "suar ki aulad", "sub to my", "succ", "suck cok", "suck me", "suck my",
    "suckass", "sucked", "sucked!", "sucker", "sugar baby", "sugar daddy", "sugar mama",
    "sugar mommy", "suicidal", "suicide", "supplierbin", "sx roleplay", "\ua731\u029c\u1d07`\ua731 \u0274\u1d1c\u1d05\u1d07 \u1d18\u029c\u1d0f\u1d1b\u1d0f\ua731 \u1d00\u0274\u1d05 \u1d20\u026a\u1d05\ua731 \u029c\u1d07\u0280\u1d07 \u1d04\u1d0f\u1d18\u028f \u1d1b\u029c\u1d00\u1d1b \u029f\u026a\u0274\u1d0b \u1d00\u0274\u1d05 \u1d0f\u1d18\u1d07\u0274 \u026a\u0274 \u1d00 \u0274\u1d07\u1d21 \u1d1b\u1d00\u0299 - \u1d56\u02b3\u1d49\u1d57\u1d57\u02b8\u1d4d\u2071\u02b3\u02e1\u02e2.\u02b7\u1d49\u1d47\u02e2\u2071\u1d57\u1d49", "\ua731\u029c\u1d07`\ua731 \u0274\u1d1c\u1d05\u1d07 \u1d18\u029c\u1d0f\u1d1b\u1d0f\ua731 \u1d00\u0274\u1d05 \u1d20\u026a\u1d05\ua731 \u029c\u1d07\u0280\u1d07 \u1d04\u1d0f\u1d18\u028f \u1d1b\u029c\u1d00\u1d1b \u029f\u026a\u0274\u1d0b \u1d00\u0274\u1d05 \u1d0f\u1d18\u1d07\u0274 \u026a\u0274 \u1d00 \u0274\u1d07\u1d21 \u1d1b\u1d00\u0299 - \u1d56\u02b3\u1d49\u1d57\u1d57\u02b8\u1d4d\u2071\u02b3\u02e1\u02e2.\u02b7\u1d49\u1d47\u02e2\u2071\u1d57\u1d49`",
    "t i t t i e s", "t i t t y", "t.ly/", "t.ly/FGxVc", "t\\.answers\\.com", "t1tt", "ta..lk",
    "talk on zoom", "tallywacker", "tatti", "tbfh", "telegra.ph", "teri ma ki chut", "teri maa ki chut",
    "tf", "\u1d57\u02b0\u1d49", "\uff54\uff48\uff45", "The answer and explanation to your question in a file", "thefreedictionary\\.com", "thenest\\.com", "thephillyegotist.",
    "thewellproject.", "thicc", "\u1d57\u02b0\u2071\u02e2", "this isnt a school question", "thong", "thorght", "thot",
    "tiddy", "tight-arse", "tight-ass", "Tik Tok", "tik tok", "TIK TOKS", "Timed Test",
    "Tinder", "tiny.cc", "tinyclick", "tinylnk.cf", "tinylnk.gq", "tinylnk.ml", "tinyurl",
    "tinyurl.com", "tit", "titanpad", "titanpad\\.com", "TITS", "titts", "tnylnk",
    "tnylnk.gq", "\uff54\uff4f", "tockify.com", "\u1d40\u1d52\u1d56", "tosser", "tourfrancede", "tqn\\.com",
    "translate\\.google\\.ca", "tricksmate\\.com", "trump 2020", "tryna", "trynna", "tw@t", "twat",
    "twitter", "\u1d1b\u029c\u1d0f\u1d1b", "u.to/", "\uff35|\uff36|\uff37|\uff38|\uff39|\uff3a", "ujeb.se", "u\u2063\u2063\u2063ploaded i\u2063\u2063\u2063t t\u2063\u2063\u2063o a f\u2063\u2063\u2063ile h\u2063\u2063\u2063osting", "upl\u043e\u0430d\u0435d it t\u043e \u0430 fil\u0435 h\u043esting",
    "ur dick", "ur snatch", "\u1d58\u02e2\u1d49", "vag", "vark\\-learn\\.com", "vegina", "vibrator",
    "virgin", "virginity", "vstvon", "w an t to do", "w hore", "w.h.o.r.e", "w.t.f",
    "w.tf", "w.th", "wack off", "\uff57\uff41\uff48\uff54", "\u1d42\u1d43\u2071\u1d57\u2071\u207f\u1d4d", "wan t to do", "wanna",
    "wanna be friends", "wanna zoom", "wannt", "\u24e6\u24d0\u24dd\u24e3", "\u02b7\u1d43\u207f\u1d57", "Want to have someone to talk to", "want to zoom",
    "\u02b7\u1d43\u02e2", "Watch WWE Smackdown", "watch-", "watchparty.me", "wealthtertentkin1981", "WEB!CAM", "\u02b7\u1d49\u1d47\u1d9c\u1d43\u1d50",
    "WEBCAM", "webmath.com", "webpages\\.uidaho\\.edu", "weiner", "wh o l ike", "wh ore", "what's your favorite",
    "whatsapp", "who do you simp for", "who has discord", "who wanna talk", "who wants to be friends", "who wants to talk", "whooped",
    "whore", "wiki\\.answers\\.com", "wimbledonpc", "\u02b7\u2071\u1d57\u02b0", "\u02b7\u1d52\u207f\u1d57", "\u02b7\u1d52\u02b3\u02b3\u02b8", "wt_f",
    "wtf", "wwhore", "www.caffeine.tv", "www.caffeine.tv/", "www.caffeine.tv/Cheerqueensloveroadcast", "www.nowdate.fun", "www.sexdates.fun",
    "www.sexnow.fun", "www\\.titanpad\\.com", "xbox", "Xhamster.com", "xtiny", "xtiny.cf", "xxvideo",
    "xxvideo.com", "\u24e8\u24de\u24e4", "\uff59\uff4f\uff55", "\u02b8\u1d52\u1d58", "You can down[tex]^{}[/tex]load", "you can download answer here", "You can download[tex]^{}[/tex] the answer",
    "you tard", "\u02b8\u1d52\u1d58\u02b3", "your balls", "your butt", "your dick", "your fave", "your penis",
    "your pushy", "your puss", "your snatch", "your vagina", "yourlink.gg", "yourlink.gq/gyko", "youtube",
    "youtube.com", "youtubr", "yt channel", "yuh", "Y\u043eu c\u0430n d\u043ewnl\u043e\u0430d th\u0435 \u0430nsw\u0435r", "Y\u043eu c\u0430n d\u043ewnl\u043e\u0430d th\u0435 \u0430nsw\u0435r h\u0435r\u0435", "z oo omm\u200b",
    "z oom", "z.oo.m", "z.oom", "z00m", "zo om", "zo-om", "zo.om",
    "zo*om", "zoo M id", "zoo.m", "z\u00f4om", "zoom app", "zoom call", "zoom code",
    "zoom join", "zoom me", "zoom meeting", "Zoom?", "zoom.us", "zoomm with", "zooom",
    "\u0410nsw\u0435r is in \u0430 ph\u043et\u043e. I c\u0430n \u043enly upl\u043e\u0430d it to a file h\u043esting s\u0435rvice", "\u0493", "\u0493\u1d1c\u1d04\u1d0b\u026a\u0274\u0262", "Explanation is in a file", "explanation is in a file", "\u0ca5_\u0ca5", "\u529e\u7f8e",
    "\u5927", "\u0415xpl\u0430n\u0430ti\u043en is in a fil\u0435", "bit\u2024ly", "\u0415xpl\u0430n\u0430ti\u043en is in \u0430 fil\u0435", "cutt.ly"
];

const symbolData = [
    { char: 'À', base: 'a' }, { char: 'Á', base: 'a' }, { char: 'à', base: 'a' }, { char: 'á', base: 'a' }, { char: 'â', base: 'a' },
    { char: 'Ḃ', base: 'b' }, { char: 'Ḅ', base: 'b' }, { char: 'ḃ', base: 'b' }, { char: 'ḅ', base: 'b' }, { char: 'ḇ', base: 'b' },
    { char: 'Ç', base: 'c' }, { char: 'Ć', base: 'c' }, { char: 'ç', base: 'c' }, { char: 'ć', base: 'c' }, { char: 'č', base: 'c' },
    { char: 'Ď', base: 'd' }, { char: 'Ḋ', base: 'd' }, { char: 'ď', base: 'd' }, { char: 'ḋ', base: 'd' }, { char: 'đ', base: 'd' },
    { char: 'È', base: 'e' }, { char: 'Ê', base: 'e' }, { char: 'è', base: 'e' }, { char: 'ê', base: 'e' }, { char: 'ë', base: 'e' },
    { char: 'Ḟ', base: 'f' }, { char: 'Ƒ', base: 'f' }, { char: 'ḟ', base: 'f' }, { char: 'ƒ', base: 'f' }, { char: 'ﬀ', base: 'f' },
    { char: 'Ĝ', base: 'g' }, { char: 'Ğ', base: 'g' }, { char: 'ĝ', base: 'g' }, { char: 'ğ', base: 'g' }, { char: 'ġ', base: 'g' },
    { char: 'Ĥ', base: 'h' }, { char: 'Ħ', base: 'h' }, { char: 'ĥ', base: 'h' }, { char: 'ħ', base: 'h' }, { char: 'ȟ', base: 'h' },
    { char: 'Ì', base: 'i' }, { char: 'Í', base: 'i' }, { char: 'ì', base: 'i' }, { char: 'í', base: 'i' }, { char: 'î', base: 'i' },
    { char: 'Ĵ', base: 'j' }, { char: 'ǰ', base: 'j' }, { char: 'ĵ', base: 'j' }, { char: 'ʝ', base: 'j' }, { char: 'ǰ', base: 'j' },
    { char: 'Ķ', base: 'k' }, { char: 'Ǩ', base: 'k' }, { char: 'ķ', base: 'k' }, { char: 'ǩ', base: 'k' }, { char: 'ƙ', base: 'k' },
    { char: 'Ĺ', base: 'l' }, { char: 'Ľ', base: 'l' }, { char: 'ĺ', base: 'l' }, { char: 'ľ', base: 'l' }, { char: 'ł', base: 'l' },
    { char: 'Ṁ', base: 'm' }, { char: 'Ṃ', base: 'm' }, { char: 'ṁ', base: 'm' }, { char: 'ṃ', base: 'm' }, { char: 'ɱ', base: 'm' },
    { char: 'Ñ', base: 'n' }, { char: 'Ń', base: 'n' }, { char: 'ñ', base: 'n' }, { char: 'ń', base: 'n' }, { char: 'ň', base: 'n' },
    { char: 'Ò', base: 'o' }, { char: 'Ó', base: 'o' }, { char: 'ò', base: 'o' }, { char: 'ó', base: 'o' }, { char: 'ô', base: 'o' },
    { char: 'Ṕ', base: 'p' }, { char: 'Ṗ', base: 'p' }, { char: 'ṕ', base: 'p' }, { char: 'ṗ', base: 'p' }, { char: 'ƥ', base: 'p' },
    { char: 'Ɋ', base: 'q' }, { char: 'ʠ', base: 'q' }, { char: 'ƣ', base: 'q' }, { char: 'ʠ', base: 'q' }, { char: 'ɋ', base: 'q' },
    { char: 'Ŕ', base: 'r' }, { char: 'Ř', base: 'r' }, { char: 'ŕ', base: 'r' }, { char: 'ř', base: 'r' }, { char: 'ŗ', base: 'r' },
    { char: 'Ś', base: 's' }, { char: 'Š', base: 's' }, { char: 'ś', base: 's' }, { char: 'š', base: 's' }, { char: 'ş', base: 's' },
    { char: 'Ť', base: 't' }, { char: 'Ţ', base: 't' }, { char: 'ť', base: 't' }, { char: 'ţ', base: 't' }, { char: 'ț', base: 't' },
    { char: 'Ù', base: 'u' }, { char: 'Ú', base: 'u' }, { char: 'ù', base: 'u' }, { char: 'ú', base: 'u' }, { char: 'û', base: 'u' },
    { char: 'Ṽ', base: 'v' }, { char: 'Ṿ', base: 'v' }, { char: 'ṽ', base: 'v' }, { char: 'ṿ', base: 'v' }, { char: 'ʋ', base: 'v' },
    { char: 'Ŵ', base: 'w' }, { char: 'Ẁ', base: 'w' }, { char: 'ŵ', base: 'w' }, { char: 'ẁ', base: 'w' }, { char: 'ẅ', base: 'w' },
    { char: 'Ẍ', base: 'x' }, { char: 'Ẋ', base: 'x' }, { char: 'ẍ', base: 'x' }, { char: 'ẋ', base: 'x' }, { char: 'х', base: 'x' },
    { char: 'Ý', base: 'y' }, { char: 'Ÿ', base: 'y' }, { char: 'ý', base: 'y' }, { char: 'ÿ', base: 'y' }, { char: 'ŷ', base: 'y' },
    { char: 'Ź', base: 'z' }, { char: 'Ž', base: 'z' }, { char: 'ź', base: 'z' }, { char: 'ž', base: 'z' }, { char: 'ż', base: 'z' }
];

let isAnalyzing = false;

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function checkBanWords() {
    const inputText = document.getElementById('inputText').value;
    const checkBtn = document.getElementById('checkBtn');
    
    if (!inputText.trim()) {
        showToast('Please enter some text to analyze');
        return;
    }

    // Show loading state
    isAnalyzing = true;
    checkBtn.disabled = true;
    checkBtn.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        <span>Analyzing...</span>
    `;

    setTimeout(() => {
        const textLower = inputText.toLowerCase();
        const foundWords = [];
        let highlightedText = inputText;

        bannedWords.forEach(word => {
            const wordLower = word.toLowerCase();
            if (textLower.includes(wordLower)) {
                foundWords.push(word);
                const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(?!<[^>]*?)(${escapedWord})(?![^<]*?>)`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
            }
        });

        // Display results
        const resultsContainer = document.getElementById('resultsContainer');
        const previewSection = document.getElementById('previewSection');
        const highlightedTextDiv = document.getElementById('highlightedText');

        if (foundWords.length > 0) {
            resultsContainer.innerHTML = `
                <div class="results-box danger">
                    <svg class="results-icon" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/><path d="M12 17h.01"/>
                    </svg>
                    <div class="results-content">
                        <h3>Found ${foundWords.length} banned word${foundWords.length > 1 ? 's' : ''}</h3>
                        <p>Please remove or replace the highlighted words</p>
                        <div class="detected-words">
                            ${foundWords.map(word => `<span class="word-badge">${word}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <div class="results-box success">
                    <svg class="results-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div class="results-content">
                        <h3>No banned words detected</h3>
                        <p>Your content is safe to post</p>
                    </div>
                </div>
            `;
        }

        previewSection.style.display = 'block';
        highlightedTextDiv.innerHTML = highlightedText;

        // Reset button state
        isAnalyzing = false;
        checkBtn.disabled = false;
        checkBtn.innerHTML = `
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>
            <span>Analyze Content</span>
        `;
    }, 500);
}

function resetFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultsContainer').innerHTML = '';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('highlightedText').innerHTML = '';
}

function toggleSymbols() {
    const panel = document.getElementById('symbolPanel');
    const fab = document.getElementById('fabIcon');
    
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        fab.innerHTML = `
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
        `;
    } else {
        panel.classList.add('show');
        fab.innerHTML = `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`;
        renderSymbols();
    }
}

document.addEventListener('click', function(event) {
    const symbolPanel = document.getElementById('symbolPanel');
    const fab = document.getElementById('fab');
    
    if (symbolPanel.classList.contains('show')) {
        if (!symbolPanel.contains(event.target) && !fab.contains(event.target)) {
            toggleSymbols(); 
        }
    }
});

function renderSymbols(filter = '') {
    const symbolList = document.getElementById('symbolList');
    const filtered = filter 
        ? symbolData.filter(s => s.base.toLowerCase().includes(filter.toLowerCase()))
        : symbolData;

    if (filtered.length === 0) {
        symbolList.innerHTML = `<div class="empty-state">No symbols found for "${filter}"</div>`;
        return;
    }

    symbolList.innerHTML = filtered.map(symbol => `
        <div class="symbol-item" 
             onclick="copySymbol('${symbol.char}')" 
             ondblclick="insertSymbol('${symbol.char}')"
             title="Click to copy, double-click to insert (base: ${symbol.base})">
            ${symbol.char}
        </div>
    `).join('');
}

function searchSymbols() {
    const search = document.getElementById('symbolSearch').value;
    renderSymbols(search);
}

function copySymbol(symbol) {
    navigator.clipboard.writeText(symbol);
    showToast(`Copied "${symbol}" to clipboard!`);
}

function insertSymbol(symbol) {
    const textarea = document.getElementById('inputText');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, start) + symbol + text.substring(end);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + symbol.length;
    showToast(`Inserted "${symbol}"`);
}

// Initialize symbols on load
document.addEventListener('DOMContentLoaded', () => {
    renderSymbols();
});