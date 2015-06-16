var config = require('../config/config.json');

module.exports = function () {

    this.Given(/^I visit the home page$/, function () {
        this.url(config.Url);
    })

    this.When(/^I click on the home button$/, function () {
        var xpath = "//*[contains(concat(' ', normalize-space(@class), ' '), ' navbar-brand ')]";

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut)
            .click(xpath);
    })
}