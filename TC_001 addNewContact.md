

TestCase 001: Create new lead

1Write a Playwright TypeScript test using Page Object Model that automates the following:

1. Login to https://apps.theauto-mate.com/crm/login.php with username "test.automate" and password "test@123"

2. Navigate to Contacts/Leads and click "Add New Contact"

3. Fill all fields using faker.js and ExcelReader data (name, email, phone, company, gender, status, source, lead score, deals, total value, services, priority, last contact, notes)

4. Accept the alert and click Add

5. Switch back to Contacts page

6. Assert that the newly created contact is displayed with the correct name



    
