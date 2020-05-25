import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @Input() userData;
  @Output() userDetail = new EventEmitter()
  users: any = [];
  constructor() { }

  ngOnInit(): void {
    const log = JSON.parse(localStorage.getItem('users'));
    this.users.push(this.userData)
    console.log("user from : ", this.users);
  }
  ngOnChanges(){
  }
  getSelectedUserDetails(userDetail){
    console.log("USER DETAILS: ", userDetail);
       this.userDetail.emit(userDetail);
  }

}
