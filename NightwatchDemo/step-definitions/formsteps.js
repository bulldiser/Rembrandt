var config = require('../config/config.json'),
    driver = require('../globals/driverextensions');

module.exports = function () {

    this.When(/^I click "(.*)"$/, function (text) {
        var xpath = "//*[text()='" + text + "']"

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut)
            .click(xpath);
    })
}