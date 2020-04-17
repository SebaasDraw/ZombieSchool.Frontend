import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cerebro-edit-modal',
  templateUrl: './cerebro-edit-modal.component.html',
  styleUrls: ['./cerebro-edit-modal.component.css']
})
export class CerebroEditModalComponent implements OnInit {
  @ViewChild('modalCerebroEdit') public modal: ElementRef;

  Description = '';
  Flavor = 'Col';
  Price = 0;
  Picture = '';
  idU = '';
  userName = '';

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  editarCerebro(id: string, user: string) {
    let idUser = '';
    let User = '';

    if (this.dataService.Rol === 'Administrador') {
      idUser = id;
      User = user;
    }
    else {
      idUser = this.dataService.IdU;
      User = this.dataService.User;
    }
    // tslint:disable-next-line: max-line-length
    this.dataService.editarCerebro(this.dataService.idC, this.Description, this.Flavor, this.Price, this.Picture, idUser, User).subscribe((resultado) => {
      console.log(resultado);
      this.renderer.selectRootElement(this.modal.nativeElement, true).click();
      this.dataService.obtenerCerebros(this.dataService.IdU);
    }, (error) => {
      console.log(error);
    });
    this.Description = '';
    this.Flavor = 'Col';
    this.Price = 0;
    this.Picture = '';
  }

  cargarDatos() {
    this.Description = this.dataService.Description;
    this.Flavor = this.dataService.Flavor;
    this.Price = this.dataService.Price;
    this.Picture = this.dataService.Picture;
    this.idU = this.dataService.uId;
  }

}
