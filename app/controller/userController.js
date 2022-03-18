const userModel = require('../models/user')

module.exports={
    index:async(req,res) => {
        try {
            const users = await userModel.find()

            console.log(users);
            
            res.render('admin/user/index', {
                title: 'User',
                users
            });
        } catch (error) {
            console.log(error);
        }
    },

    create:async(req,res) => {
        try {
            const {name, email, phonenumber} =  req.body
            let user = await userModel({name, email, phonenumber})
            // console.log(user);
            await user.save();

            res.redirect('/user')
        } catch (error) {
            console.log(error);
        }
    },

    deleteUser:async(req,res) => {
        try {
            const {id}  = req.params
            const user = await userModel.findOneAndRemove({_id:id})
            // console.log(user);
            res.redirect('/user')
        } catch (error) {
            console.log(error);
        }
    }
}