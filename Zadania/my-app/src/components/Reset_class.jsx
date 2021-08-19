import { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.reset()
    }

    render() {
        return (
            <div>
                <button onClick={this.props.reset}>reset</button>
            </div>
        )
    }
}

export default Reset;
