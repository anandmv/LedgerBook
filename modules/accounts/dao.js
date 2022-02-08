const db = require('../../models');
const Account = db.Account;

const findAll = () => {
    return Account.findAll();
}

const findById = (id) => {
    return Account.findByPk(id);
}

const deleteById = (id) => {
    return Account.destroy({ where: { id: id } });
}

const create = (gig) => {
    var newAccount = new Account(gig);
    return newAccount.save();
}

const updateAccount = (data, id) => {
    return Account.update(data, { where: { id: id } });
}
module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    updateAccount
};