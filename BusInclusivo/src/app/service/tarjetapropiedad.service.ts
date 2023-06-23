import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TarjetaPropiedad } from '../model/TarjetaPropiedad';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { ModeloCountDTO } from '../model/ModeloCountDTO';
import { MarcaCountDTO } from '../model/MarcaCountDTO';
import { ColorCountDTO } from '../model/ColorCountDTO';


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
    let token = sessionStorage.getItem("token");
    return this.http.get<TarjetaPropiedad[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(entidad: TarjetaPropiedad) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, entidad, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: TarjetaPropiedad[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<TarjetaPropiedad>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(entidad: TarjetaPropiedad) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, entidad, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  
  getCountModelos(): Observable <ModeloCountDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<ModeloCountDTO[]>(`${this.url}/modelo-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getCountColores(): Observable <ColorCountDTO[]> {
    return this.http.get<ColorCountDTO[]>(`${this.url}/color-count`);
  }
  getCountMarcas(): Observable <MarcaCountDTO[]> {
    return this.http.get<MarcaCountDTO[]>(`${this.url}/marca-count`);
  }
}
