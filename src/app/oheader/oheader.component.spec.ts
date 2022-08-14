import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OheaderComponent } from './oheader.component';

describe('OheaderComponent', () => {
  let component: OheaderComponent;
  let fixture: ComponentFixture<OheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
