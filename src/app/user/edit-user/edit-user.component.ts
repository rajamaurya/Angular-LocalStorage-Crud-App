import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTES } from './../../constants';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: any;
  editUserData: any;
  edituserForm: FormGroup;
  ROUTE =  ROUTES;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe(id=> this.userId=id);
    if(this.userId !== undefined){
      this.editUserData = JSON.parse(localStorage.getItem('users'))[+this.userId['id']];
    }
   
    
  }

  ngOnInit(): void {
    this.edituserForm = this.fb.group({
      firstName: ['', [Validators.required]],
        lastName: ['' , [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
    this.edituserForm.patchValue(this.editUserData);
  }
  onSubmit(editedUserData){
    const tempUsers = JSON.parse(localStorage.getItem('users'));
    tempUsers.splice(+this.userId['id'], 1, editedUserData);
    localStorage.setItem('users',JSON.stringify(tempUsers))
    this.router.navigate([this.ROUTE.NAV_ROUTES.USER_LIST]);
  }
  

}
