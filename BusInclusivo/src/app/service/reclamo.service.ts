import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Reclamo } from '../model/Reclamo';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  private url = `${base_url}/reclamos`;
  private listCambio = new Subject<Reclamo[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Reclamo[]>(this.url);
  }
  insert(entidad: Reclamo) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Reclamo[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Reclamo>(`${this.url}/${id}`);
  }
  update(entidad: Reclamo) {
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
