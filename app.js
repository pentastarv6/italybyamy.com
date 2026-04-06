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
    id: 3,
    image: 'pictures/como brunate.jpg',
    image2: 'pictures/como lago bellagio.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Half Day',
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
  },
  {
    id: 4,
    image: 'pictures/milan.jpg',
    image2: 'pictures/como brunate.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Day Trip',
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
      highlights: ['Villa Balbianello Gardens', 'Lakeside Loggias', 'Bond Film Locations', 'Lenno Village', 'Terrace Panoramas'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Boat transfer', 'Villa entry ticket', 'Bottled water'],
    },
    th: {
      name: 'ทัวร์ Villa del Balbianello',
      duration: 'ครึ่งวัน — 5 ชั่วโมง',
      type: 'วิลล่าและสวน',
      location: 'เลนโน, ทะเลสาบโคโม่',
      summary: 'วิลล่าที่มีชื่อเสียงที่สุดในอิตาลี — สวนขั้นบันได loggia ริมทะเลสาบ สวยราวฉากภาพยนตร์ (James Bond, Star Wars)',
      description: 'Villa del Balbianello ได้รับการยกย่องว่าเป็นสวนวิลล่าที่สวยที่สุดในโลก ตั้งอยู่บนแหลมที่มีต้นไม้ปกคลุม loggia อันสง่างามและระเบียงขั้นบันไดที่ถ่ายทำใน Casino Royale และ Star Wars ภาค 2 เราเดินทางมาด้วยเรือ จากนั้นชมสวนและห้องประวัติศาสตร์ก่อนรับประทานอาหารริมทะเลสาบที่ Lenno',
      highlights: ['สวน Balbianello', 'Loggia ริมทะเลสาบ', 'สถานที่ถ่ายทำบอนด์', 'หมู่บ้านเลนโน', 'ระเบียงพาโนรามา'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ค่าโดยสารเรือ', 'ตั๋วเข้าวิลล่า', 'น้ำดื่ม'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Drive to Lenno village' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'Boat transfer to Villa del Balbianello' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: "Tour the villa's historic rooms" },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'Explore the terraced gardens & loggias' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'Panoramic views over Lake Como' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถไปหมู่บ้านเลนโน' },
        { time: '',      icon: 'fa-solid fa-ship',             label: 'นั่งเรือไปยัง Villa del Balbianello' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'ชมห้องประวัติศาสตร์ของวิลล่า' },
        { time: '',      icon: 'fa-solid fa-tree',             label: 'สำรวจสวนขั้นบันไดและ loggia' },
        { time: '',      icon: 'fa-solid fa-camera',           label: 'ชมวิวพาโนรามาทะเลสาบโคโม่' },
        { time: '14:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
  },
  {
    id: 6,
    image: 'pictures/bergamo citta alta 2.jpeg',
    image2: 'pictures/como brunate.jpg',
    image3: 'pictures/como duomo.jpg',
    badge: 'Day Trip',
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
    id: 10,
    image: 'pictures/arena verona.jpg',
    image2: 'pictures/verona.jpg',
    image3: 'pictures/verona 2.webp',
    badge: 'Day Trip',
    en: {
      name: 'Verona: Romeo & Juliet',
      duration: 'Full Day — 9 hrs',
      type: 'UNESCO City Tour',
      location: 'Verona, Veneto',
      summary: "The city of love — Juliet's balcony, the Roman Arena, medieval streets, and the finest Soave wine this side of the Veneto.",
      description: "Verona ranks among Italy's most romantic cities, and a full day here barely scratches the surface. Visit Juliet's famous balcony (and try not to get swept up in the romance), walk the perfectly preserved Roman Arena, stroll the medieval Piazza dei Signori, and end the day with wine and cicchetti in an enoteca by the Adige river. The drive through Lake Garda is a bonus.",
      highlights: ["Juliet's Balcony", 'Roman Arena', 'Piazza dei Signori', 'Adige Riverside', 'Garda Lakeshore Drive', 'Evening Enoteca'],
      includes: ['Pickup/dropoff in Como City', 'Private VW Multivan', 'English, Thai & Italian guide', 'Arena entry', 'Bottled water', 'Flexible itinerary'],
    },
    th: {
      name: 'เวโรนา: โรมิโอ & จูเลียต',
      duration: 'เต็มวัน — 9 ชั่วโมง',
      type: 'ทัวร์เมือง UNESCO',
      location: 'เวโรนา, เวนิโต',
      summary: 'เมืองแห่งความรัก — ระเบียง Juliet, Arena โรมัน, ถนนยุคกลาง และไวน์ Soave ของแท้',
      description: 'เวโรนาถือเป็นหนึ่งในเมืองโรแมนติกที่สุดของอิตาลี เยี่ยมชมระเบียงอันโด่งดังของ Juliet เดินใน Arena โรมันที่ได้รับการอนุรักษ์อย่างสมบูรณ์ เดินเล่น Piazza dei Signori ยุคกลาง และสิ้นสุดวันด้วยไวน์และ cicchetti ที่ enoteca ริมแม่น้ำ Adige',
      highlights: ['ระเบียง Juliet', 'Arena โรมัน', 'Piazza dei Signori', 'ริมแม่น้ำ Adige', 'ขับรถชายฝั่ง Garda', 'Enoteca ยามเย็น'],
      includes: ['รับ-ส่งในเมืองโคโม่', 'รถ VW Multivan ส่วนตัว', 'ไกด์ภาษาอังกฤษ ไทย & อิตาลี', 'ตั๋วเข้า Arena', 'น้ำดื่ม', 'เส้นทางยืดหยุ่น'],
    },
    itinerary: {
      en: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'Pickup at your hotel in Como' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'Scenic drive along Lake Garda' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Arrive in Verona' },
        { time: '',      icon: 'fa-solid fa-heart',            label: "Visit Juliet's famous balcony" },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'Walk the perfectly preserved Roman Arena' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'Stroll Piazza dei Signori' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'Lunch in the historic centre' },
        { time: '',      icon: 'fa-solid fa-wine-glass',       label: 'Wine & cicchetti at an Adige enoteca' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'Return to your hotel in Como' },
      ],
      th: [
        { time: '09:00', icon: 'fa-solid fa-hotel',           label: 'รับคณะที่โรงแรมในเมืองโคโม่' },
        { time: '',      icon: 'fa-solid fa-car',              label: 'ขับรถชมวิวตลอดแนวทะเลสาบการ์ดา' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'เดินทางถึงเวโรนา' },
        { time: '',      icon: 'fa-solid fa-heart',            label: 'เยี่ยมชมระเบียงอันโด่งดังของ Juliet' },
        { time: '',      icon: 'fa-solid fa-landmark',         label: 'เดินใน Arena โรมันที่ได้รับการอนุรักษ์' },
        { time: '',      icon: 'fa-solid fa-map-location-dot', label: 'เดินเล่น Piazza dei Signori' },
        { time: '',      icon: 'fa-solid fa-utensils',         label: 'อาหารกลางวันในย่านประวัติศาสตร์' },
        { time: '',      icon: 'fa-solid fa-wine-glass',       label: 'ไวน์และ cicchetti ที่ enoteca ริมแม่น้ำ Adige' },
        { time: '18:00', icon: 'fa-solid fa-hotel',           label: 'กลับโรงแรมในเมืองโคโม่' },
      ],
    },
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
    href: 'https://line.me/ti/p/AcCnzepV4r',
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
  const picks = [0, 2, 4, 5];
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
            <span class="trip-price">${info.duration.includes('Half Day') ? (currentLang === 'th' ? 'เริ่มต้นที่ €499 ต่อคน' : 'Starting from €499 p.p.') : (currentLang === 'th' ? 'เริ่มต้นที่ €799 ต่อคน' : 'Starting from €799 p.p.')}</span>
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
  const isHalfDay = info.duration.includes('Half Day');
  const priceEl = overlay.querySelector('.modal-price');
  if (priceEl) {
    const enPrice = isHalfDay ? 'Starting from €499 p.p.' : 'Starting from €799 p.p.';
    const thPrice = isHalfDay ? 'เริ่มต้นที่ €499 ต่อคน' : 'เริ่มต้นที่ €799 ต่อคน';
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
  renderTrips();
  applyLanguage();
});
