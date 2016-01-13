/*
 * tsveta : hsv.js
 * copyright (c) 2016 Susisu
 */

function endModule() {
    module.exports = HSV;
}

var utils = require("./utils.js");

function HSV(h, s, v) {
    if (!(this instanceof HSV)) {
        return new HSV(h, s, v);
    }
    this.h = utils.clipCircular(h, 0.0, 360.0);
    this.s = utils.clip(s, 0.0, 1.0);
    this.v = utils.clip(v, 0.0, 1.0);
}

HSV.prototype = Object.create(Object.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: HSV
    },
    toString: {
        writable    : true,
        configurable: true,
        value: function () {
            return "HSV(" + this.h.toString() + ","
                    + this.s.toString() + ","
                    + this.v.toString() + ")";
        }
    }
});

endModule();
