import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  isUpperCase: boolean = false;

  heroes:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
  ]

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase
  }
}
