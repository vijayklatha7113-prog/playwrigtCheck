const{test,expect}=require('@playwright/test')
import { CartPage } from '../Pages/CartPage'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage'
 

test("POM Test Cases", async({page})=>
{

    //Login Page

    const login =new LoginPage(page) // TO create Login class to reuse
   await login.gotoLoginPage()
    await login.login("Testing@321","Testing@123")
    await page.waitForTimeout(3000)

    //Home Page

    const home=new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.goToCart()

    //Cart Page

    const cart=new CartPage(page)
    await page.waitForTimeout(3000)
    const status=await cart.CheckProductNameCart("Nexus 6")
    expect(await status).toBe(true)

})
