var config = require('../config/config.json');

module.exports = function () {

    this.Given(/^I visit the home page$/, function (callback) {
        this.url(config.Url);
        callback();
    })

    this.When(/^I click on the home button$/, function (callback) {
        var xpath = "//*[contains(concat(' ', normalize-space(@class), ' '), ' navbar-brand ')]";

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .click(xpath);

        callback();
    })
}