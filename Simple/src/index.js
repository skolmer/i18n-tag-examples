import $ from 'jquery'
import i18n, { i18nConfig } from 'es2015-i18n-tag'

const user = 'Steffen'

$(document).ready(() => {
    $('#localeSelector').change((event) => {
        const locale = $(event.target).val();
        if (locale !== 'en-US') {
            $.getJSON(`translations/translation.${locale.substr(0, 2)}.json`, function (data) {
                i18nConfig({ locales: locale, translations: data });
                drawText();
            });
        } else {
            i18nConfig({ locales: 'en-US', translations: [] });
            drawText();
        }
    })

    const drawText = function () {
        $('#root').text(i18n`Hello ${user}`)
    }

    drawText();
})