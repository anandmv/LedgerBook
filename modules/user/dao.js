const db = require('../../models');
const User = db.User;

const findAll = () => {
    return User.findAll();
}

const findById = (id) => {
    return User.findByPk(id);
}

const deleteById = (id) => {
    return User.destroy({ where: { id: id } });
}

const create = (gig) => {
    var newUser = new User(gig);
    return newUser.save();
}

const updateUser = (data, id) => {
    return User.update(data, { where: { id: id } });
}
module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    updateUser
};