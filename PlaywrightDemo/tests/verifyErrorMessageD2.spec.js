const{test,expect}=require('@playwright/test')

test("Verify Invalid Erro Message",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin111")

    await page.getByPlaceholder("Password").fill("admin123")

        await page.locator("//button[@type='submit']").click()

      const errormsg= await page.locator("//p[contains(@class,'alert-content')]").textContent()


     console.log("Error Message is "+errormsg);
     

        await expect(page.getByText("Invalid credentials")).toBeVisible()

        await expect(errormsg.includes("Invalid")).toBeTruthy()

        await expect(errormsg=="Invalid credentials").toBeTruthy()
        



})