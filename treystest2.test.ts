import { Driver } from 'selenium-webdriver/chrome'
import { tryParse } from 'selenium-webdriver/http'
import{Treys} from './treyspage'
const treys = new Treys
const fs = require('fs')

beforeEach(async () =>{
    await treys.navigate()
})

afterAll(async() =>{
    await treys.driver.quit()
})

describe("Create New Account and Affilliate Account", () => {
    test("can you create accounts", async () => {
        await treys.navigate()
        await treys.click(treys.myaccount)
        await treys.click(treys.continue)
        await treys.setInput(treys.name,"Cob")
        await treys.setInput(treys.lastName,"Smith")
        await treys.setInput(treys.email, "Cobsmith@gmail.com")
        await treys.setInput(treys.phone, "1231231234")
        await treys.setInput(treys.password, "Password")
        await treys.setInput(treys.passwordCon, "Password")
        await treys.driver.sleep(1000)
        await treys.click(treys.privacy)
        await treys.click(treys.cont)
        await treys.driver.sleep(1000)
        await treys.click(treys.myaccount)
        await treys.click(treys.affill)
        await treys.driver.sleep(500)
        await treys.setInput(treys.affillName, "Cob")
        await treys.click(treys.affillCheck)
        await treys.click(treys.affillContinue)
        await treys.driver.sleep(1000)
    })
})