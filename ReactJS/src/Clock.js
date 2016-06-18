import React, { Component } from 'react'
import { i18nGroup } from 'es2015-i18n-tag'

@i18nGroup(__translationGroup)
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
                <p>{ this.i18n`Date: ${this.state.date}:t(D)` }</p>
                <h1>
                    { this.i18n`Time: ${this.state.date}:t(T)` }
                </h1>
            </div>
        )
    }
}

export default Clock