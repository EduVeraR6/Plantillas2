import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  obtenerUsuariosApi() {
    return this.http.get('https://api.escuelajs.co/api/v1/users');
  }

  obtenerMensaje(){
    return this.http.get(`${environment.apiUrl}/prueba`);

  }
  registrarUsuarios(usuarios: any) {
    return this.http.post(`${environment.apiUrl}/usuarios/varios`, usuarios);
  }

  listarUsuarios() {
    return this.http.get(`${environment.apiUrl}/usuarios`);
  }

  listarMaquinas() {
    return this.http.get(`${environment.apiUrl}/maquinas`);
  }

  registrarSolicitud(solicitud: any) {
    return this.http.post(`${environment.apiUrl}/solicitudes`, solicitud);
  }

  listarSolicitudes(){
    return this.http.get(`${environment.apiUrl}/solicitudes`)
  }

  aprobarSolicitud(id : number){
    return this.http.delete(`${environment.apiUrl}/solicitudes/aprobar/${id}`)
  }

  registrarMaquinaUsuario(id : number , maquina : any){
    return this.http.post(`${environment.apiUrl}/usuarios/registrar-maquina/${id}`, maquina);
  }







}
