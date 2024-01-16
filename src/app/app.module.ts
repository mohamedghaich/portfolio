import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoments/header/header.component';
import { FooterComponent } from './compoments/footer/footer.component';
import { AboutComponent } from './compoments/content/about/about.component';
import { EducationComponent } from './compoments/content/education/education.component';
import { SkillsComponent } from './compoments/content/skills/skills.component';
import { ProjectsComponent } from './compoments/content/projects/projects.component';
import { ExperienceComponent } from './compoments/content/experience/experience.component';
import { ContactComponent } from './compoments/content/contact/contact.component';
import { ContentComponent } from './compoments/content/content.component';
import { CvComponent } from './compoments/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ContentComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
