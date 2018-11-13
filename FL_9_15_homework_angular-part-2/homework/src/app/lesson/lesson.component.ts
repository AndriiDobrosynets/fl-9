import {Component, Input} from '@angular/core';
import {Lesson} from '../lesson';
import {LessonsDataService} from '../lessons-data.service';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
 @Input() lesson: Lesson;
  isEditMode = false;
  cancelEditing() {
    this.toggleEditMode();
  }
  save(lesson: Lesson) {
    this.toggleEditMode();
  }
 toggleEditMode() {
   this.isEditMode = !this.isEditMode;
 }
  constructor(private lessonsDataService: LessonsDataService ) {}
  deleteLesson(lesson: Lesson) {
    this.lessonsDataService.deleteLessonById(lesson.id);
  }
}
