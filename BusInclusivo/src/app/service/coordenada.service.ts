import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../model/Marca';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Coordenada } from '../model/Coordenada';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CoordenadaService {

  private url = `${base_url}/coordenadas`;
  private listCambio = new Subject<Coordenada[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Coordenada[]>(this.url);
  }
  insert(entidad: Coordenada) {
    return this.http.post(this.url, entidad);
  }

  setList(listaNueva: Coordenada[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Coordenada>(`${this.url}/${id}`);
  }
  update(entidad: Coordenada) {
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
