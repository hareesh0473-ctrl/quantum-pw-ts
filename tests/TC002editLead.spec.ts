import { test } from "../customFixtures/crmFixtures";
import { expect } from "@playwright/test";


test('edit info', async ({ leadPage, contactsLeadsPage }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Hareesh' },
        { type: 'TestCase', description: 'Edit last contact of the lead' },
        { type: 'Test Description', description: "Verifying the last contact field is updated and displayed in contact leads page" }
    );


    await leadPage.clickEdit();
    await leadPage.changeLastContact();
    await leadPage.clickSaveChange();
    await leadPage.acceptAlert("Ok");
      

    await expect(contactsLeadsPage.tableLastContact).toHaveText("2002-05-01");




})



