import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../models/animal.interface';

@Pipe({
  name: 'animalesP'
})
export class AnimalesPipe implements PipeTransform {

  transform(animales: Animal[], texto: string): Animal[] {
    //return null;
    if(texto.length === 0){
      return animales;
    }

    texto = texto.toLocaleLowerCase();
    //return null;
    return animales.filter(animal =>{
      return animal.nombre.toLocaleLowerCase().includes(texto);
    });
  }

}
