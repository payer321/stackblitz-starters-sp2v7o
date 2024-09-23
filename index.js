const express = require('express');
const { resolve } = require('path');
let cors=require('cors');
const app = express();
const port = 3010;

app.use(cors());

app.get("/",(req,res)=>{
  res.send("Welcome to stock portfolio analysis API!")
})

app.get("/calculate-returns",(req,res)=>{
  let boughtAt=parseFloat(req.query.boughtAt);
  let marketPrice=parseFloat(req.query.marketPrice);
  let quantity=parseInt(req.query.quantity);
  let total=(marketPrice-boughtAt)*quantity;
  res.send(total.toString());
})

app.get("/total-returns",(req,res)=>{
  let stock1=parseFloat(req.query.stock1);
  let stock2=parseFloat(req.query.stock2);
  let stock3=parseFloat(req.query.stock3);
  let stock4=parseFloat(req.query.stock4);
  let totalReturn=(stock1+stock2+stock3+stock4);
  res.send(totalReturn.toString());
})

app.get("/calculate-return-percentage",(req,res)=>{
  let boughtAt=parseFloat(req.query.boughtAt);
  let returns=parseFloat(req.query.returns);
  let returnPercentage=(returns/boughtAt)*100;
  res.send(returnPercentage.toString());
})

app.get("/total-return-percentage",(req,res)=>{
  let stock1=parseFloat(req.query.stock1);
  let stock2=parseFloat(req.query.stock2);
  let stock3=parseFloat(req.query.stock3);
  let stock4=parseFloat(req.query.stock4);
  let totalReturnPercentage=(stock1+stock2+stock3+stock4);
  res.send(totalReturnPercentage.toString())
})

app.get("/status",(req,res)=>{
  let returnPercentage=parseFloat(req.query.returnPercentage);
  if(returnPercentage>0){
    res.send("Profit");
  }
  else {
    res.send("Loss");
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
