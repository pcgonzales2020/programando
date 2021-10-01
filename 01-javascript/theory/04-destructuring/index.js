/* eslint-disable no-unused-vars */

// OBJECT DESTRUCTURING
const { create, update, remove } = require('./services/user.service');

// destructring as parameter
const contextPersistence = require('./common/context.persistence');

contextPersistence({
    server: 'localhost',
    username: 'root',
    password: '123456',
    port: 3000
});

// ARRAY DESTRUCTURING
const [server, username, acessToken, port] = require('./common/email.config');

// other way ignoring some indexes that we don't want to use
const [, username2,, port2] = require('./common/email.config');