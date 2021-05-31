//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbaPlayersService, RootObject, Datum } from './nba-players.service';
//import { Subscription } from 'rxjs';
//import { NbaPlayersService } from './nba-players.service';
@Component({
  selector: 'app-nba-players',
  templateUrl: './nba-players.component.html',
  styleUrls: ['./nba-players.component.css']
})

export class NbaPlayersComponent implements OnInit {
  // resSub:Subscription;
  username:any;
  players: Datum[] = [];  //init to empty array
  isLoading = false;
//inject the NbaPlayersService in the constructor()
  constructor(private nbaService:NbaPlayersService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //I created loading-spinner component and paste html-css code in there (from pure css loading spinner)
    this.isLoading = true; //isLoading set/overwrite to true here when we loading/fetching the data 
    console.log(this.route.snapshot.queryParams['username']);
    //here in ngOnInit I can subscibe() to queryParams Obs to take that parameter/value of username
    this.route.queryParams.subscribe(
      (queryParams:Params) => {
        this.username = queryParams['username'];
      }
    );
    //here in this component (because this page/comp is interested about the response), I can subscribe() to that Observable to can take the data-value of the Observable
    this.nbaService.fetchPlayers().subscribe(
      (data:RootObject) => {
        this.players = data["data"];  //data['property data of that data Root object']//in the TypeScript the access to that data property is with [] (not with .)
        this.isLoading = false; //set back to false when we get the data
      }
    );
    //here I will subscribe to my username Subject obs to take the value username
    // this.homeService.username.subscribe(
    //   username => {
    //     this.username = username;
    //     console.log(this.username);
    //   }
    // );
  }

  onMyTeam() {
      this.router.navigate(['/table-list-view']);
  }
  // ngOnDestroy() {
  //   this.resSub.unsubscribe();
  // }

}
