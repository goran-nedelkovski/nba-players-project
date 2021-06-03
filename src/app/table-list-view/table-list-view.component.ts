import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Datum, NbaPlayersService, RootObject } from '../nba-players/nba-players.service';
//import { TableService } from '../table/table.service';
import {TableListViewService} from './table-list-view.service';

@Component({
  selector: 'app-table-list-view',
  templateUrl: './table-list-view.component.html',
  styleUrls: ['./table-list-view.component.css']
})
export class TableListViewComponent implements OnInit {
  item: Datum | any;
  myTeam: Datum[] = [];
  displayedColumns: string[] = ['id','first_name','position', 'team', 'actions'];
  dataSource:any; //intitialy set to empty table obj
  constructor(private nbaService:NbaPlayersService,
    private tableListViewService:TableListViewService,
    private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe( //subscribe to that obs to can get the datavalue from the obs
        data => { //we expect to get the data (row object) of that queryParams obs
        this.item = data; //store that recieve data in this.item property
        this.myTeam = this.tableListViewService.addItem(this.item); //fill the empty array this.myTeam with this item object, by calling additem(this.item) from the Service (where we have myItem.push(row))
        this.dataSource = new MatTableDataSource(this.myTeam); //when we have this new (filled) array, we can fill the dataSource obj/instance with this new array myTeam (t.e. fill the table with this new array)
      }
    );
    // this.tableService.item.subscribe(
    //   row => {
    //     this.myTeam.push(row);
    //     this.dataSource = new MatTableDataSource(this.myTeam);
    //   }
    // );
    // this.nbaService.fetchPlayers().subscribe(
    //   (data:RootObject) => {
    //     this.dataSource = new MatTableDataSource<Datum>(data["data"]); //here I'm filling the dataSource instance/obj with the data array property t.e. data["data"] (that I pass as argumentg in the MatTableDataSource() constructor)
    //   }
    // );
  }
  onDeletedRow(index:number) { //expect to receive the current index:number
    this.myTeam = this.tableListViewService.removeItem(index); //call removeItem(index) from the Service and store this new returned array in this.myTeam array property
    this.dataSource = new MatTableDataSource(this.myTeam); //fill the dataSource obj/instance with that new array myTeam (t.e. fill the table with that new myTeam array)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
