import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLongestComponent } from './word-longest.component';

describe('WordLongestComponent', () => {
  let component: WordLongestComponent;
  let fixture: ComponentFixture<WordLongestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordLongestComponent ]
***REMOVED***)
    .compileComponents();
***REMOVED***));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLongestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
***REMOVED***);

  it('should create', () => {
    expect(component).toBeTruthy();
***REMOVED***);
});
