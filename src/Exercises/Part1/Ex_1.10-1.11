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

const Statistics = ({good, neutral, bad, total}) => {
  return (
    <table>
      <tbody>
        <Stat text="Good" value={good} />
        <Stat text="Neutral" value={neutral} />
        <Stat text="Bad" value={bad} />
        <Stat text="All" value={total} />
        <Stat text="Average" value={(good - bad) / total} />
        <Stat text="Positive" value={good / total * 100 + " %"} />
      </tbody>
    </table>
  )
}

// I named this "Stat" instead of "Statistic" to help tell the difference between this and it's parent component
const Stat = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr> 
  )
}

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
      {total === 0 ? 
      <>No feedback given</> : 
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)