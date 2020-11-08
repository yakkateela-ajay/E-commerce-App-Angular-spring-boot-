import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../registration/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public loginUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8090/login', user);
  }
  public getuserid(userEmail:string): Observable<User> {
    let email=userEmail;
    const productUrl = 'http://localhost:8090/user/'+userEmail;
    return this.http.get<User>('http://localhost:8090/user/john@gmail.com');
  }
}
