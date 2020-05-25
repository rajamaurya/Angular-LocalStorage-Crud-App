import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ :Observable<any>;
  @Input() userData;
  localStore: any;
  loading: boolean = true;
  constructor(private router: Router) { 
    this.localStore = JSON.parse(localStorage.getItem('users'));
    
    if(this.localStore !== null){
      this.users$ = of(this.localStore).pipe(delay(5000));
      this.users$.subscribe(()=>{
        this.loading = false;
      })
    }else{
      
    }
    
  }

  ngOnInit(): void {
   // this.users.push(this.userData)
  }
  editUser(userId){
     this.router.navigate([`home/user/edit-user/${userId}`]);
  }
  deleteUser(userId){
    const tempUsers = JSON.parse(localStorage.getItem('users'));
    tempUsers.splice(+userId,1);
    localStorage.setItem('users', JSON.stringify(tempUsers));
    this.users$ = of(JSON.parse(localStorage.getItem('users')));
  }
  redirectToCreateUserPage(){
    console.log("+ icon clicked")
    this.router.navigate(['/home/user']);
  }

}
