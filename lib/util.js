var crypto = require("crypto");

var checkSignature = function (signature, timestamp, nonce, token) {

    var shasum = crypto.createHash('sha1');
    var arr = [token, timestamp, nonce].sort();
    shasum.update(arr.join(''));

    return shasum.digest('hex') === signature;
};

module.exports = checkSignature;
