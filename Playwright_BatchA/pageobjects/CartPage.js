class CartPage{

    constructor(page){
        this.page=page;
        this.checkout = page.locator('#checkout');
       this.remove=page.locator('#remove-sauce-labs-backpack');
        
    }
    
  async removeItem(){
        await this.remove.click();
    }
    
    async clickCheckout(){
       
        await this.checkout.click();
          
    
    }
    
    }
    
    module.exports={CartPage};