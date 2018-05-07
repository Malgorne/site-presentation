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

// Main's section
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

// Authentification's section
import { AuthSectionComponent } from './components/auth/auth-section/auth-section.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';

// Network's section
import { NetworkMainComponent } from './components/network/network-main/network-main.component';

// Components generators
import { GeneratorListComponent } from './components/generators/generator-list/generator-list.component';
import { GeneratorNavbarComponent } from './components/generators/generator-navbar/generator-navbar.component';

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
    ResumeComponent,
    ProjectsComponent,
    BolterDirective,
    GeneratorListComponent,
    HeaderComponent,
    NetworkMainComponent,
    PageNotFoundComponent,
    HomeComponent,
    AuthSectionComponent,
    AuthFormComponent,
    MoveBoxDirective,
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
