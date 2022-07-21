declare namespace Module {
  interface Ivote {
    id: string;
    title: string;
    agreeDescription: string;
    oppositeDescription: string;
    voteAgreeCount: number;
    voteOppositeCount: number;
  }
}

export as namespace Module;
