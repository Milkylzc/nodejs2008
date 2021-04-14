const express = require('express')  //引入express模块
const mysql = require('mysql')    //引入mysql模块
const app = express()    //调用express()方法
const port = 8080         //服务运行的端口

app.get('/user',function(req, res){
    res.send("欢迎访问用户接口")
})

app.get('/list',(req,res)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : '2008es6'
    });

    connection.connect();
    connection.query('select user_id,user_name from p_users limit 10', function (error, results, fields) {
        // if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        // console.log(results)
        res.send(JSON.stringify(results))
    });
    connection.end();
})

app.get('/', (req, res) => {     //路由写法

    const list = [
        {
            userid : 1001,
            name : "mabaishuai",
            age : 11,
        },
        {
            userid : 1002,
            name : "erbi",
            age : 22,
        },
        {
            userid : 1003,
            name : "shaba",
            age : 33,
        },
    ]

    // 将数字转为json字符串

    res.send(JSON.stringify(list))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})