import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAddComponent } from './word-add.component';

describe('WordAddComponent', () => {
  let component: WordAddComponent;
  let fixture: ComponentFixture<WordAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordAddComponent ]
***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
***REMOVED***);

  it('should create', () => {
    expect(component).toBeTruthy();
***REMOVED***);
});
