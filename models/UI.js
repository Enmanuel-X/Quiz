export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
       const questionTitle = document.getElementById(`question`);
       questionTitle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} choices The choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById(`choices`);
        choicesContainer.innerHTML = ``;

        for (let index = 0; index < choices.length; index++) {
            const button = document.createElement(`button`);
            button.innerText = choices[index];
            button.className = `quiz__button`;
            button.addEventListener(`click`, () => callback(choices[index]))

            choicesContainer.append(button);
        }
    }


    /**
     * 
     * @param {number} score 
     */
    showScore(score) {
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Your Score ${score}</h2>
        `;
        const element = document.getElementById(`quiz`);
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex The current index of the quiz
     * @param {number} total the total questions
     */

    showProgress(currentIndex, total) {
        const element = document.getElementById(`progress`);
        element.innerHTML = `Question ${currentIndex += 1} of ${total}`;
    }
}