import { Component, OnInit } from '@angular/core';

import { MusicService } from '../../../services/music.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  // Propiedades
  public searchData = null;
  public subscriptionSearchData: Subscription;

  constructor(
    private musicService: MusicService
  ) {
      this.subscriptionSearchData = this.musicService.observableSearchData$
        .subscribe(
          dataSearch => {
            this.searchData = dataSearch; //me subscribo para estar escuchando dinamicamente y constamente la busqueda en el navbar
          });
   }

  ngOnInit() {
  }

  public getArtistsSearch() {
    if(this.searchData) {
      this.musicService.nextData(this.searchData);
    }
  }

}
