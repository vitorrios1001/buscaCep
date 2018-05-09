import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card } from 'antd';

import minhaFuncao from '../actions';

class App extends Component {

  state = {
    cep: '',
    searching: true
  }

  findCep = () => {
    this.props.minhaFuncao(this.state.cep);
  }

  enter = (e) => {
    console.log(e);
    if (e.charCode === 13)
      this.findCep();
  }

  render() {
    return (
      <div className="div" id="container" >
        <Card id="cardMain" title="Consulta de CEP" style={{ width: 500 }}>
          <h3>
            Digite seu Cep:
            <input
              value={this.state.cep}
              onChange={event => this.setState({ cep: event.target.value })}
              onKeyPress={event => this.enter(event)}
            />

            <Button
              type="primary"
              shape="circle"
              icon="search"
              onClick={() => this.findCep()}
            />

          </h3>
          <div style={{ alignContent: "left" }}>
            <p>Logradouro: {this.props.teste.meuCep.logradouro}</p>
            <p>Complemento: {this.props.teste.meuCep.complemento}</p>
            <p>Bairro: {this.props.teste.meuCep.bairro}</p>
            <p>Cidade: {this.props.teste.meuCep.localidade}</p>
            <p>Estado: {this.props.teste.meuCep.uf}</p>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({ teste: state.teste });

const mapDispatchToProps = dispatch => bindActionCreators({
  minhaFuncao
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

