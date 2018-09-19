import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-purchasers',
  templateUrl: './purchasers.component.html',
  styleUrls: ['./purchasers.component.scss']
})
export class PurchasersComponent implements OnInit {
  public show1:boolean = false;
  public className:any = 'arrow-down';
  public show2:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  toggle1() {
    this.show1 = !this.show1;

    if(this.show1)  
      this.className = "arrow-up";
    else
      this.className = "arrow-down";
  }

  toggle2() {
    this.show2 = !this.show2;

    if(this.show2)  
      this.className = "arrow-up";
    else
      this.className = "arrow-down";
  }

}
