import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/form/input/input.component';
import { SubmitButtonComponent } from './components/form/submit-button/submit-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ionClose, ionMenu } from '@ng-icons/ionicons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    InputComponent,
    SubmitButtonComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      ionClose,
      ionMenu,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
