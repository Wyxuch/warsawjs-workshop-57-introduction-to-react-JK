import React from 'react';

class Fruit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    randomPrice = Math.floor(Math.random() * (100 - 1) + 1)

    handleClick() {
        console.log(this.randomPrice)
        this.props.setSum(this.randomPrice)
    }

    render() {
        return (
            <div>
                {this.props.fruit}
                <br />
                <button onClick={this.handleClick}>kup</button>
                <br />
                <br />
            </div>
        )
    }
}

export default Fruit;
