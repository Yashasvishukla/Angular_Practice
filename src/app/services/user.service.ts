import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../models/LoginDetails';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginDetails: LoginDetails;
  isLoggedIn = false;
  constructor(private router: Router) {
    this.loginDetails = new LoginDetails();
  }
  login() {
    if (this.loginDetails.email === 'yash@email.com' && this.loginDetails.password === 'yash')
    {
      sessionStorage.setItem('user', JSON.stringify(this.loginDetails));


      // If the LoggedIn user is verified -> navigate to Home Page.
      return this.router.navigateByUrl('/home/2',);
    }

    return this.router.navigateByUrl('');
  }
}
