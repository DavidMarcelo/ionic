import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.interface';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string): Usuario[] {
    if(texto.length === 0){
      return usuarios;
    }

    texto = texto.toLocaleLowerCase();
    //return null;
    return usuarios.filter(usuario =>{
      return usuario.nombre.toLocaleLowerCase().includes(texto) || usuario.apellido.toLocaleLowerCase().includes(texto);
    });
  }

}
