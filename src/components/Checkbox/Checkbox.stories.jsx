
import Checkbox from "./Checkbox";

export default {
  component: Checkbox,
  label: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
      id: '1',
      label: 'title',
      state: false,
  },
};

export const Checked = {
  args: {
      ...Default.args.task,
      label: 'Checked',
      state: true,
    },
};

export const UnChecked = {
    args: {
        label: 'Unchecked',
      state: false,
  },
};