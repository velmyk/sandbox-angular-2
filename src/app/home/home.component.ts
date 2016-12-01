import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages: Array<string> = [];

  model = new Employee('Darla', 'Smith', true, 'w2', 'default');

  hasPrimaryLanguageError = false;

  constructor(private employeeService: EmployeeService) {
        this.employeeService.getLanguages()
        .subscribe(
          data => this.languages = data.languages,
          err => console.log('get error: ', err)
        );
  }

  submitEmployee(employeeForm: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
      return;
    this.employeeService.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('Success: ', data),
        err => console.error(err)
      );
  }
  
  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }
}
