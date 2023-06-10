import { Component } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent {
  public title = 'NOTICE BOARD';
  public disableNoButton = true;
  public userResponse: string | undefined;
  constructor() {}

  ngOnInit() {}

  public sayYes() {
    this.userResponse = 'I am In';
  }
}
