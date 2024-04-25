import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signUpForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSignUpSumbit() {
    if(!this.signUpForm.valid) {
      return;
    }

    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true}));
    this.store.dispatch(signupStart({ email, password }));
  }

}
