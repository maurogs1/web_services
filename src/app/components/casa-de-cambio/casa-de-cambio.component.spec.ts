import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDeCambioComponent } from './casa-de-cambio.component';

describe('CasaDeCambioComponent', () => {
  let component: CasaDeCambioComponent;
  let fixture: ComponentFixture<CasaDeCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDeCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaDeCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
