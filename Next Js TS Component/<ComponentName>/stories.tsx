import { Meta, Story } from '@storybook/react/types-6-0';
import { <ComponentName>, <ComponentName>Props } from '.';

export default {
  title: '<ComponentName>',
  component: <ComponentName>,
} as Meta;

export const Template: Story<<ComponentName>Props> = (args) => {
  return (
    <div>
      <<ComponentName> {...args} />
    </div>
  );
};
