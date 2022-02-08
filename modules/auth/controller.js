const authDao = require('./dao');

const login = async (req, res) => {
    let { email, password } = req.body;
    if(!email || !password) res.sendStatus(401);
    const { token, user } = await authDao.login(email, password);
    if(!token) return res.sendStatus(401);
    res.send({token, user});
}

const signup = async (req, res) => {
    let { name, email, password } = req.body;
    const { token, user } = await authDao.signup(name, email, password);
    if(!token) return res.sendStatus(403);
    res.send({token, user});
}

module.exports = {
    login,
    signup
}