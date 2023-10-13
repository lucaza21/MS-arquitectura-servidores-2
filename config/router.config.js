const express = require("express");
const router = express.Router();

//import posts controller
const posts = require("../controllers/posts.controller");

router.post("/api/posts", posts.create);
router.get("/api/posts", posts.list);
router.get("/api/posts/:id", posts.detail);
router.patch("/api/posts/:id", posts.update);
router.delete("/api/posts/:id", posts.delete);

router.get("/api/filter", posts.filter);

router.get("/", (req, res) => {
    res.json({ message: "Hello Worold" })
})

module.exports = router;