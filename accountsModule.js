// accountsModule.js
const faker = require('faker');

function getAddresses() {
  // Generate mock addresses using faker.js
  const addresses = Array.from({ length: 5 }, () => faker.internet.ipv6());
  return addresses;
}

module.exports = { getAddresses };
