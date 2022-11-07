import { Component, Input, OnInit } from '@angular/core';
import { IVideoStatistics } from 'src/app/models/IVideoStatistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() public statistica: IVideoStatistics = {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
