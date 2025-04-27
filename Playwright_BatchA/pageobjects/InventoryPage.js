class InventoryPage{

    constructor(page) { 
        this.page = page;
        this.addToCartButton =  page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartButton=page.locator(".shopping_cart_link");
    }
    
     async addToCart(){
        await this.addToCartButton.click();}
        
    async cartButtonClick(){
        await this.cartButton.click();}
    }

     module.exports={InventoryPage};