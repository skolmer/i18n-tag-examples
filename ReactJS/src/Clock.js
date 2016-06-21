import React, { Component } from 'react'
import { i18nGroup } from 'es2015-i18n-tag'

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

/**
 * __translationGroup: This variable can be used to group your translations by filename e.g. "Clock.js"
 * __translationGroup const will be injected by babel into each module and contains the filepath of the module relative to "groupDir" in ".babelrc"
 * Translation groups are optional. If "groupDir" is not set __translationGroup will be undefined!
 * you can set the i18nConfig({"group": __translationGroup}) before constructing your template literal or use i18n(__translationGroup)`Loading...` instead of i18n`Loading...`
 */
export default i18nGroup(__translationGroup)(Clock)