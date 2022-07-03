const router = require('express').Router()

router.get('/', (req,res) => {
  let places = [{
        name: 'jojos',
        city: 'charlotte',
        state: 'NC',
        food: 'Chinese',
        pic: 'http://placekitten.com/250/250'
    },{
        name: 'dominoes',
        city: 'pineville',
        state: 'NC',
        food: 'pizza',
        pic: 'http://placekitten.com/250/250'
    },{
        name: 'ichiban',
        city: 'brooklyn',
        state: 'NY',
        food: 'ramen',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', {places})
})
module.exports = router
