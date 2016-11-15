var checkSignature = require("./lib/util");

var wechat = function(config, db){
    return function (req, res) {
        if(req.method == "GET"){
            if(checkSignature(req.query.signature, req.query.timestamp, req.query.nonce, config.token)){
                res.send(req.query.echostr);
            }else{
                res.send("error");
            }
        }else{
            var collection = db.collection('wechat-message');
            collection.insertOne(req.body, function(err, result) {
                console.log("Inserted wechat-message into the collection");
                res.json({error_code: 0, error_msg: "ok"});
            });
        }
    }

}

module.exports = wechat;
