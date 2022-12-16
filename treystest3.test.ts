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

describe("search categorys", () => {
    test("can you search categorys", async () => {
        await treys.navigate()
        await treys.click(treys.searchBar)
        await treys.setInput(treys.searchBar,"Ipod")
        await treys.click(treys.searchButton)
        await treys.driver.sleep(2000)
        await treys.navigate()
        await treys.click(treys.searchBar)
        await treys.setInput(treys.searchBar,"Canon")
        await treys.click(treys.searchButton)
        await treys.driver.sleep(2000)
        await treys.navigate()
        await treys.click(treys.searchBar)
        await treys.setInput(treys.searchBar,"Apple")
        await treys.click(treys.searchButton)
        await treys.driver.sleep(2000)
    })
})


