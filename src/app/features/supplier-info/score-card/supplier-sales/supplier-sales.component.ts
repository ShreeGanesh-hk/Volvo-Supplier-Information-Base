import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-sales',
  templateUrl: './supplier-sales.component.html',
  styleUrls: ['./supplier-sales.component.scss']
})
export class SupplierSalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'bar';
 
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
 
  
  public lineChartColors = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#F44336',      
      pointHoverBackgroundColor: '#F44336'          
    },
    { // dark grey
      backgroundColor: 'transparent',
      borderColor: '#03A9F4',
      pointHoverBackgroundColor : '#03A9F4'
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#9C27B0',
      pointHoverBackgroundColor : '#9C27B0'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#673AB7',
      pointHoverBackgroundColor : '#673AB7'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#3F51B5',
      pointHoverBackgroundColor : '#3F51B5'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#00BCD4',
      pointHoverBackgroundColor : '#00BCD4'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#0D47A1',
      pointHoverBackgroundColor : '#0D47A1'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#009688',
      pointHoverBackgroundColor : '#009688'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#4CAF50',
      pointHoverBackgroundColor : '#4CAF50'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#FF9800',
      pointHoverBackgroundColor : '#FF9800'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#880E4F',
      pointHoverBackgroundColor : '#880E4F'      
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#3E2723',
      pointHoverBackgroundColor : '#3E2723'      
    }
    
    ];
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
