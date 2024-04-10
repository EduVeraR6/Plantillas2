import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../environments/environment.prod'
import { Observable } from 'rxjs';
import { UsuarioRequest, UsuarioResponse } from '../../Interfaces/interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


  registrarUsuario(usuario : UsuarioRequest):Observable<UsuarioResponse>{
    return this.http.post<UsuarioResponse>(`${environment.apiUrl}/usuarios`,usuario);
  }




}
