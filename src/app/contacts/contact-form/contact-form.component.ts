import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/Contact';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  @Input() name: string = '';
  @Input() phone: string = '';

  @Input() editMode: boolean = false;

  @Input() contacts: Array<Contact> = [];

  @Output() onInputName = new EventEmitter<string>();

  @Output() onAdd = new EventEmitter();
  @Output() onReset = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  createNewContact() {
    this.onAdd.emit(new Contact(this.contacts.length, this.name, this.phone));
    this.resetContact();
  }

  resetContact() {
    this.name = '';
    this.phone = '';
  }

  cancelEdit() {
    this.onCancel.emit();
  }

  updateContact() {
    this.onUpdate.emit(new Contact(0, this.name, this.phone));
    this.resetContact();
  }
}
