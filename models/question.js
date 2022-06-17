export class Question {

    /**
     * 
     * @param {string} text 
     * @param {string[]} choices 
     * @param {string} answer 
     */

    constructor({
        text, 
        choices, 
        answer
    }) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice 
     * @returns {boolean} **retorna un boleano
     */

    correctAnswer(choice) {
        return choice === this.answer
    }
}

