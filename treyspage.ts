import {By, TargetLocator, until} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Treys extends BasePage{
    category : By = By.xpath('//*[@id="entry_217833"]/a/span')
    components : By = By.xpath('(//span[@class="title"])[1]')
    cameras : By = By.xpath('(//span[@class="title"])[2]')
    pti : By = By.xpath('(//span[@class="title"])[3]')
    software : By = By.xpath('(//span[@class="title"])[4]')
    mp3 : By = By.xpath('(//span[@class="title"])[5]')
    laptop : By = By.xpath('(//span[@class="title"])[6]')
    desk : By = By.xpath('(//span[@class="title"])[7]')
    printer : By = By.xpath('(//span[@class="title"])[8]')
    mice : By = By.xpath('(//span[@class="title"])[9]')
    fashion : By = By.xpath('(//span[@class="title"])[10]')
    myaccount : By = By.xpath('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div')
    continue : By = By.xpath('//*[@id="content"]/div/div[1]/div/div/a')
    name : By = By.xpath('//*[@id="input-firstname"]')
    lastName : By = By.xpath('//*[@id="input-lastname"]')
    email : By = By.xpath('//*[@id="input-email"]')
    phone : By = By.xpath('//*[@id="input-telephone"]')
    password : By = By.xpath('//*[@id="input-password"]')
    passwordCon : By = By.xpath('//*[@id="input-confirm"]')
    privacy : By = By.xpath('//*[@id="content"]/form/div/div/div/label')
    cont : By = By.xpath('//*[@id="content"]/form/div/div/input')
    searchBar: By = By.xpath(('(//input[@name="search"])[1]'))
    searchButton: By = By.xpath('//button[@type="submit"]')
    forgotPassword: By = By.xpath('//*[@id="column-right"]/div/a[3]')
    emaill: By = By.xpath('//input[@id="input-email"]')
    conti: By = By.xpath('//button[@class="btn btn-primary"]')
    confirmation: By = By.xpath('//*[@id="account-login"]')
    affill: By = By.xpath('//*[@id="content"]/div[3]/div/a')
    affillName: By = By.xpath('//input[@name="cheque"]')
    affillCheck: By = By.xpath('//input[@name="agree"]')
    affillContinue: By = By.xpath('//input[@class="btn btn-primary"]')
    affillConfirm: By = By.xpath('//*[@id="account-account"]/div[1]')

    
    constructor(){
        super({url:"https://ecommerce-playground.lambdatest.io/index.php?route=common/home"});
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getResults() {
        return await this.getText(this.confirmation);
    }
    


}