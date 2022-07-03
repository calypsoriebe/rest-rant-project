const React = require('react')

function Def (html) {
    return(
        <html>
            <head>
                <title>Slay title :D</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def