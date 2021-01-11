//----------------//
//     Ex 1.9     //
//----------------//

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, type, setType}) => {
  
  const handleClick = () => {
    setType(type + 1);
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// using <br> here to make sure that all changes I make to the code are only in this file
const Statistics = ({text, value}) => <>{text}: {value} <br></br></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" type={good} setType={setGood}/>
      <Button text="neutral" type={neutral} setType={setNeutral}/>
      <Button text="bad" type={bad} setType={setBad}/>
      
      <h2>Statistics</h2>
      {total === 0 ? <>No feedback given</> : 
        <>
          <Statistics text="Good" value={good} />
          <Statistics text="Neutral" value={neutral} />
          <Statistics text="Bad" value={bad} />
          <Statistics text="All" value={total} />
          <Statistics text="Average" value={(good - bad) / total} />
          <Statistics text="Positive" value={good / total} />
        </>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)