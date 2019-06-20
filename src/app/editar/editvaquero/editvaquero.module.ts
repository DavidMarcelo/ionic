import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditvaqueroPage } from './editvaquero.page';
import { ComponentsModule} from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: EditvaqueroPage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditvaqueroPage]
})
export class EditvaqueroPageModule {}
