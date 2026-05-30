const express = require('express');
const app = express();
const port = 9999;

app.listen(port, ()=> {
    console.log("server is running on ", port);
});
app.get('/api/get', (res, req)=>{
    req.json({
        "message":"test successfully", 
        "id":"md001"      
    });
});
app.post('/api/post', (req, res)=>{
    //req.body
    body = req.body;
    //req.headers
    headers = req.headers;
    headerID = req.headers['headerID'];
    //req.query
    param = req.query.paramID
        
    res.json({
        'message':'post',
        'body':body,
        'headers': headers,
        'headerID':headerID,
        'param':param
    })

});