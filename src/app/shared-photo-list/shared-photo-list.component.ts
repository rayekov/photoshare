import { Component, OnInit } from '@angular/core';
import { SharedPhoto } from '../models/shared-photo.model';
import { SharedPhotoService } from '../services/shared-photo.service';

@Component({
  selector: 'app-shared-photo-list',
  templateUrl: './shared-photo-list.component.html',
  styleUrls: ['./shared-photo-list.component.scss']
})
export class SharedPhotoListComponent implements OnInit{
  sharedPhotos!:SharedPhoto[];

  constructor(private sharedPhotoService : SharedPhotoService){

  }
  ngOnInit(){
    this.sharedPhotos = this.sharedPhotoService.getAllSharedPhotos();
    
  }


}
