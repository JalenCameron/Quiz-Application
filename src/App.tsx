import React from 'react';
import Question from './components/Question';

function App() {
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
      <Question />
      <button className='next-question' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
