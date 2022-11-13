import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';

import Button from '@/components/Common/Button.svelte';

describe('Button', () => {
  const src = '/';
  const alt = 'alt';
  const text = 'icon button';
  test('should match snapshot', () => {
    const {container} = render(Button, {props: {src, alt, text}});
    expect(container).toMatchSnapshot();
  });

  test('should have props', () => {
    const {getByText} = render(Button, {props: {src, alt, text}});
    expect(getByText(text)).toBeInTheDocument();
  });
});
