const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');


test.describe('Login with valid/invalid credentials - Creating a new item. - Editing an existing item. - Deleting an item. - Asserting presence of expected data after actions. ', () => {
  const baseUrl = 'https://tendar-merchant-qa.vercel.app';


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

      test('Login with valid credentials - Create A New Item(Adding a Product)', async ({ page }) => {
            await page.goto(`${baseUrl}/login`, {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/117.0.0.0 Safari/537.36"
          }
        });

                              // Login with valid Credentials
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
              //Assert that User landed on the Dashboard after Sign In
              await page.getByRole('heading', { name: 'Dashboard' })
              await page.getByText('You\'re viewing data from “All')
                 
                
                        // Creating a new item (e.g., a todo/user).

            // Generate fake data
              const productName = faker.commerce.productName();
              const description = faker.commerce.productDescription();
              const priceValue = faker.commerce.price(100, 1000, 2); // string like "789.00"
              const price = `₦ ${priceValue}`;
              const quantity = faker.number.int({ min: 1, max: 100 });

              //Click on products and assert that the user is on the products page
              await page.getByRole('link', { name: 'Products deployed_code' }).click();
              await expect(page.locator('h1')).toContainText('Products');

             //Create new Product
    
              await page.getByRole('button', { name: 'Add New Product' }).click();
              await page.getByRole('textbox', { name: 'Product Name' }).fill(productName);
              await page.getByRole('textbox', { name: 'Description (optional)' }).fill(description);
              await page.getByRole('textbox', { name: 'Unit Price' }).fill(price);
              await page.getByRole('spinbutton', { name: 'Quantity' }).fill(quantity.toString());
              //UPLOAD AN IMAGE
              await page.setInputFiles('input[type="file"]', 'tests/assets/download.jpeg');

              await page.getByRole('button', { name: 'add Product' }).click();


              // ✅ Assert data appears in the table
              await expect(page.getByRole('table')).toContainText('PRODUCT');
              await expect(page.getByRole('table')).toContainText('QUANTITY');
              await expect(page.getByRole('table')).toContainText('AMOUNT');
              await expect(page.getByRole('table')).toContainText('DATE PUBLISHED');
              await expect(page.getByRole('table')).toContainText('AVAILABILITY');
              await expect(page.getByRole('table')).toContainText('STATUS');
});

             test('Editing an existing item. - Deleting an item.', async ({ page }) => {

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
        
              //Add  and Edit action 
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
              
              //Editing an existing item. - Deleting an item.
              await page.waitForTimeout(1000); 
              await expect(page.locator('.plans')).not.toContainText('Guaranty Trust Bank');
              await page.getByRole('button').first().click();
              await page.getByText('Logout').nth(1).click();
      });
});
