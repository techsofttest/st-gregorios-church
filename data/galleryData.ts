export interface GalleryItem {
  id: string;
  title: string;
  category: "photo" | "video" | "feast" | "historical";
  src: string;
  type: "image" | "video";
  videoUrl?: string;
  date?: string;
}

export const galleryItemsData: GalleryItem[] = [
  // -------------------------------------------------------------
  // 1. Photo Gallery (Parish Life, Altar, Sanctuary, Gatherings)
  // -------------------------------------------------------------
  {
    id: "p1",
    title: "Sacred Altar & Holy Madbaha Sanctuary",
    category: "photo",
    src: "/interior/Ornate Candlelit Chapel Altar.png",
    type: "image",
    date: "04.10.2026",
  },
  {
    id: "p2",
    title: "Illuminated Church Shrine & Intercessory Prayers",
    category: "photo",
    src: "/interior/Ornate Illuminated Church Shrine.png",
    type: "image",
    date: "28.09.2026",
  },
  {
    id: "p3",
    title: "Golden Aisle & Central Nave",
    category: "photo",
    src: "/interior/Golden Aisle to the Sacred Altar.png",
    type: "image",
    date: "15.09.2026",
  },
  {
    id: "p4",
    title: "Parishioners in Devotion & Worship",
    category: "photo",
    src: "/gallery/305A7802.JPG",
    type: "image",
    date: "18.06.2026",
  },
  {
    id: "p5",
    title: "Church Exterior in Morning Light",
    category: "photo",
    src: "/exterior/Sunlit Tropical White Temple Church.png",
    type: "image",
    date: "02.09.2026",
  },
  {
    id: "p6",
    title: "Parish Choir & Liturgical Chants",
    category: "photo",
    src: "/gallery/305A7756.JPG",
    type: "image",
    date: "20.08.2026",
  },
  {
    id: "p7",
    title: "Solemn Consecration & Incense Blessing",
    category: "photo",
    src: "/gallery/305A7763.JPG",
    type: "image",
    date: "14.07.2026",
  },
  {
    id: "p8",
    title: "Fellowship & Parish Assembly",
    category: "photo",
    src: "/gallery/305A7815.JPG",
    type: "image",
    date: "28.07.2026",
  },

  // -------------------------------------------------------------
  // 2. Video Gallery (Liturgy, Feast Telecasts, Choir Recitals)
  // -------------------------------------------------------------
  {
    id: "v1",
    title: "Holy Divine Liturgy — Apostolic Feast Celebration",
    category: "video",
    src: "/interior/Symmetrical Syrian Orthodox Sanctuary.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "04.10.2026",
  },
  {
    id: "v2",
    title: "Valia Perunal Holy Raza Procession",
    category: "video",
    src: "/perunnal/b2.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "02.11.2025",
  },
  {
    id: "v3",
    title: "Syriac Choral Hymns & Evening Prayers",
    category: "video",
    src: "/interior/Ornate Symmetrical Church Sanctuary.png",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "18.06.2026",
  },
  {
    id: "v4",
    title: "Sunday School Talents & Bible Recitations",
    category: "video",
    src: "/gallery/305A7760.JPG",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "12.08.2026",
  },

  // -------------------------------------------------------------
  // 3. Feast Gallery (Valia Perunal, Perunnal Procession, Relics)
  // -------------------------------------------------------------
  {
    id: "f1",
    title: "Valia Perunal — Holy Altar & Golden Canopy",
    category: "feast",
    src: "/perunnal/b1.png",
    type: "image",
    date: "02.11.2025",
  },
  {
    id: "f2",
    title: "Holy Raza Procession with Traditional Flags & Ornaments",
    category: "feast",
    src: "/perunnal/b2.png",
    type: "image",
    date: "01.11.2025",
  },
  {
    id: "f3",
    title: "Veneration of the Sacred Relics of Parumala Thirumeni",
    category: "feast",
    src: "/perunnal/b3.png",
    type: "image",
    date: "13.11.2005",
  },
  {
    id: "f4",
    title: "Perunnal Nercha Preparation & Fellowship",
    category: "feast",
    src: "/gallery/305A7797.JPG",
    type: "image",
    date: "02.11.2025",
  },
  {
    id: "f5",
    title: "Hierarchical Procession & Welcome Ceremony",
    category: "feast",
    src: "/gallery/305A7799.JPG",
    type: "image",
    date: "01.11.2025",
  },
  {
    id: "f6",
    title: "Solemn Liturgical Benediction & Holy Cross Blessing",
    category: "feast",
    src: "/gallery/305A7811.JPG",
    type: "image",
    date: "04.11.2017",
  },

  // -------------------------------------------------------------
  // 4. Historical Photos (Foundations, Archival Records, Early Era)
  // -------------------------------------------------------------
  {
    id: "h1",
    title: "Early Parish Congregation & Pioneers Assembly",
    category: "historical",
    src: "/history/1.jpg",
    type: "image",
    date: "12.04.1994",
  },
  {
    id: "h2",
    title: "Laying the Foundation Stone & Early Consecration",
    category: "historical",
    src: "/history/IMG_20240807_000341.jpg",
    type: "image",
    date: "07.01.2000",
  },
  {
    id: "h3",
    title: "Parish Council with Catholicos HB Mor Baselios Thomas I",
    category: "historical",
    src: "/history/SKM_C30803062115450_0015.jpg.jpeg",
    type: "image",
    date: "11.08.2002",
  },
  {
    id: "h4",
    title: "Holy Mooroon Consecration Plaque Unveiling",
    category: "historical",
    src: "/history/SKM_C30803062115450_0018.jpg.jpeg",
    type: "image",
    date: "10-11.08.2002",
  },
  {
    id: "h5",
    title: "Establishment of St. Gregorios Public School & Trust",
    category: "historical",
    src: "/history/School.jpeg",
    type: "image",
    date: "01.06.1994",
  },
  {
    id: "h6",
    title: "Early Parish Holy Qurbana Celebration at Priyamvada",
    category: "historical",
    src: "/history/ba74b38a-0786-4107-a28a-8a835cf894f2.jpg",
    type: "image",
    date: "24.04.1994",
  },
];
