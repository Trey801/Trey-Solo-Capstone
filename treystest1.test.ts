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

describe("search categorys", () => {
    test("can you search categorys", async () => {
        await treys.navigate()
        await treys.click(treys.category)
        await treys.click(treys.components)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.cameras)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.pti)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.mp3)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.laptop)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.desk)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.printer)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.mice)
        await treys.driver.sleep(500)
        await treys.click(treys.category)
        await treys.click(treys.fashion)        

        await fs.writeFile(`${__dirname}/mainpage.png`,
        await treys.driver.takeScreenshot(),"base64",
        (e) => {
            if (e) console.error(e);
            else console.log ('Searching site succesfull')
    })
})
})