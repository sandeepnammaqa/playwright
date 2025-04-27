class LoginPage{

    constructor(page){
        this.page=page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('#login-button');
        
    }
    
    async goTo()
    {
      await this.page.goto("https://www.saucedemo.com/"); 
    }
    
    async validLogin(username,password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.page.waitForTimeout(2000);    
    
    }
    
    }
    
    module.exports={LoginPage};