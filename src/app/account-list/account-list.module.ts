import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { AccountListPage } from './account-list.page';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
const routes: Routes = [
  {
    path: '',
    component: AccountListPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatNativeDateModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountListPageModule {}
