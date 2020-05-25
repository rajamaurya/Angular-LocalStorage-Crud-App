import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
 
    title = 'Angular-CRUD App using | LocalStorage! ';
    ngOnInit(){}
    

}