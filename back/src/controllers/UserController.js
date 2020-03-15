const UserModel = require('../models/User')

module.exports = {

    create: (req, res) => {
        let user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        user.save()
        .then(result => {
            res.json({ success: true, result: result })
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    update: (req, res) => {
        UserModel.update({_id: req.body._id}, req.body)
        .then(user => {
            if(!user) res.json({ success: false, result: "User does not exists." })

            res.json(user)
        })
        .catch(err => {
            res.json({ success: false, result: err })
        })
    },

    retrieve: (req, res) => {
        UserModel.find({_id: req.params.id} = {})
        .then(result => {
            if(!result) res.json({ success: false, result: "No results found." })

            res.json({ success: true, result: result })
        })
        .catch(err => res.json({ success: false, result: err }))
    },

    delete: (req, res) => {
        UserModel.remove({_id: req.body._id})
        .then(result => {
            if(!result) res.json({ success: false, result: "No user found with the specified Id." })

            res.json({ success: true, result: result })
        })
        .catch(err => res.json({ success: false, result: err }))
    }

}