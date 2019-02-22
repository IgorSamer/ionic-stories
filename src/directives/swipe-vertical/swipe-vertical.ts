import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { Gesture } from 'ionic-angular';

declare var Hammer: any;

@Directive({
  selector: '[swipe-vertical]' // Attribute selector
})
export class SwipeVerticalDirective {
  @Output() onSwipeUp = new EventEmitter();
  @Output() onSwipeDown = new EventEmitter();
  private el: HTMLElement;
  private swipeGesture: Gesture;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.swipeGesture = new Gesture(this.el, {
      recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
      ]
    });

    this.swipeGesture.listen();

    this.swipeGesture.on("swipeup", () => {
      this.onSwipeUp.emit({ el: this.el });
    });

    this.swipeGesture.on("swipedown", () => {
      this.onSwipeDown.emit({ el: this.el });
    });
  }

  ngOnDestroy() {
    this.swipeGesture.destroy();
  }
}