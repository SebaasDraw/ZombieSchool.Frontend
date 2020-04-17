import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

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
    this.dataService.allCerebros();
  }

  pasarDatos(seller: string, flavor: string, price: number) {
    this.dataService.Seller = seller;
    this.dataService.FlavorV = flavor;
    this.dataService.PriceV = price;
  }

}
