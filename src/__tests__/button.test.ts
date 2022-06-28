import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/svelte';

import Button from '../components/Button.svelte';

describe('button render', () => {
  test('should render', () => {
    const {getByText} = render(Button);
    expect(getByText('Test button')).toBeInTheDocument();
  });

  test('changes button text on click', async () => {
    const {getByText} = render(Button);
    const button = getByText('Button');

    await fireEvent.click(button);

    expect(button).toHaveTextContent('Button Clicked');
  });
});
