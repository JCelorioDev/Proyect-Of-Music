import { Component } from '@angular/core';
import { DeezerService } from './Servicios/deezer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private deezerService:DeezerService){};
  Musicas:any;
  Generos:any;
  Album:any;
  Tracks:any;
  ArrayNuevoAlbum:any=[];
  ngOnInit(): void {
    this.getGener();
    this.getMusicForName("Bad Bunny");
  }

  getMusicForName(name:any){
    let Aux;
    if(name.value){
      Aux= name.value;
    }else{
      Aux=name;
    }
    this.deezerService.getMusicForArtist(Aux).subscribe({
      next:(s)=>{
        this.Musicas = s.data;
        this.getAlbumForArtist(this.Musicas[0].artist.id)
        this.CargarAlbum();
      },
      error:(e)=>{

      }
    })
  }

  getGener(){
    this.deezerService.getAllGener().subscribe({
      next:(s)=>{
        this.Generos = s.data;
      },
      error:(e)=>{

      }
    })
  }

  CargarAlbum(){
    this.ArrayNuevoAlbum.length=0;

    for(let musica of this.Musicas){
      this.ArrayNuevoAlbum.push(musica.album.title);
    }
  }

  getAlbumForArtist(IdArtista:number){
    this.deezerService.getAlbumForArtist(IdArtista).subscribe({
      next:(s)=>{
        this.Album = s.data;
      },
      error:(e)=>{
        
      }
    })
  }

  getTrack(id:number){
    this.deezerService.getTrackAlbum(id).subscribe({
      next:(s)=>{
        this.Tracks = s.data;
      },
      error:(e)=>{

      }
    })
  }
}
