const express = require("express");
const app = express();
 
app.get("/",(req, res)=>{
    res.send(
        "<h1>Contosa</h1>"
        +"<hr/>"
        +"<h3>It is a multinational company has their 12 Offices all over world</h3>"
        
);
});
app.get("/aboutus",(req, res)=>{
    res.send(
        "<h1>Contosa </h1>"
        +"<hr/>"
        +"<h3>Contact Details:</h3>"
        + "<br/>"
        + "<ul>"
        +"<li>Address: Jalgaon</li>"
        +"<li>Contact No: 8329607449</li>"
        +"<li>Email Id : vaibhavd777vd@gmail.com</li>"
       
        + "</ul>"
);
});

app.listen(9000,()=>{
    console.log("running on port no 9000");
});