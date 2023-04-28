import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../model/calificacion';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private url = `${base_url}/calificacion` ;
  private listaCambio = new Subject<Calificacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Calificacion[]>(this.url);
  }

  insert(calificacion: Calificacion) {
    return this.http.post(this.url, calificacion);
  }

  setList(listaNueva: Calificacion[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id: number){
    // return this.listCambio.asObservable();
     return this.http.get<Calificacion>(`${this.url}/${id}`)
   }

   update(calificacion:Calificacion){
    return this.http.put(this.url+'/'+calificacion.id,calificacion);



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

