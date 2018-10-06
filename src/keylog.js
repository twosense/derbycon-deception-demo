import DynamicTimeWarping from './DynamicTimeWarping';
import KeyBuffer from './KeyBuffer';
import dawudModel from '../public/model/data.json';

const delta = (a, b) => {
  return Math.abs(a - b[1]);
};

const distance = (one, two) => {
  let dtw = new DynamicTimeWarping(one, two, delta);
  return dtw.getDistance();
};

const calcMinDistance = (groups, last) => {
  if (groups.length === 0 || groups.length === 1) {
    return -1;
  }
  let running = Infinity;
  for (var i = 0; i < groups.length - 1; i++) {
    const delta = distance(groups[i], last);
    if (delta < running) {
      console.log(groups[i]);
      console.log(last);
      running = delta
    }
  }
  return running;
};

export const logKeystrokeEvents = (enabled) => {
  if (enabled === true) {
    KeyBuffer.group = new KeyBuffer();
    document.onkeydown = (e) => {
      if (e.keyCode === 8) {
        KeyBuffer.group = new KeyBuffer();
        return;
      }
      if (e.target.id === 'password') {
        console.log(e);
        KeyBuffer.group.addEvent([e.keyCode, e.timeStamp]);
      }
    };
    /*
    document.onkeyup = (e) => {
      KeyBuffer.group.addEvent([e.keyCode, e.timeStamp]);
      console.log(e);
    }*/
    return null;
  } else {
    KeyBuffer.group.normalize();
    let running = calcMinDistance(dawudModel.data, KeyBuffer.group.getEvents());
    KeyBuffer.group = null;
    document.onkeydown = null;
    document.onkeyup = null;
    return running;
  }
};