type UserType = 'all' | 'pending' | 'blocked' | 'archive';

interface Props {
    type: UserType;
    num: number;
    title: string;
    titles?: string[];
  }
export const accountTypes: Props[] = [
    {
      title: "Total compte",
      // num: 9874,
      num: 0,
      type: "all",
      titles: [
        "Utilisateurs",
        "Phone",
        "Status",
        "Documments",
        "Date de création",
        "Action",
      ],
    },
    {
      title: "Compte en attente",
      // num: 567,
      num: 0,
      type: "pending",
      titles: [
        "Utilisateurs",
        "Phone",
        "Status",
        "Documments",
        "Date de création",
        "Action",
      ],
    },
    {
      title: "Compte bloqué",
      // num: 123,
      num: 0,
      type: "blocked",
      titles: [
        "Utilisateurs",
        "Phone",
        "Status",
        "Documments",
        "Date blocage",
        "Action",
      ],
    },
    {
      title: "Compte archivé",
      // num: 1456,
      num: 0,
      type: "archive",
      titles: [
        "Utilisateurs",
        "Phone",
        "Motifs",
        "Date archivage",
        "Action",
      ],
    },
  ]


  export const tableTitles=['First name','Last name','Phone','Services Done','Action']
  export const ServiceTitles = ['Code','Description','Date','Cost','Action']
