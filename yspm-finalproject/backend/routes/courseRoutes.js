const router = require("express").Router();
const multer = require("multer");
const ctrl = require("../controllers/courseController");

//multer storage
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + "-"+file.originalname);
    },

});
const upload = multer({storage:storage});
router.post("/",upload.single("image"), ctrl.addcourse);
router.get("/", ctrl.getcourses);
router.get("/:id", ctrl.getSingleCourse);
router.delete("/:id", ctrl.deletecourses);

module.exports = router;