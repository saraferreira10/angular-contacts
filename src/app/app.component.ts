import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './models/Contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = '';
  phone: string = '';

  contacts: Array<Contact> = [
    new Contact('Ednaldo', '1111-1111'),
    new Contact('Rosiane', '2222-2222'),
    new Contact('Rebeca', '4444-4444'),
  ];

  createNewContact(name: string, phone: string) {
    this.contacts.push(new Contact(name, phone));
    this.resetContact();
  }

  resetContact() {
    this.name = '';
    this.phone = '';
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
