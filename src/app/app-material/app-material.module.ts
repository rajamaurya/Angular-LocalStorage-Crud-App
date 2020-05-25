import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule} from '@angular/material/form-field';

const modules = [
  MatRadioModule,
  MatSliderModule,
  MatButtonModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatFormFieldModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ],
  exports: [...modules]
})
export class AppMaterialModule { }
