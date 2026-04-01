const{test,expect} =require('@playwright/test')

test("My First Test",async function({page}) {
    expect(12).toBe(12)
})

test("My Second Test",async function({page}) {
    expect(200).toBe(201)
})

test.skip("My Third Test",async function({page}) {
    expect(100).toBe(100)
    
})

test("My Fourth Test", async function({page})
{
    expect("My Vijay CEO").toContain("CEO")
    expect(true).toBeTruthy()
})

test("My Fifth Test", async function({page})
{
    expect("My Vijay CEO").toContain("CEO")
    expect(false).toBeFalsy()
})
test("My Sixth Test", async function({page})
{
    expect("My Vijay CEO".includes("CEO")).toBeTruthy();
  
})