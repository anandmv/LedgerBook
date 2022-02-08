const db = require('../../models');
const Book = db.Book;

const findAll = () => {
    return Book.findAll();
}

const findById = (id) => {
    return Book.findByPk(id);
}

const deleteById = (id) => {
    return Book.destroy({ where: { id: id } });
}

const create = (gig) => {
    var newRecord = new Book(gig);
    return newRecord.save();
}

const updateRecord = (data, id) => {
    return Book.update(data, { where: { id: id } });
}
module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    updateRecord
};