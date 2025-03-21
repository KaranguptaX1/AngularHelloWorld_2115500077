import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="../assets/BL_logo.jpg";
  url="https://www.bridgelabz.com";
  userName: string = "";

  OnClick($event : Event){  
    console.log("Save button is clicked",$event);
    window.open(this.url,"_blank");
  }
}
