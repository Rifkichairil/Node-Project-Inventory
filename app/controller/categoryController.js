module.exports={
    index: async(req,res) => {
        try {
            res.render('admin/testing/index', {
                title: 'expressjs'
            })
        } catch (error) {
            console.log(error);
        }
    }
}