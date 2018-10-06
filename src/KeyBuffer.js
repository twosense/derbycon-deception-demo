export default class KeyBuffer {
  static groups = [];
  static group;
  
  constructor() {
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  normalize() {
    let firstStamp = this.events[0][1];
    for (var i = 0; i < this.events.length; i++) {
      this.events[i][1] = this.events[i][1] - firstStamp;
    }
  }
}