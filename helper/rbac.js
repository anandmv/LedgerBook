const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRoles = { 'Admin': "Admin", 'Accountant': "Accountant" };
const rbac = (role) => (req, res, next) => {
    const { user } = req;
    console.log(user)
    if (!user) return res.sendStatus(401);
    if (Object.keys(UserRoles).indexOf(role) == -1) return res.sendStatus(403);
    if(user.roles == UserRoles.Admin) return next();
    if(user.roles != role) return res.sendStatus(403);
    return next();
}

module.exports = {
    rbac,
    UserRoles
};