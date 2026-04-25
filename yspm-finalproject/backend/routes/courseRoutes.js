const router = require("express").Router();
const ctrl = require("../controllers/courseController");

router.post("/",ctrl.addcourse);
router.get("/",ctrl.getcourses);
router.delete("/:id",ctrl.deletecourses);

module.exports = router;
