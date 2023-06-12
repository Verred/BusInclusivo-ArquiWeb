import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pago } from '../model/Pago';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PagoService {

   private url = `${base_url}/pagos`;
  private listCambio = new Subject<Pago[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Pago[]>(this.url);
  }
  insert(entidad: Pago) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Pago[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Pago>(`${this.url}/${id}`);
  }
  update(entidad: Pago) {
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
