var assert = require('assert'),
    driver = require('../globals/driverextensions'),
    config = require('../config/config.json');

module.exports = function () {

    this.Then(/^I should see the page titled "(.*)"$/, function (title) {
        this.perform(function (client, done) {
            driver.webDriverWait(client, function () {
                return this.title == title;
            }, config.TimeOut);
            done();
        }).assert.title(title);
    })

    this.Then(/^the visualization should not be visible$/, function () {
        
        this.useCss()
            .assert.elementNotPresent(".workflow");
  })

    this.Then(/^the visualization should be visible$/, function () {
        var xpath = "//*[contains(concat(' ', normalize-space(@class), ' '), ' workflow ')]";
        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut)
            .useCss()
            .assert.elementPresent(".workflow");
    })
}