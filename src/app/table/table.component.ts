import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Datum, NbaPlayersService, RootObject } from '../nba-players/nba-players.service';
//import { TableService } from './table.service';
//import { Datum } from '../nba-players/nba-players.service';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id','first_name','position', 'team', 'city', 'actions'];
  dataSource: any;
  constructor(private nbaService:NbaPlayersService,
    private router:Router) { }

  ngOnInit(): void {
    //I'll need to create an instance of the MatTableDataSource and pass it the data(t.e. the data array property t.e. data["data"]) that you're getting from your service
    this.nbaService.fetchPlayers().subscribe(
      (data:RootObject) => {
        this.dataSource = new MatTableDataSource<Datum>(data["data"]); //here I'm filling the dataSource instance/obj with the data array property t.e. data["data"] (that I pass as argumentg in the MatTableDataSource() constructor)
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectedRow(row: Datum) {
    this.router.navigate(['/table-list-view'], {queryParams: {id:row.id, first_name:row.first_name, position:row.position, team:row.team }});
    //this.tableService.item.next(row); //we can store our item-row in Subject observable and emit/send with next(row).then in the other component I can subscribe to this observable to can take the value row
    //localStorage.setItem('row', row); //or we can store our item-row in localStorage with setItem("key", "value").then in the other component with localStorage.getItem('key') I can get the row
  }
//////////////////-ostatokot od proekt-zadacata
// pravam servis
// ednostavna niza pravam
// so podatocni tipovi kako ovaa od prvata tabela
// bidejki ke ja polnam ovaa niza so items koi ke gi selectiram
// ke imam vo servisot add / remove item
// add metoda za dodavanje
// na item vo ovaa niza
// i remove za brisenje
// ovoj servis ke go dodadam kako provider
// vo app.module
// posle vo konstruktorot na ovaa prvata komponenta
// ke go injectiram toj servis
// i posle na select event
// na row_select
// ke si povikam service.Add(selectedRowModel);
// znaci otkako ke gi selectiram ovie.


}
