import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../model/Modelo';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private url = `${base_url}/modelo`;
  private listCambio = new Subject<Modelo[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Modelo[]>(this.url);
  }
  insert(modelo: Modelo) {
    return this.http.post(this.url, modelo);
  }

  setList(listaNueva: Modelo[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Modelo>(`${this.url}/${id}`);
  }
  update(modelo: Modelo) {
    return this.http.put(this.url + '/' + modelo.id, modelo);
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
