import React, { Component } from "react";
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import QuizCss from "./Quiz.module.css";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {
      rightAnswer: 0,
      resultAnswer: [],
    },
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    loading: true,
    quiz: [],
  };

  onAnswerHandler = (answerId) => {
    if (this.state.answerState) {
      return;
    }
    if (answerId === this.state.quiz[this.state.activeQuestion].rightAnswerId) {
      const result = this.state.results.resultAnswer;
      let rightAnswer = this.state.results.rightAnswer;
      rightAnswer = rightAnswer + 1;
      result.push("right");
      this.setState({
        answerState: { [answerId]: "success" },
        results: {
          resultAnswer: result,
          rightAnswer: rightAnswer,
        },
      });
    } else {
      const result = this.state.results.resultAnswer;
      result.push("error");
      this.setState({
        answerState: { [answerId]: "wrong" },
        results: {
          resultAnswer: result,
          rightAnswer: this.state.results.rightAnswer, //??????
        },
      });
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
    }
  };
  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };
  onRetryHandler = () => {
    this.setState({
      activeQuestion: 0,
      isFinished: false,
      answerState: null,
      results: {
        rightAnswer: 0,
        resultAnswer: [],
      },
    });
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://react-quiz-6646a-default-rtdb.firebaseio.com/quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }

    console.log("Quiz ID  =" + this.props.match.params.id);
  }

  render() {
    const activeQuestion = this.state.activeQuestion;
    return (
      <div className={QuizCss.Quiz}>
        <h1>Ответьте на все вопросы</h1>

        {this.state.loading ? (
          <Loader />
        ) : this.state.isFinished ? (
          <FinishedQuiz
            results={this.state.results}
            quiz={this.state.quiz}
            onRetry={this.onRetryHandler}
          />
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

        {/* {this.state.isFinished ? (
          <FinishedQuiz
            results={this.state.results}
            quiz={this.state.quiz}
            onRetry={this.onRetryHandler}
          />
        ) : (
          <ActiveQuiz
            answers={this.state.quiz[activeQuestion].answers}
            question={this.state.quiz[activeQuestion].question}
            onAnswerClick={this.onAnswerHandler}
            activeQuestion={this.state.activeQuestion + 1}
            allQuestions={this.state.quiz.length}
            state={this.state.answerState}
          />
        )} */}
      </div>
    );
  }
}
export default Quiz;
