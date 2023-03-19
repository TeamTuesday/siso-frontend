declare namespace UserModule {
  interface Iuser {
    id: number;
    name: string;
    age: number;
    email: string;
    address: string;
    bio: string;
    interests: string[];
    profileImage: string;
  }
}

export as namespace UserModule;
