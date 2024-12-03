const express = require("express");

const router = express.Router();

// only admin can access 
router.get("/admin", (req,res)=>{
    res.json({ message: "Welcome Admin"});
});
//only student can access
router.get("student",(req, res) => {
   res.json({message: "Welcome Student"});
});
//only researcher
router.get("researcher",(req,res)=>{
    res.join({message: "Welcome researcher"});
});

//randomuser
router.get("randomuser",(req,res)=>{
  res.join({message: "Welcome"});
})

module.exports = router;