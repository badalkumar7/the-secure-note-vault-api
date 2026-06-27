const rateLimit = require("express-rate-limit");

exports.authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: {
        status: 429,
        error: "Too many attempts",
        message: "Too many login/registration attempts from this IP. Please try again after 15 minutes."
    },
    standardHeaders: true, 
    legacyHeaders: false, 
});

exports.apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 30, 
    message: {
        status: 429,
        error: "Too many requests",
        message: "You are creating or viewing notes too fast. Slow down!"
    },
    standardHeaders: true,
    legacyHeaders: false,
});
