import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'e-ticaret-app';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngAfterViewInit() {
  //   this.renderer.setStyle(
  //     this.el.nativeElement.ownerDocument.body,
  //     'backgroundColor',
  //     'black'
  //   );
   }
}
