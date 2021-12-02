import { path } from 'chromedriver';
import keyPressesPage from '../pageobjects/keyPresses.page';

describe('My Key presses App', () => {
    beforeEach(async function(){
        keyPressesPage.open('key_presses');
    });

    // it('Should be able to open the keyPresses page', async () => {
    //     await expect(keyPressesPage.getTitle).toHaveTextContaining('Dropdown ListKey Presses');
    // });

    it('Should be able to to tell what key is presses last', async () => {
        await keyPressesPage.typeValue('R');
        expect(keyPressesPage.getInput).toHaveTextContaining('You entered: J');

        if(!passed) {
            const callDate = new Date();
            browser.saveScreenshot('./test/Screenshot/' + callDate + '.png');
        }

    });
});