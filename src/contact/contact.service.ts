import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  private readonly _contacts: Contact[] = [];

  create(createContactDto: CreateContactDto) {
    this._contacts.push({
      ...createContactDto,
    });
  }

  findAll() {
    return this._contacts;
  }

  findOne(email: string) {
    return this._contacts.find((contact) => contact.email === email);
  }
}
