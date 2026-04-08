const mongoose = require('mongoose');

const Gatitos = mongoose.model('Items', {
    nameGato: String,
    idGato: Number,
    racaGato: String, 
    pessoaTemGato: Boolean,
    isActive: {
    type: Boolean,
    default: true
},

});


module.exports = Person;