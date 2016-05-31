import React, { Component } from 'react'
import 'whatwg-fetch'
import Clock from './Clock'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { locale: 'en-US', loading: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const locale = event.target.value
        if (locale !== 'en-US') {
            this.setState({ loading: true });
            fetch(`translations/translation.${locale.substr(0, 2)}.json`).then((response) => {                
                return response.json()
            }).then((json) => {
                i18nConfig({ locales: locale, translations: json })
                this.setState({ loading: false })
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
                    <option value="es-ES">ES</option>
                </select>{this.state.loading ? 'Loading...' : false}                
                <Clock />
            </div>
        )
    }
}

export default App