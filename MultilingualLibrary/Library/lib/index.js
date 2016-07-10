import 'es2015-i18n-tag'
import React, { Component } from 'react'

@i18nGroup('my-lib')
export default class Clock extends Component {
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
                <p>{ this.i18n`Date: ${this.state.date}:t(D)` }</p>
                <h1>
                    { this.i18n`Time: ${this.state.date}:t(T)` }
                </h1>
            </div>
        )
    }
}