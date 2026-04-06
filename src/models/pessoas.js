const mongoose = require('mongoose');

const Pessoas = mongoose.model('pessoas', {
    nomePessoas: String,
    idadePessoa: {
  type: Number,
  required: true,
  min: 0
},
 isActive: {
    type: Boolean,
    default: true
 },
    Items: { type: mongoose.Schema.Types.ObjectId, ref: 'Items' } 
});

module.exports = Person;