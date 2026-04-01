exports.HomePage=class HomePage{


    constructor(page){
        this.page=page
        this.productList="//*[@id='contcont']/div/div/div/div/div/div/h4/a"
         this.AddCart = "//a[text()='Add to cart']" 
       this.cart="#cartur"

    }

    async addProductToCart(productName){

      const prductList= await this.page.$$(this.productList)
        for (const products of prductList){

           const text= await products.textContent()
        if(text.trim()==productName)
        {
               await products.click();
       
       
            break
        }
      }

     await this.page.on("dialog",async dialog=>
      {
        if(dialog.message().includes("added")){
            await dialog.accept()
        }
      }
      )
      await this.page.locator(this.AddCart).click()
    }

    async goToCart(){

        await this.page.locator(this.cart).click()
    }
}