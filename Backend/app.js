const express=require("express");
const app=express()
Port=3000 | process.env.Port;

app.listen(Port, function(){
console.log("server is running");

})