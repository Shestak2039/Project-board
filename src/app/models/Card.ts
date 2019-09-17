import User from "./User";

export default interface ICArd {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;
}
