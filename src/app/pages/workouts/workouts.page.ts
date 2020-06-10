import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { IOTFVideo, IFormattedOTFVideo, IOptions } from '../../utilities';

@Component({
  selector: 'workouts-page',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.css']
})
export class WorkoutsPage implements OnInit {

  constructor(
    private auth: AuthService,
    private media: MediaService,
    private otf: OtfService
  ) { }

  ngOnInit() {
    this.auth.isAuthorized().subscribe(res => {
      this.isAuthorized = res.body
    });
    this.media.otfVideos.subscribe(res => {
      this.videos = this.otf.formatVideos(res.response.data.Items);
      const limit = Math.floor(Math.random() * (this.videos.length - 1));
      this.activeVideoTitle = this.videos[limit].title;
      this.activeVideoUrl = this.otf.toUri(this.activeVideoTitle);
    });
  }

  activeVideoTitle: string;
  activeVideoUrl: string;
  errorText: string = 'You are not authorized to view this page.  Please email brian@corneliuses.com to request access.'
  options: IOptions[] = this.otf.options;
  isAuthorized: boolean;
  videos: IFormattedOTFVideo[];
}