const recordDao = require('./dao');

const addRecord = (req, res) => {
    let record = req.body;
    recordDao.create(record).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const findRecordById = (req, res) => {
    recordDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const deleteById = (req, res) => {
    recordDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Record deleted successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const updateRecord = (req, res) => {
    recordDao.updateRecord(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Record updated successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

const findRecords = (req, res) => {
    recordDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    addRecord,
    findRecords,
    findRecordById,
    updateRecord,
    deleteById
};