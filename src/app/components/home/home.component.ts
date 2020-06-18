import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Artist } from '../../models/Artist';
import { Track } from '../../models/Track';
import { trigger, transition, query, stagger, animate, style} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0}),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], {optional: true })
      ])
    ])
  ],
})

export class HomeComponent {

  searchStr: string;
  searchResult: boolean;

  artist: Artist = {
    name: '',
    image: '',
    listeners: 0,
    playcount: 0,
    summary: '',
    url: ''
  };

  tracks: Track[] = [
    { name: '', url: '', rank: 1, listeners: 0 },
    { name: '', url: '', rank: 2, listeners: 0 },
    { name: '', url: '', rank: 3, listeners: 0 },
    { name: '', url: '', rank: 4, listeners: 0 },
    { name: '', url: '', rank: 5, listeners: 0 },
  ];

  constructor(private apiService: MusicService) { }

  searchMusic() {
    this.searchResult = true;
    this.apiService.searchMusic(this.searchStr, 'getinfo').subscribe((res: any) => {
      this.artist.name = res.artist.name;
      this.artist.image = res.artist.image[2]['#text'];
      this.artist.listeners = res.artist.stats.listeners;
      this.artist.playcount = res.artist.stats.playcount;
      this.artist.summary = res.artist.bio.summary;
      this.artist.url = res.artist.url;
    });

    this.apiService.searchMusic(this.searchStr, 'gettoptracks').subscribe((res: any) => {
        this.tracks[0].name = res.toptracks.track[0].name;
        this.tracks[0].url = res.toptracks.track[0].url;
        this.tracks[0].listeners = res.toptracks.track[0].listeners;
        this.tracks[1].name = res.toptracks.track[1].name;
        this.tracks[1].url = res.toptracks.track[1].url;
        this.tracks[1].listeners = res.toptracks.track[1].listeners;
        this.tracks[2].name = res.toptracks.track[2].name;
        this.tracks[2].url = res.toptracks.track[2].url;
        this.tracks[2].listeners = res.toptracks.track[2].listeners;
        this.tracks[3].name = res.toptracks.track[3].name;
        this.tracks[3].url = res.toptracks.track[3].url;
        this.tracks[3].listeners = res.toptracks.track[3].listeners;
        this.tracks[4].name = res.toptracks.track[4].name;
        this.tracks[4].url = res.toptracks.track[4].url;
        this.tracks[4].listeners = res.toptracks.track[4].listeners;
    });
  }

  reset() {
    this.searchStr = null;
    this.searchResult = false;
  }

}
