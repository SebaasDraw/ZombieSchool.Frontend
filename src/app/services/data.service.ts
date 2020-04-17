import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

let apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private updateZombies$ = new Subject<any>();
  zombieObservable = this.updateZombies$.asObservable();

  private updateCerebros$ = new Subject<any>();
  cerebroObservable = this.updateCerebros$.asObservable();

  idZ = '';
  name = ''; 
  mail = '';
  type = '';

  idC = '';
  Description = '';
  Flavor = '';
  Price = 0;
  Picture = '';

  Seller = '';
  FlavorV = '';
  PriceV = 0;

  uId = '';

  logged: Boolean;

  IdU: string;
  User: string;
  Rol: string;

  nMinecraft = 0;

  constructor(private client: HttpClient, private router: Router) { }

  async obtenerZombies(id: string) {
    if (this.Rol === 'Administrador') {
      let zombies = await this.client.get<any>(apiUrl + 'zombies');
      return this.updateZombies$.next(zombies);
    }
    else {
      let zombies = await this.client.get<any>(apiUrl + 'zombiesByUser' + `/${id}`);
      return this.updateZombies$.next(zombies);
    }
  }

  agregarZombie(Nombre: string, Email: string, Tipo: string, idUsuario: string) {
    let nuevoZombie = {
      Name: Nombre,
      Mail: Email,
      Type: Tipo,
      UserId: idUsuario
    };
    return this.client.post(apiUrl + 'zombies/new', nuevoZombie);
  }

  editarZombie(id: string, Nombre: string, Email: string, Tipo: string, idUsuario: string) {
    let zombieEditado = {
      Name: Nombre,
      Mail: Email,
      Type: Tipo,
      UserId: idUsuario
    };
    return this.client.put(apiUrl + 'zombies/edit' + `/${id}`, zombieEditado);
  }

  eliminarZombie(id: string) {
    return this.client.delete(apiUrl + 'zombies/delete' + `/${id}`);
  }

  async obtenerCerebros(id: string) {
    if (this.Rol === 'Administrador') {
      this.allCerebros();
    }
    else {
      this.cerebros(id);
    }
  }

  async allCerebros() {
    let cerebros = await this.client.get(apiUrl + 'cerebros');
    return this.updateCerebros$.next(cerebros);
  }

  async cerebros(id: string) {
    let cerebros = await this.client.get(apiUrl + 'cerebrosByUser' + `/${id}`);
    return this.updateCerebros$.next(cerebros);
  }

  countByFlavor(sabor: string) {
    return this.client.get(apiUrl + 'cerebrosCountFlavor' + `/${sabor}`);
  }

  countByFlavorUser(sabor: string, user: string) {
    return this.client.get(apiUrl + 'cerebrosCountFlavorUser' + `/${sabor}` + `/${user}`);
  }

  agregarCerebro(descripcion: string, sabor: string, precio: number, imagen: string, idUsuario: string, username: string) {
    let nuevoCerebro = {
      Description: descripcion,
      Flavor: sabor,
      Price: precio,
      Picture: imagen,
      UserId: idUsuario,
      Username: username
    };
    return this.client.post(apiUrl + 'cerebros/new', nuevoCerebro);
  }

  editarCerebro(id: string, descripcion: string, sabor: string, precio: number, imagen: string, idUsuario: string, username: string) {
    let cerebroEditado = {
      Description: descripcion,
      Flavor: sabor,
      Price: precio,
      Picture: imagen,
      UserId: idUsuario,
      Username: username
    };
    return this.client.put(apiUrl + 'cerebros/edit' + `/${id}`, cerebroEditado);
  }

  eliminarCerebro(id: string) {
    return this.client.delete(apiUrl + 'cerebros/delete' + `/${id}`);
  }

  async obtenerOrdenes(id: string) {
    let ordenes = await this.client.get(apiUrl + 'orders' + `/${id}`);
    return this.updateCerebros$.next(ordenes);
  }

  agregarOrden(vendedor: string, sabor: string, precio: number, fecha: Date, cantidad: number, userid: string) {
    let nuevaOrden = {
      Seller: vendedor,
      Flavor: sabor,
      Price: precio,
      Date: fecha,
      Amount: cantidad,
      UserId: userid
    };
    return this.client.post(apiUrl + 'orders/new', nuevaOrden);
  }

  pasarDatosZ(id: string, name: string, mail: string, type: string) {
    this.idZ = id;
    this.name = name;
    this.mail = mail;
    this.type = type;
  }

  pasarDatosC(id: string, Description: string, Flavor: string, Price: number, Picture: string, UId: string) {
    this.idC = id;
    this.Description = Description;
    this.Flavor = Flavor;
    this.Price = Price;
    this.Picture = Picture;
    this.uId = UId;
  }

  redirectLogin() {
    if (this.logged === false) {
      this.router.navigate(['login']);
    }
  }

  redirectDashboard() {
    if (this.logged === true) {
      this.router.navigate(['dashboard']);
    }
  }

  getUserName() {
    return this.client.get(apiUrl + 'username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  login(credentials: any) {
    return this.client.post(apiUrl + 'login ', credentials);
  }

  submitRegister(user: any) {
    return this.client.post(apiUrl + 'register', user);
  }

}
