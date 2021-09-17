var today = new Date();
var arrival = new Date(2021,11,15,14,14,00);
var diffMs = (arrival - today); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
var diffSec = Math.round(((diffMs % 86400000) % 3600000) / (60000*60000)); // seconds
console.log(diffDays + ":" + diffHrs + ":" + diffMins + ":" + diffSec);
