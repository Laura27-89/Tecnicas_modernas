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
        return $('#content').click();

    }

    setEnterNumber(number){
        return this.getInput.getNumber(number);
    }

//     setInputsValuebyInput(input){
//         return this.getInput.selectByInput(input);
//     }

    currentInput(){
         return $('#content > div > div > div > input[type=number]');
     }
}

export default new InputsPage();