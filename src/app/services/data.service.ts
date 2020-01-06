import { Injectable } from '@angular/core';
import { FilterModel } from '../models/FilterModel';
import { websiteUrl } from '../services/config';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  meldingSoortenUrl = websiteUrl + '/api/meldingen/GetSummaries';
  meldingSoorten = [];
  isDataLoaded = false;

  meldingDataUrl: string;
  meldingData = [];

  isNewMelding = false;

  constructor() { }


  getActieveMeldingenBijFilter(filterModel: FilterModel) {
    const AccessToken = window.localStorage.getItem('muiz_access_token');
    console.log('accestoken: ' + AccessToken);
    return new Promise<any> ( (success) => {
      const FilterModel = filterModel;

      fetch(this.meldingSoortenUrl, {
        method: 'POST',
        body: JSON.stringify(FilterModel),
        headers: {
          Authorization: 'Bearer ' + AccessToken,
          'Content-Type' : 'application/json; charset=utf-8'
        },
      }).then(Response => Response.json()).then(data => {
       // console.log(data);
        success(data);
      });
    });

  }

  createMelding() {
    const AccessToken = window.localStorage.getItem('muiz_access_token');
    fetch(websiteUrl + '/api/meldingen/newmelding', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + AccessToken,
        'Content-Type' : 'application/json; charset=utf-8'
      },
    }).then(Response => Response.json()).then(data => {
      console.log(data);
    });
  }
  getMeldingById(meldingId: number) {
    const AccessToken = window.localStorage.getItem('muiz_access_token');
    // console.log('accestoken: ' + AccessToken);
    return new Promise<any> ( (success) => {

      fetch(websiteUrl + '/api/meldingen/' + meldingId, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + AccessToken,
          'Content-Type' : 'application/json; charset=utf-8'
        },
      }).then(Response => Response.json()).then(data => {
       // console.log(data);
       this.isDataLoaded = true;
       success(data);
      });
    });

  }
  getNewDataById(meldingId: number) {
    const token = window.localStorage.getItem('muiz_access_token');
    fetch(websiteUrl + '/api/meldingen/' + meldingId, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type' : 'application/json; charset=utf-8'
      },
    }).then(Response => Response.json().then(data => {
      console.log(data);
      window.localStorage.setItem('muiz_melding_data', data);
    }).catch(err => {console.log(err); }));
  }

  getDataById(uitbraakId: number) {
    const token = window.localStorage.getItem('muiz_access_token');
    // console.log('token: '  + token);
    // console.log('token: ' + token);

    return new Promise<any> ( (success) => {

      // http://localhost/UitbraakRegisterWeb/api/meldingen/320?noCache=1574241026576
          fetch(websiteUrl + '/api/meldingen/' + uitbraakId, {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json; charset=utf-8'
          },
        }).then(Response => Response.json()).then(data => {

            console.log(data);
            success(data);
        });
      });
  }
}
