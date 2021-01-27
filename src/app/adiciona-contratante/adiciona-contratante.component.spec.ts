import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionaContratanteComponent } from './adiciona-contratante.component';


describe('AdicionaContratanteComponent', () => {
  let component: AdicionaContratanteComponent;
  let fixture: ComponentFixture<AdicionaContratanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaContratanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
