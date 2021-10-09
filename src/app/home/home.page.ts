import {Component, OnInit} from '@angular/core';
import {Movie, OmdbApiService} from '../services/omdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movie: Movie;
  success: boolean;
  searchValue = '';

  constructor(
    private omdbApiService: OmdbApiService,
  ) {
  }

  async ngOnInit() {
    // await this.onSearch();
  }

  async onSearch() {
    if (!this.searchValue) {
      console.log('no search input, aborting search.');
      return;
    }
    console.log('search: ', this.searchValue);
    // make twitter api call
    this.movie = null;
    const response = await this.omdbApiService.searchMovieByKeyword(this.searchValue);
    if (response.Error) {
      this.success = false;
    } else {
      this.success = true;
      this.movie = response;
    }
  }
}
