exports.CartPage=class CartPage{


    constructor(page){

        this.page=page
        this.noOfProdcuts="//tbody[@id='tbodyid']/tr/td[2]"
    }

    async CheckProductNameCart(prodcutName){

        const productsInCart=await this.page.$$(this.noOfProdcuts)
        for(const product of productsInCart){
           console.log(await product.textContent());
           if(prodcutName===await product.textContent())
           {
            return true;
        
        }
    }
    
return false
    }
    
}