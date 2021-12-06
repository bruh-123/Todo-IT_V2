import { Injectable } from '@angular/core';
import { TravelData } from '../interfaces/travelData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Equipo } from '../interfaces/equipo';
import { Dto } from '../interfaces/dto';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor(private http: HttpClient) {}
  private travel: TravelData[]=[];

  parseStatus(dto: Dto[], estado: string): string {
    if (estado == 'equipo') {
      if (
        dto[dto.length - 1].statusTravel < 5 ||
        dto[dto.length - 1].statusTravel == 10
      ) {
        return 'A Reparar';
      } else {
        return 'Reparado';
      }
    } else {
      switch (dto[dto.length - 1].statusTravel) {
        case 3 | 5 | 6:
          return 'En Curso';
        default:
          return 'Pendiente';
      }
    }
  }

  process(resp: Equipo[]): TravelData[] {
    resp.forEach((x) => {
      let data: TravelData = {
        id: x.equipmentId,
        fecha: x.travelEquipmentDTOs[0].operationDate,
        marca: x.mark,
        modelo: x.model,
        falla: x.failure,
        estadoEquipo: this.parseStatus(x.travelEquipmentDTOs, 'equipo'),
        estadoEnvio: this.parseStatus(x.travelEquipmentDTOs, 'envio'),
        entrega:
          x.travelEquipmentDTOs[x.travelEquipmentDTOs.length - 1]
            .statusTravel == 9
            ? x.travelEquipmentDTOs[x.travelEquipmentDTOs.length - 1]
                .operationDate
            : 'Pendiente',
      };
      this.travel.push(data);
    });
    return this.travel;
  }

  solicitar(trip: TravelData): Observable<TravelData> {
    return this.http.post<TravelData>(
      'api/Retirement?clientId=' +
        trip.id +
        '&mark=' +
        trip.marca +
        '&model=' +
        trip.modelo +
        '&failure=' +
        trip.falla,
      trip
    );
  }

  estado(id: number): Observable<Equipo[]> {
    return this.http.get<Equipo[]>('api/Equipment?clientId=' + id)
  }
}
