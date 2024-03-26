"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS = exports.createRandomUser = void 0;
var faker = require('@faker-js/faker').faker;
function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        sin: "".concat(Math.floor(100 + Math.random() * 900), "-").concat(Math.floor(100 + Math.random() * 900), "-").concat(Math.floor(100 + Math.random() * 900)),
    };
}
exports.createRandomUser = createRandomUser;
exports.USERS = faker.helpers.multiple(createRandomUser, {
    count: 10,
});
console.dir(exports.USERS);
