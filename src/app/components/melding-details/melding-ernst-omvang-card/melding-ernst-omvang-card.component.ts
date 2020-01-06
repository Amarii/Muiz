import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-melding-ernst-omvang-card',
  templateUrl: './melding-ernst-omvang-card.component.html',
  styleUrls: ['../melding-details.component.scss'],
})
export class MeldingErnstOmvangCardComponent implements OnInit {
  isHidden = true;
  onrustToelichting: string;
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
