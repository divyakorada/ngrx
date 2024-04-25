import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/AuthResponseData.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeoutInterval: any;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    )
  }


  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }

  getErrorMessage(message: string) {
    switch(message) {
      case 'EMAIL_NOT_FOUND':
        return 'email not found';
      case 'INVALID_PASSWORD':
        return 'Invalid password'; 
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Invalid Login credentials'; 
      case 'EMAIL_EXISTS':
        return 'Email already exits';
      case 'OPERATION_NOT_ALLOWED':
        return 'Operation not allowed';
      default:
        return 'Unknown error occured Please tty again';
    }
  }

  setUserInLocalStorage(userInfo: User) {
    localStorage.setItem('userData', JSON.stringify(userInfo));
    this.runTimeoutInterval(userInfo);
  }

  runTimeoutInterval(userInfo: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = userInfo.expireDate.getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      // Logout functionality or get the refresh token
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if(userDataString) {
        const userData = JSON.parse(userDataString);

      const expirationDate = new Date(userData.expirationDate);
      const user = new User(userData.email, userData.token, userData.localId, expirationDate);
      this.runTimeoutInterval(user);
      return user;
    }
       return null;
  }
}
