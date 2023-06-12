import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoVehiculo } from '../model/EstadoVehiculo';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EstadoVehiculoService {
  private url = `${base_url}/estadovehiculos` ;
  private listaCambio = new Subject<EstadoVehiculo[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<EstadoVehiculo[]>(this.url);
  }

  insert(calificacion: EstadoVehiculo) {
    return this.http.post(this.url, calificacion);
  }

  setList(listaNueva: EstadoVehiculo[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id: number){
    // return this.listCambio.asObservable();
     return this.http.get<EstadoVehiculo>(`${this.url}/${id}`)
  }

  update(calificacion:EstadoVehiculo){
    return this.http.put(this.url, calificacion);
  }
 eliminar(id: number) {

  return this.http.delete(`${this.url}/${id}`);
}
getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}
}
