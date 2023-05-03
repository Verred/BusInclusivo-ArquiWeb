import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCreaeditaComponent } from './modelo-creaedita.component';

describe('ModeloCreaeditaComponent', () => {
  let component: ModeloCreaeditaComponent;
  let fixture: ComponentFixture<ModeloCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
