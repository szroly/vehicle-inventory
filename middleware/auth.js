const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (req, res, next) => {
        const authHeader = req.header('Authorization');
        const token = authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Access denied. No token provided.',
                data: null
            });
        }

        
        const secretKey = process.env.SECRET_KEY

        console.log({token});

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Invalid token.',
                    data: null
                });
            }

            req.user = user;
            next();
        });
    }
};
