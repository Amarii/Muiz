import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mijnmeldingen',
  templateUrl: './mijnmeldingen.page.html',
  styleUrls: ['./mijnmeldingen.page.scss'],
})
export class MijnmeldingenPage implements OnInit {
  mijnUitbraakData = [];
  userId = window.localStorage.getItem('userId');
  userFilter = { UserId: this.userId };

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getActieveMeldingenBijFilter(this.userFilter).then((payload) => {
      console.log(payload);

      payload.forEach(element => {
        this.mijnUitbraakData.push(element);
      });

    });
    //console.log(mijnUitbraakData)
  }

}
