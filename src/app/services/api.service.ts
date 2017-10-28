import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  private YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';
  private API_KEY = 'AIzaSyBYQCKVpyHVGhwiY3aGkypnmRo0ITIGkpw';
  private PLAY_LIST_ID = 'UUpVm7bg6pXKo1Pr6k5kxG9A';
  private nextPageToken = 'CAkQAA';

  constructor(public _http: Http) { }

  public getVideo() {
    const url = `${this.YOUTUBE_URL}/playlistItems`;

    const params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '9');
    params.set('playlistId', this.PLAY_LIST_ID);
    params.set('key', this.API_KEY);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this._http.get(url, { search: params })
      .map(res => {
        console.log(res.json());
        this.nextPageToken = res.json().nextPageToken;
        console.log(this.nextPageToken);
        const videos: any[] = [];
        for (const itemvideo of res.json().items) {
          const snippet = itemvideo.snippet;
          videos.push(snippet);
        }

        return videos;
      });
  }

}
