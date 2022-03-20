// variabkle 
const mongoose = require('mongoose')
let itemSchema = mongoose.Schema({
    kode: {
        type: String,
        require: [true, 'Kode harus diisi']
    },
    type: {
        type: String,
        require: [true, 'Tipe harus diisi']
    },
    title: {
        type: String,
        require: [true, 'title harus diisi']
    },
    description: {
        type: String,
        require: [true, 'description harus diisi']
    },
    quantity: {
        type: Number,
        require: [true, 'quantity harus diisi']
    },
    
}, { timestamps: true})

module.exports = mongoose.model('Item', itemSchema)