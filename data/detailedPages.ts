export interface DetailedPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  verseQuote?: string;
  verseCitation?: string;
  heroImage: string;
  heroImages?: string[];
  storyEyebrow: string;
  storyTitle: string;
  storyTitleHighlight: string;
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
  gallery: {
    src: string;
    title: string;
  }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export const detailedPagesData: Record<string, DetailedPageData> = {
  "feast-of-st-gregorios": {
    slug: "feast-of-st-gregorios",
    metaTitle: "Feast of St. Gregorios (Valia Perunal) | St. Gregorios Church",
    metaDescription:
      "Celebrate the annual Feast of St. Gregorios of Parumala (Valia Perunal) at St. Gregorios Jacobite Syrian Orthodox Church, Mulund, Mumbai.",
    eyebrow: "Annual Perunnal Celebration · Mumbai Diocese",
    title: "Feast of St. Gregorios",
    subtitle: "(Valia Perunal)",
    verseQuote: "The memory of the righteous is a blessing.",
    verseCitation: "Proverbs 10:7",
    heroImage: "/perunnal/b1.png",
    heroImages: ["/perunnal/b1.png", "/perunnal/b2.png", "/perunnal/b3.png"],
    storyEyebrow: "Patronal Celebration",
    storyTitle: "Honoring Our Beloved Patron,",
    storyTitleHighlight: "St. Gregorios of Parumala.",
    paragraphs: [
      {
        id: "feast-intro",
        text: "The St. Gregorios Valia Perunal is one of the most significant annual celebrations of St. Gregorios Jacobite Syrian Orthodox Church. The feast is dedicated to our beloved patron saint, St. Gregorios of Parumala, affectionately known as Parumala Thirumeni, whose holy life, unwavering faith, humility, and devotion to Christ continue to inspire countless faithful across generations.",
        isLead: true,
      },
      {
        id: "shepherd-prayer",
        text: "St. Gregorios was a shepherd of deep prayer and profound spiritual wisdom. From his early years, he dedicated himself to the service of God and the Church. His life was marked by prayer, fasting, compassion, simplicity, and an extraordinary commitment to serving the people entrusted to his care. Through his teachings and exemplary life, he encouraged the faithful to remain steadfast in faith and to live according to the Gospel of our Lord Jesus Christ.",
        inlineImage: {
          src: "/perunnal/b2.png",
          alt: "Raza Procession & Perunnal Devotion",
          caption: "Raza Procession carrying the holy cross and festal banners",
          aspect: "wide",
        },
      },
      {
        id: "faith-fellowship",
        text: "The Valia Perunal is a time when our parish community comes together as one family in Christ. The feast provides an opportunity for the faithful to participate in Holy Qurbana, evening prayers, devotional services, processions, and special intercessory prayers seeking the heavenly intercession of St. Gregorios.",
        sectionHeading: "A Celebration of Faith and Fellowship",
      },
      {
        id: "participation-unity",
        text: "The celebrations are enriched by the active participation of families, children, youth, elders, prayer fellowships, spiritual organizations, and various members of sister Churches. The feast therefore becomes not only a spiritual observance but also a beautiful expression of our parish unity, fellowship, and love for our patron saint.",
        inlineImage: {
          src: "/gallery/305A7815.JPG",
          alt: "Parish Shrine & Flagstaff",
          caption: "The consecrated Kurishinthotty and church grounds during feast celebrations",
          aspect: "standard",
        },
      },
    ],
    concludingCallouts: [
      "Blessed with the holy relics of St. Gregorios of Parumala.",
      "Gathering as one family in liturgical praise and devotion.",
      "Welcoming all faithful and seekers of holy intercession.",
    ],
    scriptureBadge: {
      quote: "Remember your leaders, who spoke the word of God to you. Consider the outcome of their way of life and imitate their faith.",
      citation: "Hebrews 13:7",
    },
    blessing: "May the intercession of our patron saint, St. Gregorios of Parumala, guide and protect our families always.",
    gallery: [
      { src: "/perunnal/b1.png", title: "Parumala Perunnal Devotion" },
      { src: "/perunnal/b2.png", title: "Raza Procession" },
      { src: "/perunnal/b3.png", title: "Holy Feast Fellowship" },
      { src: "/gallery/305A7815.JPG", title: "Church Shrine & Flagstaff" },
    ],
    ctaTitle: "Join Us for the Feast",
    ctaSubtitle: "Experience the profound grace, holy procession, and fellowship of St. Gregorios Valia Perunal.",
  },

  "history": {
    slug: "history",
    metaTitle: "Glorious Past & Heritage | St. Gregorios Jacobite Syrian Orthodox Church",
    metaDescription:
      "Explore the glorious history, foundation, silver jubilee milestone, and spiritual journey of St. Gregorios Jacobite Syrian Orthodox Church in Mulund, Mumbai.",
    eyebrow: "Silver Jubilee Milestone · Church History",
    title: "Glorious Past of St. Gregorios",
    subtitle: "Jacobite Syrian Orthodox Church",
    verseQuote: "Remember the days of old; consider the years of many generations.",
    verseCitation: "Deuteronomy 32:7",
    heroImage: "/history/1.jpg",
    heroImages: [
      "/history/1.jpg",
      "/history/IMG_20240807_000341.jpg",
      "/history/School.jpeg",
    ],
    storyEyebrow: "Historical Journey & Silver Jubilee",
    storyTitle: "A Legacy of Faith, Sacrifice,",
    storyTitleHighlight: "and Antiochian Heritage.",
    paragraphs: [
      {
        id: "jubilee-transformation",
        text: "A Jubilee is an invitation to profound transformation, both personal and communal. By renewing the bond with God, Creation and others it offers a unique opportunity for spiritual and social renewal. Each believer by participating in this event of Grace is called a peacemaker, a witness of Hope and a builder of just world. On this occasion of Silver Jubilee of St. Gregorios church, it would be appropriate to look back in to the history of Jacobite churches in Mumbai.",
        isLead: true,
      },
      {
        id: "congregation-1952",
        text: "To uphold the unflinching loyalty to the Ecclesiastical hierarchy of St. Peter, “The Jacobite Syrian church” was formed in Mumbai in the year 1952. The permission to start the congregation was granted by the then Malankara Metropolitan, H G Mor Athanasios Paulose of blessed memory. The first Holy Eucharist was celebrated by H G. Mor Clemis Abraham, Metropolitan on 23 Nov 1952 at St. Peters Church, Mazgaon. Regular Sunday services started at Holy Cross Church, Byculla on 04 Jan 1953 by celebrating Holy Qurbana by His Eminence Mor Yulios Elias Metropolitan, the Delegate of Holy See of Antioch in India and assisted by H G Mor Philaxinose Paulose (Later Cathilicose). In the year 1954 Very Rev. Jacob Kureekkal Cor- Episcopa was deputed to Mumbai to look after the affairs of Honavar Mission, a charity organization under the Evangelical Association of East. He was the guiding figure for Jacobites in Mumbai for more than three decades till his demise in 1987.",
      },
      {
        id: "mother-church-st-thomas",
        text: "The Mother Church in Kerala was unified with Orthodox faction in the year 1964. The Jacobite Syrian church in Mumbai was merged with the Outside Kerala diocese of the unified church. In early seventies the Church in Kerala was again divided as the Catholicose in Kottayam started defying the Patriarch and claiming autonomy. In the year 1975, when Kureekkal Achen was restrained by Orthodox faction from carrying out religious activities in Mumbai, the faithful decided to form St. Thomas Congregation in order to uphold the loyalty to the Patriarch of Antioch. The Congregation was formally inaugurated by HG. Mor Dionysius Thomas Metropolitan (later Catholicose) by celebrating Holy Qurbana at Holy Cross church, Byculla on 08 June 1975. Very Rev. Thomas Moothedam Cor- Episcopa (later Mor Theophilose Metropolitan) was the first Vicar of the Congregation. The Jacobite church in Mumbai is blessed with the apostolic visits of two Patriarchs, H H. Ignathios Yacoob Third in 1964 and H H. Ignatius Zakka I in 1982. Also the Suntroniso ceremony of the Catholicose HB Baselios Paulose II was conducted in 1975 at Byculla church by this congregation.",
      },
      {
        id: "mulund-service-centre",
        text: "Members from Kurla to Thane area played a vital role in the congregation. Prayer group and Christmas carols started in 1975. A plot of land was identified in Mulund near Michael Apartment and foundation stone for building a church was laid by the Catholicose Mor Baselios Paulose in 1984. But the project did not realize due to various reasons. A Service centre was started in 1982 for Mulund area and Holy Qurbana was celebrated at different places, such as Domenic Savio school in Ghatkopar, St. Marys Convent in Mulund and in stilt area of Michael Apartment and later to Priyamvada Building Vaithara Nagar, Mulund.",
      },
      {
        id: "independent-parish-1994",
        text: "It was the beginning of new dawn to the Diocese when Metropolitan Mor Themotheos Thomas took charge in 1991 and set up his Diocesan head quarters at Michel Apartment in Mulund, The requirement of an independent parish was strongly felt and requested the Metropolitan to upgrade the Service centre to an independent parish. Thus In April 1994 St. Gregorios Jacobite Syrian Church was formed and St. Gregorios charitable Trust was registered having registration No.D297 under Indian Trust Act. Rev. Fr. Kurian Maliyil was appointed as Vicar. Regular Sunday Services started at Priyamvada Building, Vaithara Nagar, Mulund West. Subsequent Vicars were Rev. Fr. Philipose Abraham and Paulson Keerikattil. In Aug 1999 Rev. Fr. Jacob Joseph was appointed as Vicar and under his leadership, the Gregorian family worked with new zeal and fervent prayers, which resulted in acquiring a plot of land measuring about 17000 Sq. feet on ACC road near Mulund Railway Station.",
      },
      {
        id: "consecration-2002",
        text: "Foundation stone for the Church building was laid on 07 Jan 2000 by the Diocesan metropolitan Mor Themotheos Thomas in the presence of Mor Philaxinos Yuhanon and Mor Gregorios Joseph. It was a big financial burden for a parish of about 50 members to complete the building. However with abundant blessings of Lord Almighty and intercession of our Patron Saints Mor Gregorios, Mother Mary and St. Baselios Eldo and financial help from well wishers the church building was completed in about two years time. Shri V P Stephen Vaithara under whose leadership the building was constructed was conferred with the title of Chevalier by the Patriarch of Antioch, Moron Mor Ignatius Zakka 1. The Mooroon consecration of the church was held by His Beatitude Mor Baselios Thomas, Catholicose of East assisted by HG Themotheos Thomas and HG Polycarpus Geevarghese on 10 and 11 August 2002. This was the first function of His Beatitude outside Kerala and first consecration of a church since elevation as Catholicose.",
        inlineImage: {
          src: "/history/IMG_20240807_000341.jpg",
          alt: "Foundation and Early Consecration",
          caption: "Laying the foundation stone and dedication of the parish church",
          aspect: "standard",
        },
      },
      {
        id: "relics-parsonage-vicars",
        text: "Relics of our Patron Saint Gregorios was enshrined by the Catholicose HB Baselios Thomas, HG Themotheos Thomas and HG Gregorios Joseph on 13 Nov 2005. The relics are taken out every year during the annual feast for veneration by faithful. A flat at Sreenagar in Thane was purchased as parsonage for accommodation of Vicar. Subsequent vicars since the transfer of Fr. Jacob Joseph in Oct 2002 were Rev. Frs. Isaac Mathew, Varghese Chenganat, Popson Varghese, Kuriakose Kollannur (Now Ramban at Mor Anthonios Syriac Orthodox Monastry,) Geevarghese Johnson, Jacob Kocheril Cor-Episcopa, George Mathew Kallappara, Wilson Jacob Cor- Episcopa, and Ajesh Thomas. Rev. Fr. Eldo Kodiattil, an young and energetic priest is the present Vicar since May 2026. A Cross Vault (Kurishinthotty) and a golden flag post was constructed and consecrated on 04 November 2017. Holy Qurbana is being celebrated every Sunday at 7.30 AM and every Friday at 6.30 PM.",
      },
      {
        id: "spiritual-trust-school",
        text: "Spiritual organizations such as Morth Mariam Vanitha Samajam, Youth Association, Sunday School, Antiochian Faith Protection movement, Elders Forum are very active and take lead in organizing various charity activities and public functions. St. Gregorios Charitable Trust formed in the year 1994 with the motto of “Not to be served but to Serve” is functioning from the church premises. St. Gregorios Public School and Junior college managed by the Trust is one of the well managed schools in the area.",
        inlineImage: {
          src: "/history/School.jpeg",
          alt: "St. Gregorios Public School",
          caption: "St. Gregorios Public School & Junior College established under the Charitable Trust",
          aspect: "wide",
        },
      },
      {
        id: "grateful-remembrance",
        text: "On this occasion of Silver Jubilee of the church we thankfully remember the leadership and spiritual support by Very Rev. Jacob Kureekkal Cor- Episcopa, Very Rev. Mathews Kavungal Cor-Episcopa, Very Rev. Varghese Valayil Cor-Episcopa, Rev. Fr. Abraham Padanilath and Fr. Mathew George Kallunkal for looking after the affairs of Mulund service centre. Rev. Fr. Jaison Kuriakose Chorattil is a member of our Parish who is presently vicar of St. Mary’s JSO Church Kalyan. We thankfully remember the previous Metropolitans H G. Themotheos Thomas H G Eusebius Kuriakose and HG. Alexandrios Thomas who led the Mumbai diocese from time to time. The church is striving for further development, spiritually and materialistically under the care and patronage of H G Eusabius Kuriakose, the Diocesan Asst. Metropolitan and Rev. Fr. Eldho Kodiyattil, the Vicar.",
      },
      {
        id: "gratitude-prayer",
        text: "We are grateful to the Patriarch of Antioch His Holiness Moron Mor Aphrem II, Catholicose His Beatitude Baselios Joseph, His Grace Eusebius Kuriakose and all the Metropolitans of Jacobite Syrian church for their guidance and co-operation. We set ourselves to the Heavenly Father on whose infinite grace we place our hope for the future. We pray that God Almighty may continue to shower His divine blessings in abundance on this church through the intersession of our Patron saints St. Gregorios and St. Baselios Eldo and unending blessings of Mother Mary.",
      },
    ],
    concludingCallouts: [
      "Over 7 decades of unwavering Syrian Orthodox witness in Mumbai.",
      "Consecrated in 2002 under the Supreme Apostolic Throne of Antioch.",
      "Celebrating faith, service, education, and community through grace.",
    ],
    scriptureBadge: {
      quote: "Hitherto hath the Lord helped us.",
      citation: "1 Samuel 7:12",
    },
    blessing: "May God Almighty continue to shower His divine blessings in abundance on this church.",
    gallery: [
      { src: "/history/1.jpg", title: "Early Parish Assembly" },
      { src: "/history/IMG_20240807_000341.jpg", title: "Foundation & Dedication" },
      { src: "/history/SKM_C30803062115450_0015.jpg.jpeg", title: "Historical Records & Archives" },
      { src: "/history/School.jpeg", title: "St. Gregorios Public School" },
    ],
    ctaTitle: "Be Part of Our Journey",
    ctaSubtitle: "Experience our rich heritage, vibrant community, and active spiritual ministries.",
  },

  "patriarch": {
    slug: "patriarch",
    metaTitle: "His Holiness Moran Mor Ignatius Aphrem II | Patriarch of Antioch",
    metaDescription:
      "His Holiness Moran Mor Ignatius Aphrem II, Patriarch of Antioch and All the East and Supreme Head of the Universal Syriac Orthodox Church.",
    eyebrow: "Universal Syriac Orthodox Church · Holy See of Antioch",
    title: "His Holiness Moran Mor",
    subtitle: "Ignatius Aphrem II",
    verseQuote: "Faithful to our Apostolic heritage, rooted in Christ, and united in the faith of the Church.",
    verseCitation: "Patriarchal Motto",
    heroImage: "/moran-mor-ignatius-Aphrem/His-Holiness-Moran-Mor-Ignatius-Aphrem-II-2.png",
    storyEyebrow: "Patriarch of Antioch & All the East",
    storyTitle: "Supreme Head of the",
    storyTitleHighlight: "Universal Syriac Orthodox Church",
    paragraphs: [
      {
        id: "patriarch-intro",
        text: "His Holiness Moran Mor Ignatius Aphrem II has served as the Patriarch of Antioch and All the East and the Supreme Head of the Universal Syriac Orthodox Church since 29 May 2014. As the spiritual father of the Syriac Orthodox faithful throughout the world, His Holiness continues the ancient Apostolic ministry of the See of Antioch, guiding the Church in faith, worship, unity and service.",
        isLead: true,
      },
      {
        id: "early-life-1",
        text: "His Holiness was born Sa'id Karim on 3 May 1965 in Qamishli, Syria, into a devout Syriac Orthodox family. From his early years, he was deeply influenced by the faith, spiritual traditions and rich Syriac heritage of the Church.",
        sectionHeading: "Early Life and Education",
      },
      {
        id: "early-life-2",
        text: "Recognizing his calling to serve the Church, he pursued theological education at St. Ephrem Theological Seminary in Atchaneh, Lebanon. He furthered his theological studies at the Coptic Theological Seminary in Cairo, Egypt, gaining a broad understanding of theology, philosophy and Christian history.",
      },
      {
        id: "early-life-3",
        text: "His academic journey continued in Paris, where he pursued doctoral studies in Syriac Patrology at the Catholic University of Paris. His doctoral research on St. Severus of Antioch reflected his deep engagement with the theological and spiritual heritage of the Syriac Church.",
      },
      {
        id: "ministry-1",
        text: "His Holiness was ordained to the diaconate and subsequently to the priesthood, beginning a ministry marked by pastoral care, theological teaching and service to the faithful.",
        sectionHeading: "Priestly and Episcopal Ministry",
      },
      {
        id: "ministry-2",
        text: "In 1996, he was consecrated a bishop with the ecclesiastical name Mor Cyril Aphrem Karim and appointed Patriarchal Vicar of the Syriac Orthodox Archdiocese of Aleppo, Syria. During his ministry in Aleppo, he devoted himself to strengthening the spiritual and social life of the Christian community and supporting initiatives in education, pastoral care and community welfare.",
      },
      {
        id: "ministry-3",
        text: "In 2001, he was appointed Archbishop of the Syriac Orthodox Archdiocese of the Eastern United States. Serving a growing and diverse Syriac Orthodox diaspora, he worked to strengthen parish life, nurture the younger generation and preserve the faith, language, culture and traditions of the Syriac Orthodox Church.",
      },
      {
        id: "patriarch-ascension-1",
        text: "Following the passing of His Holiness Moran Mor Ignatius Zakka I Iwas, the Holy Synod elected Mor Cyril Aphrem Karim as Patriarch in March 2014. He assumed the patriarchal name Moran Mor Ignatius Aphrem II, continuing the sacred tradition and succession of the Patriarchs of Antioch.",
        sectionHeading: "Patriarch of Antioch and All the East",
      },
      {
        id: "patriarch-ascension-2",
        text: "His patriarchal enthronement took place at St. Peter and St. Paul Cathedral in Maarat Saidnaya, near Damascus, and he formally began his ministry as the spiritual head of the Universal Syriac Orthodox Church.",
        inlineImage: {
          src: "/moran-mor-ignatius-Aphrem/His-Holiness-Moran-Mor-Ignatius-Aphrem-II.png",
          alt: "His Holiness Moran Mor Ignatius Aphrem II",
          caption: "His Holiness seated upon the historic Apostolic Throne of St. Peter in Antioch",
          aspect: "standard",
        },
      },
      {
        id: "patriarch-ascension-3",
        text: "As Patriarch, His Holiness has devoted himself to strengthening the spiritual life of the Church, promoting unity among the faithful and encouraging the preservation of its ancient Apostolic and Syriac heritage.",
      },
      {
        id: "peace-service-1",
        text: "His Holiness has placed strong emphasis on pastoral care, humanitarian service, ecumenical relations and interfaith dialogue. During periods of conflict and displacement in the Middle East, the Syriac Orthodox Church under his leadership has supported affected families and communities through humanitarian assistance, education and social initiatives.",
        sectionHeading: "A Voice for Peace and Service",
      },
      {
        id: "peace-service-2",
        text: "His Holiness has also consistently emphasized the importance of dialogue, reconciliation and peaceful coexistence among people of different faiths and traditions.",
      },
      {
        id: "heritage-preservation-1",
        text: "A significant part of His Holiness's ministry has been the preservation of the Syriac language, culture, spirituality and ecclesiastical traditions of the Church.",
        sectionHeading: "Preserving the Syriac Heritage",
      },
      {
        id: "heritage-preservation-2",
        text: "He has encouraged the younger generation and the worldwide Syriac Orthodox diaspora to remain connected to their Apostolic faith and heritage while living and witnessing as Christians in a changing world.",
      },
      {
        id: "heritage-preservation-3",
        text: "His pastoral vision places particular importance on youth participation, Christian education and strengthening families and parish communities, ensuring that the faith and traditions received from previous generations continue to flourish.",
      },
      {
        id: "ministry-faith-unity-1",
        text: "His Holiness Moran Mor Ignatius Aphrem II continues to lead the Syriac Orthodox Church as it carries forward its ancient Apostolic mission in the modern world. His ministry brings together faith, scholarship, pastoral care, humanitarian service, ecumenical engagement and the preservation of Syriac heritage.",
        sectionHeading: "A Ministry of Faith and Unity",
      },
      {
        id: "ministry-faith-unity-2",
        text: "For the faithful, the Patriarch remains a spiritual shepherd and a symbol of the continuing Apostolic heritage of the Church of Antioch.",
      },
    ],
    scriptureBadge: {
      quote: "Faithful to our Apostolic heritage, rooted in Christ, and united in the faith of the Church.",
      citation: "Patriarchal Proclamation",
    },
    gallery: [
      { src: "/moran-mor-ignatius-Aphrem/His-Holiness-Moran-Mor-Ignatius-Aphrem-II.png", title: "Patriarchal Blessing — Moran Mor Ignatius Aphrem II" },
      { src: "/moran-mor-ignatius-Aphrem/His-Holiness-Moran-Mor-Ignatius-Aphrem-II-2.png", title: "Apostolic Throne of Antioch" },
    ],
    ctaTitle: "Rooted in Antioch",
    ctaSubtitle: "Standing in full liturgical communion with the Supreme Holy Apostolic See of Antioch and All the East.",
  },

  "catholicos": {
    slug: "catholicos",
    metaTitle: "His Beatitude Aboon Mor Baselios Joseph | Catholicos of India",
    metaDescription:
      "His Beatitude Aboon Mor Baselios Joseph, Catholicos of India, Maphrian of the East & Malankara Metropolitan of the Jacobite Syrian Christian Church.",
    eyebrow: "Maphrian of the East · Malankara Metropolitan",
    title: "His Beatitude Aboon",
    subtitle: "Mor Baselios Joseph",
    verseQuote: "Faithfully serving Christ, His Church and His people.",
    verseCitation: "Episcopal Motto",
    heroImage: "/bishops/Baselious Joseph2.png",
    storyEyebrow: "Catholicos of India",
    storyTitle: "Presiding Hierarch of the",
    storyTitleHighlight: "Jacobite Syrian Christian Church",
    paragraphs: [
      {
        id: "catholicos-intro",
        text: "His Beatitude Aboon Mor Baselios Joseph is the Catholicos of India and the Presiding Hierarch of the Jacobite Syrian Christian Church in India, serving within the Holy Apostolic See of Antioch and All the East.",
        isLead: true,
      },
      {
        id: "birth-heritage",
        text: "Born Joseph on 10 November 1960 at Perumpilly, Mulanthuruthy, Kerala, he is the youngest of four children of Srambickal Pallathitta Geevarghese and Saramma. He is also a descendant of the family of the brother of St. Gregorios Geevarghese of Parumala.",
      },
      {
        id: "early-diaconate",
        text: "From an early age, he dedicated himself to the service of the Church. On 25 March 1974, at the age of thirteen, he was ordained as a deacon by Mor Gregorios Geevarghese of Perumpally at Mor Ignatius Dayro, Manjinikkara. He subsequently served for many years as secretary to Perumpally Thirumeni.",
      },
      {
        id: "theology-priesthood",
        text: "He pursued his higher education at Maharaja's College, Ernakulam, followed by theological studies at Mor Julius Seminary, Perumpilly. He later undertook advanced studies in philosophy in Ireland and further theological studies in the United States. On 25 March 1984, he was ordained as a priest by His Beatitude Aboon Mor Baselios Paulose II.",
      },
      {
        id: "consecration-kochi",
        text: "On 16 January 1994, Fr. Joseph Ramban was consecrated Metropolitan by His Holiness Patriarch Moran Mor Ignatius Zakka I Iwas in Damascus, receiving the name Mor Gregorios Joseph. He was appointed Metropolitan of the Kochi Diocese and was enthroned at Kyomtha Cathedral, Thiruvankulam, on 23 January 1994.",
      },
      {
        id: "leadership-capacities",
        text: "Over the years, Mor Gregorios Joseph served the Church in several important capacities, including leadership in Christian education and pastoral ministry. He served as President of the Malankara Jacobite Syrian Sunday School Association (MJSSA) and contributed to various charitable, educational and social initiatives. He was also elected Metropolitan Trustee of the Jacobite Syrian Christian Association in 2019.",
      },
      {
        id: "malankara-metropolitan-elevation",
        text: "In 2023, His Holiness Patriarch Moran Mor Ignatius Aphrem II appointed him Malankara Metropolitan. He also served as Catholicos Assistant to the late His Beatitude Aboon Mor Baselios Thomas I.",
      },
      {
        id: "consecration-catholicos",
        text: "Following the passing of His Beatitude Aboon Mor Baselios Thomas I in 2024, Mor Gregorios Joseph was elected to lead the Church in India. On 25 March 2025, His Holiness Patriarch Moran Mor Ignatius Aphrem II consecrated him as Catholicos (Maphrian) of India with the name Aboon Mor Baselios Joseph at St. Mary's Cathedral, Atchaneh, Lebanon. He was enthroned at Mar Athanasius Cathedral, Puthencruz, on 30 March 2025.",
      },
      {
        id: "catholicos-mission",
        text: "As Catholicos of India, His Beatitude continues to guide the faithful in India in communion with the Holy Apostolic See of Antioch and All the East, preserving the Apostolic faith, Syriac spiritual heritage and traditions of the Church.",
      },
      {
        id: "life-dedicated",
        text: "From his early ministry as a young deacon to his present service as Catholicos of India, His Beatitude Aboon Mor Baselios Joseph's life reflects a long journey of faith, prayer, pastoral service and dedication to the Church.",
        sectionHeading: "A Life Dedicated to Christ and His Church",
      },
    ],
    scriptureBadge: {
      quote: "Faithfully serving Christ, His Church and His people.",
      citation: "Apostolic Guidance",
    },
    gallery: [
      { src: "/bishops/Baselious Joseph2.png", title: "Aboon Mor Baselios Joseph — Catholicos of India" },
      { src: "/bishops/Baselious Joseph1.png", title: "His Beatitude Mor Baselios Joseph" },
    ],
    ctaTitle: "United in Apostolic Communion",
    ctaSubtitle: "Guided by our Catholicos in faith, liturgical worship, and Christian fellowship.",
  },

  "mor-eusebius-kuriakose": {
    slug: "mor-eusebius-kuriakose",
    metaTitle: "His Grace Mor Eusebius Kuriakose | Metropolitan",
    metaDescription:
      "His Grace Mor Eusebius Kuriakose, Metropolitan of Delhi Diocese, Patriarchal Vicar of the UAE and Gulf, and Assistant Metropolitan of Mumbai Diocese.",
    eyebrow: "Metropolitan of Delhi Diocese · Asst. Metropolitan of Mumbai",
    title: "His Grace Mor Eusebius",
    subtitle: "Kuriakose",
    verseQuote: "Preach the word; be prepared in season and out of season; correct, rebuke and encourage.",
    verseCitation: "2 Timothy 4:2",
    heroImage: "/bishops/Mor Eusebius-Kuriakose.jpg",
    storyEyebrow: "Diocesan Shepherd & Leadership",
    storyTitle: "Metropolitan of Delhi Diocese &",
    storyTitleHighlight: "Asst. Metropolitan of Mumbai",
    paragraphs: [
      {
        id: "eusebius-intro",
        text: "His Grace Mor Eusebius Kuriakose is a Metropolitan of the Malankara Jacobite Syrian Orthodox Church and a devoted shepherd of the Syriac Orthodox faithful. Born on 8 September 1970 in the Chalakkatukudi family of the Angamali Diocese, he was baptized with the name Kuriakose at St. Mary's Jacobite Syrian Orthodox Church, Pazhathottam.",
        isLead: true,
      },
      {
        id: "education-formation",
        text: "His Grace completed his Bachelor's degree in Sociology from Mar Athanasius College, Kothamangalam. He subsequently pursued theological studies at the Malankara Syrian Orthodox Theological Seminary, Mulanthuruthy, where he obtained a Diploma in Theological Studies. He further completed his Bachelor of Divinity (B.D.) at Bishop's College, Calcutta, and a Master's degree in Theology from Papal Seminary, Pune. His theological formation was complemented by studies in counselling.",
      },
      {
        id: "priesthood-mother-teresa",
        text: "His Grace entered the ordained ministry in 1992, when he was ordained as a deacon by His Grace Mor Severios Abraham. During the early years of his ministry, he served as secretary to the late Catholicos Aboon Mor Baselios Paulose II of blessed memory. While pursuing his theological studies in Calcutta, Deacon Kuriakose also had the opportunity to serve alongside Mother Teresa, an experience that contributed to his formation in Christian service and compassion.",
        sectionHeading: "Call to Priesthood",
      },
      {
        id: "pastoral-ministry-pune-mumbai",
        text: "In 2000, he was ordained as Kassisso (priest) by His Grace Mor Thimotheos Thomas and was appointed Vicar of St. Mary's Church, Pune. He also served as Assistant Vicar of the Byculla Church in Mumbai. His years of pastoral ministry were marked by his commitment to the spiritual and social needs of the faithful.",
      },
      {
        id: "episcopal-consecration",
        text: "In 2006, Fr. Kuriakose George was selected as bishop-designate for the Thrissur Diocese. On 2 July 2006, he was ordained Ramban with the monastic name Malachi by His Beatitude Aboon Mor Baselios Thomas I at St. George's Cathedral, Karingachira. On 3 July 2006, the Feast of St. Thomas, he was consecrated as Metropolitan at St. Thomas Jacobite Syrian Church, North Paravur, by His Beatitude Aboon Mor Baselios Thomas I, together with other newly consecrated Metropolitans. At his episcopal consecration, he received the name Mor Eusebius.",
        sectionHeading: "Episcopal Ministry",
      },
      {
        id: "thrissur-samajam",
        text: "His Grace initially served as Auxiliary Metropolitan of the Thrissur Diocese and subsequently assumed independent responsibility for the Diocese. He was also entrusted with responsibilities associated with Morth Mariam Samajam.",
      },
      {
        id: "ministry-beyond",
        text: "Mor Eusebius has served the Syriac Orthodox faithful in different regions and ministries, including pastoral and diocesan responsibilities in India and abroad. He served as Patriarchal Vicar of Ireland from 2011 to 2014, during a period of growth and development of the Jacobite Syrian Orthodox community there. His Grace has also participated in theological and ecumenical dialogue, representing the Malankara Syrian Orthodox Church in international discussions with other Christian traditions.",
        sectionHeading: "Ministry Beyond Malankara",
      },
      {
        id: "mumbai-diocese-service",
        text: "Mor Eusebius has maintained a close pastoral association with the faithful in Mumbai and Maharashtra. His ministry has included visits to and participation in the life of Jacobite Syrian Orthodox parishes in the region. Under his leadership the Mumbai Diocese could buy land in Khalapur which is being developed for the services towards the community. Today, His Grace is associated with the leadership of the Church as Metropolitan of the Delhi Diocese and Patriarchal Vicar of the United Arab Emirates and Gulf. He has also been appointed Assistant Metropolitan of Mumbai Diocese in the year 2026.",
        sectionHeading: "Service to the Mumbai Diocese",
      },
      {
        id: "life-of-service",
        text: "Throughout his ministry, Mor Eusebius Kuriakose has served the Church through pastoral care, theological education, missionary work, diocesan administration and ecumenical engagement. His ministry reflects a commitment to preserving the faith and traditions of the Syriac Orthodox Church, while nurturing the spiritual life of the faithful and strengthening the Church's witness across India and the wider world.",
        sectionHeading: "A Life of Service",
      },
      {
        id: "remembrance-service",
        text: "The faithful of the Jacobite Syrian Orthodox Church gratefully remember his pastoral presence, spiritual guidance and dedicated service to the Church and its people.",
      },
    ],
    blessing: "May the Lord continue to bless His Grace Mor Eusebius Kuriakose with wisdom, strength and abundant grace in his continued ministry for the glory of God and the growth of His Holy Church.",
    gallery: [
      { src: "/bishops/Mor Eusebius-Kuriakose.jpg", title: "HG Mor Eusebius Kuriakose — Metropolitan" },
    ],
    ctaTitle: "Under Pastoral Care",
    ctaSubtitle: "Growing spiritually under the archpastoral guidance and blessings of our Metropolitan.",
  },

  "vicar-fr-eldo-kodiyattil": {
    slug: "vicar-fr-eldo-kodiyattil",
    metaTitle: "Rev. Fr. Eldo Kodiyattil | Vicar, St. Gregorios Church Mulund",
    metaDescription:
      "Rev. Fr. Eldo Kodiyattil, Vicar of St. Gregorios Jacobite Syrian Orthodox Church, Mulund, Mumbai, and Member of Sabha Managing Committee and Mumbai Diocese Council.",
    eyebrow: "Parish Vicar · Mumbai Diocese",
    title: "Rev. Fr. Eldo",
    subtitle: "Kodiyattil",
    verseQuote: "The Lord is my shepherd; I shall not want.",
    verseCitation: "Psalm 23:1",
    heroImage: "/vicar/FrEldo-Vicar.png",
    storyEyebrow: "Pastoral Leadership & Ministry",
    storyTitle: "Serving the Gregorian Family in",
    storyTitleHighlight: "Faith, Prayer & Fellowship",
    paragraphs: [
      {
        id: "vicar-formation",
        text: "Rev. Fr. Eldo Kodiyattil pursued his Seminary Formation at Malankara Syrian Orthodox Theological Seminary (MSOT), Vettickal, Mulanthuruthy.",
        isLead: true,
      },
      {
        id: "vicar-ordination",
        text: "He was ordained to the Holy Priesthood as Kashisho by His Grace Kuriakose Mor Eusebiose Metropolitan on 30th April 2010 at St. Joseph Aramana Chapel, Chuvannamannu, Thrissur.",
      },
      {
        id: "thrissur-ministry",
        text: "He began his ministry in the Thrissur Diocese and served at St. Kuriakose Church, Mambra; St. George Church, Kayarady; and St. Mary's Church, Vellikkulangara from 2010 to 2013.",
        sectionHeading: "Pastoral Ministry & Experience",
      },
      {
        id: "mumbai-ministry",
        text: "Since 2013, he has been serving in the Mumbai Diocese at St. Gregorios Church, Nashik; St. Mary's Church, Vapi; St. Mary's Church, Surat; St. George Church, Panvel (Two Terms); St. Mary's Church, Pune; St. Thomas Church, Byculla; and presently at St. Gregorios Church, Mulund.",
      },
      {
        id: "home-parish-council",
        text: "His home parish is St. George church, Chuvannamannu. Worked as Clergy secretary of Mumbai Diocese and presently Member of the Sabha Managing Committee and Mumbai Diocese Council.",
        sectionHeading: "Diocesan Responsibilities",
      },
      {
        id: "family-life",
        text: "Spouse: Dr. Georly Eldo (Asst. Professor in English of Fr. Agnel School of Law, Vashi, Navi Mumbai). Children: Evelyn Miriam Eldo & Ephrem Abraham Eldo (9th grade students of Kendriya Vidyalaya Mankhurd, Mumbai).",
        sectionHeading: "Family",
      },
    ],
    concludingCallouts: [
      "Ordained to Holy Priesthood on 30 April 2010.",
      "Member of Sabha Managing Committee & Mumbai Diocese Council.",
      "Ministering to all families of St. Gregorios Church, Mulund.",
    ],
    scriptureBadge: {
      quote: "Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine.",
      citation: "1 Timothy 5:17",
    },
    blessing: "May Almighty God grant our Vicar grace, health, and wisdom in guiding our parish community.",
    gallery: [
      { src: "/vicar/FrEldo-Vicar.png", title: "Rev. Fr. Eldo Kodiyattil — Vicar" },
    ],
    ctaTitle: "Meet Our Parish Family",
    ctaSubtitle: "Join us for Holy Qurbana, pastoral counseling, and fellowship every week.",
  },
};

// Aliases mapping common links/slugs to canonical data
export const slugAliases: Record<string, string> = {
  "feast": "feast-of-st-gregorios",
  "valia-perunal": "feast-of-st-gregorios",
  "perunnal": "feast-of-st-gregorios",
  "church-history": "history",
  "moran-mor-ignatius-aphrem-ii": "patriarch",
  "ignatius-aphrem": "patriarch",
  "aboon-mor-baselios-joseph": "catholicos",
  "baselios-joseph": "catholicos",
  "metropolitan": "mor-eusebius-kuriakose",
  "eusebius-kuriakose": "mor-eusebius-kuriakose",
  "vicar": "vicar-fr-eldo-kodiyattil",
  "fr-eldo": "vicar-fr-eldo-kodiyattil",
  "fr-eldo-kodiyattil": "vicar-fr-eldo-kodiyattil",
};

export function getAllSlugs(): string[] {
  return [...Object.keys(detailedPagesData), ...Object.keys(slugAliases)];
}

export function getDetailedPage(slug: string): DetailedPageData | null {
  const normalizedSlug = slugAliases[slug.toLowerCase()] || slug.toLowerCase();
  return detailedPagesData[normalizedSlug] || null;
}
