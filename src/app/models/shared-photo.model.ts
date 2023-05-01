export class SharedPhoto {
    constructor(public title:string,public description : string,public createdAt : Date, public shares : number,public photoUrl : string,public shareButtonText: string) {
    }
   

    onShareClick(){

        if (this.shareButtonText === 'Share This') {
          this.shareButtonText = 'Unshare This';
          this.shares++;
        }else{
          this.shareButtonText = 'Share This';
          this.shares--;
        }
    
      }
    
}