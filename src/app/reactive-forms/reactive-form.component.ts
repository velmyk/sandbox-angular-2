import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: "reactive-form",
    templateUrl: './reactive-form.template.html'
})
export class ReactiveFormComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });

        this.registerForm.valueChanges
            .map(model => model.firstname)
            .distinctUntilChanged()
            .filter(value => value)
            .subscribe(console.log)
    }
}