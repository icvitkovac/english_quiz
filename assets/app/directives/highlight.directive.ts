import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
***REMOVED***
})
export class HighlightDirective {
  private _defaultColor = '#0FA0CE';
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
***REMOVED***

  @Input('myHighlight') highlightColor: string;

  onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
***REMOVED***

  onMouseLeave() {
    this.highlight(null);
***REMOVED***

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
***REMOVED***
}
