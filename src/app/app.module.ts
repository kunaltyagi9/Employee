import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateComponent } from './create/create.component';
import { DbserviceService } from './dbservice.service';
import { HttpModule } from '@angular/http';
import { ManagerPanelComponent } from './manager-panel/manager-panel.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DeleteComponent,
    DisplayComponent,
    LoginComponent,
    AdminPanelComponent,
    CreateComponent,
    ManagerPanelComponent,
    EmployeePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
