const{test,expect}=require('@playwright/test')

test("Handle Alert", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //Enabling alert to handle
    page.on('dialog',async(d)=>
    {
        expect(d.type()).toContain("alert")

        expect(d.message()).toContain("I am a JS Alert")

      await  d.accept();
    })
    await page.locator("//button[@onclick='jsAlert()']").click()

    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
}
)

test("Confirm Handle Alert", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //Enabling alert to handle
    page.on('dialog',async(dialogwind)=>
    {
        expect(dialogwind.type()).toContain("confirm")

        expect(dialogwind.message()).toContain("I am a JS Confirm")

      await  dialogwind.dismiss()
    })
    await page.locator("//button[@onclick='jsConfirm()']").click()

    await expect(page.locator("#result")).toHaveText("You clicked: Cancel")
}
)

test("Prompt Handle Alert", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //Enabling alert to handle
    page.on('dialog',async(dialogwindpmr)=>
    {
        expect(dialogwindpmr.type()).toContain("prompt")

        expect(dialogwindpmr.message()).toContain("I am a JS prompt")

      await  dialogwindpmr.accept("Vijay")
    })
    await page.locator("//button[@onclick='jsPrompt()']").click()

    await expect(page.locator("#result")).toHaveText("You entered: Vijay")
}
)