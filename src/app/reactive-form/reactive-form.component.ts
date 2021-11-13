import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator.ts';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // Demonstrate the Nested FormGroup Example 
  form = new FormGroup(
    {
      account: new FormGroup({
        accountNumber : new FormControl('', [Validators.required, Validators.minLength(2)]),
        customerId : new FormControl('', Validators.required)
      }),
      username: new FormControl('', [
        UsernameValidator.usernameRequired,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace
      ], UsernameValidator.shouldBeUnique),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    }
  );


  get username()
  {
    
    return this.form.get('username');
  }

  get accountNo()
  {
    console.log(this.form.get('account.accountNumber'));
    return this.form.get('account.accountNumber');
  }
  constructor() { }

  ngOnInit() {

  }

  login()
  {
    // We can set the Validation errors here also to a specific control or to the entire form itself

    this.form.setErrors(
      {
        isInvalid: true
      }
    );
  }

}
