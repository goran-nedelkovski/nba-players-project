//3.(428)lets create test for our reverse Pipe (we dont need angular testg utility like TestBed or async here)
import { ReversePipe } from './reverse.pipe';

describe('UserComponent', () => {
  it('shoule create the app', () => {
//3'(428)lets create the reverse Pipe obj/instance for our Test environment(create a new instance/obj of our ReversePipe class)
    let reversePipe = new ReversePipe();  //creating here a new obj/instance of my ReversePipe class //this is Isolated (independent)
    //4.(428)expect(reversePipe obj.transform('pass some string value hello').to be Equal to ('olleh'//inverse string))
    expect(reversePipe.transform('hello')).toEqual('olleh') 
  })

})
