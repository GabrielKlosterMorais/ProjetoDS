const mongoose = require('mongoose');

const Items = mongoose.model('Items', {
    name: String,
    Value: Number,
    type: String, //qual tipo ele é exemplo: jogo , filme ou algo assim
    real: Boolean,
    isActive: {
    type: Boolean,
    default: true
},

});


module.exports = Person;