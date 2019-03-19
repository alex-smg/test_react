import React, { Component } from 'react';
import Membre from './components/Membre';

import './App.css';

const famille = {

    membre1: {

        nom:'Jean yve',
        age: 27
    },
    membre2: {

        nom:'tod',
        age: 12
    },
    membre3: {

        nom:'zac',
        age: 30
    },
    membre4: {

        nom:'michou',
        age: 65
    }
}

class App extends Component {

    state = {
        famille
    }

    handleClick = () =>{
        const famille = { ... this.state.famille }
        famille.membre1.age +=1
       this.setState({ famille })

    }
  render() {
    const{ titre } = this.props
    return (
      <div className="App">
        <h1>{titre}</h1>
        <Membre
            age={this.state.famille.membre1.age}
            nom={this.state.famille.membre1.nom} />
        <Membre
            age={this.state.famille.membre2.age}
            nom="Tod" />
        <Membre
            age={this.state.famille.membre3.age}
            nom="Mike" />
          <Membre
              age={this.state.famille.membre4.age}
              nom="Michou">
              Hello
          </Membre>

          <bouton onClick={this.handleClick}>
              Vieillir
          </bouton>
      </div>
    );
  }
}

export default App;
