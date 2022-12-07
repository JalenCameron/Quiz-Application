import React from 'react'

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number; 
  totalNrOfQuestions: number;
}

const Question: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalNrOfQuestions}) => (
  <div>
    <p className='number'>Question: {questionNumber} / {totalNrOfQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
      {answers.map(answer => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default Question;