import { Pipe, PipeTransform } from '@angular/core';
import { Dto } from '../interfaces/dto';

@Pipe({
  name: 'fechaEntrega',
})
export class FechaEntregaPipe implements PipeTransform {
  transform(dto: Dto[]): string {
    let fecha: string = '-';
    for (let i = 0; i < dto.length - 1; i++) {
      if (dto[i].statusTravel == 9) {
        fecha = dto[i].operationDate;
      }
    }
    return fecha;
  }
  
}
