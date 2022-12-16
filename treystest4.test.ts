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

describe("change password", () => {
    test("can you change password", async () => {
        await treys.navigate()
        await treys.click(treys.myaccount)
        await treys.click(treys.forgotPassword)
        await treys.click(treys.emaill)
        await treys.setInput(treys.emaill,"bobsmith@gmail.com")
        await treys.click(treys.conti)
        let results = await treys.getResults();
        expect(results).toContain("An email with a confirmation link has been sent your email address.");

        await fs.writeFile (`${__dirname}/test2.txt`, results,
        async (e) => {
            if (e) console.error(e);
            else console.log ('Password Update');
        });
        await treys.driver.sleep(2000)

    })
})