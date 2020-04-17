import { Component, OnInit } from '@angular/core';
import { COLORS } from '../../data/colors';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  colors = COLORS;

  constructor(public ajustes: SettingsService) { }

  CambiarColor(color: string, element: string) {
    if(element === 'header') {
      this.ajustes.ajustes.temaEncabezado = color;
    } else if(element === 'sidebar') {
      this.ajustes.ajustes.temaMenuLateral = color;
    }
    this.ajustes.guardarAjustes();
  }

  ngOnInit(): void {
    this.ajustes.cargarAjustes();
  }

  seleccionar(event, element) {
    console.log(event.target.dataset.class);
    this.CambiarColor(event.target.dataset.class, element);
  }

}
