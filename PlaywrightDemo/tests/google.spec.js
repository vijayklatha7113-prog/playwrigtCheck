const { test, expect } = require('@playwright/test');



test("Verify the Application Title",async({page})=>{

   await  page.goto("https://www.google.com/")

    const url= await page.title()
    console.log("Title is "+url);
    
    await expect(page).toHaveTitle("Google")
       // await expect(page).toHaveTitle("Yahoo")


})