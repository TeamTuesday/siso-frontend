declare namespace VoteModule {
  enum voteType {
    AGREE = 'AGREE',
    DISAGREE = 'DISAGREE'
  }
  interface BestComments {
    commentA: BestComment;
    commentB: BestComment;
  }
  interface BestComment {
    id: string;
    createdAt: string;
    updateAt: string;
    deleteAt: string;
    userId: string;
    parentId: string;
    voteType: voteType;
    comment: string;
    likeCount: number;
  }
}

export as namespace VoteModule;
