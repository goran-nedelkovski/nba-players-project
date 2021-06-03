//import { Subject } from "rxjs";
import { Datum } from "../nba-players/nba-players.service";

export class TableListViewService {
    myTeam: Datum[] = [];
    //changedArray = new Subject<Datum[]>();
    // constructor() {}
//addItem() method for addinf item/row in the array with push(); and then return the new array
    addItem(row: Datum) {
        this.myTeam.push(row);
        return this.myTeam;
        //this.changedArray.next(this.myTeam);
    }
//removeItem() for deleteing item/row at the current index with splice(current index, number of deleted items(1))
    removeItem(index:number) {
        this.myTeam.splice(index, 1);
        return this.myTeam;
        //this.changedArray.next(this.myTeam);
        
    }
}