const multer = require('multer')

const storage = multer.diskStorage({
    destination :(req,file,callback)=>{
        callback(null,'./Uploads')
    },
    filename :(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})
const filefilter  = (req,file,callback) =>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpg'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback (new Error ("only png,jpg,jpeg files are allowed!!!"))
    }
}
const multerConfig = multer({
    storage,filefilter
})
module.exports = multerConfig