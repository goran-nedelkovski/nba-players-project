//425. Testing Dependencies: Components and Services
//1.(425)lets add this user.service.ts file in the user folder component
export class UserService {
//2.(425)here in User class I want to have user obj(create that user obj with some value), that obj will be retrieved from user component (go in user.comp.ts)
    user = {
        name: 'Max'
    }
}