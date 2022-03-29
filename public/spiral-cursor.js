var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
  if (!cursor) return;
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

const size = 25;
const lollipop = document.getElementById('lollipop');
const stick = document.getElementById('stick');
lollipop.width = size;
lollipop.height = size;
stick.width = size;
stick.height = size;
const ctx = lollipop.getContext('2d');
const stickCtx = stick.getContext('2d');
ctx.translate(size / 2, size / 2);
const { sin, cos, pow, PI, sqrt } = Math;

class Spiral {
  colors =
    'hsl(0,100%,75%) hsl(60,100%,75%) hsl(120,100%,75%) hsl(180,100%,75%) hsl(240,100%,75%) hsl(300,100%,75%)';

  constructor() {
    this.setup();
    this.draw();
  }
  setup = () => {
    this._k = 0.9;
    this._theta = -0.37;
    this._colors = this.colors.split(/\s+/);
    const k = this._k;
    this.q = sqrt(1 + k * k - 2 * k * cos(this._theta)) / (1 - k);
    this.n = this._colors.length;
    this.t = 0;
    this.R = size / 2 / (this.q - 1) / pow(k, this.n);
    ctx.strokeStyle = 'white';
    stickCtx.strokeStyle = '#f58719';
    stickCtx.lineWidth = 5;
  };
  draw = () => {
    stickCtx.beginPath();
    stickCtx.moveTo(0, 0);
    stickCtx.lineTo(1500, 1500);
    stickCtx.stroke();
    for (let i = 0; true; i++) {
      let r = pow(this._k, i + this.t / this._theta) * this.R;
      if (this.q * r < 0.5) {
        break;
      }
      const phi = i * this._theta + this.t;
      ctx.beginPath();
      ctx.arc(r * cos(phi), r * sin(phi), this.q * r, 0, 2 * PI);
      ctx.fillStyle = this._colors[i % this.n];
      ctx.fill();
    }
    this.t += 0.02 * 1;
    this.t %= this.n * this._theta;
    // draw line from center

    requestAnimationFrame(this.draw);
  };
}

const s = new Spiral();
