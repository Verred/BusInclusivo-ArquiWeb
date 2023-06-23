import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<EstadoVehiculo[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(calificacion: EstadoVehiculo) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, calificacion, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: EstadoVehiculo[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id: number){
    let token = sessionStorage.getItem("token");
     return this.http.get<EstadoVehiculo>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }

  update(calificacion:EstadoVehiculo){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, calificacion, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
 eliminar(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.delete(`${this.url}/${id}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}
}
