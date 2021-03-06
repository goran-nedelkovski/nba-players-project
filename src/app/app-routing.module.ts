import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableListViewComponent } from './table-list-view/table-list-view.component';
//create the routes in app-routing-module 
const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nba-players',
    component: NbaPlayersComponent
  },
  {
    path: 'table-list-view',
    component: TableListViewComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
