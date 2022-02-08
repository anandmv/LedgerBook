const accountsDao = require('./dao');

const addAccount = (req, res) => {
    let record = req.body;
    accountsDao.create(record).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const findAccountById = (req, res) => {
    accountsDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const deleteById = (req, res) => {
    accountsDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Accounts data deleted successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const updateAccount = (req, res) => {
    accountsDao.updateAccount(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Accounts data updated successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const findAccounts = (req, res) => {
    accountsDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    addAccount,
    findAccounts,
    findAccountById,
    updateAccount,
    deleteById
};