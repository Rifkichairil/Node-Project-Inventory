// variabkle 
const mongoose = require('mongoose')
let bookingSchema = mongoose.Schema({
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    item: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    status: {
        type: String,
        enum: [0, 1],
        default: 1,
    },
    start_date: {
        type: String,
        require: [true, 'Waktu pinjam harus diisi']
    },
    end_date: {
        type: String,
        require: [true, 'Waktu pengembalian harus diisi']
    },
    
}, { timestamps: true})

module.exports = mongoose.model('Booking', bookingSchema)