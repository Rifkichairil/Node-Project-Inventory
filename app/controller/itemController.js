const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
const itemModel = require('../models/item')

module.exports={
    index: async(req,res) => {
        try {
            const item = await itemModel.find()
            res.render('admin/item/index', {
                title: 'Item',
                item
            })
        } catch (error) {
            console.log(error);
        }
    },
    viewCreate: async(req,res) => {
        try {
            res.render('admin/item/create');
        } catch (error) {
            console.log(error);
        }
    },
    actionCreate:async(req,res) => {
        try {
            const { kode, type, title, description, quantity } = req.body
            let item = await itemModel({kode, type, title, description, quantity}) 
            console.log(item);
            await item.save()
            res.redirect('/item')
        } catch (error) {
            console.log(error);
        }
    },
    actionDelete:async(req,res) => {
        try {
            const { id } = req.params
            let item = await itemModel.findOneAndRemove({_id:id})
            res.redirect('/item')
        } catch (error) {
            console.log(error);
        }
    }

}