import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cerebro-add-modal',
  templateUrl: './cerebro-add-modal.component.html',
  styleUrls: ['./cerebro-add-modal.component.css']
})
export class CerebroAddModalComponent implements OnInit {
  @ViewChild('modalCerebroAdd') public modal: ElementRef;

  Description = '';
  Flavor = 'Col';
  Price = 0;
  Picture = '';

  errorDescription: boolean;
  errorFlavor: boolean;
  errorPrice: boolean;
  errorPicture: boolean;

  error: any;

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  agregarCerebro() {
    // tslint:disable-next-line: max-line-length
    this.dataService.agregarCerebro(this.Description, this.Flavor, this.Price, this.Picture, this.dataService.IdU, this.dataService.User).subscribe(() => {
      this.renderer.selectRootElement(this.modal.nativeElement, true).click();
      this.dataService.obtenerCerebros(this.dataService.IdU);

      this.errorDescription = false;
      this.errorFlavor = false;
      this.errorPrice = false;
      this.errorPicture = false;

      this.Description = '';
      this.Flavor = 'Col';
      this.Price = 0;
      this.Picture = '';
    }, (error) => {
      this.error = error;
      if (error.error.Mensaje.Flavor) {
        this.errorFlavor = true;
      }
      if (error.error.Mensaje.Description) {
        this.errorDescription = true;
      }
      if (error.error.Mensaje.Price) {
        this.errorPrice = true;
      }
      if (error.error.Mensaje.Picture) {
        this.errorPicture = true;
      }
      console.log(error);
    });
  }

}
