'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('coinTradingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('coinExchange', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.title.length).toBe(23);
  });
});
