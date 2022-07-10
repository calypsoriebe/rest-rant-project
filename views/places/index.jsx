//Im not sure if this was what it wanted for part 5, it said to redo 
const React = require('react')
const Def = require('../default')


function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className='col-sm-6'>
        <h2>{place.name}</h2>
        <p class='text-center'>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className='text-center'>
          Locates in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES TO RANT OR RAVE FOR</h1>
            <div class='row'>
              {placesFormatted}
            </div>
        </main>
    </Def>
)
}


module.exports = index