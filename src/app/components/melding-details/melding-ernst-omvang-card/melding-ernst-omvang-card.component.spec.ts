import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeldingErnstOmvangCardComponent } from './melding-ernst-omvang-card.component';

describe('MeldingErnstOmvangCardComponent', () => {
  let component: MeldingErnstOmvangCardComponent;
  let fixture: ComponentFixture<MeldingErnstOmvangCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeldingErnstOmvangCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeldingErnstOmvangCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
