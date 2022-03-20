const bookingModel = require("../models/booking");
const itemModel = require("../models/item");
const userModel = require("../models/user");

module.exports = {
    index: async(req,res) => {
        try {
            const booking = await bookingModel.find().populate('user').populate('item')
            // console.log(booking);
            res.render('admin/booking/index',{
                title: 'Peminjaman',
                booking
            })
        } catch (error) {
            console.log(error);
        }
    },
    viewCreate: async(req, res) => {
        try {
            const users = await userModel.find()
            const items = await itemModel.find()
            res.render('admin/booking/create', {
                users,
                items
            })
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate: async(req, res) => {
        try {
            const { user, item, status, start_date, end_date } = req.body
            let booking = await bookingModel({user, item, status, start_date, end_date})
            console.log(">>>>>>>>>> Booking");
            console.log(booking.item);
            await booking.save();

            // Pengurangan Data ITem
            let items = await itemModel.findByIdAndUpdate(
                {_id:booking.item},
                {$inc: { quantity: -1}}
                )
            console.log(">>>>>>>>>> Items");
            console.log(items);

            
            res.redirect('/booking')
        } catch (error) {
            console.log(error);
        }
    }
}