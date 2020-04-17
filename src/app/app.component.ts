import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logged = false;
  data: any;

  constructor(private dataService: DataService) {
    this.session();
  }

  session() {
    this.dataService.getUserName().subscribe((resultado) => {
      this.logged = true;
      this.dataService.logged = true;

      this.data = resultado;

      this.dataService.Rol = this.data.Rol;
      this.dataService.IdU = this.data._id;
      this.dataService.User = this.data.Username;

    }, (error) => {
      this.logged = false;
      this.dataService.logged = false;
    });

  }
}
