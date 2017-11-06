import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordUpdateComponent } from './word-update.component';

describe('WordUpdateComponent', () => {
  let component: WordUpdateComponent;
  let fixture: ComponentFixture<WordUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordUpdateComponent ]
***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
***REMOVED***);

  it('should create', () => {
    expect(component).toBeTruthy();
***REMOVED***);
});
