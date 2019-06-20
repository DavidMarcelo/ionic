import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.interface';
import { UsuarioService } from '../../service/usuario.service';
import { Animal } from '../../models/animal.interface';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-vaqueros',
  templateUrl: './vaqueros.page.html',
  styleUrls: ['./vaqueros.page.scss'],
})
export class VaquerosPage implements OnInit {

  /*components: Componente[] = [

  ];*/

  usuarios: Usuario[];
  animales: Animal[];
  textoBuscar = '';
  
  constructor(private userService: UsuarioService, private aniService: AnimalesService) {
  }

  ngOnInit() {
    this.userService.getTodo().subscribe(res =>{
      console.log('lista de usuarios: ', res);
      this.usuarios = res;
    });

    this.aniService.getTodo().subscribe(res =>{
      console.log("Lista de animales: ",res);
      this.animales = res;
    })


    /*this.storage.set('name', 'David');

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });*/
  }

  buscarUser(event){
    //console.log("buscar:  "+event);
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}


/*interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}*/