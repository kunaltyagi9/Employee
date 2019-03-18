import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'admin-panel',
    component : AdminPanelComponent
  },
  {
    path : 'login/create',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
