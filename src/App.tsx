import React from 'react';
import Question from './components/Question';
import { useState } from 'react';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import LoadingSpinner from './components/LoadingSpinner';
import Greeting from './components/Greeting';

export type AnswerObject = {
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
    if(!gameOver) {
      // Getting the User's answer from the value assigned to each button
      const answer = e.currentTarget.value;
      // Checking the answer with the correct answer provided by the API
      const correct = questions[number].correct_answer === answer;
      // Adding to the score if the answer is correct
      if(correct) {
        setScore(prev => prev + 1);
      }
      // Saving the correct answer in an array 
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      // Putting this Object into the User Array
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  // Creating a function that will run when the user chooses to go to the next question
  const nextQuestion = () => {
    // Checking to see if on the last question
    const currentQuestion = number + 1;

    if(currentQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(currentQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quizipedia</h1>

        {!gameOver ? <p className='score'>Score: {score}</p> : null}

        {loading && <LoadingSpinner />}

        {!loading && !gameOver && (<Question 
          questionNumber = {number + 1}
          totalNrOfQuestions = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number] : undefined}
          callback = {checkAnswer}
        />)}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next-question' onClick={nextQuestion}>Next Question</button>
        ) : null}

        {/* Showing a 'Start' button for the opening game */}
        {gameOver ? (
          <>
            <Greeting />

            <button className='start' onClick={startTrivia}>
              Start!
            </button>
          </>
        ) : null}

        {/* Showing a 'Restart Game' button if they reach the end of the game */}
        {userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>
          Restart Game
        </button>) : null}
      </Wrapper>
    </>
  );
}

export default App;
