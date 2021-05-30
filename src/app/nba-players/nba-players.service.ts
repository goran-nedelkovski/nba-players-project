import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Observable } from "rxjs";
//import { map } from 'rxjs/operators';

//generate TypeScript interfaces from JSON 
//  declare module namespace {
    export interface Team {
        id: number;
        abbreviation: string;
        city: string;
        conference: string;
        division: string;
        full_name: string;
        name: string;
    }

    export interface Datum {
        id: number;
        first_name: string;
        height_feet?: number;
        height_inches?: number;
        last_name: string;
        position: string;
        team: Team;
        weight_pounds?: number;
    }

    export interface Meta {
        total_pages: number;
        current_page: number;
        next_page: number;
        per_page: number;
        total_count: number;
    }

    export interface RootObject {
        data: Datum[];
        meta: Meta;
    }
//  }

//I will create Service file in nba-players folder for centralize logic of http requests etc..
@Injectable({providedIn: 'root'})  //add @Injectable() because we will inject http service into this Service
//I need to import fisrt HttpClientModule in app.module.ts
export class NbaPlayersService {
    constructor(private http:HttpClient) {}
//I will create this method for http.get() request to that api endpoint(url) and return this Observable.go to nba-players.component.ts
    fetchPlayers() {
        return this.http.get<RootObject>('https://www.balldontlie.io/api/v1/players')
    }
}
