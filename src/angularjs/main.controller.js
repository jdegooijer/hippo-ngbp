export default class MainCtrl {
  constructor(MainService) {
    'ngInject';

    this.message = `${MainService.getMessage()} again!`;
  }
}
