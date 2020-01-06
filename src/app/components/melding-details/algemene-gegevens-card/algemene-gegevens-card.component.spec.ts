import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlgemeneGegevensCardComponent } from './algemene-gegevens-card.component';

describe('AlgemeneGegevensCardComponent', () => {
  let component: AlgemeneGegevensCardComponent;
  let fixture: ComponentFixture<AlgemeneGegevensCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgemeneGegevensCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlgemeneGegevensCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
