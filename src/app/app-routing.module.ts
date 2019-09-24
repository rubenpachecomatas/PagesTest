import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test-page', loadChildren: './pages/test-page/test-page.module#TestPagePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'icons', loadChildren: './pages/icons/icons.module#IconsPageModule' },
  { path: 'chips', loadChildren: './pages/chips/chips.module#ChipsPageModule' },
  { path: 'lists', loadChildren: './pages/lists/lists.module#ListsPageModule' },
  { path: 'progress', loadChildren: './pages/progress/progress.module#ProgressPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
