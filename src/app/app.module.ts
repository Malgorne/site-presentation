import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Mocked server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

// Root components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// App components
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NetworkMainComponent } from './components/network-main/network-main.component';
import { NetworkRegisterComponent } from './components/network-register/network-register.component';
import { NetworkLoginComponent } from './components/network-login/network-login.component';
import { ListGeneratorComponent } from './components/list-generator/list-generator.component';

// Directives
import { BolterDirective } from './directives/bolter.directive';

// Services
import { AuthService } from './services/auth.service';

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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
