/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
// export interface RefreshToken {
//   id: number;
//   userId: number;
//   token: string;
//   refreshCount: number;
//   expiryDate: Date;
// }

/*
Interface for the Login Response (can look different, based on your backend api)
*/
// export interface LoginResponse {
//   accessToken: string;
//   refreshToken: RefreshToken;
//   tokenType: string;
// }

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  login: string;
  password: string;
}

/*
Interface for the Register Request (can look different, based on your backend api)
*/
// export interface RegisterRequest {
//   [x: string]: any;
//   name: string;
//   login: string;
//   password: string;
// }

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface RegisterResponse {
  _id: string;
  name: string;
  login: string;
}
