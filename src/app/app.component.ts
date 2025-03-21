import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../assets/BL_logo.jpg';
  url = 'https://www.bridgelabz.com';
  userName: string = '';
  userError: string = '';

  OnClick($event: Event) {
    console.log('Save button is clicked', $event);
    window.open(this.url, '_blank');
  }

  onInput() {
    console.log('Change Event Occurred', this.userName);
    const nameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]+)*$/; // Allows spaces but no numbers/special chars
    this.userError = nameRegex.test(this.userName) ? '' : 'Name is Incorrect';
  }
}