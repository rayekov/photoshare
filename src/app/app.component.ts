import { Component, OnInit } from '@angular/core';
import { SharedPhoto } from './models/shared-photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sharedPhotos!:SharedPhoto[];
 
  ngOnInit(){
    this.sharedPhotos= [
    {
       title:'Sky',
      description:'Today we have a beautiful sky in yaounde!',
      location:'Cameroon',
      createdAt: new Date(),
      shares:0,
      photoUrl:"https://cdn.pixabay.com/photo/2016/11/21/17/40/buildings-1846728_960_720.jpg",
      shareButtonText:'Share This'
    },

    {
      title:'City',
      description:'What a view !',
      createdAt:new Date(),
      shares:0,
      photoUrl:"https://cdn.pixabay.com/photo/2020/06/14/10/58/london-5297395_960_720.jpg",
      shareButtonText:'Share This'
    },

    {
      title:'Paris',
      description:'Love this City ',
      location:'France',
      createdAt: new Date(),
      shares:0,
      photoUrl:"https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_960_720.jpg",
      shareButtonText:'Share This'
    }
  ]
  }

}
