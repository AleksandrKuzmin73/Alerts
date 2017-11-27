/**
 * Created by Aleksandr Kuzmin on 27.11.2017.
 */
var alertsForm = function() {
    var url = 'http://way2automation.com/way2auto_jquery/alert.php',
        EC = protractor.ExpectedConditions,
        logo = element (by.xpath('//img[@src="images/logo.png"]')),
        alertFormButton = element (by.xpath('//img[@src="images/simple_alert.jpg"]')),
        demoform = element (by.id('demo')),
        buttonSubMenu = element (by.xpath('//button[@onclick="myFunction()"]')),
        buttonInputAlert = element (by.xpath('//a[@href="#example-1-tab-2"]')),
        buttonLogIn = element (by.xpath('//a[text()="Signin"]')),
        loginForm = element (by.xpath('//div[@id="login"]//input[@name="username"]')),
        passForm = element (by.xpath('//div[@id="login"]//input[@name="password"]')),
        buttonSubmit = element (by.xpath('//div[@id="login"]//input[@type="submit"]'));


    this.getSite = function () {
        browser.driver.manage().window().maximize();
        browser.get(url);
    };

    this.auth = function () {
        buttonLogIn.click();
        loginForm.sendKeys('Egoist73');
        passForm.sendKeys('Alex1992');
        buttonSubmit.click();
        browser.wait(EC.visibilityOf(alertFormButton), 15000, 'Элемент подтверждающий авторизацию на страницу не найден :(');
        alertFormButton.click();
        browser.wait(EC.visibilityOf(buttonInputAlert), 15000, 'Элемент подтверждающий переход на страницу не найден :(');
    };

    this.useAlert = function () {
        buttonInputAlert.click();
        browser.switchTo().frame(1);
        browser.wait(EC.visibilityOf(buttonSubMenu), 5000, 'Элемент подтверждающий переход на страницу не найден');
        buttonSubMenu.click();
        browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(");
        browser.switchTo().alert().sendKeys('кастомный текст');
        browser.switchTo().alert().accept();
        expect(demoform.getText()).toBe('Hello кастомный текст! How are you today?');
    };

};
module.exports = alertsForm;