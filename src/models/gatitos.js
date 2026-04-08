const mongoose = require('mongoose');

const Items = mongoose.model('Items', {
    name: String,
    idGato: Number,
    racaGato: String, 
    pessoaTemGato: Boolean,
    isActive: {
    type: Boolean,
    default: true
},

});


module.exports = Person;