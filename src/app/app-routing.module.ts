import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'vaqueros', loadChildren: './inicio/vaqueros/vaqueros.module#VaquerosPageModule' },
  { path: 'infovaquero', loadChildren: './detalles/infovaquero/infovaquero.module#InfovaqueroPageModule' },
  { path: 'infovaquero/:id', loadChildren: './detalles/infovaquero/infovaquero.module#InfovaqueroPageModule' },
  { path: 'editvaquero', loadChildren: './editar/editvaquero/editvaquero.module#EditvaqueroPageModule' },
  { path: 'editvaquero/:id', loadChildren: './editar/editvaquero/editvaquero.module#EditvaqueroPageModule' },
  { path: 'citas', loadChildren: './citas/citas.module#CitasPageModule' },
  { path: 'editanimal', loadChildren: './editar/editanimal/editanimal.module#EditanimalPageModule' },
  { path: 'editanimal/:id', loadChildren: './editar/editanimal/editanimal.module#EditanimalPageModule' },
  { path: 'infoanimal', loadChildren: './detalles/infoanimal/infoanimal.module#InfoanimalPageModule' },
  { path: 'infoanimal/:id', loadChildren: './detalles/infoanimal/infoanimal.module#InfoanimalPageModule' },
  { path: 'tabvaquero', loadChildren: './tabs/tabvaquero/tabvaquero.module#TabvaqueroPageModule' },
  { path: 'modalvacunas', loadChildren: './modals/modalvacunas/modalvacunas.module#ModalvacunasPageModule' },
  { path: 'modalvacunas/:animal', loadChildren: './modals/modalvacunas/modalvacunas.module#ModalvacunasPageModule' },
  { path: 'modalvaquero', loadChildren: './modals/modalvaquero/modalvaquero.module#ModalvaqueroPageModule' },
  { path: 'modalvaquero/:id', loadChildren: './modals/modalvaquero/modalvaquero.module#ModalvaqueroPageModule' },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
