declare namespace Module {
  interface Ivote {
    id: number;
    title: string;
    created: Date;
    updated: Date;
    deleted: Date | null;
    agree_description: string;
    opposite_description: string;
    vote_agree_count: number;
    vote_opposite_count: number;
    vote_count: number;
  }
}

export as namespace Module;
