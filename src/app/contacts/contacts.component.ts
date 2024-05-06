import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactFormComponent, ContactsListComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  editMode: boolean = false;

  editContact: Contact = new Contact(0, '', '');

  contacts: Array<Contact> = [
    new Contact(0, 'Ednaldo', '1111-1111'),
    new Contact(1, 'Rosiane', '2222-2222'),
    new Contact(2, 'Rebeca', '4444-4444'),
  ];

  name: string = '';
  phone: string = '';

  createNewContact(newContact: Contact) {
    this.contacts.push(newContact);
  }

  confirmEdit(contact: Contact) {
    this.editContact.name = contact.name;
    this.editContact.phone = contact.phone;
    this.editMode = false;

    this.contacts = this.contacts.map((c) => {
      return c.id === this.editContact.id ? this.editContact : c;
    });

    console.log(this.contacts);
  }

  startEdit(id: number) {
    this.contacts.map((c) => {
      if (c.id === id) {
        this.editContact = c;
        this.name = c.name;
        this.phone = c.phone;
        this.editMode = true;
      }
    });
  }

  cancelEdit() {
    this.editMode = false;
    this.name = '';
    this.phone = '';
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
