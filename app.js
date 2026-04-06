/* =========================================================
   Italy by Amy — app.js v3
   ========================================================= */

/* -- Trip data ------------------------------------------- */
const trips = [
  {
    id: 0,
    image: 'pictures/como lago bellagio.jpg',
    image2: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    image3: 'pictures/como brunate.jpg',
    badge: 'Popular',
    en: {
      name: 'Bellagio & the Villages',
      duration: 'Full Day — 8 hrs',
      type: 'Lake Tour',
      location: 'Bellagio, Varenna',
      summary: 'The crown of Lake Como — stroll narrow lanes, admire the lake from Villa Melzi gardens, and take in panoramic views over lunch.',
      description: 'Start your day with a scenic drive along the western shore of Lake Como, arriving at Bellagio — the jewel of the lake. Explore the colourful alleys, visit the lakeside promenade and enjoy time at the famous Villa Melzi botanical gardens. In the afternoon, cross by ferry to Varenna for a peaceful stroll along the Passeggiata degli Innamorati. Return to Como in style as the sun sets over the mountains.',
      highlights: ['Villa Melzi Gardens', 'Ferry Crossing', 'Bellagio Old Town', 'Lakeside Lunch', 'Varenna Promenade', 'Scenic Drive'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Ferry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เบลลาจิโอ & หมู่บ้านริมทะเลสาบ',
      duration: 'เต็มวัน — 8 ชั่วโมง',
      type: 'ทัวร์ทะเลสาบ',
      location: 'เบลลาจิโอ, วาเรนนา',
      summary: 'มงกุฎแห่งทะเลสาบโคโม่ — เดินเล่นตรอกแคบๆ ชื่นชมทะเลสาบจากสวน Villa Melzi และชมวิวพาโนรามาขณะรับประทานอาหารกลางวัน',
      description: 'เริ่มต้นวันด้วยการขับรถชมวิวตลอดแนวชายฝั่งตะวันตกของทะเลสาบโคโม่ มาถึงเบลลาจิโอ — อัญมณีแห่งทะเลสาบ สำรวจตรอกซอกซอย เดินเล่น promenade ริมทะเลสาบ และใช้เวลาที่สวน Villa Melzi อันโด่งดัง ยามบ่ายข้ามเรือเฟอรี่ไปยังวาเรนนา เดินเล่นตลอด Passeggiata degli Innamorati กลับโคโม่อย่างมีสไตล์ขณะพระอาทิตย์ตกดิน',
      highlights: ['สวน Villa Melzi', 'ข้ามเรือเฟอรี่', 'ย่านเก่าเบลลาจิโอ', 'อาหารกลางวันริมทะเลสาบ', 'เส้นทางวาเรนนา', 'วิวสวยงาม'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเรือเฟอรี่', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 1,
    image: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    image2: 'pictures/Como Lago menaggio.jpg',
    image3: 'pictures/orrido bellano.jpg',
    badge: 'Top Rated',
    en: {
      name: 'Varenna & Menaggio',
      duration: 'Half Day — 5 hrs',
      type: 'Lake Village Tour',
      location: 'Varenna, Menaggio',
      summary: 'Two of the most photogenic villages on the lake — one medieval, one lively — connected by a scenic ferry crossing.',
      description: "Varenna is arguably the most beautiful village on Lake Como. Its medieval stone alleys, the dramatic Villa Monastero terraced gardens, and the romantic 'lovers' walkway' make it unforgettable. We then cross by ferry to the vibrant town of Menaggio for lunch, gelato, and lakeside views. A perfect half-day escape from the bustle of the city.",
      highlights: ['Villa Monastero', 'Varenna Alleyways', 'Ferry Crossing', 'Menaggio Square', 'Gelato Stop', 'Medieval Castle'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Ferry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'วาเรนนา & เมนาจิโอ',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'ทัวร์หมู่บ้านริมทะเลสาบ',
      location: 'วาเรนนา, เมนาจิโอ',
      summary: 'สองหมู่บ้านที่สวยงามที่สุดบนทะเลสาบ — หนึ่งในยุคกลาง หนึ่งที่มีชีวิตชีวา — เชื่อมกันด้วยการข้ามเรือเฟอรี่',
      description: 'วาเรนนาเป็นหมู่บ้านที่สวยงามที่สุดของทะเลสาบโคโม่อย่างไม่ต้องสงสัย ตรอกหินยุคกลาง สวนขั้นบันไดของ Villa Monastero และทางเดินโรแมนติกของคู่รัก จากนั้นข้ามเรือเฟอรี่สู่เมือง Menaggio ที่มีชีวิตชีวาเพื่อรับประทานอาหาร ไอศกรีม และวิวริมทะเลสาบ',
      highlights: ['Villa Monastero', 'ตรอกซอกซอยวาเรนนา', 'ข้ามเรือเฟอรี่', 'จัตุรัสเมนาจิโอ', 'ไอศกรีม', 'ปราสาทยุคกลาง'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเรือเฟอรี่', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 2,
    image: 'pictures/como duomo.jpg',
    image2: 'pictures/duomo como 2.jpg',
    image3: 'pictures/como brunate.jpg',
    badge: 'Guided',
    en: {
      name: 'Como City & Silk Heritage',
      duration: 'Half Day — 4 hrs',
      type: 'City Walking Tour',
      location: 'Como City Centre',
      summary: 'Discover the medieval heart of Como — the Silk Museum, the Cathedral, the old city walls, and the lakeside promenade.',
      description: "Como is more than just the gateway to the lake. This half-day walking tour takes you through the Roman city grid, past the magnificent Gothic-Renaissance Cathedral, through the silk quarter where Como's famous fabric industry began, and along the elegant lakeside boardwalk. A wonderful introduction to the culture and history of this ancient city.",
      highlights: ['Como Cathedral', 'Silk Museum', 'City Walls Walk', 'Lakeside Boardwalk', 'Roman Grid Streets', 'Piazza Cavour'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Museum entry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เมืองโคโม่ & มรดกผ้าไหม',
      duration: 'ครึ่งวัน — 4 ชั่วโมง',
      type: 'ทัวร์เดินเมือง',
      location: 'ใจกลางเมืองโคโม่',
      summary: 'ค้นพบหัวใจยุคกลางของโคโม่ — พิพิธภัณฑ์ผ้าไหม มหาวิหาร กำแพงเมืองเก่า และ promenade ริมทะเลสาบ',
      description: 'โคโม่ไม่ใช่แค่ประตูสู่ทะเลสาบ ทัวร์เดินครึ่งวันนี้พาคุณผ่านกริดเมืองโรมัน ผ่านมหาวิหารโกธิก-เรอเนสซองส์อันงดงาม ผ่านย่านผ้าไหมที่อุตสาหกรรมผ้าไหมโด่งดังของโคโม่เริ่มต้นขึ้น และตามแนวทางเดินริมทะเลสาบอันสง่างาม',
      highlights: ['มหาวิหารโคโม่', 'พิพิธภัณฑ์ผ้าไหม', 'เดินกำแพงเมือง', 'ทางเดินริมทะเลสาบ', 'ถนนกริดโรมัน', 'Piazza Cavour'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเข้าพิพิธภัณฑ์', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 3,
    image: 'pictures/como brunate.jpg',
    image2: 'pictures/como lago bellagio.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Day Trip',
    en: {
      name: 'Lugano & Switzerland Day',
      duration: 'Full Day — 9 hrs',
      type: 'Cross-border Excursion',
      location: 'Lugano, Switzerland',
      summary: 'Cross the Swiss border for a refined day in elegant Lugano — the city of parks, galleries, and stunning lake views from Monte San Salvatore.',
      description: 'Only 45 minutes from Como, Lugano offers a Swiss twist on Mediterranean elegance. Start with a walk through the old town, visit the lakeside park, then take the funicular up Monte San Salvatore for sweeping panoramas. Enjoy lunch in a rooftop restaurant, browse the boutiques of Via Nassa, and return to Italy as the sunset paints the Alps golden. Please bring your passport.',
      highlights: ['Monte San Salvatore', 'Lugano Old Town', 'Lakeside Parks', 'Swiss Border Crossing', 'Via Nassa Shopping', 'Funicular Ride'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Border crossing assistance', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'ลูกาโน & วันสวิตเซอร์แลนด์',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์ข้ามพรมแดน',
      location: 'ลูกาโน, สวิตเซอร์แลนด์',
      summary: 'ข้ามพรมแดนสวิสเพื่อวันอันสวยงามในลูกาโนที่หรูหรา — เมืองแห่งสวนสาธารณะ แกลเลอรี่ และวิวทะเลสาบจาก Monte San Salvatore',
      description: 'แค่ 45 นาทีจากโคโม่ ลูกาโนมีเสน่ห์สวิสผสมความหรูหราเมดิเตอร์เรเนียน เดินเล่นย่านเก่า เยี่ยมชมสวนริมทะเลสาบ จากนั้นนั่งกระเช้าขึ้น Monte San Salvatore เพื่อวิวพาโนรามา เพลิดเพลินอาหารกลางวันบนดาดฟ้า ช้อปปิ้งบน Via Nassa และกลับอิตาลีขณะพระอาทิตย์ตกย้อมเทือกเขาแอลป์ กรุณาพกพาสปอร์ต',
      highlights: ['Monte San Salvatore', 'ย่านเก่าลูกาโน', 'สวนริมทะเลสาบ', 'ข้ามพรมแดนสวิส', 'ช้อปปิ้ง Via Nassa', 'นั่งกระเช้า'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ช่วยเหลือการข้ามพรมแดน', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 4,
    image: 'pictures/milan.jpg',
    image2: 'pictures/como brunate.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Day Trip',
    en: {
      name: 'Milan Fashion & Culture Day',
      duration: 'Full Day — 10 hrs',
      type: 'City Excursion',
      location: 'Milan, Italy',
      summary: "Italy's fashion capital in one day — the Duomo, Galleria Vittorio Emanuele II, Navigli canals, and all the couture your heart desires.",
      description: 'An hour from Como, Milan is a world apart. Your day begins at the spectacular Gothic Duomo before stepping into the glittering Galleria. Browse the Quadrilatero della Moda luxury district, take a canal-side aperitivo in the Navigli neighbourhood, and experience the electric energy of Italy\'s most cosmopolitan city. Perfect for shoppers, art lovers, and fashion enthusiasts alike.',
      highlights: ['Milan Duomo', 'Galleria V.E. II', 'Fashion District', 'Navigli Canals', 'Aperitivo Hour', 'Castello Sforzesco'],
      includes: ['Hotel pick-up & return', 'Private VW Multivan', 'English & Thai guide', 'Duomo area walk', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'มิลาน แฟชั่น & วัฒนธรรม',
      duration: 'เต็มวัน — 10 ชั่วโมง',
      type: 'ทัวร์เมือง',
      location: 'มิลาน, อิตาลี',
      summary: 'เมืองหลวงแฟชั่นอิตาลีใน 1 วัน — Duomo, Galleria Vittorio Emanuele II, คลอง Navigli และแฟชั่นสุดหรู',
      description: 'แค่ 1 ชั่วโมงจากโคโม่ มิลานโดดเด่นในแบบของตัวเอง วันเริ่มต้นที่ Duomo โกธิกอันน่าทึ่ง ก่อนก้าวเข้าสู่ Galleria แวววาว เดินชม Quadrilatero della Moda ย่านแฟชั่นลักชัวรี่ ดื่ม aperitivo ริมคลองใน Navigli และสัมผัสพลังงานของเมืองคอสโมโพลิแทนที่สุดของอิตาลี',
      highlights: ['Duomo มิลาน', 'Galleria V.E. II', 'ย่านแฟชั่น', 'คลอง Navigli', 'ชั่วโมง Aperitivo', 'Castello Sforzesco'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'เดินชมย่าน Duomo', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 5,
    image: 'pictures/orrido bellano.jpg',
    image2: 'pictures/como lago bellagio.jpg',
    image3: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    badge: 'Half Day',
    en: {
      name: 'Villa del Balbianello Tour',
      duration: 'Half Day — 5 hrs',
      type: 'Villa & Gardens',
      location: 'Lenno, Lake Como',
      summary: "One of Italy's most celebrated villas — terraced gardens, lakeside loggias, and film-set perfection (James Bond, Star Wars).",
      description: "Villa del Balbianello is consistently ranked among the world's most beautiful villa gardens. Perched on a wooded promontory above the lake, the villa's elegant loggias and manicured terraces have been immortalised in Casino Royale and Star Wars: Episode II. We arrive by boat for the most dramatic approach, then tour the gardens and historic rooms before a lakeside lunch in Lenno.",
      highlights: ['Villa Balbianello Gardens', 'Lakeside Loggias', 'Bond Film Locations', 'Boat Arrival', 'Lenno Village', 'Terrace Panoramas'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Boat transfer', 'Villa entry ticket', 'Bottled water'],
    },
    th: {
      name: 'ทัวร์ Villa del Balbianello',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'วิลล่าและสวน',
      location: 'เลนโน, ทะเลสาบโคโม่',
      summary: 'วิลล่าที่มีชื่อเสียงที่สุดในอิตาลี — สวนขั้นบันได loggia ริมทะเลสาบ สวยราวฉากภาพยนตร์ (James Bond, Star Wars)',
      description: 'Villa del Balbianello ได้รับการยกย่องว่าเป็นสวนวิลล่าที่สวยที่สุดในโลก ตั้งอยู่บนแหลมที่มีต้นไม้ปกคลุม loggia อันสง่างามและระเบียงขั้นบันไดที่ถ่ายทำใน Casino Royale และ Star Wars ภาค 2 เราเดินทางมาด้วยเรือ จากนั้นชมสวนและห้องประวัติศาสตร์ก่อนรับประทานอาหารริมทะเลสาบที่ Lenno',
      highlights: ['สวน Balbianello', 'Loggia ริมทะเลสาบ', 'สถานที่ถ่ายทำบอนด์', 'มาถึงด้วยเรือ', 'หมู่บ้านเลนโน', 'ระเบียงพาโนรามา'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ค่าโดยสารเรือ', 'ตั๋วเข้าวิลล่า', 'น้ำดื่ม'],
    }
  },
  {
    id: 6,
    image: 'pictures/bergamo citta alta 2.jpeg',
    image2: 'pictures/como brunate.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Day Trip',
    en: {
      name: 'Bergamo Alta: Walled City',
      duration: 'Full Day — 8 hrs',
      type: 'UNESCO Heritage City',
      location: 'Bergamo Alta',
      summary: 'A perfectly preserved medieval city perched on a hilltop, encircled by Venetian walls and ignored by most tourists.',
      description: "Bergamo Alta is one of northern Italy's best-kept secrets — a UNESCO World Heritage hilltop city encircled by 16th-century Venetian walls. Take the historic funicular to the upper town, stroll the Piazza Vecchia, admire the octagonal Cappella Colleoni, and enjoy lunch at a traditional osteria. The views over the Lombard plain from the city walls are simply unforgettable.",
      highlights: ['Venetian City Walls', 'Piazza Vecchia', 'Cappella Colleoni', 'Historic Funicular', 'Lombard Plain Views', 'Trattoria Lunch'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Funicular tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'แบร์กาโม อัลตา: เมืองมีกำแพง',
      duration: 'เต็มวัน — 8 ชั่วโมง',
      type: 'เมืองมรดก UNESCO',
      location: 'แบร์กาโม อัลตา',
      summary: 'เมืองยุคกลางที่ได้รับการอนุรักษ์อย่างสมบูรณ์บนยอดเขา ล้อมรอบด้วยกำแพงเวนิสและถูกนักท่องเที่ยวส่วนใหญ่มองข้าม',
      description: 'แบร์กาโม อัลตา เป็นหนึ่งในความลับที่ยิ่งใหญ่ที่สุดของอิตาลีตอนเหนือ — เมืองบนเขา UNESCO ล้อมรอบด้วยกำแพงเวนิสศตวรรษที่ 16 นั่งกระเช้าสู่เมืองด้านบน เดินเล่น Piazza Vecchia ชม Cappella Colleoni รูปแปดเหลี่ยม และรับประทานอาหารที่ osteria ดั้งเดิม',
      highlights: ['กำแพงเมืองเวนิส', 'Piazza Vecchia', 'Cappella Colleoni', 'กระเช้าประวัติศาสตร์', 'วิวที่ราบลอมบาร์ด', 'อาหาร Trattoria'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วกระเช้า', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 7,
    image: 'pictures/como lago bellagio.jpg',
    image2: 'pictures/Como Lago menaggio.jpg',
    image3: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    badge: 'Scenic',
    en: {
      name: 'Stresa & Lake Maggiore',
      duration: 'Full Day — 9 hrs',
      type: 'Lake & Islands',
      location: 'Stresa & Borromean Islands',
      summary: 'Trade Como for Maggiore for a day — elegant Stresa, the legendary Borromean Islands, and baroque palace gardens in the middle of the lake.',
      description: "Lake Maggiore is Como's equally beautiful neighbour. Drive through the mountains to reach the elegant resort town of Stresa, then take a boat to the famous Borromean Islands — Isola Bella with its baroque palace and terraced gardens, and the charming fishing village of Isola dei Pescatori. An unforgettable full-day excursion that most Como visitors never discover.",
      highlights: ['Isola Bella Palace', 'Borromean Islands', 'Stresa Promenade', 'Baroque Gardens', 'Island Ferry', 'Mountain Drive'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Island ferry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'สเตรซา & ทะเลสาบมาจิโอเร',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทะเลสาบ & เกาะ',
      location: 'สเตรซา & เกาะบอร์โรเมโอ',
      summary: 'แลกทะเลสาบโคโม่กับมาจิโอเรสักหนึ่งวัน — สเตรซาที่หรูหรา เกาะบอร์โรเมโออันโด่งดัง และสวนพระราชวังบาโรกกลางทะเลสาบ',
      description: 'ทะเลสาบมาจิโอเรเป็นเพื่อนบ้านที่สวยงามเท่าเทียมกับโคโม่ ขับรถผ่านภูเขาไปยังเมืองรีสอร์ทหรูหรา Stresa จากนั้นนั่งเรือไปยังเกาะบอร์โรเมโออันโด่งดัง — Isola Bella พร้อมพระราชวังบาโรกและสวนขั้นบันได และหมู่บ้านชาวประมงน่ารัก Isola dei Pescatori',
      highlights: ['พระราชวัง Isola Bella', 'เกาะบอร์โรเมโอ', 'เส้นทาง Stresa', 'สวนบาโรก', 'เรือเฟอรี่เกาะ', 'วิวภูเขา'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเรือเกาะ', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 8,
    image: 'pictures/duomo como 2.jpg',
    image2: 'pictures/como brunate.jpg',
    image3: 'pictures/como lago bellagio.jpg',
    badge: 'Sunset',
    en: {
      name: 'Sunset & Aperitivo Drive',
      duration: '3 hrs — Evening',
      type: 'Scenic Evening Tour',
      location: 'Como Lakeshore',
      summary: 'The most beautiful hour on Lake Como is golden hour — a lakeside drive with stops at the best viewpoints and a sunset aperitivo in Torno.',
      description: "There is no better way to end a day in Como than watching the sun dip behind the mountains from the terrace of a lakeside café. This exclusive evening experience takes you along the scenic east shore to the hilltop village of Brunate, then wind down with an aperitivo in the ancient village of Torno as the lake turns gold. The perfect romantic evening experience.",
      highlights: ['East Shore Drive', 'Brunate Village', 'Golden Hour Views', 'Torno Village', 'Sunset Aperitivo', 'Lake Reflections'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Aperitivo welcome drink', 'Bottled water', 'Flexible timing'],
    },
    th: {
      name: 'ไดรฟ์ชมพระอาทิตย์ตก & อาเปริติโว',
      duration: '3 ชั่วโมง — ยามเย็น',
      type: 'ทัวร์ยามเย็นสวยงาม',
      location: 'ชายฝั่งทะเลสาบโคโม่',
      summary: 'ช่วงเวลาที่สวยที่สุดของทะเลสาบโคโม่คือ golden hour — ขับรถริมทะเลสาบหยุดที่จุดชมวิวที่ดีที่สุด และ aperitivo ยามพระอาทิตย์ตกที่ Torno',
      description: 'ไม่มีวิธีสิ้นสุดวันในโคโม่ที่ดีกว่าการดูพระอาทิตย์ตกดินหลังภูเขาจากระเบียงคาเฟ่ริมทะเลสาบ ประสบการณ์ยามเย็นสุดพิเศษนี้พาคุณตลอดชายฝั่งตะวันออกสู่หมู่บ้านบนเขา Brunate แล้วผ่อนคลายกับ aperitivo ในหมู่บ้านโบราณ Torno ขณะทะเลสาบเปลี่ยนเป็นสีทอง',
      highlights: ['ขับรถฝั่งตะวันออก', 'หมู่บ้าน Brunate', 'วิว Golden Hour', 'หมู่บ้าน Torno', 'Aperitivo ยามพระอาทิตย์ตก', 'แสงสะท้อนทะเลสาบ'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'เครื่องดื่ม aperitivo ต้อนรับ', 'น้ำดื่ม', 'เวลายืดหยุ่น'],
    }
  },
  {
    id: 9,
    image: 'pictures/Como Lago menaggio.jpg',
    image2: 'pictures/como lago bellagio.jpg',
    image3: 'pictures/orrido bellano.jpg',
    badge: 'Day Trip',
    en: {
      name: 'Tremezzo & Villa Carlotta',
      duration: 'Half Day — 5 hrs',
      type: 'Villa & Botanical Garden',
      location: 'Tremezzo, Lake Como',
      summary: "Villa Carlotta houses the finest botanical garden on Lake Como — 70,000 plants, flaming azaleas in spring, and marble sculptures by Canova.",
      description: "Villa Carlotta is a national treasure. Its terraced botanical garden bursts with colour year-round — azaleas and rhododendrons in spring, water lilies and ferns in summer, golden foliage in autumn. Inside, you'll find original marble sculptures by Canova and Thorvaldsen. Combined with a lakeside lunch in charming Tremezzo, this is a perfect half-day for garden and art lovers.",
      highlights: ['Villa Carlotta Gardens', 'Canova Sculptures', 'Azalea Walk', 'Terraced Terraces', 'Tremezzo Village', 'Lakeside Lunch'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Villa Carlotta entry', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เทรเมซโซ & Villa Carlotta',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'วิลล่าและสวนพฤกษศาสตร์',
      location: 'เทรเมซโซ, ทะเลสาบโคโม่',
      summary: 'Villa Carlotta มีสวนพฤกษศาสตร์ที่สวยที่สุดบนทะเลสาบโคโม่ — 70,000 ต้น อซาเลียสีสวยในฤดูใบไม้ผลิ และประติมากรรมหินอ่อนโดย Canova',
      description: 'Villa Carlotta เป็นสมบัติของชาติ สวนพฤกษศาสตร์ขั้นบันไดงดงามตลอดปี — อซาเลียและโรโดเดนดรอนในฤดูใบไม้ผลิ บัวและเฟิร์นในฤดูร้อน ใบไม้ทองในฤดูใบไม้ร่วง ภายในมีประติมากรรมหินอ่อนต้นฉบับโดย Canova และ Thorvaldsen รวมกับอาหารกลางวันริมทะเลสาบในเทรเมซโซที่น่ารัก',
      highlights: ['สวน Villa Carlotta', 'ประติมากรรม Canova', 'เส้นทางอซาเลีย', 'ระเบียงขั้นบันได', 'หมู่บ้านเทรเมซโซ', 'อาหารกลางวันริมทะเลสาบ'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเข้า Villa Carlotta', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 10,
    image: 'pictures/arena verona.jpg',
    image2: 'pictures/verona.jpg',
    image3: 'pictures/verona 2.webp',
    badge: 'Day Trip',
    en: {
      name: 'Verona: Romeo & Juliet',
      duration: 'Full Day — 10 hrs',
      type: 'UNESCO City Tour',
      location: 'Verona, Veneto',
      summary: "The city of love — Juliet's balcony, the Roman Arena, medieval streets, and the finest Soave wine this side of the Veneto.",
      description: "Verona ranks among Italy's most romantic cities, and a full day here barely scratches the surface. Visit Juliet's famous balcony (and try not to get swept up in the romance), walk the perfectly preserved Roman Arena, stroll the medieval Piazza dei Signori, and end the day with wine and cicchetti in an enoteca by the Adige river. The drive through Lake Garda is a bonus.",
      highlights: ["Juliet's Balcony", 'Roman Arena', 'Piazza dei Signori', 'Adige Riverside', 'Garda Lakeshore Drive', 'Evening Enoteca'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Arena entry', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เวโรนา: โรมิโอ & จูเลียต',
      duration: 'เต็มวัน — 10 ชั่วโมง',
      type: 'ทัวร์เมือง UNESCO',
      location: 'เวโรนา, เวนิโต',
      summary: 'เมืองแห่งความรัก — ระเบียง Juliet, Arena โรมัน, ถนนยุคกลาง และไวน์ Soave ของแท้',
      description: 'เวโรนาถือเป็นหนึ่งในเมืองโรแมนติกที่สุดของอิตาลี เยี่ยมชมระเบียงอันโด่งดังของ Juliet เดินใน Arena โรมันที่ได้รับการอนุรักษ์อย่างสมบูรณ์ เดินเล่น Piazza dei Signori ยุคกลาง และสิ้นสุดวันด้วยไวน์และ cicchetti ที่ enoteca ริมแม่น้ำ Adige',
      highlights: ['ระเบียง Juliet', 'Arena โรมัน', 'Piazza dei Signori', 'ริมแม่น้ำ Adige', 'ขับรถชายฝั่ง Garda', 'Enoteca ยามเย็น'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ตั๋วเข้า Arena', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  },
  {
    id: 11,
    image: 'pictures/como brunate.jpg',
    image2: 'pictures/Como Lago menaggio.jpg',
    image3: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    badge: 'Day Trip',
    en: {
      name: 'Ascona & Locarno, Switzerland',
      duration: 'Full Day — 9 hrs',
      type: 'Swiss Town Tour',
      location: 'Ascona, Switzerland',
      summary: "Switzerland's sunniest town — a Ticino gem with palm-lined piazzas, cobblestone alleys, and a lake shimmer that rivals the Cote d'Azur.",
      description: "Ascona is the southernmost town in Switzerland and one of the most charming in all of Ticino. The palm-lined lakeside piazza feels more Mediterranean than Swiss, and the cobblestone alleys are filled with galleries and artisan shops. Nearby Locarno offers the Piazza Grande, Madonna del Sasso sanctuary above the lake, and a wonderfully relaxed Swiss Italian atmosphere. Bring your passport.",
      highlights: ['Ascona Piazza', 'Lakeside Palm Walk', 'Locarno Old Town', 'Madonna del Sasso', 'Swiss Border Crossing', 'Artisan Alleys'],
      includes: ['Hotel pick-up & drop-off', 'Private VW Multivan', 'English & Thai guide', 'Border crossing assistance', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'อัสโกนา & โลคาร์โน, สวิตเซอร์แลนด์',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์เมืองสวิส',
      location: 'อัสโกนา, สวิตเซอร์แลนด์',
      summary: 'เมืองที่มีแดดมากที่สุดในสวิตเซอร์แลนด์ — อัญมณีแห่ง Ticino พร้อมจัตุรัสปูด้วยต้นปาล์ม ตรอกหินกรวด และแสงสะท้อนทะเลสาบ',
      description: 'อัสโกนาเป็นเมืองใต้สุดในสวิตเซอร์แลนด์และน่ารักที่สุดแห่งหนึ่งของ Ticino จัตุรัสริมทะเลสาบที่มีต้นปาล์มรู้สึกเหมือนเมดิเตอร์เรเนียนมากกว่าสวิส ตรอกหินกรวดเต็มไปด้วยแกลเลอรี่และร้านช่างฝีมือ ใกล้ๆ กัน Locarno เสนอ Piazza Grande สถานที่ศักดิ์สิทธิ์ Madonna del Sasso เหนือทะเลสาบ กรุณาพกพาสปอร์ต',
      highlights: ['จัตุรัส Ascona', 'เดินริมทะเลสาบต้นปาล์ม', 'ย่านเก่า Locarno', 'Madonna del Sasso', 'ข้ามพรมแดนสวิส', 'ตรอกช่างฝีมือ'],
      includes: ['รับ-ส่งที่โรงแรม', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ & ไทย', 'ช่วยเหลือการข้ามพรมแดน', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    }
  }
];

/* -- Language -------------------------------------------- */
let currentLang = 'en';

const messengerConfig = {
  en: {
    href: 'https://wa.me/393474527190',
    iconClass: 'fa-brands fa-whatsapp',
    label: 'WhatsApp Us',
    sub: 'Typically replies within 1 hour'
  },
  th: {
    href: 'https://line.me/ti/p/XXXXXXXXXX',
    iconClass: 'fa-brands fa-line',
    label: 'Line หาเรา',
    sub: 'ตอบกลับภายใน 1 ชั่วโมง'
  }
};

function setLang(lang) {
  currentLang = lang;
  applyLanguage();
  if (typeof gtag !== 'undefined') gtag('event', 'language_toggle', { lang: currentLang });
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'th' : 'en');
}

function applyLanguage() {
  const isEn = currentLang === 'en';

  // All data-en / data-th elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = isEn ? el.dataset.en : (el.dataset.th || el.dataset.en);
  });

  // Flag button active states (navbar only — mobile-util removed)
  ['langBtnEN'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active-flag', isEn);
  });
  ['langBtnTH'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active-flag', !isEn);
  });

  const cfg = messengerConfig[currentLang];

  // Navbar messenger icon — update href, icon, tooltip, and colour class
  const topbarHref = document.getElementById('topbarMessenger');
  const topbarIcon = document.getElementById('topbarChatIcon');
  if (topbarHref) {
    topbarHref.href  = cfg.href;
    topbarHref.title = cfg.label;
    topbarHref.classList.toggle('nav-wa',   isEn);
    topbarHref.classList.toggle('nav-line', !isEn);
  }
  if (topbarIcon) topbarIcon.className = cfg.iconClass;

  // Contact section
  const cHref  = document.getElementById('contactMessenger');
  const cIcon  = document.getElementById('contactIcon');
  const cLabel = document.getElementById('contactLabel');
  const cSub   = document.getElementById('contactSub');
  if (cHref) {
    cHref.href = cfg.href;
    cHref.classList.toggle('whatsapp-card', isEn);
    cHref.classList.toggle('line-card', !isEn);
  }
  if (cIcon)  cIcon.className = cfg.iconClass;
  if (cLabel) cLabel.textContent = cfg.label;
  if (cSub)   cSub.textContent  = cfg.sub;

  // Footer chat button
  const fHref  = document.getElementById('footerMessenger');
  const fIcon  = document.getElementById('footerChatIcon');
  const fLabel = document.getElementById('footerChatLabel');
  if (fHref)  fHref.href = cfg.href;
  if (fIcon)  fIcon.className = cfg.iconClass;
  if (fLabel) fLabel.textContent = cfg.label;

  // Re-render cards so names are in the right language
  renderTrips();
}

/* -- Render helpers -------------------------------------- */
function t(trip) { return trip[currentLang]; }
function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

/* -- Mosaic — 3 featured trips --------------------------- */
function renderMosaic() {
  const el = document.getElementById('mosaicGrid');
  if (!el) return;
  const featured = [0, 1, 2];
  el.innerHTML = featured.map((idx, i) => {
    const trip = trips[idx];
    const info = t(trip);
    return `
      <div class="mosaic-card${i === 0 ? ' large' : ''}" onclick="openModal(${idx})">
        <img src="${trip.image}" alt="${info.name}" loading="lazy">
        <span class="mosaic-badge">${trip.badge}</span>
        <div class="mosaic-overlay">
          <div class="mosaic-body">
            <h3>${info.name}</h3>
            <p class="mosaic-meta"><i class="fa-solid fa-location-dot"></i> ${info.location} &nbsp;&middot;&nbsp; <i class="fa-regular fa-clock"></i> ${info.duration}</p>
            <button class="btn-enquire">Enquire Now</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* -- Deal cards — 4 popular trips ----------------------- */
function renderDeals() {
  const el = document.getElementById('dealsRow');
  if (!el) return;
  const picks = [0, 1, 6, 3];
  el.innerHTML = picks.map(idx => {
    const trip = trips[idx];
    const info = t(trip);
    return `
      <div class="deal-card" onclick="openModal(${idx})">
        <div class="deal-card-img">
          <img src="${trip.image}" alt="${info.name}" loading="lazy">
          <span class="deal-badge">${trip.badge}</span>
        </div>
        <div class="deal-body">
          <p class="deal-location"><i class="fa-solid fa-location-dot"></i> ${info.location}</p>
          <h3>${info.name}</h3>
          <div class="deal-stars">${stars(5)}</div>
          <p class="deal-meta"><i class="fa-regular fa-clock"></i> ${info.duration} &nbsp;&middot;&nbsp; ${info.type}</p>
          <div class="deal-footer">
            <span class="deal-price">Contact for quote</span>
            <button class="btn-enquire">Enquire</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* -- All trips grid --------------------------------------- */
function renderTrips() {
  const el = document.getElementById('tripsGrid');
  if (!el) return;
  el.innerHTML = trips.map((trip, idx) => {
    const info = t(trip);
    return `
      <div class="trip-card" onclick="openModal(${idx})">
        <div class="trip-card-img">
          <img src="${trip.image}" alt="${info.name}" loading="lazy">
          <span class="trip-badge${idx < 3 ? ' top' : ''}">${trip.badge}</span>
        </div>
        <div class="trip-card-body">
          <p class="trip-card-location"><i class="fa-solid fa-location-dot"></i> ${info.location}</p>
          <h3>${info.name}</h3>
          <div class="trip-card-stars">${stars(5)}</div>
          <div class="trip-meta">
            <span><i class="fa-regular fa-clock"></i> ${info.duration}</span>
            <span>${info.type}</span>
          </div>
          <div class="trip-card-footer">
            <span class="trip-price">Starting from €150 p.p.</span>
            <button class="btn-enquire">Enquire</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* -- Modal ------------------------------------------------ */
function openModal(idx) {
  const trip = trips[idx];
  const info = t(trip);
  const overlay = document.getElementById('modalOverlay');

  // Images
  document.getElementById('modalImages').innerHTML = `
    <img src="${trip.image}"  alt="${info.name}">
    <img src="${trip.image2}" alt="${info.name}">
    <img src="${trip.image3}" alt="${info.name}">
  `;

  // Badge + title + stars
  document.getElementById('modalBadgeRow').innerHTML = `<span>${trip.badge}</span>`;
  document.getElementById('modalTitle').textContent = info.name;
  document.getElementById('modalStars').innerHTML = `${stars(5)} <span style="color:#999;font-size:.8rem">(12 reviews)</span>`;

  // Meta
  document.getElementById('modalMeta').innerHTML = `
    <span><i class="fa-solid fa-location-dot"></i> ${info.location}</span>
    <span><i class="fa-regular fa-clock"></i> ${info.duration}</span>
    <span><i class="fa-solid fa-tag"></i> ${info.type}</span>
  `;

  // Highlights
  document.getElementById('modalHighlights').innerHTML =
    info.highlights.map(h => `<div class="highlight-item"><i class="fa-solid fa-check"></i> ${h}</div>`).join('');

  // Description
  document.getElementById('modalDesc').textContent = info.description;

  // Includes
  document.getElementById('modalIncludes').innerHTML =
    info.includes.map(i => `<li><i class="fa-solid fa-circle-check"></i> ${i}</li>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (typeof gtag !== 'undefined') gtag('event', 'view_trip', { trip_name: info.name });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* -- Search / enquiry ------------------------------------- */
function handleSearch() {
  const dest = document.getElementById('searchDest').value.trim().toLowerCase();
  const section = document.getElementById('all-trips') || document.getElementById('contact');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
  if (typeof gtag !== 'undefined') gtag('event', 'search', { search_term: dest });
}

/* -- Contact form ----------------------------------------- */
function submitForm(e) {
  e.preventDefault();
  const name    = document.getElementById('formName').value.trim();
  const email   = document.getElementById('formEmail').value.trim();
  const service = document.getElementById('formService').value;
  const guests  = document.getElementById('formGuests').value;
  const msg     = document.getElementById('formMessage').value.trim();
  const subject = encodeURIComponent(`Italy by Amy Enquiry — ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\nGuests: ${guests}\n\n${msg}`);
  window.location.href = `mailto:hello@italybyamy.com?subject=${subject}&body=${body}`;
  if (typeof gtag !== 'undefined') gtag('event', 'contact_form_submit');
}

/* -- Navbar mobile ---------------------------------------- */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* -- Init ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTrips();
  applyLanguage();
});