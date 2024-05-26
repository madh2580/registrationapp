import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 

  // title = 'registrationapp';


  // registration: boolean = true;

  // m1="number 1";
  // m2="number 2";
  // m1: string = 'number1';
  //  m2:60;

  // isVisible:Boolean = false;

  // sendData:string = 'welcom to the parent component';


  postTitle!: string ;
  postDetails!: string;
  imageURL!:String;
  postURL!:string;
  addBackground!: boolean ;

}
