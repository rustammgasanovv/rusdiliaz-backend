export class CreateUserDto {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    level: string;
  }
  
  export class UpdateUserDto {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    password?: string;
    role?: string;
    level?: string;
  }
  