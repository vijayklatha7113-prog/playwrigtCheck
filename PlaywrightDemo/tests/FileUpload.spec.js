const { test, expect } = require('@playwright/test');

test("File Upload Local", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload")
        .setInputFiles("C:/Users/Dell Vostro 14 3000/Pictures/Screenshots/Screenshot (2).png");

    await Promise.all([
        page.waitForNavigation(),   // ✅ wait for page change
        page.locator("#file-submit").click()
    ]);

    await expect(page.getByRole('heading')).toHaveText("File Uploaded!");
});
test("File Upload VS File",async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./UploadFile/Screenshot 1.png")

    await page.waitForTimeout(3000)
    await page.locator("#file-submit").click()

    await expect(page.locator("//h3")).toHaveText("File Uploaded!")
})