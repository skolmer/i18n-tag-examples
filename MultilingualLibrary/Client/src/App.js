import React, { Component } from 'react'
import Clock from '../../Library/dist/index.js'
import '../../Library/dist/de/index.js'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>         
                <Clock />
            </div>
        )
    }
}