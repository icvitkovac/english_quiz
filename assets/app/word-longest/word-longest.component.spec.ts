import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLongestComponent } from './word-longest.component';

describe('WordLongestComponent', () => {
  let component: WordLongestComponent;
  let fixture: ComponentFixture<WordLongestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordLongestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLongestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
