import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import {BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MusicService {

  searchData = new BehaviorSubject<string>('');
  observableSearchData$ = this.searchData.asObservable();


  constructor(private http: HttpClient) { }


  getPopular(category: string, page?: any) {
    let url= `${environment.API_LASTFM}?method=`;
    switch (true) {
      case !category:
        url += `chart.gettopartists&api_key=${environment.API_KEY_LASTFM}&format=json`;
        break;
      case category === 'Chilean' :
        url += `geo.gettopartists&country=${category}&api_key=${environment.API_KEY_LASTFM}&format=json`;
        break;
      }
      if (page) {
    url += `&page=${page}`;
  }
  return this.http.get<any>(url);
}



getSearch(query: string) {
  return this.http.get<any>(`${environment.API_LASTFM}/?method=artist.getinfo&artist=${query}&api_key=${environment.API_KEY_LASTFM}&format=json`);
}

searchMusic(artistName: string, queryType: string) {
  return this.http.get(`${environment.API_LASTFM}/?method=artist.${queryType}&artist=${artistName}&api_key=${environment.API_KEY_LASTFM}&format=json`);
}

  //actualizar busquedas
  nextData(data: any) {
    this.searchData.next(data);
  }

}
