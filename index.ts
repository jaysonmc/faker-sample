const { faker } = require('@faker-js/faker');

type User = {
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  birthdate: Date,
  sin: string,
}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
    sin: `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`,
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 10,
});

console.dir(USERS)