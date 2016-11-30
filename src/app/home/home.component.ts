import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private languages = [
    "english",
    "spanish",
    "france"
  ];
  model = new Employee('Darla', 'Smith', true, 'w2', 'english');
}
