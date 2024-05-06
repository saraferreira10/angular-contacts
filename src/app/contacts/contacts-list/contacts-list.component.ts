import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {

  @Input() contacts: Array<Contact> = [];
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();

  deleteContact(id: number) {
    this.onDelete.emit(id);
  }

  edit(id: number) {
    this.onEdit.emit(id);
  }
}
