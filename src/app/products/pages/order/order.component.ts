import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}
