import { Page } from "playwright";
import { LoginPage } from "./LoginPage";

export class AdminPageInventory{
    protected page: Page;
    constructor(page: Page){
        this.page = page;
    }

    loginPage(){
        return new LoginPage(this.page);
    }
}