const React = require('react')
const Def = require('../default')

function newForm () {
    return(
        <Def>
            <main>
                <h1>Add a new place :D</h1>
                <form method='POST' action='/places'>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' type='text' id='name' name='name' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control' type='url' id='pic' name='pic'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>Place City</label>
                        <input className='form-control' type='text' id='city' name='city'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Place State</label>
                        <input className='form-control' type='text' id='state' name='state'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Place Cuisines</label>
                        <input className='form-control' type='text' id='cuisines' name='cuisines' required/>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place'></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm