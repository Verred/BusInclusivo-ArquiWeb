import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarjetaPropiedad } from '../model/TarjetaPropiedad';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TarjetapropiedadService {

  private url = `${base_url}/tarjetapropiedades`;
  private listCambio = new Subject<TarjetaPropiedad[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<TarjetaPropiedad[]>(this.url);
  }
  insert(entidad: TarjetaPropiedad) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: TarjetaPropiedad[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<TarjetaPropiedad>(`${this.url}/${id}`);
  }
  update(entidad: TarjetaPropiedad) {
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
