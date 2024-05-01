export class Contact {
  id: number;
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.id = Math.round(Math.random() * (100 - 1) + 1);
    this.name = name;
    this.phone = phone;
  }
}