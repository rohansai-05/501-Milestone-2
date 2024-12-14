const fs=require('fs');
const http=require('http');


let homecontent="";
let projectcontent="";
let registration="";

fs.readFile("home.html",(err,home)=>{
    if(err){
        console.log(err);
    }
    homecontent=home;


})
fs.readFile("projects.html",(err,proj)=>{
    if(err){
        console.log(err);
    }
    projectcontent=proj;


})
fs.readFile("registrations.html",(err,reg)=>{
    if(err){
        console.log(err);
    }
    registration=reg;


})



http
.createServer((req,res)=>{
    let url=req.url;
    res.writeHeader(200,{"content-type":"text/html"});
    switch(url){
        case "/projects":
            res.write(projectcontent);
            res.end();
            break;
        case "/registrations":
            res.write(registration);
            res.end();
            break;
        default:
            res.write(homecontent);
            res.end();
            break;
    }
}).listen(5000);