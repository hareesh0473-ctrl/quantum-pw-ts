import { ok } from "node:assert";
import { appConstants } from "../constants/appConstants";
import { expect, test } from "../customFixtures/crmFixtures";
import { ExcelReader } from "../utils/excelUtils";
import { FakerData } from "../utils/fakerUtils";


test('Create new contact', async ({ addContactDetailsPage, contactsLeadsPage }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Hareesh' },
        { type: 'TestCase', description: 'Add new contact and verify its displayed' },
        { type: 'Test Description', description: "Verifying newly created contact is displayed in contact leads page" }
    );
    const excelReader = new ExcelReader('../quantum-pw-ts/resources/testdata.xlsx');
    const excelData = excelReader.getRowByTestcase("contact", "TC_ID", "TC_001");

    const contactName = FakerData.getFirstName();
    await addContactDetailsPage.enterName(contactName);
    await addContactDetailsPage.enterEmail(FakerData.getEmail());
    await addContactDetailsPage.enterPhoneNumber(excelData.PHONE_NUMBER);
    await addContactDetailsPage.enterCompany(FakerData.company());
    await addContactDetailsPage.selectGender(excelData.GENDER);
    await addContactDetailsPage.selectStatus(appConstants.Status.Active);
    await addContactDetailsPage.selectContactSorce(appConstants.Contact_Source.Social_Media);
    await addContactDetailsPage.selectContactSorce(appConstants.Contact_Source.Social_Media);
    await addContactDetailsPage.enterleadScore("100");
    await addContactDetailsPage.enterDeals("90")
    await addContactDetailsPage.enterTotalValue("95");
    await addContactDetailsPage.selectInterestedServices(appConstants.Interested_Services.Marketing);
    await addContactDetailsPage.selectPriority(appConstants.Priority.High);
    await addContactDetailsPage.enterLastContact("2000-04-01");
    await addContactDetailsPage.enterNotes("NewLead");
    await addContactDetailsPage.acceptAlert("Ok");
    
    await addContactDetailsPage.clickAddButton();
    
    const contactPage = await contactsLeadsPage.switchBackToContactsPage();
    await expect(await contactPage.getFirstContactName(contactName)).toHaveText(contactName);

})