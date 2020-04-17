import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerebro-request',
  templateUrl: './cerebro-request.component.html',
  styleUrls: ['./cerebro-request.component.css']
})
export class CerebroRequestComponent implements OnInit {

  fechaShow = false;
  date: Date;
  Envio = 'BRONZE';
  Monto = 0;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  mostrarFecha() {
    this.cargarInfo();
    this.fechaShow = true;
  }

  cargarInfo() {
    const hoy = new Date();
    const diaEnMilisegundos = 1000 * 60 * 60 * 24;
    let diasTranscurridos = diaEnMilisegundos;

    if (this.Envio === 'BRONZE') {
      diasTranscurridos = diaEnMilisegundos * 15;
    } else if (this.Envio === 'SILVER') {
      diasTranscurridos = diaEnMilisegundos * 7;
    } else {
      diasTranscurridos = diaEnMilisegundos * 3;
    }

    const suma = hoy.getTime() + diasTranscurridos;
    const diaFinal = new Date(suma);

    this.date = diaFinal;
  }

  ordenar() {
    this.cargarInfo();

    const total = this.dataService.PriceV * this.Monto;

    // tslint:disable-next-line: max-line-length
    this.dataService.agregarOrden(this.dataService.Seller, this.dataService.FlavorV, total, this.date, this.Monto, this.dataService.IdU).subscribe(() => {
      this.Monto = 0;
      this.Envio = 'BRONZE';
      this.router.navigate(['orders']);
    });
  }

}
