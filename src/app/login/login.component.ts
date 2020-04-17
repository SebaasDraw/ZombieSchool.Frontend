import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: any; 

  constructor(private dataService: DataService, private app: AppComponent, private router: Router) {
    this.loginForm = new FormGroup({
      Mail: new FormControl(null),
      Password: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.dataService.redirectDashboard();
  }

  login() {
    this.dataService.login(this.loginForm.value). subscribe((data) => {
      localStorage.setItem('token', data.toString());
      this.app.logged = true;
      this.dataService.logged = true;
      this.router.navigate(['dashboard']);
    }, (error) => {
      console.log(error);
      if (error.error) {
        this.error = error;
      }
    });
  }

}
