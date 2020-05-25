import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../shared/service/register.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    error: any;
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
        ){}

    ngOnInit(){
       this.loginForm = this.fb.group({
           email: ['', [Validators.required]],
           password: ['', [Validators.required]]
       })
    }
    onSubmit(loginCredential){
         console.log("LOGIN CREDENTIALS: >> ", loginCredential);
         const isAuth = this.authService.isAuthenticUser(loginCredential);
         //console.log('isAuth >>', isAuth);
         isAuth == undefined? this.error = true: this.error = false;
         return isAuth? this.router.navigate(['/home/user/list']):null;
    }
    handleAlertError(){
        this.error = false;
    }
}