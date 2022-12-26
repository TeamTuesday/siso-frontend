import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';

import Button from '@/components/Common/Button.svelte';
import VoteContents from '@/components/Vote/VoteContents.svelte';
import VoteInfo from '@/components/Vote/VoteInfo.svelte';

describe('Vote', () => {
  test('should have props', () => {
    const text = 'button description';
    const {getByText} = render(Button, {props: {text}});
    expect(getByText(text)).toBeInTheDocument();
  });

  test('should have props', () => {
    const title = 'vote-title';
    const {getByText} = render(VoteContents, {props: {title}});
    expect(getByText(title)).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const {container} = render(VoteInfo);
    expect(container).toMatchSnapshot();
  });
});
