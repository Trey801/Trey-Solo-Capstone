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
    })
}
)