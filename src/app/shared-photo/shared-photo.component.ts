import { Component, Input, OnInit } from '@angular/core';
import { SharedPhoto } from '../models/shared-photo.model';

@Component({
  selector: 'app-shared-photo',
  templateUrl: './shared-photo.component.html',
  styleUrls: ['./shared-photo.component.scss']
})
export class SharedPhotoComponent implements OnInit{

  @Input() sharedPhoto! : SharedPhoto;
  
  shareButtonText! : string;


  ngOnInit() {
    this.shareButtonText = 'Share This';
  }
  onShareClick(){
    if (this.shareButtonText === 'Share This') {
      this.shareButtonText = 'Unshare This';
      this.sharedPhoto.shares++;
    }else{
      this.shareButtonText = 'Share This';
      this.sharedPhoto.shares--;
    }

  }

}
