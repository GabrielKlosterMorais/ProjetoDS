const mongoose = require('mongoose');

const Pessoas = mongoose.model('pessoas', {
    name: String,
    idadePessoa: Number
//  isActive: {
//     type: Boolean,
//     default: true
//  },
   //  Items: { type: mongoose.Schema.Types.ObjectId, ref: 'Items' } 
});

module.exports = Pessoas;