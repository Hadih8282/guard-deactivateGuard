import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public onUserLogin(event: Event, email: string, password:string) {
    event.preventDefault();
    if (email === "Hadi@hadi.com" && password === "12345") {
      this.authService.loggin();
    } else {
      this.router.navigate(['/notAuthorized']);
    } 
  }
}
