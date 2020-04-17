import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FormRegistro: FormGroup;
  error: any;
  errorR: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.FormRegistro = new FormGroup({
      Mail: new FormControl(null, Validators.required),
      Username: new FormControl(null, Validators.required),
      Rol: new FormControl(null, Validators.required),
      Image: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.dataService.redirectDashboard();
  }

  register() {
    if(this.FormRegistro.valid) {
      this.dataService.submitRegister(this.FormRegistro.value).subscribe((res) => {
        console.log(res);
        this.FormRegistro.reset();
        this.router.navigate(['login']);
      }, (error) => {
        console.log(error);
        this.errorR = true;
      });
    }
  }
}
