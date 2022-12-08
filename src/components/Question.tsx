import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './Question.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number; 
  totalNrOfQuestions: number;
}

const Question: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalNrOfQuestions}) => (
  <Wrapper>
    <p className='number'>Question: {questionNumber} / {totalNrOfQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map(answer => (
        <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default Question;