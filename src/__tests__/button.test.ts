import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';

import Button from '$components/common/button/Button.svelte';

describe('Button', () => {
  const src = '/';
  const alt = 'alt';
  const text = 'icon button';
  const size = 'md';
  const imgSize = 'md';

  test('should match snapshot', () => {
    const {container} = render(Button, {
      props: {src, alt, text, size, imgSize}
    });
    expect(container).toMatchSnapshot();
  });

  test('should have props', () => {
    const {getByText} = render(Button, {
      props: {src, alt, text, size, imgSize}
    });
    expect(getByText(text)).toBeInTheDocument();
  });
});
