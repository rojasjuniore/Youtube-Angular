import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
declare var $: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  videos: any[] = [];
  videoSel: any;

  constructor(private apiService: ApiService) {
    this.apiService.getVideo()
      .subscribe(res => {
        this.videos = res;
      });
  }

  ngOnInit() {
  }

  public verVideo(video: any) {
    this.videoSel = video;
    $('#exampleModal').modal();

  }

  cerrarModal() {
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas() {
    this.apiService.getVideo()
      .subscribe(res => {
        this.videos.push.apply(this.videos, res);

      });
  }

}
