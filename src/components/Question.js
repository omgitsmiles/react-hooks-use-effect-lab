import React, { useState, useEffect} from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() => {
  if (timeRemaining === 0) {
    setTimeRemaining(10)
    onAnswered(false)
  } else {
    const countdown = setTimeout(() => setTimeRemaining(timeRemaining -1), 1000)
    return function cleanup() {
      clearTimeout(countdown)
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

// import useEffect hook 
// build useEffect function
// setTimeout with 2nd arg 1000 which starts timeout func after one sec
// pass setter func with time remaining dec -1
// running a () => func after set to invoke it again to countdown

// Inside the callback function for setTimeout,
//  use the setTimeRemaining function to decrease 
//  the amount of time remaining by 1 every 1 second.

// When timeRemaining hits 0, do the following:

// create conditional if timeR === 0 onanswered(false)
// else setTimer is moved here

// reset timeRemaining back to 10 seconds, 
// so our next question will have a fresh timer; and
// call the onAnswered callback prop with a value 
// of false (onAnswered(false)), to trigger some behavior in the App component.
