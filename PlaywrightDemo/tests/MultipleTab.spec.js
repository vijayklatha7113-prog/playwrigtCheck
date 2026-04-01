const{test,expect}=require('@playwright/test')

test("Multiple Tab", async ({browser})=>
{

    const context= await browser.newContext()
     
   const page= await context.newPage();

 await page.goto("https://freelance-learn-automation.vercel.app/login")


const[newPage]= await Promise.all
(
    [
         context.waitForEvent("page"),

      await  page.locator("(//a[contains(@href,'facebook')])[1]").click()

        
    ]
);

  await newPage.locator("input[type='email']").fill("Vijay.com");

  await page.waitForTimeout(3000)

  await newPage.close()

  await page.locator("#email1").fill("Testing")


});
