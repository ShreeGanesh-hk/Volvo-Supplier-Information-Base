import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  collapedSideBar: boolean;

  constructor() {
    // contructor
  }

  ngOnInit() {
    // ng on init
  }


  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
