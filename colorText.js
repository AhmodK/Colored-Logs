/*

Created by Ahmed
Free to use/fork. Although there are already many nodejs APIs you could use.

This only supports colorded text, not background

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

Black = "\x1b[30m"
Red = "\x1b[31m"
Green = "\x1b[32m"
Yellow = "\x1b[33m"
Blue = "\x1b[34m"
Magenta = "\x1b[35m"
Cyan = "\x1b[36m"
White = "\x1b[37m"
*/

let colorFunctions = {

    log: function(logItem) {
        console.log(`\x1b[0m${logItem}\x1b[0m`);
    },

    bright: function(logItem) {
        console.log(`\x1b[1m${logItem}\x1b[0m`);
    },

    dim: function(logItem) {
        console.log(`\x1b[2m${logItem}\x1b[0m`);
    },

    underLine: function(logItem) {
        console.log(`\x1b[4m${logItem}\x1b[0m`);
    },

    blink: function(logItem) {
        console.log(`\x1b[5m${logItem}\x1b[0m`);
    },

    reverse: function(logItem){
        console.log(`\x1b[7m${logItem}\x1b[0m`);
    },

    hidden: function(logItem) {
        console.log(`\x1b[8m${logItem}\x1b[0m`);
    },

    black: function(logItem) {
        console.log(`\x1b[30m${logItem}\x1b[0m`)
    },

    red: function(logItem) {
        console.log(`\x1b[31m${logItem}\x1b[0m`)
    },

    green: function(logItem) {
        console.log(`\x1b[32m${logItem}\x1b[0m`)
    },

    yellow: function(logItem) {
        console.log(`\x1b[33m${logItem}\x1b[0m`)
    },

    blue: function(logItem) {
        console.log(`\x1b[34m${logItem}\x1b[0m`)
    },

    magenta: function(logItem) {
        console.log(`\x1b[35m${logItem}\x1b[0m`)
    },

    cyan: function(logItem) {
        console.log(`\x1b[36m${logItem}\x1b[0m`)
    },

    white: function(logItem) {
        console.log(`\x1b[37m${logItem}\x1b[37m`)
    }
}

module.exports = colorFunctions;