import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
