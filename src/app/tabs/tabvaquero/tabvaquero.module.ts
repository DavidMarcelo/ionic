import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabvaqueroPage } from './tabvaquero.page';

const routes: Routes = [
  {
    path: '',
    component: TabvaqueroPage,
    children: [
      {
        path: 'vaquero',
        loadChildren: '../../inicio/vaqueros/vaqueros.module#VaquerosPageModule'
      },
      {
        path: 'citas',
        loadChildren: '../../citas/citas.module#CitasPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabvaqueroPage]
})
export class TabvaqueroPageModule {}
