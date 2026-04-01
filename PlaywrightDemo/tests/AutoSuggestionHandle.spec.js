const{test,expect}=require('@playwright/test')

test("Keyboard Event", async ({page})=>
{

    await page.goto("https://www.google.com/")

   const search= await page.getByTitle("Search")

   search.fill("Testing")
    
   await page.waitForSelector("//li[@role='presentation']")

   await page.keyboard.press("ArrowDown")

      await page.keyboard.press("ArrowDown")

         await page.keyboard.press("Enter")


})





test("Verify Application title using Loop", async ({ page }) => {

    await page.goto("https://www.google.com/")

    const search = page.getByTitle("Search")
    await search.fill("Testing")

    const elements = page.locator("//ul[@role='listbox']//li")

    await expect(elements.first()).toBeVisible() // ✅ wait for suggestions

    const count = await elements.count() // ✅ correct way

    for (let i = 0; i < count; i++) {

        const text = await elements.nth(i).textContent()

        console.log("Text:", text)

        if (text && text.toLowerCase().includes("jobs")) {

            await elements.nth(i).click()
            break
        }
    }
})