const{test,expect}=require('@playwright/test')

test.use({viewport:{width:1500,height:1000}})

test("Verify Login",async ({page})=> {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    


    await page.getByPlaceholder("Username").type("Admin",{delay:200})

    await page.locator("//input[@name='password']").type("admin123",{delay:300})

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveTitle("OrangeHRM")
    
    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)

    
})