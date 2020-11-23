import react from 'react';
import { addDecorator } from '@storybook/react';
import Center from '../src/components/Decorators/Center/Center';
import {withA11y} from '@storybook/addon-a11y'

addDecorator(story => <Center>{story()}</Center>);
// global decorator

addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  } // sorting alphabetically
};
