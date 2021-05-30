import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
export interface Username {
      username: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//inject router:Router Service in the constructor
  constructor(private router:Router) { } 

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   'username': new FormControl(null, [Validators.required, Validators.minLength(3)])
    // })
  }

  onSubmit(form:NgForm) {
    console.log(form.value.username);
    //here in onSubmit call the Subject obs from the Service and send/next(form.value.username)
    //this.homeService.username.next(form.value.username);
    /////Submit a form data with passing a queryParams(dinamicaly base on form obj parameter) and accepts the value to another component/page (with queryParams)
    this.router.navigate(['/nba-players'], {queryParams: {username:form.value.username}}); //here in router.navigate() after /nba-players as 2ns arg I can pass my {queryParams:{username:dinamic value from form obj parameter t.e. form.value.username is the Value of the this property}}
  }
}
