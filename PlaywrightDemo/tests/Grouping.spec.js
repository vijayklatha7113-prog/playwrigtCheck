const{test,expect}=require('@playwright/test')



test.beforeAll(async()=>
{
    console.log("BeforeAll hooks");
    
})

test.afterAll(async()=>
{
    console.log("AfetAll hooks");
    
})

test.beforeEach(async()=>
{
    console.log("BeforEach Hooks");
    
})
test.afterEach(async()=>
{
    console.log("AfterEach Hooks");
    
})

test.describe.only("Group 1", ()=>{

    test("Test1 ", async ({page})=>
{
    console.log("Test 1 is:");
    
})

test("Test2 ", async ({page})=>
{
    console.log("Test 2 is:");
    
})

})

test.describe("Group 2", ()=>
{
test("Test3 ", async ({page})=>
{
    console.log("Test 3 is:");
    
})
test("Test4 ", async ({page})=>
{
    console.log("Test 4 is:");
    
})
})
