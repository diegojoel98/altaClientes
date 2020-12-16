import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBlogComponent } from './inicio-blog.component';

describe('InicioBlogComponent', () => {
  let component: InicioBlogComponent;
  let fixture: ComponentFixture<InicioBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
