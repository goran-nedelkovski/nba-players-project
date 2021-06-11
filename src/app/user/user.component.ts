import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //4.(425)we need to provide our User Service ////with provide the service here, all the childs components of this user comp, will use this same service instance (go to user.spec.ts)
  providers: [UserService] //with provide the service here, all the childs components of this user comp, will use this same service instance 
})
//////////////////424. Adding a Component and some fitting Tests
//1.(424) creat this user component with  ng g c user (go to template)
export class UserComponent implements OnInit {
//2.(424)add user obj with its property name like this: user: {name:string};
  user: { name: string; } | undefined;
  isLoggedIn = false; //3(424).set this property initialy to false
  //3.(425)I need to inject our user Service here in the constructor
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //3.(425)here assign the user obj value from the Service to our user obj property
    this.user = this.userService.user;
  }

}
