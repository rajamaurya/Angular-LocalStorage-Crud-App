import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
  
    currentUser: BehaviorSubject<any>;
    currentUser$: Observable<any>;
    storeKey:string = 'registeredCustomes';

    constructor(private regService: RegisterService){
        this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser$ = this.currentUser.asObservable();
    }
  
   
    isLoggedIn(){
        
    }
    isAuthenticUser(user){
        const {email, password} = user;
        console.log("USER: ", user);
        const getStorage = JSON.parse(localStorage.getItem(this.storeKey));
        const f_index = getStorage.findIndex(user=> user.email === email && user.password === password)
        console.log("f_index: ", f_index);
        if(f_index !== -1){
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser.next(user);
            return user;
        }
        
      }
    logout(){
        localStorage.removeItem('currentUser');
        this.currentUser.next(null);
    }
      
} 