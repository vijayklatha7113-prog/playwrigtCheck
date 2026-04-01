const{test,expect}=require('@playwright/test')

test("Handle Frames",async ({page})=>
{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const allframe=await page.frames()
    // Total Frame
    console.log( "Number of Frames: "+allframe.length)

    //frame using name or url
    // const var= await page.frame('name') // If name is present
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

await frame1.locator("//input[@name='mytext1']").fill("Hello");
      await page.waitForTimeout(3000)


      // Using Framelocator

     const frame2= await page.frameLocator("frame[src='frame_2.html']").locator("//input[@name='mytext2']")

     frame2.fill("Hello2")
           await page.waitForTimeout(3000)


})