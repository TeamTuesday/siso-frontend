declare namespace Module {
  interface Ivote {
    id: string;
    title: string;
    agreeDescription: string;
    disagreeDescription: string;
    voteAgreeCount: number;
    voteDisagreeCount: number;
    voteCount: number;
  }

  interface Imodal {
    component?: any;
    text?: string;
    ok?: () => void;
    cancel?: () => void;
    onlyOk?: boolean;
    position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    menu?: Imenu[];
  }

  interface Imenu {
    text?: string;
    color?: string;
    onClick?: () => void;
  }
}