import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conv: boolean = false;
  cel: number = 0;
  far: number = 0;

  converter() {
    this.conv = true;
    this.far = (this.cel * 9 / 5) + 32;
  }
}

