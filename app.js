/* =========================================================
   Italy by Amy — app.js v3
   ========================================================= */

/* -- Trip data ------------------------------------------- */
const trips = [
  {
    id: 0,
    image: 'pictures/como-lago-bellagio.jpg',
    image2: 'pictures/things-to-do-in-lake-como-in-october.jpg',
    image3: 'pictures/como brunate.jpg',
    badge: 'Popular',
    rating: 4.8,
    reviewCount: 24,
    en: {
      name: 'Bellagio & Varenna',
      duration: 'Full Day — 9 hrs',
      type: 'Lake Tour',
      location: 'Bellagio, Varenna',
      summary: 'The crown of Lake Como — stroll narrow lanes, admire the lake from Villa Melzi gardens, and take in panoramic views over lunch.',
      description: 'Start your day with a scenic drive along the western shore of Lake Como, arriving at Bellagio — the jewel of the lake. Explore the colourful alleys, visit the lakeside promenade, and stop at Villa Carlotta to visit the beautiful gardens. In the afternoon, cross by ferry to Varenna for a peaceful stroll along the Passeggiata degli Innamorati. Return to Como in style as the sun sets over the mountains.',
      highlights: ['Ferry Crossing', 'Bellagio Old Town', 'Lakeside Lunch', 'Varenna Promenade', 'Villa Carlotta', 'Scenic Drive'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Ferry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เบลลาจิโอ & วาเรนนา',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์ทะเลสาบ',
      location: 'เบลลาจิโอ, วาเรนนา',
      summary: 'มงกุฎแห่งทะเลสาบโคโม่ — เดินเล่นตรอกแคบๆ ชื่นชมทะเลสาบจากสวน Villa Melzi และชมวิวพาโนรามาขณะรับประทานอาหารกลางวัน',
      description: 'เริ่มต้นวันด้วยการขับรถชมวิวตลอดแนวชายฝั่งตะวันตกของทะเลสาบโคโม่ มาถึงเบลลาจิโอ — อัญมณีแห่งทะเลสาบ สำรวจตรอกซอกซอย เดินเล่น promenade ริมทะเลสาบ และแวะที่ Villa Carlotta เพื่อชมสวนอันงดงาม ยามบ่ายข้ามเรือเฟอรี่ไปยังวาเรนนา เดินเล่นตลอด Passeggiata degli Innamorati กลับโคโม่อย่างมีสไตล์ขณะพระอาทิตย์ตกดิน',
      highlights: ['ข้ามเรือเฟอรี่', 'ย่านเก่าเบลลาจิโอ', 'อาหารกลางวันริมทะเลสาบ', 'เส้นทางวาเรนนา', 'Villa Carlotta', 'วิวสวยงาม'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ตั๋วเรือเฟอรี่', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Transfer to Tremezzo' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Cross by boat to Varenna' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Explore Varenna' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Boat from Varenna to Bellagio' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Explore Bellagio' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Boat from Bellagio back to Tremezzo' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Visit Villa Carlotta & beautiful gardens' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'เดินทางไปเทรเมซโซ' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'นั่งเรือข้ามไปวาเรนนา' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'สำรวจวาเรนนา' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'เรือจากวาเรนนาไปเบลลาจิโอ' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'สำรวจเบลลาจิโอ' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'เรือจากเบลลาจิโอกลับเทรเมซโซ' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'ชม Villa Carlotta และสวนอันงดงาม' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 5,
    image: 'pictures/villa1.jpg',
    image2: 'pictures/villa2.jpg',
    image3: 'pictures/villa3.png',
    badge: 'Popular',
    rating: 4.7,
    reviewCount: 18,
    en: {
      name: 'Villa del Balbianello Tour',
      duration: 'Half Day — 5 hrs',
      type: 'Villa & Gardens',
      location: 'Lenno, Lake Como',
      summary: "One of Italy's most celebrated villas — terraced gardens, lakeside loggias, and film-set perfection (James Bond, Star Wars).",
      description: "Villa del Balbianello is consistently ranked among the world's most beautiful villa gardens. Perched on a wooded promontory above the lake, the villa's elegant loggias and manicured terraces have been immortalised in Casino Royale and Star Wars: Episode II. Explore the botanic gardens and manicured terraces before a lakeside lunch in Lenno.",
      highlights: ['Villa Balbianello Gardens', 'Lakeside Loggias', 'Bond Film Locations', 'Lenno Village', 'Terrace Panoramas'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Villa entry ticket', 'Bottled water'],
    },
    th: {
      name: 'ทัวร์ Villa del Balbianello',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'วิลล่าและสวน',
      location: 'เลนโน, ทะเลสาบโคโม่',
      summary: 'วิลล่าที่มีชื่อเสียงที่สุดในอิตาลี — สวนขั้นบันได loggia ริมทะเลสาบ สวยราวฉากภาพยนตร์ (James Bond, Star Wars)',
      description: 'Villa del Balbianello ได้รับการยกย่องว่าเป็นสวนวิลล่าที่สวยที่สุดในโลก ตั้งอยู่บนแหลมที่มีต้นไม้ปกคลุม loggia อันสง่างามและระเบียงขั้นบันไดที่ถ่ายทำใน Casino Royale และ Star Wars ภาค 2 สำรวจสวนพฤกษศาสตร์และระเบียงขั้นบันไดก่อนรับประทานอาหารริมทะเลสาบที่ Lenno',
      highlights: ['สวน Balbianello', 'Loggia ริมทะเลสาบ', 'สถานที่ถ่ายทำบอนด์', 'หมู่บ้านเลนโน', 'ระเบียงพาโนรามา'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ตั๋วเข้าวิลล่า', 'น้ำดื่ม'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Drive to Lenno village' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Botanic garden sightseeing' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Explore the terraced gardens & loggias' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'Panoramic views over Lake Como' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถไปหมู่บ้านเลนโน' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'ชมสวนพฤกษศาสตร์' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'สำรวจสวนขั้นบันไดและ loggia' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'ชมวิวพาโนรามาทะเลสาบโคโม่' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 4,
    image: 'pictures/milan.jpg',
    image2: 'pictures/milan2.jpg',
    image3: 'pictures/milan3.jpg',
    badge: 'Day Trip',
    rating: 4.8,
    reviewCount: 31,
    en: {
      name: 'Milan Fashion & Culture Day',
      duration: 'Full Day — 9 hrs',
      type: 'City Excursion',
      location: 'Milan, Italy',
      summary: "Italy's fashion capital in one day — the Duomo, Galleria Vittorio Emanuele II, Navigli canals, and all the couture your heart desires.",
      description: 'An hour from Como, Milan is a world apart. Your day begins at the spectacular Gothic Duomo before stepping into the glittering Galleria. Browse the Quadrilatero della Moda luxury district, take a canal-side aperitivo in the Navigli neighbourhood, and experience the electric energy of Italy\'s most cosmopolitan city. Perfect for shoppers, art lovers, and fashion enthusiasts alike.',
      highlights: ['Milan Duomo', 'Galleria V.E. II', 'Fashion District', 'Navigli Canals', 'Aperitivo Hour', 'Castello Sforzesco'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Duomo area walk', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'มิลาน แฟชั่น & วัฒนธรรม',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์เมือง',
      location: 'มิลาน, อิตาลี',
      summary: 'เมืองหลวงแฟชั่นอิตาลีใน 1 วัน — Duomo, Galleria Vittorio Emanuele II, คลอง Navigli และแฟชั่นสุดหรู',
      description: 'แค่ 1 ชั่วโมงจากโคโม่ มิลานโดดเด่นในแบบของตัวเอง วันเริ่มต้นที่ Duomo โกธิกอันน่าทึ่ง ก่อนก้าวเข้าสู่ Galleria แวววาว เดินชม Quadrilatero della Moda ย่านแฟชั่นลักชัวรี่ ดื่ม aperitivo ริมคลองใน Navigli และสัมผัสพลังงานของเมืองคอสโมโพลิแทนที่สุดของอิตาลี',
      highlights: ['Duomo มิลาน', 'Galleria V.E. II', 'ย่านแฟชั่น', 'คลอง Navigli', 'ชั่วโมง Aperitivo', 'Castello Sforzesco'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'เดินชมย่าน Duomo', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Scenic drive to Milan (1 hour)' },
        { time: '',      icon: 'fa-solid fa-church',           label: 'Visit the Gothic Milan Duomo' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'Explore Galleria Vittorio Emanuele II' },
        { time: '',      icon: 'fa-solid fa-bag-shopping',     label: 'Walk the Quadrilatero della Moda' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'Lunch in the city centre' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'Visit Castello Sforzesco' },
        { time: '',      icon: 'fa-solid fa-wine-glass',       label: 'Aperitivo along the Navigli canals' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถไปมิลาน (1 ชั่วโมง)' },
        { time: '',      icon: 'fa-solid fa-church',           label: 'ชม Duomo โกธิกอันตระการตา' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'สำรวจ Galleria Vittorio Emanuele II' },
        { time: '',      icon: 'fa-solid fa-bag-shopping',     label: 'เดินชม Quadrilatero della Moda' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'อาหารกลางวันในใจกลางเมือง' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'เยี่ยมชม Castello Sforzesco' },
        { time: '',      icon: 'fa-solid fa-wine-glass',       label: 'Aperitivo ริมคลอง Navigli' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 10,
    image: 'pictures/stresa & lake maggiore.jpg',
    image2: 'pictures/stresa2.jpg',
    image3: 'pictures/stresa3.jpg',
    badge: 'Day Trip',
    rating: 4.7,
    reviewCount: 15,
    en: {
      name: 'Stresa & the Borromean Islands',
      duration: 'Full Day — 9 hrs',
      type: 'Lake Maggiore Excursion',
      location: 'Stresa, Lake Maggiore',
      summary: 'Elegant Stresa on Lake Maggiore — stroll the grand lakefront, then ferry out to the extraordinary Borromean Islands with their baroque palaces and terraced gardens.',
      description: "Just over an hour from Como, Stresa is the pearl of Lake Maggiore. Begin with a walk along the famous lakefront promenade lined with grand Belle Époque hotels, then take the ferry to Isola Bella — home to the stunning Palazzo Borromeo and its ten tiers of baroque terraced gardens. Cross to the charming fishermen's village of Isola dei Pescatori for lunch, and soak up the atmosphere of one of Italy's most captivating lake destinations before returning to Como.",
      highlights: ['Stresa Lakefront', 'Isola Bella', 'Palazzo Borromeo', 'Borromean Gardens', 'Isola dei Pescatori', 'Ferry Crossing'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Ferry tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'สเตรซา & หมู่เกาะบอร์โรเมียน',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์ทะเลสาบมัจจอเร',
      location: 'สเตรซา, ทะเลสาบมัจจอเร',
      summary: 'สเตรซาอันสวยงามบนทะเลสาบมัจจอเร — เดินเล่นริมทะเลสาบอันยิ่งใหญ่ จากนั้นนั่งเรือเฟอรี่สู่หมู่เกาะบอร์โรเมียนอันน่าทึ่งพร้อมพระราชวังบาโรกและสวนขั้นบันได',
      description: 'เพียง 1 ชั่วโมงกว่าจากโคโม่ สเตรซาคือไข่มุกแห่งทะเลสาบมัจจอเร เริ่มต้นด้วยการเดินตลอดแนว promenade ริมทะเลสาบอันโด่งดังที่เรียงรายด้วยโรงแรม Belle Époque จากนั้นนั่งเฟอรี่ไปยัง Isola Bella — บ้านของ Palazzo Borromeo อันงดงามและสวนบาโรกขั้นบันไดสิบชั้น ข้ามไปยังหมู่บ้านชาวประมงน่ารัก Isola dei Pescatori เพื่อรับประทานอาหารกลางวัน',
      highlights: ['ริมทะเลสาบสเตรซา', 'อิโซลา เบลลา', 'พาลาซโซ บอร์โรเมโอ', 'สวนบอร์โรเมียน', 'อิโซลา เดย์ เปสกาโตรี', 'ข้ามเรือเฟอรี่'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ตั๋วเรือเฟอรี่', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Scenic drive to Stresa (~1 hour)' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Stroll the grand Belle Époque lakefront' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Ferry to Isola Bella' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'Tour Palazzo Borromeo' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Explore the 10-tier baroque terraced gardens' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Ferry to Isola dei Pescatori' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'Lunch in the fishermen\'s village' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถไปสเตรซา (~1 ชั่วโมง)' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'เดินเล่นริมทะเลสาบ Belle Époque' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'นั่งเฟอรี่ไปอิโซลา เบลลา' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'ชม Palazzo Borromeo' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'สำรวจสวนบาโรกขั้นบันได 10 ชั้น' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'นั่งเฟอรี่ไปอิโซลา เดย์ เปสกาโตรี' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'อาหารกลางวันในหมู่บ้านชาวประมง' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 6,
    image: 'pictures/bergamo citta alta 2.jpeg',
    image2: 'pictures/bergamo2.jpg',
    image3: 'pictures/bergamo3.jpg',
    badge: 'Day Trip',
    rating: 4.8,
    reviewCount: 19,
    en: {
      name: 'Bergamo Alta: Walled City',
      duration: 'Full Day — 9 hrs',
      type: 'UNESCO Heritage City',
      location: 'Bergamo Alta',
      summary: 'A perfectly preserved medieval city perched on a hilltop, encircled by Venetian walls and ignored by most tourists.',
      description: "Bergamo Alta is one of northern Italy's best-kept secrets — a UNESCO World Heritage hilltop city encircled by 16th-century Venetian walls. Take the historic funicular to the upper town, stroll the Piazza Vecchia, admire the octagonal Cappella Colleoni, and enjoy lunch at a traditional osteria. The views over the Lombard plain from the city walls are simply unforgettable.",
      highlights: ['Venetian City Walls', 'Piazza Vecchia', 'Cappella Colleoni', 'Historic Funicular', 'Lombard Plain Views', 'Trattoria Lunch'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Funicular tickets', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'แบร์กาโม อัลตา: เมืองมีกำแพง',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'เมืองมรดก UNESCO',
      location: 'แบร์กาโม อัลตา',
      summary: 'เมืองยุคกลางที่ได้รับการอนุรักษ์อย่างสมบูรณ์บนยอดเขา ล้อมรอบด้วยกำแพงเวนิสและถูกนักท่องเที่ยวส่วนใหญ่มองข้าม',
      description: 'แบร์กาโม อัลตา เป็นหนึ่งในความลับที่ยิ่งใหญ่ที่สุดของอิตาลีตอนเหนือ — เมืองบนเขา UNESCO ล้อมรอบด้วยกำแพงเวนิสศตวรรษที่ 16 นั่งกระเช้าสู่เมืองด้านบน เดินเล่น Piazza Vecchia ชม Cappella Colleoni รูปแปดเหลี่ยม และรับประทานอาหารที่ osteria ดั้งเดิม',
      highlights: ['กำแพงเมืองเวนิส', 'Piazza Vecchia', 'Cappella Colleoni', 'กระเช้าประวัติศาสตร์', 'วิวที่ราบลอมบาร์ด', 'อาหาร Trattoria'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ตั๋วกระเช้า', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Scenic drive to Bergamo (1 hour)' },
        { time: '',      icon: 'fa-solid fa-cable-car',        label: 'Ride the historic funicular to Città Alta' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'Walk the 16th-century Venetian city walls' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Explore Piazza Vecchia' },
        { time: '',      icon: 'fa-solid fa-church',           label: 'Admire the octagonal Cappella Colleoni' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'Lunch at a traditional osteria' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'Panoramic views over the Lombard plain' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถชมวิวไปแบร์กาโม (1 ชั่วโมง)' },
        { time: '',      icon: 'fa-solid fa-cable-car',        label: 'นั่งกระเช้าประวัติศาสตร์ขึ้น Città Alta' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'เดินชมกำแพงเวนิสศตวรรษที่ 16' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'สำรวจ Piazza Vecchia' },
        { time: '',      icon: 'fa-solid fa-church',           label: 'ชม Cappella Colleoni รูปแปดเหลี่ยม' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'อาหารกลางวันที่ osteria ดั้งเดิม' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'ชมวิวพาโนรามาที่ราบลอมบาร์ด' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 3,
    image: 'pictures/lugano1.jpg',
    image2: 'pictures/lugano2.jpg',
    image3: 'pictures/lugano3.jpg',
    badge: 'Half Day',
    rating: 4.6,
    reviewCount: 22,
    en: {
      name: 'Lugano & Switzerland Day',
      duration: 'Half Day — 5 hrs',
      type: 'Cross-border Excursion',
      location: 'Lugano, Switzerland',
      summary: 'Cross the Swiss border for a refined day in elegant Lugano — the city of parks, galleries, and stunning lake views from Monte San Salvatore.',
      description: 'Only 45 minutes from Como, Lugano offers a Swiss twist on Mediterranean elegance. Start with a walk through the old town, visit the lakeside park, then take the funicular up Monte San Salvatore for sweeping panoramas. Enjoy lunch in a rooftop restaurant, browse the boutiques of Via Nassa, and return to Italy as the sunset paints the Alps golden. Please bring your passport.',
      highlights: ['Monte San Salvatore', 'Lugano Old Town', 'Lakeside Parks', 'Swiss Border Crossing', 'Via Nassa Shopping', 'Funicular Ride'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Border crossing assistance', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'ลูกาโน & วันสวิตเซอร์แลนด์',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'ทัวร์ข้ามพรมแดน',
      location: 'ลูกาโน, สวิตเซอร์แลนด์',
      summary: 'ข้ามพรมแดนสวิสเพื่อวันอันสวยงามในลูกาโนที่หรูหรา — เมืองแห่งสวนสาธารณะ แกลเลอรี่ และวิวทะเลสาบจาก Monte San Salvatore',
      description: 'แค่ 45 นาทีจากโคโม่ ลูกาโนมีเสน่ห์สวิสผสมความหรูหราเมดิเตอร์เรเนียน เดินเล่นย่านเก่า เยี่ยมชมสวนริมทะเลสาบ จากนั้นนั่งกระเช้าขึ้น Monte San Salvatore เพื่อวิวพาโนรามา เพลิดเพลินอาหารกลางวันบนดาดฟ้า ช้อปปิ้งบน Via Nassa และกลับอิตาลีขณะพระอาทิตย์ตกย้อมเทือกเขาแอลป์ กรุณาพกพาสปอร์ต',
      highlights: ['Monte San Salvatore', 'ย่านเก่าลูกาโน', 'สวนริมทะเลสาบ', 'ข้ามพรมแดนสวิส', 'ช้อปปิ้ง Via Nassa', 'นั่งกระเช้า'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ช่วยเหลือการข้ามพรมแดน', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Scenic drive to the Swiss border' },
        { time: '',      icon: 'fa-solid fa-passport',         label: 'Cross into Switzerland' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Explore Lugano Old Town' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Stroll the lakeside parks' },
        { time: '',      icon: 'fa-solid fa-cable-car',        label: 'Funicular ride up Monte San Salvatore' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'Panoramic views over the Alps & lake' },
        { time: '',      icon: 'fa-solid fa-bag-shopping',     label: 'Browse Via Nassa boutiques' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถชมวิวไปยังพรมแดนสวิส' },
        { time: '',      icon: 'fa-solid fa-passport',         label: 'ข้ามเข้าสวิตเซอร์แลนด์' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'สำรวจย่านเก่าลูกาโน' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'เดินเล่นในสวนริมทะเลสาบ' },
        { time: '',      icon: 'fa-solid fa-cable-car',        label: 'นั่งกระเช้าขึ้น Monte San Salvatore' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'ชมวิวพาโนรามาเทือกเขาแอลป์และทะเลสาบ' },
        { time: '',      icon: 'fa-solid fa-bag-shopping',     label: 'เลือกซื้อของที่ Via Nassa' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  }
];

/* -- SEO image alt texts --------------------------------- */
const tripImageAlts = {
  0:  'Private boat tour to Bellagio and Varenna — Lake Como, Italy',
  5:  'Villa del Balbianello private boat tour — Lenno, Lake Como, Italy',
  4:  'Private day trip to Milan from Lake Como — Duomo and fashion district',
  3:  'Lugano Switzerland day trip from Como — Lake Lugano panoramic view',
  6:  'Bergamo Alta UNESCO walled city private day trip from Como',
  10: 'Stresa and Borromean Islands boat tour — Lake Maggiore from Como',
};

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
    href: 'https://line.me/ti/p/AcCnzepV4r',
    iconClass: 'fa-brands fa-line',
    label: 'Line หาเรา',
    sub: 'ตอบกลับภายใน 1 ชั่วโมง'
  }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('italybyamy_lang', lang);
  applyLanguage();
  if (typeof gtag !== 'undefined') gtag('event', 'language_toggle', { lang: currentLang });
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'th' : 'en');
}

function applyLanguage() {
  const isEn = currentLang === 'en';

  // Update HTML lang attribute, page title, meta description, and canonical URL
  document.documentElement.lang = currentLang;
  const metaDesc = document.querySelector('meta[name="description"]');
  const canonical = document.querySelector('link[rel="canonical"]');
  if (isEn) {
    document.title = 'Private Day Trips & Boat Tours \u00b7 Lake Como, Italy | Italy by Amy';
    if (metaDesc) metaDesc.content = 'Book private day trips, boat tours & luxury transfers around Lake Como. Bellagio, Varenna, Milan, Lugano & more. Hotel pickup included. English, Thai & Italian spoken.';
    if (canonical) canonical.href = 'https://italybyamy.com/';
  } else {
    document.title = '\u0e17\u0e31\u0e27\u0e23\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e17\u0e30\u0e40\u0e25\u0e2a\u0e32\u0e1a\u0e42\u0e04\u0e42\u0e21\u0e48 \u00b7 \u0e23\u0e16\u0e23\u0e31\u0e1a\u0e2a\u0e48\u0e07\u0e2b\u0e23\u0e39\u0e2b\u0e23\u0e32 | Italy by Amy';
    if (metaDesc) metaDesc.content = '\u0e17\u0e31\u0e27\u0e23\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e17\u0e30\u0e40\u0e25\u0e2a\u0e32\u0e1a\u0e42\u0e04\u0e42\u0e21\u0e48 \u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e40\u0e1a\u0e25\u0e25\u0e32\u0e08\u0e34\u0e42\u0e2d \u0e27\u0e34\u0e25\u0e25\u0e48\u0e32\u0e40\u0e14\u0e25\u0e1a\u0e31\u0e25\u0e40\u0e1a\u0e35\u0e22\u0e40\u0e19\u0e25\u0e42\u0e25 \u0e21\u0e34\u0e25\u0e32\u0e19 \u0e25\u0e39\u0e01\u0e32\u0e42\u0e19 \u0e23\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21 \u0e21\u0e35\u0e44\u0e01\u0e14\u0e4c\u0e1e\u0e39\u0e14\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 \u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e42\u0e04\u0e42\u0e21\u0e48';
    if (canonical) canonical.href = 'https://italybyamy.com/?lang=th';
  }

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
    topbarHref.onclick = null;
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
    cHref.onclick = null;
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
        <img src="${trip.image}" alt="${tripImageAlts[trip.id] || info.name}" loading="lazy">
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
  const picks = [0, 2, 4, 5];
  el.innerHTML = picks.map(idx => {
    const trip = trips[idx];
    const info = t(trip);
    return `
      <div class="deal-card" onclick="openModal(${idx})">
        <div class="deal-card-img">
          <img src="${trip.image}" alt="${tripImageAlts[trip.id] || info.name}" loading="lazy">
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
          <img src="${trip.image}" alt="${tripImageAlts[trip.id] || info.name}" loading="lazy">
          <span class="trip-badge${idx < 3 ? ' top' : ''}">${trip.badge}</span>
        </div>
        <div class="trip-card-body">
          <p class="trip-card-location"><i class="fa-solid fa-location-dot"></i> ${info.location}</p>
          <h3>${info.name}</h3>
          <div class="trip-card-stars">${stars(5)} <span class="trip-rating-score">${trip.rating}</span></div>
          <div class="trip-meta">
            <span><i class="fa-regular fa-clock"></i> ${info.duration}</span>
            <span>${currentLang === 'th' ? 'โคโม่' : 'Como'}</span>
            <span>${info.type}</span>
          </div>
          <div class="trip-card-footer">
            <div>
              <span class="trip-price">${trip.en.duration.includes('Half Day') ? (currentLang === 'th' ? 'เริ่มต้นที่ €499' : 'Starting from €499') : (currentLang === 'th' ? 'เริ่มต้นที่ €899' : 'Starting from €899')}</span>
              <p class="trip-price-sub">${currentLang === 'th' ? 'กลุ่มส่วนตัว · สูงสุด 5 ท่าน' : 'Private group · Up to 5 guests'}</p>
            </div>
            <button class="btn-enquire">${currentLang === 'th' ? 'สอบถาม' : 'Enquire'}</button>
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
    <img src="${trip.image}"  alt="${tripImageAlts[trip.id] || info.name}">
    <div class="modal-images-side">
      <img src="${trip.image2}" alt="${info.name} — ${info.location}">
      <img src="${trip.image3}" alt="${info.name} — Lake Como Italy">
    </div>
  `;

  // Badge + title + stars
  document.getElementById('modalBadgeRow').innerHTML = `<span>${trip.badge}</span>`;
  document.getElementById('modalTitle').textContent = info.name;
  document.getElementById('modalStars').innerHTML = `${stars(5)} <span style="color:#999;font-size:.8rem">${trip.rating} · ${trip.reviewCount} reviews · Google</span>`;

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

  // Itinerary
  const itineraryEl = document.getElementById('modalItinerary');
  if (itineraryEl) {
    if (trip.itinerary) {
      const steps = trip.itinerary[currentLang] || trip.itinerary.en;
      itineraryEl.innerHTML = `
        <h3 class="itinerary-title">${currentLang === 'th' ? 'รายละเอียดเส้นทาง' : 'Day Itinerary'}</h3>
        <div class="itinerary-timeline">
          ${steps.map((s, i) => `
            <div class="itin-step${i === 0 || i === steps.length - 1 ? ' itin-step--anchor' : ''}">
              <div class="itin-time">${s.time}</div>
              <div class="itin-dot-col"><div class="itin-dot"><i class="${s.icon}"></i></div>${i < steps.length - 1 ? '<div class="itin-line"></div>' : ''}</div>
              <div class="itin-label">${s.label}</div>
            </div>`).join('')}
        </div>`;
      itineraryEl.style.display = 'block';
    } else {
      itineraryEl.style.display = 'none';
      itineraryEl.innerHTML = '';
    }
  }

  // Price
  const isHalfDay = trip.en.duration.includes('Half Day');
  const priceEl = overlay.querySelector('.modal-price');
  if (priceEl) {
    const enPrice = isHalfDay ? 'Starting from €499' : 'Starting from €899';
    const thPrice = isHalfDay ? 'เริ่มต้นที่ €499' : 'เริ่มต้นที่ €899';
    priceEl.dataset.en = enPrice;
    priceEl.dataset.th = thPrice;
    priceEl.textContent = currentLang === 'th' ? thPrice : enPrice;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (typeof gtag !== 'undefined') gtag('event', 'view_trip', { trip_name: info.name });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* -- LINE QR popup --------------------------------------- */
function openLineQr() {
  const el = document.getElementById('lineQrOverlay');
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeLineQr() {
  const el = document.getElementById('lineQrOverlay');
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeLineQr(); } });

/* -- Contact form ----------------------------------------- */
function submitForm(e) {
  e.preventDefault();

  // Validate required fields
  const nameEl   = document.getElementById('formName');
  const emailEl  = document.getElementById('formEmail');
  const sourceEl = document.getElementById('formSource');
  const nameErr   = document.getElementById('nameError');
  const emailErr  = document.getElementById('emailError');
  const sourceErr = document.getElementById('sourceError');
  const isTh = currentLang === 'th';
  let valid = true;
  let firstInvalid = null;

  // Clear previous errors
  [nameEl, emailEl, sourceEl].forEach(el => el.classList.remove('field-error'));
  [nameErr, emailErr, sourceErr].forEach(el => el.classList.remove('visible'));

  if (!nameEl.value.trim()) {
    nameEl.classList.add('field-error');
    nameErr.textContent = isTh ? 'กรุณากรอกชื่อของคุณ' : 'Please enter your name';
    nameErr.classList.add('visible');
    if (!firstInvalid) firstInvalid = nameEl;
    valid = false;
  }

  const emailVal = emailEl.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  if (!emailVal || !emailOk) {
    emailEl.classList.add('field-error');
    emailErr.textContent = isTh ? 'กรุณากรอกอีเมลที่ถูกต้อง' : 'Please enter a valid email address';
    emailErr.classList.add('visible');
    if (!firstInvalid) firstInvalid = emailEl;
    valid = false;
  }

  if (!sourceEl.value) {
    sourceEl.classList.add('field-error');
    sourceErr.textContent = isTh ? 'กรุณาเลือกว่าคุณพบเราได้อย่างไร' : 'Please let us know how you found us';
    sourceErr.classList.add('visible');
    if (!firstInvalid) firstInvalid = sourceEl;
    valid = false;
  }

  if (!valid) { firstInvalid.focus(); return; }

  // Auto-clear errors on change
  sourceEl.addEventListener('change', () => { sourceEl.classList.remove('field-error'); sourceErr.classList.remove('visible'); }, { once: true });

  // Clear errors on successful input
  nameEl.addEventListener('input', () => { nameEl.classList.remove('field-error'); nameErr.classList.remove('visible'); }, { once: true });
  emailEl.addEventListener('input', () => { emailEl.classList.remove('field-error'); emailErr.classList.remove('visible'); }, { once: true });

  const btn = document.getElementById('formSubmitBtn');
  const successMsg = document.getElementById('formSuccess');
  const sendingLabel = currentLang === 'th' ? 'กำลังส่ง…' : 'Sending…';
  const originalLabel = currentLang === 'th' ? 'ส่งข้อความสอบถาม' : 'Send Enquiry';
  const errorLabel = currentLang === 'th' ? 'เกิดข้อผิดพลาด โปรดลองใหม่' : 'Something went wrong — please try again';

  btn.disabled = true;
  btn.textContent = sendingLabel;

  const payload = {
    name:    document.getElementById('formName').value.trim(),
    email:   document.getElementById('formEmail').value.trim(),
    service: document.getElementById('formService').value,
    guests:  document.getElementById('formGuests').value,
    source:  document.getElementById('formSource').value,
    message: document.getElementById('formMessage').value.trim()
  };

  fetch('https://formspree.io/f/xqegwdrz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(r => r.json())
  .then(data => {
    console.log('Formspree response:', data);
    if (data.ok) {
      e.target.reset();
      btn.style.display = 'none';
      if (successMsg) { successMsg.style.display = 'block'; applyLanguage(); }
      if (typeof gtag !== 'undefined') gtag('event', 'contact_form_submit');
    } else {
      console.error('Formspree error:', data.errors || data);
      btn.disabled = false;
      btn.textContent = errorLabel;
    }
  })
  .catch(err => {
    console.error('Form submission error:', err);
    btn.disabled = false;
    btn.textContent = errorLabel;
  });
}

/* -- Navbar mobile ---------------------------------------- */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* -- Init ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Priority: URL param → localStorage → browser language
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('italybyamy_lang');
  if (urlLang === 'th' || urlLang === 'en') {
    currentLang = urlLang;
  } else if (savedLang) {
    currentLang = savedLang;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith('th')) {
    currentLang = 'th';
  }
  renderTrips();
  applyLanguage();
});
