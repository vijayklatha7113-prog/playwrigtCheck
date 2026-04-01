const { test, expect } = require('@playwright/test');


let page
test.beforeEach(async ({browser})=>
{

    page= await browser.newPage()
 await page.goto("https://www.demoblaze.com/")
    //Login

    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("Testing@321")
    await page.locator("#loginpassword").fill("Testing@123")
    await page.getByText("Log in").nth(1).click()

})

test.afterEach(async()=>
{
     // Logout 

    await page.locator("#logout2").click()
})

test("Home Page Test",async()=>{

   
    // Home Page

   // await page.waitForLoadState("networkidle")

   await page.waitForLoadState("load");
   
   await expect(page.locator(".hrefch")).toHaveCount(9);

    
});


test("Add Product to Cart Page",async()=>{

   

    // Add Cart

    await page.getByText("Samsung galaxy s6").nth(0).click()
     await page.getByText("Add to cart").click()

     page.on("dialog", async dialog=>
        {
        expect(dialog.message()).toContain("Product added.")
        dialog.accept()
        })

      
        
     })



