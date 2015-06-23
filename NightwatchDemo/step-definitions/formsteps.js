var config = require('../config/config.json');

module.exports = function () {

    this.When(/^I click "(.*)"$/, function (text, callback) {
        var xpath = "//*[text()='" + text + "']"

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .click(xpath);

        callback();
    })
}