import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Login } from 'src/app/Interfaces/usuarios.interface';
import { LoginService } from '../../Services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(): FormGroup {
    return (this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }));
  }

  login() {
    const usuario: Login = {
      username: this.formLogin.get('username')?.value,
      password: this.formLogin.get('password')?.value,
    };

    this.loginService.loginUsuario(usuario).subscribe(
      (data: any) => {
        console.log(data);
        this,this.loginService.isLogged.next(true);
        localStorage.setItem('token', data.jwtToken);

        this.router.navigateByUrl('/dashboard-usuario');

        this.snackBar.open('Bienvenido', 'Aceptar', {
          duration: 3000,
        });
      },
      (error) => {
        this.snackBar.open(
          'Error en el login , vuelva a intentarlo',
          'Aceptar',
          {
            duration: 3000,
          }
        );
      }
    );
  }
}
