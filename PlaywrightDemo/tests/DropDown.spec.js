const{test,expect}=require('@playwright/test')

    test("Select Value form DropDown",async ({page})=>
    {

        await page.goto("https://freelance-learn-automation.vercel.app/signup")
/*
Drop Down from
Label
Value
Index
*/
        await page.waitForTimeout(1000)
        await page.locator("#state").selectOption({label:"Tamil Nadu"})
        await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value:"Punjab"})
    await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({index:3})
    await page.waitForTimeout(2000)


     //   const value=await page.locator("#state").allTextContents()
/*
// Select Option for All Output
        const values = await page.locator("#state option").allTextContents();

console.log("All Values:\n" + values.join("\n"));

await expect(values).toContain("Kerala");

*/
      
let dbstatus=false
const state=await page.locator("#state option").all()

for(let i=0;i<state.length;i++){

    const elemnet = await state[i]
    const value=await elemnet.textContent();
    console.log("All value is :"+value);

    if(value.includes("Kerala")){
        dbstatus=true
      break
    }
    

}

          await expect(dbstatus).toBeTruthy()

          // To select Multipe select

        const test=  await page.locator("#hobbies option").allTextContents()
  
          console.log("Alla value \n"+test.join("\n"));

                  await page.locator("#hobbies").selectOption(["Playing","Swimming"])

                  await page.waitForTimeout(5000)



          

    }


        

    
)