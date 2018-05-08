import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';

import minhaFuncao from '../actions';

class App extends Component {

  state = {
    cep: ''
  }

  enter = (e) => {
    console.log(e);
    if(e.charCode === 13)
     this.props.minhaFuncao(this.state.cep);
  }

  render() {
    return (
      <div className="div">

        <h2>
          Digite seu Cep:
          <input
            value={this.state.cep}
            onChange={event => this.setState({ cep: event.target.value })}
            onKeyPress={ event => this.enter(event) }
          />                    
          <input type="submit" value="Buscar CEP" onClick={ () => this.props.minhaFuncao(this.state.cep) } /> 
        </h2>        
        <small><br />
          {this.props.teste.meuCep.logradouro}
        </small>
        <small><br />
          {this.props.teste.meuCep.bairro}
        </small>
        <small><br />
          {this.props.teste.meuCep.localidade}-{this.props.teste.meuCep.uf}
        </small>
      </div>

    )
  }
}

const mapStateToProps = state => ({ teste: state.teste });

const mapDispatchToProps = dispatch => bindActionCreators({
  minhaFuncao
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

