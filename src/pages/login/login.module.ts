import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegistrarPage } from '../registrar/registrar';

@NgModule({
  declarations: [
    LoginPage,
    RegistrarPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
