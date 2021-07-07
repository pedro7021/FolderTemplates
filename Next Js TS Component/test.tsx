import { screen } from '@testing-library/react';
import { <ComponentName> } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<<ComponentName> />', () => {
  it('should match snapshot', () => {
    const { constainer } = renderTheme(<<ComponentName> />);
    expect(container).toMatchSnapshot();
  });
});

