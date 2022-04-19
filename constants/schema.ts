export interface Model<T = string> {
  id: T;
  model: string;
  createdAt: string;
}

export interface User extends Model {
  id: string;
  name?: string;
  email?: string;
  userType?: "USER" | "MASTER" | "HEAD_ADMIN" | "BRANCH_ADMIN";
  headOfficeId?: string;
  branchOfficeId?: string;
}
