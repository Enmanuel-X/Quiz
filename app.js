import { getQuestion } from "./data/dataQuestion.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

function main() {
    const quiz = new Quiz(getQuestion);
    const ui = new UI()

    ui.showQuestion(quiz.getQuestionIndex().text);
}

main()