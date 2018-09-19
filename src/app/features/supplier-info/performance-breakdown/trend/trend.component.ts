import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  private delivery = false;

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private getNodeChildDetails;

  constructor(){
    

    this.columnDefs = [{
      headerName: "Brand/Consignee", 
      field : 'brand',
      children: [
        {
          headerName: "",
          field: "brand",
          cellRenderer: "agGroupCellRenderer",
          width: 200
        }
      ]
    },
    {
    headerName: "PPM", 
    field : 'ppm',
      children: [
        {
          headerName: "Target",
          field: "target1",
          width: 90
        },
        {
          headerName: "Last",
          field: "last1",
          width: 90
        },
        {
          headerName: "Actual",
          field: "actual1",
          width: 90
        },
        {
          headerName: "Trend",
          field: "trend1",
          width: 90
        }
      ]
    },
    {
      headerName: "QPM", 
      field : 'qpm',
      children: [
        {
          headerName: "Target",
          field: "target2",
          width: 90
        },
        {
          headerName: "Last",
          field: "last2",
          width: 90
        },
        {
          headerName: "Actual",
          field: "actual2",
          width: 90
        },
        {
          headerName: "Trend",
          field: "trend2",
          width: 90
        }
      ]
    },
    {
      headerName: "Delivery Precision(%)", 
      children: [
        {
          headerName: "Target",
          field: "target3",
          width: 90
        },
        {
          headerName: "Last",
          field: "last3",
          width: 90
        },
        {
          headerName: "Actual",
          field: "actual3",
          width: 90
        },
        {
          headerName: "Trend",
          field: "trend3",
          width: 90
        }
      ],
      field : 'delivery'
    }
    ];

    this.rowData = [
      {
        brand: "Supplier Total",
        target1: "",
        last1: "0",
        actual1: "0",
        trend1: "0",
        target2: "",
        last2: "0",
        actual2: "0",
        trend2: "0",
        target3: "",
        last3: "0",
        actual3: "0",
        trend3: "0",
        participants: null
      },
      {
        brand: "CVA COE",
        target1: "<70",
        last1: "0",
        actual1: "0",
        trend1: "0",
        target2: "<50",
        last2: "0",
        actual2: "0",
        trend2: "0",
        target3: ">95",
        last3: "0",
        actual3: "0",
        trend3: "0",
        participants: [
          {
            brand: "1001 Gothenborg",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          },
          {
            brand: "2800 Curitiba",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          },{
            brand: "4645 Ghent",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          },{
            brand: "31967 Bourg",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          }
        ]
      },
      {
        brand: "Logistics Services",
        target1: "<70",
        last1: "0",
        actual1: "0",
        trend1: "0",
        target2: "<50",
        last2: "0",
        actual2: "0",
        trend2: "0",
        target3: ">95",
        last3: "0",
        actual3: "0",
        trend3: "0",
        participants: [
          {
            brand: "1001 Gothenborg",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          },
          {
            brand: "1618 Gent",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          },{
            brand: "31971 Venissieux",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          }]}
          ,
      {
        brand: "CVA Conventional",
        target1: "<70",
        last1: "0",
        actual1: "0",
        trend1: "0",
        target2: "<50",
        last2: "0",
        actual2: "0",
        trend2: "0",
        target3: ">95",
        last3: "0",
        actual3: "0",
        trend3: "0",
        participants: [
          {
            brand: "4285 Macungie",
            target1: "<70",
            last1: "0",
            actual1: "0",
            trend1: "0",
            target2: "<50",
            last2: "0",
            actual2: "0",
            trend2: "0",
            target3: ">95",
            last3: "0",
            actual3: "0",
            trend3: "0"
          }
        ]
      }
    ];

    this.getNodeChildDetails = function getNodeChildDetails(rowItem) {
      if (rowItem.participants) {
        return {
          group: true,
          expanded: rowItem.group === "Group C",
         children: rowItem.participants,
          key: rowItem.group
        };
      } else {
        return null;
      }
    };
  }

  ngOnInit() {
  }

  onTextboxFilterChanged() {
    var value = (<HTMLInputElement>document.getElementById("filter-textbox")).value;
    this.gridApi.setQuickFilter(value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
   // this.gridColumnApi.setColumnsVisible(["target3", "last3", "actual3","trend3"], false);

    //params.api.sizeColumnsToFit();
  }

  hideDelivery(e){
    this.delivery = e.target.checked;
    this.gridColumnApi.setColumnsVisible(["target3", "last3", "actual3","trend3"], this.delivery);
  }
}

