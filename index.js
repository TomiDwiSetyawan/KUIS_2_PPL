const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require('assert')

async function orangehrm() {
    try {
        //buka browser
        let driver = await new Builder().forBrowser("firefox").build();
        // buka url 
        await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log");
        // await driver.findElement(By.linkText("3. Add a User")).click();
        await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
        await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
        await driver.findElement(By.name("Submit")).click();
        //assert
        const text = await driver.findElement(By.xpath("//li")).getText()
        assert.equal(text, "Welcome Admin", "Test Fail")
        console.log("SUCCESS")
        console.log(text);
    } catch{
        console.log("Fail")
    }
}

orangehrm();
