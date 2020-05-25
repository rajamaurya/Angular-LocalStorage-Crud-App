import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {NavComponent} from './nav/nav.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { WelcomePageComponent } from './Welcome-Page/welcome-page.component';
import { RegisterComponent } from './Register/register.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGaurd } from './guards/loggedIn.gaurd';
import { HomeLayoutComponent } from './layouts/default-layout/home-layout.component';
const routes: Routes = [
    {
     path: '', 
     redirectTo:'welcome',
     pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomePageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
     path: 'sidebar',
     component: NavComponent,
     canActivate: [LoggedInGaurd]
    },
    {
         path: 'home',
         component: HomeLayoutComponent,
         children: [
            {
                path: 'user',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule),
                canLoad: [LoggedInGaurd]
                 
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                canLoad: [LoggedInGaurd]
                 
            },
         ]
    },
    // {
    //     path: 'user',
    //     loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    //     canActivate: [LoggedInGaurd]
         
    // },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule]
})
export class AppRoutingModule{

}


