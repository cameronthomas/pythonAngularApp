import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Video List Title"
  videoList = [
    {name: "Skiing",
    link: "https://www.youtube.com/watch?v=aAcZ9L0w3aw"},
    {name: "Parkour",
    link: "https://www.youtube.com/watch?v=NX7QNWEGcNI"},
    {name: "Squirrel Suit",
    link: "https://www.youtube.com/watch?v=TWfph3iNC-k"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
