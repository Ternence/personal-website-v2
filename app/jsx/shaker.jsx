import React from 'react';

export default class Shaker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shaking: false
        }
    }

    componentDidMount () {
        this.lastMoved = 0;
        this.turnOffShakeCallback = null;
    }

    handleMove () {
        // if (this.turnOffShakeCallback) {
        //     clearTimeout(this.turnOffShakeCallback)
        // }
        // this.turnOffShakeCallback = setTimeout(() => {

        // }, 3000)
    }

    getClassname() {
        return '';
        // if (this.state.shaking) {
        //     return 'shake-slow'
        // } else {
        //     return '';
        // }
    }

    render() {
        return (
            <div onMouseMove={(e) => this.handleMove()} className={this.getClassname()}>{this.props.children}</div>
        )
    }
}
