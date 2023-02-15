class UserService {
  getUser = (): Promise<UserModule.Iuser> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'John Doe',
          age: 35,
          email: 'johndoe@gmail.com',
          address: '123 Main St, Anytown USA 12345',
          bio: "I'm a software developer with a passion for creating innovative solutions.",
          interests: ['coding', 'music', 'travel'],
          profileImage: 'https://example.com/johndoe.jpg'
        });
      }, 1000);
    });
  };
}

export default new UserService();
