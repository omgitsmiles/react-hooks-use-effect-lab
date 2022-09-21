import React, { useState, useEffect} from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10)
      onAnswered(false)
    } else {
     const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
      return function cleanup () {
      clearTimeout(timer)
      }
    }
  }, [timeRemaining])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;


// When the Question component renders, 
// create a side effect using useEffect 
// and use setTimeout to run a callback 
// function after 1 second.

//import useEffect
//create useEffect func
//setTimeout func to run a cb, 2nd arg is 1000

//  Inside the callback function for setTimeout,
//  use the setTimeRemaining function to decrease 
//  the amount of time remaining by 1 every 1 second.

// When timeRemaining hits 0, do the following:

// write condition timeR === 0, setTR(10) and onAnswered(false)


// reset timeRemaining back to 10 seconds, 
// so our next question will have a fresh timer; and
// call the onAnswered callback prop with a value 
// of false (onAnswered(false)), to trigger some behavior in the App component.
// You should _also_ use the **cleanup function** for `useEffect` 
// to clean up after
// the timeout function.
