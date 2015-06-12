module.exports = {
    webDriverWait: function (browser, task, timeout) {
        var success = false;
        var elapsed = 0;
        while ((!success) && (elapsed < timeout)) {
            browser.pause(1000);
            elapsed += 1000;
            success = task();
        }
        return success;
    }
};