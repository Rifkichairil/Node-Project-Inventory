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
    }
}