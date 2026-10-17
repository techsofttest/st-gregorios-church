export interface DonationCause {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  titleHighlight: string;
  shortDescription: string;
  fullDescription: string;
  bulletHeading: string;
  bullets: string[];
  callout: string;
  scriptureQuote: string;
  scriptureCitation: string;
  qrImage: string;
  upiId: string;
  causeImages?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  accountDetails?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    branch: string;
  };
}

export const donationCauses: DonationCause[] = [
  {
    id: "students",
    tabLabel: "Educational Aid",
    badge: "Students & Youth Empowerment",
    title: "Educational Aid for",
    titleHighlight: "Deserving Students",
    shortDescription:
      "Empowering underprivileged children and youth with tuition support, textbooks, uniforms, and digital learning tools.",
    fullDescription:
      "Education is the most enduring gift of mercy we can bestow upon a young life. Through our Educational Assistance Ministry, our parish sponsors academic fees, textbooks, laboratory uniforms, and examination subsidies for bright, economically marginalized students regardless of background.",
    bulletHeading: "How Your Contribution Empowers Students:",
    bullets: [
      "School & college semester tuition sponsorships",
      "Essential stationery, study guides, textbooks and backpacks",
      "Digital learning tablets and vocational training assistance",
      "Mentorship and after-school academic tutoring sessions",
    ],
    callout:
      "By lighting the lamp of knowledge, you help a child break free from cyclical hardship and realize God-given potential.",
    scriptureQuote:
      "Instruct the wise and they will be wiser still; teach the righteous and they will add to their learning.",
    scriptureCitation: "Proverbs 9:9",
    qrImage: "/qr-mock/qr-students.png",
    upiId: "stgregorios.education@paytm",
    causeImages: [
      {
        src: "/charity/students.jpg",
        alt: "Parish student learning support",
        caption: "Classroom learning & tuition support",
      },
      {
        src: "/charity/students2.jpg",
        alt: "Young students receiving educational aid",
        caption: "Study kits & academic sponsorships",
      },
      {
        src: "/charity/students3.jpg",
        alt: "Youth empowerment and educational mentorship",
        caption: "Higher education & career mentorship",
      },
    ],
    accountDetails: {
      accountName: "St. Gregorios Orthodox Church - Education Fund",
      accountNumber: "024510100054321",
      bankName: "South Indian Bank",
      ifscCode: "SIBL0000245",
      branch: "Mulund West, Mumbai",
    },
  },
  {
    id: "housing",
    tabLabel: "Bhavana Nirmanam",
    badge: "Bhavana Nirmanam Shelter Initiative",
    title: "Shelter & Homes for the",
    titleHighlight: "Homeless & Poor",
    shortDescription:
      "Providing safe, durable dwellings and sanitation facilities to poor and landless families through Bhavana Nirmanam.",
    fullDescription:
      "The Bhavana Nirmanam Project is a flagship charitable mission of St. Gregorios Church, dedicated to building and rehabilitating secure brick-and-mortar homes for impoverished families who lack roofs over their heads. We work with local diocese volunteers to fund construction from foundation to completion.",
    bulletHeading: "Bhavana Nirmanam Focus Areas:",
    bullets: [
      "New low-cost home construction for destitute families",
      "Roofing repairs, structural reinforcement, and weatherproofing",
      "Clean drinking water connections and hygienic sanitation units",
      "Emergency post-flood disaster home restoration",
    ],
    callout:
      "Every brick laid represents a foundation of human dignity, protection, and renewed hope for an entire generation.",
    scriptureQuote:
      "My people will dwell in peaceful habitations, in secure dwellings, and in quiet resting places.",
    scriptureCitation: "Isaiah 32:18",
    qrImage: "/qr-mock/qr-housing.png",
    upiId: "stgregorios.bhavananirman@paytm",
    causeImages: [
      {
        src: "/charity/destroyed-building.jpg",
        alt: "Dilapidated shelters identified for rebuilding",
        caption: "Shelters in critical need of reconstruction",
      },
      {
        src: "/charity/flood.jpg",
        alt: "Disaster and flood relief shelter rebuilding",
        caption: "Disaster restoration & flood resilient housing",
      },
    ],
    accountDetails: {
      accountName: "St. Gregorios Church - Bhavana Nirmanam Trust",
      accountNumber: "024510100088910",
      bankName: "State Bank of India",
      ifscCode: "SBIN0001234",
      branch: "Mulund West, Mumbai",
    },
  },
  {
    id: "elderly",
    tabLabel: "Elder Care",
    badge: "Elder Care & Assisted Living",
    title: "Care & Dignity for the",
    titleHighlight: "Elderly & Vulnerable",
    shortDescription:
      "Ensuring comfort, daily nourishment, geriatric healthcare, and emotional fellowship for elderly people in need.",
    fullDescription:
      "Honoring our elders is a sacred duty entrusted to the Church. Through our Elder Care Program, we extend medical assistance, nutritional food kits, home-nurse visits, and loving companionship to seniors who are abandoned, bedridden, or living alone on meager resources.",
    bulletHeading: "Elder Care Outreach Includes:",
    bullets: [
      "Monthly chronic illness medication and checkup stipends",
      "Nutritious dry ration supplies and prepared meals",
      "Mobility aids including wheelchairs, walkers, and hearing aids",
      "Pastoral home visits, communion, and emotional fellowship",
    ],
    callout:
      "Our seniors gave their prime years to nurture communities; it is now our sacred calling to surround them with comfort and love.",
    scriptureQuote:
      "Even to your old age and gray hairs I am he, I am he who will sustain you.",
    scriptureCitation: "Isaiah 46:4",
    qrImage: "/qr-mock/qr-elderly.png",
    upiId: "stgregorios.eldercare@paytm",
    causeImages: [
      {
        src: "/charity/elder.jpg",
        alt: "Elderly parishioner medical care",
        caption: "Healthcare stipends & medical monitoring",
      },
      {
        src: "/charity/elder2.jpg",
        alt: "Compassionate fellowship with seniors",
        caption: "Compassionate home visits & pastoral fellowship",
      },
      {
        src: "/charity/elder3.jpg",
        alt: "Daily nourishment and support for the elderly",
        caption: "Nutrition kits & assisted living support",
      },
    ],
    accountDetails: {
      accountName: "St. Gregorios Church - Elder Care Mission",
      accountNumber: "024510100077654",
      bankName: "South Indian Bank",
      ifscCode: "SIBL0000245",
      branch: "Mulund West, Mumbai",
    },
  },
  {
    id: "charity",
    tabLabel: "Charity & Medical",
    badge: "Parish Charity & Medical Relief",
    title: "Community Charity &",
    titleHighlight: "Emergency Medical Relief",
    shortDescription:
      "Offering critical dialysis support, cancer care aid, surgical assistance, and immediate crisis relief for struggling families.",
    fullDescription:
      "Inspired by the miraculous compassion of St. Gregorios of Parumala, our General Charity and Medical Relief Fund stands as an immediate lifeline for families overwhelmed by catastrophic illnesses, hospital bills, and sudden economic distress.",
    bulletHeading: "Direct Impact of Your Charity:",
    bullets: [
      "Dialysis and emergency oncology treatment sponsorships",
      "Cardiac surgeries and specialized medicines for uninsured patients",
      "Emergency financial assistance for families in sudden distress",
      "Community food distribution and festive charity outreach",
    ],
    callout:
      "Your compassion becomes the healing hands of Christ, relieving unbearable anguish in hospital wards and struggling homes.",
    scriptureQuote:
      "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
    scriptureCitation: "Matthew 25:40",
    qrImage: "/qr-mock/qr-charity.png",
    upiId: "stgregorios.charity@paytm",
    causeImages: [
      {
        src: "/charity/food.jpg",
        alt: "Community food aid and ration distribution",
        caption: "Warm meals & dry grocery food distribution",
      },
      {
        src: "/charity/flood.jpg",
        alt: "Crisis and emergency medical relief",
        caption: "Crisis intervention & immediate medical relief",
      },
    ],
    accountDetails: {
      accountName: "St. Gregorios Jacobite Syrian Church - Charity Fund",
      accountNumber: "024510100012345",
      bankName: "South Indian Bank",
      ifscCode: "SIBL0000245",
      branch: "Mulund West, Mumbai",
    },
  },
];
