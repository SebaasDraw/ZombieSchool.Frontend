import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombie-edit-modal',
  templateUrl: './zombie-edit-modal.component.html',
  styleUrls: ['./zombie-edit-modal.component.css']
})
export class ZombieEditModalComponent implements OnInit {
  @ViewChild('modalZombieEdit') public modal: ElementRef;

  Name = '';
  Mail = '';
  Type = 'Alumno';

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  editarZombie() {
    this.dataService.editarZombie(this.dataService.idZ, this.Name, this.Mail, this.Type, this.dataService.IdU).subscribe((resultado) => {
      console.log(resultado);
      this.renderer.selectRootElement(this.modal.nativeElement, true).click();
      this.dataService.obtenerZombies(this.dataService.IdU);

      // Reestablece Los datos
      this.Name = '';
      this.Mail = '';
      this.Type = 'Alumno';
    }, (error) => {
      console.log(error);
    });
  }

  cargarDatos() {
    this.Name = this.dataService.name;
    this.Mail = this.dataService.mail;
    this.Type = this.dataService.type;
  }
}
