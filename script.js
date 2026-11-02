/**
 * ============================================================================
 * ADI SHAKTI MAA VAISHNO BHAVTARNI MANDIR - TITWALA, MAHARASHTRA
 * Production JavaScript • Fully Static & GitHub Pages Ready
 * ============================================================================
 * 
 * DEVOTEES & MANDIR COMMITTEE INSTRUCTIONS:
 * Update the settings inside `TEMPLE_CONFIG` below to customize YouTube links,
 * Bank Details, Timings, Festival events, and Gallery photos without altering
 * any layout code.
 */

'use strict';

/* ==========================================================================
   1. MANDIR CONFIGURATION (Easily Editable Settings)
   ========================================================================== */
const TEMPLE_CONFIG = {
  // Official Temple Identification
  name: "Adi Shakti Maa Vaishno Bhavtarni Mandir",
  location: "Titwala, Taluka Kalyan, District Thane, Maharashtra - 421605, India",

  // 1.1 Live YouTube Darshan Settings
  youtube: {
    // Set to true when an active stream or featured video is available
    hasActiveStream: false,
    // Insert your YouTube Video ID (e.g., 'dQw4w9WgXcQ' from https://youtu.be/dQw4w9WgXcQ)
    videoId: "",
    // Official YouTube Channel link
    channelUrl: "https://www.youtube.com/@AdiShaktiMaaVaishnoBhavtarni",
    // Optional direct livestream URL (if available)
    liveStreamUrl: ""
  },

  // 1.2 Donation Details (NEFT / RTGS / IMPS & UPI)
  // Edit here or in bank-details.json
  donations: {
    upiId: "khushibijal08-2@okaxis", // Kept blank for now - edit in bank-details.json
    qrImagePath: "./assets/donations/donation-qr.png",
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
    payeeName: "Adi Shakti Maa Vaishno Bhavtarni Mandir Trust"
  },

  // 1.3 Google Maps & Navigation
  maps: {
    // Verified Titwala address query
    searchQuery: "Adi Shakti Maa Vaishno Bhavtarni Mandir, Titwala, Maharashtra",
    // Google Maps Embed URL (Standard embed - no paid API key required)
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.986701889508!2d73.2081519!3d19.2934277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79cbe878b30df%3A0xe5a3c861e6955d14!2sTitwala%2C%20Maharashtra%20421605!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    // Direct Directions URL
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Adi+Shakti+Maa+Vaishno+Bhavtarni+Mandir+Titwala+Maharashtra"
  },

  // 1.4 Contact Information (Empty values "" will be hidden automatically)
  contact: {
    phone: "", // e.g. "+91 98765 43210" (Leave blank to hide)
    email: "", // e.g. "seva@adishaktititwala.org" (Leave blank to hide)
    youtube: "https://www.youtube.com/@AdiShaktiMaaVaishnoBhavtarni",
    facebook: "", // Optional Facebook page link
    instagram: "" // Optional Instagram link
  },

  // Festival data fallback: this embedded array keeps the page working if
  // events.json cannot be fetched (for example, when opening festivals.html via file://).
  // Normal edits should be made in events.json; loadEventsFromJson() replaces this array when fetch succeeds.
  // Set isUpcoming: true to include an entry in Upcoming Events. category controls the Festivals filters.
  festivals: [
    {
        "id": "kartik-purnima-deepotsav",
        "category": "pujas",
        "isUpcoming": true,
        "image": "./assets/images/temple-interior.jpg",
        "name": "Kartik Purnima Mahapooja & 1008 Deepotsav",
        "badge": "Upcoming Grand Deepotsav",
        "date": "Kartik Shukla Purnima (Dev Diwali 2026)",
        "timings": "6:00 PM – 10:30 PM (Maha Deepotsav at 7:00 PM)",
        "description": "Auspicious Dev Diwali celebrations featuring special Shringar of Maa Vaishno Bhavtarni, 1008 pure cow ghee earthen lamps illumination, Maha Aarti, and distribution of Kheer Prasad."
    },
    {
        "id": "divya-mata-ki-chowki",
        "category": "chowki",
        "isUpcoming": true,
        "image": "./assets/images/maa-darshan.jpg",
        "name": "Divya Mata Ki Chowki & Akhand Bhajan Sandhya",
        "badge": "Special Chowki",
        "date": "Upcoming Saturday Evening",
        "timings": "7:30 PM – 11:30 PM",
        "description": "Soul-stirring devotional bhajans by renowned bhajan mandalis, Akhand Jyot Darshan, floral offerings at Maa's lotus feet, Ardaas prayer, and 56 Bhog Mahaprasad."
    },
    {
        "id": "magh-gupt-navratri",
        "category": "navratri",
        "isUpcoming": true,
        "image": "./assets/images/gallery/gallery-3.jpg",
        "name": "Magha Gupt Navratri Mahotsav",
        "badge": "Sadhana Utsav",
        "date": "Magha Shukla Pratipada – Navami",
        "timings": "7:00 AM – 10:00 PM Daily",
        "description": "Sacred period for internal spiritual sadhana, Durga Saptashati parayan, Hawan, and special evening aartis seeking divine protection and strength."
    },
    {
        "id": "maha-shivratri",
        "category": "pujas",
        "isUpcoming": true,
        "image": "./assets/images/temple-interior.jpg",
        "name": "Maha Shivratri Mahotsav & Akhand Rudrabhishek",
        "badge": "Maha Shivratri Parv",
        "date": "Phalguna Krishna Chaturdashi",
        "timings": "All-Night 4-Prahar Pujan (6:00 AM – Next Morning 6:00 AM)",
        "description": "Auspicious Shiva-Shakti union celebration featuring continuous Vedic Rudrabhishek, 1008 Bilvapatra archana, milk & honey panchamrit abhishek, and devotional Shiv-Durga aarti."
    },
    {
        "id": "temple-sthapna",
        "category": "pujas",
        "isUpcoming": true,
        "image": "./assets/images/temple-main.jpg",
        "name": "Annual Mandir Sthapna Diwas & Patotsav",
        "badge": "Mandir Foundation Day",
        "date": "Annual Foundation Anniversary",
        "timings": "8:00 AM – 10:00 PM (Maha Bhandara at 1:00 PM)",
        "description": "Commemorating the holy Pran Pratishtha of Adi Shakti Maa Vaishno Bhavtarni with 108 Kalash Pujan, Maha Yagya, Flag hoisting (Dhwajarohan), and Community Mahaprasad for all devotees."
    },
    {
        "id": "hanuman-jayanti-sundarkand",
        "category": "chowki",
        "isUpcoming": true,
        "image": "./assets/images/gallery/gallery-1.jpg",
        "name": "Hanuman Jayanti & Sangeetmay Sundarkand Path",
        "badge": "Sundarkand Mahotsav",
        "date": "Chaitra Shukla Purnima (Hanuman Janmotsav)",
        "timings": "4:30 PM – 9:30 PM (Maha Aarti at 8:00 PM)",
        "description": "Celebration of Shri Hanuman Janmotsav with musical recitation of Shri Sundarkand, sacred Sindoor chola offering, 108 Hanuman Chalisa chanting, and Boondi Mahaprasad distribution."
    },
    {
        "id": "chaitra-navratri",
        "category": "navratri",
        "isUpcoming": true,
        "image": "./assets/images/maa-darshan.jpg",
        "name": "Chaitra Navratri Mahotsav & Ram Navami",
        "badge": "Vasant Navratri",
        "date": "Chaitra Shukla Pratipada – Navami (Spring)",
        "timings": "7:00 AM – 11:00 PM Extended Darshan",
        "description": "Nine sacred days of devotion featuring Ghatasthapana, Akhand Jyot, daily Chandi Path, special floral shringar of Maa Bhavtarni, and grand Kanya Pujan on Ram Navami."
    },
    {
        "id": "weekly-sankirtan",
        "category": "chowki",
        "isUpcoming": true,
        "image": "./assets/images/gallery/gallery-2.jpg",
        "name": "Weekly Tuesday & Saturday Maa Ki Aarti & Kirtan",
        "badge": "Regular Devotional Seva",
        "date": "Every Tuesday & Saturday Evening",
        "timings": "7:00 PM – 8:30 PM",
        "description": "Weekly community devotional gathering where devotees join in traditional dholak, chimta, and harmonium accompanied bhajan kirtan followed by Halwa and Chana prasad."
    },
    {
        "id": "vasant-panchami",
        "category": "pujas",
        "isUpcoming": false,
        "image": "./assets/images/gallery/gallery-1.jpg",
        "name": "Vasant Panchami & Saraswati Devi Avahan",
        "badge": "Saraswati Aradhana",
        "date": "Magha Shukla Panchami (Spring Arrival)",
        "timings": "7:30 AM – 1:00 PM & 4:30 PM – 8:30 PM",
        "description": "Welcoming the auspicious spring season with yellow floral shringar of Maa Vaishno, Saraswati Pujan, book and pen blessings for students, and sweet saffron Kesari prasad."
    },
    {
        "id": "guru-purnima-paduka",
        "category": "pujas",
        "isUpcoming": false,
        "image": "./assets/images/gallery/gallery-2.jpg",
        "name": "Guru Purnima & Sacred Charan Paduka Archana",
        "badge": "Charan Paduka Seva",
        "date": "Ashadha Shukla Purnima (Guru Purnima)",
        "timings": "8:00 AM – 1:00 PM & 5:00 PM – 9:00 PM",
        "description": "Special day of gratitude dedicated to the divine lineage and Charan Paduka worship. Devotees offer Panchamrit snan, sandalwood paste, and fragrant flower garlands at Maa's holy lotus feet."
    },
    {
        "id": "sharad-purnima-kheer",
        "category": "chowki",
        "isUpcoming": false,
        "image": "./assets/images/temple-interior.jpg",
        "name": "Kojagiri (Sharad) Purnima Amrit Kheer Utsav",
        "badge": "Kojagiri Amrit Utsav",
        "date": "Ashwin Shukla Purnima (Midnight Full Moon)",
        "timings": "7:00 PM – 12:30 AM Midnight",
        "description": "Sacred Kojagiri night celebrations with moonlight bhajan sandhya, Lakshmi-Vaishno pujan, and distribution of saffron-cardamom Amrit Kheer kept under the nectar-raining full moon."
    },
    {
        "id": "sharad-navratri",
        "category": "navratri",
        "isUpcoming": false,
        "image": "./assets/images/temple-main.jpg",
        "name": "Sharad Navratri Mahotsav",
        "badge": "Sharad Utsav",
        "date": "Ashwin Shukla Pratipada – Navami (Autumn)",
        "timings": "7:00 AM – 11:00 PM Extended Hours",
        "description": "The most magnificent autumn festival at the temple with 9 days of royal poshak shringar, Tridevi Mahapooja, Dandiya Raas, and thousands of devotees seeking Maa's blessings."
    },
    {
        "id": "vijayadashami",
        "category": "navratri",
        "isUpcoming": false,
        "image": "./assets/images/maa-darshan.jpg",
        "name": "Vijayadashami / Dussehra Utsav",
        "badge": "Victory of Dharma",
        "date": "Ashwin Shukla Dashami",
        "timings": "Special Darshan: 7:00 AM – 10:30 PM",
        "description": "Commemorating the victory of Maa Durga over Mahishasura and righteousness over unrighteousness. Featuring Shastra Pujan, Aparajita Pujan, and distribution of holy Prasad."
    }
],

  // 1.5 Photo Gallery Configuration
  gallery: [
    {
      id: "gal-1",
      category: "darshan",
      titleEn: "Maa Vaishno Bhavtarni Divya Darshan",
      titleHi: "माँ वैष्णो भवतारिणी दिव्य स्वरूप दर्शन",
      titleMr: "आई वैष्णो भवतारिणींचे मंगल दर्शन",
      image: "./assets/images/maa-darshan.jpg",
      captionEn: "Divine Darshan of Maa Vaishno Bhavtarni in royal poshak with Simhavahini roop and celestial mountain backdrop.",
      captionHi: "स्वर्ण श्रृंगार, भव्य मुकुट, छत्र एवं सिंहवाहिनी स्वरूप में माँ वैष्णो भवतारिणी के पावन दर्शन।",
      captionMr: "सुवर्ण शृंगार, दिव्य मुकुट आणि सिंहवाहिनी रूपात आई वैष्णो भवतारिणींचे पावन दर्शन."
    },
    {
      id: "gal-2",
      category: "sanctum",
      titleEn: "Sacred Tridevi Garbhagriha Darbar",
      titleHi: "पावन त्रिदेवी गर्भगृह (महासरस्वती, महाकाली, महालक्ष्मी)",
      titleMr: "पावन त्रिदेवी गाभारा (महासरस्वती, महाकाली, महालक्ष्मी)",
      image: "./assets/images/temple-main.jpg",
      captionEn: "The sacred sanctum of Maa Maha Saraswati, Maa Vaishno / Mahakali, and Maa Maha Lakshmi in royal zardozi poshak.",
      captionHi: "राजसी जरदोजी पोशाक, स्वर्ण मुकुट एवं पुष्प मालाओं से सुशोभित पावन त्रिदेवी गर्भगृह।",
      captionMr: "जरीच्या भरजरी पोशाखात सजलेला महासरस्वती, महाकाली आणि महालक्ष्मींचा पावन गाभारा."
    },
    {
      id: "gal-3",
      category: "paduka",
      titleEn: "Holy Charan Paduka & Pushpa Alankaran",
      titleHi: "पावन श्री चरण पादुका एवं पुष्प अलंकरण",
      titleMr: "पवित्र श्री चरण पादुका व पुष्प शृंगार",
      image: "./assets/images/temple-interior.jpg",
      captionEn: "Sacred silver lotus feet of the Divine Mothers adorned with fresh marigolds, fragrant roses, and golden crowns.",
      captionHi: "गुलाब, गेंदा पुष्प मंडलों एवं स्वर्ण छत्र से अलंकृत जगज्जननी के पावन रजत चरण कमल।",
      captionMr: "गुलाब, झेंडूच्या फुलांनी आणि सुवर्ण मुकुटांनी सजवलेली जगन्मातेची पवित्र रौप्य चरणकमले."
  }
  ]
};

/* ==========================================================================
   2. BUNDLED FALLBACK TRANSLATIONS
   (Ensures 100% functionality on both GitHub Pages and direct file:// opening)
   ========================================================================== */
const FALLBACK_TRANSLATIONS = {
  en: {
    "festivalEvents.kartik-purnima-deepotsav.name": "Kartik Purnima Mahapooja & 1008 Deepotsav",
    "festivalEvents.kartik-purnima-deepotsav.badge": "Upcoming Grand Deepotsav",
    "festivalEvents.kartik-purnima-deepotsav.date": "Kartik Shukla Purnima (Dev Diwali 2026)",
    "festivalEvents.kartik-purnima-deepotsav.timings": "6:00 PM – 10:30 PM (Maha Deepotsav at 7:00 PM)",
    "festivalEvents.kartik-purnima-deepotsav.description": "Auspicious Dev Diwali celebrations featuring special Shringar of Maa Vaishno Bhavtarni, 1008 pure cow ghee earthen lamps illumination, Maha Aarti, and distribution of Kheer Prasad.",
    "festivalEvents.divya-mata-ki-chowki.name": "Divya Mata Ki Chowki & Akhand Bhajan Sandhya",
    "festivalEvents.divya-mata-ki-chowki.badge": "Special Chowki",
    "festivalEvents.divya-mata-ki-chowki.date": "Upcoming Saturday Evening",
    "festivalEvents.divya-mata-ki-chowki.timings": "7:30 PM – 11:30 PM",
    "festivalEvents.divya-mata-ki-chowki.description": "Soul-stirring devotional bhajans by renowned bhajan mandalis, Akhand Jyot Darshan, floral offerings at Maa's lotus feet, Ardaas prayer, and 56 Bhog Mahaprasad.",
    "festivalEvents.magh-gupt-navratri.name": "Magha Gupt Navratri Mahotsav",
    "festivalEvents.magh-gupt-navratri.badge": "Sadhana Utsav",
    "festivalEvents.magh-gupt-navratri.date": "Magha Shukla Pratipada – Navami",
    "festivalEvents.magh-gupt-navratri.timings": "7:00 AM – 10:00 PM Daily",
    "festivalEvents.magh-gupt-navratri.description": "Sacred period for internal spiritual sadhana, Durga Saptashati parayan, Hawan, and special evening aartis seeking divine protection and strength.",
    "festivalEvents.maha-shivratri.name": "Maha Shivratri Mahotsav & Akhand Rudrabhishek",
    "festivalEvents.maha-shivratri.badge": "Maha Shivratri Parv",
    "festivalEvents.maha-shivratri.date": "Phalguna Krishna Chaturdashi",
    "festivalEvents.maha-shivratri.timings": "All-Night 4-Prahar Pujan (6:00 AM – Next Morning 6:00 AM)",
    "festivalEvents.maha-shivratri.description": "Auspicious Shiva-Shakti union celebration featuring continuous Vedic Rudrabhishek, 1008 Bilvapatra archana, milk & honey panchamrit abhishek, and devotional Shiv-Durga aarti.",
    "festivalEvents.temple-sthapna.name": "Annual Mandir Sthapna Diwas & Patotsav",
    "festivalEvents.temple-sthapna.badge": "Mandir Foundation Day",
    "festivalEvents.temple-sthapna.date": "Annual Foundation Anniversary",
    "festivalEvents.temple-sthapna.timings": "8:00 AM – 10:00 PM (Maha Bhandara at 1:00 PM)",
    "festivalEvents.temple-sthapna.description": "Commemorating the holy Pran Pratishtha of Adi Shakti Maa Vaishno Bhavtarni with 108 Kalash Pujan, Maha Yagya, Flag hoisting (Dhwajarohan), and Community Mahaprasad for all devotees.",
    "festivalEvents.hanuman-jayanti-sundarkand.name": "Hanuman Jayanti & Sangeetmay Sundarkand Path",
    "festivalEvents.hanuman-jayanti-sundarkand.badge": "Sundarkand Mahotsav",
    "festivalEvents.hanuman-jayanti-sundarkand.date": "Chaitra Shukla Purnima (Hanuman Janmotsav)",
    "festivalEvents.hanuman-jayanti-sundarkand.timings": "4:30 PM – 9:30 PM (Maha Aarti at 8:00 PM)",
    "festivalEvents.hanuman-jayanti-sundarkand.description": "Celebration of Shri Hanuman Janmotsav with musical recitation of Shri Sundarkand, sacred Sindoor chola offering, 108 Hanuman Chalisa chanting, and Boondi Mahaprasad distribution.",
    "festivalEvents.chaitra-navratri.name": "Chaitra Navratri Mahotsav & Ram Navami",
    "festivalEvents.chaitra-navratri.badge": "Vasant Navratri",
    "festivalEvents.chaitra-navratri.date": "Chaitra Shukla Pratipada – Navami (Spring)",
    "festivalEvents.chaitra-navratri.timings": "7:00 AM – 11:00 PM Extended Darshan",
    "festivalEvents.chaitra-navratri.description": "Nine sacred days of devotion featuring Ghatasthapana, Akhand Jyot, daily Chandi Path, special floral shringar of Maa Bhavtarni, and grand Kanya Pujan on Ram Navami.",
    "festivalEvents.weekly-sankirtan.name": "Weekly Tuesday & Saturday Maa Ki Aarti & Kirtan",
    "festivalEvents.weekly-sankirtan.badge": "Regular Devotional Seva",
    "festivalEvents.weekly-sankirtan.date": "Every Tuesday & Saturday Evening",
    "festivalEvents.weekly-sankirtan.timings": "7:00 PM – 8:30 PM",
    "festivalEvents.weekly-sankirtan.description": "Weekly community devotional gathering where devotees join in traditional dholak, chimta, and harmonium accompanied bhajan kirtan followed by Halwa and Chana prasad.",
    "festivalEvents.vasant-panchami.name": "Vasant Panchami & Saraswati Devi Avahan",
    "festivalEvents.vasant-panchami.badge": "Saraswati Aradhana",
    "festivalEvents.vasant-panchami.date": "Magha Shukla Panchami (Spring Arrival)",
    "festivalEvents.vasant-panchami.timings": "7:30 AM – 1:00 PM & 4:30 PM – 8:30 PM",
    "festivalEvents.vasant-panchami.description": "Welcoming the auspicious spring season with yellow floral shringar of Maa Vaishno, Saraswati Pujan, book and pen blessings for students, and sweet saffron Kesari prasad.",
    "festivalEvents.guru-purnima-paduka.name": "Guru Purnima & Sacred Charan Paduka Archana",
    "festivalEvents.guru-purnima-paduka.badge": "Charan Paduka Seva",
    "festivalEvents.guru-purnima-paduka.date": "Ashadha Shukla Purnima (Guru Purnima)",
    "festivalEvents.guru-purnima-paduka.timings": "8:00 AM – 1:00 PM & 5:00 PM – 9:00 PM",
    "festivalEvents.guru-purnima-paduka.description": "Special day of gratitude dedicated to the divine lineage and Charan Paduka worship. Devotees offer Panchamrit snan, sandalwood paste, and fragrant flower garlands at Maa's holy lotus feet.",
    "festivalEvents.sharad-purnima-kheer.name": "Kojagiri (Sharad) Purnima Amrit Kheer Utsav",
    "festivalEvents.sharad-purnima-kheer.badge": "Kojagiri Amrit Utsav",
    "festivalEvents.sharad-purnima-kheer.date": "Ashwin Shukla Purnima (Midnight Full Moon)",
    "festivalEvents.sharad-purnima-kheer.timings": "7:00 PM – 12:30 AM Midnight",
    "festivalEvents.sharad-purnima-kheer.description": "Sacred Kojagiri night celebrations with moonlight bhajan sandhya, Lakshmi-Vaishno pujan, and distribution of saffron-cardamom Amrit Kheer kept under the nectar-raining full moon.",
    "festivalEvents.sharad-navratri.name": "Sharad Navratri Mahotsav",
    "festivalEvents.sharad-navratri.badge": "Sharad Utsav",
    "festivalEvents.sharad-navratri.date": "Ashwin Shukla Pratipada – Navami (Autumn)",
    "festivalEvents.sharad-navratri.timings": "7:00 AM – 11:00 PM Extended Hours",
    "festivalEvents.sharad-navratri.description": "The most magnificent autumn festival at the temple with 9 days of royal poshak shringar, Tridevi Mahapooja, Dandiya Raas, and thousands of devotees seeking Maa's blessings.",
    "festivalEvents.vijayadashami.name": "Vijayadashami / Dussehra Utsav",
    "festivalEvents.vijayadashami.badge": "Victory of Dharma",
    "festivalEvents.vijayadashami.date": "Ashwin Shukla Dashami",
    "festivalEvents.vijayadashami.timings": "Special Darshan: 7:00 AM – 10:30 PM",
    "festivalEvents.vijayadashami.description": "Commemorating the victory of Maa Durga over Mahishasura and righteousness over unrighteousness. Featuring Shastra Pujan, Aparajita Pujan, and distribution of holy Prasad.",

    "nav.home": "Home",
    "nav.about": "About Temple",
    "nav.liveDarshan": "Live Darshan",
    "nav.timings": "Darshan Timings",
    "nav.festivals": "Festivals & Events",
    "nav.gallery": "Photo Gallery",
    "nav.donations": "Donations",
    "nav.contact": "Contact & Directions",
    "nav.video": "Mandir Video",
    "video.badge": "Sacred Video Darshan",
    "video.title": "Sacred Mandir Video Darshan",
    "video.subtitle": "Watch the sacred Aarti, divine sanctum Darshan, and holy ambiance of Maa Vaishno Bhavtarni Mandir.",
    "video.cardTitle": "Divine Aarti & Temple Sanctum Glimpses",
    "video.cardDesc": "Holy visual Darshan of the divine Tridevi Sanctum, Pavitra Charan Paduka, and the spiritual ambiance of Titwala Dham.",
    "video.btnPlay": "Play Video",
    "video.btnPause": "Pause Video",
    "video.btnFullscreen": "Fullscreen",
    "video.fallbackTitle": "Temple Video Stream",
    "video.fallbackDesc": "Upload your official temple video file named temple-video.mp4 to the assets/videos/ folder in your GitHub repository to stream directly here.",
    "donations.detailsPending": "Bank details will be updated soon",
    "donations.upiPending": "UPI ID will be updated soon",

    "hero.chant": "जय माता दी! | Jai Mata Di!",
    "hero.title": "Adi Shakti Maa Vaishno Bhavtarni Mandir",
    "hero.subtitle": "Sacred Abode of Divine Grace • Titwala, Maharashtra",
    "hero.quote": "“Welcome to the sacred abode of Maa Vaishno Bhavtarni, a place of faith, devotion, peace, and divine blessings. May Maa guide every step of your journey and fill your life with strength, hope, and positivity.”",
    "hero.btnLiveDarshan": "Watch Live Darshan",
    "hero.btnExplore": "Explore the Temple",
    "hero.btnDonate": "Donate to the Mandir",
    "status.badgeOpen": "Temple Open for Darshan",
    "status.badgeBreak": "Afternoon Break (Reopens 4:00 PM)",
    "status.badgeClosed": "Temple Closed (Opens 7:00 AM)",
    "liveDarshan.badge": "Divine Broadcast",
    "liveDarshan.title": "Live YouTube Darshan",
    "liveDarshan.subtitle": "Experience the divine presence and Aarti of Maa Vaishno Bhavtarni from anywhere in the world.",
    "liveDarshan.watchOnYoutube": "Watch on YouTube",
    "liveDarshan.visitChannel": "Visit Official YouTube Channel",
    "liveDarshan.offlineTitle": "Live Stream is Currently Offline",
    "liveDarshan.offlineDesc": "Daily Darshan and special Aarti streams are broadcast during festival celebrations and scheduled Aarti hours. Please visit our official YouTube channel for recorded Darshans, Bhajans, and upcoming live announcements.",
    "liveDarshan.morningAarti": "Morning Aarti: 7:30 AM",
    "liveDarshan.eveningAarti": "Sandhya Aarti: 7:00 PM",
    "liveDarshan.note": "Note: YouTube livestream URL can be configured in script.js by the Mandir administration.",
    "timings.badge": "Darshan Schedule",
    "timings.title": "Temple Opening Timings",
    "timings.subtitle": "Plan your pilgrimage and sacred Darshan according to the daily mandir schedule.",
    "timings.morningTitle": "Morning Darshan",
    "timings.morningHours": "7:00 AM – 2:00 PM",
    "timings.morningNote": "Mangala Darshan, Morning Aarti & Daily Pujas",
    "timings.breakTitle": "Afternoon Break",
    "timings.breakHours": "2:00 PM – 4:00 PM",
    "timings.breakNote": "Mandir sanctum remains closed for Bhog & विश्राम (rest)",
    "timings.eveningTitle": "Evening Darshan",
    "timings.eveningHours": "4:00 PM – 8:30 PM to 9:00 PM",
    "timings.eveningNote": "Sandhya Aarti, Deepotsav & Evening Darshan (Closing varies between 8:30 PM and 9:00 PM)",
    "timings.navratriTitle": "Navratri & Special Functions",
    "timings.navratriHours": "Extended Darshan: 7:00 AM – 11:00 PM",
    "timings.navratriNotice": "“During Navratri and special temple functions, the Mandir remains open from 7:00 AM to 11:00 PM. Please check the latest announcements for any changes.”",
    "about.badge": "Sacred Heritage",
    "about.title": "About Adi Shakti Maa Vaishno Bhavtarni Mandir",
    "about.subtitle": "A sanctuary of devotion, peace, and maternal grace in the holy pilgrim town of Titwala.",
    "about.p1": "Adi Shakti Maa Vaishno Bhavtarni Mandir in Titwala, Maharashtra, is a sacred place dedicated to the Divine Mother. Devotees visit the Mandir to offer prayers, seek Maa's blessings, and find spiritual comfort, courage, and inner peace.",
    "about.p2": "Inspired by the eternal power of Adi Shakti, the Mandir brings devotees together through faith, worship, seva, and festivals. From daily Darshan to the vibrant celebrations of Navratri, every occasion offers an opportunity to deepen devotion and experience the spirit of togetherness.",
    "about.p3": "May Maa Bhavtarni bless every devotee with strength, wisdom, happiness, and prosperity.",
    "about.pillar1Title": "Faith & Devotion",
    "about.pillar1Desc": "Daily prayers, sacred Aarti, and continuous chanting creating an atmosphere of deep tranquility and spiritual upliftment.",
    "about.pillar2Title": "Seva & Community",
    "about.pillar2Desc": "Welcoming pilgrims from across Maharashtra and India with devotion, Prasad distribution, and community support.",
    "about.pillar3Title": "Sanatan Traditions",
    "about.pillar3Desc": "Preserving authentic Vedic rites, vibrant Navratri celebrations, and devotional Chowki events for spiritual growth.",
    "devotional.quote": "“Where there is faith in Maa, there is courage to face every challenge. May Maa Bhavtarni guide us towards peace, compassion, and righteousness.”",
    "devotional.author": "Adi Shakti Maa Vaishno Bhavtarni Mandir • Titwala",
    "festivals.badge": "Sacred Celebrations",
    "festivals.title": "Festivals & Events",
    "festivals.subtitle": "Join us in celebrating auspicious festivals, Chowkis, and devotional gatherings dedicated to Maa Bhavtarni.",
    "festivals.filterAll": "All Events",
    "festivals.filterNavratri": "Navratri Mahotsav",
    "festivals.filterChowki": "Chowki & Kirtan",
    "festivals.filterPujas": "Special Pujas",
    "festivals.btnDetails": "View Details",
    "gallery.badge": "Divine Glimpses",
    "gallery.title": "Temple Photo Gallery",
    "gallery.subtitle": "Immerse yourself in photographs of Maa Bhavtarni's sacred sanctum, mandir architecture, and festival celebrations.",
    "gallery.filterAll": "All Photos",
    "gallery.filterExterior": "Temple Exterior",
    "gallery.filterInterior": "Entrance & Interior",
    "gallery.filterDarshan": "Maa Darshan",
    "gallery.filterNavratri": "Navratri Utsav",
    "gallery.filterChowki": "Bhajan & Chowki",
    "donations.badge": "Devotional Seva",
    "donations.title": "Mandir Donations & Offerings",
    "donations.subtitle": "Support the sacred work, temple upkeep, daily worship, and festival arrangements of Maa's Darbar.",
    "donations.introQuote": "“Your generous contribution supports the Mandir's upkeep, daily worship, festival arrangements, and temple activities. Thank you for your faith and seva. May Maa Bhavtarni bless you and your family.”",
    "donations.qrCardTitle": "UPI & QR Code Donation",
    "donations.qrCardSubtitle": "Scan using any UPI app (GPay, PhonePe, Paytm, BHIM, or your bank app)",
    "donations.downloadQr": "Download QR Code",
    "donations.copyUpi": "Copy UPI ID",
    "donations.copied": "Copied to Clipboard!",
    "donations.payViaUpi": "Pay via UPI App",
    "donations.bankCardTitle": "Bank Transfer (NEFT / RTGS / IMPS)",
    "donations.bankCardSubtitle": "Direct bank transfer details for temple seva and offerings",
    "donations.lblAccHolder": "Account Holder Name",
    "donations.lblBankName": "Bank Name",
    "donations.lblAccNumber": "Account Number",
    "donations.lblIfsc": "IFSC Code",
    "donations.lblBranch": "Branch Name",
    "donations.lblUpiId": "UPI ID",
    "donations.copy": "Copy",
    "donations.copyAllBank": "Copy All Bank Details",
    "donations.disclaimer": "Important Notice: Please verify all bank details carefully before initiating transfers. The Mandir administration never calls asking for OTPs, PINs, or confidential banking information.",
    "directions.badge": "Visit the Mandir",
    "directions.title": "Location & How to Reach",
    "directions.subtitle": "Adi Shakti Maa Vaishno Bhavtarni Mandir is situated in the peaceful pilgrimage town of Titwala, Maharashtra.",
    "directions.addressTitle": "Temple Address",
    "directions.address": "Adi Shakti Maa Vaishno Bhavtarni Mandir, Titwala, Taluka Kalyan, District Thane, Maharashtra - 421605, India",
    "directions.btnDirections": "Get Directions on Google Maps",
    "directions.btnOpenMaps": "Open in Google Maps",
    "contact.badge": "Connect With Us",
    "contact.title": "Contact & Devotee Information",
    "contact.subtitle": "For Darshan queries, Pooja bookings, Chowki arrangements, or Mandir seva information.",
    "contact.addressLabel": "Mandir Address",
    "contact.phoneLabel": "Temple Helpline",
    "contact.emailLabel": "Email Address",
    "contact.youtubeLabel": "Official YouTube Channel",
    "contact.socialLabel": "Follow & Connect",
    "footer.chant": "जय माता दी! • Jai Mata Di!",
    "footer.templeName": "Adi Shakti Maa Vaishno Bhavtarni Mandir",
    "footer.tagline": "Titwala, Maharashtra, India • A Sacred Abode of Peace & Blessings",
    "footer.quickLinks": "Quick Navigation",
    "footer.timingsHeading": "Daily Darshan Hours",
    "footer.morning": "Morning: 7:00 AM – 2:00 PM",
    "footer.break": "Break: 2:00 PM – 4:00 PM",
    "footer.evening": "Evening: 4:00 PM – 8:30 PM / 9:00 PM",
    "footer.navratri": "Navratri: 7:00 AM – 11:00 PM",
    "footer.language": "Select Language",
    "footer.rights": "All Rights Reserved. Dedicated with love and devotion to Maa Vaishno Bhavtarni.",
    "footer.backToTop": "Back to Top"
  },
  hi: {
    "festivalEvents.kartik-purnima-deepotsav.name": "कार्तिक पूर्णिमा महापूजा एवं 1008 दीपदान",
    "festivalEvents.kartik-purnima-deepotsav.badge": "Upcoming Grand Deepotsav",
    "festivalEvents.kartik-purnima-deepotsav.date": "कार्तिक शुक्ल पूर्णिमा (देव दीपावली 2026)",
    "festivalEvents.kartik-purnima-deepotsav.timings": "सायं 6:00 – रात्रि 10:30 (भव्य महादीपदान सायं 7:00 बजे)",
    "festivalEvents.kartik-purnima-deepotsav.description": "देव दीपावली का पावन महापर्व। माँ वैष्णो का अलौकिक श्वेत-स्वर्ण श्रृंगार, 1008 शुद्ध गोघृत दीपकों का भव्य दीपोत्सव, महाआरती एवं पंचामृत खीर महाप्रसाद वितरण।",
    "festivalEvents.divya-mata-ki-chowki.name": "दिव्य माता की पावन चौकी एवं भजन संध्या",
    "festivalEvents.divya-mata-ki-chowki.badge": "Special Chowki",
    "festivalEvents.divya-mata-ki-chowki.date": "आगामी शनिवार सायं 7:30 बजे",
    "festivalEvents.divya-mata-ki-chowki.timings": "सायं 7:30 – रात्रि 11:30",
    "festivalEvents.divya-mata-ki-chowki.description": "सुप्रसिद्ध भजन मंडलियों द्वारा भावपूर्ण देवी भजन, अखंड पावन ज्योति दर्शन, माँ के चरणों में अरदास एवं छप्पन भोग महाप्रसाद वितरण। समस्त श्रद्धालु सपरिवार सादर आमंत्रित हैं।",
    "festivalEvents.magh-gupt-navratri.name": "माघ गुप्त नवरात्रि महोत्सव एवं नवचंडी पाठ",
    "festivalEvents.magh-gupt-navratri.badge": "Sadhana Utsav",
    "festivalEvents.magh-gupt-navratri.date": "माघ शुक्ल प्रतिपदा – नवमी",
    "festivalEvents.magh-gupt-navratri.timings": "प्रातः 7:00 – रात्रि 10:00 प्रतिदिन",
    "festivalEvents.magh-gupt-navratri.description": "आंतरिक आध्यात्मिक साधना, दुर्गा सप्तशती पाठ, नित्य महाहवन एवं माँ भगवती के गुप्त स्वरूपों की विशेष आराधना का पावन काल।",
    "festivalEvents.maha-shivratri.name": "महाशिवरात्रि महोत्सव एवं अखंड रुद्राभिषेक",
    "festivalEvents.maha-shivratri.badge": "Maha Shivratri Parv",
    "festivalEvents.maha-shivratri.date": "फाल्गुन कृष्ण चतुर्दशी (महाशिवरात्रि)",
    "festivalEvents.maha-shivratri.timings": "अहोरात्र चार प्रहर पूजन (प्रातः 6:00 – अगले दिन प्रातः 6:00)",
    "festivalEvents.maha-shivratri.description": "शिव-शक्ति मिलन का पावन महापर्व। चारों प्रहर अखंड वैदिक रुद्राभिषेक, 1008 बिल्वपत्र अर्चन, पंचामृत अभिषेक एवं रात्रि जागरण शिव संकीर्तन।",
    "festivalEvents.temple-sthapna.name": "वार्षिक मंदिर स्थापना दिवस एवं पाटोत्सव",
    "festivalEvents.temple-sthapna.badge": "Mandir Foundation Day",
    "festivalEvents.temple-sthapna.date": "वार्षिक पाटोत्सव दिवस",
    "festivalEvents.temple-sthapna.timings": "प्रातः 8:00 – रात्रि 10:00 (विशाल महाभंडारा दोपहर 1:00 बजे)",
    "festivalEvents.temple-sthapna.description": "माँ वैष्णो भवतारिणी की पावन प्राण-प्रतिष्ठा वर्षगांठ। 108 कलश महाभिषेक, ध्वजारोहण, विशाल शतचंडी महायज्ञ एवं समस्त भक्तों हेतु अखंड महाप्रसाद।",
    "festivalEvents.hanuman-jayanti-sundarkand.name": "हनुमान जयंती एवं संगीतमय सुंदरकांड पाठ",
    "festivalEvents.hanuman-jayanti-sundarkand.badge": "Sundarkand Mahotsav",
    "festivalEvents.hanuman-jayanti-sundarkand.date": "चैत्र शुक्ल पूर्णिमा (हनुमान जन्मोत्सव)",
    "festivalEvents.hanuman-jayanti-sundarkand.timings": "सायं 4:30 – रात्रि 9:30 (महाआरती सायं 8:00 बजे)",
    "festivalEvents.hanuman-jayanti-sundarkand.description": "पवनपुत्र हनुमान जन्मोत्सव का पावन पर्व। सुमधुर वाद्य यंत्रों सहित संगीतमय सुंदरकांड पाठ, सिंदूर चोला अर्पण, 108 हनुमान चालीसा पाठ एवं बूंदी महाप्रसाद।",
    "festivalEvents.chaitra-navratri.name": "चैत्र नवरात्रि महोत्सव एवं राम नवमी",
    "festivalEvents.chaitra-navratri.badge": "Vasant Navratri",
    "festivalEvents.chaitra-navratri.date": "चैत्र शुक्ल प्रतिपदा – नवमी (वसंत नवरात्र)",
    "festivalEvents.chaitra-navratri.timings": "प्रातः 7:00 – रात्रि 11:00 विस्तारित दर्शन",
    "festivalEvents.chaitra-navratri.description": "घटस्थापना, अखंड पावन ज्योति, नित्य चंडी पाठ, माँ वैष्णो का अलौकिक पुष्प श्रृंगार एवं महानवमी पर 108 कन्या पूजन व विशाल भंडारा।",
    "festivalEvents.weekly-sankirtan.name": "साप्ताहिक मंगलवार व शनिवार विशेष आरती एवं कीर्तन",
    "festivalEvents.weekly-sankirtan.badge": "Regular Devotional Seva",
    "festivalEvents.weekly-sankirtan.date": "प्रत्येक मंगलवार एवं शनिवार सायं",
    "festivalEvents.weekly-sankirtan.timings": "सायं 7:00 – 8:30",
    "festivalEvents.weekly-sankirtan.description": "साप्ताहिक पावन संकीर्तन संध्या। ढोलक-मंजीरों के साथ माँ के भजनों का आनंद, सामूहिक महाआरती एवं हलवा-चना प्रसाद वितरण।",
    "festivalEvents.vasant-panchami.name": "वसंत पंचमी एवं माँ सरस्वती महापूजा",
    "festivalEvents.vasant-panchami.badge": "Saraswati Aradhana",
    "festivalEvents.vasant-panchami.date": "माघ शुक्ल पंचमी (ऋतुराज वसंत आगमन)",
    "festivalEvents.vasant-panchami.timings": "प्रातः 7:30 – दोपहर 1:00 एवं सायं 4:30 – 8:30",
    "festivalEvents.vasant-panchami.description": "माँ भगवती का पीत वस्त्र एवं पुष्प श्रृंगार। ज्ञानदायिनी माँ सरस्वती की विशेष पूजा, विद्यार्थियों हेतु विद्यारंभ आशीर्वाद एवं पावन केसरी भात प्रसाद वितरण।",
    "festivalEvents.guru-purnima-paduka.name": "गुरु पूर्णिमा एवं श्री चरण पादुका महापूजन",
    "festivalEvents.guru-purnima-paduka.badge": "Charan Paduka Seva",
    "festivalEvents.guru-purnima-paduka.date": "आषाढ़ शुक्ल पूर्णिमा (गुरु पूर्णिमा)",
    "festivalEvents.guru-purnima-paduka.timings": "प्रातः 8:00 – दोपहर 1:00 एवं सायं 5:00 – 9:00",
    "festivalEvents.guru-purnima-paduka.description": "माँ वैष्णो के दिव्य चरण पादुकाओं का पंचामृत महाभिषेक, केशर-चंदन लेपन, सहस्त्रार्चन एवं गुरु कृपा प्राप्ति हेतु विशेष प्रार्थना सभा।",
    "festivalEvents.sharad-purnima-kheer.name": "कोजागिरी पूर्णिमा अमृत खीर महामहोत्सव",
    "festivalEvents.sharad-purnima-kheer.badge": "Kojagiri Amrit Utsav",
    "festivalEvents.sharad-purnima-kheer.date": "आश्विन शुक्ल पूर्णिमा (शरद पूर्णिमा निशा)",
    "festivalEvents.sharad-purnima-kheer.timings": "सायं 7:00 – मध्यरात्रि 12:30",
    "festivalEvents.sharad-purnima-kheer.description": "शरद पूर्णिमा की अमृतमयी धवल चांदनी में भव्य संकीर्तन। माँ लक्ष्मी-वैष्णो विशेष पूजन एवं चांदनी में अभिमंत्रित अमृततुल्य खीर महाप्रसाद वितरण।",
    "festivalEvents.sharad-navratri.name": "शारदीय नवरात्रि महामहोत्सव",
    "festivalEvents.sharad-navratri.badge": "Sharad Utsav",
    "festivalEvents.sharad-navratri.date": "आश्विन शुक्ल प्रतिपदा – नवमी (शरद ऋतु)",
    "festivalEvents.sharad-navratri.timings": "प्रातः 7:00 – रात्रि 11:00 निरंतर दर्शन",
    "festivalEvents.sharad-navratri.description": "आदि शक्ति का भव्यतम शारदीय उत्सव। 9 दिनों तक माँ का दिव्य जरदोजी श्रृंगार, विशेष हवन, गरबा व डांडिया रास तथा महाअष्टमी को भव्य महाआरती।",
    "festivalEvents.vijayadashami.name": "विजयादशमी / दशहरा महापर्व",
    "festivalEvents.vijayadashami.badge": "Victory of Dharma",
    "festivalEvents.vijayadashami.date": "आश्विन शुक्ल दशमी",
    "festivalEvents.vijayadashami.timings": "विशेष दर्शन: प्रातः 7:00 – रात्रि 10:30",
    "festivalEvents.vijayadashami.description": "अधर्म पर धर्म और असत्य पर सत्य की विजय का महापर्व। माँ अपराजिता पूजन, आयुध पूजन एवं स्वर्ण पत्ती (आपटा) व पावन महाप्रसाद वितरण।",

    "nav.home": "मुख्य पृष्ठ",
    "nav.about": "मंदिर परिचय",
    "nav.liveDarshan": "लाइव दर्शन",
    "nav.timings": "दर्शन समय",
    "nav.festivals": "त्योहार एवं उत्सव",
    "nav.gallery": "चित्र दीर्घा",
    "nav.donations": "दान एवं सेवा",
    "nav.contact": "संपर्क व मार्ग",
    "hero.chant": "जय माता दी! | Jai Mata Di!",
    "hero.title": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर",
    "hero.subtitle": "दिव्य कृपा एवं आस्था का पावन धाम • टिटवाला, महाराष्ट्र",
    "hero.quote": "“माँ वैष्णो भवतारिणी के पावन धाम में आपका स्वागत है, जो श्रद्धा, भक्ति, शांति और दिव्य कृपा का केंद्र है। माँ आपके जीवन के हर कदम पर मार्गदर्शन करें और आपके जीवन को शक्ति, आशा और सकारात्मकता से परिपूर्ण करें।”",
    "hero.btnLiveDarshan": "लाइव दर्शन देखें",
    "hero.btnExplore": "मंदिर की जानकारी",
    "hero.btnDonate": "मंदिर हेतु दान / सेवा",
    "status.badgeOpen": "मंदिर दर्शन हेतु खुला है",
    "status.badgeBreak": "दोपहर विश्राम (पुनः 4:00 बजे खुलेगा)",
    "status.badgeClosed": "मंदिर बंद है (प्रातः 7:00 बजे खुलेगा)",
    "liveDarshan.badge": "सीधा प्रसारण",
    "liveDarshan.title": "लाइव यूट्यूब दर्शन",
    "liveDarshan.subtitle": "विश्व के किसी भी कोने से माँ वैष्णो भवतारिणी के पावन दर्शन एवं आरती का पुण्य लाभ प्राप्त करें।",
    "liveDarshan.watchOnYoutube": "यूट्यूब पर देखें",
    "liveDarshan.visitChannel": "आधिकारिक यूट्यूब चैनल देखें",
    "liveDarshan.offlineTitle": "लाइव प्रसारण वर्तमान में बंद है",
    "liveDarshan.offlineDesc": "दैनिक दर्शन एवं विशेष आरती का सीधा प्रसारण प्रमुख त्योहारों एवं निर्धारित आरती समय पर किया जाता है। पूर्व दर्शन, भजन एवं आगामी प्रसारण सूचनाओं हेतु हमारे आधिकारिक यूट्यूब चैनल पर पधारें।",
    "liveDarshan.morningAarti": "प्रातः आरती: सुबह 7:30 बजे",
    "liveDarshan.eveningAarti": "संध्या आरती: शाम 7:00 बजे",
    "liveDarshan.note": "सूचना: यूट्यूब लाइव लिंक मंदिर प्रबंधन द्वारा script.js में सीधे अपडेट किया जा सकता है।",
    "timings.badge": "दर्शन सारणी",
    "timings.title": "मंदिर खुलने का समय",
    "timings.subtitle": "दैनिक दर्शन समय के अनुसार अपनी तीर्थ यात्रा और पावन दर्शन की योजना बनाएं।",
    "timings.morningTitle": "प्रातःकालीन दर्शन",
    "timings.morningHours": "प्रातः 7:00 बजे – दोपहर 2:00 बजे",
    "timings.morningNote": "मंगला दर्शन, प्रातः आरती एवं दैनिक पूजा-अर्चना",
    "timings.breakTitle": "दोपहर विश्राम समय",
    "timings.breakHours": "दोपहर 2:00 बजे – शाम 4:00 बजे",
    "timings.breakNote": "भोग एवं विश्राम हेतु मंदिर गर्भगृह बंद रहता है",
    "timings.eveningTitle": "सायंकालीन दर्शन",
    "timings.eveningHours": "शाम 4:00 बजे – रात्रि 8:30 से 9:00 बजे तक",
    "timings.eveningNote": "संध्या आरती, दीपोत्सव एवं शयन दर्शन (रात्रि समापन 8:30 से 9:00 बजे के मध्य)",
    "timings.navratriTitle": "नवरात्रि एवं विशेष उत्सव",
    "timings.navratriHours": "विस्तारित दर्शन: प्रातः 7:00 बजे – रात्रि 11:00 बजे",
    "timings.navratriNotice": "“नवरात्रि और मंदिर के विशेष उत्सवों के दौरान, मंदिर प्रातः 7:00 बजे से रात्रि 11:00 बजे तक खुला रहता है। किसी भी बदलाव के लिए कृपया नवीनतम सूचनाएं देखें।”",
    "about.badge": "पवित्र इतिहास एवं महिमा",
    "about.title": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर के बारे में",
    "about.subtitle": "टिटवाला के पावन तीर्थ क्षेत्र में भक्ति, शांति और मातृकृपा का अनुपम केंद्र।",
    "about.p1": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर, टिटवाला, महाराष्ट्र, जगज्जननी भगवती को समर्पित एक पावन तीर्थ स्थल है। श्रद्धालु माँ के दर्शन करने, उनका आशीर्वाद पाने और आत्मिक शांति, साहस व संबल प्राप्त करने मंदिर आते हैं।",
    "about.p2": "आदि शक्ति की सनातन शक्ति से प्रेरित यह मंदिर आस्था, पूजा-अर्चना, सेवा और उत्सवों के माध्यम से भक्तों को एक सूत्र में पिरोता है। दैनिक दर्शन से लेकर नवरात्रि के भव्य आयोजनों तक, प्रत्येक अवसर भक्ति को प्रगाढ़ करने और एकता का अनुभव करने का सुअवसर प्रदान करता है।",
    "about.p3": "माँ भवतारिणी प्रत्येक भक्त को शक्ति, सद्बुद्धि, सुख और समृद्धि का आशीर्वाद प्रदान करें।",
    "about.pillar1Title": "आस्था एवं भक्ति",
    "about.pillar1Desc": "दैनिक पूजा, मंत्रोच्चार और आरती से मंदिर परिसर में अत्यंत शांति और दिव्यता का संचार होता है।",
    "about.pillar2Title": "सेवा एवं समाज",
    "about.pillar2Desc": "महाराष्ट्र एवं संपूर्ण भारत से आने वाले श्रद्धालुओं के लिए प्रसाद वितरण, सहायता और आदर सत्कार।",
    "about.pillar3Title": "सनातन परंपरा",
    "about.pillar3Desc": "वैदिक अनुष्ठान, भव्य नवरात्रि महोत्सव, अखंड ज्योत और पावन माता की चौकी का निरंतर आयोजन।",
    "devotional.quote": "“जहाँ माँ पर विश्वास है, वहाँ हर कठिनाई का सामना करने की शक्ति है। माँ भवतारिणी सभी पर अपनी कृपा बनाए रखें।”",
    "devotional.author": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर • टिटवाला",
    "festivals.badge": "धार्मिक उत्सव",
    "festivals.title": "त्योहार एवं विशेष आयोजन",
    "festivals.subtitle": "माँ भगवती के पावन पर्वों, माता की चौकी और भक्ति संध्या में सम्मिलित हों।",
    "festivals.filterAll": "सभी आयोजन",
    "festivals.filterNavratri": "नवरात्रि महोत्सव",
    "festivals.filterChowki": "माता की चौकी व कीर्तन",
    "festivals.filterPujas": "विशेष पूजा व हवन",
    "festivals.btnDetails": "विस्तार से देखें",
    "gallery.badge": "अलौकिक दर्शन",
    "gallery.title": "मंदिर चित्र दीर्घा",
    "gallery.subtitle": "माँ वैष्णो भवतारिणी के दिव्य स्वरूप, मंदिर परिसर और उत्सवों के विहंगम दृश्य।",
    "gallery.filterAll": "सभी छायाचित्र",
    "gallery.filterExterior": "मंदिर बाह्य स्वरूप",
    "gallery.filterInterior": "प्रवेश द्वार व आंतरिक दृश्य",
    "gallery.filterDarshan": "माँ का पावन दर्शन",
    "gallery.filterNavratri": "नवरात्रि उत्सव",
    "gallery.filterChowki": "भजन व चौकी",
    "donations.badge": "समर्पण एवं सेवा",
    "donations.title": "मंदिर दान एवं सहयोग",
    "donations.subtitle": "मंदिर व्यवस्था, दैनिक पूजन, भंडारा और धार्मिक आयोजनों में अपना सहयोग प्रदान करें।",
    "donations.introQuote": "“आपका उदार सहयोग मंदिर के रखरखाव, दैनिक पूजा-अर्चना, उत्सव व्यवस्था और मंदिर गतिविधियों में सहायक होता है। आपकी श्रद्धा और सेवा के लिए धन्यवाद। माँ भवतारिणी आप और आपके परिवार पर सदा कृपा बनाए रखें।”",
    "donations.qrCardTitle": "UPI एवं QR कोड द्वारा दान",
    "donations.qrCardSubtitle": "किसी भी UPI ऐप (GPay, PhonePe, Paytm, BHIM आदि) द्वारा स्कैन कर दान करें",
    "donations.downloadQr": "QR कोड डाउनलोड करें",
    "donations.copyUpi": "UPI ID कॉपी करें",
    "donations.copied": "कॉपी हो गया!",
    "donations.payViaUpi": "UPI ऐप से भुगतान करें",
    "donations.bankCardTitle": "बैंक ट्रांसफर (NEFT / RTGS / IMPS)",
    "donations.bankCardSubtitle": "सीधे बैंक खाते में मंदिर सेवा एवं दान हेतु विवरण",
    "donations.lblAccHolder": "खाता धारक का नाम",
    "donations.lblBankName": "बैंक का नाम",
    "donations.lblAccNumber": "खाता संख्या (Account Number)",
    "donations.lblIfsc": "IFSC कोड",
    "donations.lblBranch": "शाखा (Branch)",
    "donations.lblUpiId": "UPI ID",
    "donations.copy": "कॉपी",
    "donations.copyAllBank": "संपूर्ण बैंक विवरण कॉपी करें",
    "donations.disclaimer": "महत्वपूर्ण सूचना: कृपया किसी भी वित्तीय अंतरण से पूर्व बैंक विवरण की भली-भाँति जांच कर लें। मंदिर प्रबंधन कभी भी फोन पर OTP, PIN या गुप्त वित्तीय जानकारी नहीं मांगता।",
    "directions.badge": "मंदिर आगमन",
    "directions.title": "स्थान एवं पहुँचने का मार्ग",
    "directions.subtitle": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर ऐतिहासिक तीर्थ नगरी टिटवाला, महाराष्ट्र में स्थित है।",
    "directions.addressTitle": "मंदिर का पता",
    "directions.address": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर, टिटवाला, तालुका कल्याण, जिला ठाणे, महाराष्ट्र - 421605, भारत",
    "directions.btnDirections": "गूगल मैप्स पर मार्ग देखें",
    "directions.btnOpenMaps": "गूगल मैप्स में खोलें",
    "contact.badge": "संपर्क सूत्र",
    "contact.title": "संपर्क एवं श्रद्धालु सहायता",
    "contact.subtitle": "दर्शन संबंधी जानकारी, पूजा अनुष्ठान या सेवा हेतु संपर्क करें।",
    "contact.addressLabel": "मंदिर का पता",
    "contact.phoneLabel": "मंदिर हेल्पलाइन",
    "contact.emailLabel": "ईमेल पता",
    "contact.youtubeLabel": "आधिकारिक यूट्यूब चैनल",
    "contact.socialLabel": "सोशल मीडिया संपर्क",
    "footer.chant": "जय माता दी! • Jai Mata Di!",
    "footer.templeName": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर",
    "footer.tagline": "टिटवाला, महाराष्ट्र, भारत • शांति, भक्ति एवं दिव्य आशीर्वाद का केंद्र",
    "footer.quickLinks": "त्वरित नेविगेशन",
    "footer.timingsHeading": "दैनिक दर्शन समय",
    "footer.morning": "प्रातः: 7:00 बजे – 2:00 बजे",
    "footer.break": "विश्राम: 2:00 बजे – 4:00 बजे",
    "footer.evening": "सायं: 4:00 बजे – 8:30 / 9:00 बजे",
    "footer.navratri": "नवरात्रि: 7:00 बजे – 11:00 बजे",
    "footer.language": "भाषा चुनें",
    "footer.rights": "सर्वाधिकार सुरक्षित। माँ वैष्णो भवतारिणी के चरणों में सप्रेम समर्पित।",
    "footer.backToTop": "शीर्ष पर जाएं"
  },
  mr: {
    "festivalEvents.kartik-purnima-deepotsav.name": "कार्तिक पौर्णिमा महापूजा व 1008 दीपदान सोहळा",
    "festivalEvents.kartik-purnima-deepotsav.badge": "Upcoming Grand Deepotsav",
    "festivalEvents.kartik-purnima-deepotsav.date": "कार्तिक शुक्ल पौर्णिमा (त्रिपुरारी पौर्णिमा / देव दिवाळी 2026)",
    "festivalEvents.kartik-purnima-deepotsav.timings": "संध्याकाळी 6:00 ते रात्री 10:30 (महादीपदान संध्याकाळी 7:00 वाजता)",
    "festivalEvents.kartik-purnima-deepotsav.description": "देव दिवाळी व त्रिपुरारी पौर्णिमेचा पावन उत्सव. आई वैष्णो भवतीरिणींचा विशेष सुवर्ण शृंगार, 1008 शुद्ध तुपाच्या दिव्यांचे महादीपदान, महाआरती व खीर महाप्रसाद वाटप.",
    "festivalEvents.divya-mata-ki-chowki.name": "दिव्य माता की पावन चौकी व भजन संध्या",
    "festivalEvents.divya-mata-ki-chowki.badge": "Special Chowki",
    "festivalEvents.divya-mata-ki-chowki.date": "आगामी शनिवारी संध्याकाळी 7:30 वाजता",
    "festivalEvents.divya-mata-ki-chowki.timings": "संध्याकाळी 7:30 ते रात्री 11:30",
    "festivalEvents.divya-mata-ki-chowki.description": "प्रसिद्ध भजन मंडळांद्वारे भावपूर्ण भक्तीगीते, अखंड ज्योत दर्शन, आईंच्या चरणी प्रार्थना आणि छप्पन भोग महाप्रसाद वाटप.",
    "festivalEvents.magh-gupt-navratri.name": "माघ गुप्त नवरात्रौत्सव व नवचंडी पाठ",
    "festivalEvents.magh-gupt-navratri.badge": "Sadhana Utsav",
    "festivalEvents.magh-gupt-navratri.date": "माघ शुक्ल प्रतिपदा – नवमी",
    "festivalEvents.magh-gupt-navratri.timings": "दररोज सकाळी 7:00 ते रात्री 10:00",
    "festivalEvents.magh-gupt-navratri.description": "आत्मिक साधना, दुर्गा सप्तशती पारायण, नित्य महाहवन आणि आई भगवतींच्या गुप्त रूपांची पावन उपासना.",
    "festivalEvents.maha-shivratri.name": "महाशिवरात्री महोत्सव व अखंड रुद्राभिषेक",
    "festivalEvents.maha-shivratri.badge": "Maha Shivratri Parv",
    "festivalEvents.maha-shivratri.date": "फाल्गुन कृष्ण चतुर्दशी (महाशिवरात्र)",
    "festivalEvents.maha-shivratri.timings": "अखंड चार प्रहर पूजा (सकाळी 6:00 ते दुसऱ्या दिवशी सकाळी 6:00)",
    "festivalEvents.maha-shivratri.description": "शिव-शक्तीच्या पवित्र मिलनाचे महापर्व. चारही प्रहर अखंड वैदिक रुद्राभिषेक, 1008 बेलपत्र अर्पण, पंचामृत स्नान व रात्रभर शिव संकीर्तन.",
    "festivalEvents.temple-sthapna.name": "वार्षिक मंदिर स्थापना दिन व पाटोत्सव सोहळा",
    "festivalEvents.temple-sthapna.badge": "Mandir Foundation Day",
    "festivalEvents.temple-sthapna.date": "वार्षिक पाटोत्सव सोहळा दिन",
    "festivalEvents.temple-sthapna.timings": "सकाळी 8:00 ते रात्री 10:00 (महाप्रसाद दुपारी 1:00 वाजता)",
    "festivalEvents.temple-sthapna.description": "आई वैष्णो भवतारिणींच्या पावन प्राण-प्रतिष्ठा वर्धापन दिन. 108 कलश महाभिषेक, ध्वजारोहण, महायज्ञ आणि सर्व भाविकांसाठी भव्य महाप्रसाद वाटप.",
    "festivalEvents.hanuman-jayanti-sundarkand.name": "हनुमान जयंती व संगीतमय सुंदरकांड पाठ",
    "festivalEvents.hanuman-jayanti-sundarkand.badge": "Sundarkand Mahotsav",
    "festivalEvents.hanuman-jayanti-sundarkand.date": "चैत्र शुक्ल पौर्णिमा (हनुमान जन्मोत्सव)",
    "festivalEvents.hanuman-jayanti-sundarkand.timings": "संध्याकाळी 4:30 ते रात्री 9:30 (महाआरती सायं 8:00 वाजता)",
    "festivalEvents.hanuman-jayanti-sundarkand.description": "श्री हनुमान जन्मोत्सव सोहळा. वाद्यांच्या गजरात संगीतमय सुंदरकांड पाठ, सिंदूर चोला अर्पण, 108 हनुमान चालीसा पाठ व बुंदी महाप्रसाद वाटप.",
    "festivalEvents.chaitra-navratri.name": "चैत्र नवरात्रौत्सव व राम नवमी सोहळा",
    "festivalEvents.chaitra-navratri.badge": "Vasant Navratri",
    "festivalEvents.chaitra-navratri.date": "चैत्र शुक्ल प्रतिपदा – नवमी (वसंत नवरात्र)",
    "festivalEvents.chaitra-navratri.timings": "सकाळी 7:00 ते रात्री 11:00 विस्तारित दर्शन",
    "festivalEvents.chaitra-navratri.description": "घटस्थापना, अखंड ज्योत, नित्य चंडी पाठ, आईंचा दिव्य पुष्प शृंगार आणि महानवमीच्या दिवशी महाकन्या पूजनासह नऊ दिवसांचा पावन सोहळा.",
    "festivalEvents.weekly-sankirtan.name": "साप्ताहिक मंगळवार व शनिवार विशेष आरती व कीर्तन",
    "festivalEvents.weekly-sankirtan.badge": "Regular Devotional Seva",
    "festivalEvents.weekly-sankirtan.date": "प्रत्येक मंगळवारी व शनिवारी संध्याकाळी",
    "festivalEvents.weekly-sankirtan.timings": "संध्याकाळी 7:00 ते 8:30",
    "festivalEvents.weekly-sankirtan.description": "साप्ताहिक भक्ती संकीर्तन संध्या. ढोलक आणि टाळांच्या गजरात भक्तीगीते, सामूहिक महाआरती व हलवा-हरभरा प्रसादाचे वाटप.",
    "festivalEvents.vasant-panchami.name": "वसंत पंचमी व सरस्वती देवी महापूजा",
    "festivalEvents.vasant-panchami.badge": "Saraswati Aradhana",
    "festivalEvents.vasant-panchami.date": "माघ शुक्ल पंचमी (वसंत आगमन सोहळा)",
    "festivalEvents.vasant-panchami.timings": "सकाळी 7:30 ते दुपारी 1:00 आणि संध्याकाळी 4:30 ते 8:30",
    "festivalEvents.vasant-panchami.description": "आई वैष्णो भवतीरिणींचा पिवळ्या फुलांचा शृंगार, ज्ञानदात्री सरस्वती मातेची विशेष पूजा, विद्यार्थ्यांसाठी आशीर्वाद व पावन केसरी प्रसादाचे वाटप.",
    "festivalEvents.guru-purnima-paduka.name": "गुरु पौर्णिमा व श्री चरण पादुका महापूजन",
    "festivalEvents.guru-purnima-paduka.badge": "Charan Paduka Seva",
    "festivalEvents.guru-purnima-paduka.date": "आषाढ शुक्ल पौर्णिमा (गुरु पौर्णिमा)",
    "festivalEvents.guru-purnima-paduka.timings": "सकाळी 8:00 ते दुपारी 1:00 आणि संध्याकाळी 5:00 ते 9:00",
    "festivalEvents.guru-purnima-paduka.description": "आईंच्या पवित्र चरण पादुकांचे पंचामृत स्नान, केशर-चंदन उटी, सहस्त्रार्चन आणि गुरु कृपेसाठी विशेष भक्ती सोहळा.",
    "festivalEvents.sharad-purnima-kheer.name": "कोजागिरी पौर्णिमा अमृत खीर महामहोत्सव",
    "festivalEvents.sharad-purnima-kheer.badge": "Kojagiri Amrit Utsav",
    "festivalEvents.sharad-purnima-kheer.date": "अश्विन शुक्ल पौर्णिमा (कोजागिरी पौर्णिमा)",
    "festivalEvents.sharad-purnima-kheer.timings": "संध्याकाळी 7:00 ते मध्यरात्री 12:30",
    "festivalEvents.sharad-purnima-kheer.description": "कोजागिरी पौर्णिमेच्या चांदण्यात भक्तीमय संकीर्तन, लक्ष्मी-वैष्णो पूजन आणि अमृततुल्य केशरी दुध-खीर महाप्रसाद वाटप.",
    "festivalEvents.sharad-navratri.name": "शारदीय नवरात्रौत्सव महासोहळा",
    "festivalEvents.sharad-navratri.badge": "Sharad Utsav",
    "festivalEvents.sharad-navratri.date": "अश्विन शुक्ल प्रतिपदा – नवमी (शरद ऋतू)",
    "festivalEvents.sharad-navratri.timings": "सकाळी 7:00 ते रात्री 11:00 सलग दर्शन",
    "festivalEvents.sharad-navratri.description": "आई वैष्णो भवतारिणींचा सर्वात मोठा वार्षिक सोहळा, विशेष पुष्प शृंगार, महापूजा, गरबा-दांडिया आणि हजारो भाविकांची अलोट गर्दी.",
    "festivalEvents.vijayadashami.name": "विजयादशमी / दसरा महापर्व",
    "festivalEvents.vijayadashami.badge": "Victory of Dharma",
    "festivalEvents.vijayadashami.date": "अश्विन शुक्ल दशमी",
    "festivalEvents.vijayadashami.timings": "विशेष दर्शन: सकाळी 7:00 ते रात्री 10:30",
    "festivalEvents.vijayadashami.description": "सत्य आणि धर्माच्या विजयाचा महापर्व, अपराजिता पूजन, शस्त्र पूजन, सोने वाटप (आपट्याची पाने) आणि पावन महाप्रसाद वाटप.",

    "nav.home": "मुख्य पृष्ठ",
    "nav.about": "मंदिर परिचय",
    "nav.liveDarshan": "थेट दर्शन",
    "nav.timings": "दर्शन वेळ",
    "nav.festivals": "उत्सव व सोहळे",
    "nav.gallery": "छायाचित्र दालन",
    "nav.donations": "दान व सेवा",
    "nav.contact": "संपर्क व मार्ग",
    "hero.chant": "जय माता दी! | Jai Mata Di!",
    "hero.title": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर",
    "hero.subtitle": "दैवी कृपा व भक्तीचे पावन धाम • टिटवाळा, महाराष्ट्र",
    "hero.quote": "“आई वैष्णो भवतारिणीच्या पावन धामामध्ये आपले सहर्ष स्वागत आहे, जे श्रद्धा, भक्ती, शांती आणि दैवी आशीर्वादांचे पवित्र स्थान आहे. आई आपल्या जीवनातील प्रत्येक पावलावर मार्गदर्शन करो आणि आपले जीवन शक्ती, आशा आणि सकारात्मकतेने समृद्ध करो.”",
    "hero.btnLiveDarshan": "थेट दर्शन पहा",
    "hero.btnExplore": "मंदिर दर्शन माहिती",
    "hero.btnDonate": "मंदिरासाठी दान / सेवा",
    "status.badgeOpen": "मंदिर दर्शनासाठी खुले आहे",
    "status.badgeBreak": "दुपारी विश्रांती (पुन्हा दुपारी 4:00 वाजता उघडेल)",
    "status.badgeClosed": "मंदिर बंद आहे (सकाळी 7:00 वाजता उघडेल)",
    "liveDarshan.badge": "थेट प्रक्षेपण",
    "liveDarshan.title": "थेट यूट्यूब दर्शन",
    "liveDarshan.subtitle": "जगातील कोणत्याही कोपऱ्यातून आई वैष्णो भवतारिणींचे पावन दर्शन आणि आरतीचा लाभ घ्या.",
    "liveDarshan.watchOnYoutube": "यूट्यूबवर पहा",
    "liveDarshan.visitChannel": "अधिकृत यूट्यूब चॅनेल पहा",
    "liveDarshan.offlineTitle": "थेट प्रक्षेपण सध्या उपलब्ध नाही",
    "liveDarshan.offlineDesc": "दैनंदिन दर्शन आणि विशेष आरतीचे थेट प्रक्षेपण प्रमुख उत्सव व नियोजित आरतीच्या वेळी केले जाते. मागील दर्शन, भजन आणि आगामी प्रक्षेपणाच्या माहितीसाठी आमच्या अधिकृत यूट्यूब चॅनेलला भेट द्या.",
    "liveDarshan.morningAarti": "सकाळची आरती: सकाळी 7:30 वाजता",
    "liveDarshan.eveningAarti": "संध्या आरती: संध्याकाळी 7:00 वाजता",
    "liveDarshan.note": "सूचना: यूट्यूब थेट प्रक्षेपणाची लिंक मंदिर प्रशासनाद्वारे script.js मध्ये अद्ययावत केली जाऊ शकते.",
    "timings.badge": "दर्शन वेळापत्रक",
    "timings.title": "मंदिर दर्शनाची वेळ",
    "timings.subtitle": "दैनंदिन वेळापत्रकानुसार आपल्या तीर्थयात्रेचे आणि पावन दर्शनाचे नियोजन करा.",
    "timings.morningTitle": "सकाळचे दर्शन",
    "timings.morningHours": "सकाळी 7:00 ते दुपारी 2:00",
    "timings.morningNote": "मंगला दर्शन, सकाळची आरती व नित्य पूजा",
    "timings.breakTitle": "दुपारची विश्रांती",
    "timings.breakHours": "दुपारी 2:00 ते दुपारी 4:00",
    "timings.breakNote": "महाभोग व विश्रांतीसाठी मंदिराचा गाभारा बंद असतो",
    "timings.eveningTitle": "संध्याकाळचे दर्शन",
    "timings.eveningHours": "दुपारी 4:00 ते रात्री 8:30 ते 9:00 पर्यंत",
    "timings.eveningNote": "संध्या आरती, दीपोत्सव आणि शयन दर्शन (रात्री बंद होण्याची वेळ 8:30 ते 9:00 दरम्यान)",
    "timings.navratriTitle": "नवरात्रौत्सव व विशेष सोहळे",
    "timings.navratriHours": "विस्तारित दर्शन वेळ: सकाळी 7:00 ते रात्री 11:00",
    "timings.navratriNotice": "“नवरात्रौत्सव आणि मंदिरातील विशेष धार्मिक कार्यक्रमांदरम्यान मंदिर सकाळी 7:00 ते रात्री 11:00 पर्यंत खुले राहील. कोणत्याही बदलांसाठी कृपया अद्ययावत सूचना तपासाव्यात.”",
    "about.badge": "पवित्र इतिहास व महात्म्य",
    "about.title": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिराविषयी",
    "about.subtitle": "टिटवाळ्याच्या पावन भूमीत भक्ती, शांती आणि मातृकृपेचे पवित्र अधिष्ठान.",
    "about.p1": "टिटवाळा, महाराष्ट्र येथील आदि शक्ति माँ वैष्णो भवतारिणी मंदिर हे जगन्मातेच्या चरणी समर्पित एक अत्यंत पावन तीर्थक्षेत्र आहे. भाविक आईचे दर्शन घेण्यासाठी, आशीर्वाद मिळवण्यासाठी आणि आत्मिक समाधान, धैर्य व मनःशांती प्राप्त करण्यासाठी मंदिरात येतात.",
    "about.p2": "आदि शक्तीच्या शाश्वत प्रेरणेने हे मंदिर भक्ती, पूजा, सेवा आणि उत्सवांच्या माध्यमातून सर्व भक्तांना एका धाग्यात गुंफते. नित्य दर्शनापासून ते नवरात्रीच्या उत्साही उत्सवांपर्यंत प्रत्येक प्रसंग भक्ती अधिक दृढ करण्याची आणि ऐक्याची भावना अनुभवण्याची संधी देतो.",
    "about.p3": "आई भवतारिणी प्रत्येक भक्ताला शक्ती, सुबुद्धी, सुख आणि समृद्धीचा आशीर्वाद देवो.",
    "about.pillar1Title": "श्रद्धा व भक्ती",
    "about.pillar1Desc": "नित्य पूजा, नामस्मरण आणि मंगलमय आरतीमुळे मंदिर परिसरात अलौकिक शांतता आणि पावित्र्य जाणवते.",
    "about.pillar2Title": "सेवा व समाजहित",
    "about.pillar2Desc": "महाराष्ट्र आणि देशभरातून येणाऱ्या भाविकांचे स्वागत, महाप्रसाद वितरण आणि समाजोपयोगी कार्य.",
    "about.pillar3Title": "सनातन संस्कृती",
    "about.pillar3Desc": "वैदिक पद्धतीचे धार्मिक विधी, अखंड ज्योत, नवरात्रौत्सव आणि माता की चौकीचे नियमित आयोजन.",
    "devotional.quote": "“जिथे आईवर श्रद्धा आहे, तिथे प्रत्येक संकटाला सामोरे जाण्याचे बळ आहे. आई भवतारिणी सर्वांवर आपली कृपा ठेवो.”",
    "devotional.author": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर • टिटवाळा",
    "festivals.badge": "पावन सोहळे",
    "festivals.title": "उत्सव आणि धार्मिक कार्यक्रम",
    "festivals.subtitle": "आई भगवतीच्या पवित्र सणांमध्ये, माता की चौकी आणि भजन संध्येत सहभागी व्हा.",
    "festivals.filterAll": "सर्व उत्सव",
    "festivals.filterNavratri": "नवरात्रौत्सव",
    "festivals.filterChowki": "माता की चौकी व कीर्तन",
    "festivals.filterPujas": "विशेष पूजा व हवन",
    "festivals.btnDetails": "सविस्तर माहिती",
    "gallery.badge": "दिव्य दर्शन",
    "gallery.title": "मंदिर छायाचित्र दालन",
    "gallery.subtitle": "आई वैष्णो भवतारिणींचे लोभस रूप, मंदिर वास्तू आणि उत्सवांची विहंगम दृश्ये.",
    "gallery.filterAll": "सर्व छायाचित्रे",
    "gallery.filterExterior": "मंदिर बाह्य परिसर",
    "gallery.filterInterior": "प्रवेशद्वार व आतील दृश्य",
    "gallery.filterDarshan": "आईचे मंगल दर्शन",
    "gallery.filterNavratri": "नवरात्रौत्सव",
    "gallery.filterChowki": "भजन व चौकी",
    "donations.badge": "समर्पण व सेवा",
    "donations.title": "मंदिर देणगी व सेवा",
    "donations.subtitle": "मंदिराची देखभाल, दैनंदिन पूजा, महाप्रसाद आणि धार्मिक कार्यासाठी आपले योगदान द्या.",
    "donations.introQuote": "“आपले उदार योगदान मंदिराची देखभाल, नित्य पूजा-अर्चा, उत्सव व्यवस्था आणि मंदिर उपक्रमांसाठी अत्यंत मोलाचे ठरते. आपल्या श्रद्धेबद्दल आणि सेवेबद्दल मनःपूर्वक धन्यवाद. आई भवतारिणी आपल्यावर आणि आपल्या कुटुंबावर सदैव कृपा ठेवो.”",
    "donations.qrCardTitle": "UPI व QR कोड द्वारे देणगी",
    "donations.qrCardSubtitle": "कोणत्याही UPI ॲपवरून (GPay, PhonePe, Paytm, BHIM) स्कॅन करून देणगी द्या",
    "donations.downloadQr": "QR कोड डाउनलोड करा",
    "donations.copyUpi": "UPI ID कॉपी करा",
    "donations.copied": "कॉपी झाले!",
    "donations.payViaUpi": "UPI ॲपने देणगी द्या",
    "donations.bankCardTitle": "बँक ट्रान्सफर (NEFT / RTGS / IMPS)",
    "donations.bankCardSubtitle": "मंदिरात थेट बँक खात्याद्वारे देणगी देण्याचा तपशील",
    "donations.lblAccHolder": "खातेदाराचे नाव",
    "donations.lblBankName": "बँकेचे नाव",
    "donations.lblAccNumber": "खाते क्रमांक (Account Number)",
    "donations.lblIfsc": "IFSC कोड",
    "donations.lblBranch": "शाखा (Branch)",
    "donations.lblUpiId": "UPI ID",
    "donations.copy": "कॉपी",
    "donations.copyAllBank": "सर्व बँक तपशील कॉपी करा",
    "donations.disclaimer": "महत्त्वाची सूचना: देणगी देण्यापूर्वी बँक खात्याचा तपशील काळजीपूर्वक तपासा. मंदिर प्रशासन कधीही दूरध्वनीवरून OTP, PIN किंवा गोपनीय माहिती विचारत नाही.",
    "directions.badge": "मंदिराकडे कसे यावे",
    "directions.title": "स्थान व प्रवासाचा मार्ग",
    "directions.subtitle": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर तीर्थक्षेत्र टिटवाळा, महाराष्ट्र येथे स्थित आहे.",
    "directions.addressTitle": "मंदिराचा पत्ता",
    "directions.address": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर, टिटवाळा, तालुका कल्याण, जिल्हा ठाणे, महाराष्ट्र - 421605, भारत",
    "directions.btnDirections": "गूगल मॅप्सवर मार्ग पहा",
    "directions.btnOpenMaps": "गूगल मॅप्समध्ये उघडा",
    "contact.badge": "संपर्क केंद्र",
    "contact.title": "संपर्क व भाविक माहिती",
    "contact.subtitle": "दर्शनाची माहिती, पूजा विधी किंवा सेवा कार्यासाठी संपर्क साधा.",
    "contact.addressLabel": "मंदिराचा पत्ता",
    "contact.phoneLabel": "मंदिर हेल्पलाइन",
    "contact.emailLabel": "ईमेल पत्ता",
    "contact.youtubeLabel": "अधिकृत यूट्यूब चॅनेल",
    "contact.socialLabel": "सोशल मीडिया संपर्क",
    "footer.chant": "जय माता दी! • Jai Mata Di!",
    "footer.templeName": "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर",
    "footer.tagline": "टिटवाळा, महाराष्ट्र, भारत • शांती, भक्ती व आशीर्वादांचे पावन केंद्र",
    "footer.quickLinks": "महत्त्वाचे दुवे",
    "footer.timingsHeading": "दैनंदिन दर्शन वेळ",
    "footer.morning": "सकाळ: 7:00 ते 2:00",
    "footer.break": "विश्रांती: 2:00 ते 4:00",
    "footer.evening": "संध्या: 4:00 ते 8:30 / 9:00",
    "footer.navratri": "नवरात्र: 7:00 ते 11:00",
    "footer.language": "भाषा निवडा",
    "footer.rights": "सर्व हक्क राखीव. आई वैष्णो भवतारिणींच्या चरणी सप्रेम समर्पित.",
    "footer.backToTop": "वर जा"
  }
};

/* ==========================================================================
   3. MULTILINGUAL & STATE MANAGEMENT
   ========================================================================== */
let currentLanguage = "en";
let languageLoadSequence = 0;
const loadedTranslations = {};
const rawTranslations = {};
const originalPageText = new WeakMap();

// Safe storage access (handles disabled localStorage in private mode)
function safeGetStorage(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {
    // Graceful silent fallback
  }
}

/**
 * Fetch or load translations for a given language
 */
async function loadLanguage(lang) {
  const loadSequence = ++languageLoadSequence;
  currentLanguage = lang;
  safeSetStorage("mandir_preferred_lang", lang);

  // If already loaded in memory, use it
  if (!loadedTranslations[lang]) {
    try {
      const response = await fetch(`./locales/${lang}.json`);
      if (!response.ok) throw new Error("HTTP error " + response.status);
      const json = await response.json();
      rawTranslations[lang] = json;
      loadedTranslations[lang] = flattenTranslations(json);
    } catch (err) {
      console.warn(`Note: Using fallback translations for "${lang}" (${err.message})`);
      loadedTranslations[lang] = FALLBACK_TRANSLATIONS[lang] || FALLBACK_TRANSLATIONS["en"];
    }
  }

  // Ensure English raw translations are available for baseline text matching
  if (lang !== "en" && !rawTranslations["en"]) {
    try {
      const enRes = await fetch(`./locales/en.json`);
      if (enRes.ok) {
        rawTranslations["en"] = await enRes.json();
      }
    } catch (e) {
      // fallback
    }
  }

  // Ignore a slower response if the visitor selected another language meanwhile.
  if (loadSequence !== languageLoadSequence) return;

  applyTranslations(loadedTranslations[lang]);
  updateActiveLanguageButtons(lang);
  renderFestivals(document.querySelector(".filter-tab.active")?.dataset.filter || "all");
  renderGallery(document.querySelector(".gallery-filter-tab.active")?.dataset.filter || "all");
  updateOpeningStatus();

  // Update Hero photo title in selected language
  const photoNameEl = document.getElementById("hero-photo-name");
  if (photoNameEl && typeof HERO_PHOTOS !== "undefined" && HERO_PHOTOS[heroSlideIndex]) {
    const photo = HERO_PHOTOS[heroSlideIndex];
    photoNameEl.textContent = lang === "hi" ? photo.titleHi : (lang === "mr" ? photo.titleMr : photo.titleEn);
  }
  if (typeof updateGallerySlide === "function") {
    updateGallerySlide(currentSlideIndex, false);
  }
}

/**
 * Flattens nested JSON object into dot-separated keys: { "nav": { "home": "Home" } } -> { "nav.home": "Home" }
 */
function flattenTranslations(obj, prefix = "") {
  let result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const propKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, flattenTranslations(obj[key], propKey));
      } else {
        result[propKey] = obj[key];
      }
    }
  }
  return result;
}

/**
 * Applies translations to all elements with `data-i18n` attribute
 */
function applyTranslations(dict) {
  if (!dict) return;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate plain HTML text too when it exactly matches an English locale value.
  // Keep the original node text so changing languages repeatedly never translates
  // a previous translation or loses the source copy.
  const englishLocale = rawTranslations["en"];
  if (englishLocale) {
    const englishPageText = englishLocale.pageText || {};
    const selectedPageText = rawTranslations[currentLanguage]?.pageText || {};
    const english = flattenTranslations(englishLocale);
    const textToKey = new Map();
    const ambiguous = new Set();
    Object.entries(english).forEach(([key, value]) => {
      if (typeof value !== "string") return;
      if (textToKey.has(value) && textToKey.get(value) !== key) ambiguous.add(value);
      else textToKey.set(value, key);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) {
      const parent = textNode.parentElement;
      if (!parent || parent.closest("[data-i18n]") || parent.closest("script, style, textarea")) continue;
      if (!originalPageText.has(textNode)) originalPageText.set(textNode, textNode.nodeValue);
      const original = originalPageText.get(textNode);
      const value = original.trim();
      if (Object.prototype.hasOwnProperty.call(englishPageText, value) && selectedPageText[value]) {
        const start = original.indexOf(value);
        textNode.nodeValue = original.slice(0, start) + selectedPageText[value] + original.slice(start + value.length);
        continue;
      }
      const key = textToKey.get(value);
      if (!key || ambiguous.has(value) || typeof dict[key] !== "string") continue;
      const start = original.indexOf(value);
      textNode.nodeValue = original.slice(0, start) + dict[key] + original.slice(start + value.length);
    }
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;

  // Update Page Title if configured
  const pagePath = window.location.pathname.toLowerCase();
  let pageKey = "home";
  if (pagePath.includes("about")) pageKey = "about";
  else if (pagePath.includes("darshan")) pageKey = "darshan";
  else if (pagePath.includes("festivals")) pageKey = "festivals";
  else if (pagePath.includes("gallery")) pageKey = "gallery";
  else if (pagePath.includes("donations")) pageKey = "donations";
  else if (pagePath.includes("contact")) pageKey = "contact";

  if (dict[`pageTitles.${pageKey}`]) {
    document.title = dict[`pageTitles.${pageKey}`];
  } else if (currentLanguage === "hi") {
    document.title = "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर | टिटवाला, महाराष्ट्र";
  } else if (currentLanguage === "mr") {
    document.title = "आदि शक्ति माँ वैष्णो भवतारिणी मंदिर | टिटवाळा, महाराष्ट्र";
  } else {
    document.title = "Adi Shakti Maa Vaishno Bhavtarni Mandir | Titwala, Maharashtra";
  }
}

function updateActiveLanguageButtons(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
  });
}

/* ==========================================================================
   3.1 HERO 3-PHOTO BACKGROUND SLIDESHOW (BEHIND TEMPLE NAME)
   ========================================================================== */
const HERO_PHOTOS = [
  {
    image: "./assets/images/maa-darshan.jpg",
    titleEn: "1/3: Maa Vaishno Bhavtarni Divya Darshan",
    titleHi: "1/3: माँ वैष्णो भवतारिणी दिव्य दर्शन",
    titleMr: "1/3: आई वैष्णो भवतारिणींचे मंगल दर्शन"
  },
  {
    image: "./assets/images/temple-main.jpg",
    titleEn: "2/3: Sacred Tridevi Garbhagriha Sanctum",
    titleHi: "2/3: पावन त्रिदेवी गर्भगृह (महासरस्वती, महाकाली, महालक्ष्मी)",
    titleMr: "2/3: पावन त्रिदेवी गाभारा (महासरस्वती, महाकाली, महालक्ष्मी)"
  },
  {
    image: "./assets/images/temple-interior.jpg",
    titleEn: "3/3: Holy Charan Paduka & Pushpa Alankaran",
    titleHi: "3/3: पावन श्री चरण पादुका एवं पुष्प अलंकरण",
    titleMr: "3/3: पवित्र श्री चरण पादुका व पुष्प शृंगार"
  }
];

let heroSlideIndex = 0;
let heroSlideTimer = null;
const HERO_SLIDE_DURATION = 5000; // 5 seconds per background slide

window.goToHeroSlide = function(index) {
  const slides = document.querySelectorAll(".hero-bg-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const photoNameEl = document.getElementById("hero-photo-name");
  if (!slides || slides.length === 0) return;

  heroSlideIndex = ((index % HERO_PHOTOS.length) + HERO_PHOTOS.length) % HERO_PHOTOS.length;

  slides.forEach((slide, idx) => {
    if (idx === heroSlideIndex) {
      slide.classList.add("active");
      slide.setAttribute("aria-hidden", "false");
    } else {
      slide.classList.remove("active");
      slide.setAttribute("aria-hidden", "true");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === heroSlideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  if (photoNameEl) {
    const photo = HERO_PHOTOS[heroSlideIndex];
    const title = currentLanguage === "hi" ? photo.titleHi : (currentLanguage === "mr" ? photo.titleMr : photo.titleEn);
    photoNameEl.textContent = title;
  }

  restartHeroSlideTimer();
};

function restartHeroSlideTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    const nextIdx = (heroSlideIndex + 1) % HERO_PHOTOS.length;
    window.goToHeroSlide(nextIdx);
  }, HERO_SLIDE_DURATION);
}

function initHeroSlider() {
  const prevBtn = document.getElementById("hero-slide-prev");
  const nextBtn = document.getElementById("hero-slide-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      window.goToHeroSlide(heroSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.goToHeroSlide(heroSlideIndex + 1);
    });
  }

  window.goToHeroSlide(0);
}

/* ==========================================================================
   4. REAL-TIME IST DARSHAN STATUS BADGE
   (Indian Standard Time: UTC + 5:30)
   ========================================================================== */
function getIndianStandardTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * 5.5);
}

function updateOpeningStatus() {
  const istDate = getIndianStandardTime();
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Schedule in minutes from midnight:
  // 7:00 AM = 420 mins
  // 2:00 PM = 840 mins
  // 4:00 PM = 960 mins
  // 8:45 PM = 1245 mins (closing between 8:30 and 9:00)

  const statusBadge = document.getElementById("temple-status-badge");
  const statusDot = document.getElementById("status-dot");
  const statusText = document.getElementById("status-text");

  if (!statusBadge || !statusDot || !statusText) return;

  let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];

  if (currentMinutes >= 420 && currentMinutes < 840) {
    // Open Morning
    statusDot.className = "status-dot";
    statusText.textContent = dict["status.badgeOpen"] || "Temple Open for Darshan";
  } else if (currentMinutes >= 840 && currentMinutes < 960) {
    // Afternoon Break
    statusDot.className = "status-dot break";
    statusText.textContent = dict["status.badgeBreak"] || "Afternoon Break (Reopens 4:00 PM)";
  } else if (currentMinutes >= 960 && currentMinutes < 1245) {
    // Evening Open
    statusDot.className = "status-dot";
    statusText.textContent = dict["status.badgeOpen"] || "Temple Open for Darshan";
  } else {
    // Closed for night
    statusDot.className = "status-dot closed";
    statusText.textContent = dict["status.badgeClosed"] || "Temple Closed (Opens 7:00 AM)";
  }
}

/* ==========================================================================
   5. LIVE YOUTUBE DARSHAN EMBED & OFFLINE FALLBACK
   ========================================================================== */
function initLiveDarshan() {
  const container = document.getElementById("youtube-player-container");
  const watchOnYoutubeBtn = document.getElementById("btn-watch-youtube");
  const channelLinkBtn = document.getElementById("btn-visit-channel");
  const streamStatusText = document.getElementById("stream-status-text");

  if (!container) return;

  const { hasActiveStream, videoId, channelUrl, liveStreamUrl } = TEMPLE_CONFIG.youtube;

  // Configure target links
  const targetYoutubeUrl = liveStreamUrl || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : channelUrl);
  
  if (watchOnYoutubeBtn) {
    watchOnYoutubeBtn.href = targetYoutubeUrl;
  }
  if (channelLinkBtn) {
    channelLinkBtn.href = channelUrl;
  }

  // Handle active stream vs offline graceful card
  if (hasActiveStream && videoId && videoId.trim() !== "") {
    container.classList.remove("is-offline");
    // Embed live YouTube player
    container.innerHTML = `
      <iframe 
        src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=0&rel=0&modestbranding=1" 
        title="Live Darshan - Adi Shakti Maa Vaishno Bhavtarni Mandir" 
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
    if (streamStatusText) {
      streamStatusText.textContent = "Live Stream Active";
    }
  } else {
    container.classList.add("is-offline");
    // Render devotional offline schedule card
    const dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
    container.innerHTML = `
      <div class="stream-offline-card">
        <div class="offline-icon-wrapper">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <h3 class="offline-title">${dict["liveDarshan.offlineTitle"] || "Live Stream is Currently Offline"}</h3>
        <p class="offline-desc">${dict["liveDarshan.offlineDesc"] || "Daily Darshan and special Aarti streams are broadcast during festival celebrations and scheduled Aarti hours."}</p>
        <div class="aarti-schedule-pills">
          <span class="aarti-pill">🪔 ${dict["liveDarshan.morningAarti"] || "Morning Aarti: 7:30 AM"}</span>
          <span class="aarti-pill">🪔 ${dict["liveDarshan.eveningAarti"] || "Sandhya Aarti: 7:00 PM"}</span>
        </div>
        <a href="${channelUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
          </svg>
          ${dict["liveDarshan.visitChannel"] || "Visit Official YouTube Channel"}
        </a>
      </div>
    `;
    if (streamStatusText) {
      streamStatusText.textContent = "Broadcast Offline (Scheduled during Aarti)";
    }
  }
}

/* ==========================================================================
   6. FESTIVALS & EVENTS SECTION (Loaded dynamically from events.json)
   ========================================================================== */
let eventsJsonLoaded = false;
let eventsJsonPromise = null;

async function loadEventsFromJson() {
  if (eventsJsonLoaded) return;
  if (!eventsJsonPromise) {
    eventsJsonPromise = (async () => {
      try {
        // Primary event source: ./events.json, next to festivals.html.
        const res = await fetch("./events.json");
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.festivals) && data.festivals.length > 0) {
            TEMPLE_CONFIG.festivals = data.festivals;
          }
        }
      } catch (err) {
        console.info("Using bundled festival events data (fallback).");
      } finally {
        eventsJsonLoaded = true;
      }
    })();
    }
  return eventsJsonPromise;
}

async function renderFestivals(filter = "all") {
  // Paint the bundled fallback immediately, then repaint with events.json if available.
  renderFestivalMarkup(filter);
  await loadEventsFromJson();
  renderFestivalMarkup(filter);
}

function renderFestivalMarkup(filter = "all") {
  const dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
  const list = TEMPLE_CONFIG.festivals;
  const eventText = (event, field, legacyField) =>
    dict[`festivalEvents.${event.id}.${field}`] || event[field] || event[legacyField] || "";

  // Upcoming Events source: events with isUpcoming === true in the active data array above.
  // The target element is #upcoming-events-container in festivals.html.
  const upcomingContainer = document.getElementById("upcoming-events-container");
  if (upcomingContainer) {
    const upcomingList = list.filter(e => e.isUpcoming === true || e.upcoming === true);
    const displayList = upcomingList;

    if (displayList.length === 0) {
      upcomingContainer.innerHTML = '<p class="events-empty-state">New festival dates will be announced soon. Please check back or contact the Mandir office.</p>';
      upcomingContainer.classList.add("is-empty");
    } else {
      upcomingContainer.classList.remove("is-empty");
      upcomingContainer.innerHTML = displayList.map(ev => {
    
      const name = eventText(ev, "name", "nameEn") || ev.id;
      const date = eventText(ev, "date", "dateEn");
      const timings = eventText(ev, "timings", "timingsEn");
      const desc = eventText(ev, "description", "descEn");
      const badge = eventText(ev, "badge", "badge") || "Upcoming Event";

      return `
        <article class="upcoming-card">
          <div class="upcoming-body">
            <span class="upcoming-badge-pill">${badge}</span>
            <h3 class="upcoming-title">${name}</h3>
            <div class="upcoming-date-box">
              <span>📅</span>
              <span>${date}</span>
            </div>
            <div class="upcoming-timings-row">
              <span>⏰</span>
              <span>${timings || "Schedule to be announced"}</span>
            </div>
            <p class="upcoming-desc">${desc || "Details will be announced soon."}</p>
          </div>
        </article>
      `;
      }).join("");
    }
  }

  // Festivals source: all entries in the same data array, filtered by category.
  // The target element is #events-grid-container in festivals.html.
  const container = document.getElementById("events-grid-container");
  if (container) {
    const filtered = filter === "all" ? list : list.filter(e => e.category === filter);

    container.innerHTML = filtered.map(ev => {
      const name = eventText(ev, "name", "nameEn") || ev.id;
      const date = eventText(ev, "date", "dateEn");
      const timings = eventText(ev, "timings", "timingsEn");
      const desc = eventText(ev, "description", "descEn");

      return `
        <article class="event-card" data-category="${ev.category}">
          <div class="event-image-box">
            <img src="${ev.image || "./assets/images/temple-main.jpg"}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/temple-main.jpg';">
            <span class="event-tag">${ev.category}</span>
          </div>
          <div class="event-body">
            <h3 class="event-title">${name}</h3>
            <div class="event-meta">
              <div class="event-meta-item">
                <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
                <span>${date}</span>
              </div>
              <div class="event-meta-item">
                <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                <span>${timings}</span>
              </div>
            </div>
            <p class="event-desc">${desc}</p>
          </div>
        </article>
      `;
    }).join("");
  }
}

function initFestivalTabs() {
  const viewTabs = document.querySelectorAll(".festival-view-tab");
  const viewPanels = document.querySelectorAll(".festival-view-panel");
  viewTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selectedView = tab.dataset.view;
      viewTabs.forEach(item => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", selected ? "true" : "false");
        item.setAttribute("tabindex", selected ? "0" : "-1");
      });
      viewPanels.forEach(panel => {
        const selected = panel.id === (selectedView === "upcoming" ? "upcoming-events-section" : "festivals");
        panel.hidden = !selected;
        panel.classList.toggle("active", selected);
      });
    });
  });

  const tabs = document.querySelectorAll(".festival-filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderFestivals(tab.dataset.filter);
    });
  });
}

window.openEventDetails = function(eventId) {
  const ev = TEMPLE_CONFIG.festivals.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById("event-modal");
  const modalBody = document.getElementById("event-modal-content");
  if (!modal || !modalBody) return;

  const dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS.en;
  const text = field => dict[`festivalEvents.${eventId}.${field}`] || "";
  const name = text("name");
  const date = text("date");
  const timings = text("timings");
  const desc = text("description");

  modalBody.innerHTML = `
    <div style="border-radius: 12px; overflow: hidden; margin-bottom: 20px; aspect-ratio: 16/9; background: #380710;">
      <img src="${ev.image}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <span class="sacred-badge" style="margin-bottom: 10px;">${ev.category}</span>
    <h2 style="font-family: var(--font-heading); color: var(--color-maroon-primary); margin-bottom: 16px; font-size: 1.6rem;">${name}</h2>
    <div style="background: var(--color-ivory-warm); padding: 14px 18px; border-radius: 8px; margin-bottom: 20px; border-left: 3px solid var(--color-gold-primary);">
      <p style="margin-bottom: 6px; font-weight: 600; color: var(--color-saffron-warm);">📅 ${date}</p>
      <p style="font-weight: 600; color: var(--color-maroon-primary);">⏰ ${timings}</p>
    </div>
    <p style="line-height: 1.8; color: var(--color-text-dark); font-size: 1.05rem; margin-bottom: 20px;">${desc}</p>
    <p style="font-size: 0.88rem; color: var(--color-text-muted); font-style: italic;">Note: Devotees wishing to sponsor Hawan, Prasad, or special flower Archana during this festival may contact the Mandir office or contribute via the Donations section.</p>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeEventModal() {
  const modal = document.getElementById("event-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ==========================================================================
   7. PHOTO GALLERY, SLIDESHOW VIEW & LIGHTBOX
   ========================================================================== */
let currentLightboxIndex = 0;
let currentFilteredGallery = [];
let currentSlideIndex = 0;
let isSlidePlaying = true;
let slideTimer = null;
const SLIDE_DURATION = 4500; // 4.5 seconds per slide transition
let touchStartX = 0;
let touchEndX = 0;

/**
 * Switch between Changing Slide View and Grid View
 */
window.switchGalleryView = function(viewMode) {
  const sliderSection = document.getElementById("gallery-slider-section");
  const gridSection = document.getElementById("gallery-grid-section");
  const btnSlider = document.getElementById("btn-view-slider");
  const btnGrid = document.getElementById("btn-view-grid");

  if (viewMode === "slider") {
    if (sliderSection) sliderSection.style.display = "block";
    if (gridSection) gridSection.style.display = "none";
    if (btnSlider) { btnSlider.classList.add("active"); btnSlider.setAttribute("aria-pressed", "true"); }
    if (btnGrid) { btnGrid.classList.remove("active"); btnGrid.setAttribute("aria-pressed", "false"); }
    startSlideTimer();
  } else {
    if (sliderSection) sliderSection.style.display = "none";
    if (gridSection) gridSection.style.display = "block";
    if (btnSlider) { btnSlider.classList.remove("active"); btnSlider.setAttribute("aria-pressed", "false"); }
    if (btnGrid) { btnGrid.classList.add("active"); btnGrid.setAttribute("aria-pressed", "true"); }
    clearInterval(slideTimer);
    renderGallery(document.querySelector(".gallery-filter-tab.active")?.dataset.filter || "all");
  }
};

/**
 * Initialize the Changing Slide View (Carousel)
 */
function initGallerySlider() {
  renderSliderThumbnails();
  updateGallerySlide(0, false);
  startSlideTimer();

  // Prev / Next button listeners
  const prevBtn = document.getElementById("slide-nav-prev");
  const nextBtn = document.getElementById("slide-nav-next");
  const playPauseBtn = document.getElementById("slide-play-pause");
  const fullscreenBtn = document.getElementById("slide-fullscreen-btn");
  const sliderStage = document.getElementById("gallery-slider-stage");

  if (prevBtn) prevBtn.addEventListener("click", () => { prevGallerySlide(); resetSlideTimer(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { nextGallerySlide(); resetSlideTimer(); });
  if (playPauseBtn) playPauseBtn.addEventListener("click", toggleSlidePlay);
  if (fullscreenBtn) fullscreenBtn.addEventListener("click", () => openLightbox(currentSlideIndex));

  // Pause on hover, resume on leave
  if (sliderStage) {
    sliderStage.addEventListener("mouseenter", () => {
      clearInterval(slideTimer);
      const prog = document.getElementById("slide-progress-bar");
      if (prog) prog.style.animationPlayState = "paused";
    });
    sliderStage.addEventListener("mouseleave", () => {
      if (isSlidePlaying) {
        startSlideTimer();
      }
    });

    // Touch swipe support on mobile
    sliderStage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderStage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleTouchSwipe();
    }, { passive: true });
  }
}

function handleTouchSwipe() {
  const threshold = 40;
  if (touchEndX < touchStartX - threshold) {
    // Swiped Left -> Next Slide
    nextGallerySlide();
    resetSlideTimer();
  } else if (touchEndX > touchStartX + threshold) {
    // Swiped Right -> Previous Slide
    prevGallerySlide();
    resetSlideTimer();
  }
}

function startSlideTimer() {
  clearInterval(slideTimer);
  if (!isSlidePlaying) return;

  const prog = document.getElementById("slide-progress-bar");
  if (prog) {
    prog.classList.remove("active");
    void prog.offsetWidth; // trigger reflow
    prog.classList.add("active");
    prog.style.animationPlayState = "running";
  }

  slideTimer = setInterval(() => {
    nextGallerySlide();
  }, SLIDE_DURATION);
}

function resetSlideTimer() {
  if (isSlidePlaying) {
    startSlideTimer();
  }
}

function toggleSlidePlay() {
  isSlidePlaying = !isSlidePlaying;
  const btn = document.getElementById("slide-play-pause");
  const icon = document.getElementById("slide-play-icon");
  const text = document.getElementById("slide-play-text");
  const prog = document.getElementById("slide-progress-bar");

  let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];

  if (isSlidePlaying) {
    if (icon) icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    if (text) text.textContent = dict["gallery.slidePause"] || "Pause";
    if (prog) prog.style.animationPlayState = "running";
    startSlideTimer();
  } else {
    clearInterval(slideTimer);
    if (icon) icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    if (text) text.textContent = dict["gallery.slidePlay"] || "Play";
    if (prog) prog.style.animationPlayState = "paused";
  }
}

window.nextGallerySlide = function() {
  const list = TEMPLE_CONFIG.gallery;
  currentSlideIndex = (currentSlideIndex + 1) % list.length;
  updateGallerySlide(currentSlideIndex);
};

window.prevGallerySlide = function() {
  const list = TEMPLE_CONFIG.gallery;
  currentSlideIndex = (currentSlideIndex - 1 + list.length) % list.length;
  updateGallerySlide(currentSlideIndex);
};

window.goToGallerySlide = function(index) {
  currentSlideIndex = index;
  updateGallerySlide(currentSlideIndex);
  resetSlideTimer();
};

function updateGallerySlide(index, animate = true) {
  const list = TEMPLE_CONFIG.gallery;
  if (!list || list.length === 0) return;

  const item = list[index];
  const title = currentLanguage === "hi" ? item.titleHi : (currentLanguage === "mr" ? item.titleMr : item.titleEn);
  const caption = currentLanguage === "hi" ? (item.captionHi || title) : (currentLanguage === "mr" ? (item.captionMr || title) : (item.captionEn || title));

  const slideImg = document.getElementById("gallery-slide-img");
  const slideTitle = document.getElementById("gallery-slide-title");
  const slideDesc = document.getElementById("gallery-slide-desc");
  const slideCat = document.getElementById("gallery-slide-category");
  const slideCounter = document.getElementById("gallery-slide-counter");

  if (slideImg) {
    if (animate) {
      slideImg.classList.remove("fade-in");
      void slideImg.offsetWidth;
      slideImg.classList.add("fade-in");
    }
    slideImg.src = item.image;
    slideImg.alt = title;
  }

  const categoryMap = {
    darshan: { en: "Maa Darshan", hi: "माँ दर्शन", mr: "आई दर्शन" },
    sanctum: { en: "Tridevi Sanctum", hi: "त्रिदेवी गर्भगृह", mr: "त्रिदेवी गर्भगृह" },
    paduka: { en: "Charan Paduka", hi: "चरण पादुका", mr: "चरण पादुका" }
  };
  const catKey = (item.category || "darshan").toLowerCase();
  const catLocalized = (categoryMap[catKey] && categoryMap[catKey][currentLanguage])
    ? categoryMap[catKey][currentLanguage]
    : (currentLanguage === "hi" ? "माँ दर्शन" : (currentLanguage === "mr" ? "आई दर्शन" : item.category));

  if (slideTitle) slideTitle.textContent = title;
  if (slideDesc) slideDesc.textContent = caption;
  if (slideCat) slideCat.textContent = catLocalized;
  if (slideCounter) slideCounter.textContent = `${index + 1} / ${list.length}`;

  // Update thumbnail active ring
  document.querySelectorAll(".slide-thumb").forEach((th, idx) => {
    if (idx === index) {
      th.classList.add("active");
    } else {
      th.classList.remove("active");
    }
  });

  // Update dot indicators
  document.querySelectorAll(".slide-dot").forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // Reset progress bar animation
  const prog = document.getElementById("slide-progress-bar");
  if (prog && isSlidePlaying) {
    prog.classList.remove("active");
    void prog.offsetWidth;
    prog.classList.add("active");
  }
}

function renderSliderThumbnails() {
  const thumbContainer = document.getElementById("slide-thumbnails-track");
  const dotsContainer = document.getElementById("slide-dots-container");
  const list = TEMPLE_CONFIG.gallery;
  if (!thumbContainer || !list) return;

  thumbContainer.innerHTML = list.map((item, idx) => {
    const title = currentLanguage === "hi" ? item.titleHi : (currentLanguage === "mr" ? item.titleMr : item.titleEn);
    return `
      <button type="button" class="slide-thumb ${idx === 0 ? 'active' : ''}" onclick="goToGallerySlide(${idx})" aria-label="Go to slide ${idx + 1}: ${title}">
        <img src="${item.image}" alt="${title}" loading="lazy">
        <span class="slide-thumb-num">${idx + 1}</span>
      </button>
    `;
  }).join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = list.map((_, idx) => `
      <button type="button" class="slide-dot ${idx === 0 ? 'active' : ''}" onclick="goToGallerySlide(${idx})" aria-label="Slide ${idx + 1}"></button>
    `).join("");
  }
}

/* ==========================================================================
   GRID VIEW RENDERING & LIGHTBOX
   ========================================================================== */
function renderGallery(filter = "all") {
  const container = document.getElementById("gallery-grid-container");
  if (!container) return;

  const list = TEMPLE_CONFIG.gallery;
  currentFilteredGallery = filter === "all" ? list : list.filter(g => g.category === filter);

  container.innerHTML = currentFilteredGallery.map((item, idx) => {
    const title = currentLanguage === "hi" ? item.titleHi : (currentLanguage === "mr" ? item.titleMr : item.titleEn);
    return `
      <div class="gallery-item" tabindex="0" role="button" aria-label="${title}" onclick="openLightbox(${idx})">
        <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='./assets/images/temple-main.jpg';">
        <div class="gallery-item-overlay">
          <h4 class="gallery-item-title">${title}</h4>
          <span class="gallery-item-cat">${item.category}</span>
        </div>
      </div>
    `;
  }).join("");
}

function initGalleryTabs() {
  const tabs = document.querySelectorAll(".gallery-filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderGallery(tab.dataset.filter);
    });
  });
}

window.openLightbox = function(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  const lightbox = document.getElementById("lightbox-modal");
  if (lightbox) {
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

function closeLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function updateLightboxContent() {
  const list = TEMPLE_CONFIG.gallery;
  if (!list || list.length === 0) return;
  
  if (currentLightboxIndex < 0) currentLightboxIndex = list.length - 1;
  if (currentLightboxIndex >= list.length) currentLightboxIndex = 0;

  const item = list[currentLightboxIndex];
  const title = currentLanguage === "hi" ? item.titleHi : (currentLanguage === "mr" ? item.titleMr : item.titleEn);
  const caption = currentLanguage === "hi" ? (item.captionHi || title) : (currentLanguage === "mr" ? (item.captionMr || title) : (item.captionEn || title));

  const imgEl = document.getElementById("lightbox-image");
  const titleEl = document.getElementById("lightbox-title");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = title;
  }
  if (titleEl) titleEl.textContent = `${title} — ${caption}`;
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${list.length}`;
  }
}

function nextLightboxImage() {
  currentLightboxIndex++;
  updateLightboxContent();
}

function prevLightboxImage() {
  currentLightboxIndex--;
  updateLightboxContent();
}

/* ==========================================================================
   PURE WEB AUDIO API TEMPLE BELL CHIME
   ========================================================================== */
let audioCtx = null;

window.playTempleBell = function() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    
    // Bell harmonic frequencies (Tibetan / Indian Ghanta frequency spectrum)
    const partials = [
      { freq: 587.33, gain: 0.8, decay: 3.2 },  // Fundamental D5
      { freq: 880.00, gain: 0.6, decay: 2.8 },  // Fifth A5
      { freq: 1174.66, gain: 0.45, decay: 2.2 }, // Octave D6
      { freq: 1760.00, gain: 0.3, decay: 1.6 },  // Second Octave A6
      { freq: 2349.32, gain: 0.15, decay: 1.1 }  // Third Octave D7
    ];

    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.7, now);
    masterGain.connect(audioCtx.destination);

    partials.forEach(p => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(p.freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(p.gain, now + 0.015); // Instant sharp strike
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay); // Gentle resonant decay

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + p.decay + 0.1);
    });

    showToast("🔔 ॐ हर हर महादेव • जय माता दी!");
  } catch (e) {
    console.log("Audio chime note: ", e);
  }
};

/* ==========================================================================
   8. SACRED MANDIR VIDEO PLAYER
   ========================================================================== */
function initTempleVideo() {
  const video = document.getElementById("mandir-video-player");
  const fallback = document.getElementById("video-fallback-banner");
  const playText = document.getElementById("btn-play-video-text");
  const playSvg = document.getElementById("video-play-svg");

  if (!video) return;

  // Handle video error (e.g. file not yet uploaded to assets/videos/)
  video.addEventListener("error", () => {
    if (fallback) fallback.style.display = "flex";
  });

  video.addEventListener("play", () => {
    let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
    if (playText) playText.textContent = dict["video.btnPause"] || "Pause Video";
    if (playSvg) playSvg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    if (fallback) fallback.style.display = "none";
  });

  video.addEventListener("pause", () => {
    let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
    if (playText) playText.textContent = dict["video.btnPlay"] || "Play Video";
    if (playSvg) playSvg.innerHTML = '<path d="M8 5v14l11-7z"/>';
  });
}

window.playOrPauseVideo = function() {
  const video = document.getElementById("mandir-video-player");
  if (!video) return;
  if (video.paused) {
    video.play().catch(err => {
      console.warn("Video file may not be uploaded yet:", err.message);
      const fallback = document.getElementById("video-fallback-banner");
      if (fallback) fallback.style.display = "flex";
    });
  } else {
    video.pause();
  }
};

window.toggleVideoFullscreen = function() {
  const video = document.getElementById("mandir-video-player");
  if (!video) return;
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
};

/* ==========================================================================
   8.1 DONATIONS & FINANCIAL UTILITIES
   ========================================================================== */
async function initDonations() {
  // Attempt to load live bank details from bank-details.json if configured
  try {
    const res = await fetch('./bank-details.json');
    if (res.ok) {
      const data = await res.json();
      Object.assign(TEMPLE_CONFIG.donations, data);
    }
  } catch (err) {
    // Graceful fallback to TEMPLE_CONFIG.donations
  }

  renderDonationDetails();
}

function renderDonationDetails() {
  const upiIdText = document.getElementById("display-upi-id");
  const bankAccHolder = document.getElementById("bank-acc-holder");
  const bankName = document.getElementById("bank-name");
  const bankAccNumber = document.getElementById("bank-acc-number");
  const bankIfsc = document.getElementById("bank-ifsc");
  const bankBranch = document.getElementById("bank-branch");
  const bankUpiId = document.getElementById("bank-upi-id");
  const qrImage = document.getElementById("donation-qr-img");
  const upiPayLink = document.getElementById("btn-pay-upi");

  const d = TEMPLE_CONFIG.donations;

  if (upiIdText) upiIdText.textContent = d.upiId || "—";
  if (bankAccHolder) bankAccHolder.textContent = d.accountHolder || "—";
  if (bankName) bankName.textContent = d.bankName || "—";
  if (bankAccNumber) bankAccNumber.textContent = d.accountNumber || "—";
  if (bankIfsc) bankIfsc.textContent = d.ifscCode || "—";
  if (bankBranch) bankBranch.textContent = d.branchName || "—";
  if (bankUpiId) bankUpiId.textContent = d.upiId || "—";
  if (qrImage && d.qrImagePath) qrImage.src = d.qrImagePath;

  if (upiPayLink) {
    if (d.upiId) {
      const encodedPayee = encodeURIComponent(d.payeeName || "Adi Shakti Mandir");
      upiPayLink.href = `upi://pay?pa=${encodeURIComponent(d.upiId)}&pn=${encodedPayee}&cu=INR&tn=Mandir%20Seva%20Offering`;
      upiPayLink.style.display = "inline-flex";
    } else {
      upiPayLink.style.display = "none";
    }
  }
}

/**
 * Universal clipboard copy with toast confirmation
 */
async function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    showToast(successMsg);
  } catch (err) {
    console.error("Clipboard copy failed: ", err);
    showToast("Could not copy automatically. Please copy manually.");
  }
}

function showToast(message) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Download QR Code image
function downloadQrCode() {
  const link = document.createElement("a");
  link.href = TEMPLE_CONFIG.donations.qrImagePath;
  link.download = "Adi-Shakti-Maa-Mandir-Donation-QR.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Downloading Donation QR Code...");
}

// Copy All Bank Transfer Details in formatted message
function copyAllBankDetails() {
  const d = TEMPLE_CONFIG.donations;
  let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];

  if (!d.accountNumber && !d.upiId) {
    showToast(dict["donations.detailsPending"] || "Bank details will be updated soon");
    return;
  }

  const formatted = 
`ADI SHAKTI MAA VAISHNO BHAVTARNI MANDIR • TITWALA
Bank Transfer Seva Details:
---------------------------------------------
Account Holder: ${d.accountHolder || "—"}
Bank Name: ${d.bankName || "—"}
Account Number: ${d.accountNumber || "—"}
IFSC Code: ${d.ifscCode || "—"}
Branch: ${d.branchName || "—"}
UPI ID: ${d.upiId || "—"}
---------------------------------------------
May Maa Bhavtarni bless you and your family! Jai Mata Di!`;

  copyToClipboard(formatted, "All Bank Details copied to clipboard!");
}

/* ==========================================================================
   9. GOOGLE MAPS & CONTACT DETAILS
   ========================================================================== */
function initMapsAndContact() {
  const mapIframe = document.getElementById("google-map-iframe");
  const directionsBtn = document.getElementById("btn-get-directions");
  const openMapsBtn = document.getElementById("btn-open-maps");

  if (mapIframe && TEMPLE_CONFIG.maps.embedUrl) {
    mapIframe.src = TEMPLE_CONFIG.maps.embedUrl;
  }
  if (directionsBtn && TEMPLE_CONFIG.maps.directionsUrl) {
    directionsBtn.href = TEMPLE_CONFIG.maps.directionsUrl;
  }
  if (openMapsBtn) {
    openMapsBtn.href = TEMPLE_CONFIG.maps.directionsUrl;
  }

  // Gracefully hide unconfigured contact cards
  const c = TEMPLE_CONFIG.contact;
  const phoneCard = document.getElementById("contact-card-phone");
  const emailCard = document.getElementById("contact-card-email");
  const youtubeCard = document.getElementById("contact-card-youtube");

  if (phoneCard) {
    if (c.phone && c.phone.trim() !== "") {
      const link = phoneCard.querySelector("a");
      if (link) {
        link.href = `tel:${c.phone.replace(/\s+/g, "")}`;
        link.textContent = c.phone;
      }
      phoneCard.style.display = "flex";
    } else {
      phoneCard.style.display = "none";
    }
  }

  if (emailCard) {
    if (c.email && c.email.trim() !== "") {
      const link = emailCard.querySelector("a");
      if (link) {
        link.href = `mailto:${c.email}`;
        link.textContent = c.email;
      }
      emailCard.style.display = "flex";
    } else {
      emailCard.style.display = "none";
    }
  }

  if (youtubeCard) {
    if (c.youtube && c.youtube.trim() !== "") {
      const link = youtubeCard.querySelector("a");
      if (link) {
        link.href = c.youtube;
      }
      youtubeCard.style.display = "flex";
    } else {
      youtubeCard.style.display = "none";
    }
  }
}

/* ==========================================================================
   10. MOBILE NAVIGATION & SCROLL EVENTS
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.getElementById("back-to-top-btn");

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header scroll appearance & Back to top button
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }, { passive: true });

  // Smooth back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            const href = link.getAttribute("href") || "";
            if (href === `#${id}` || href.endsWith(`#${id}`)) {
              link.classList.add("active");
            } else if (href.startsWith("#")) {
              link.classList.remove("active");
            }
          });
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });

    sections.forEach(sec => observer.observe(sec));
  }

  // Fade-up scroll animations
  const fadeElements = document.querySelectorAll(".animate-fade-up");
  if (fadeElements.length > 0 && "IntersectionObserver" in window) {
    const fadeObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add("visible"));
  }
}

/* ==========================================================================
   11. KEYBOARD LISTENERS & ACCESSIBILITY
   ========================================================================== */
function initKeyboardAccessibility() {
  window.addEventListener("keydown", (e) => {
    // ESC closes active modal or lightbox
    if (e.key === "Escape") {
      closeLightbox();
      closeEventModal();
    }
    // Left/Right arrows for lightbox navigation
    const lightbox = document.getElementById("lightbox-modal");
    if (lightbox && lightbox.classList.contains("active")) {
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    }
  });

  // Close lightbox by clicking backdrop
  const lightbox = document.getElementById("lightbox-modal");
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Close event modal by clicking backdrop
  const eventModal = document.getElementById("event-modal");
  if (eventModal) {
    eventModal.addEventListener("click", (e) => {
      if (e.target === eventModal) closeEventModal();
    });
  }
}

// Prevent browser from auto-scrolling to last viewed section on refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* ==========================================================================
   12. APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Ensure page starts from the very top
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  // 1. Language preference check
  const savedLang = safeGetStorage("mandir_preferred_lang", "en");

  // 2. Language switch event listeners
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      loadLanguage(btn.dataset.lang);
    });
  });

  // 3. Initialize components
  initNavigation();
  initHeroSlider();
  initDonations();
  initLiveDarshan();
  initTempleVideo();
  initFestivalTabs();
  initGallerySlider();
  initGalleryTabs();
  initMapsAndContact();
  initKeyboardAccessibility();

  // Temple Bell Chime
  const bellBtn = document.getElementById("btn-temple-bell");
  if (bellBtn) {
    bellBtn.addEventListener("click", playTempleBell);
  }
  const heroBellBtn = document.getElementById("btn-hero-bell");
  if (heroBellBtn) {
    heroBellBtn.addEventListener("click", playTempleBell);
  }

  // 4. Setup copy buttons
  const copyUpiBtn = document.getElementById("btn-copy-upi");
  if (copyUpiBtn) {
    copyUpiBtn.addEventListener("click", () => {
      let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
      if (TEMPLE_CONFIG.donations.upiId) {
        copyToClipboard(TEMPLE_CONFIG.donations.upiId, "UPI ID copied to clipboard!");
      } else {
        showToast(dict["donations.upiPending"] || "UPI ID will be updated soon");
      }
    });
  }

  const copyAccBtn = document.getElementById("btn-copy-acc");
  if (copyAccBtn) {
    copyAccBtn.addEventListener("click", () => {
      let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
      if (TEMPLE_CONFIG.donations.accountNumber) {
        copyToClipboard(TEMPLE_CONFIG.donations.accountNumber, "Account Number copied!");
      } else {
        showToast(dict["donations.detailsPending"] || "Bank details will be updated soon");
      }
    });
  }

  const copyIfscBtn = document.getElementById("btn-copy-ifsc");
  if (copyIfscBtn) {
    copyIfscBtn.addEventListener("click", () => {
      let dict = loadedTranslations[currentLanguage] || FALLBACK_TRANSLATIONS[currentLanguage] || FALLBACK_TRANSLATIONS["en"];
      if (TEMPLE_CONFIG.donations.ifscCode) {
        copyToClipboard(TEMPLE_CONFIG.donations.ifscCode, "IFSC Code copied!");
      } else {
        showToast(dict["donations.detailsPending"] || "Bank details will be updated soon");
      }
    });
  }

  const copyAllBankBtn = document.getElementById("btn-copy-all-bank");
  if (copyAllBankBtn) {
    copyAllBankBtn.addEventListener("click", copyAllBankDetails);
  }

  const downloadQrBtn = document.getElementById("btn-download-qr");
  if (downloadQrBtn) {
    downloadQrBtn.addEventListener("click", downloadQrCode);
  }

  // Lightbox controls
  const lbClose = document.getElementById("lightbox-close");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", prevLightboxImage);
  if (lbNext) lbNext.addEventListener("click", nextLightboxImage);

  const modalClose = document.getElementById("event-modal-close");
  if (modalClose) modalClose.addEventListener("click", closeEventModal);

  // 5. Initial language load & timing check
  loadLanguage(savedLang);
  setInterval(updateOpeningStatus, 60000); // Check status every minute
});
