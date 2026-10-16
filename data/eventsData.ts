export interface EventItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  image: string;
  link: string;
  category: "Liturgical Calendar" | "Annual Perunnal" | "Passion Week" | "Christmas" | "Easter";
  excerpt: string;
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    slug: "valia-perunal-feast-of-st-gregorios",
    title: "Annual Feast of St. Gregorios (Valia Perunal)",
    date: "01.11.2026 - 02.11.2026",
    time: "7:00 AM onwards",
    location: "Main Sanctuary & Altar",
    category: "Annual Perunnal",
    image: "/perunnal/b1.png",
    link: "/feast",
    excerpt:
      "The paramount celebration of our parish honoring our patron saint, St. Gregorios of Parumala, with solemn liturgical Raza, Holy Qurbana, and blessed Nercha.",
  },
  {
    id: 2,
    slug: "holy-passion-week-and-good-friday",
    title: "Holy Passion Week & Good Friday Services",
    date: "05.04.2026 - 10.04.2026",
    time: "Daily Services & Vigils",
    location: "Main Sanctuary",
    category: "Passion Week",
    image: "/interior/Ornate Candlelit Chapel Altar.png",
    link: "#",
    excerpt:
      "A week of deep reverence, prostrations, and prayers commemorating the passion and crucifixion of our Lord Jesus Christ.",
  },
  {
    id: 3,
    slug: "easter-kyomtho-divine-liturgy",
    title: "Kyomtho (Easter - Feast of the Resurrection) Liturgy",
    date: "12.04.2026",
    time: "3:30 AM & 7:00 AM",
    location: "Main Sanctuary",
    category: "Easter",
    image: "/interior/Symmetrical Syrian Orthodox Sanctuary.png",
    link: "#",
    excerpt:
      "Triumphant sunrise resurrection service, solemn blessing of the four corners of the universe, and joyous peace exchange among all parishioners.",
  },
  {
    id: 4,
    slug: "christmas-holy-nativity-vigil",
    title: "Yeldho Feast — Holy Nativity & Midnight Christmas Liturgy",
    date: "24.12.2026 - 25.12.2026",
    time: "6:30 PM & 8:00 PM",
    location: "Parish Altar & Courtyard",
    category: "Christmas",
    image: "/interior/Golden Aisle to the Sacred Altar.png",
    link: "#",
    excerpt:
      "Celebrating the miraculous incarnation of our Lord Jesus Christ with traditional fire pit (Theeyoozha), carols, and midnight Eucharistic Liturgy.",
  },
  {
    id: 5,
    slug: "parish-consecration-anniversary",
    title: "Parish Consecration Holy Mooroon Anniversary",
    date: "10.08.2026 - 11.08.2026",
    time: "9:00 AM - 1:00 PM",
    location: "Main Sanctuary & Parish Hall",
    category: "Liturgical Calendar",
    image: "/gallery/305A7815.JPG",
    link: "#",
    excerpt:
      "Commemorating the Holy Mooroon Consecration of our church with diocesan hierarchs and community charity initiatives.",
  },
  {
    id: 6,
    slug: "valia-perunal-relics-veneration",
    title: "Perunnal Holy Raza & Veneration of Saint Gregorios Relics",
    date: "02.11.2026",
    time: "5:00 PM onwards",
    location: "Parish Street Procession",
    category: "Annual Perunnal",
    image: "/perunnal/b2.png",
    link: "/feast",
    excerpt:
      "Traditional street procession with liturgical flags and veneration of the enshrined relics of Parumala Thirumeni.",
  },
  {
    id: 7,
    slug: "passion-week-pesaha-holy-communion",
    title: "Pesaha (Maundy Thursday) Liturgy & Passover Bread",
    date: "09.04.2026",
    time: "6:30 PM",
    location: "Main Sanctuary",
    category: "Passion Week",
    image: "/interior/Ornate Illuminated Church Shrine.png",
    link: "#",
    excerpt:
      "Holy Divine Liturgy commemorating the Mystical Supper and washing of the disciples' feet, followed by traditional Pesaha fellowship.",
  },
  {
    id: 8,
    slug: "easter-vigil-and-easter-breakfast",
    title: "Holy Saturday Vigil & Easter Morning Agape Feast",
    date: "11.04.2026 - 12.04.2026",
    time: "9:00 AM & 8:30 AM",
    location: "Sanctuary & Parish Hall",
    category: "Easter",
    image: "/gallery/305A7756.JPG",
    link: "#",
    excerpt:
      "Prayers of the Holy Saturday descent into hades, followed by Easter fellowship meal after the resurrection liturgy.",
  },
  {
    id: 9,
    slug: "christmas-carol-rounds-and-parish-fellowship",
    title: "Annual Parish Christmas Carols & Family Fellowship",
    date: "18.12.2026 - 22.12.2026",
    time: "5:30 PM - 9:30 PM",
    location: "Parish Families & Neighborhood",
    category: "Christmas",
    image: "/gallery/305A7760.JPG",
    link: "#",
    excerpt:
      "Parish choir, youth, and Sunday School visiting parishioners' homes with good tidings of Christmas cheer and blessings.",
  },
  {
    id: 10,
    slug: "shunoyo-fifteen-day-fast",
    title: "Shunoyo (Dormition of Mother Mary) 15-Day Fast & Feast",
    date: "01.08.2026 - 15.08.2026",
    time: "Daily 6:30 PM",
    location: "Sanctuary & Shrine",
    category: "Liturgical Calendar",
    image: "/gallery/305A7799.JPG",
    link: "#",
    excerpt:
      "Fifteen-day liturgical fast in honor of St. Mary, Mother of God, concluding with Holy Qurbana and blessed intercessory nercha.",
  },
  {
    id: 11,
    slug: "dono-epiphany-holy-baptism-feast",
    title: "Denho (Feast of Epiphany / Holy Theophany)",
    date: "06.01.2026",
    time: "7:00 AM",
    location: "Main Sanctuary",
    category: "Liturgical Calendar",
    image: "/gallery/305A7763.JPG",
    link: "#",
    excerpt:
      "Celebration of the baptism of our Lord in the Jordan with the traditional blessing of the waters ceremony.",
  },
  {
    id: 12,
    slug: "parumala-perunnal-intercessory-vigil",
    title: "Patronal Feast Intercessory Vigil & Nercha Distribution",
    date: "31.10.2026",
    time: "6:00 PM",
    location: "Main Sanctuary",
    category: "Annual Perunnal",
    image: "/perunnal/b3.png",
    link: "/feast",
    excerpt:
      "Solemn eve vigil of the Valia Perunal with special incense petitions and preparation of blessed food offering.",
  },
];
