import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDisplayComponent } from './word-display.component';

describe('WordDisplayComponent', () => {
  let component: WordDisplayComponent;
  let fixture: ComponentFixture<WordDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDisplayComponent ]
***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
***REMOVED***);

  it('should create', () => {
    expect(component).toBeTruthy();
***REMOVED***);
});
