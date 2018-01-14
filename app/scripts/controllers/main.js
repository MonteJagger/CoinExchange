'use strict';

/**
 * @ngdoc function
 * @name coinTradingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinTradingApp
 */
angular.module('coinTradingApp')
  .controller('coinExchange', function () {
    this.title = 'Cryptocurrency Exchange';
    this.currentCoin = 0;
    this.exchangeCoin = 0;
    this.equivPrice = -1;
    this.limitOrder = 0;
    this.equivOrder = 0;
    this.percentage = 0;
    this.calcEquivPrice = function() {
      this.equivPrice = parseFloat(this.currentCoin)/parseFloat(this.exchangeCoin);
    };
    this.calcEquivOrder = function() {
      this.equivOrder = this.equivPrice*parseFloat(this.limitOrder)/parseFloat(this.currentCoin);
    };
    this.calcPerc = function() {
      const orig = parseFloat(this.currentCoin);
      const newNum = parseFloat(this.limitOrder);
      this.percentage = ((newNum-orig)/orig)*100;
      this.percentage = this.percentage.toFixed(2);
    };
  });
