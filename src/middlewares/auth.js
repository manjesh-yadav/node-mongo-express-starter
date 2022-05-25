const jwt = require('jsonwebtoken');

const config = require('../config/config');


const auth =  async (req, res, next) => {
        try {
            const authHeader = req.get('Authorization');
            let token = '';
            if (authHeader.startsWith("Bearer ")){
                token = authHeader.substring(7, authHeader.length);
                jwt.verify(token, config.jwt.secret, (err,
                    decoded) => {
                    if (err) {
                        return res.status(401).send("Authentication error");
                    }
                    req.user = decoded;
                    next();
                });
            } else {
                return res.status(401).send("Authentication error");
            }
        } catch (error) {
            return res.status(401).send("Authentication error");
        }

}

module.exports = auth;