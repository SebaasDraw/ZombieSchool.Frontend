import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  zombies: any;
  user: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if ( this.dataService.logged === false) {
      this.dataService.redirectLogin();
    } else {
      console.log('Actualizando tabla...');
      this.actualizarTabla();
    }
  }

  actualizarTabla() {
    this.dataService.zombieObservable.subscribe((resultados) => {
      this.zombies = resultados;
    });

    this.dataService.obtenerZombies(this.dataService.IdU);
  }

  async eliminarZombie(id: string) {
    await this.dataService.eliminarZombie(id).subscribe((resultado) => {
      console.log(resultado);
      this.actualizarTabla();
    });
  }

  pasarDatos(id: string, name: string, mail: string, type: string) {
    this.dataService.pasarDatosZ(id, name, mail, type);
  }
}
