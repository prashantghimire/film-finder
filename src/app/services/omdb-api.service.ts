import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface Movie {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Plot: string;
  Runtime: string;
  Rated: string;
  Error?: string;
  Response?: string;
}

interface ApiError {
  Error: string;
  Response: string;
}

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public searchMovieByKeyword(keyword: string): Promise<Movie> {
    return this.http.get<Movie>(`${environment.apiBase}&t=${keyword}`).toPromise();
  }
}

