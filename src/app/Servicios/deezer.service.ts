import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private httpClient:HttpClient) { }

  ApiUrl = "https://api.deezer.com/";

  getMusicForArtist(name:string){
    return this.httpClient.get<any>(this.ApiUrl+"search?q="+name)
  }

  getAllGener(){
    return this.httpClient.get<any>(this.ApiUrl+"genre");
  }

  getAlbumForArtist(IdArtista:number){
    return this.httpClient.get<any>(this.ApiUrl+"artist/"+IdArtista+"/albums");
  }

  getTrackAlbum(IdAlbum:number){
    return this.httpClient.get<any>(this.ApiUrl+"album/"+IdAlbum+"/tracks");
  }
}
