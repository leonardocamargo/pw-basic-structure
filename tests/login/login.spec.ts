import {test, expect} from '@playwright/test'
import { AdminUser } from '../../support/users/AdminUser';
import { LoginPage } from '../../support/pages/LoginPage';

var adminUser;

test.describe('Login Suite',{
    tag:['@login', '@regression']

}, () =>{

    test.beforeEach(async({page}) =>{
        adminUser = new AdminUser(page);


    })


    test('login with success', async ({page})=>{
      let loginPage = new LoginPage(page);
      await page.goto('/')
      await loginPage.login('Admin', 'admin123');

    //   await page.fill('[placeholder="Password"]','admin123')
    //   await page.getByRole('button', {name: 'Login'}).click()
      
      await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible()


    })

})