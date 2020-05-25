import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit{
    selected: boolean = false;
      ngOnInit(){
          console.log(location.pathname)
      }
      checkRoute(){
          const route = window.location.pathname;
          if(
            route == '/home/user/list' ||
            route == '/home/dashboard'
          ){
              return true;
              
          }
          else{
              return false;
          }
        
      }
      onSelect(){
        this.selected = true;
      }
}