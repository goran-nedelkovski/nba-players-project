import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Datum, NbaPlayersService, RootObject } from '../nba-players/nba-players.service';

@Component({
  selector: 'app-table-list-view',
  templateUrl: './table-list-view.component.html',
  styleUrls: ['./table-list-view.component.css']
})
export class TableListViewComponent implements OnInit {
  displayedColumns: string[] = ['id','first_name','position', 'team', 'city'];
  dataSource = new MatTableDataSource(); //intitialy set to empty table obj
  constructor(private nbaService:NbaPlayersService) { }
  
  ngOnInit(): void {
    // this.nbaService.fetchPlayers().subscribe(
    //   (data:RootObject) => {
    //     this.dataSource = new MatTableDataSource<Datum>(data["data"]); //here I'm filling the dataSource instance/obj with the data array property t.e. data["data"] (that I pass as argumentg in the MatTableDataSource() constructor)
    //   }
    // );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
