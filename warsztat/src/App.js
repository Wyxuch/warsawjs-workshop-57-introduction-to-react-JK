import React from "react";

import Navigation from "./components/Navigation";
import Game from "./components/Game";

import './App.scss';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          rows: 3,
          columns: 9,
          bombs: 1,
      }

      this.set = this.set.bind(this)
  }

  set(value, attribute) {
      this.setState({...this.state, [attribute]: value})
      console.log(this.state)
  }

  render() {
      return (
          <div className="App">
              <Navigation
                  set={this.set}
                  rows={this.state.rows}
                  columns={this.state.columns}
                  bombs={this.state.bombs}
              />
              <div className={'gameWrapper'}>
                  <Game />
              </div>
          </div>
      );
  }
}

export default App;
