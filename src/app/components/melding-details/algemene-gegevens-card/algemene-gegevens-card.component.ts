import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-algemene-gegevens-card',
  templateUrl: './algemene-gegevens-card.component.html',
  styleUrls: ['../melding-details.component.scss'],
})
export class AlgemeneGegevensCardComponent implements OnInit {
  isHidden = false;
  isDataAvailable = false;
  @Input() meldingData;
  id: number;

  displayToggle() {
    if (this.isHidden === true) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }

  constructor() {


  }

  ngOnInit() {
    this.isDataAvailable = true;
    console.log(this.meldingData);

  }

}
