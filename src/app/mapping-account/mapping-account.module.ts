import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { MappingAccountPage } from './mapping-account.page';
const routes: Routes = [
  {
    path: '',
    component: MappingAccountPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MappingAccountPage]
})
export class MappingAccountPageModule {}
