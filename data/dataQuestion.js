import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const getQuestion = data.map(question => new Question({
    text: question.question,
    choices: question.choices,
    answer: question.answer
}));