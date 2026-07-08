import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  imports: [],
  templateUrl: './matrix-background.component.html',
  styleUrl: './matrix-background.component.scss'
})
export class MatrixBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEFXYZ<>/=+*';
  private ctx!: CanvasRenderingContext2D;
  private drops: number[] = [];
  private fontSize = 16;
  private animationFrameId = 0;
  private lastFrameTime = 0;
  private readonly frameInterval = 65;
  private readonly resizeHandler = () => this.setupCanvas();

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.setupCanvas();
    window.addEventListener('resize', this.resizeHandler);
    this.draw();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    cancelAnimationFrame(this.animationFrameId);
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.fontSize = window.innerWidth < 600 ? 14 : 18;
    const columns = Math.ceil(canvas.width / this.fontSize);
    const rows = Math.ceil(canvas.height / this.fontSize);
    this.drops = Array.from({ length: columns }, () => Math.floor(Math.random() * rows));
  }

  private draw = (time: number = 0): void => {
    this.animationFrameId = requestAnimationFrame(this.draw);

    if (time - this.lastFrameTime < this.frameInterval) {
      return;
    }
    this.lastFrameTime = time;

    const canvas = this.canvasRef.nativeElement;

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = '#00ff66';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  };
}
