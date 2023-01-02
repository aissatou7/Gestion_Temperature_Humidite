import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator } from 'src/app/username.validator';
import { MustMatch } from 'src/app/MustMatch';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
signupForm: FormGroup;
submitted=false;

  constructor(public formBuilder: FormBuilder) {

    //Crontôle de saisie du formulaire
    this.signupForm = this.formBuilder.group({
      prenom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
      nom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
      email:['',[Validators.required,Validators.email]],
      role:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required],
      etat:[0, Validators.required],
      matricule: ['']
  },  { validator: MustMatch('password', 'passwordConfirm')}
)
  }

  ngOnInit() {
  }
registerUser(){
  this.submitted = true;
  if(this.signupForm.invalid){
    return;
  }
  this.submitted=false
}
}
