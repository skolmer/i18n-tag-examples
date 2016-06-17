import React, { Component } from 'react'

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
        /**
         * This variable can be used to group your translations by filename e.g. "Clock.js"
         * __translationGroup const will be injected by babel into each module and contains the filepath of the module relative to "groupDir" in ".babelrc"
         */
        i18nConfig({ group: __translationGroup })
        return (
            <div>
                <p>{ i18n`Date: ${this.state.date}:t(D)` }</p>
                <h1>
                    { i18n`Time: ${this.state.date}:t(T)` }
                </h1>
            </div>
        )
    }
}

export default Clock