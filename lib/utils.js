/*
 * tsveta : utils.js
 * copyright (c) 2016 Susisu
 */

function endModule() {
    module.exports = Object.freeze({
        clip        : clip,
        clipCircular: clipCircular
    });
}

function clip(value, min, max) {
    return value > max ? max
         : value < min ? min
         : value;
}

function clipCircular(value, min, max) {
    var d = max - min;
    return ((value - min) % d + d) % d + min;
}

endModule();
