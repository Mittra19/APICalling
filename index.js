const express = require("express");
const https=require("https");
const app=express();
const dotenv=require("dotenv");

app.get("/", (req, res)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.API_KEY}`


  https.get(url, (response)=>{
    response.on('data', (data)=>{
      const weather = JSON.parse(data);
      res.write('<html>');
      res.write('<body>');
      res.write("hello");
      console.log(weather);
      res.write("<h1>The temparature is "+weather.main.temp+"</h1>");
      res.write('</body>');
      res.write('</html>');
      res.end();
    })
  })
})

app.listen("3000", (req, res)=>{
  console.log("Server is running");
})