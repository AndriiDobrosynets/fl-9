import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { LessonsComponent } from './lessons/lessons.component';
import {LessonsDataService} from './lessons-data.service';
import { LessonComponent } from './lesson/lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    ModalComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LessonsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
