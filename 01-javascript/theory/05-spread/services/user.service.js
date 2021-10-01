class UserService {
    getAll() {

    }

    getById(id) {

    }

    create(user) {
        console.log(`Hola ${user.name}`);
    }

    batchCreate(...users) {

    }

    update(id, user) {

    }

    remove(id) {

    }
}

module.exports = new UserService();