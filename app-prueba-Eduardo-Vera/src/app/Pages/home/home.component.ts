import { Component, OnInit } from '@angular/core';
import { Maquina, MaquinaRequest, UsuarioRequest } from 'src/app/Interfaces/usuarios.interface';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuarios: UsuarioRequest[] = [];
  opciones: String[] = ['Piso 11', 'Piso 7', 'Urdesa'];
  maquinas : MaquinaRequest[] = [

    {
      ip : "123.123.123",
      descripcion : "Maquina" 
    },
    {
      ip : "111.133.143",
      descripcion : "Maquina"
    },
    {
      ip : "113.90.123",
      descripcion : "Maquina"
    },
    {
      ip : "230.123.123",
      descripcion : "Maquina"
    },

  ]

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    const gerente : UsuarioRequest = {
      name : "Argudo",
      email : "eargudo@sasf.net",
      avatar : "https://i.imgur.com/yhW6Yw1.jpg",
      password : "SasfDominio2024",
      rol : "Gerente",
      office : "Piso 7",
      maquinas :this.maquinas
    }

    const mantenimiento : UsuarioRequest = {
      name : "Triana",
      email : "rtriana@sasf.net",
      avatar : "https://i.imgur.com/yhW6Yw1.jpg",
      password : "SasfDominio2024",
      rol : "Mantenimiento",
      office : "Urdesa",
      maquinas : this.maquinas
    }


    const soporte : UsuarioRequest = {
      name : "Carlos Garcia",
      email : "cgarcia@sasf.net",
      avatar : "https://i.imgur.com/yhW6Yw1.jpg",
      password : "SasfDominio2024",
      rol : "Soporte",
      office : "Piso 11",
      maquinas : this.maquinas
    }

    this.usuarios.push(gerente)
    this.usuarios.push(mantenimiento)
    this.usuarios.push(soporte)


    this.dataService.obtenerUsuariosApi().subscribe((data: any) => {
      const usuarios = data;

      console.log(data);

      for (const user of usuarios) {
        console.log(user);
        const partes: string[] = user.email.split('@');
        const correo: string = partes[0] + '@sasf.net';

        const indice = Math.floor(Math.random() * this.opciones.length);
        const aleatorio: String = this.opciones[indice];

        const parsedUser: UsuarioRequest = {
          name: user.name,
          email: correo,
          avatar: user.avatar,
          password: user.password,
          rol: 'Usuario',
          office: aleatorio,
          maquinas : this.maquinas
        };

        console.log(parsedUser);
        this.usuarios.push(parsedUser);
      }

      this.dataService
        .registrarUsuarios(this.usuarios)
        .subscribe((data: any) => {
          console.log(data);
        });
    });
  }
}
