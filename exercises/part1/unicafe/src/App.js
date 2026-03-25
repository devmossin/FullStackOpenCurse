import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.texto}
  </button>
)

const Total = (props) => (
  <div> {props.text} {props.totalValue} {props.porcentagem}</div>
)

const Statistcs = (props) => {
  if (props.good | props.neutral | props.bad > 0) {
    return (
      <div>
        <Total text = "good" totalValue = {props.good}/>
        <Total text = "neutral" totalValue = {props.neutral}/>
        <Total text = "bad" totalValue = {props.bad}/>
        <Total text = "all" totalValue = {props.good + props.neutral + props.bad}/>
        {console.log(props.good, props.neutral, props.bad)}
        <Total text = "average" totalValue = {(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
        <Total text = "positive" totalValue = {props.good / (props.good + props.neutral + props.bad) * 100} porcentagem = "%"/>
      </div>
    )
  }
  return (<p>no feedback given</p>)
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => {
    const updateGoodValue = good + 1
    setGood(updateGoodValue)
  }

  const setNeutralValue = () => {
    const updateNeutralValue = neutral + 1
    setNeutral(updateNeutralValue)
  }

  const setBadValue = () => {
    const updateBadValue = bad + 1
    setBad(updateBadValue)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick = {setGoodValue} texto = "good" />
      <Button handleClick = {setNeutralValue} texto = "neutral" />
      <Button handleClick = {setBadValue} texto = "bad" />

      <Statistcs good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App