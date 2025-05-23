import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  message = '';
  showWelcome = false;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.credentials).subscribe(
      res => {
        this.message = res;
        this.showWelcome = true;
      },
      err => {
        this.message = 'Invalid email or password';
        this.showWelcome = false;
      }
    );
  }
}