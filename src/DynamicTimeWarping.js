export default class DynamicTimeWarping {

  constructor(ts1, ts2, distanceFunction) {
    this.ser1 = ts1;
    this.ser2 = ts2;
    this.distFunc = distanceFunction;
    this.distance = undefined;
    this.matrix = undefined;
  }

  getDistance = () => {
    if (this.distance !== undefined) {
      return this.distance;
    }
    this.matrix = [];
    for (var i = 0; i < this.ser1.length; i++) {
      this.matrix[i] = [];
      for (var j = 0; j < this.ser2.length; j++) {
        let cost = Infinity;
        if (i > 0) {
          cost = Math.min(cost, this.matrix[i - 1][j]);
          if ( j > 0 ) {
            cost = Math.min(cost, this.matrix[i - 1 ][j - 1]);
            cost = Math.min(cost, this.matrix[i][j - 1]);
          }
        } else {
          if (j > 0) {
            cost = Math.min(cost, this.matrix[i][j - 1]);
          } else {
            cost = 0;
          }
        }
        this.matrix[i][j] = cost + this.distFunc(this.ser1[i], this.ser2[j]);
      }
    }
    return this.matrix[this.ser1.length - 1][this.ser2.length - 1];
  };
}