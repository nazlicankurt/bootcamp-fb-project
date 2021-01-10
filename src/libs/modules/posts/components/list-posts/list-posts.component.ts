import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit(): void {
  }

}
