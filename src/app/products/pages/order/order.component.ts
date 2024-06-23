import { Component } from '@angular/core';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  isUpperCase: boolean = false;

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase
  }
}
