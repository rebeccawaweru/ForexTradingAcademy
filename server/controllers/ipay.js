const crypto = require("crypto"); //for generating  the key
const { URLSearchParams } = require("url");
const axios = require('axios')

const ipay = async(req,res,next)=>{
const {email,phone,course,amount,type,description} = req.body;
    var live ="1";
    var oid = course; //should be unique
    var inv ="112020102292999";
    var ttl = amount;
    var tel = "254"+phone;
    var eml = email;
    var vid ="tasl";
    var curr = "KES";
    var p1 = description;
    var p2 = "KSH";
    var p3 = email;
    var p4 = type;
    var cbk = "https://forextradingacademy.co.ke/cbk"; //call back
    var cst = "1";
    var crl = "2";
    var hashkey ="W3g8EaV8cxc$hfv%z7Vqu$Cz%2*jFJTQ";
  
    //concatinating data-string
    data =
      live +
      oid +
      inv +
      ttl +
      tel +
      eml +
      vid +
      curr +
      p1 +
      p2 +
      p3 +
      p4 +
      cbk +
      cst +
      crl;
  
    console.log("dataString", data);
    //generating the key
    var hashstring = crypto
      .createHmac("sha1", hashkey)
      .update(data)
      .digest("hex");
    const param = new URLSearchParams({
      live:"1",
      oid:course,
      inv:"112020102292999",
      ttl:amount,
      tel:"254"+phone,
      eml: email,
      vid:"tasl",
      curr:"KES",
      p1: description,
      p2:"KSH",
      p3: email,
      p4: type,
      cbk: "https://forextradingacademy.co.ke/cbk",//call-back
      cst: "1",
      crl: "2",
      hsh: hashstring,
    }).toString();
  
    const url ="https://payments.ipayafrica.com/v3/ke" + "?" + param; //url generated append params
     //open this url on another tab
   res.send(url)
}
const ipay2 = async(req,res,next)=>{
  const {email,phone,course,amount,type,description} = req.body;
      var live ="1";
      var oid = course; //should be unique
      var inv ="112020102292999";
      var ttl = amount;
      var tel = phone;
      var eml = email;
      var vid ="tasl";
      var curr = "USD";
      var p1 = description;
      var p2 = "USD";
      var p3 = email;
      var p4 = type;
      var cbk = "https://forextradingacademy.co.ke/cbk"; //call back
      var cst = "1";
      var crl = "2";
      var hashkey ="W3g8EaV8cxc$hfv%z7Vqu$Cz%2*jFJTQ";
    
      //concatinating data-string
      data =
        live +
        oid +
        inv +
        ttl +
        tel +
        eml +
        vid +
        curr +
        p1 +
        p2 +
        p3 +
        p4 +
        cbk +
        cst +
        crl;
    
      console.log("dataString", data);
      //generating the key
      var hashstring = crypto
        .createHmac("sha1", hashkey)
        .update(data)
        .digest("hex");
      const param = new URLSearchParams({
        live:"1",
        oid:course,
        inv:"112020102292999",
        ttl:amount,
        tel:phone,
        eml: email,
        vid:"tasl",
        curr:"USD",
        p1: description,
        p2:"USD",
        p3: email,
        p4: type,
        cbk: "https://forextradingacademy.co.ke/cbk",//call-back
        cst: "1",
        crl: "2",
        hsh: hashstring,
      }).toString();
    
      const url ="https://payments.ipayafrica.com/v3/ke" + "?" + param; //url generated append params
       //open this url on another tab
     res.send(url)
  }

const callback = async(req,res)=>{
  const response = await req.body;
  res.send (response);
}

module.exports = {ipay,ipay2,callback}