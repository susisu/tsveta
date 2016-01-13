/*
 * tsveta : rgb.js
 * copyright (c) 2016 Susisu
 */

function endModule() {
    module.exports = RGB;
}

var utils = require("./utils.js");

function RGB(r, g, b) {
    if (!(this instanceof RGB)) {
        return new RGB(r, g, b);
    }
    this.r = utils.clip(r, 0.0, 1.0);
    this.g = utils.clip(g, 0.0, 1.0);
    this.b = utils.clip(b, 0.0, 1.0);
}

RGB.prototype = Object.create(Object.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: RGB
    },
    toString: {
        writable    : true,
        configurable: true,
        value: function () {
            return "RGB(" + this.r.toString() + ","
                    + this.g.toString() + ","
                    + this.b.toString() + ")";
        }
    }
});

endModule();
