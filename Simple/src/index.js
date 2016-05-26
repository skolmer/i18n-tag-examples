import $ from 'jquery'
import i18n from 'es2015-i18n-tag'

const user = 'Steffen'

$(document).ready(() => {
    $('#root').text(i18n`Hello ${user}`)
})