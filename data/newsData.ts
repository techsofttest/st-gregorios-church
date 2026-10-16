export interface NewsDetailedStory {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  heroImages?: string[];
  eyebrow?: string;
  verseQuote?: string;
  verseCitation?: string;
  storyEyebrow?: string;
  storyTitle?: string;
  storyTitleHighlight?: string;
  paragraphs: {
    id: string;
    text: string;
    isLead?: boolean;
    sectionHeading?: string;
    inlineImage?: {
      src: string;
      alt?: string;
      caption?: string;
      aspect?: "wide" | "standard" | "portrait";
      pairSrc?: string;
      pairCaption?: string;
    };
  }[];
  concludingCallouts?: string[];
  scriptureBadge?: {
    quote: string;
    citation: string;
  };
  blessing?: string;
  gallery?: {
    src: string;
    title: string;
  }[];
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  link: string;
  category?: string;
  excerpt?: string;
}

export const newsDetailsData: Record<string, NewsDetailedStory> = {
  "patriarchal-visit-holy-divine-liturgy-celebrated": {
    id: 1,
    slug: "patriarchal-visit-holy-divine-liturgy-celebrated",
    title: "Patriarchal Visit & Holy Divine Liturgy Celebrated",
    date: "04.10.2026",
    category: "Apostolic Visit",
    image: "/news/1000009129.jpg",
    heroImages: ["/news/1000009129.jpg", "/news/55552670957_be8ce85b.jpg"],
    excerpt:
      "A blessed day of heavenly grace as the faithful gathered for Holy Divine Liturgy and apostolic benediction at the parish altar.",
    eyebrow: "Apostolic Chronicles · Mumbai Diocese",
    verseQuote: "Blessed is he who comes in the name of the Lord.",
    verseCitation: "Psalm 118:26",
    storyEyebrow: "Apostolic Visitations",
    storyTitle: "Divine Liturgy, Benediction &",
    storyTitleHighlight: "Apostolic Grace in Mumbai",
    paragraphs: [
      {
        id: "intro",
        text: "In an atmosphere of heavenly reverence, the parishioners and faithful gathered in full solemnity to celebrate the Holy Divine Liturgy during the historic apostolic visitation to the diocese. Incense ascended toward the sanctum as clergy and congregation united in prayers of thanksgiving for the peace, resilience, and spiritual unity of the Universal Syriac Orthodox Church.",
        isLead: true,
      },
      {
        id: "liturgical-celebration",
        text: "The Eucharistic celebration was presided over by our revered hierarchs, accompanied by priests, deacons, and choir members chanting the age-old Syriac hymns of Antioch. The celebration illuminated the enduring heritage handed down from the apostles, reminding every parishioner of their sacred baptismal commitment to truth, peace, and Christian charity.",
        sectionHeading: "Solemn Eucharistic Liturgy",
        inlineImage: {
          src: "/news/1000009129.jpg",
          alt: "Apostolic Divine Liturgy Celebration",
          caption: "Holy Divine Liturgy celebrated at the parish sanctuary",
          aspect: "wide",
        },
      },
      {
        id: "homily-reflection",
        text: "During the pastoral homily, the faithful were reminded to keep their eyes fixed upon Christ amidst modern trials, fostering harmony inside the family home, practicing sacrificial charity for the vulnerable, and holding fast to Orthodox sacramental traditions. The message reverberated deeply among parishioners of all generations.",
        sectionHeading: "Pastoral Address to the Faithful",
      },
      {
        id: "benediction",
        text: "Following the Holy Qurbana, special intercessory prayers were offered for universal peace, the welfare of our diocese, and the sick and elderly of the parish. The congregation received personal blessings and holy crosses, marking a milestone chronicle in the living history of St. Gregorios Church.",
      },
    ],
    concludingCallouts: [
      "Solemn Holy Divine Liturgy celebrated with diocesan clergy and faithful.",
      "Apostolic blessings bestowed upon all parishioners and spiritual organizations.",
      "Reaffirming ancient Syriac Antiochian liturgical heritage and parish unity.",
    ],
    scriptureBadge: {
      quote: "Peace be with you. As the Father has sent Me, I also send you.",
      citation: "John 20:21",
    },
    blessing: "May the divine grace of our Lord Jesus Christ and the blessings of the Apostolic Throne abide with us always.",
    gallery: [
      { src: "/news/1000009129.jpg", title: "Holy Divine Liturgy" },
      { src: "/news/55552670957_be8ce85b.jpg", title: "Synod Hierarchs Gathering" },
      { src: "/gallery/305A7802.JPG", title: "Parish Faithful in Prayer" },
    ],
  },

  "holy-synod-convenes-to-discuss-pastoral-guidance": {
    id: 2,
    slug: "holy-synod-convenes-to-discuss-pastoral-guidance",
    title: "Holy Synod Convenes to Discuss Pastoral Guidance",
    date: "28.09.2026",
    category: "Diocese & Synod",
    image: "/news/55552670957_be8ce85b.jpg",
    heroImages: ["/news/55552670957_be8ce85b.jpg"],
    excerpt:
      "Important pastoral deliberations, liturgical growth, and spiritual stewardship across parishes discussed during the Holy Synod session.",
    eyebrow: "Synodical Communications · Diocese Affairs",
    verseQuote: "Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers.",
    verseCitation: "Acts 20:28",
    storyEyebrow: "Ecclesiastical Deliberations",
    storyTitle: "Strengthening Parish Stewardship,",
    storyTitleHighlight: "Liturgical Life & Community Care",
    paragraphs: [
      {
        id: "synod-intro",
        text: "The Holy Synod of bishops convened in a spirit of collegiality and prayer to deliberate on pressing pastoral needs, youth spiritual formation, charitable outreach, and the welfare of parishes. The synodical assembly reviewed reports across dioceses and issued pastoral directives to nurture spiritual vitality.",
        isLead: true,
      },
      {
        id: "pastoral-guidelines",
        text: "The deliberations focused on enhancing Sunday School curricula, equipping young people with sound biblical teaching, safeguarding Syriac liturgical melodies, and establishing coordinated charitable funds to support families facing economic hardship.",
        sectionHeading: "Strategic Pastoral Initiatives",
        inlineImage: {
          src: "/news/55552670957_be8ce85b.jpg",
          alt: "Bishops and Synod Hierarchs",
          caption: "Hierarchs gathered in session for pastoral deliberations",
          aspect: "standard",
        },
      },
      {
        id: "call-to-faithful",
        text: "In their final communique, the fathers of the Synod called upon every family to cultivate personal daily prayers, frequent confession, and active participation in the Holy Eucharist, commending the dedicated clergy and lay leaders who faithfully administer parishes.",
      },
    ],
    concludingCallouts: [
      "Pastoral roadmap laid out for youth formation and parish spiritual growth.",
      "Preservation of authentic Syriac Orthodox liturgy and theological instruction.",
      "Expanded charitable directives for healthcare and community assistance.",
    ],
    scriptureBadge: {
      quote: "Let all things be done decently and in order.",
      citation: "1 Corinthians 14:40",
    },
    blessing: "May the Holy Spirit guide the shepherds of the Church in wisdom, truth, and love.",
  },

  "father-radomir-nikcevic-awarded-the-cross-of-saint-john": {
    id: 3,
    slug: "father-radomir-nikcevic-awarded-the-cross-of-saint-john",
    title: "Father Radomir Nikčević Awarded the Cross of Saint John",
    date: "15.09.2026",
    category: "Honors & Service",
    image: "/news/55553695266_566a6e52.jpg",
    heroImages: ["/news/55553695266_566a6e52.jpg"],
    excerpt:
      "Honoring dedicated service to Christian theology, pastoral care, and ecclesiastical fellowship with the Cross of Saint John.",
    eyebrow: "Ecclesiastical Honors · Theological Service",
    verseQuote: "His lord said unto him, Well done, good and faithful servant.",
    verseCitation: "Matthew 25:23",
    storyEyebrow: "Distinguished Service",
    storyTitle: "Recognition of Exemplary",
    storyTitleHighlight: "Ministry & Pastoral Dedication",
    paragraphs: [
      {
        id: "award-intro",
        text: "In recognition of decades of steadfast service to Christian theology, pastoral care, and inter-church fellowship, the prestigious Cross of Saint John was conferred upon Father Radomir Nikčević in a solemn ecclesiastical ceremony attended by clergy and scholars.",
        isLead: true,
      },
      {
        id: "award-citation",
        text: "The citation commended his tireless devotion to theological education, publishing authoritative patristic commentaries, and ministering with warmth to parishioners through turbulent times. His humility and scholarship continue to serve as a beacon for aspiring clergy.",
        sectionHeading: "Citation of Merit & Scholarship",
        inlineImage: {
          src: "/news/55553695266_566a6e52.jpg",
          alt: "Awarding the Cross of Saint John",
          caption: "Presentation of the ecclesiastical cross and citation",
          aspect: "standard",
        },
      },
      {
        id: "thanksgiving",
        text: "Expressing heartfelt gratitude, Father Radomir attributed all achievements to the grace of God and the prayers of the faithful, reaffirming his dedication to teaching, pastoral guidance, and fostering love across Christian traditions.",
      },
    ],
    concludingCallouts: [
      "Honored with the venerable Cross of Saint John for ecclesiastical service.",
      "Celebrated for contributions to theological education and patristic publications.",
      "An inspiration of humble pastoral ministry and Christian charity.",
    ],
    scriptureBadge: {
      quote: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
      citation: "Matthew 5:16",
    },
    blessing: "May the Lord bestow divine wisdom, vigor, and peace upon all who dedicate their lives to His Church.",
  },

  "diocesan-youth-conference-spiritual-fellowship": {
    id: 4,
    slug: "diocesan-youth-conference-spiritual-fellowship",
    title: "Diocesan Youth Conference & Spiritual Fellowship",
    date: "02.09.2026",
    category: "Youth Ministry",
    image: "/news/55553797928_2bff2e3d.jpg",
    heroImages: ["/news/55553797928_2bff2e3d.jpg"],
    excerpt:
      "Youth from across parishes gathered in Mulund for inspiring sessions, biblical reflection, choral singing, and lively community fellowship.",
    eyebrow: "Youth Association · Mumbai Diocese",
    verseQuote: "Remember now thy Creator in the days of thy youth.",
    verseCitation: "Ecclesiastes 12:1",
    storyEyebrow: "Youth Fellowship",
    storyTitle: "Empowering the Next Generation in",
    storyTitleHighlight: "Faith, Service & Fellowship",
    paragraphs: [
      {
        id: "youth-intro",
        text: "Energetic and spiritually focused young men and women from across the diocese gathered for the Annual Youth Conference held at St. Gregorios Church. The event brought together over 150 delegates for a weekend of prayer, panel discussions, praise, and purposeful social action.",
        isLead: true,
      },
      {
        id: "workshops",
        text: "Engaging workshops addressed contemporary questions: living an authentic Christian life in a digital age, navigating professional ethics, and serving church community needs. Renowned counselors and clergy facilitated interactive dialogue that resonated deeply with the participants.",
        sectionHeading: "Workshops and Bible Discussions",
        inlineImage: {
          src: "/news/55553797928_2bff2e3d.jpg",
          alt: "Youth Fellowship Conference",
          caption: "Diocesan youth gathered for praise, fellowship, and scripture study",
          aspect: "wide",
        },
      },
      {
        id: "community-service",
        text: "The conference concluded with the announcement of a year-long parish green initiative and youth-led charity drives to support elderly care homes in Mumbai.",
      },
    ],
    concludingCallouts: [
      "Over 150 youth delegates represented parishes across the Mumbai Diocese.",
      "Dynamic interactive seminars on modern challenges, faith, and ethics.",
      "Youth charity projects launched for ecological care and elderly welfare.",
    ],
    scriptureBadge: {
      quote: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.",
      citation: "1 Timothy 4:12",
    },
    blessing: "May the Lord bless our youth with courage, integrity, and devotion to Christ and His Holy Church.",
  },

  "commemoration-of-holy-saints-feast-blessings": {
    id: 5,
    slug: "commemoration-of-holy-saints-feast-blessings",
    title: "Commemoration of Holy Saints & Feast Blessings",
    date: "20.08.2026",
    category: "Liturgical Feast",
    image: "/news/55554081470_a9028e92.jpg",
    heroImages: ["/news/55554081470_a9028e92.jpg"],
    excerpt:
      "A solemn commemoration honoring the holy fathers and saints with traditional incense prayers, liturgical hymns, and intercession.",
    eyebrow: "Liturgical Feast · Parish Tradition",
    verseQuote: "The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon.",
    verseCitation: "Psalm 92:12",
    storyEyebrow: "Saints Commemoration",
    storyTitle: "Venerating the Sacred Legacy of",
    storyTitleHighlight: "The Holy Fathers & Intercessors",
    paragraphs: [
      {
        id: "feast-intro",
        text: "The parish observed the solemn commemoration of the Holy Saints with profound liturgical joy. Parishioners offered prayers of intercession, lighting candles and joining the traditional evening prayer and incense ceremonies handed down across centuries.",
        isLead: true,
      },
      {
        id: "perunnal-raza",
        text: "The Holy Divine Liturgy was followed by the traditional blessing procession (Raza) around the sanctuary, with liturgical fans, umbrellas, and songs honoring the faith and sacrifice of the saints who preserved Orthodox truth.",
        sectionHeading: "Holy Procession and Intercession",
        inlineImage: {
          src: "/news/55554081470_a9028e92.jpg",
          alt: "Holy Saints Commemoration Ceremony",
          caption: "Solemn prayer and incense blessing during the feast celebration",
          aspect: "standard",
        },
      },
      {
        id: "nercha-distribution",
        text: "At the conclusion of the prayers, traditional Nercha (Eucharistic fellowship offering) was distributed to all gathered, reaffirming unity and love among parishioners.",
      },
    ],
    concludingCallouts: [
      "Traditional evening prayer, incense blessing, and Holy Qurbana celebrated.",
      "Solemn Raza procession honoring holy fathers and righteous intercessors.",
      "Parish fellowship feast and distribution of blessed Nercha.",
    ],
    scriptureBadge: {
      quote: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us run with patience the race that is set before us.",
      citation: "Hebrews 12:1",
    },
    blessing: "Through the prayers of the Holy Mother of God and all Saints, may the Lord have mercy upon us.",
  },

  "sunday-school-annual-day-bible-quiz-awards": {
    id: 6,
    slug: "sunday-school-annual-day-bible-quiz-awards",
    title: "Sunday School Annual Day & Bible Quiz Awards",
    date: "12.08.2026",
    category: "Sunday School",
    image: "/gallery/305A7760.JPG",
    heroImages: ["/gallery/305A7760.JPG"],
    excerpt:
      "Celebrating the spiritual milestones, scripture recitations, and church history accomplishments of our bright Sunday School students.",
    eyebrow: "Sunday School Ministries · St. Gregorios Church",
    verseQuote: "Train up a child in the way he should go: and when he is old, he will not depart from it.",
    verseCitation: "Proverbs 22:6",
    storyEyebrow: "Spiritual Milestones",
    storyTitle: "Nurturing Young Hearts in",
    storyTitleHighlight: "Scripture, Worship & Virtue",
    paragraphs: [
      {
        id: "school-intro",
        text: "The annual Sunday School day was celebrated with immense enthusiasm and filial joy. Students across all grades demonstrated their knowledge of the Holy Bible, Syriac liturgical prayers, and Church history before a packed parish hall.",
        isLead: true,
      },
      {
        id: "performances-awards",
        text: "The program showcased scripture memorization recitals, devotional choral hymns, and skits portraying the lives of the early apostles. Outstanding students were awarded certificates and trophies for their academic excellence in diocesan examinations.",
        sectionHeading: "Scripture Recitals & Choral Presentations",
        inlineImage: {
          src: "/gallery/305A7760.JPG",
          alt: "Sunday School Children and Teachers",
          caption: "Young students and dedicated teachers celebrated during Annual Day",
          aspect: "wide",
        },
      },
      {
        id: "gratitude-teachers",
        text: "The Vicar commended the dedicated Sunday School teachers for their sacrificial service in laying strong spiritual foundations for future church generations.",
      },
    ],
    concludingCallouts: [
      "Annual Day celebration highlighting student biblical knowledge and talents.",
      "Awards presented for diocesan examinations and scripture quiz champions.",
      "Commending the tireless dedication of parish Sunday School teachers.",
    ],
    scriptureBadge: {
      quote: "Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.",
      citation: "Mark 10:14",
    },
    blessing: "May the Holy Spirit guide our children into wisdom, righteous living, and deep love for God.",
  },

  "silver-jubilee-celebration-preparations-parish-assembly": {
    id: 7,
    slug: "silver-jubilee-celebration-preparations-parish-assembly",
    title: "Silver Jubilee Celebration Preparations & Parish Assembly",
    date: "28.07.2026",
    category: "Parish Assembly",
    image: "/gallery/305A7815.JPG",
    heroImages: ["/gallery/305A7815.JPG"],
    excerpt:
      "Parish council, elders, and spiritual organizations convene to organize the silver jubilee anniversary events and community welfare drives.",
    eyebrow: "Parish Assembly · Silver Jubilee",
    verseQuote: "Hitherto hath the Lord helped us.",
    verseCitation: "1 Samuel 7:12",
    storyEyebrow: "Milestone Anniversary",
    storyTitle: "Celebrating 25 Glorious Years of",
    storyTitleHighlight: "Faith, Worship & Community Life",
    paragraphs: [
      {
        id: "jubilee-intro",
        text: "A special General Body meeting of St. Gregorios Church convened under the presidency of the Vicar to finalize preparations for the upcoming Silver Jubilee celebrations, commemorating 25 years of consecrated worship and service at the church premises.",
        isLead: true,
      },
      {
        id: "committees-plans",
        text: "Sub-committees were formed covering liturgical arrangements, jubilee souvenir publication, charitable welfare programs, and church renovation works. Parishioners shared fond memories of the founding years and expressed overwhelming support for all commemorative initiatives.",
        sectionHeading: "Jubilee Roadmap & Committees",
        inlineImage: {
          src: "/gallery/305A7815.JPG",
          alt: "Parish Assembly Deliberations",
          caption: "Parish assembly reviewing Silver Jubilee plans and souvenir preparations",
          aspect: "standard",
        },
      },
      {
        id: "pledges-unity",
        text: "The assembly resolved to launch a dedicated Silver Jubilee Charity Fund aimed at providing educational scholarships and medical aid to underprivileged families in Mumbai.",
      },
    ],
    concludingCallouts: [
      "General Parish Assembly convened to finalize Silver Jubilee celebrations.",
      "Jubilee Souvenir and historical chronicle archives unveiled for publication.",
      "Silver Jubilee Charity Fund instituted for education and healthcare support.",
    ],
    scriptureBadge: {
      quote: "And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land... it shall be a jubilee unto you.",
      citation: "Leviticus 25:10",
    },
    blessing: "May the Lord who led our fathers in faith grant us peace and joy as we celebrate this milestone.",
  },

  "morth-mariam-vanitha-samajam-annual-charity-mission": {
    id: 8,
    slug: "morth-mariam-vanitha-samajam-annual-charity-mission",
    title: "Morth Mariam Vanitha Samajam Annual Charity Mission",
    date: "14.07.2026",
    category: "Charity & Welfare",
    image: "/gallery/305A7799.JPG",
    heroImages: ["/gallery/305A7799.JPG"],
    excerpt:
      "The women's fellowship conducts charitable outreach, medical support assistance, and food distribution for vulnerable families in Mumbai.",
    eyebrow: "Women's Fellowship · Charity Mission",
    verseQuote: "She stretcheth out her hand to the poor; yea, she reacheth forth her hands to the needy.",
    verseCitation: "Proverbs 31:20",
    storyEyebrow: "Compassion in Action",
    storyTitle: "Hands That Serve, Hearts That Care:",
    storyTitleHighlight: "Morth Mariam Annual Outreach",
    paragraphs: [
      {
        id: "mission-intro",
        text: "The Morth Mariam Vanitha Samajam of St. Gregorios Church carried out its annual charitable mission, distributing ration kits, essential medical aid, and educational kits to deserving families in and around the Mulund and Thane regions.",
        isLead: true,
      },
      {
        id: "outreach-impact",
        text: "The initiative, funded through voluntary member contributions and craft sales, provided critical support to dozens of families. Volunteers personally visited beneficiaries, offering prayer, consolation, and practical assistance.",
        sectionHeading: "Direct Family Outreach & Assistance",
        inlineImage: {
          src: "/gallery/305A7799.JPG",
          alt: "Vanitha Samajam Charity Mission",
          caption: "Vanitha Samajam members organizing charitable relief and distribution",
          aspect: "standard",
        },
      },
      {
        id: "ongoing-commitment",
        text: "The Samajam reaffirmed its ongoing commitment to monthly support for elderly widows and child healthcare, continuing the saintly example of the Holy Mother of God.",
      },
    ],
    concludingCallouts: [
      "Over 100 essential ration kits and medical packets distributed to families in need.",
      "Dedicated educational support kits provided to underprivileged school students.",
      "Active women's ministry embodying Christian mercy, kindness, and devotion.",
    ],
    scriptureBadge: {
      quote: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
      citation: "Matthew 25:40",
    },
    blessing: "Through the intercession of Morth Mariam, Mother of God, may the Lord multiply every seed of compassion.",
  },

  "st-gregorios-public-school-academic-excellence-felicitation": {
    id: 9,
    slug: "st-gregorios-public-school-academic-excellence-felicitation",
    title: "St. Gregorios Public School Academic Excellence Felicitation",
    date: "30.06.2026",
    category: "Education",
    image: "/history/School.jpeg",
    heroImages: ["/history/School.jpeg"],
    excerpt:
      "Recognizing outstanding student achievements, ethical leadership, and academic dedication under the St. Gregorios Charitable Trust.",
    eyebrow: "Education & Trust · Mulund West",
    verseQuote: "The fear of the Lord is the beginning of wisdom: and the knowledge of the holy is understanding.",
    verseCitation: "Proverbs 9:10",
    storyEyebrow: "Academic Excellence",
    storyTitle: "Nurturing Minds, Building Character:",
    storyTitleHighlight: "Honoring Our Outstanding Students",
    paragraphs: [
      {
        id: "school-felicitation-intro",
        text: "St. Gregorios Public School and Junior College, functioning under the auspices of the St. Gregorios Charitable Trust, held its prestigious Academic Excellence Felicitation Ceremony to honor board toppers, merit scholars, and all-round student achievers.",
        isLead: true,
      },
      {
        id: "trust-vision",
        text: "Trustees and academic dignitaries praised the faculty and parents for maintaining 100% board examination pass records while cultivating moral responsibility and civic awareness among students. Scholarships were awarded to encourage higher studies.",
        sectionHeading: "Excellence in Board Examinations & Moral Formation",
        inlineImage: {
          src: "/history/School.jpeg",
          alt: "St. Gregorios Public School Campus",
          caption: "St. Gregorios Public School & Junior College campus in Mulund",
          aspect: "wide",
        },
      },
      {
        id: "future-plans",
        text: "The Trust announced modern laboratory upgrades and new digital learning resources to further enrich the academic experience for upcoming batches.",
      },
    ],
    concludingCallouts: [
      "100% pass record celebrated across SSC and HSC Board examinations.",
      "Merit scholarships awarded to high-achieving and deserving students.",
      "Fostering academic excellence and strong moral foundation since 1994.",
    ],
    scriptureBadge: {
      quote: "Apply thine heart unto instruction, and thine ears to the words of knowledge.",
      citation: "Proverbs 23:12",
    },
    blessing: "May Almighty God grant wisdom, knowledge, and divine protection to all students and teachers.",
  },

  "special-evening-prayer-intercession-for-peace-in-antioch": {
    id: 10,
    slug: "special-evening-prayer-intercession-for-peace-in-antioch",
    title: "Special Evening Prayer & Intercession for Peace in Antioch",
    date: "18.06.2026",
    category: "Prayer & Worship",
    image: "/gallery/305A7802.JPG",
    heroImages: ["/gallery/305A7802.JPG"],
    excerpt:
      "Parishioners unite in deep contemplation and intercessory prayers for spiritual renewal, universal peace, and our mother church.",
    eyebrow: "Special Liturgical Intercession · Evening Prayer",
    verseQuote: "Pray for the peace of Jerusalem: they shall prosper that love thee.",
    verseCitation: "Psalm 122:6",
    storyEyebrow: "Solemn Intercession",
    storyTitle: "United in Fervent Contemplation &",
    storyTitleHighlight: "Prayers for Peace in Antioch",
    paragraphs: [
      {
        id: "prayer-intro",
        text: "The parishioners of St. Gregorios Church gathered at dusk for a special evening of incense prayers, Psalms, and heartfelt intercessions dedicated to world peace, relief for suffering communities in the Middle East, and the welfare of the ancient Holy See of Antioch.",
        isLead: true,
      },
      {
        id: "psalmody-hymns",
        text: "Ancient Syriac hymns resounded in the candlelit sanctuary as the Vicar led the congregation in petitions for peace, protection of Christian sanctuaries, and divine healing for regions affected by war and strife.",
        sectionHeading: "Syriac Psalmody and Incense Prayers",
        inlineImage: {
          src: "/gallery/305A7802.JPG",
          alt: "Sanctuary Candlelit Prayers",
          caption: "Congregation engaged in quiet contemplative intercession",
          aspect: "standard",
        },
      },
      {
        id: "pledge-peace",
        text: "The evening closed with the Benediction of the Cross and a collective pledge to be peacemakers in everyday family and community life.",
      },
    ],
    concludingCallouts: [
      "Solemn candlelit vigil and traditional incense intercessory prayers.",
      "Special petitions offered for peace in the Middle East and universal unity.",
      "Spiritual renewal and community communion in Christ's love.",
    ],
    scriptureBadge: {
      quote: "Blessed are the peacemakers: for they shall be called the children of God.",
      citation: "Matthew 5:9",
    },
    blessing: "The Lord bless thee, and keep thee: The Lord make his face shine upon thee, and give thee peace.",
  },
};

export function getAllNewsSlugs(): string[] {
  return Object.keys(newsDetailsData);
}

export function getNewsDetail(slug: string): NewsDetailedStory | null {
  return newsDetailsData[slug] || null;
}

export const newsItemsData: NewsItem[] = [
  {
    id: 1,
    slug: "patriarchal-visit-holy-divine-liturgy-celebrated",
    title: "Patriarchal Visit & Holy Divine Liturgy Celebrated",
    date: "04.10.2026",
    category: "Apostolic Visit",
    image: "/news/1000009129.jpg",
    link: "/news/patriarchal-visit-holy-divine-liturgy-celebrated",
    excerpt:
      "A blessed day of heavenly grace as the faithful gathered for Holy Divine Liturgy and apostolic benediction at the parish altar.",
  },
  {
    id: 2,
    slug: "holy-synod-convenes-to-discuss-pastoral-guidance",
    title: "Holy Synod Convenes to Discuss Pastoral Guidance",
    date: "28.09.2026",
    category: "Diocese & Synod",
    image: "/news/55552670957_be8ce85b.jpg",
    link: "/news/holy-synod-convenes-to-discuss-pastoral-guidance",
    excerpt:
      "Important pastoral deliberations, liturgical growth, and spiritual stewardship across parishes discussed during the Holy Synod session.",
  },
  {
    id: 3,
    slug: "father-radomir-nikcevic-awarded-the-cross-of-saint-john",
    title: "Father Radomir Nikčević Awarded the Cross of Saint John",
    date: "15.09.2026",
    category: "Honors & Service",
    image: "/news/55553695266_566a6e52.jpg",
    link: "/news/father-radomir-nikcevic-awarded-the-cross-of-saint-john",
    excerpt:
      "Honoring dedicated service to Christian theology, pastoral care, and ecclesiastical fellowship with the Cross of Saint John.",
  },
  {
    id: 4,
    slug: "diocesan-youth-conference-spiritual-fellowship",
    title: "Diocesan Youth Conference & Spiritual Fellowship",
    date: "02.09.2026",
    category: "Youth Ministry",
    image: "/news/55553797928_2bff2e3d.jpg",
    link: "/news/diocesan-youth-conference-spiritual-fellowship",
    excerpt:
      "Youth from across parishes gathered in Mulund for inspiring sessions, biblical reflection, choral singing, and lively community fellowship.",
  },
  {
    id: 5,
    slug: "commemoration-of-holy-saints-feast-blessings",
    title: "Commemoration of Holy Saints & Feast Blessings",
    date: "20.08.2026",
    category: "Liturgical Feast",
    image: "/news/55554081470_a9028e92.jpg",
    link: "/news/commemoration-of-holy-saints-feast-blessings",
    excerpt:
      "A solemn commemoration honoring the holy fathers and saints with traditional incense prayers, liturgical hymns, and intercession.",
  },
  {
    id: 6,
    slug: "sunday-school-annual-day-bible-quiz-awards",
    title: "Sunday School Annual Day & Bible Quiz Awards",
    date: "12.08.2026",
    category: "Sunday School",
    image: "/gallery/305A7760.JPG",
    link: "/news/sunday-school-annual-day-bible-quiz-awards",
    excerpt:
      "Celebrating the spiritual milestones, scripture recitations, and church history accomplishments of our bright Sunday School students.",
  },
  {
    id: 7,
    slug: "silver-jubilee-celebration-preparations-parish-assembly",
    title: "Silver Jubilee Celebration Preparations & Parish Assembly",
    date: "28.07.2026",
    category: "Parish Assembly",
    image: "/gallery/305A7815.JPG",
    link: "/news/silver-jubilee-celebration-preparations-parish-assembly",
    excerpt:
      "Parish council, elders, and spiritual organizations convene to organize the silver jubilee anniversary events and community welfare drives.",
  },
  {
    id: 8,
    slug: "morth-mariam-vanitha-samajam-annual-charity-mission",
    title: "Morth Mariam Vanitha Samajam Annual Charity Mission",
    date: "14.07.2026",
    category: "Charity & Welfare",
    image: "/gallery/305A7799.JPG",
    link: "/news/morth-mariam-vanitha-samajam-annual-charity-mission",
    excerpt:
      "The women's fellowship conducts charitable outreach, medical support assistance, and food distribution for vulnerable families in Mumbai.",
  },
  {
    id: 9,
    slug: "st-gregorios-public-school-academic-excellence-felicitation",
    title: "St. Gregorios Public School Academic Excellence Felicitation",
    date: "30.06.2026",
    category: "Education",
    image: "/history/School.jpeg",
    link: "/news/st-gregorios-public-school-academic-excellence-felicitation",
    excerpt:
      "Recognizing outstanding student achievements, ethical leadership, and academic dedication under the St. Gregorios Charitable Trust.",
  },
  {
    id: 10,
    slug: "special-evening-prayer-intercession-for-peace-in-antioch",
    title: "Special Evening Prayer & Intercession for Peace in Antioch",
    date: "18.06.2026",
    category: "Prayer & Worship",
    image: "/gallery/305A7802.JPG",
    link: "/news/special-evening-prayer-intercession-for-peace-in-antioch",
    excerpt:
      "Parishioners unite in deep contemplation and intercessory prayers for spiritual renewal, universal peace, and our mother church.",
  },
];
