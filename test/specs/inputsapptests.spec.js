import InputsPage from '../pageobjects/inputs.page';

describe('My Inputs App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
    });
    beforeEach(async function(){
        console.log('I get executed before all its.');
        await InputsPage.open('inputs');
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
        await InputsPage.open('inputs');
    });

    it('Should show the title "Inputs"', async () => {
        console.log('first test');
        await expect(InputsPage.getTitle).toHaveTextContaining('Inputs');
    });

    it('Should show the subtitle "Number"', async () => {
        console.log('second test');
        await expect(InputsPage.getParagraph).toHaveTextContaining('Number');
    });

    it('Should set a number', async () => {
        console.log('third test');
        await InputsPage.setEnterNumber(1);
        await expect(InputsPage.currentInput()).setEnterNumber();
    });
});