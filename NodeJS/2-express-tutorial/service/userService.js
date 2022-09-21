const { people } = require('../data')

const getAllUsers = () => {
    for (let i = 0; i < 100000; i++) {
        console.log(`${i}`)
    }
    return Promise.resolve(people)
}

const getUsersById = (id) => Promise.resolve(people.find(user => user.id = id))

module.exports = {
    getAllUsers,
    getUsersById
}