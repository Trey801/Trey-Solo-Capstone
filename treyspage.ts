import {By, until} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Treys extends BasePage{
    category : By = By.xpath('//*[@id="entry_217833"]/a/span/svg/use')
    components : By = By.xpath('//*[@id="widget-navbar-217841"]/ul/li[1]/a')

    constructor(){
        super({url:"https://ecommerce-playground.lambdatest.io/index.php?route=common/home"});
    }
}