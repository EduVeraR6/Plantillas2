import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { config } from 'process';
import { Usuario } from 'src/app/Interfaces/usuarios.interface';
import { RegisterService } from 'src/app/Services/register.service';

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
      email : new FormControl("" , Validators.required),
      telefono : new FormControl("" , Validators.required)
    })
  }



}
