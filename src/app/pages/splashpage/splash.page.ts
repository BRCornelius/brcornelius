import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.css']
})
export class SplashPage implements OnInit {

  constructor(public auth: AuthService) {}

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-farouk.gif';
  title = `Brian's Page`;

  ngOnInit() {
    this.auth.isAuthorized();
  }
}
