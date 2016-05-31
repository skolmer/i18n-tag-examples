import React, { Component } from 'react'
import DateLabel from './DateLabel'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.interval = setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>    
            <DateLabel date={this.state.date} />    
                <h1>
                     { i18n`Time: ${this.state.date}:t(T)` }
                </h1>
            </div>
        )
    }
}

export default Clock