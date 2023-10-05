import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformComponent } from './simpleform.component';

describe('SimpleformComponent', () => {
  let component: SimpleformComponent;
  let fixture: ComponentFixture<SimpleformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleformComponent]
    });
    fixture = TestBed.createComponent(SimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
