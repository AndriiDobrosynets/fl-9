export class Lesson {
  id: number;
  topic: string;
  date: string;
  lecturer: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
