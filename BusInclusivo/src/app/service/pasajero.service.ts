import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from '../model/Pasajero';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  private url = `${base_url}/pasajeros`;
  private listCambio = new Subject<Pasajero[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Pasajero[]>(this.url);
  }
  insert(entidad: Pasajero) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Pasajero[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Pasajero>(`${this.url}/${id}`);
  }
  update(entidad: Pasajero) {
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
