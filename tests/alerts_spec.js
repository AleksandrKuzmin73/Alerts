describe ("Test Alerts", function(){
    var common = require('../config/common.js'),
        alertsForm = new common.alertsForm();
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        alertsForm.getSite();
    });

    // 1.Создание скрина;
    it("Alerts", function () {
        alertsForm.auth();
        alertsForm.useAlert();
    });

});