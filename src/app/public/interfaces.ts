export interface LoginResponse {
  token: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export interface RegisterResponse {
  _id: string;
  name: string;
  login: string;
}

export interface UserResponse {
  [index: number]: {
    _id: string;
    name: string;
    login: string;
  };
  length: number;
}

export interface User {
  _id: string;
  name: string;
  login: string;
}

export interface IColumn {
  _id: string;
  title: string;
  order: number;
  boardId: string;
}

export interface ITask {
  _id: string;
  title: string;
  order: number;
  boardId: string;
  columnId: string;
  description: string;
  userId: string;
  users: string[];
}
