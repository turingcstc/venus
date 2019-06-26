import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [AuthLayoutComponent, FooterComponent, HeaderComponent, SigninComponent, SigninPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
