import { Component, Input, OnInit } from '@angular/core';
import { SharedPhoto } from '../models/shared-photo.model';

@Component({
  selector: 'app-shared-photo',
  templateUrl: './shared-photo.component.html',
  styleUrls: ['./shared-photo.component.scss']
})
export class SharedPhotoComponent implements OnInit{

  @Input() sharedPhoto! : SharedPhoto;

  ngOnInit() {
    this.sharedPhoto.shareButtonText = 'Share This';
  }
  onShareClick(){
    if (this.sharedPhoto.shareButtonText === 'Share This') {
      this.sharedPhoto.shareButtonText = 'Unshare This';
      this.sharedPhoto.shares++;
    }else{
      this.sharedPhoto.shareButtonText = 'Share This';
      this.sharedPhoto.shares--;
    }

  }

}
