const userDao = require('./dao');

const addUser = (req, res) => {
    let record = req.body;
    userDao.create(record).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const findUserById = (req, res) => {
    userDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const deleteById = (req, res) => {
    userDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User deleted successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const updateUser = (req, res) => {
    userDao.updateUser(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User updated successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const findUsers = (req, res) => {
    userDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    addUser,
    findUsers,
    findUserById,
    updateUser,
    deleteById
};