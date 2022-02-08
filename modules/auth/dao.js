const db = require('../../models');
const jwt = require('jsonwebtoken');
const User = db.User;
require('dotenv').config()

function generateAccessToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if(!user || !user.validPassword(password)){
        return { token: false };
    }   
    const userJson = user.toJSON();
    const token = generateAccessToken({ ...userJson, password: undefined });
    return { token, user: userJson};
    
}

const signup = async (name, email, password) => {
    try{
    const user = await User.create({ name, email, password });
    const userJson = user.toJSON();
    const token = generateAccessToken({ ...userJson, password: undefined });
    return { token, user: userJson };
    } catch( e ) {
        return e;
    }
}

module.exports = {
    login,
    signup
}