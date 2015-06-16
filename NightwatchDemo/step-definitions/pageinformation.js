var assert = require('assert'),
    driver = require('../globals/driverextensions');

module.exports = function () {

    this.Then(/^I should see the page titled "(.*)"$/, function (title) {
        this.perform(function (client, done) {
            driver.webDriverWait(client, function () {
                return this.title == title;
            }, 5000);
            done();
        }).assert.title(title);
    })
}