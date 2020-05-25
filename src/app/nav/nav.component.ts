import { Component, OnInit } from '@angular/core';
import { ROUTES } from './../constants';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  ROUTES = ROUTES;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateRoute();
  }
  validateRoute(){
    const route = window.location.pathname;
    console.log(route);
    if(
      route == '/user/list' ||
      route == '/user/edit' ||
      route == '/user'
      ){
        return true;
      }else{
        return false;
      }
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
