// all falsy values in javascript
const falsyValues = [false, '', '', 0, -0, 0n, NaN, null, undefined];

console.log('--- FALSY VALUES ---');

falsyValues.forEach(x => {
    console.log(`${x} =>`, Boolean(x));
});

// any other values always will be true

console.log('--- EXAMPLES ---');
console.log('01. false ? true : false =>', false ? true : false);

// check this part if you don't understand
// if(false) {
//     return false;
// } else {
//     return true;
// }

console.log('02. "" ? true : false =>', '' ? true : false);
console.log('03. 0 ? true : false =>', 0 ? true : false);
console.log('04. null || undefined || NaN ? true : false =>', null || undefined || NaN ? true : false);
console.log('05. {} ? true : false =>', {} ? true : false);
console.log('06. [] ? true : false =>', [] ? true : false);

// reference link
// https://medium.com/jspoint/truthy-vs-falsy-values-in-javascript-b9d9ada08bae
