import { useState } from 'react'

const Button = props => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const anecdotesObject = [
    {
      votes: 0,
      anecdote: "Se fazer algo dói, faça isso com mais frequência."
    },
    {
      votes: 0,
      anecdote: "Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!"
    },
    {
      votes: 0,
      anecdote: "Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento."
    },
    {
      votes: 0,
      anecdote: "Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender."
    },
    {
      votes: 0,
      anecdote: "Otimização prematura é a raiz de todo o mal."
    },
    {
      votes: 0,
      anecdote: "Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo."
    },
    {
      votes: 0,
      anecdote: "Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes."
    },
    {
      votes: 0,
      anecdote: "A única maneira de ir rápido é ir bem."
    },
  ]
  const [anecdotesList, setAnecdotesList] = useState(anecdotesObject)
  const [selected, setSelected] = useState(0)
  const [voteSelected, setVoteSelected] = useState(0)
  const [currentRandomNumber, setCurrentRandomNumber] = useState(0)

  const updateAnecdote = () => {
    const min = 0
    const max = 7
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    console.log(randomNumber)
    setCurrentRandomNumber(randomNumber)
    setSelected(anecdotesList[randomNumber].anecdote)
    setVoteSelected(anecdotesList[randomNumber].votes)
  }

  const updateVote = () => {
    const newAnecdotesObjects = [...anecdotesList]
    newAnecdotesObjects[currentRandomNumber].votes += 1

    setAnecdotesList(newAnecdotesObjects)
    setVoteSelected(newAnecdotesObjects[currentRandomNumber].votes)
  }

  const getMoreVoted = () => {
    const votesOnly = anecdotesList.map(object => object.votes)
    const moreVoted = votesOnly.indexOf(Math.max(...votesOnly))
    
    return anecdotesList[moreVoted].anecdote
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {selected}
      <br></br>
      has {voteSelected} votes
      <br></br>
      <Button handleClick = {updateVote} text = "vote"/>
      <Button handleClick = {updateAnecdote} text = "next anecdotes"/>
      <br></br>
      <h1>Anecdote with most votes</h1>
      {getMoreVoted()}
    </div>
  )
}

export default App