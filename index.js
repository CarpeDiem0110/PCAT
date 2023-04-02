const express = require("express");
 const path = require ('path')

const app = express();


app.use(express.static('public'))

const port = 3002;
/* We added nodemon because, when we change something in this file, we have to refresh the page again and again */ 


app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
} )

app.listen(port,() =>{
    console.log("Uygulama " + port + " portunda çalıştırılmaya başlandı.")
})