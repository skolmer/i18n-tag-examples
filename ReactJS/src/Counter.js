import React, { Component } from 'react'
import _ from 'lodash'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0, locale: 'en-US' }
        this.interval = setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState({
            counter: _.add(this.state.counter, this.props.increment)
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>                
                <h1 style={{ color: this.props.color }}>
                     { i18n`Counter (${this.props.increment}): ${this.state.counter}` }
                </h1>
            </div>
        )
    }
}

Counter.propTypes = {
    'increment': React.PropTypes.number.isRequired,
    'color': React.PropTypes.string.isRequired
}

export default Counter