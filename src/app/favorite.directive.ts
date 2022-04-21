import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[linesFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set linesFavorite(value) {
    this.isFavorite = value;
  }
}
