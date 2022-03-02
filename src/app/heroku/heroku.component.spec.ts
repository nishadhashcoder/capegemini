import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerokuComponent } from './heroku.component';

describe('HerokuComponent', () => {
  let component: HerokuComponent;
  let fixture: ComponentFixture<HerokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerokuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
