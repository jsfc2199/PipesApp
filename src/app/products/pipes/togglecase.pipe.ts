import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  //recibe el valor pasado y los nuevos argumentos
  transform(value: string, toUpper: boolean = false): string {
    if (toUpper) return value.toUpperCase();
    return value.toLowerCase();
  }
}
