let datab={
    host:"localhost",
    user:"dishi",
    password:"welcome2508",
    database:"WPT",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let resourceId=10;
let resourcename="all";
let status=true;
con.query("insert into resource (resourceId,resourcename,status) values (?,?,?)",[resourceId,resourcename,status],(err,res)=>{
    if(err){
        console.log("Error while inserting");
    }else{
        console.log("Rows Inserted");
    }
});