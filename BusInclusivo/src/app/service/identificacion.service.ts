import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identificacion } from '../model/Identificacion';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class IdentificacionService {
  private url = `${base_url}/identificaciones`;
  private listCambio = new Subject<Identificacion[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Identificacion[]>(this.url);
  }
  insert(entidad: Identificacion) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Identificacion[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Identificacion>(`${this.url}/${id}`);
  }
  update(entidad: Identificacion) {
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
