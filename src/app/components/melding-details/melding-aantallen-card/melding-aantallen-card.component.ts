import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-melding-aantallen-card',
  templateUrl: './melding-aantallen-card.component.html',
  styleUrls: ['../melding-details.component.scss'],
})
export class MeldingAantallenCardComponent implements OnInit {
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
