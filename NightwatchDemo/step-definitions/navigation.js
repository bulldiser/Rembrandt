﻿var config = require('../config/config.json');

module.exports = function () {

    this.Given(/^I visit the home page$/, function () {
        this.url(config.Url);
    })
}