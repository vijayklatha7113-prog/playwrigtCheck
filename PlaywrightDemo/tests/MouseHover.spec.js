const{test,expect}=require('@playwright/test')

test("Valid Login Mouse", async ({page})=>
{
    await page.goto("https://www.way2automation.com/perform-hover-operation-in-playwright/")

        await page.getByText("All Courses").nth(0).hover({force:true})

        const devops =await page.getByText("Lifetime Membership").nth(0)

       await devops.hover()
      await  devops.click()
        await page.waitForTimeout(5000)
       

     
})