import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;
}
