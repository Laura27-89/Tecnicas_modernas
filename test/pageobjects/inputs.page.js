import Page from './page';

class InputsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }

    get getParagraph() {
        return $('p');
    }

    get getInput() {
        return $('#content > div > div > div > input[type=number]');

    }

    setEnterNumber(){
        return this.getInput.setValue(78);
    }

    currentInput(){
         return $('#content > div > div > div > input[type=number]');
     }
}

export default new InputsPage();