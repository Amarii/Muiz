import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  uitbraakData = [];
  status: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getActieveMeldingenBijFilter({}).then(payload => {
      payload.forEach(element => {
        this.uitbraakData.push(element);
        //console.log(element)
      });
    });
  }

}
