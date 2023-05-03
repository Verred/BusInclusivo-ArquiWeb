import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetodoPago } from '../model/MetodoPago';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class MetodopagoService {

  private url = `${base_url}/metodoPago`;
  private listCambio = new Subject<MetodoPago[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<MetodoPago[]>(this.url);
  }
  insert(metodoPago: MetodoPago) {
    return this.http.post(this.url, metodoPago);
  }

  setList(listaNueva: MetodoPago[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<MetodoPago>(`${this.url}/${id}`);
  }
  update(metodoPago: MetodoPago) {
    return this.http.put(this.url + '/' + metodoPago.id, metodoPago);
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
