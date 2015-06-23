var assert = require('assert'),
    driver = require('../globals/driverextensions'),
    config = require('../config/config.json');

module.exports = function () {

    this.Then(/^the table "([^"]*)" has no rows$/, function (tableName) {
        var xpath = "//*[contains(concat(' ', normalize-space(@id), ' '), 'tblStatus')]";
        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut)
            .useCss()
            .assert.elementPresent("#tblStatus")
            .elements('css selector', 'table#tblStatus tr', function (result) {
                this.assert.ok(result.value.length = 1, 'row count assert');
            })
    });

    this.Then(/^the table "([^"]*)" has more than 1 row$/, function (tableName) {
        var xpath = "//*[contains(concat(' ', normalize-space(@id), ' '), 'tblStatus')]";
        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut)
            .useCss()
            .assert.elementPresent("#tblStatus")
            .elements('css selector', 'table#tblStatus tr', function (result) {
                this.waitForElementVisible('td', config.TimeOut)
                  this.assert.ok(result.value.length > 1, 'row count assert');
            })
    });
}