import { Injectable } from '@angular/core';
import { LoginDataModel } from '../../../../../../../Dev/MuizApp/src/trunk/src/app/models/LoginDataModel';
import { websiteUrl } from '../services/config';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: number;

  Login(loginData: LoginDataModel): Promise<any> {

    const data = 'grant_type=password&username=' + loginData.userName + '&password=' + loginData.password;

    return new Promise<any>((success, fail) => {
      fetch(websiteUrl + '/token',
        {
          method: 'POST',
          body: data,

        }).then(response => {
          if (response.status === 200) {
            console.log(response);
            const accessToken = response.json().then((data) => {
console.log('data: ' + data);
window.localStorage.setItem('muiz_access_token', data.access_token);
this.GetCurrentUser();
success('Ingelogd');
            });
          }
        }).catch(err => {
          fail('error is: ' + err);
        });
    });
  }
  RequestPassword(something) { }

  GetCurrentUser() {
    const AccessToken = window.localStorage.getItem('muiz_access_token');
    fetch(websiteUrl + '/api/account/getuserdata',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + AccessToken,
        'Content-Type': 'application/json; charset=utf-8'
      },
    }).then(Response => Response.json()).then(data => {
      window.localStorage.setItem('userId', data.Id);
    });
  }
}
