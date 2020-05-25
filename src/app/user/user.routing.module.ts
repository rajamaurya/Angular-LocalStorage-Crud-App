import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component'
import {UserDetailsComponent} from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
           {
            path: '',
              children: [
                  {
                    path:'', component: UserComponent
                  },
                  {
                    path: 'list', component: UserListComponent
                  },
                  {
                    path: 'details',
                    component: UserDetailsComponent
                  },
                  {
                    path: 'edit-user/:id',
                    component: EditUserComponent
                  }
                ]
           },
           

        //    {
        //        path: '**', pathMatch: 'full', redirectTo:'/'
        //    },
    
    
];
// const routes: Routes = [
//     {
//      path: '', component: UserComponent
//     },
//     {
//         path: '/user-list', component: UserListComponent
//     },
//     {
//         path: 'user-details',
//         component: UserDetailsComponent
//     },

//  //    {
//  //        path: '**', pathMatch: 'full', redirectTo:'/'
//  //    },


// ];
@NgModule({
       imports: [RouterModule.forChild(routes)],
       exports: [RouterModule]
})
export class UserRoutingModule{

}


