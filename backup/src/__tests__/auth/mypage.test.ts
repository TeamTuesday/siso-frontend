import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen} from '@testing-library/svelte';
import MyPage from '@/pages/auth/MyPage.svelte';
import UserService from '@/service/user.service';

const mockUser = {
  id: 1,
  name: 'John Doe',
  age: 35,
  email: 'johndoe@gmail.com',
  address: '123 Main St, Anytown USA 12345',
  bio: "I'm a software developer with a passion for creating innovative solutions.",
  interests: ['coding', 'music', 'travel'],
  profileImage: 'https://example.com/johndoe.jpg'
};

// 서버를 설정합니다.
const server = setupServer(
  rest.get('/api/user', (_req, res, ctx) => {
    // 가짜 유저 정보를 반환합니다.
    return res(ctx.json<UserModule.Iuser>(mockUser));
  })
);

// 테스트를 실행하기 전에 서버를 시작합니다.
beforeAll(() => server.listen());

// 각 테스트 케이스 실행 후 서버의 요청 핸들러를 초기화합니다.
afterEach(() => server.resetHandlers());

// 모든 테스트가 끝나면 서버를 종료합니다.
afterAll(() => server.close());

describe('MyPage', () => {
  it('displays user data when loaded', async () => {
    // UserService.getUser 메소드를 spyOn하여 호출 여부를 검증합니다.
    jest.spyOn(UserService, 'getUser');

    // MyPage를 렌더링합니다.
    render(MyPage);

    // "Loading..." 텍스트가 화면에 표시되는지 검증합니다.
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // "My Page" 텍스트가 화면에 표시될 때까지 기다립니다.
    await screen.findByText('My Page');

    // UserService.getUser 메소드가 한 번 호출되었는지 검증합니다.
    expect(UserService.getUser).toHaveBeenCalledTimes(1);

    // 유저 정보가 올바르게 렌더링되는지 검증합니다.
    expect(screen.getByText(`Name: ${mockUser.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Age: ${mockUser.age}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${mockUser.email}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Address: ${mockUser.address}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Bio: ${mockUser.bio}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Interests: ${mockUser.interests.join(', ')}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Profile Image: ${mockUser.profileImage}`)
    ).toBeInTheDocument();
  });
});
