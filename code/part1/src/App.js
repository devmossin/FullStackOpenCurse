const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Olá {props.nome}, você tem {props.idade} anos
      </p>
    </div>
  )
}

const App = () => {
  const nome = 'Mossin'
  const idade = 23

  return (
    <div>
      <h1>Olá a todos!</h1>

      <Hello nome = 'Pietro' idade = {12 + 1}/>
      <Hello nome = {nome} idade = {idade}/>
    </div>
  )
}

export default App