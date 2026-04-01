const{test,expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../testDataLogin.json")))


// Simple Data form JSON File
/*
test("Login with JSON Data",async ({page})=> {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    


    await page.getByPlaceholder("Enter Email").fill(testdata.username)

  //await page.pause()    
   await page.waitForTimeout(3000)
    await page.getByPlaceholder("Enter Password").fill(testdata.password)
 
    await page.waitForTimeout(3000)
   // await page.pause()

   
})
*/

test.describe("Data Drivern  Login Test", function()


{

    for(const data of testdata)
    {
        test.describe(`Login with User ${data.id}`, function()
    {

        test("Login with JSON Data",async ({page})=> {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

     await page.getByPlaceholder("Enter Email").fill(data.username)

   await page.waitForTimeout(3000)
    await page.getByPlaceholder("Enter Password").fill(data.password)
 
    await page.waitForTimeout(3000)
        })
    
    })
    }
})
