import UserService from '../user/user.service';

function userServiceFactory(i: any) {
  return i.get('UserService');
}

export const userServiceProvider = {
  provide: UserService,
  useFactory: userServiceFactory,
  deps: ['$injector'],
};

