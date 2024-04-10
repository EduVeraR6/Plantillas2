import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { config } from 'process';
import { RolRequest, UsuarioRequest } from 'src/app/Interfaces/interfaces.interface';
import { RegisterService } from 'src/app/Services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister! : FormGroup;
  
  constructor(private router:Router, private registroService : RegisterService , private alert : MatSnackBar) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario():FormGroup{
    return this.formRegister = new FormGroup({
      username : new FormControl("" , [Validators.required]),
      password : new FormControl("" , [Validators.required]),
      nombre : new FormControl("" , Validators.required),
      apellido : new FormControl ("" , Validators.required),
      rol : new FormControl("" , Validators.required),
    })
  }


  registrarUsuario(){

    const rol : RolRequest = {
      rol : this.formRegister.get('rol')?.value
    }

    const roles : RolRequest[] = [];

    roles.push(rol);


    const usuario : UsuarioRequest = {
      username: this.formRegister.get('username')?.value,
      password: this.formRegister.get('password')?.value,
      nombres: this.formRegister.get('nombre')?.value,
      apellidos: this.formRegister.get('apellido')?.value,
      roles: roles ,
      enabled : true
    }

    this.registroService.registrarUsuario(usuario).subscribe(data =>{
      console.log(data);
      this.alert.open('Usuario Registrado', 'Aceptar', {
        duration: 3000,
      });

      this.router.navigateByUrl('/login');

    }, error =>{
      this.alert.open('Error al registrar el usuario', 'Aceptar', {
        duration: 3000,
      });

    })

  }








}
