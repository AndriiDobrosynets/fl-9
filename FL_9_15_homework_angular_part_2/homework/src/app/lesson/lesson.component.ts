import { Component } from '@angular/core';
import { LessonsDataService } from '../lessons-data.service';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent  {
  constructor(private lessonsDataService: LessonsDataService ) { }
  isShown;
  showModal() {
    this.isShown = !this.isShown;
  }
  get lessons() {
    return this.lessonsDataService.getAllLessons();
  }
   deleteLesson(lesson: Lesson) {
    this.lessonsDataService.deleteLessonById(lesson.id);
  }

  updateLesson(lesson: Lesson) {
    console.log(lesson);
  }
}
