import { Component, Input, OnInit} from '@angular/core';
import { SharedPhoto } from '../models/shared-photo.model';
import { SharedPhotoService } from '../services/shared-photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-shared-photo',
  templateUrl: './single-shared-photo.component.html',
  styleUrls: ['./single-shared-photo.component.scss']
})
export class SingleSharedPhotoComponent implements OnInit {
  sharedPhoto! : SharedPhoto;
  shareButtonText!:string;
  constructor(private sharedPhotoService : SharedPhotoService, private route : ActivatedRoute){}

  ngOnInit() {
    this.shareButtonText = 'Share This';
    const sharedPhotoId = +this.route.snapshot.params['id'];
    this.sharedPhoto = this.sharedPhotoService.getSharedPhotoById(sharedPhotoId);
  }
  onShareClick(){
    if (this.shareButtonText === 'Share This') {
      this.shareButtonText = 'Unshare This';
      this.sharedPhotoService.sharePhotoById(this.sharedPhoto.id, 'share');
    }else{
      this.shareButtonText = 'Share This';
      this.sharedPhotoService.sharePhotoById(this.sharedPhoto.id, 'unshare');
    }

  }
}
