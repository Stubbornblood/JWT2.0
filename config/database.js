const {createPool} = require('mysql')
require("dotenv").config()
//createPool 

const pool = createPool({

    host:process.env.host,
    user:"root",
    password:process.env.password,
    database:process.env.MYSQL_DB,
    connectionLimit:10


});

module.exports = pool;