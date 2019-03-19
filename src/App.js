import React, { Component } from 'react';
import Membre from './components/Membre';
import Button from './components/Button';

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

    handleClick = (num) =>{
        const famille = { ... this.state.famille }
        famille.membre1.age += num
       this.setState({ famille })

    }

    handleChange = event =>{
        const famille = { ... this.state.famille }
        const nom = event.target.value
        console.log(nom)
        famille.membre1.nom = nom
       this.setState({ famille })

    }


  render() {
    const{ titre } = this.props
    return (
      <div className="App">
        <h1>{titre}</h1>

        <input value={famille.membre1.nom} onChange={this.handleChange} type='text' />

        <Membre
            age={this.state.famille.membre1.age}
            nom={this.state.famille.membre1.nom} />
        <Membre
            age={this.state.famille.membre2.age}
            nom={this.state.famille.membre2.nom} />
        <Membre
            age={this.state.famille.membre3.age}
            nom={this.state.famille.membre3.nom} />
          <Membre
              age={this.state.famille.membre4.age}
              nom={this.state.famille.membre4.nom}>
          </Membre>
          <Button vieillir={() => this.handleClick(4)} />

      </div>
    );
  }
}

export default App;
