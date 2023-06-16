import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from '../model/Conductor';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  private url = `${base_url}/conductores`;
  private listCambio = new Subject<Conductor[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Conductor[]>(this.url);
  }
  insert(entidad: Conductor) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Conductor[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Conductor>(`${this.url}/${id}`);
  }
  update(entidad: Conductor) {
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
