import React, { Component } from 'react'
import 'whatwg-fetch'
import { NICE, SUPER_NICE } from './colors'
import Counter from './Counter'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { locale: 'en-US' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const locale = event.target.value
        if (locale !== 'en-US') {
            fetch(`translations/translation.${locale.substr(0, 2)}.json`).then(function (response) {
                return response.json()
            }).then(function (json) {
                i18nConfig({ locales: locale, translations: json })
            })
        } else {
            i18nConfig({ locales: 'en-US', translations: [] })
        }
        this.setState({ locale });
    }

    render() {
        return (
            <div lang={this.state.locale}>
                <select value={this.state.locale} onChange={this.handleChange}>
                    <option value="en-US">EN</option>
                    <option value="de-DE">DE</option>
                </select>
                <Counter increment={1} color={NICE} />
                <Counter increment={5} color={SUPER_NICE} />
            </div>
        )
    }
}

export default App