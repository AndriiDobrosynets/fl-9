import {Component, Input} from '@angular/core';
import { Lesson } from '../lesson';
import { LessonsDataService } from '../lessons-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
  constructor(private lessonsDataService: LessonsDataService ) { }
  newLesson: Lesson = new Lesson();
  @Input() isOpen;
  closeModal(): void {
    this.isOpen = false;
  }
  addLesson(): void {
    this.lessonsDataService.addLesson(this.newLesson);
    this.newLesson = new Lesson();
  }
  constructor() { }
}
