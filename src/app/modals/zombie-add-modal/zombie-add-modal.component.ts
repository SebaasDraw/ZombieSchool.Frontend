import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombie-add-modal',
  templateUrl: './zombie-add-modal.component.html',
  styleUrls: ['./zombie-add-modal.component.css']
})
export class ZombieAddModalComponent implements OnInit {
  @ViewChild('modalZombieAdd') public modal: ElementRef;

  Name = '';
  Mail = '';
  Type = 'Alumno';

  errorMail: boolean;
  errorName: boolean;
  errorType: boolean;

  error: any;

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  agregarZombie() {
    this.dataService.agregarZombie(this.Name, this.Mail, this.Type, this.dataService.IdU).subscribe(() => {
      this.renderer.selectRootElement(this.modal.nativeElement, true).click();

      this.dataService.obtenerZombies(this.dataService.IdU);

      this.errorMail = false;
      this.errorName = false;
      this.errorType = false;

      // Reestablece Los datos
      this.Name = '';
      this.Mail = '';
      this.Type = 'Alumno';
    }, (error) => {
      this.error = error;
      if (error.error.Mensaje.Name) {
        this.errorName = true;
        console.log(error.error.Mensaje.Name.message);
      }
      if (error.error.Mensaje.Mail) {
        this.errorMail = true;
        console.log(error.error.Mensaje.Mail.message);
      }
      if (error.error.Mensaje.Type) {
        this.errorType = true;
        console.log(error.error.Mensaje.Type.message);
      }
      console.log(error);

    });
  }

}
