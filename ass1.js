const url="";
let datab={
    host:"localhost",
    user:"dishi",
    password:"welcome2508",
    database:"WPT",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(datab);

console.log("Database adventures");