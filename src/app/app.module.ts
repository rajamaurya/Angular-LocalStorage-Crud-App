import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule }  from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './Welcome-Page/welcome-page.component'
import { RegisterComponent } from './Register/register.component';
import { RegisterService } from './shared/service/register.service';
import { LoginComponent } from './login/login.component';
import { LoggedInGaurd } from './guards/loggedIn.gaurd';
import { HomeLayoutComponent } from './layouts/default-layout/home-layout.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    HomeLayoutComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //UserModule,
   
  ],
  providers: [UserService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
