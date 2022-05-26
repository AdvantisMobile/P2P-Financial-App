import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'position',
        children: [
          {
            path: '',
            loadChildren: () =>import('../position/position.module').then (m => m.PositionPageModule)
          }
        ]
      },
      {
        path: 'add-account',
        children: [
          {
            path: '',
            loadChildren: () =>import('../add-account/add-account.module').then (m => m.AddAccountPageModule)
          }
        ]
      },
      {
        path: 'account-list',
        children: [
          {
            path: '',
            loadChildren: () =>import('../account-list/account-list.module').then (m => m.AccountListPageModule)
          }
        ]
      },
      {
        path: 'mapping-account',
        children: [
          {
            path: '',
            loadChildren: () =>import('../mapping-account/mapping-account.module').then (m => m.MappingAccountPageModule)
          }
        ]
      },
      {
        path: 'total',
        children: [
          {
            path: '',
            loadChildren: () =>import('../total/total.module').then (m => m.TotalPageModule)
          }
        ]
      },
      {
        path: 'plan',
        children: [
          {
            path: '',
            loadChildren: () =>import('../plan/plan.module').then (m => m.PlanPageModule)
          }
        ]
      },
     
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>import('../home/home.module').then (m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'docs',
        children: [
          {
            path: '',
            loadChildren: () =>import('../docs/docs.module').then (m => m.DocsPageModule)
          }
        ]
      },
      {
        path: 'fact',
        children: [
          {
            path: '',
            loadChildren: () =>import('../fact/fact.module').then (m=>m.FactPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>import('../profile/profile.module').then (m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tabs/home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
