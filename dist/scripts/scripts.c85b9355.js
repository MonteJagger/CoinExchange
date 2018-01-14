"use strict";angular.module("coinTradingApp",[]),angular.module("coinTradingApp").controller("coinExchange",function(){this.title="Cryptocurrency Exchange",this.currentCoin=0,this.exchangeCoin=0,this.equivPrice=-1,this.limitOrder=0,this.equivOrder=0,this.calcEquivPrice=function(){this.equivPrice=parseFloat(this.currentCoin)/parseFloat(this.exchangeCoin)},this.calcEquivOrder=function(){this.equivOrder=this.equivPrice*this.limitOrder/parseFloat(this.currentCoin)}}),angular.module("coinTradingApp").run(["$templateCache",function(a){a.put("views/main.html",'<h1 class="header">{{coins.title}}</h1> <div class="container"> <div class="row"> <div class="col-md-5"> <span>Current price of coins to buy/sell: </span> </div> <div class="col-md-4"> $<input type="text" ng-model="coins.currentCoin" ng-change="coins.calcEquivPrice()" onclick="this.setSelectionRange(0, this.value.length)"> </div> </div> <div class="row"> <div class="col-md-5"> <span>Current price of coins to exchange to: </span> </div> <div class="col-md-4"> $<input type="text" ng-model="coins.exchangeCoin" ng-change="coins.calcEquivPrice()" onclick="this.setSelectionRange(0, this.value.length)"> </div> </div> <div class="row"> <div class="col-md-5"> <span>Equivalent Price: </span> </div> <div class="col-md-4" ng-if="coins.equivPrice >= 0"> <span>${{coins.equivPrice}} is equal to ${{coins.currentCoin}}</span> </div> </div> <div class="row"> <p></p> </div> <div class="row"> <div class="col-md-5"> <span>Price to Buy/Sell: </span> </div> <div class="col-md-4"> $<input type="text" ng-model="coins.limitOrder" ng-change="coins.calcEquivOrder()" onclick="this.setSelectionRange(0, this.value.length)"> </div> </div> <div class="row"> <div class="col-md-5"> <span>Equivalent Order: </span> </div> <div class="col-md-4" ng-if="coins.equivOrder > 0"> <span>{{coins.equivOrder}}</span> </div> </div> </div>')}]);