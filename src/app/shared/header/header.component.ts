import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private dataService: DataService, private app: AppComponent) { }

  ngOnInit(): void {
    this.session();
  }

  logout() {
    localStorage.removeItem('token');
    this.app.logged = false;
    this.dataService.logged = false;
    this.dataService.redirectLogin();
  }

  session() {
    this.dataService.getUserName().subscribe((resultado) => {
      this.user = resultado;
    }, (error) => {
      console.log(error);
    });
   }
}
