import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'position',
    loadChildren: () => import('./position/position.module').then( m => m.PositionPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'fact',
    loadChildren: () => import('./fact/fact.module').then( m => m.FactPageModule)
  },
  {
    path: 'add-account',
    loadChildren: () => import('./add-account/add-account.module').then( m => m.AddAccountPageModule)
  },
  {
    path: 'account-list',
    loadChildren: () => import('./account-list/account-list.module').then( m => m.AccountListPageModule)
  },
  {
    path: 'mapping-account',
    loadChildren: () => import('./mapping-account/mapping-account.module').then( m => m.MappingAccountPageModule)
  },
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'account-modal',
    loadChildren: () => import('./Modal/account-modal/account-modal.module').then( m => m.AccountModalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
