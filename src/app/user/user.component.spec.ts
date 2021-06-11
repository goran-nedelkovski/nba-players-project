import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
//5.(424)lets comment this non-angular code and lets make our own code for testing
  //5.first I wanna declare the Module again. So I will use beforEach(receive a Callback ES6 anonimus function)
    beforeEach(() => {  
      TestBed.configureTestingModule({ //5.TestBed is our object for testing, that give us access to all test utilities like access to configureTestModule
        declarations: [UserComponent]  //5.because this is the component that I wanna test
      }) //5.if you not use cli or any webpack base set up, then we need .compileComponents() (but I used cli and webpack, so I dont need this function)
    })
//6.(424)lets create the test blocks (tests)
//6.check with it() if the app is created, and if is it true, then call that Callback ES6 fucntion as second arg
  it('shoule create the app', () => {
//6.create a fixture again
    let fixture = TestBed.createComponent(UserComponent) //6.now we are creating this UserComponent in the Testing Environment
    let app = fixture.debugElement.componentInstance   //6.get my app from this fixture.debugElement.componentInstance
    expect(app).toBeTruthy()  //6.expect(to receive the app).toBeTruthy()  //to be exinsting 
  })
//5.(425)lets create a test for the service (for the user.name from the service)
  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent) 
    let app = fixture.debugElement.componentInstance  
    //5'(425)so how can we inject our user Service in the component here in our Test Environment?->by fixture.debudEl.injector.get(UserService)//to getting access to the injector/construcor(to get() the instance of user Service that is injected there) and store this in userSerice variable (import the service at the top)
    let userService = fixture.debugElement.injector.get(UserService);
    //7.(425)we need to run change detection //to update our property (to detect that change)
    fixture.detectChanges();
    //6.(425)since we inject the User Service in our Test envtironment, then expect(to receive userService.user.name property 'Max') to be Equal to (app.user.name property of the component)
    expect(userService.user.name).toEqual(app.user.name); //user.name must be the same/equeal because in the component in ngOnInit also we asign userService.use.name into user property
  })
  //8.(425)lets create a new test for displaying the user.name in the template
  it('should display the user name if the user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    //11.(425)so here instead of injecting the Service, I will set app.isLoggedIn = true (so the user will be loggedin now)
    app.isLoggedIn = true;
    fixture.detectChanges();
    //9.(425) lets acces to my template (.nativeElement is my template)
    let compiled = fixture.debugElement.nativeElement;
//10.(425)expect(to receive compiled template element/obj.querySelectir('p').textContent.toContain('User is app.user.name')) //but this is only if the user is logged in
    expect(compiled.querySelector('p').textContent).toContain(app.user.name); //user.name must be the same/equeal because in the component in ngOnInit also we asign userService.use.name into user property
  });
  it('shouldnt display the user name if the user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    //so here instead of injecting the Service, I will set app.isLoggedIn = true (so the user will be loggedin now
    fixture.detectChanges();
    //9.(425) lets acces to my template (.nativeElement is my template)
    let compiled = fixture.debugElement.nativeElement;
//10.(425)expect(to receive compiled template element/obj.querySelectir('p').textContent.toContain('User is app.user.name')) //but this is only if the user is logged in
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name); //user.name must be the same/equeal because in the component in ngOnInit also we asign userService.use.name into user property
  }) 
  //

  // let component: UserComponent;
  // let fixture: ComponentFixture<UserComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ UserComponent ]
  //   })
  //   .compileComponents();
  });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
