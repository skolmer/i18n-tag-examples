import i18n from 'es2015-i18n-tag'
import React, { Component } from 'react'
import Clock from '../../Library/dist/index.js'
import '../../Library/dist/es/index.js'

export default class App extends Component {
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
                <div>
                    <select value={this.state.locale} onChange={this.handleChange}>
                        <option value="en-US">EN</option>
                        <option value="de-DE">DE</option>
                    </select>{this.state.loading ? i18n`Loading...` : false}
                </div>      
                <p>{ i18n`This clock is imported with spain translations and should not change language` }</p>
                <Clock />
                <p>{ i18n`This clock uses application translations` }</p>
                <div>
                    <p>{ i18n`Date: ${new Date()}:t(D)` }</p>
                    <h1>
                        { i18n`Time: ${new Date()}:t(T)` }
                    </h1>
                </div>
            </div>
        )
    }
}