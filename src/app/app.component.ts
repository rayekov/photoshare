import { Component, OnInit } from '@angular/core';
import { SharedPhoto } from './models/shared-photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myPhoto!:SharedPhoto;
  myPhoto2!:SharedPhoto;
  myPhoto3!:SharedPhoto;
  ngOnInit(){
    this.myPhoto= new SharedPhoto(
      'Sky',
      'Today we have a beautiful sky in yaounde!',
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2016/11/21/17/40/buildings-1846728_960_720.jpg",
      'Share This'
    );
    this.myPhoto2= new SharedPhoto(
      'City',
      'What a view !',
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2020/06/14/10/58/london-5297395_960_720.jpg",
      'Share This'
    );
    this.myPhoto3= new SharedPhoto(
      'Paris',
      'Love City',
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_960_720.jpg",
      'Share This'
    );

  }

}
