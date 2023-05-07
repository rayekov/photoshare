import { Injectable } from "@angular/core";
import { SharedPhoto } from "../models/shared-photo.model";

@Injectable({
    providedIn:'root'
}

)
export class SharedPhotoService{
    
    sharedPhotos : SharedPhoto[]= [
        {
            id:1,
           title:'Sky',
          description:'Today we have a beautiful sky in yaounde!',
          location:'Cameroon',
          createdAt: new Date(),
          shares:0,
          photoUrl:"https://cdn.pixabay.com/photo/2016/11/21/17/40/buildings-1846728_960_720.jpg",
          
        },
    
        {
            id:2,
          title:'City',
          description:'What a view !',
          createdAt:new Date(),
          shares:0,
          photoUrl:"https://cdn.pixabay.com/photo/2020/06/14/10/58/london-5297395_960_720.jpg",
          
        },
    
        {
          id:3,
          title:'Paris',
          description:'Love this City ',
          location:'France',
          createdAt: new Date(),
          shares:0,
          photoUrl:"https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_960_720.jpg",
          
        }
      ];

      getAllSharedPhotos() : SharedPhoto[]{
        return this.sharedPhotos;
      }
      getSharedPhotoById(sharedPhotoId:number):SharedPhoto{
        const sharedPhoto = this.sharedPhotos.find(SharedPhoto => SharedPhoto.id === sharedPhotoId);
        if (sharedPhoto) {
            return sharedPhoto;
        } else {
            throw new Error("Photo not found !");
            
        }

      }
      sharePhotoById(sharedPhotoId:number, shareType: 'share' | 'unshare'):void{
       const sharedPhoto= this.getSharedPhotoById(sharedPhotoId)
        shareType === 'share' ? sharedPhoto.shares++ : sharedPhoto.shares--;

      }

}