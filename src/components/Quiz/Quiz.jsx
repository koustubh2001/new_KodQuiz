import React, { useState } from 'react'
import './quiz.css'
//importing the data.js from src folder
import { data } from '../../data';

//To use State Method
export default function Quiz() {
  const [index , setIndex]=useState(0);
  const [question , setQuestion]=useState(data[index]);
  //for checking question last or not
  const [isLastPage ,setIsLastPage]=useState(false);
  //for Score initionalisation
  const [score ,setScore]=useState(0);
  //only one time click answer
  const [lock ,setLock]=useState(false);

// Next Question calling a function and next question will display
  function nextQuestion(){
    //not last question
      setLock(false);
    if(index < data.length-1){
      setIndex(index +1);
      setQuestion(data[index+1]);
    }
    //last question
    else{
      setIsLastPage(true);
    }
  }
   //Check score function calling
  function checkAnswer(e , ans){
    if(lock===false){
      if(ans===question.ans)
        {
          setScore(score+1);
          e.target.classList.add('correct');
        }
        else{
          e.target.classList.add('incorrect');
        }
        setLock(true);
    }
   }

  // use last page dislay a message
   if(isLastPage===true){
    return(
      <h1>Quiz Score={score}</h1>
    )
   }
  
 
  return (
    <div className='quiz'>
        <h1>Kod Quiz</h1>
        <br></br>
        <h2>{question.question}</h2>
        <ul>
            <li onClick={(e)=>(checkAnswer(e,'1'))}>{question.option1}</li>
            <li onClick={(e)=>(checkAnswer(e,'2'))}>{question.option2}</li>
            <li onClick={(e)=>(checkAnswer(e,'3'))}>{question.option3}</li>
            <li onClick={(e)=>(checkAnswer(e,'4'))}>{question.option4}</li>
        </ul>
        <button onClick={nextQuestion}>NEXT</button>
        < div>Question : {index+1} of {data.length}</div>

    </div>
  )
}
