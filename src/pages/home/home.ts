import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';

import { Welcome } from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user:any="";
  public pass:any="";

  public isSent:boolean=false;
  public fail:boolean=false;
  public form:FormGroup;

  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public storage:Storage) {
    this.form=this.formBuilder.group({
      user:["dagigilib",Validators.compose([Validators.required,Validators.minLength(6), Validators.pattern("[a-z]*")])],
      pass:["13400417@ittepic",Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern("[0-9]*[|@#%&]{1}[a-z]*")])]
    });

    this.user=this.form.controls["user"];
    this.pass=this.form.controls["pass"];
  }

  send(){
    if(!this.form.valid){
      this.isSent=true;
      return;
    }

    if(this.user.value=="dagigilib" && this.pass.value=="13400417@ittepic"){
      this.storage.clear();
      this.storage.set('user', this.form.value.user.value);
      this.navCtrl.push(Welcome);
    }else{
      this.fail=true;
    }
  }

}
