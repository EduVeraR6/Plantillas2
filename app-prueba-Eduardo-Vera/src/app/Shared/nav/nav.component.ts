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
    this.username = this.loginService.currentUser.name;  
    console.log(this.username)
  }


  logOut(){
    this.loginService.userName.next("")
    this.loginService.isLogged.next(false)
    this.router.navigateByUrl("")
  }




}
