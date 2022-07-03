const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUNDDD</h1>
                <p>Ayo this is not a page</p>
            </main>
        </Def>
    )
}

module.exports = error404