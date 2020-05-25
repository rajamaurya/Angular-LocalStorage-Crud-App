import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './main/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { DashboardRoutingModule} from './dashboard.routing.module';

@NgModule({

    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule, 
        AppMaterialModule 
    ],

})
export class DashboardModule {}