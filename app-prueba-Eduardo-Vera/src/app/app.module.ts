

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './Shared/nav/nav.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Services/interceptor/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAdminComponent } from './Pages/dashboard-admin/dashboard-admin.component';
import { MenuOpcionesComponent } from './Components/menu-opciones/menu-opciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardAdminComponent,
    MenuOpcionesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
