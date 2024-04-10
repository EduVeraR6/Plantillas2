import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
  
})
export class DashboardAdminComponent implements OnInit {





  constructor(private router : Router , private alert : MatSnackBar , private dataService : DataService) { }

  ngOnInit(): void {
 
 
 
  }











}
