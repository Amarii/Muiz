import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-melding-basis-gegevens-card',
  templateUrl: './melding-basis-gegevens-card.component.html',
  styleUrls: ['../melding-details.component.scss'],
})
export class MeldingBasisGegevensCardComponent implements OnInit {
  isHidden = true;
@Input() meldingData;
  displayToggle() {
    if (this.isHidden === true) {
      this.isHidden = false;
    } else {
        this.isHidden = true;
    }
  }
  constructor() { }

  ngOnInit() {}

}
