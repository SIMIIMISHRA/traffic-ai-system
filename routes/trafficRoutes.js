const express=require("express")
const multer=require("multer")

const {uploadFile,getData}=require("../controllers/trafficController")

const router=express.Router()

const storage=multer.diskStorage({

 destination:(req,file,cb)=>{
  cb(null,"uploads")
 },

 filename:(req,file,cb)=>{
  cb(null,Date.now()+"_"+file.originalname)
 }

})

const upload=multer({storage})

router.post("/upload",upload.single("file"),uploadFile)

router.get("/data",getData)

module.exports=router