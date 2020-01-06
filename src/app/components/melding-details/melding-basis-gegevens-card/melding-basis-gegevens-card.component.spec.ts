import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeldingBasisGegevensCardComponent } from './melding-basis-gegevens-card.component';

describe('MeldingBasisGegevensCardComponent', () => {
  let component: MeldingBasisGegevensCardComponent;
  let fixture: ComponentFixture<MeldingBasisGegevensCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeldingBasisGegevensCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeldingBasisGegevensCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
