import React from 'react';
import './App.css';
import SendButton from './components/images/SendButton.png'

class App extends React.Component {

  state = {
    infoMensagem: [
      //{nameUser: "", msgUser: ""}
    ],
    valorInputUser: "",
    valorInputMsg: ""
  }

  enviaMsg = (event) => {
    event.preventDefault()
    const mensagem = {
      user: this.state.valorInputUser,
      msg: this.state.valorInputMsg
    }

    const novaMensagem = [...this.state.infoMensagem, mensagem]
    this.setState({infoMensagem: novaMensagem})
  }

  onChangeInputUser = (event) => {
    this.setState({valorInputUser: event.target.value})
  }

  onChangeInputMsg = (event) => {
    this.setState({valorInputMsg: event.target.value})
  }

  render() {

    const listaDeMsgs = this.state.infoMensagem.map((item) => {
      return (
        <p className="balao"><strong>{item.user}</strong> {item.msg}</p>
      
      )
    })

    return (
      <div className="App">
        <div className="container-da-conversa">
          <form className="formulario-de-mensagens">
            <input 
              placeholder="Usuário"
              value={this.state.nameUser}
              onChange={this.onChangeInputUser}
            />

            <input 
              placeholder="Digite sua mensagem!"
              value={this.state.msgUser}
              onChange={this.onChangeInputMsg}
            />

          <img src={SendButton} className="botao" onClick={this.enviaMsg} />
          </form>
          <p>{listaDeMsgs}</p>
        </div>
      </div>
    )
  }
}

export default App;