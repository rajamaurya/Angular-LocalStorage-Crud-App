import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { switchMap,map,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   userForm: FormGroup;
   submitted:boolean =  false;
   userArray: any[] = [];
   selecteduser: any = {};
   selected: boolean = false;
   usrFormValue: any = {};
   usersData$: Observable<any>;
   userPosts$: Observable<any>;
   combined$: Observable<any>;
   sel_User: any;

  constructor(
    private fb:FormBuilder, 
    private userService: UserService,
    private router: Router
    ) { console.log("usr entered...")}

  ngOnInit(): void {
    this.userForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['' , [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
      this.userForm.valueChanges.pipe(map(value=>value)).subscribe((data)=>{
        //console.log("value changed: ", data);
      })
    this.usersData$ = this.userService.getUsers();
    this.userPosts$ = this.userService.getUserPosts();

    this.combined$ = this.usersData$.pipe(
      switchMap(userData=>{
        return this.userPosts$
        .pipe(
          tap(data=> data)
        )
      })

      
    )
    this.combined$.subscribe(data=> data);





  }
  onSubmit(userForm){
   this.submitted = true;
   this.userArray.push(userForm);
   console.log(this.userArray);
   if(JSON.parse(localStorage.getItem('users'))){
     const users = JSON.parse(localStorage.getItem('users'));
     const newuser = [...this.userArray, ...users];
    localStorage.setItem('users', JSON.stringify(newuser));
   }else{
    localStorage.setItem('users', JSON.stringify(this.userArray));
   }
   
   this.userForm.reset();
  this.router.navigate(['/home/user/list']);
  }
  selectedUser(selected_user){
    this.selected = true;
    console.log("SELECTED USR: ", selected_user);
    this.selecteduser = selected_user
  }
  editUser(user){
     this.userForm.patchValue(user);
  }
  deleteUser(usr){
    const ans =confirm('do you really want to delete this user!');
    if(true){
    setTimeout(() => {
      alert("ok deleting..");
    }, 0);
      
      setTimeout(()=>{
          alert("Successully Deleted.");
          this.selected = false;
      },2000)
    }
    
  }

}
