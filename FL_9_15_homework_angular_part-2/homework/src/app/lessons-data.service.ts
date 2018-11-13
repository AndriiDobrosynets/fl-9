import {Lesson } from './lesson';


export class LessonsDataService {
  lastId: number = 0;
  lessons: Lesson[] = [];

  addLesson(lesson: Lesson): LessonsDataService {
    lesson.id = ++this.lastId;
    this.lessons.push(lesson);
    return this;
  }
  getLessonById(id: number): Lesson {
    return this.lessons.filter(lesson => lesson.id === id).pop();
  }
  deleteLessonById(id: number): LessonsDataService {
    this.lessons = this.lessons.filter(lesson => lesson.id !== id);
    return this;
  }
  getAllLessons() {
    return this.lessons;
  }
  constructor() { }
}
