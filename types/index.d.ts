declare namespace Module {
  interface Ivote {
    id: string;
    title: string;
    agreeDescription: string;
    disagreeDescription: string;
    voteAgreeCount: number;
    voteOppositeCount: number;
  }
}

export as namespace Module;
