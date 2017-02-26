import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: parseInt(props.counterValue)
        }
        console.log(props)
    }

    componentDidMount () {
    }

    change() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }))
    }

    getText() {
        return `Test ${this.state.counter}`;
    }

    render() {
        return (
            <button onClick={(e) => this.change(e)}>{this.getText()}</button>
        )
    }
}
