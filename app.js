/* =========================================================
   Italy by Amy — App JavaScript
   ========================================================= */

/* ── Language state ── */
let currentLang = 'en';

/* ── 12 Como Trip Cards ── */
const trips = [
  {
    id: 'bellagio',
    badge: 'Top Pick',
    badgeClass: 'top',
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bellagio',
      subtitle: 'Private Day Trip',
      duration: '5h 15m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🚢 Ferry to Villa Melzi', '🌿 Botanical gardens', '🍦 Gelato tasting', '📸 Best photo spots'],
      desc: `Discover Bellagio — Italy's most elegant lakeside retreat. Your smooth ride brings you to the "Pearl of Lake Como," where you'll stroll Via Giuseppe Garibaldi, discover local artisan crafts, and marvel at luxurious villas owned by the world's elite. Experience the timeless charm of winding alleys draped in bougainvillea, café terraces overlooking the lake, and the iconic ferry point where the two arms of Lake Como meet. A perfect blend of romance, culture, and natural beauty.`,
    },
    th: {
      title: 'โคโม่ ถึง เบลลาจิโอ',
      subtitle: 'ทริปส่วนตัวเต็มวัน',
      duration: '5 ชม. 15 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🚢 เรือเฟอร์รี่ไปวิลล่า เมลซี', '🌿 สวนพฤกษศาสตร์', '🍦 ชิมเจลาโต', '📸 จุดถ่ายรูปที่ดีที่สุด'],
      desc: `ค้นพบเบลลาจิโอ — รีสอร์ทริมทะเลสาบที่หรูหราที่สุดในอิตาลี การเดินทางที่ราบรื่นของคุณพาคุณมาสู่ "ไข่มุกแห่งทะเลสาบโคโม่" ที่คุณจะได้เดินเล่นบน Via Giuseppe Garibaldi ค้นพบงานฝีมือช่างท้องถิ่น และชมวิลล่าหรูของบุคคลชั้นนำของโลก สัมผัสเสน่ห์อันไร้กาลเวลาของตรอกซอกซอยที่ประดับด้วยดอกบูเกนวิลล์ ระเบียงคาเฟ่มองเห็นทะเลสาบ และจุดเรือเฟอร์รี่อันเป็นเอกลักษณ์ที่แขนทั้งสองของทะเลสาบโคโม่มาบรรจบกัน`,
    }
  },
  {
    id: 'varenna',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Varenna',
      subtitle: 'Private Day Trip',
      duration: '5h 15m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🏰 Castello di Vezio', '💐 Villa Monastero gardens', '🧅 Risotto tasting', '🌅 Sunset viewpoints'],
      desc: `Varenna is a fairy-tale village perched on the eastern shore of Lake Como — quieter than Bellagio but just as stunning. Walk the Passeggiata degli Innamorati (Lovers' Path) along the water's edge, visit the haunted Castello di Vezio high above the rooftops, and lose yourself in the romantic gardens of Villa Monastero. This is Lake Como without the crowds — authentic, intimate, and utterly beautiful.`,
    },
    th: {
      title: 'โคโม่ ถึง วาเรนนา',
      subtitle: 'ทริปส่วนตัวเต็มวัน',
      duration: '5 ชม. 15 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🏰 ปราสาทดิ เวซิโอ', '💐 สวนวิลล่า โมนาสเตโร', '🧅 ชิมริซอตโต', '🌅 จุดชมพระอาทิตย์ตก'],
      desc: `วาเรนนาเป็นหมู่บ้านในนิทานที่ตั้งอยู่บนชายฝั่งตะวันออกของทะเลสาบโคโม่ — เงียบสงบกว่าเบลลาจิโอแต่สวยงามไม่แพ้กัน เดินบน Passeggiata degli Innamorati (เส้นทางของคู่รัก) ตามแนวน้ำ เยี่ยมชมปราสาทดิ เวซิโอที่เต็มไปด้วยเรื่องราวเหนือหลังคาบ้าน และหลงใหลในสวนอันโรแมนติกของวิลล่า โมนาสเตโร`,
    }
  },
  {
    id: 'como-city',
    badge: 'Half Day',
    img: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como City Discovery',
      subtitle: 'Half-Day Tour',
      duration: '3h 30m',
      type: 'Half day · Private group',
      price: 'Contact for quote',
      highlights: ['⛪ Como Cathedral', '🚡 Brunate funicular', '🛍️ Silk shopping', '☕ Espresso culture'],
      desc: `Often used as just a layover, Como city itself is a gem waiting to be explored. We guide you through the historic centre, from the magnificent Como Cathedral (Duomo) — a stunning mix of Gothic and Renaissance architecture — to the silk boutiques that made this city famous worldwide. Take the funicular up to Brunate for jaw-dropping panoramic lake views, and sit down for a proper Italian espresso in a piazza that has barely changed in centuries.`,
    },
    th: {
      title: 'สำรวจเมืองโคโม่',
      subtitle: 'ทริปครึ่งวัน',
      duration: '3 ชม. 30 นาที',
      type: 'ครึ่งวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['⛪ มหาวิหารโคโม่', '🚡 กระเช้าบรูนาเต', '🛍️ ช็อปผ้าไหม', '☕ วัฒนธรรมเอสเปรสโซ'],
      desc: `มักถูกมองว่าเป็นแค่จุดแวะพัก แต่เมืองโคโม่เองก็เป็นอัญมณีที่รอการสำรวจ เราจะพาคุณผ่านใจกลางประวัติศาสตร์ จากมหาวิหารโคโม่ที่งดงาม ไปยังร้านบูติกผ้าไหมที่ทำให้เมืองนี้ขึ้นชื่อไปทั่วโลก นั่งกระเช้าขึ้นไปบรูนาเตเพื่อชมวิวทะเลสาบแบบพาโนรามา`,
    }
  },
  {
    id: 'ascona-brissago',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Ascona & Brissago',
      subtitle: 'Private Day Trip (Cross-border)',
      duration: '8h 15m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🇨🇭 Swiss Riviera', '🌺 Brissago Islands', '🎨 Artist colony town', '🏖️ Lakeside piazza'],
      desc: `Cross the Swiss border and enter the Italian-speaking Swiss Riviera — a world where Mediterranean warmth meets Swiss precision. Ascona is one of the most charming and artistic villages on Lago Maggiore, while the Brissago Islands famous botanical garden is a burst of tropical colour in the middle of the lake. Enjoy a long lunch in a historic piazza before we bring you home. A truly unique cross-border experience.`,
    },
    th: {
      title: 'โคโม่ ถึง อัสโคนา & บริสซาโก',
      subtitle: 'ทริปส่วนตัว (ข้ามพรมแดน)',
      duration: '8 ชม. 15 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🇨🇭 ริเวียราสวิส', '🌺 เกาะบริสซาโก', '🎨 เมืองกลุ่มศิลปิน', '🏖️ ลานริมทะเลสาบ'],
      desc: `ข้ามพรมแดนสวิสและเข้าสู่ริเวียราสวิสที่พูดภาษาอิตาลี — โลกที่ความอบอุ่นแบบเมดิเตอร์เรเนียนพบกับความแม่นยำแบบสวิส อัสโคนาเป็นหนึ่งในหมู่บ้านที่มีเสน่ห์และศิลปะที่สุดบนลาโก มัจโจเร ขณะที่สวนพฤกษศาสตร์อันโด่งดังของเกาะบริสซาโกเป็นสีสันเขตร้อนกลางทะเลสาบ`,
    }
  },
  {
    id: 'bellagio-varenna',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bellagio & Varenna',
      subtitle: 'Private Combo Day Trip',
      duration: '8h',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['⛴️ Lake ferry crossing', '🏘️ Two iconic villages', '🥂 Lakeside aperitivo', '🗺️ Best of both shores'],
      desc: `Why choose between Bellagio and Varenna when you can have both? We take the iconic ferry across the lake between the two most beautiful villages on Lake Como — experiencing both shores in one unforgettable day. Explore Bellagio's glamorous streets in the morning, cross by ferry to Varenna's romantic walkways in the afternoon, and return home with a camera full of memories.`,
    },
    th: {
      title: 'โคโม่ ถึง เบลลาจิโอ & วาเรนนา',
      subtitle: 'ทริปคู่ส่วนตัว',
      duration: '8 ชม.',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['⛴️ นั่งเรือเฟอร์รี่ข้ามทะเลสาบ', '🏘️ สองหมู่บ้านอันเป็นสัญลักษณ์', '🥂 อาเปริทีโวริมทะเลสาบ', '🗺️ ดีที่สุดทั้งสองฝั่ง'],
      desc: `ทำไมต้องเลือกระหว่างเบลลาจิโอและวาเรนนาในเมื่อคุณสามารถมีทั้งคู่? เราขึ้นเรือเฟอร์รี่อันเป็นสัญลักษณ์ข้ามทะเลสาบระหว่างสองหมู่บ้านที่สวยที่สุดบนทะเลสาบโคโม่ — สัมผัสทั้งสองฝั่งในวันที่ไม่มีวันลืม`,
    }
  },
  {
    id: 'bellinzona-locarno',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1520637836993-a12c5eca0123?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1635002962487-2c1d4d2f63be?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bellinzona & Locarno',
      subtitle: 'Private Day Trip (Switzerland)',
      duration: '9h 15m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🏰 3 UNESCO Castles', '🎬 Locarno Film Festival square', '🍷 Ticino wine tasting', '🏞️ Alpine river views'],
      desc: `A UNESCO World Heritage city and a glittering lakeside film town in one day — this is the best of Swiss Ticino. Bellinzona's three medieval castles dominate the skyline, while Locarno's famous Piazza Grande (host to one of Europe's greatest film festivals) sits at the edge of shimmering Lago Maggiore. Cross Alpine passes, taste local Merlot, and return with stories no guidebook could give you.`,
    },
    th: {
      title: 'โคโม่ ถึง เบลลินโซนา & โลคาร์โน',
      subtitle: 'ทริปส่วนตัว (สวิตเซอร์แลนด์)',
      duration: '9 ชม. 15 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🏰 ปราสาท UNESCO 3 แห่ง', '🎬 จัตุรัสเทศกาลภาพยนตร์โลคาร์โน', '🍷 ชิมไวน์ติชิโน', '🏞️ วิวแม่น้ำอัลไพน์'],
      desc: `เมืองมรดกโลก UNESCO และเมืองภาพยนตร์ริมทะเลสาบในวันเดียว — นี่คือสิ่งที่ดีที่สุดของสวิสติชิโน ปราสาทยุคกลางสามแห่งของเบลลินโซนาครอบงำเส้นขอบฟ้า ขณะที่ Piazza Grande อันโด่งดังของโลคาร์โนตั้งอยู่ที่ขอบของลาโก มัจโจเรที่ส่องประกาย`,
    }
  },
  {
    id: 'bergamo',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bergamo',
      subtitle: 'Private Day Trip',
      duration: '7h',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🏛️ Città Alta (upper town)', '🎨 Carrara Academy art', '🧀 Polenta & formaggi', '🚡 Funicular to upper city'],
      desc: `Bergamo is one of Italy's most underrated cities — a perfectly preserved medieval upper town (Città Alta) ringed by Venetian walls, sitting above a vibrant modern lower city. Walk the ancient cobblestones, browse the Piazza Vecchia (one of Italy's most beautiful squares), and visit the Carrara Academy for world-class Renaissance art. Finish with a plate of polenta taragna with local cheese — food rarely gets better than this.`,
    },
    th: {
      title: 'โคโม่ ถึง แบร์กาโม',
      subtitle: 'ทริปส่วนตัวเต็มวัน',
      duration: '7 ชม.',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🏛️ ชิตตา อัลตา (เมืองบน)', '🎨 ศิลปะอคาเดมีคาร์รารา', '🧀 โพเลนต้าและชีส', '🚡 กระเช้าสู่เมืองบน'],
      desc: `แบร์กาโมเป็นหนึ่งในเมืองที่ถูกประเมินค่าต่ำที่สุดของอิตาลี — เมืองบนยุคกลางที่ได้รับการอนุรักษ์อย่างสมบูรณ์แบบ (ชิตตา อัลตา) ล้อมรอบด้วยกำแพงเวเนเชียน ตั้งอยู่เหนือเมืองล่างที่มีชีวิตชีวา เดินบนหินกรวดโบราณ ชม Piazza Vecchia และเยี่ยมชมอคาเดมีคาร์ราราเพื่อชมงานศิลปะยุคเรอเนสซองส์ระดับโลก`,
    }
  },
  {
    id: 'bergamo-brescia',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1467069093215-f2c93b5b2e45?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bergamo & Brescia',
      subtitle: 'Private Combo Day Trip',
      duration: '10h 15m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🏛️ Two UNESCO-listed cities', '🏰 Brescia castle', '🍷 Franciacorta wine', '🎭 Roman temples'],
      desc: `Two UNESCO-listed cities in one epic day. Bergamo's medieval upper city and Brescia's remarkable Roman heritage — including an intact 1st-century temple — make for an extraordinary combination. Brescia is Italy's "Lioness" city, packed with Roman ruins, Venetian palaces, and some of Lombardy's best restaurants. End the day with a glass of Franciacorta sparkling wine from the famous wine region just south of the city.`,
    },
    th: {
      title: 'โคโม่ ถึง แบร์กาโม & เบรชา',
      subtitle: 'ทริปคู่ส่วนตัว',
      duration: '10 ชม. 15 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🏛️ สองเมือง UNESCO', '🏰 ปราสาทเบรชา', '🍷 ไวน์ฟรันชาคอร์ตา', '🎭 วิหารโรมัน'],
      desc: `สองเมืองที่ได้รับการขึ้นทะเบียน UNESCO ในวันอันยิ่งใหญ่ เมืองบนยุคกลางของแบร์กาโมและมรดกโรมันอันน่าทึ่งของเบรชา รวมถึงวิหารศตวรรษที่ 1 ที่ยังสมบูรณ์ สิ้นสุดวันด้วยแก้วไวน์ฟรันชาคอร์ต้า`,
    }
  },
  {
    id: 'bergamo-franciacorta',
    badge: 'Wine Tour',
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Bergamo & Franciacorta',
      subtitle: 'Wine & Città Alta Day Trip',
      duration: '9h 30m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🍾 Franciacorta cellar visit', '🥂 Sparkling wine tasting', '🏛️ Bergamo Città Alta', '🏡 Vineyard landscapes'],
      desc: `Italy's answer to Champagne lies just an hour from Como. The Franciacorta wine region produces world-class sparkling wines using the traditional method — and a private cellar tour here is genuinely one of Lombardy's greatest pleasures. We pair this with a morning visit to Bergamo's magnificent Città Alta, giving you art, history, and exceptional wine in one day. Private vehicle means you can taste freely — we do the driving.`,
    },
    th: {
      title: 'โคโม่ ถึง แบร์กาโม & ฟรันชาคอร์ตา',
      subtitle: 'ทริปไวน์และชิตตา อัลตา',
      duration: '9 ชม. 30 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🍾 เยี่ยมชมห้องใต้ดินฟรันชาคอร์ตา', '🥂 ชิมไวน์สปาร์กลิ้ง', '🏛️ ชิตตา อัลตา แบร์กาโม', '🏡 ทิวทัศน์ไร่องุ่น'],
      desc: `คำตอบของอิตาลีต่อแชมเปญอยู่ห่างจากโคโม่เพียงชั่วโมงเดียว แหล่งไวน์ฟรันชาคอร์ตาผลิตไวน์สปาร์กลิ้งระดับโลกโดยใช้วิธีดั้งเดิม และทัวร์ห้องใต้ดินส่วนตัวที่นี่เป็นหนึ่งในความสุขที่ยิ่งใหญ่ที่สุดของลอมบาร์เดีย`,
    }
  },
  {
    id: 'lago-maggiore',
    badge: 'Scenic',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Lake Maggiore & Borromean Islands',
      subtitle: 'Private Day Trip',
      duration: '8h 30m',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🏝️ Isola Bella palace', '🌸 Isola Superiore village', '⛵ Private boat option', '🌿 Baroque garden terraces'],
      desc: `Lake Maggiore and its legendary Borromean Islands are among the most breathtaking sights in all of Northern Italy. The Palazzo Borromeo on Isola Bella is an extravagant Baroque palace with ten terraces of sculpted gardens descending to the lake. Isola Superiore (Pescatori) is a tiny fishing island with just 50 inhabitants — authentic Italy frozen in time. We drive you there, the lake does the rest.`,
    },
    th: {
      title: 'โคโม่ ถึง ทะเลสาบ มัจโจเร & เกาะบอร์โรเมียน',
      subtitle: 'ทริปส่วนตัวเต็มวัน',
      duration: '8 ชม. 30 นาที',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🏝️ พระราชวังอิโซลา เบลลา', '🌸 หมู่บ้านอิโซลา ซูเปริโอเร', '⛵ ตัวเลือกเรือส่วนตัว', '🌿 สวนแบโรกบนระเบียง'],
      desc: `ทะเลสาบมัจโจเรและเกาะบอร์โรเมียนอันเป็นตำนานเป็นหนึ่งในสิ่งที่น่าทึ่งที่สุดในอิตาลีตอนเหนือทั้งหมด Palazzo Borromeo บน Isola Bella เป็นพระราชวังบาโรกที่หรูหราพร้อมสิบระเบียงของสวนที่แกะสลักอย่างประณีตลงสู่ทะเลสาบ`,
    }
  },
  {
    id: 'lugano',
    badge: 'Switzerland',
    img: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Lugano',
      subtitle: 'Private Swiss Day Trip',
      duration: '6h',
      type: 'Full day · Private group',
      price: 'Contact for quote',
      highlights: ['🇨🇭 Swiss lakeside city', '🛍️ Designer shopping', '🚡 Monte Brè cable car', '☕ Swiss café culture'],
      desc: `Lugano is Switzerland's Italian city — sun-drenched, stylish, and surprisingly close to Como. Stroll the lakeside promenade, browse designer boutiques, and take the cable car up Monte Brè for sweeping Alpine views. The city blends Italian warmth with Swiss efficiency, and the food scene is exceptional. Just 30 minutes from Como, Lugano feels like a different world — and with us, the crossing is effortless.`,
    },
    th: {
      title: 'โคโม่ ถึง ลูกาโน',
      subtitle: 'ทริปสวิสส่วนตัว',
      duration: '6 ชม.',
      type: 'เต็มวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['🇨🇭 เมืองริมทะเลสาบสวิส', '🛍️ ช็อปปิ้งดีไซเนอร์', '🚡 กระเช้า Monte Brè', '☕ วัฒนธรรมคาเฟ่สวิส'],
      desc: `ลูกาโนคือเมืองอิตาลีของสวิตเซอร์แลนด์ — สดใส มีสไตล์ และใกล้กับโคโม่อย่างน่าแปลกใจ เดินเล่นบนเส้นทางริมทะเลสาบ เลือกสรรร้านบูติกดีไซเนอร์ และขึ้นกระเช้าไป Monte Brè เพื่อชมวิวอัลไพน์แบบกว้างไกล`,
    }
  },
  {
    id: 'lecco-monte-resegone',
    badge: 'Adventure',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=80',
    img2: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
    img3: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
    en: {
      title: 'Como to Lecco & Monte Resegone',
      subtitle: 'Half-Day Nature Trip',
      duration: '4h',
      type: 'Half day · Private group',
      price: 'Contact for quote',
      highlights: ['⛰️ Dramatic cliff scenery', '🏘️ Manzoni's birthplace', '🌊 Eastern Como arm', '📖 Literary heritage'],
      desc: `Lecco sits at the foot of the Resegone, a dramatic saw-toothed mountain that defines the eastern arm of Lake Como. This is the setting of Alessandro Manzoni's famous novel "The Betrothed" — and the landscapes feel exactly as he described them. Lecco is authentic, less touristy, and surrounded by some of the most dramatic cliff scenery in Lombardy. Perfect for a half-day escape with serious mountain character.`,
    },
    th: {
      title: 'โคโม่ ถึง เลกโค & มอนเต เรเซโกเน',
      subtitle: 'ทริปธรรมชาติครึ่งวัน',
      duration: '4 ชม.',
      type: 'ครึ่งวัน · กลุ่มส่วนตัว',
      price: 'ติดต่อเพื่อรับราคา',
      highlights: ['⛰️ ทิวทัศน์หน้าผาที่น่าตื่นเต้น', '🏘️ บ้านเกิดของมันโซนี', '🌊 แขนตะวันออกของโคโม่', '📖 มรดกวรรณกรรม'],
      desc: `เลกโคตั้งอยู่ที่ตีนเขาเรเซโกเน ภูเขาที่มีฟันเลื่อยที่น่าทึ่งซึ่งกำหนดแขนตะวันออกของทะเลสาบโคโม่ นี่คือฉากหลังของนวนิยายชื่อดัง "The Betrothed" ของอเลสซานโดร มันโซนี เลกโคเป็นแหล่งท่องเที่ยวที่แท้จริง ไม่แออัด และล้อมรอบด้วยทิวทัศน์หน้าผาที่น่าทึ่งที่สุดในลอมบาร์เดีย`,
    }
  }
];

/* ── Render Trip Cards ── */
function renderTrips() {
  const grid = document.getElementById('tripsGrid');
  if (!grid) return;
  grid.innerHTML = trips.map((t, i) => {
    const d = t[currentLang];
    return `
    <div class="trip-card" onclick="openModal(${i})" role="button" tabindex="0" aria-label="${d.title}">
      <div class="trip-card-img">
        <img src="${t.img}" alt="${d.title}" loading="lazy" />
        ${t.badge ? `<span class="trip-badge ${t.badgeClass || ''}">${t.badge}</span>` : ''}
      </div>
      <div class="trip-card-body">
        <h3>${d.title}</h3>
        <div class="trip-meta">
          <span>⏱ ${d.duration}</span>
          <span>👥 ${currentLang === 'en' ? 'Private group' : 'กลุ่มส่วนตัว'}</span>
        </div>
        <p style="font-size:.83rem;color:#666;margin-bottom:.4rem">${d.subtitle}</p>
        <div class="trip-price">${currentLang === 'en' ? '💬 Contact for quote' : '💬 ติดต่อเพื่อรับราคา'}</div>
      </div>
    </div>`;
  }).join('');

  // keyboard support
  grid.querySelectorAll('.trip-card').forEach((card, i) => {
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(i); });
  });
}

/* ── Open / Close Modal ── */
function openModal(index) {
  const t = trips[index];
  const d = t[currentLang];
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalMeta').innerHTML = `<span>⏱ ${d.duration}</span><span>👥 ${d.type}</span>`;
  document.getElementById('modalDesc').textContent = d.desc;
  document.getElementById('modalHighlights').innerHTML = d.highlights.map(h =>
    `<div class="highlight-item">${h}</div>`
  ).join('');
  document.getElementById('modalImages').innerHTML = `
    <img src="${t.img}" alt="${d.title}" />
    <img src="${t.img2}" alt="" />
    <img src="${t.img3}" alt="" />
  `;
  // localise includes
  document.querySelectorAll('.modal-includes li, .modal-includes h3, .modal-price, .modal-cta').forEach(applyLangAttr);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  gtag('event', 'trip_view', { trip_id: t.id, trip_name: d.title });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Language Toggle ── */
function toggleLang() {
  currentLang = currentLang === 'en' ? 'th' : 'en';
  applyLanguage();
  gtag('event', 'language_switch', { language: currentLang });
}

function applyLanguage() {
  const isEn = currentLang === 'en';
  document.documentElement.lang = isEn ? 'en' : 'th';

  // Toggle button label
  document.getElementById('langToggle').textContent = isEn ? '🇹🇭 Thai' : '🇬🇧 English';

  // All elements with data-en / data-th
  document.querySelectorAll('[data-en]').forEach(applyLangAttr);

  // Contact messenger card
  const contactCard = document.getElementById('contactMessenger');
  if (isEn) {
    contactCard.href = 'https://wa.me/39XXXXXXXXXX?text=Hello%20Italy%20by%20Amy!%20I\'m%20interested%20in%20booking%20a%20trip.';
    contactCard.className = 'contact-card whatsapp-card';
    document.getElementById('contactIcon').textContent = '💬';
  } else {
    contactCard.href = 'https://line.me/ti/p/XXXXXXXXXX';
    contactCard.className = 'contact-card line-card';
    document.getElementById('contactIcon').textContent = '💚';
  }
  document.getElementById('contactLabel').textContent = isEn ? 'Chat on WhatsApp' : 'คุยผ่าน Line';
  document.getElementById('contactSub').textContent = isEn ? 'Quick replies, 7 days a week' : 'ตอบกลับเร็ว 7 วันต่อสัปดาห์';

  // Re-render trip cards
  renderTrips();

  // Update form select options
  updateFormOptions();
}

function applyLangAttr(el) {
  const val = el.getAttribute(`data-${currentLang}`);
  if (val !== null) el.innerHTML = val;
}

function updateFormOptions() {
  const sel = document.getElementById('formService');
  if (!sel) return;
  const opts = sel.querySelectorAll('option[data-en]');
  opts.forEach(applyLangAttr);
  const placeholder = sel.querySelector('option[disabled]');
  if (placeholder) applyLangAttr(placeholder);
}

/* ── Navbar scroll behaviour ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Contact form ── */
function submitForm(e) {
  e.preventDefault();
  const name    = document.getElementById('formName').value.trim();
  const email   = document.getElementById('formEmail').value.trim();
  const service = document.getElementById('formService').value;
  const message = document.getElementById('formMessage').value.trim();

  if (!name || !email || !message) return;

  // In production replace with a real form backend (e.g. Formspree, Netlify Forms)
  const subject = encodeURIComponent(`Italy by Amy – Enquiry: ${service || 'General'}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
  window.location.href = `mailto:hello@italybyamy.com?subject=${subject}&body=${body}`;

  gtag('event', 'contact_form_submit', { service });
}

/* ── Line card CSS (injected once) ── */
const lineStyle = document.createElement('style');
lineStyle.textContent = `.line-card{border-left:4px solid #06C755;text-decoration:none;color:var(--text)}`;
document.head.appendChild(lineStyle);

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderTrips();
  applyLanguage();
});
