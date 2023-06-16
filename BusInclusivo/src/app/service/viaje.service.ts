import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../model/Viaje';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private url = `${base_url}/viajes`;
  private listCambio = new Subject<Viaje[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Viaje[]>(this.url);
  }
  insert(entidad: Viaje) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Viaje[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Viaje>(`${this.url}/${id}`);
  }
  update(entidad: Viaje) {
    return this.http.put(this.url, entidad);
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
