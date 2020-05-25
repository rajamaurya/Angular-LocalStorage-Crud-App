import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'alert-error',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent{
   @Input() message;
   @Output() close = new EventEmitter<void>();


   onCloseClick(){
       this.close.emit();
   }
}