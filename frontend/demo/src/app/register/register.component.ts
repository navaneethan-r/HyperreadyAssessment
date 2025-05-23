import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone : false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', email: '', password: '' };
  message = '';

  constructor(private userService: UserService) {}

  register() {
  this.userService.register(this.user).subscribe({
    next: res => this.message = 'Registration successful!',
    error: err => {
      console.error('Registration error:', err);
      if (err.error instanceof ProgressEvent) {
        this.message = 'Network error: Cannot reach server';
      } else {
        this.message = 'Registration failed: ' + (err.error || err.message || 'Unknown error');
      }
    }
  });
}
}