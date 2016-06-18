import React, { Component } from 'react'
import 'whatwg-fetch'
import Clock from './Clock'
import { i18nGroup } from 'es2015-i18n-tag'

/**
 * __translationGroup: This variable can be used to group your translations by filename e.g. "Clock.js"
 * __translationGroup const will be injected by babel into each module and contains the filepath of the module relative to "groupDir" in ".babelrc"
 * Translation groups are optional. If "groupDir" is not set __translationGroup will be undefined!
 * you can set the i18nConfig({"group": __translationGroup}) before constructing your template literal or use i18n(__translationGroup)`Loading...` instead of i18n`Loading...`
 */
@i18nGroup(__translationGroup)
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
        let selector = (__DEV__) ? (
            <div>
                <select value={this.state.locale} onChange={this.handleChange}>
                    <option value="en-US">EN</option>
                    <option value="de-DE">DE</option>
                    <option value="es-ES">ES</option>
                </select>{this.state.loading ? this.i18n`Loading...` : false}
            </div>
        ) : null

        return (
            <div lang={this.state.locale}>
                { selector }            
                <Clock />
            </div>
        )
    }
}

export default App