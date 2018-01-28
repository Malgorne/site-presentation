import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NetworkMainComponent } from './components/network-main/network-main.component';
import { NetworkRegisterComponent } from './components/network-register/network-register.component';
import { NetworkLoginComponent } from './components/network-login/network-login.component';
import { ListGeneratorComponent } from './components/list-generator/list-generator.component';

import { BolterDirective } from './directives/bolter.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ResumeComponent,
    ProjectsComponent,
    BolterDirective,
    ListGeneratorComponent,
    HeaderComponent,
    NetworkMainComponent,
    NetworkRegisterComponent,
    NetworkLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
