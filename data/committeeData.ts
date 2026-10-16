export interface CommitteeMember {
  name: string;
  position: string;
  image: string;
  category: "office-bearer" | "managing-committee" | "auditor" | "council";
  isVicar?: boolean;
}

export const committeeMembersData: CommitteeMember[] = [
  // Office Bearers
  {
    name: "Rev. Fr. Eldo Kodiyattil",
    position: "Vicar & President",
    image: "/vicar-office-bearers/FrEldo-Vicar.png",
    category: "office-bearer",
    isVicar: true,
  },
  {
    name: "M. C. Abraham",
    position: "Vice President",
    image: "/vicar-office-bearers/M C Abraham - Vice Resident.png",
    category: "office-bearer",
  },
  {
    name: "Jobin Jacob",
    position: "Treasurer",
    image: "/vicar-office-bearers/Jobin_Jacob-Treasurer.png",
    category: "office-bearer",
  },
  {
    name: "Jebin Philippose",
    position: "Secretary",
    image: "/vicar-office-bearers/Jebin_philippose-Secretary.png",
    category: "office-bearer",
  },
  {
    name: "Sujamol Biju",
    position: "Joint Secretary",
    image: "/vicar-office-bearers/Sujamol_Biju-Jt_Secretary.png",
    category: "office-bearer",
  },

  // MC Members
  {
    name: "A. M. Sunny",
    position: "MC Member",
    image: "/committee-members/A M_Sunny.jpg",
    category: "managing-committee",
  },
  {
    name: "Alex Mathew",
    position: "MC Member",
    image: "/committee-members/Alex_Mathew.jpg",
    category: "managing-committee",
  },
  {
    name: "Aleyamma Sunny",
    position: "MC Member",
    image: "/committee-members/Aleyamma_Sunny.jpg",
    category: "managing-committee",
  },
  {
    name: "Biju Varghese",
    position: "MC Member",
    image: "/committee-members/BIJU_VARGHESE2.jpg",
    category: "managing-committee",
  },
  {
    name: "Feby Koshy",
    position: "MC Member",
    image: "/committee-members/FEBY_KOSHY.jpg",
    category: "managing-committee",
  },
  {
    name: "George Poulose",
    position: "MC Member",
    image: "/committee-members/George_Poulose.jpg",
    category: "managing-committee",
  },
  {
    name: "Hima Pramod",
    position: "MC Member",
    image: "/committee-members/HIMA_PRAMOD.jpg",
    category: "managing-committee",
  },
  {
    name: "Jacob Pulinthanath",
    position: "MC Member",
    image: "/committee-members/Jacob_Pulinthanath.jpg",
    category: "managing-committee",
  },
  {
    name: "Jacob Thomas",
    position: "MC Member",
    image: "/committee-members/Jacob_Thomas.jpg",
    category: "managing-committee",
  },
  {
    name: "Joy Joseph",
    position: "MC Member",
    image: "/committee-members/Joy_Joseph.jpg",
    category: "managing-committee",
  },
  {
    name: "K. T. Philipose",
    position: "MC Member",
    image: "/committee-members/K T_Philipose.jpg",
    category: "managing-committee",
  },
  {
    name: "Manu M. C.",
    position: "MC Member",
    image: "/committee-members/MANU_M C.jpg",
    category: "managing-committee",
  },
  {
    name: "Nisha Shibi Paul",
    position: "MC Member",
    image: "/committee-members/NISHA_SHIBI_PAUL.jpg",
    category: "managing-committee",
  },
  {
    name: "Oommen Mathew",
    position: "MC Member",
    image: "/committee-members/Oommen_Mathew.jpg",
    category: "managing-committee",
  },
  {
    name: "Poppy Elizabeth Babu",
    position: "MC Member",
    image: "/committee-members/POPPY_ELIZEBETH_BABU.jpg",
    category: "managing-committee",
  },
  {
    name: "Pramod Pudiyedath",
    position: "MC Member",
    image: "/committee-members/PRAMOD_PUDIYEDATH.jpg",
    category: "managing-committee",
  },
  {
    name: "Saji Thomas",
    position: "MC Member",
    image: "/committee-members/Saji_Thomas2.jpg",
    category: "managing-committee",
  },
  {
    name: "Stevin Abraham",
    position: "MC Member",
    image: "/committee-members/Stevin_Abraham.jpg",
    category: "managing-committee",
  },
  {
    name: "T. A. Georgekutty",
    position: "MC Member",
    image: "/committee-members/T A_Georgekutty.jpg",
    category: "managing-committee",
  },

  // Internal Auditor / Council Representatives
  {
    name: "Steve Stephen Vaithara",
    position: "Internal Auditor",
    image: "/committee-members/Steve_Stephen_Vaithara.jpg",
    category: "auditor",
  },
  {
    name: "Shibi K. Paulose",
    position: "Diocese Council Member",
    image: "/committee-members/SHIBI_K_PAULOSE.jpg",
    category: "council",
  },
];
