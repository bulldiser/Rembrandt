﻿var assert = require('assert'),
    config = require('../config/config.json'),
    driver = require('../globals/driverextensions');

module.exports = function () {

    this.When(/^I click "(.*)"$/, function (text, callback) {
        var xpath = "//*[text()='" + text + "']"

        this.useXpath()
            .waitForElementVisible(xpath, config.TimeOut, false)
            .click(xpath);
    });

    this.When(/^I click "([^"]*)" from the "([^"]*)" in top menu$/, function (subMenu, topMenu) {
        var topMenuXpath = "//*[text()='" + topMenu + "']";
        var subMenuXpath = "//*[text()='" + topMenu + "']/ancestor::li/descendant::*[text()='" + subMenu + "']";

        this.useXpath()
            .waitForElementVisible(topMenuXpath, config.TimeOut)
            .click(topMenuXpath)
            .waitForElementVisible(subMenuXpath, config.TimeOut)
            .click(subMenuXpath);

	callback();
        
    });
}
