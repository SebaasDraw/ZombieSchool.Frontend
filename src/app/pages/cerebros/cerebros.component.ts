import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cerebros',
  templateUrl: './cerebros.component.html',
  styleUrls: ['./cerebros.component.css']
})
export class CerebrosComponent implements OnInit {
  cerebros: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if ( this.dataService.logged === false) {
      this.dataService.redirectLogin();
    } else {
      this.actualizarTabla();
    }
  }

  actualizarTabla() {
    this.dataService.cerebroObservable.subscribe((resultados) => {
      this.cerebros = resultados;
    });
    this.dataService.obtenerCerebros(this.dataService.IdU);
  }

  async eliminarCerebro(id: string) {
    await this.dataService.eliminarCerebro(id).subscribe((resultado) => {
      this.actualizarTabla();
    });
  }

  pasarDatos(id: string, Description: string, Flavor: string, Price: number, Picture: string, UId: string) {
    this.dataService.pasarDatosC(id, Description, Flavor, Price, Picture, UId);
  }

}
