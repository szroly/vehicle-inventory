const userModel = require('../models/users')
const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken')

module.exports = {
    
    auth: async (req, res, next) => {
        try {
            const userInfo = await userModel.findOne({
                email: req.body.email,
            });
            console.log({userInfo});
    
            if (!userInfo) {
                return res.json({
                    status: "error",
                    message: "User not found!",
                    data: null
                });
            }
    
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                // Replace 'your-secret-key' with your actual secret key
                const secretKey = process.env.SECRET_KEY || 'testkey'
    
                const token = jwt.sign({
                    id: userInfo._id
                }, secretKey, { expiresIn: '1h' });
    
                res.json({
                    status: "success",
                    message: "User found!",
                    data: { userId: userInfo._id, email: userInfo.email, token: token }
                });
            } else {
                res.json({
                    status: "error",
                    message: "Invalid email/password!",
                    data: null
                });
            }
        } catch (err) {
            next(err);
        }
    }
    
}