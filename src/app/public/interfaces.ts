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
