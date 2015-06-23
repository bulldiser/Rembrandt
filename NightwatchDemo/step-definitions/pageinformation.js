var driver = require('../globals/driverextensions'),
    config = require('../config/config.json');

module.exports = function () {

    this.Then(/^I should see the page titled "(.*)"$/, function (title, callback) {
        this.perform(function (client, done) {
            driver.webDriverWait(client, function () {
                return this.title == title;
            }, config.TimeOut);
            done();
        }).verify.title(title);

        callback();
    })

    this.Then(/^the visualization should be visible$/, function (callback) {
        this.useXpath()
            .verify.visible("//*[contains(concat(' ', normalize-space(@class), ' '), ' workflow ')]");

        callback();
    })

    this.Then(/^the visualization should not be visible$/, function (callback) {
        this.useXpath()
            .verify.elementNotPresent("//*[contains(concat(' ', normalize-space(@class), ' '), ' workflow ')]");

        callback();
    })
}