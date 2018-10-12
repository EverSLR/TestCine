import { HomePage } from 'C:/Users/Ever/Documents/IT Rockstar/Cucumber/SearchSelenium/features/step/HomePage.js';

module.exports = function() {

    //Create Object
    const home = new HomePage("San Pedro");

    this.Given(/^we are in Cinepolis$/, function () {
        // Write code here that turns the phrase above into concrete actions
        home.goUrl('http://www.cinepolis.com/');
        home.clickElement("#takeover-close > img");
      });
}