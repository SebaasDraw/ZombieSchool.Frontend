import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

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
      this.orders = resultados;
    });
    this.dataService.obtenerOrdenes(this.dataService.IdU);
  }

}
