import { Page } from "playwright";
import { AdminPageInventory } from "../pages/AdminPageInventory";

export class AdminUser{

    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    pages(){
        return new AdminPageInventory(this.page);
    }
}