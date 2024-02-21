
import Task from "./Task";

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      title: 'Test Task PINNED',
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
export const ArchivedAsWell = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED_AS_WELL',
    },
  },
};