import { Component } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  changeClient(){
    this.name = 'Mellisa'
    this.gender = 'female'
  }
}
