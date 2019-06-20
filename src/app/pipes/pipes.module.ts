import { NgModule } from '@angular/core';
import { UsuarioPipe } from './usuario.pipe';
import { AnimalesPipe } from './animales.pipe';
import { FootPipe } from './foot.pipe';

@NgModule({
  declarations: [UsuarioPipe, AnimalesPipe, FootPipe],
  exports: [ UsuarioPipe, AnimalesPipe],
  //imports: [//CommonModule
  //]
})
export class PipesModule { }
