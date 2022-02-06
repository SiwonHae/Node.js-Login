"use strict";

class UserStorage {
    static #users = {
        id: ["test1", "회사1", "팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["테스트", "회사1", "팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;