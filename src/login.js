var express = require('express');
var axios = require("axios");
var router = express.Router();

router.post('/', function(req, res) {
    /**
     * 1. 요청에서 aceess-token 을 꺼내온다
     * 2. console.log 로 찍어본다
     * 3. 페북으로 검증 요청을 해본다
     * 
     */
    
    console.log("accessToken = " + req.body.accessToken);

    axios.get('https://graph.facebook.com/debug_token', {
        params: {
            input_token: req.body.accessToken,
            access_token: "595064647565644|DCGUXH0bdPiTcwcwfgvm3s2QMQ0"
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    res.send({status:"ok"});
});



module.exports = router;