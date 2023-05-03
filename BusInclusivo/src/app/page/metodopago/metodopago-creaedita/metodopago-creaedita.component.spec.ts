import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodopagoCreaeditaComponent } from './metodopago-creaedita.component';

describe('MetodopagoCreaeditaComponent', () => {
  let component: MetodopagoCreaeditaComponent;
  let fixture: ComponentFixture<MetodopagoCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodopagoCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodopagoCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
