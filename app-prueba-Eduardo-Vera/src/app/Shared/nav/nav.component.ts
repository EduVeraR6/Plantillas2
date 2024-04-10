import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username! : string;
  login! : boolean;


  constructor(private loginService : LoginService , private router : Router) { 

  }

  ngOnInit(): void {

    this.loginService.getIsLogged().subscribe(
      data =>{
          this.login = data;
      }
    )
    this.loginService.getUsername().subscribe(data =>{
      this.username = data;
      console.log(data +"Data");
      console.log(this.username);
    });  

    console.log(this.username)
  }


  logOut(){
    this.loginService.userName.next("");
    localStorage.removeItem("token");
    this.loginService.isLogged.next(false)
    this.router.navigateByUrl("")
  }



}
