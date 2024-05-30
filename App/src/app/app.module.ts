import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module'; // Importation du module de routage

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ajout du module de routage ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
