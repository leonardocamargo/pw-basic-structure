import {Page} from '@playwright/test'

export class LoginPage{
    protected page: Page;
    readonly inputEmail = '[placeholder="Username"]'
    readonly inputPassword = '[placeholder="Password"]'
    readonly buttonSubmitName = 'Login';

    constructor(page: Page){
        this.page = page;
        
    }

    async fillEmail(email: string): Promise<void>{
        await this.page.fill(this.inputEmail, email)
    }

    async fillPassword(password: string): Promise<void>{
        await this.page.fill(this.inputPassword, password)
    }

    async clickSubmit(): Promise<void>{
        await this.page.getByRole('button', {name: this.buttonSubmitName}).click()
    }

    async login(email: string, password: string): Promise<void>{
        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.clickSubmit()
    }



}