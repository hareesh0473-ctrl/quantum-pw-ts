import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionsImpl } from "../utils/BrowserInteractionsImpl";
export class LeadPage extends BrowserInteractionsImpl{

    readonly page: Page;
    readonly edit: Locator;
    readonly lastContactUp: Locator;
    readonly saveChanges: Locator;
    tableLastContact: any;
    


    constructor(page: Page, context: BrowserContext) {
        super(page, context);
        this.page = page;
        this.edit = page.locator("//button[text()='Edit']"); // adjust selector
        this.lastContactUp = page.locator('input[id="edit_last_contact"]'); // adjust selector
        this.saveChanges = page.getByRole('button', { name: 'Save Changes' });
        
    }

    async clickEdit() {
        await this.click(this.edit, 'Edit Button');
    }
    async changeLastContact() {
        await this.type(this.lastContactUp, "2002-05-01", 'Last Contact Date');
    }
    async clickSaveChange(){
        await this.click(this.saveChanges, 'Save Changes Button');
    }

    async acceptAlert(buttonText: string): Promise<void> {
        const dialog = await this.page.waitForEvent('dialog');
        await dialog.accept(buttonText);
    }
    
    

}


 
