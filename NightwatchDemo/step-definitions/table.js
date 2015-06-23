var config = require('../config/config.json'),
    driver = require('../globals/driverextensions');

module.exports = function () {

    this.Then(/^the table "(.*)" has no rows$/, function (table, callback) {
        var xpath = '//*[@id="tblStatus"]';

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .elements("xpath", xpath + '/*[descendant::tr]', function (results) {
                driver.webDriverWait(this, function () {
                    return results.value.length == 1;
                }, config.TimeOut);
                this.verify.equal(results.value.length, 1);
            });

        callback();
    })

    this.Then(/^the table "(.*)" has more than 1 row$/, function (table, callback) {
        var xpath = '//*[@id="tblStatus"]';

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .elements("xpath", xpath + '/*[descendant::tr]', function (results) {
                driver.webDriverWait(this, function () {
                    return results.value.length > 1;
                }, config.TimeOut);
                this.verify.ok(results.value.length > 1);
            });

        callback();
    })
}