import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../shared/service/register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    constructor(
        private fb: FormBuilder,
        private registerService: RegisterService,
        private router: Router
        ){}
        registerForm: FormGroup;
    ngOnInit(){
      this.registerForm =  this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['' , [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
    }
    submit(formvalue){
      console.log(formvalue);
      const reg_stat = this.registerService.register(formvalue);
      reg_stat.status?this.router.navigate(['/login']):null;
    }
}