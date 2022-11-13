import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';

import VoteButton from '@/components/Vote/VoteButton.svelte';
import VoteContents from '@/components/Vote/VoteContents.svelte';
import VoteInfo from '@/components/Vote/VoteInfo.svelte';

describe('Vote', () => {
  test('should have props', () => {
    const description = 'button description';
    const {getByText} = render(VoteButton, {props: {description}});
    expect(getByText(description)).toBeInTheDocument();
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
