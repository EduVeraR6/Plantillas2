import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/Interfaces/usuarios.interface';

import {environment} from './../../../environments/environment.prod'
import { BehaviorSubject } from 'rxjs';

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

  getIsLogged(){
    return this.isLogged.asObservable();
  }

  getUsername(){
    return this.userName.asObservable();
  }


}
