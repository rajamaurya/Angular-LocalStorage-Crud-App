import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
      {
          path: '',
          children: [
            //   {
            //     path:'',
            //     component:null
            //   },
              {
                  path:'',
                  component: DashboardComponent
              }
          ]
          
      }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}