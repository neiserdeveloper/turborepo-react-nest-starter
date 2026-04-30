export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface CreateUserDto {
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
