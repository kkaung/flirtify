import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { SettingsComponent } from './pages/settings/settings.component';
import { ButtonComponent } from './components/button/button.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { SharedModule } from './shared.module';

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
    SettingsComponent,
    ButtonComponent,
    ListsComponent,
    MessagesComponent,
    MatchesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
