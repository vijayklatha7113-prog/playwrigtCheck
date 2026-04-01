exports.LoginPage=
class LoginPage {

constructor(page){

this.page=page
this.loginLink="#login2"
this.Username="#loginusername"
this.Password="#loginpassword"
this.LoginButt="//button[@onclick='logIn()']"
}

async gotoLoginPage(){
    await this.page.goto("https://www.demoblaze.com/index.html")
}

async login(username,password)
{
    await this.page.locator(this.loginLink).click()
    await this.page.locator(this.Username).fill(username)
    await this.page.locator(this.Password).fill(password)
    await this.page.locator(this.LoginButt).click()
}

}