import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Users';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = `${base_url}/register`;
  constructor(private http:HttpClient) { }

  insert(entidad: Usuario) {
    return this.http.post(this.url, entidad, {
      headers: new HttpHeaders()
    });
    
  }


}
