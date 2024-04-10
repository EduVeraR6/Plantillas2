import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, UsuarioResponse } from 'src/app/Interfaces/interfaces.interface';

import {environment} from './../../../environments/environment.prod'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userName : BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentUser : any;



  constructor(private http : HttpClient) { }


  loginUsuario(usuario : Login){
    return this.http.post(environment.apiUrl+"/login",usuario);
  }

  obtenerUsuario(username : string):Observable<UsuarioResponse>{
    return this.http.get<UsuarioResponse>(environment.apiUrl+`/usuarios/${username}`);
  }


  getIsLogged(){
    return this.isLogged.asObservable();
  }

  getUsername(){
    return this.userName.asObservable();
  }


}
