import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IYouTubeItem } from '../../../models/IYouTubeItem';
 

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {

  public videoId = '';

  public videoIdtype = '';

  public videoData!: IYouTubeItem[];

  public card!: IYouTubeItem;

  constructor(
    private route: ActivatedRoute, 
    public dataService: DataService,
  ) { }


  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['id'];
    this.videoData = this.dataService.response;
    this.card = this.videoData.filter( card => card.id === this.route.snapshot.params['id'])[0];
  }


  
}
