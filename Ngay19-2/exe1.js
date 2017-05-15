class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(a,b) {
    if(a.x == b.x && a.y == b.y) throw new Error('2 diem ko duoc trung nhau!');
    this.a = a;
    this.b = b;
  }
  width(){
    var p = ((this.b.x - this.a.x) + (this.b.y - this.a.y));
    return p;
  }
}

let a = new Point(1,1);
let b = new Point(1,1);

let l = new Line(a,b);
