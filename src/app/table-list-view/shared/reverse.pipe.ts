//////////////428. Isolated vs Non-Isolated Tests
//that previuos test were non-isolated because they depend on the angular app.
//but this reverse Pipe test is Isolated, because it dont depend of the angular app.(The Pipe receive a transform() function that receive as parameter/argument some string, then transfom that string and return us the string.So, we no need to mess angular app here, but this pipe should be independent test)

import { Pipe } from "@angular/core";

//1.(428)lest create the reverse pipe with export class ReversePipe.then to be Pipe(and not just a class), I must add @Pipe({name: 'reverse'}) decorator (must be imported from @ang/core)
@Pipe({
    name: 'reverse'  //name of the Pipe will be 'reverse'
})
export class ReversePipe {
//2.(428) the Pipe must have transform(that receive as inpit value: string) and //return value:string.split('by space').reverse//reverse this array-string.join("by spaces") (go to reverse.pipe.spec.ts)
    transform(value:string) {
        return value.split("").reverse().join("");  //return value:string.split('by space').reverse//reverse this array-string.join("by spaces")
    }

}