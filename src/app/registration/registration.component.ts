import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private register: RegistrationService) {}

  ngOnInit(): void {}
  registerUser() {
    this.register.registerUser(this.user).subscribe(
      (data) => {
        alert('registration  sucess');
      },
      (error) => {
        alert('exception occured');
        this.msg = 'Bad Credentials, please enter valid Credentials';
      }
    );
  }
}
