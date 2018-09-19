import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.scss']
})
export class GeneralinfoComponent implements OnInit {
  public generalDetails: any;

  constructor() {
  }

  ngOnInit() {

  }

  showData() {
    alert(JSON.stringify(this.generalDetails));
  }
}
