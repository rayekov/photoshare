import { Component, Input, OnInit } from '@angular/core';
import { SharedPhoto } from '../models/shared-photo.model';
import { SharedPhotoService } from '../services/shared-photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-photo',
  templateUrl: './shared-photo.component.html',
  styleUrls: ['./shared-photo.component.scss']
})
export class SharedPhotoComponent implements OnInit{

  @Input() sharedPhoto! : SharedPhoto;
  shareButtonText!: string;
  constructor(private sharedPhotoService : SharedPhotoService,private router : Router){}

  ngOnInit() {
    this.shareButtonText = 'Share This';
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

  OnSharedPhotoView(){
    this.router.navigateByUrl(`sharedphotos/${this.sharedPhoto.id}`);
  }

}
