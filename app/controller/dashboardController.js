module.exports={
    index : async(req,res) => {
        try {
            res.render('admin/dashboard/index', {
                title: 'dashboard'
            })
        } catch (error) {
            console.log(error);
        }
    }
}