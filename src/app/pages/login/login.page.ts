import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from 'src/app/models/LoginDataModel';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginData: LoginDataModel;
  // public message: string;
  // public passwordRequest: boolean;

  // public resetPasswordResult: any = { message: '' };
  // public passwordforgetEmail: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loginData = new LoginDataModel();
  }

  ngOnInit() {
  }
  Login() {
    this.authService.Login(this.loginData).then(() => {
      this.router.navigate(['/home/dashboard']);
    }, (err) => {
      console.log(err);
    });
  }

 // RequestPassword() {
    // this.authService.RequestPassword( this.passwordforgetEmail ).then( response  => {
    //     this.resetPasswordResult = response.data;
    // } );
 // }

}
