import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPersonalizadoComponent } from './input-personalizado.component';

describe('InputPersonalizadoComponent', () => {
  let component: InputPersonalizadoComponent;
  let fixture: ComponentFixture<InputPersonalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPersonalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
