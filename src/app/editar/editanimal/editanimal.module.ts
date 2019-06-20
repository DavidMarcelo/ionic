import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditanimalPage } from './editanimal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalvaqueroPage } from 'src/app/modals/modalvaquero/modalvaquero.page';
import { ModalvaqueroPageModule } from 'src/app/modals/modalvaquero/modalvaquero.module';
import { ModalvacunasPage } from 'src/app/modals/modalvacunas/modalvacunas.page';
import { ModalvacunasPageModule } from 'src/app/modals/modalvacunas/modalvacunas.module';

const routes: Routes = [
  {
    path: '',
    component: EditanimalPage
  }
];

@NgModule({
  /*entryComponents:[
    ModalvaqueroPage,
    ModalvacunasPage
  ],*/
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    //ModalvaqueroPageModule,
    //ModalvacunasPageModule
  ],
  declarations: [EditanimalPage]
})
export class EditanimalPageModule {}
