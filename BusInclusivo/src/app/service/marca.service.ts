import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../model/Marca';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private url = `${base_url}/marcas`;
  private listCambio = new Subject<Marca[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Marca[]>(this.url);
  }
  insert(marca: Marca) {
    return this.http.post(this.url, marca);
  }

  setList(listaNueva: Marca[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Marca>(`${this.url}/${id}`);
  }
  update(marca: Marca) {
    return this.http.put(this.url + '/' + marca.idMarca, marca);
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
