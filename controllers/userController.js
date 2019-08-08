// Import User schema/model
User = require('../Database/Schemas/User');
const express = require("express");
const router = express.Router();

exports.index = async (req, res) => {
    const users = await User.find();
    res.send(users);
}

exports.new =  async (req, res) => {
    let user = new User();
    console.log(req.body);
    if (Object.keys(req.body).length > 0) {
        const {name, password, email} = req.body;
        if (!name || !password || !email) {
            return res.status(400).send({
                code: '02',
                message: 'Invalid request body'
            })
        }
        try {
            user.username = name;
            user.password = password;
            user.email = email;
            user.role = 'user';
            await user.save();
            res.send(user);
        } catch (err) {
            if (err.code === 11000) {
                res.status(400).send({
                code: '01',
                message: `user  '${email}' already exists`
            })
        } else {
            res.send({
                code: '02',
                message: err
            })
        }
        }
        
    }
    
}
// router.get('/', async (req, res) => {
    
// })
