const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');


test.describe('Login flow', () => {
  const baseUrl = 'https://tendar-merchant-qa.vercel.app';

//   test('Login with valid credentials - Create A New Item(Adding a Product)', async ({ page }) => {
//     await page.goto(`${baseUrl}/login`, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/117.0.0.0 Safari/537.36"
//       }
//     });

//     await page.getByRole('heading', { name: 'Welcome' });
//     await expect(page.locator('[id="__layout"]')).toContainText('Sign in to your account to continue');
//     //type the email
//     await expect(page.locator('form')).toContainText('Email');
//     await page.getByRole('textbox', { name: 'Enter your email' }).fill('light@mailinator.com');
//     //type the password
//     await expect(page.locator('form')).toContainText('Password');
//     await page.getByRole('textbox', { name: 'Enter your password' }).fill('Semilore@18%');
//     //click on remember me
//     await page.locator('span').click();
//     //sign in
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     //Assert that User landed on the Dashboard after Sign In
//     await page.getByRole('heading', { name: 'Dashboard' })
//     await page.getByText('You\'re viewing data from “All')


//     // ADD an item-(Add a product in this tests)

//               // Generate fake data
//                 const productName = faker.commerce.productName();
//                 const description = faker.commerce.productDescription();
//                 const priceValue = faker.commerce.price(100, 1000, 2); // string like "789.00"
//                 const price = `₦ ${priceValue}`;
//                 const quantity = faker.number.int({ min: 1, max: 100 });

//     //Click on products and assert that the user is on the products page
//     await page.getByRole('link', { name: 'Products deployed_code' }).click();
//     await expect(page.locator('h1')).toContainText('Products');

//     //Create new Product
    
//     await page.getByRole('button', { name: 'Add New Product' }).click();
//     await page.getByRole('textbox', { name: 'Product Name' }).fill(productName);
//     await page.getByRole('textbox', { name: 'Description (optional)' }).fill(description);
//     await page.getByRole('textbox', { name: 'Unit Price' }).fill(price);
//     //await page.getByRole('checkbox', { name: 'Electronics' }).check();
//     //await page.getByText('Electronics').click();
//     await page.getByRole('spinbutton', { name: 'Quantity' }).fill(quantity.toString());

  
//     await page.setInputFiles('input[type="file"]', 'tests/assets/download.jpeg');


//     await page.getByRole('button', { name: 'add Product' }).click();


//     // ✅ Assert data appears in the table
//     await expect(page.getByRole('table')).toContainText('PRODUCT');
//     await expect(page.getByRole('table')).toContainText('QUANTITY');
//     await expect(page.getByRole('table')).toContainText('AMOUNT');
//     await expect(page.getByRole('table')).toContainText('DATE PUBLISHED');
//     await expect(page.getByRole('table')).toContainText('AVAILABILITY');
//     await expect(page.getByRole('table')).toContainText('STATUS');
  
//    // await expect(page.locator('.content-row > td:nth-child(7)').first()).toBeVisible();

//     // Assert column values in 1st, 2nd, 3rd <td>
//     await page.waitForTimeout(6000); // Wait 3 seconds
 

// // ✅ Assertions

// await page.locator('.options-button').nth(0).click();
// await page.locator('p.popover-item', { hasText: 'Edit' }).click();

// const actualValue = await page.getByRole('textbox', { name: 'Product Name' }).inputValue();
// expect(actualValue.toLowerCase()).toBe(productName.toLowerCase());


//    //Edit a product
//   await expect(page.getByRole('textbox', { name: 'Unit Price' })).toHaveValue(price);
//   await page.getByRole('textbox', { name: 'Product Name' }).fill('Edited Product');
//   await page.getByRole('button', { name: 'edit Product' }).click();
//   await expect(page.getByRole('table')).toContainText('Edited Product');



// });

      test('Deleting an Item', async ({ page }) => {

        await page.goto(`${baseUrl}/login`, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/117.0.0.0 Safari/537.36"
          }
        });

        await page.getByRole('heading', { name: 'Welcome' });
        await expect(page.locator('[id="__layout"]')).toContainText('Sign in to your account to continue');
        //type the email
        await expect(page.locator('form')).toContainText('Email');
        await page.getByRole('textbox', { name: 'Enter your email' }).fill('light@mailinator.com');
        //type the password
        await expect(page.locator('form')).toContainText('Password');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('Semilore@18%');
    //click on remember me
        await page.locator('span').click();
    //sign in
        await page.getByRole('button', { name: 'Sign In' }).click();


        await page.waitForTimeout(3000); 
        await page.getByRole('link', { name: 'Settings' }).click();
        //Add a bank account
        await page.getByRole('link', { name: 'Bank Account Management' }).click();
        await expect(page.locator('[id="__layout"]')).toContainText('Bank Account Management');
        await expect(page.locator('[id="__layout"]')).toContainText('ADD NEW BANK ACCOUNT');
        await page.getByRole('button', { name: 'ADD NEW BANK ACCOUNT' }).click();
        await expect(page.locator('[id="__layout"]')).toContainText('Add new bank');
        await page.getByText('Enter your new bank account').click();
        await expect(page.locator('[id="__layout"]')).toContainText('Enter your new bank account details below');
        await page.getByLabel('Loading...').fill('guaranty');
        await page.getByRole('option', { name: 'Guaranty Trust Bank' }).click();
        await page.getByPlaceholder('Enter account number').dblclick();
        await page.getByPlaceholder('Enter account number').fill('0231508130');
        await page.getByRole('button', { name: 'Proceed' }).click();
        await page.waitForTimeout(3000);
        await expect(page.locator('[id="__layout"]')).toContainText('Guaranty Trust Bank');
        await expect(page.locator('.plans')).toContainText('Guaranty Trust Bank');
        //Delete Action - Delete the bank added
        await page.getByRole('button').nth(3).click();
        await expect(page.locator('[id="__layout"]')).toContainText('Delete bank account');
        await expect(page.locator('[id="__layout"]')).toContainText('Are you sure you want to delete this bank account permanently? This process cannot be undone.');
        
        await page.getByRole('button', { name: 'Delete' }).click();
        //assert that the bank added was deleted
        await page.waitForTimeout(1000); 
        await expect(page.locator('.plans')).not.toContainText('Guaranty Trust Bank');
        await page.getByRole('button').first().click();
        await page.getByText('Logout').nth(1).click();
      });


      test('Login with invalid credentials', async ({ page }) => {
        await page.goto(`${baseUrl}/login`);

        await expect(page.locator('form')).toContainText('Email');
        await page.getByRole('textbox', { name: 'Enter your email' }).fill('invaliduser@mailinator.com');
        await expect(page.locator('form')).toContainText('Password');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('SemilWrongPass');

        await page.getByRole('button', { name: 'Sign In' }).click();

        // Assert error message
        await expect(page.getByRole('alert')).toContainText('Merchant not found');
      });

});
