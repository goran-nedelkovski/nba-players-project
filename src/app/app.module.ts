import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableComponent } from './table/table.component';
import { MatInputModule } from '@angular/material/input';
import { TableListViewComponent } from './table-list-view/table-list-view.component';
import { TableListViewService } from './table-list-view/table-list-view.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  //declared and import components in app.module 
    NbaPlayersComponent, 
    PageNotFoundComponent, LoadingSpinnerComponent, TableComponent, TableListViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,    //import MatTableModule
    MatFormFieldModule ,  //import MatFormFoeldModule from @ang/material/form-field
    MatInputModule   //import MatInputModule from @ang/material/input
  ],
  providers: [TableListViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
