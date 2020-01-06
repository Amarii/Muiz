import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  title: string;
  newMelding: boolean;

  constructor(private router: Router, private dataService: DataService) {

  }


  ngOnInit() {

    this.router.events.subscribe((event) => {
      const test = this.router.routerState.snapshot.url.slice(this.router.routerState.snapshot.url.indexOf('/') + 1);
      const count = test.indexOf('/') + 1;
      const currentPage = test.slice(count);
      console.log(currentPage);

      if (currentPage === 'mijnmeldingen') {
        this.title = 'Mijn Actieve Meldingen';
      } else if (currentPage === 'dashboard') {
        this.title = 'Alle Actieve Meldingen';
      } else if (currentPage.includes('melding-details')) {
        const routerUrl = this.router.routerState.snapshot.url.slice(6);
        const meldingId = routerUrl.indexOf('/') + 1;
        this.title = 'Melding ' + routerUrl.substring(meldingId, routerUrl.length);
      } else if (currentPage === 'create-melding') {
        this.title = 'Nieuwe Melding';
        this.dataService.isNewMelding = true;
      } else {
        this.dataService.isNewMelding = false;
        this.newMelding = false;
      }

      console.log();


   });
  }

   goBack() {
    window.history.back();
    }
}


