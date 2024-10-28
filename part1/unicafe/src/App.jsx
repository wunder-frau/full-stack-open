import { useState } from 'react'
import './App.css'

const Title = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}

const Button = ({ text, onClick }) => {
  return (
   <button onClick={onClick}>
    {text}
   </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? good/total * 100 : 0;
  return (
  <div>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>all: {total}</p>
    <p>avarage: {average}</p>
    <p>positive: {positive} %</p>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleOnGood = () => {
    setGood((count) => count + 1)
  }
  const handleOnNeutral = () => {
    setNeutral((count) => count + 1)
  }
  const handleOnBad = () => {
    setBad((count) => count + 1)
  }
  return (
    <div>
      <Title title="give feedback"/>
      <Button text = "good" onClick={() => handleOnGood()}></Button>
      <Button text = "neutral" onClick={() => handleOnNeutral()}></Button>
      <Button text = "bad" onClick={() => handleOnBad()}></Button>
      <Title title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
