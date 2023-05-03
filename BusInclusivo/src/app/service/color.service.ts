import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';import { Color } from '../model/Color';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private url = `${base_url}/color`
  private listCambio = new Subject<Color[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Color[]>(this.url);
  }

  insert(color: Color) {
    return this.http.post(this.url, color);
  }

  setList(listaNueva: Color[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<Color>(`${this.url}/${id}`);
  }

  update(color:Color){
  return this.http.put(this.url+"/"+color.id,color);

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
