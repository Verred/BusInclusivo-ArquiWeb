import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCreaeditaComponent } from './color-creaedita.component';

describe('ColorCreaeditaComponent', () => {
  let component: ColorCreaeditaComponent;
  let fixture: ComponentFixture<ColorCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
