import { HomePage } from 'C:/Users/Ever/Documents/IT Rockstar/Cucumber/SearchSelenium/features/step/HomePage.js';

module.exports = function() {
  
  //Create Object
  const home = new HomePage("San Pedro");

  //Click Combo Box
  this.Then(/^we click Input "([^"]*)"$/, function (arg1) {
    // Write code here that turns the phrase above into concrete actions
    browser.waitUntil(function() {
      return browser.getAttribute("#takeover","style") === "display: none;";
    },10000);
    home.clickElement(arg1);
  });

  //Open Combo Box
  this.Then(/^we select "([^"]*)" from "([^"]*)"$/, function (arg1,arg2) {
    // Write code here that turns the phrase above into concrete actions
    home.searchByCity(arg1, arg2);
  });

  //Click Search
  this.Then(/^we click on "([^"]*)"$/, function (arg1) {
    // Write code here that turns the phrase above into concrete actions
    home.clickElement(arg1);
  });

  //Move Slide
  this.Then(/^we move slider "([^"]*)" from "([^"]*)" to "([^"]*)"$/, function (arg1, arg2, arg3) {
    // Write code here that turns the phrase above into concrete actions
    home.applyRange(arg2,arg3);
  });

  this.Then(/^we confirm range applied on "([^"]*)" from "([^"]*)" to "([^"]*)"$/, function (arg1,arg2,arg3) {
    // Write code here that turns the phrase above into concrete actions
    home.checkHour(arg1,arg2,arg3);
  });
}

class MoviePage {
  constructor () {

  }

  //Methods

  //Confirmar horario a home page
}