import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailerComponent } from './railer.component';


describe('RailerComponent', () => {
  let component: RailerComponent;
  let fixture: ComponentFixture<RailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
