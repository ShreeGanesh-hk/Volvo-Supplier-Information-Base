import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private columnDefs1;
  private getNodeChildDetails;

  constructor() {

    this.columnDefs = [
      {
        headerName: "Brand/Consignee",
        children: [
          {
            headerName: "",
            field: "brand",
            cellRenderer: "agGroupCellRenderer",
            width: 300
          }
        ]
      },
      {
        headerName: "PPM",
        children: [
          {
            headerName: "Rec",
            field: "rec",
            width: 100
          },
          {
            headerName: "Reject",
            field: "reject",
            width: 100
          },
          {
            headerName: "Val",
            field: "val1",
            width: 100
          }
        ]
      },
      {
        headerName: "QPM",
        children: [
          {
            headerName: "PPM",
            field: "ppm",
            width: 100
          },
          {
            headerName: "IR",
            field: "ir",
            width: 100
          },
          {
            headerName: "NC",
            field: "nc",
            width: 100
          },
          {
            headerName: "Spend",
            field: "spend",
            width: 100
          },
          {
            headerName: "Val",
            field: "val2",
            width: 100
          }
        ]
      },
      {
        headerName: "Delivery Precision(%)",
        children: [
          {
            headerName: "Del",
            field: "del1",
            width: 100
          },
          {
            headerName: "Corr",
            field: "corr1",
            width: 100
          },
          {
            headerName: "%",
            field: "per1",
            width: 100
          }
        ]
      },
      {
        headerName: "Service Level",
        children: [
          {
            headerName: "Del",
            field: "del2",
            width: 100
          },
          {
            headerName: "Corr",
            field: "corr2",
            width: 100
          },
          {
            headerName: "%",
            field: "per2",
            width: 100
          }
        ]
      },
      {
        headerName: "Spend",
        children: [
          {
            headerName: "",
            field: "tot",
            width: 100
          }
        ]
      }
    ];

    this.columnDefs1 = [
      {
        headerName: "",
        field: "brand",
        cellRenderer: "agGroupCellRenderer",
        width: 300
      },
      {
        headerName: "Rec",
        field: "rec",
        width: 100
      },
      {
        headerName: "Reject",
        field: "reject",
        width: 100
      },
      {
       headerName: "Val",
        field: "val1",
        width: 100
      },
      {
        headerName: "PPM",
        field: "ppm",
        width: 100
      },
      {
        headerName: "IR",
        field: "ir",
        width: 100
      },
      {
        headerName: "NC",
        field: "nc",
        width: 100
      },
      {
        headerName: "Spend",
        field: "spend",
        width: 100
      },
      {
        headerName: "Val",
        field: "val2",
        width: 100
      },
      {
       headerName: "Del",
        field: "del1",
        width: 100
      },
      {
        headerName: "Corr",
        field: "corr1",
        width: 100
      },
      {
        headerName: "%",
        field: "per1",
        width: 100
      },
      {
        headerName: "Del",
        field: "del2",
        width: 100
      },
      {
        headerName: "Corr",
        field: "corr2",
        width: 100
      },
      {
        headerName: "%",
        field: "per2",
        width: 100
      },
      {
        headerName: "",
        field: "tot",
        width: 100
      }

    ];
    this.rowData = [
      {
        brand:"Supplier Total",
        rec:"98",
        reject:"48",
        val1:"493",
        ppm:"493",
        ir:"7",
        nc:"48",
        spend:"391",
        val2:"50",
        del1:"1001",
        corr1:"928",
        per1:"92.7",
        del2:"0",
        corr2:"0",
        per2:"0.0",
        tot:"10000",
        participants: null
      },
      {
        brand:"CVA COE",
        rec:"98",
        reject:"48",
        val1:"493",
        ppm:"493",
        ir:"7",
        nc:"48",
        spend:"391",
        val2:"50",
        del1:"1001",
        corr1:"928",
        per1:"92.7",
        del2:"0",
        corr2:"0",
        per2:"0.0",
        tot:"10000",
        participants: [
          {
            brand:"1001, Goteborg",
            rec:"98",
            reject:"48",
            val1:"493",
            ppm:"493",
            ir:"7",
            nc:"48",
            spend:"391",
            val2:"50",
            del1:"1001",
            corr1:"928",
            per1:"92.7",
            del2:"0",
            corr2:"0",
            per2:"0.0",
            tot:"10000",
            participants: [
              {
                brand:"2018-07",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-06",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-05",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              }
            ]
          },
          {
            brand:"2800, Curitiba",
            rec:"98",
            reject:"48",
            val1:"493",
            ppm:"493",
            ir:"7",
            nc:"48",
            spend:"391",
            val2:"50",
            del1:"1001",
            corr1:"928",
            per1:"92.7",
            del2:"0",
            corr2:"0",
            per2:"0.0",
            tot:"10000",
            participants: [
              {
                brand:"2018-07",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-06",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-05",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              }
            ]
          },
          {
            brand:"4645, Gent",
            rec:"98",
            reject:"48",
            val1:"493",
            ppm:"493",
            ir:"7",
            nc:"48",
            spend:"391",
            val2:"50",
            del1:"1001",
           corr1:"928",
            per1:"92.7",
            del2:"0",
            corr2:"0",
            per2:"0.0",
            tot:"10000",
            participants: [
              {
                brand:"2018-07",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-06",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              },
              {
                brand:"2018-05",
                rec:"98",
                reject:"48",
                val1:"493",
                ppm:"493",
                ir:"7",
                nc:"48",
                spend:"391",
                val2:"50",
                del1:"1001",
                corr1:"928",
                per1:"92.7",
                del2:"0",
                corr2:"0",
                per2:"0.0",
                tot:"10000",
              }
            ]
          }
        ]
      },
{
  brand:"CVA Conventional",
  rec:"98",
  reject:"48",
  val1:"493",
  ppm:"493",
  ir:"7",
  nc:"48",
  spend:"391",
  val2:"50",
  del1:"1001",
  corr1:"928",
  per1:"92.7",
  del2:"0",
  corr2:"0",
  per2:"0.0",
  tot:"10000",
  participants: [
    {
      brand:"4285, Macungie",
      rec:"98",
      reject:"48",
      val1:"493",
      ppm:"493",
      ir:"7",
      nc:"48",
      spend:"391",
      val2:"50",
      del1:"1001",
      corr1:"928",
      per1:"92.7",
      del2:"0",
      corr2:"0",
      per2:"0.0",
      tot:"10000",
      participants: [
        {
          brand:"2018-06",
          rec:"98",
          reject:"48",
          val1:"493",
          ppm:"493",
          ir:"7",
          nc:"48",
          spend:"391",
          val2:"50",
          del1:"1001",
          corr1:"928",
          per1:"92.7",
          del2:"0",
          corr2:"0",
          per2:"0.0",
          tot:"10000",
        },
        {
          brand:"2018-05",
          rec:"98",
          reject:"48",
          val1:"493",
          ppm:"493",
          ir:"7",
          nc:"48",
          spend:"391",
          val2:"50",
          del1:"1001",
          corr1:"928",
          per1:"92.7",
          del2:"0",
          corr2:"0",
          per2:"0.0",
          tot:"10000",
        }
      ]
    }
  ]}

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
    var value = (<HTMLInputElement>document.getElementById("filter-textbox1")).value;
    this.gridApi.setQuickFilter(value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

   //params.api.sizeColumnsToFit();
  }
}


