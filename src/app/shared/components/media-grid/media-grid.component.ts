import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { IKidsVideo, IOTFVideo, IOptions } from '../../../interfaces';
import { FilterService } from '../../../services';

@Component({
  selector: 'media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent {

  constructor(
    private router: Router,
    private filter: FilterService
  ) { }

  @Input() media: IKidsVideo[] | IOTFVideo[];
  @Input() listedMedia: IKidsVideo[] | IOTFVideo[];
  @Input() displayFilter: boolean;
  @Input() $options: IOptions[];

  @Output() handleClick: EventEmitter<{}> = new EventEmitter();

  currentRoute: string = this.router.url.replace('/', '');

  checkRoute: Function = (route: string): boolean => {
    return route === this.currentRoute;
  }
  updateDisplayedMedia: Function = (): void => {
    this.media = this.listedMedia;
    const newMedia = this.filter.filterContent(this.media, this.filter.facets);
    this.media = newMedia;
  }
  setActive: Function = ($event): void => {
    this.handleClick.emit({
      src: $event.target.id,
      title: $event.target.title
    });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}