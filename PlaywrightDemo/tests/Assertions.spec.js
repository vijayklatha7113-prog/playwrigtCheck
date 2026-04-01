const{test,expect}=require('@playwright/test')

    test("Assertions",async ({page})=>
    {


        await page.goto("https://demo.nopcommerce.com/register")

                // To Have URL

                expect(page).toHaveURL("https://demo.nopcommerce.com/register")

                // TO have title
                expect(page).toHaveTitle("nopCommerce demo store. Register")

                // To check visible
                
                await expect(page.getByAltText("nopCommerce demo store")).toBeVisible()

                //TO check Enabled

                await expect(page.locator("#small-searchterms")).toBeEnabled()


                // radio button
    })