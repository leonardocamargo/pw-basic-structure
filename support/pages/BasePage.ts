import {Page} from '@playwright/test'

export abstract class BasePage{
    protected page: Page;

    construtor(page: Page){
        this.page = page;
    }

    async takeScreenshot(name: string): Promise<void>{
        await this.page.screenshot({path: `screenshots/${name}.png`})
    }

    async navigateTo(path: string) : Promise<void>{
        await this.page.goto(path);
    }
}