import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';




@Injectable({
    providedIn:'root'
})
export class LoggedInGaurd implements CanActivate, CanLoad{
    currentUser:string;
    constructor(private authService: AuthService, private router: Router){}

     canActivate(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot):
      boolean |
      Promise<boolean> |
      Observable<boolean> {
       return  this.checkAccess();
        // this.authService.currentUser$.subscribe(user=>this.currentUser = user);
        // console.log("CURR USER ",this.currentUser)
        // if(this.currentUser){
        //     return true;
        // }
        // this.router.navigate(['/login']);
        // return false;
     }
    
    canLoad():boolean |
    Promise<boolean> |
    Observable<boolean>{
         return this.checkAccess();
    }

    checkAccess(){
        this.authService.currentUser$.subscribe(user=>this.currentUser = user);
        console.log("CURR USER ",this.currentUser)
        if(this.currentUser){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}