var mysql      = require('mysql');
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
    console.log(results[0].user_name)
});

connection.end();