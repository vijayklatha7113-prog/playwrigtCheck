const{test,expect}=require('@playwright/test')

test("Keyboard Event", async ({page})=>
{

  /*  await page.goto("https://www.google.com/")

   const search= await page.getByTitle("Search")

   await search.fill("Vijay")

  //  await page.keyboard.press("Enter") // => To Enter only


    await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")
      //  await page.waitForTimeout(2000)

        await expect(search).toHaveValue("")

      //  await page.waitForTimeout(2000)

        await page.keyboard.press("Control+V")

                await expect(search).toHaveValue("Vijay")

                */

                await page.goto("https://www.google.com/")

   const search=  page.getByTitle("Search")

   await search.focus()

   await search.fill("Vijay Kumar")

   
 await page.keyboard.press("End") // ✅ important fix

    await page.keyboard.down("Control")
    await page.keyboard.down("Shift")

    await page.keyboard.press("ArrowLeft") // selects full word

    await page.keyboard.up("Shift")
    await page.keyboard.up("Control")

     await page.keyboard.press("Backspace")

 await expect(search).toHaveValue("Vijay ")

})