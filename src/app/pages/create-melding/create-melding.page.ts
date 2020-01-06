import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-create-melding',
  templateUrl: './create-melding.page.html',
  styleUrls: ['./create-melding.page.scss'],
})
export class CreateMeldingPage implements OnInit {
  progress = 0.25;
  date = new Date().toDateString();
  uitbraakStartDate: Date;
  currentStep = 1;
  labOnderzoek = false;
  labUitslag = false;
  labOnderzoekAantal: number;
  labUitslagAantal: number;
  patientenAantal: number;
  medewerkersAantal: number;
  aantalGetroffenAfdelingen: number;
  aantalGeslotenAfdelingen: number;
  toelightingOmvang: string;
  isOnrust: string;
  risicoVerspreiding = false;
  closeDate: Date;
  automatischAfsluiten = false;
  automatischAfsluitenDate: Date;
  contactGGD = false;
  Soortoption: string;
  meldingSoorten = [];
  soortUitbraakId: number;
  toelightingOnrust: string;
  toelightingRisicoVerspreiding: string;
  eersteDagZonderZieken = new Date().toDateString();
  ggdContact = false;

data: {};


  constructor(private dataService: DataService) { }
  ngOnInit() {
   this.getMeldingSoorten();
   this.meldingSoorten = this.dataService.meldingSoorten;
   this.dataService.createMelding();

  }


getMeldingSoorten() {
  fetch('http://192.168.3.111/uitbraak/api/meldingsoorten/getall', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(Response => Response.json()).then(data => {
    this.meldingSoorten = [];
    data.forEach(element => {
      this.meldingSoorten.push(element);
    });
  }).catch(err => console.error(err));
}
  nextStep() {
    this.currentStep++;
    this.progress += 0.25;
  }
  previousStep() {
    this.currentStep--;
    this.progress -= 0.25;
  }


change(e: PointerEvent) {
  console.log(e.currentTarget);

}
  onchange(type: string) {
    switch (type) {
      case 'onderzoek':
        this.labOnderzoek = !this.labOnderzoek;
        break;
      case 'uitslag':
        this.labUitslag = !this.labUitslag;
        break;
      case 'risico':
        this.risicoVerspreiding = !this.risicoVerspreiding;
        break;
      case 'afsluiten':
        this.automatischAfsluiten = !this.automatischAfsluiten;
        break;
      case 'ggd':
        this.contactGGD = !this.contactGGD;
        break;
    }
  }
  goBack() {
    window.history.back();
    }
}




