import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from './../../environments/environment.prod'
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registrarPaciente(paciente :Usuario){
    return this.http.post(environment.apiUrl+"/usuarios/paciente/",paciente)
  }


}
