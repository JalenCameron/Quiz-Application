import React from 'react';
import Question from './components/Question';
import { useState } from 'react';
import { fetchQuizQuestions } from './API';
import { Difficulty, QuestionState } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  // Creating a loading state
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  // Creating a function that will start when the game begins
  const startTrivia = async () => {
    // Ensuring a new game starts and reverting Game Over to false
    setLoading(true);
    setGameOver(false);
    // Taking in new questions and putting them in a variable
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    // Resetting everything else to default
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  // Creating a function that will run when the User makes a selection
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  // Creating a function that will run when the user chooses to go to the next question
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Trivia Night</h1>
      <button className='start' onClick={startTrivia}>Start!</button>
      <p className='score'>Score: </p>
      <p>Loading Questions...</p>
      {/* <Question 
        questionNumber = {number + 1}
        totalNrOfQuestions = {TOTAL_QUESTIONS}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      /> */}
      <button className='next-question' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
