import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { Page404Component } from './Pages/page404/page404.component';
import { Page403Component } from './Pages/page403/page403.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';



const routes: Routes = [

  {
    path : "",
    component :HomeComponent,
    pathMatch :"full"
  },
  {
    path : "login",
    component :LoginComponent
  },
  {
    path : "register",
    component :RegisterComponent
  },
  {
    path: "404",
    component : Page404Component
  },
  {
    path : "403",
    component : Page403Component
  },
  {
    path:"**",
    redirectTo :"404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
