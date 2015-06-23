var config = require('../config/config.json');

module.exports = function () {

    this.When(/^I select "(.*)" from the "(.*)"$/, function (value, field, callback) {
        var xpath = "//*[text()='" + field + "']";

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .element('xpath', xpath, function (result) {
                this.elementIdAttribute(result.value.ELEMENT, 'for', function (result) {
                    xpath = '//*[@id="' + result.value + '"]';
                    this.waitForElementVisible(xpath, config.TimeOut, false)
                        .setValue(xpath, value);
                });
            });

        callback();
    })
}