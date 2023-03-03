module.exports = class BasePage {
   #driver; 
    
   constructor(driver) {
     this.#driver = driver;
    }

    //Going to the specific url
    goToUrl(url){
        return this.#driver.get(url);
    }

    //Getting current url
    getCurrentUrl(){
        return this.#driver.getCurrentUrl();
    }

    //Getting current title
    getCurrentTitle(){
        return this.#driver.getTitle();
    }
}