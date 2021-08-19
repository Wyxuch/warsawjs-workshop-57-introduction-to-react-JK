import React from 'react';
import Fruit from "./components/Fruit";
import Reset from "./components/Reset";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sum: 0
        };

        this.setSum = this.setSum.bind(this)
        this.resetSum = this.resetSum.bind(this)
    }

    fruits = ['orange', 'apple', 'plum', 'tomato', 'cucumber'];

    setSum(price) {
        this.setState({sum: this.state.sum + price})
    }

    resetSum() {
        this.setState({sum: 0})
    }

    render() {
        return (
            <div>
                {/*zadanie2*/}
                <div style={{backgroundColor: 'tomato', width: '100px', height: '100px'}}>Zadanie2</div>

                 {/*zadanie1*/}
                <h3>Zadanie1</h3>
                <ul>
                    {this.fruits.map(el => (
                        <li key={`list_${el}`}>
                            {el}
                        </li>
                    ))}
                </ul>

                {/*zadanie3*/}
                <h3>Zadanie3</h3>
                {this.fruits.map(el => (
                    <Fruit key={el} fruit={el} setSum={this.setSum}/>
                ))}

                {/*zadanie4*/}
                <p>{this.state.sum}</p>

                {/*zadanie5*/}
                <Reset reset={this.resetSum}/>
            </div>
        )
    }
}

export default App;
