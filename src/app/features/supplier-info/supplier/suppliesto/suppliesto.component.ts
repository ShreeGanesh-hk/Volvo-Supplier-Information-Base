import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliesto',
  templateUrl: './suppliesto.component.html',
  styleUrls: ['./suppliesto.component.scss']
})
export class SuppliestoComponent implements OnInit {
  public show1:boolean = false;
  public className:any = 'arrow-down';
  public className1:any = 'arrow-down';
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
      this.className1 = "arrow-up";
    else
      this.className1 = "arrow-down";
  }

}
