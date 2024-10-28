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

const App = () => {
  const titleGiveFeedback = "give feedback"
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
      <Title title={titleGiveFeedback}/>
      <Button text = "good" onClick={() => handleOnGood()}></Button>
      <Button text = "neutral" onClick={() => handleOnNeutral()}></Button>
      <Button text = "neutral" onClick={() => handleOnBad()}></Button>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    </div>
  )
}

export default App
