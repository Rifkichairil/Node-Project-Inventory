// variabkle 
const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Nama harus diisi']
    },
    email: {
        type: String,
        require: [true, 'Email harus diisi']
    },
    phonenumber: {
        type: Number,
        require: [true, 'Nomor Hp harus diisi']
    },
    status:{
        type: Number,
        enum: [0, 1],
        default: 0,
    },
    
}, { timestamps: true})

module.exports = mongoose.model('User', userSchema)