import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoDocumento } from '../model/TipoDocumento';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private url = `${base_url}/tipodocumentos` ;
  private listaCambio = new Subject<TipoDocumento[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<TipoDocumento[]>(this.url);
  }

  insert(calificacion: TipoDocumento) {
    return this.http.post(this.url, calificacion);
  }

  setList(listaNueva: TipoDocumento[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  listID(id: number){
    // return this.listCambio.asObservable();
     return this.http.get<TipoDocumento>(`${this.url}/${id}`)
  }

  update(calificacion:TipoDocumento){
    return this.http.put(this.url, calificacion);
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
