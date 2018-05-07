import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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
import { NetworkNavbarComponent } from './components/network-navbar/network-navbar.component';
import { AuthSectionComponent } from './components/auth-section/auth-section.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GeneratorNavbarComponent } from './components/generator-navbar/generator-navbar.component';

// Components generators
import { ListGeneratorComponent } from './components/list-generator/list-generator.component';

// Directives
import { BolterDirective } from './directives/bolter.directive';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MoveBoxDirective } from './directives/move-box.directive';

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
    PageNotFoundComponent,
    HomeComponent,
    AuthSectionComponent,
    AuthFormComponent,
    MoveBoxDirective,
    NetworkNavbarComponent,
    GeneratorNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
