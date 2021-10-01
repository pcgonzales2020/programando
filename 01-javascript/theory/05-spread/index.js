// ref: https://anamartinezaguilar.medium.com/spread-operator-1e6667da2830

// SPREAD ARRAY

// ex 1
const userService = require('./services/user.service');

const user1 = { id: 1 },
    user2 = { id: 2 },
    user3 = { id: 3 };

userService.batchCreate(user1, user2, user3);

// ex 2
const sum = require('./common/sum');

const total = sum(1, 2, 3, 4, 5);
console.log(total);

// SPREAD OBJECT
const user = {
    id: 1,
    name: 'Eduardo'
};

const courses = ['Math', 'English', 'How to kill VB'];

const userCourses = {
    ...user,
    courses
};

console.log(userCourses);

const report = [
    {
        ...user,
        courses
    }
];

console.log(report);