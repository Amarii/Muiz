import { Component, OnInit } from '@angular/core';
import { MeldingDataModel } from 'src/app/models/MeldingDataModel';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-melding-details',
  templateUrl: './melding-details.page.html',
  styleUrls: ['./melding-details.page.scss'],
})
export class MeldingDetailsPage implements OnInit {
  meldingData: MeldingDataModel;
  isDataLoaded = false;
  meldingId: number;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    // this.dataService.getNewDataById(323);
// console.log(this.dataService.getNewDataById(1));
   }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.meldingId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dataService.getMeldingById(this.meldingId).then(data => {
      this.meldingData = data;
    });
    console.log(this.dataService.isDataLoaded);
    if (this.dataService.isDataLoaded) {
      console.log(this.meldingData);

    }
  }

}
