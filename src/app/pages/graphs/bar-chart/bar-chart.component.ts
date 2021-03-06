import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  info: any;

  Col = 0;
  Vainilla = 0;
  Lechuga = 0; 
  Sesos = 0;
  Flan = 0;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
      align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Col', 'Vainilla', 'Lechuga', 'Sesos', 'Flan'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    {data: [1, 1, 1, 1, 1], backgroundColor: 'rgba(54, 162, 235, 2)', borderColor: 'rgba(54, 162, 235, 2)', label: ''}
  ];

  constructor(private dataService: DataService) {
    console.log(1);
    this.cargar();
  }

  ngOnInit(): void {
    console.log(2);
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  async cargar() {

    await this.dataService.countByFlavor('Col').subscribe((resultado) => {
      this.info = resultado;
      this.Col = this.info;
      console.log(this.Col);
    });

    await this.dataService.countByFlavor('Vainilla').subscribe((resultado) => {
      this.info = resultado;
      this.Vainilla = this.info;
      console.log(this.Vainilla);
    });

    await this.dataService.countByFlavor('Lechuga').subscribe((resultado) => {
      this.info = resultado;
      this.Lechuga = this.info;
      console.log(this.Lechuga);
    });

    await this.dataService.countByFlavor('Sesos').subscribe((resultado) => {
      this.info = resultado;
      this.Sesos = this.info;
      console.log(this.Sesos);
    });

    await this.dataService.countByFlavor('Flan').subscribe((resultado) => {
      this.info = resultado;
      this.Flan = this.info;
      console.log(this.Flan);
    });
  }

  actualizar() {
    const data = [
      this.Col,
      this.Vainilla,
      this.Lechuga,
      this.Sesos,
      this.Flan
    ];
    this.barChartData[0].data = data;
  }
}
