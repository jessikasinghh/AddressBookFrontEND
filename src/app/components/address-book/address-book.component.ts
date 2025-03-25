import { Component } from '@angular/core';
import { Person } from 'src/app/models/personmodel';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource: Person[] = [
    { name: 'Varaza Mishra', email: 'varaza@example.com', phone: '02228017752' },
    { name: 'Trishna Bhalla', email: 'trishna@example.com', phone: '02223420607' },
    { name: 'Anish Kaskar', email: 'anish@example.com', phone: '02227893390' }
  ];

  newPerson: Person = { name: '', email: '', phone: '' };
  editIndex: number | null = null;

  addPerson() {
    if (this.editIndex !== null) {
      this.dataSource[this.editIndex] = { ...this.newPerson };
      this.editIndex = null;
    } else {
      this.dataSource.push({ ...this.newPerson });
    }
    this.newPerson = { name: '', email: '', phone: '' };
    this.dataSource = [...this.dataSource]; // Refresh table
  }

  editPerson(index: number) {
    this.newPerson = { ...this.dataSource[index] };
    this.editIndex = index;
  }

  deletePerson(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource]; // Refresh table
  }
}
