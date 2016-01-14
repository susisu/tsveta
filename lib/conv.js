/*
 * tsveta : conv.js
 * copyright (c) 2016 Susisu
 */

function endModule() {
    module.exports = Object.freeze({
        rgb2hsv: rgb2hsv,
        hsv2rgb: hsv2rgb
    });
}

var RGB = require("./rgb.js");
var HSV = require("./hsv.js");

function rgb2hsv(rgb) {
    var max = Math.max(rgb.r, rgb.g, rgb.b),
        min = Math.min(rgb.r, rgb.g, rgb.b),
        s   = max == 0.0 ? 0.0 : max,
        h   = max == min   ? 0.0
            : min == rgb.b ? 60.0 * (rgb.g - rgb.r) / (max - min) + 60.0
            : min == rgb.r ? 60.0 * (rgb.b - rgb.g) / (max - min) + 180.0
            : 60.0 * (rgb.r - rgb.b) / (max - min) + 300.0;
    return new HSV(h, s, max);
}

function hsv2rgb(hsv) {
    var h_ = hsv.h / 60.0,
        c  = hsv.s * hsv.v,
        x  = c * (1.0 - Math.abs(h_ % 2.0 - 1.0)),
        r  = hsv.v - c,
        g  = hsv.v - c,
        b  = hsv.v - c;
    if (h_ < 1.0) {
        r += c;
        g += x;
    }
    else if (h_ < 2.0) {
        r += x;
        g += c;
    }
    else if (h_ < 3.0) {
        g += c;
        b += x;
    }
    else if (h_ < 4.0) {
        g += x;
        b += c;
    }
    else if (h_ < 5.0) {
        b += c;
        r += x;
    }
    else {
        b += x;
        r += c;
    }
    return new RGB(r, g, b);
}

endModule();
