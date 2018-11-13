import { Component } from '@angular/core';
import { LessonsDataService } from '../lessons-data.service';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent  {
  constructor(private lessonsDataService: LessonsDataService ) { }
  isShown: boolean;
  showModal() {
    this.isShown = !this.isShown;
  }
  get lessons() {
    return this.lessonsDataService.getAllLessons();
  }

}
