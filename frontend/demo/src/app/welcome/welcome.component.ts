import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone : false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Input() message: string = '';
}