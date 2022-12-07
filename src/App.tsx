import React from 'react';
import Question from './components/Question';
import { useState } from 'react';
import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

function App() {
  // Creating a loading state
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  // Creating a function that will start when the game begins
  const startTrivia = async () => {
    
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
