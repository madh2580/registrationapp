import { Component, Input} from '@angular/core';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;

  regForm!: FormGroup
  submitted=false;
 

  constructor(private fb:FormBuilder) {
    this.regForm = this.fb.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]],
    },{
      Validators: this.passwordMatchValidation
    }



  )

  }

  passwordMatchValidation(form: FormGroup){
    const password = form.get('password');
    const cPassword = form.get('confirmPassword');
    if (password?.value !== cPassword?.value) {
      return {
        mismatch: true
      }
    }
    else{
      return null
    }

  }
  submit() {
    console.log(this.regForm.value)
    this.submitted = true
    
  }
  reset(){
    this.submitted = false;
    this.regForm.reset()
  }



  // title = 'registrationapp';
  // registration: boolean = true;
  // m1="number 1";
  // m2="number 2";
  // m1: string = 'number1';
  //  m2:60;
  // isVisible:Boolean = false;
  // sendData:string = 'welcom to the parent component';
  // postTitle!: string ;
  // postDetails!: string;
  // imageURL!:String;
  // postURL!:string;
  // addBackground!: boolean ;
  

 

  // title = 'registrationapp';


  // registration: boolean = true;

  // m1="number 1";
  // m2="number 2";
  // m1: string = 'number1';
  //  m2:60;

  // isVisible:Boolean = false;

  // sendData:string = 'welcom to the parent component';


  // postTitle!: string ;
  // postDetails!: string;
  // imageURL!:String;
  // postURL!:string;
  // addBackground!: boolean ;

}
