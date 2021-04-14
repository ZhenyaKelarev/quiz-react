import React, { Component } from "react";
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import QuizCss from "./Quiz.module.css";
import QuizBtn from "../QuizBtn/QuizBtn";

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        answers: [
          { text: "Черный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
      {
        question: "Сколько будет 2 + 2 ?",
        rightAnswerId: 3,
        answers: [
          { text: "2", id: 1 },
          { text: "3", id: 2 },
          { text: "4", id: 3 },
          { text: "5", id: 4 },
        ],
      },
    ],
  };

  onAnswerHandler = (answerId) => {
    if (this.state.answerState) {
      return;
    }

    if (answerId === this.state.quiz[this.state.activeQuestion].rightAnswerId) {
      this.setState({
        answerState: { [answerId]: "success" },
      });
      console.log("you are right");
    } else {
      this.setState({
        answerState: { [answerId]: "wrong" },
      });
      console.log("you are wrong");
    }
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        });
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null,
        });
      }
      window.clearTimeout(timeout);
    }, 1500);
  };
  onNextQuestionHandler = () => {
    if (!(this.state.activeQuestion === this.state.quiz.length)) {
      console.log("activeQuestion", this.state.activeQuestion);
    }
  };
  isQuizFinished = () => {
    console.log(this.state.activeQuestion + 1);
    console.log("length", this.state.quiz.length);
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  render() {
    const activeQuestion = this.state.activeQuestion;
    return (
      <div className={QuizCss.Quiz}>
        <h1>Ответьте на все вопросы</h1>
        {this.state.isFinished ? (
          <h1>Finished</h1>
        ) : (
          <ActiveQuiz
            answers={this.state.quiz[activeQuestion].answers}
            question={this.state.quiz[activeQuestion].question}
            onAnswerClick={this.onAnswerHandler}
            activeQuestion={this.state.activeQuestion + 1}
            allQuestions={this.state.quiz.length}
            state={this.state.answerState}
          />
        )}
      </div>
    );
  }
}
export default Quiz;
