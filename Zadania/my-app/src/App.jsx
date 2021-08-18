import React from 'react';
import './App.css';

// Stwórz komponent App

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div style={{backgroundColor: 'navy', width: '100vw', height: '100vh'}}>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

export default App;
